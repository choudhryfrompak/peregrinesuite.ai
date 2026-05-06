variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project slug used in resource names"
  type        = string
  default     = "nextjs"
}

variable "environment" {
  description = "Deployment environment (prod/staging)"
  type        = string
  default     = "prod"
}