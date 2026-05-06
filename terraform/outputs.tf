output "alb_dns_name" {
  description = "Public ALB DNS — point your domain CNAME here"
  value       = aws_lb.main.dns_name
}

output "ecr_repo_url" {
  description = "Push your container image here"
  value       = aws_ecr_repository.app.repository_url
}