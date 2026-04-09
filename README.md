# Peregrine Suite AI

Marketing website for **Peregrine Suite AI** — an AI-powered agent building platform that automates business operations, saves time, and drives higher ROI.

**Live:** [peregrinesuite.ai](https://www.peregrinesuite.ai)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Deployment](#deployment)
  - [Google Cloud Run](#google-cloud-run)
  - [Local Docker](#local-docker)
- [Responsive Design](#responsive-design)
- [License](#license)

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Inline Styles |
| Fonts | Mazzard H (self-hosted) + Inter (Google Fonts) |
| Booking Widget | Cal.com Embed |
| Containerization | Docker (multi-stage) |
| Deployment Target | Google Cloud Run |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, trusted logos marquee, industry tabs, integrations, blogs, and CTA |
| `/practice-suite` | AI agents for accounting firms — payroll, bookkeeping, ASIC compliance, tax returns |
| `/concierge-agent` | AI voice concierge agent for Australian businesses |
| `/agents` | Agents overview |
| `/case-studies` | Client case studies |
| `/blog` | Blog listing and individual articles |
| `/contact-us` | Contact page with Cal.com booking calendar |

---

## Project Structure

```
peregrine/
└── site/
    ├── public/
    │   ├── fonts/                  # Mazzard H woff2 (weights 400–800)
    │   └── images/
    │       ├── concierge/          # Concierge agent page assets
    │       └── framer/             # Practice suite page assets
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx          # Root layout (Navbar + Footer wrapper)
    │   │   ├── globals.css         # Global styles, animations, responsive rules
    │   │   ├── page.tsx            # Home
    │   │   ├── agents/             # /agents
    │   │   ├── blog/               # /blog + individual posts
    │   │   ├── case-studies/       # /case-studies
    │   │   ├── concierge-agent/    # /concierge-agent
    │   │   ├── contact-us/         # /contact-us
    │   │   └── practice-suite/     # /practice-suite
    │   │
    │   └── components/
    │       ├── Navbar.tsx           # Sticky navbar with hover dropdown
    │       ├── Footer.tsx           # Site footer
    │       └── ScrollFadeIn.tsx     # Scroll-triggered fade-in animation
    │
    ├── Dockerfile                   # Multi-stage Docker build
    ├── .dockerignore
    ├── next.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)

### Installation

```bash
cd site
npm install
```

### Development

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. Pages auto-refresh on file changes.

### Production Build

```bash
npm run build
npm start
```

---

## Deployment

### Google Cloud Run

The included Dockerfile uses a **2-stage build** optimized for Cloud Run:

| Stage | Purpose | Details |
|-------|---------|---------|
| `builder` | Build application | Node 18 Alpine, runs `next build` with static export |
| `runner` | Serve static files | nginx:alpine (~50MB total image) on port 8080 |

**Build and deploy:**

```bash
# Build container image
gcloud builds submit --tag gcr.io/YOUR_PROJECT/peregrine-site ./site

# Deploy to Cloud Run
gcloud run deploy peregrine-site \
  --image gcr.io/YOUR_PROJECT/peregrine-site \
  --platform managed \
  --region australia-southeast1 \
  --allow-unauthenticated
```

### Local Docker

```bash
cd site
docker build -t peregrine-site .
docker run -p 8080:8080 peregrine-site
```

Open **http://localhost:8080** to verify.

---

## Responsive Design

The site is fully responsive with three breakpoints:

| Breakpoint | Target | Behavior |
|------------|--------|----------|
| < 810px | Mobile | Single-column layouts, stacked grids, reduced padding |
| 810px – 1199px | Tablet | Two-column grids, adjusted spacing |
| >= 1200px | Desktop | Full multi-column layout |

---

## License

**Private** — All rights reserved.
