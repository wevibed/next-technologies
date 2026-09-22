# AGENTS.md

## Project Context

This is a standalone Vite + React static site for NEXT IT Technologies. It
has no backend and no Base44 dependency (see `MIGRATION.md` for the eject
history). Treat it as user-owned application code, keep changes focused on
the user's request, and preserve existing project conventions.

## Key Files

- `src/` — frontend application source
- `src/config/site.js` — business contact details / branding, single source
  of truth
- `src/data/` — static content (services, projects)
- `vite.config.js` — plain Vite + React config

## Working Notes

- `npm run dev` starts the app; no separate backend process is needed.
- Run the relevant checks from `package.json` (`npm run lint`, `npm run build`)
  before finishing code changes.
