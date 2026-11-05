# Dey Intelligence Website

Personal website and portfolio for Abhishek Dey, built with
[vinext](https://github.com/cloudflare/vinext), Next.js, and optional
Cloudflare D1 + Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- edit site code under `app/`
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: build the starter and verify its rendered loading skeleton
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Cloudflare Pages

The production website is configured as a static Next.js export for Cloudflare
Pages. Connect the GitHub repository in **Workers & Pages** and use:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: repository root
- Production branch: `main`
- Node.js version: `22.13.0` (pinned in `.nvmrc`)

No application environment variables are required. `NEXT_PUBLIC_SITE_URL` is an
optional build-time override and should be `https://deyintelligence.com` if set.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)

## Adding a publication

Add an object to `publications` in `app/publications-data.ts` (fields are typed;
see the placeholder entries, ids starting `placeholder-`). The `/publications`
filters, counts and JSON-LD are derived from that file. "Abhishek Dey" is bolded
automatically. Tokens (colors, fonts, width) live at the top of
`app/publications/publications.css`.
