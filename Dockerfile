# peregrinesuite.ai — production container
#
# Two-stage: build the static Next.js export, serve it with nginx on :8080.
# Pinned to linux/amd64 because the Deplexify deploy worker targets x86_64.
# Node 20 LTS for compatibility with current Next.js + tooling.

# ---- Stage 1: Build ----
FROM --platform=linux/amd64 node:20-alpine AS builder
WORKDIR /app

# Disable interactive prompts and hooks that break in a clean container
ENV NEXT_TELEMETRY_DISABLED=1 \
    HUSKY=0 \
    CI=1 \
    NPM_CONFIG_AUDIT=false \
    NPM_CONFIG_FUND=false

# Install deps first for layer caching. --ignore-scripts skips husky-style
# postinstall hooks that need .git (which isn't in this build context).
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# App source
COPY . .

# next build with output: 'export' (see next.config.mjs) emits to ./out
RUN npm run build && test -d out

# ---- Stage 2: Serve ----
# Use nginxinc/nginx-unprivileged — the official non-root nginx image.
# It already runs as the nginx user, has /tmp/nginx.pid configured,
# /var/cache/nginx writable, and listens on 8080 by default. The
# "stable-alpine" tag follows nginx's stable line.
#
# Why not nginx:stable-alpine + USER nginx: nginx:stable-alpine's master
# process tries to write /run/nginx.pid, which the non-root nginx user
# can't open. The previous Dockerfile chowned /var/run, but new pid
# files created by nginx land in /run, not /var/run, and the directory
# itself isn't writable by the nginx user → container exited immediately
# with "open() /run/nginx.pid failed (13: Permission denied)".
FROM --platform=linux/amd64 nginxinc/nginx-unprivileged:stable-alpine
USER root
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html /etc/nginx/conf.d/default.conf
USER nginx
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
