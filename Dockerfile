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
FROM --platform=linux/amd64 nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
