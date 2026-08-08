# Iron Rod Fabrication — Website

Marketing website for **Iron Rod Fabrication**, a complete iron & steel fabrication
workshop at 31, Golden City, near Vrinda Garden, Jagatpura, Jaipur.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.
Every route is statically prerendered, so it deploys to Vercel with zero configuration
and no server, database or API keys.

---

## ⚠️ Two things to do before going live

### 1. Set the real phone number

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

### 2. Swap the stock photos for real job photos

Every photograph in `public/images/` is a **stock placeholder** from Unsplash
(see `public/images/CREDITS.md`). They are relevant and licensed for commercial use,
but photos of the shop's own gates, grills and sheds will sell the business far better.

To replace one: drop a new file in `public/images/` **using the same filename**, and
nothing else needs to change — `lib/images.ts` imports them statically and Next
regenerates sizes and blur placeholders at build time.

| Filename pattern | Used for |
| --- | --- |
| `hero-welder.webp` | Home page hero background |
| `cta-sparks.webp` | Closing call-to-action band |
| `workshop*.webp` | About page workshop shots |
| `svc-*.webp` | Service cards (portrait, 4:5) |
| `work-*.webp` | Gallery tiles (landscape, 4:3) |

Aim for roughly the same aspect ratios and around 900–2000 px wide. If you add a new
image, register it in `lib/images.ts` and reference it from `lib/content.ts`.

### Also worth reviewing

- `geo` in `lib/site.ts` — approximate Jagatpura coordinates; replace with the exact pin.
- `hours` / `openingHoursSpec` — keep both in sync (one is for humans, one for Google).
- `testimonials` in `lib/content.ts` — representative sample text; swap in real reviews.
- Stats such as "20+ years", "1200+ jobs" and "8 trained fitters" appear in
  `components/sections/Hero.tsx` and `app/about/page.tsx`.

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

## Design system

An industrial-editorial look: warm concrete paper, near-black ink, and a single
molten-rust accent — closer to a manufacturer's brochure than a software landing page.

| Token | Value | Used for |
| --- | --- | --- |
| `paper` / `paper-2` | `#f4f1ec` / `#eae5dd` | Page and inset backgrounds |
| `ink` / `ink-2` | `#17140f` / `#3a342c` | Body text, dark bands, footer |
| `muted` | `#6e6559` | Secondary text |
| `line` / `line-strong` | `#ded7cc` / `#c9c0b2` | Hairline rules — the main separator |
| `rust` | `#c93f0a` | Fills, large display type |
| `rust-dark` | `#a13207` | Small accent text **on paper** |
| `rust-light` | `#ef8354` | Small accent text **on ink** |

Three steps of rust because one orange cannot clear 4.5:1 contrast against both the
light and the dark ground — pick the step that matches the background.

Type is a three-voice system: **Archivo** for display headings (tight tracking, heavy
weights), **Inter** for body copy, and **IBM Plex Mono** for spec labels, section
indices and numbers — the `.label` and `.num` utilities in `app/globals.css`.

Corners are square throughout, and sections are separated by hairlines rather than
cards with borders and shadows.

## Project structure

```
app/
  layout.tsx            Shell, fonts, SEO metadata, LocalBusiness JSON-LD
  page.tsx              Home
  services/             Full service list
  gallery/              Portfolio of recent jobs
  about/                Workshop story, capabilities, materials
  contact/              Contact channels, quote form, embedded map
  not-found.tsx         404
  sitemap.ts robots.ts  Generated at build time
  opengraph-image.tsx   Social share card, rendered at build time
  icon.svg              Favicon
components/
  Header / Footer / MobileCallBar    Chrome
  Icon.tsx              Icon set
  QuoteForm.tsx         Enquiry form → WhatsApp
  Reveal.tsx            Scroll-in animation wrapper
  ui.tsx                Logo, buttons, section headings, text links
  sections/             Page sections, reused across routes
lib/
  site.ts               Business details — single source of truth
  content.ts            Services, steps, reasons, reviews, FAQs, gallery
  images.ts             Static image imports
public/images/          Photography + CREDITS.md
```

## Notes on a few decisions

**The quote form posts to WhatsApp, not a server.** It validates the name and mobile
number, then opens `wa.me` with the enquiry pre-filled. No backend, no database, no
email provider to maintain — and the enquiry lands where the shop already reads
messages. Swapping in a real API route later only means changing `handleSubmit` in
`components/QuoteForm.tsx`.

**The gallery grid tiles exactly.** It is a dense-flow grid where two tiles span two
rows, so the double-height tiles must stay at indices 0 and 5 of `works` in
`lib/content.ts` for the ten tiles to fill four rows with no holes — and the home page
teaser shows the first five, filling exactly two. Reordering that array or changing the
teaser count will leave gaps; the comment above the array says so too.

**Accessibility.** Audited with axe-core: no violations on any page. Colours meet
WCAG AA, gallery captions sit on an explicit gradient scrim so they stay readable over
pale photos, the FAQ uses native `<details>` so it works without JavaScript, there is a
skip link, and `prefers-reduced-motion` disables all animation.

**Mobile first.** Most visitors arrive on a phone, so a fixed bottom bar keeps
Call / WhatsApp / Directions one tap away at all times.
