# CodeCompleteMedia — Website Refresh: Project Plan

> Stack decisions and scaffolding plan for the CodeCompleteMedia agency/portfolio site refresh.
> Hand this file to a new conversation to bootstrap the build.

## Summary

A refresh of the CodeCompleteMedia agency/portfolio website. The site's primary jobs are to showcase work (case studies), describe services, and convert prospects via a contact form. It must load fast and look polished — the site itself is a credibility signal to prospective clients.

## Locked-in stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Purpose-built for content/marketing sites. Ships zero JS by default → excellent Lighthouse scores. Component "islands" allow React/Svelte/Vue only where interactivity is needed. |
| Content | **MDX (in-repo content collections)** | Version-controlled, no external service or cost, no API to break. Case studies/blog are files you can diff and roll back. Can layer Decap/TinaCMS on the same files later if a non-dev editing UI is needed. |
| Styling | **Tailwind CSS** | Fast to build, consistent design tokens, no dead CSS (purged at build). Large template ecosystem to borrow from while iterating on a fresh design. |
| Hosting | **Vercel** | Git-based deploys, preview URLs per PR, zero infra. |
| Tooling | **TypeScript + ESLint + Prettier** | Full dev tooling for consistency and safety. |

## Database

**Decision: start with NO database.**

All content (case studies, services, about, blog) lives as MDX in the repo and renders to static HTML at build time. A database only earns its place once there's dynamic, user-generated, or frequently-changing data that can't sit in the repo.

Handling the dynamic needs without a DB:

- **Contact form** — Vercel serverless function that emails the submission and/or pushes to the CRM (HubSpot is connected). No DB needed; submissions are delivered, not queried.
- **Newsletter signups** — pipe directly into the email platform (Klaviyo or HubSpot, both connected) via API from a serverless function. The email tool is the store of record.

**If persistence is later required** (e.g. storing submissions to query, a job board, gated content, user-submitted testimonials, owned analytics), add in this order of preference:

1. **Vercel Postgres (Neon)** — native to the host, serverless, generous free tier. Default choice.
2. **Supabase** — Postgres + auth + storage + APIs. Choose if user accounts, a client portal, or file uploads are coming.
3. **Turso / Cloudflare D1 (SQLite)** — lightweight edge DB for modest, low-write workloads.
4. **Notion as a backing store** (connected) — read at build time for lightweight datasets a non-dev edits in a familiar UI.

Adding Vercel Postgres later requires no re-architecting, so deferring this decision is safe.

## Proposed folder structure

```
codecompletemedia/
├── public/                     # Static assets served as-is
│   ├── fonts/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/             # Reusable .astro / framework components
│   │   ├── ui/                 # Buttons, cards, inputs (design-system primitives)
│   │   ├── sections/           # Hero, ServicesGrid, CaseStudyList, CTA, Footer
│   │   └── layout/             # Header, Nav, Footer wrappers
│   ├── layouts/                # Page shells (BaseLayout, CaseStudyLayout, BlogLayout)
│   ├── content/                # MDX content collections
│   │   ├── case-studies/       # one .mdx per project
│   │   ├── services/           # one .mdx per service
│   │   ├── blog/               # optional blog posts
│   │   └── config.ts           # content collection schemas (Zod)
│   ├── pages/                  # File-based routing
│   │   ├── index.astro         # Home
│   │   ├── work/
│   │   │   ├── index.astro      # Case study index
│   │   │   └── [slug].astro     # Dynamic case study page
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── api/                 # Serverless endpoints
│   │       └── contact.ts       # Contact form handler → email/HubSpot
│   ├── styles/                 # global.css, Tailwind layer customizations
│   ├── lib/                    # Helpers (formatting, API clients, SEO utils)
│   └── consts.ts               # Site-wide constants (nav, social, metadata)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── .eslintrc / eslint.config.js
├── .prettierrc
├── .env.example                # Document required env vars (no secrets)
├── .gitignore
├── package.json
└── README.md
```

### Notes on the structure

- **`src/content/` with `config.ts`** is the heart of it — define Zod schemas for case studies (title, client, summary, hero image, tags, date, etc.) so content is type-safe and validated at build.
- **`components/ui` vs `components/sections`** keeps small primitives separate from page-level composed blocks — easier to maintain a consistent design system.
- **`pages/api/contact.ts`** is the only "backend" at launch. Set form-target secrets (HubSpot token, email API key) as Vercel environment variables; mirror their names in `.env.example`.
- **`consts.ts`** centralizes nav links, social URLs, and default SEO so they aren't duplicated across pages.

## Recommended next steps

1. Scaffold the Astro project with the Tailwind + MDX integrations and TypeScript.
2. Define content collection schemas in `src/content/config.ts`.
3. Build the base layout, header, and footer.
4. Build home, work index + case study template, services, about, contact.
5. Wire the contact form serverless function to HubSpot/email.
6. Add SEO (meta, OpenGraph, sitemap, robots), analytics, and a favicon/OG image.
7. Connect the repo to Vercel; confirm preview deploys and production domain.

## Open questions to resolve before/at build

- Any dynamic features planned that would justify provisioning a database at launch? (Default assumption: no.)
- Contact form destination — HubSpot, plain email, or both?
- Is a blog in scope for v1, or deferred?
- Existing brand assets (logo, fonts, color palette) to carry over, or part of the refresh?
- Need a non-developer editing UI now (Decap/Tina), or is in-repo MDX editing fine?
