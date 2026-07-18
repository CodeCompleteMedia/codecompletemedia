# CodeCompleteMedia

Marketing/portfolio site for CodeCompleteMedia — a full-service web studio.
Built per [`PROJECT_PLAN.md`](./PROJECT_PLAN.md).

## Stack

- **[Astro](https://astro.build)** — content/marketing-focused, ships zero JS by default.
- **Tailwind CSS** — design tokens; the hand-tuned design system lives in
  `src/styles/global.css` and scoped component styles (Tailwind preflight is off).
- **MDX content collections** — case studies, services, and blog posts are
  version-controlled files in `src/content/`, validated by Zod schemas.
- **TypeScript + ESLint + Prettier**.
- **Vercel** — Git-based deploys; the contact API runs as a serverless function.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally                   |
| `npm run lint`    | Lint `.js` / `.ts` / `.astro`               |
| `npm run format`  | Format with Prettier                        |

## Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer
│   └── sections/    # Hero, Marquee, Services, Work, Stats, Process,
│                    # Manifesto, Testimonials, Insights, About, Contact
├── content/         # MDX collections (case-studies, services, blog) + config.ts
├── layouts/         # BaseLayout, BlogLayout
├── pages/
│   ├── index.astro      # Single-page home (composed from sections)
│   ├── blog/            # /blog index + /blog/[slug]
│   └── api/contact.ts   # Serverless contact handler (STUB)
├── scripts/site.ts  # Client behavior (reveal, nav, menu, accordions, form)
├── styles/global.css
└── consts.ts        # Nav, social, SEO constants
```

The home page is a single scrolling page with in-page anchors (`/#services`,
`/#work`, `/#about`, `/#contact`). The blog is a set of real routes.

## Content

Add a case study, service, or post by dropping an `.mdx` file in the matching
`src/content/` folder. Frontmatter is type-checked against the Zod schemas in
`src/content/config.ts`.

## Contact form

The form posts to `src/pages/api/contact.ts` (a serverless function), which
delivers each submission to whichever channels are configured via env vars:

- **Email (Resend):** set `RESEND_API_KEY`, `CONTACT_NOTIFY_TO`, and
  `CONTACT_NOTIFY_FROM`. Each submission is emailed to you, with the sender's
  address as reply-to.
- **Google Sheet:** deploy [`docs/google-sheet-apps-script.gs`](./docs/google-sheet-apps-script.gs)
  as a Web App and set `GOOGLE_SHEET_WEBHOOK_URL` to its `/exec` URL. Each
  submission is appended as a row.

Both are optional and independent — configure one or both. If neither is set
(e.g. local dev with no `.env`), the form still works and the submission is
logged server-side with a warning. No database required.

**Setup:**

1. Copy `.env.example` to `.env` and fill in the values (a `.env` with blanks is
   already created for you).
2. Resend: create an API key at https://resend.com, and for production verify
   your domain so you can send from `website@codecompletemedia.com`.
3. Google Sheet: follow the steps at the top of `docs/google-sheet-apps-script.gs`.
4. In Vercel, add the same env vars under Project → Settings → Environment
   Variables for production.

## Deploy

Connect the repo to Vercel. The `@astrojs/vercel` adapter is configured; the
site builds statically and the contact route is served on demand. Set the
contact env vars in the Vercel project settings before wiring delivery.
