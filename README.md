# Iron Rod Fabrication — Website

Marketing website for **Iron Rod Fabrication**, a complete iron & steel fabrication
workshop at 31, Golden City, near Vrinda Garden, Jagatpura, Jaipur.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.
Every route is statically prerendered, so it deploys to Vercel with zero configuration
and no server, database or API keys.

---

## ⚠️ Before going live — set the real phone number

The site ships with a **placeholder phone number**. Every call button, WhatsApp link
and the Google structured data read from one file:

**`lib/site.ts`**

```ts
phone:     "+91 90000 00000",   // shown on screen
phoneHref: "+919000000000",     // used by tel: links
whatsapp:  "919000000000",      // used by wa.me links — country code, no +
email:     "imamsaharconstructions@gmail.com",
url:       "https://imamsaharconstructions.vercel.app",  // set to the live domain
```

Change those five values and the entire site updates. The same file also holds the
address, working hours, service areas and map coordinates.

Other things worth reviewing in `lib/site.ts` and `lib/content.ts`:

- `geo` — approximate Jagatpura coordinates; replace with the exact workshop pin.
- `hours` / `openingHoursSpec` — keep both in sync (one is for humans, one for Google).
- `testimonials` in `lib/content.ts` — representative sample text; swap in real reviews.
- Stats such as "20+ years" and "1200+ jobs" appear in `components/sections/Hero.tsx`
  and `app/about/page.tsx`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Accept the detected defaults (Framework: Next.js, no environment variables needed)
   and deploy.
4. After the first deploy, set `site.url` in `lib/site.ts` to the real domain so
   canonical URLs, the sitemap and Open Graph tags point at the right place.

## Project structure

```
app/
  layout.tsx            Shell, fonts, SEO metadata, LocalBusiness JSON-LD
  page.tsx              Home
  services/             Full service list
  gallery/              Portfolio of recent jobs
  about/                Workshop story, capabilities, materials
  contact/              Contact cards, quote form, embedded map
  not-found.tsx         404
  sitemap.ts robots.ts  Generated at build time
  opengraph-image.tsx   Social share card, rendered at build time
  icon.svg              Favicon
components/
  Header / Footer / MobileCallBar    Chrome
  Motif.tsx             SVG line-art of each product (gate, grill, railing…)
  Icon.tsx              Icon set
  QuoteForm.tsx         Enquiry form → WhatsApp
  Reveal.tsx            Scroll-in animation wrapper
  ui.tsx                Logo, buttons, section headings
  sections/             Home page sections
lib/
  site.ts               Business details — single source of truth
  content.ts            Services, process steps, reasons, reviews, FAQs
```

## Notes on a few decisions

**No stock photography.** Iron work is geometry, so the products are drawn as inline
SVG (`components/Motif.tsx`). They stay sharp at any size, add no page weight, never
404, and keep every card visually consistent. Replace them with real job photos when
the shop has a set it is happy with.

**The quote form posts to WhatsApp, not a server.** It validates the name and mobile
number, then opens `wa.me` with the enquiry pre-filled. No backend, no database, no
email provider to maintain — and the enquiry lands where the shop already reads
messages. Swapping in a real API route later only means changing `handleSubmit` in
`components/QuoteForm.tsx`.

**Accessibility.** Audited with axe-core: no violations on any page. Colours meet
WCAG AA contrast, the FAQ uses native `<details>` so it works without JavaScript,
there is a skip link, and `prefers-reduced-motion` disables all animation.

**Mobile first.** Most visitors arrive on a phone, so a fixed bottom bar keeps
Call / WhatsApp / Directions one tap away at all times.
