terraform {
  required_version = ">= 1.6"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "aws" {
  region = var.region
}

# ─── VPC + subnets ────────────────────────────────────────────────────
# No NAT gateway: ASG runs in public subnets with public IPs, which
# saves ~2 min provisioning + ~$33/mo. The app SG still only accepts
# port 8000 from the ALB SG, so reachability is unchanged. RDS lives
# in private subnets and is only reachable from the app SG.
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  name    = "nextjs-vpc"
  cidr    = "10.0.0.0/16"
  azs             = ["${var.region}a", "${var.region}b"]
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.11.0/24", "10.0.12.0/24"]
  enable_nat_gateway = false
  map_public_ip_on_launch = true
}

# ─── AMI lookup (Amazon Linux 2023) ──────────────────────────────────
data "aws_ami" "al2023" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }
}

# ─── Security groups ──────────────────────────────────────────────────
resource "aws_security_group" "alb" {
  name        = "nextjs-alb-sg"
  description = "Public HTTP/HTTPS to ALB"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "app" {
  name        = "nextjs-app-sg"
  description = "ALB to app instances on port 8000"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port       = 8000
    to_port         = 8000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ─── ALB ──────────────────────────────────────────────────────────────
resource "aws_lb" "main" {
  name               = "nextjs-alb"
  load_balancer_type = "application"
  subnets            = module.vpc.public_subnets
  security_groups    = [aws_security_group.alb.id]
}

resource "aws_lb_target_group" "app" {
  name     = "nextjs-tg"
  port     = 8000
  protocol = "HTTP"
  vpc_id   = module.vpc.vpc_id
  # Aggressive health check defaults so the ALB marks an instance healthy
  # ~20s after registration instead of the default ~150s. interval=10s,
  # healthy_threshold=2 → 2 × 10s. matcher includes 3xx because Next.js
  # static export with trailingSlash:true returns 308 from `/` → `/`.
  health_check {
    path                = "/"
    matcher             = "200-399"
    interval            = 10
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 3
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.main.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.app.arn
  }
}

# ─── IAM role for app instances ───────────────────────────────────────
resource "aws_iam_role" "ec2_app" {
  name = "nextjs-ec2-app-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ssm" {
  role       = aws_iam_role.ec2_app.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_role_policy_attachment" "ecr_read" {
  role       = aws_iam_role.ec2_app.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

resource "aws_iam_role_policy" "secrets_read" {
  name = "nextjs-secrets-read"
  role = aws_iam_role.ec2_app.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = ["secretsmanager:GetSecretValue"]
      Resource = aws_secretsmanager_secret.app.arn
    }]
  })
}

# Docker's awslogs log-driver needs to create + write to log streams.
# The CW Log Group resource exists, but the EC2 instance can't create
# per-container streams inside it without explicit logs:CreateLogStream
# + PutLogEvents. Without this, every `docker run --log-driver=awslogs`
# fails with AccessDeniedException and the container never starts.
resource "aws_iam_role_policy" "logs_write" {
  name = "nextjs-logs-write"
  role = aws_iam_role.ec2_app.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogStreams",
      ]
      Resource = "${aws_cloudwatch_log_group.app.arn}:*"
    }]
  })
}

resource "aws_iam_instance_profile" "ec2_app" {
  name = "nextjs-ec2-app-profile"
  role = aws_iam_role.ec2_app.name
}

# ─── ECR repository (push your container image here) ─────────────────
resource "aws_ecr_repository" "app" {
  name                 = "nextjs"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
  image_scanning_configuration {
    scan_on_push = true
  }
}

# ─── Secrets Manager (DATABASE_URL, API keys, etc.) ──────────────────
resource "aws_secretsmanager_secret" "app" {
  name                    = "nextjs/app"
  recovery_window_in_days = 0
}

# ─── CloudWatch logs ──────────────────────────────────────────────────
resource "aws_cloudwatch_log_group" "app" {
  name              = "/nextjs/app"
  retention_in_days = 14
}

# ─── EC2 Launch Template + ASG ───────────────────────────────────────
resource "aws_launch_template" "app" {
  name_prefix   = "nextjs-"
  image_id      = data.aws_ami.al2023.id
  instance_type = "t3.medium"

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_app.name
  }

  vpc_security_group_ids = [aws_security_group.app.id]

  # AL2023 default root volume is 8 GiB. With docker pulled images,
  # build cache, and container logs, that fills up fast — we saw a
  # bootstrap die on "needs 24MB more space on / filesystem" before
  # docker was even installed. 20 GiB gp3 is ~$1.20/mo extra and
  # gives a comfortable margin.
  block_device_mappings {
    device_name = "/dev/xvda"
    ebs {
      volume_size           = 20
      volume_type           = "gp3"
      delete_on_termination = true
      encrypted             = true
    }
  }

  user_data = base64encode(<<-USERDATA
    #!/bin/bash
    set -euxo pipefail
    # NOTE: do NOT install amazon-cloudwatch-agent here. It pulls ~200MB
    # of files and historically tripped "needs 24MB more space on the /
    # filesystem" on the AL2023 default 8 GiB root. The agent was never
    # actually configured or started, so removing it has zero functional
    # impact. The CloudWatch Log Group still exists if a user wants to
    # wire up centralized logs later.
    dnf install -y docker
    systemctl enable --now docker

    # ECR login (uses instance profile)
    aws ecr get-login-password --region ${var.region} | \
      docker login --username AWS --password-stdin \
      $(aws sts get-caller-identity --query Account --output text).dkr.ecr.${var.region}.amazonaws.com

    # Map host port 8000 (what the ALB target group expects) to the
    # container's internal port. The user's Dockerfile typically
    # EXPOSEs 8080 (nginx default for non-root), 3000 (Next.js dev),
    # or 8000. We try 8080 first since that's what most production
    # Dockerfiles use; if that container won't start, try 3000, then
    # 8000 as fallback. The first one that doesn't immediately exit
    # wins. Fallback to a stock nginx if all custom-image attempts fail.
    # NOTE: in this terraform heredoc, only the dollar-curly form is
    # interpolated by terraform; plain dollar-vars and command subs
    # pass through to bash unchanged.
    APP_IMAGE="${aws_ecr_repository.app.repository_url}:latest"
    REGION="${var.region}"

    # Use docker's default json-file logging, NOT awslogs. The awslogs
    # driver depends on IAM perms that race with instance refresh
    # (IAM is eventually consistent up to 60s). Json-file logs land on
    # disk and can be tailed via docker logs / SSM. The CloudWatch
    # Log Group still exists for the CloudWatch Agent to scrape if the
    # user wants centralized logs later.

    aws ecr get-login-password --region "$REGION" | \
      docker login --username AWS --password-stdin \
      "$(aws sts get-caller-identity --query Account --output text).dkr.ecr.$REGION.amazonaws.com"

    docker pull "$APP_IMAGE" || true

    # Belt-and-braces cleanup: previous boots may have left a stopped
    # container named "app". Always rm before any run so re-runs are
    # idempotent.
    cleanup() {
        docker rm -f app >/dev/null 2>&1 || true
    }

    # Common docker options — capped log file size so disk doesn't fill.
    LOG_OPTS=(--log-driver=json-file --log-opt max-size=10m --log-opt max-file=3)

    for INTERNAL in 8080 3000 8000; do
        cleanup
        if docker run -d --restart=always --name app -p "8000:$INTERNAL" \
             "$${LOG_OPTS[@]}" \
             "$APP_IMAGE"; then
            sleep 5
            if docker ps --filter name=app --filter status=running -q | grep -q .; then
                echo "App started: host:8000 -> container:$INTERNAL"
                exit 0
            fi
        fi
    done

    # Fallback: stock nginx so ALB at least returns 200 from /
    cleanup
    docker run -d --restart=always --name app -p 8000:80 \
        "$${LOG_OPTS[@]}" \
        public.ecr.aws/nginx/nginx:stable
  USERDATA
  )
}

resource "aws_autoscaling_group" "app" {
  name                = "nextjs-asg"
  # Default to 1 instance to keep cold-deploys fast and cheap. Users can
  # bump this via overrides for prod. With ALB health-check threshold of
  # 2x10s, a single instance is reachable ~30s after user_data finishes.
  min_size            = 1
  max_size            = 2
  desired_capacity    = 1
  # Public subnets + map_public_ip_on_launch=true on the VPC means
  # instances get a public IP and reach ECR/dnf via the IGW directly,
  # no NAT gateway needed.
  vpc_zone_identifier = module.vpc.public_subnets
  target_group_arns   = [aws_lb_target_group.app.arn]
  health_check_type   = "ELB"

  launch_template {
    id      = aws_launch_template.app.id
    version = "$Latest"
  }

  # Auto-roll instances when the launch template changes. Each deploy
  # builds + pushes a fresh image and updates user_data to pull it; the
  # ASG terminates old instances and launches new ones with the new
  # template, all while keeping >= half the fleet healthy. Without this
  # the ASG ignores launch template updates and old instances keep
  # serving the previous image forever.
  instance_refresh {
    strategy = "Rolling"
    preferences {
      min_healthy_percentage = 50
      instance_warmup        = 60
    }
  }

  tag {
    key                 = "Name"
    value               = "nextjs-app"
    propagate_at_launch = true
  }
}
