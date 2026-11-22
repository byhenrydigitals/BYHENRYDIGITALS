# BYHENRYDIGITALS (BHD) Website

Official web application for **BYHENRYDIGITALS (BHD)** — *Digital Solutions. Global Impact.* / *We Build Digital Value That Sells.*

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Vite 8
- **Icons**: `lucide-react`
- **Local / Node Server**: Express (`server.ts`) via `tsx`, serving Vite middleware in development and `dist/` + `/api/*` in production
- **Cloudflare Pages Edge Functions**: `functions/api/contact.ts` and `functions/api/health.ts` (zero-config Workers runtime endpoints for GitHub + Cloudflare Pages deployments)

## Pages & Features

- **Home (`/`)**: Hero, value pillars, digital products overview, services overview, affiliate programme overview, resources spotlight, international language vision, Vanessa Detailed BHD FAQ intro, and contact CTA.
- **About (`/about`)**: Mission, vision, operating principles, and leadership profile for Henry (Coach Henry).
- **Digital Products (`/products`)**: Organised catalogue featuring *Clicks-to-Cash*, *Global Monetisation*, and *Remote Jobs for Under 18* linked to the official Selar store (`https://selar.com/m/BYHENRYDIGITALS`).
- **Affiliate Programme (`/affiliate-programme`)**: Verified programme rules (₦0 signup fee, no mandatory purchase, no MLM, 35% commission on eligible Selar sales, optional ₦8,000 Starter Kit) with enquiries routed through BHD's official Contact channels.
- **Services (`/services`)**: Website design & development, landing pages, digital presence development, no-code & AI-assisted solutions, and digital business support.
- **Resources & Blog (`/resources`)**: Reusable article schema and topic filtering across 7 categories with complete editorial guides.
- **Vanessa — Detailed BHD FAQ (Persistent Floating Bubble)**: Structured, searchable 10-category FAQ knowledge centre (106 verified records) with keyword, partial-word, and typo-tolerant matching, related questions, and persistent direct escalation (`Email Us` & `WhatsApp`). (Vanessa is strictly a searchable FAQ information centre, not a chatbot or AI assistant.)
- **Contact (`/contact`)**: Validated enquiry form backed by `POST /api/contact`, alongside clickable official email (`byhenrydigitals@gmail.com`) and WhatsApp (`+234 708 208 8942`).
- **Multilingual Architecture**: Active translations in English (`en`), Igbo (`ig`), Yorùbá (`yo`), Hausa (`ha`), and French (`fr`), plus a 20-language registry with RTL readiness.

## Local Development

```bash
npm install
npm run dev
```

The server listens on port `3000` by default (`http://localhost:3000`).

## Production Build

```bash
npm run build
```

Static production assets are generated into `dist/`.

To run via the included Node.js/Express server:

```bash
NODE_ENV=production npm start
```

## Deploying to Cloudflare Pages (via GitHub)

This project is compatible with **Cloudflare Pages** with zero external Node server required:

1. Push the repository to GitHub (make sure `.env` files are never committed; `.gitignore` already excludes `.env*` except `.env.example`).
2. In **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**, select the repository.
3. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **(Optional)** Configure environment variables in **Settings → Environment variables** (Production & Preview) if you want `POST /api/contact` to forward verified enquiries to an external webhook/automation:
   - `CONTACT_WEBHOOK_URL`: HTTPS endpoint URL to receive JSON inquiry payloads
   - `CONTACT_FORWARD_SECRET`: Secret header (`X-BHD-Secret`) sent with forwarded payloads
5. Deploy. Cloudflare Pages automatically serves `dist/` at the edge, handles SPA routing fallback to `index.html`, and activates `functions/api/contact.ts` and `functions/api/health.ts` under `/api/*`.
