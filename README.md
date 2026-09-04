# THEUNOiA — Website

> Independence starts here.

Bharat's student-first freelance ecosystem. Where beautiful thinking meets real opportunity — before graduation, not after.

The site is a landing page plus three dedicated pages, one per part of the ecosystem:

| Page | Route |
|---|---|
| Landing | `/` |
| **Hunhar** — the freelancing platform | `/hunhar` |
| **Mentoria** — mentorship | `/mentoria` |
| **The Guild** — on-ground city chapters | `/the-guild` |

See [`docs/SITE_PLAN.md`](docs/SITE_PLAN.md) for the full structure, page anatomy, and animation notes.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion + Canvas 2D
- **Fonts**: Space Grotesk (heading) + Manrope (body)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Lint, then build for production
npm run lint
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, grain)
│   ├── page.tsx                # Landing page
│   ├── hunhar/page.tsx         # Hunhar
│   ├── mentoria/page.tsx       # Mentoria
│   ├── the-guild/page.tsx      # The Guild
│   ├── not-found.tsx           # Branded 404
│   ├── api/waitlist/route.ts   # Form endpoint (stub — see below)
│   └── globals.css             # Global styles, logo + gradient animations, overlays
├── components/
│   ├── Nav.tsx                 # Fixed navigation with animated logo and active state
│   ├── DepthRail.tsx           # Scroll-linked depth indicator
│   ├── page/ProgramPage.tsx    # Builds a programme page from a content object
│   ├── animation/
│   │   ├── OceanCanvas.tsx     # Caustic light, waves, rising drops, pointer ripples
│   │   ├── WaveDivider.tsx     # Drifting SVG wave divider
│   │   ├── AnimationSlot.tsx   # Swappable animation wrapper
│   │   ├── ScrollReveal.tsx    # Scroll-triggered reveal
│   │   ├── CountUp.tsx         # Number counter animation
│   │   └── LunaAnimation.tsx   # Animated Luna mascot
│   ├── sections/
│   │   ├── landing/            # Landing-page sections
│   │   └── shared/             # Sections shared by the programme pages
│   └── ui/
│       ├── AnimatedLogo.tsx    # Wordmark that surfaces letter by letter
│       ├── AnimatedBrandMark.tsx  # "oia" glyph drawn on with a gold stroke
│       ├── Button.tsx          # Button or link (pass `href`)
│       ├── Eyebrow.tsx
│       ├── Icon.tsx
│       └── Logo.tsx
├── lib/
│   ├── constants.ts            # Brand tokens, routes, nav, cities, stats
│   ├── brandmark.ts            # SVG path data for the brand mark
│   └── content/                # One file per page: hunhar.ts, mentoria.ts, guild.ts
└── public/
    └── assets/luna/            # Luna mascot images
```

## Editing content

All page copy lives in `src/lib/content/`. Each programme page is a single
`ProgramContent` object (see `types.ts`), so headlines, steps, features, FAQs, and the
form can be changed without touching any component.

## Forms

All forms post to `POST /api/waitlist`. The route validates the payload and currently
only logs it. Replace the `console.log` in `src/app/api/waitlist/route.ts` with your
provider (Google Sheets, Airtable, Notion, Resend, a database) before launch.

## Swapping Animations

Every animated block sits inside an `<AnimationSlot>`. To replace one:

```tsx
// Current (Framer Motion)
<AnimationSlot id="hero-brandmark">
  <AnimatedBrandMark />
</AnimationSlot>

// Swap to Lottie
<AnimationSlot id="hero-brandmark">
  <LottiePlayer src="/animations/brandmark.json" />
</AnimationSlot>
```

## Swapping Makira Font

When Makira font files are available:

1. Place `.woff2` files in `public/fonts/`
2. Add `@font-face` in `globals.css`
3. Update `--font-head` CSS variable

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Navy | `#0A1B37` | Primary background |
| Navy Deep | `#060f22` | Deepest sections |
| Gold | `#CBA96B` | Accents, labels |
| Terracotta | `#C06B3E` | Links, gradient |
| Beige | `#B7AA9A` | Footer, CTA fade |
| Ivory | `#F3EFE6` | Text, light sections |

## Mascot

**Luna** 🦊 — a fox in a navy hoodie with amber eyes and a messenger bag.

---

Built with 🧠 by THEUNOiA
