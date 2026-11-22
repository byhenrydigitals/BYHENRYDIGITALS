# BYHENRYDIGITALS (BHD) Website

Official web application for **BYHENRYDIGITALS (BHD)** — *Digital Solutions. Global Impact.* / *We Build Digital Value That Sells.*

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4
- **Backend**: Node.js + Express (`server.ts`) serving Vite middleware in development and `dist/` in production
- **Icons**: `lucide-react`

## Pages & Features

- **Home (`/`)**: Hero, value pillars, digital products overview, services overview, affiliate programme overview, resources spotlight, international language vision, Vanessa Detailed BHD FAQ intro, and contact CTA.
- **About (`/about`)**: Mission, vision, operating principles, and founder profile for Henry (Coach Henry).
- **Digital Products (`/products`)**: Organised catalogue featuring *Clicks-to-Cash*, *Global Monetisation*, and *Remote Jobs for Under 18* linked to the official Selar store (`https://selar.com/m/BYHENRYDIGITALS`).
- **Affiliate Programme (`/affiliate-programme`)**: Verified programme rules (₦0 signup fee, no mandatory purchase, no MLM, 35% commission on eligible Selar sales, optional ₦8,000 Starter Kit) with enquiries routed through BHD's official Contact channels.
- **Services (`/services`)**: Website design & development, landing pages, digital presence development, no-code & AI-assisted solutions, and digital business support.
- **Resources & Blog (`/resources`)**: Reusable article schema and topic filtering across 7 categories.
- **Vanessa — Detailed BHD FAQ (`/faq`)**: Structured, searchable 10-category FAQ knowledge centre (100+ verified records) with keyword, partial-word, and typo-tolerant matching, related questions, and direct escalation to BHD email & WhatsApp. (Vanessa is strictly a searchable FAQ information centre, not a chatbot or AI assistant.)
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
NODE_ENV=production npm start
```

## Configuration Checklist Before Launch

1. **Environment Variables** (copy `.env.example` to `.env`):
   - `CONTACT_WEBHOOK_URL` and `CONTACT_FORWARD_SECRET`: Optional server-side HTTPS webhook for forwarding submitted contact form enquiries.
2. **Official Contact Channels (`src/config/siteConfig.ts`)**:
   - Pre-configured with official email `byhenrydigitals@gmail.com` and official WhatsApp `+234 708 208 8942` (`https://wa.me/2347082088942`).
3. **Brand Logo (`src/components/BrandLogo.tsx`)**:
   - Swap the temporary Black/White/Gold `BHD` emblem with the official BHD SVG/PNG logo asset.
4. **Products & Articles (`src/data/catalog.ts`)**:
   - Replace placeholder product summaries/outcomes with exact verified copy from Selar and replace sample placeholder articles with published BHD posts.
5. **Adding Reviewed Languages (`src/i18n/types.ts` & `src/i18n/translations.ts`)**:
   - When a reviewed human translation is ready for one of the planned languages (e.g., `ig`, `yo`, `ar`), add its bundle to `TRANSLATIONS`, add its code to `ActiveLanguageCode`, and change its `status` from `'planned'` to `'ready'`.
