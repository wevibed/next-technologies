# NEXT IT Technologies — Website

A standalone Vite + React marketing site for NEXT IT Technologies (CCTV,
Wi-Fi, Starlink and IT infrastructure installations in Harare, Zimbabwe).

This project was originally built on Base44 and has since been ejected into a
plain, self-contained Vite app with no Base44 (or any other) backend
dependency. See `MIGRATION.md` for details of that migration.

## Requirements

- Node.js 18+ (20+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Environment variables

None are required to build or run the site. There is one optional variable —
see `.env.example`:

- `VITE_FORM_ENDPOINT` — if set, the "Request a Quote" form on `/contact`
  POSTs to this URL (Formspree, a Cloudflare Worker, an email API, etc.).
  Until it's set, the form falls back to WhatsApp/email links so enquiries
  are never lost.

Copy `.env.example` to `.env.local` and fill in values for local testing; on
Cloudflare Pages, set the same variable under the project's Environment
Variables settings.

## Deploying to Cloudflare Pages

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (repo root)
- **Environment variables:** `VITE_FORM_ENDPOINT` (optional, see above)

This is a fully static site — no Cloudflare Workers/Functions are required.

## Project structure

- `src/pages/` — routed pages (Home, Services, Service detail, Solutions,
  Projects, About, Contact)
- `src/components/` — shared UI and section components
- `src/components/ui/` — shadcn/ui-style primitives
- `src/config/site.js` — single source of truth for business contact details
  and branding strings
- `src/data/` — static content (services, projects)
