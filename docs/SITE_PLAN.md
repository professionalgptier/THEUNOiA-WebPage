# THEUNOiA Website — Structure & Build Notes

> Independence starts here.

This document describes how the THEUNOiA site is organised after the split from a
single landing page into **a landing page plus three dedicated pages**, one per part of
the ecosystem. It is the reference for anyone editing copy, adding a page, or swapping
an animation.

---

## 1. The three parts

| Page | Route | Was called | What it is |
|---|---|---|---|
| **Hunhar** | `/hunhar` | SkillBridge | The student-first freelancing platform (AI-assisted skill verification, flexible bidding). |
| **Mentoria** | `/mentoria` | Mentorship | Mentorship arcs: 1:1 mentors, peer circles, office hours, a badge that carries into Hunhar. |
| **The Guild** | `/the-guild` | CONNECT | On-ground city chapters: meetups, speaker sessions, demo days, campus ambassadors. |

The landing page (`/`) is the hub: it tells the name and ocean story, then routes visitors
to the three parts.

---

## 2. Routes

```
/              Landing page
/hunhar        Hunhar
/mentoria      Mentoria
/the-guild     The Guild
/api/waitlist  POST endpoint for all forms (stub — logs submissions)
*              Branded 404
```

---

## 3. File layout

```
src/
├── app/
│   ├── layout.tsx                  # Fonts, metadata template, grain overlay
│   ├── page.tsx                    # Landing page
│   ├── hunhar/page.tsx             # Each programme page is ~15 lines:
│   ├── mentoria/page.tsx           #   metadata + <ProgramPage content={…} />
│   ├── the-guild/page.tsx
│   ├── not-found.tsx               # Branded 404 with links to the three parts
│   ├── api/waitlist/route.ts       # Form endpoint (replace the console.log)
│   └── globals.css                 # Tokens, logo animation, gradients, overlays
├── components/
│   ├── Nav.tsx                     # Real routes, active-link state, animated logo
│   ├── DepthRail.tsx               # Scroll-depth indicator; takes a `sections` prop
│   ├── page/ProgramPage.tsx        # Assembles a programme page from a content object
│   ├── animation/
│   │   ├── OceanCanvas.tsx         # Canvas ocean (variants: deep / soft / drops)
│   │   ├── WaveDivider.tsx         # Drifting SVG wave section divider
│   │   ├── ScrollReveal.tsx, CountUp.tsx, LunaAnimation.tsx, AnimationSlot.tsx
│   ├── sections/
│   │   ├── landing/                # Hero, BehindName, OceanTheory, ThreeParts, Stats, TeamTeaser, CTA
│   │   └── shared/                 # PageHero, About, Steps, FeatureGrid, Audience, Cities,
│   │                               #   FAQ, PageCTA, WaitlistForm, Footer, SectionHeading
│   └── ui/
│       ├── AnimatedLogo.tsx        # Wordmark that surfaces letter by letter
│       ├── AnimatedBrandMark.tsx   # "oia" glyph drawn on with a gold stroke
│       ├── Logo.tsx, Button.tsx, Eyebrow.tsx, Icon.tsx
└── lib/
    ├── constants.ts                # Brand, routes, nav, cities, stats, the three parts
    ├── brandmark.ts                # SVG path data for the glyph
    └── content/
        ├── types.ts                # ProgramContent shape
        ├── hunhar.ts, mentoria.ts, guild.ts
        └── index.ts
```

**To change copy on a programme page, edit its file in `src/lib/content/`.**
Components never contain page-specific text.

---

## 4. Page anatomy

### Landing (`/`)

| Order | Section | Background |
|---|---|---|
| 1 | Hero — headline, CTAs, animated brand mark | Animated navy gradient + `OceanCanvas` (deep): light shafts, waves, rising drops, pointer ripples |
| 2 | Behind the Name | Faint gold mesh overlay |
| 3 | The Ocean Theory | Radial navy-deep + `OceanCanvas` (drops) + ripple rings |
| 4 | Three parts — cards linking to each page | Subtle wave pattern overlay |
| 5 | Stats | Navy gradient + particle texture |
| 6 | Team teaser | Ivory + linen texture |
| 7 | CTA + waitlist form | Drifting wave divider, navy-to-beige fade |
| 8 | Footer | Solid beige, links to the three parts and Guild cities |

### Programme pages (`/hunhar`, `/mentoria`, `/the-guild`)

All three share one skeleton so they read as a family:

1. **Page hero** — eyebrow, headline, lead, two CTAs, Luna. Animated gradient + `OceanCanvas` (soft).
2. **About** — three paragraphs. Gold mesh overlay.
3. **How it works** — four numbered steps. Radial navy-deep.
4. **Features** — six glass cards with icons. Wave pattern overlay.
5. **Who it's for** — two audience cards. Ivory + linen.
6. **Cities** — *The Guild only.* Chapter grid on the stats gradient.
7. **FAQ** — accordion. Gold mesh overlay.
8. **CTA** — wave divider, form (waitlist / apply / register with role toggle), Luna.
9. **Footer**.

---

## 5. Animation notes

- **Animated logo** (`AnimatedLogo`) — the letters of "theunoia" rise from below a clip
  line, staggered, like something surfacing. "oia" carries a slow gold shimmer that speeds up
  on hover; a gold-to-terracotta waterline draws beneath. Used in the nav on every page.
- **Animated brand mark** (`AnimatedBrandMark`) — the "oia" glyph is drawn on with a gold
  stroke, fills in ivory, then floats gently above three expanding ripple rings. Used in the
  landing hero.
- **Ocean canvas** (`OceanCanvas`) — scoped to the section it sits in (not the whole page).
  `deep` (landing hero) has caustic light shafts, three wave layers, rising drops, and
  pointer-driven ripples; `soft` (programme heroes, 404) is lighter; `drops` (Ocean Theory)
  is only rising drops. It pauses when off-screen and draws a single static frame under
  `prefers-reduced-motion`.
- **Wave divider** (`WaveDivider`) — three layered SVG waves drifting at different speeds,
  placed above every CTA.
- Everything else is scroll-reveal (Framer Motion) and static CSS textures, so the page stays
  light where animation would not add meaning.

---

## 6. Forms

Every form posts JSON to `POST /api/waitlist` with `email`, optional `name`/`phone`/`city`,
plus `role`, `program`, and `variant`. The route validates and **logs** the submission.
Before launch, replace the `console.log` in `src/app/api/waitlist/route.ts` with a real sink
(Google Sheets via Apps Script, Airtable, Notion, Resend, or a database).

---

## 7. Still to do before launch

- Replace placeholder statistics in `src/lib/constants.ts` (`STATS`) with sourced figures.
- Wire the waitlist endpoint to a real provider.
- Add real mentor names, event dates, and photos when available.
- Optional: drop a dark-ocean photo or WebM loop behind the landing hero (see
  [`BACKGROUND_RESOURCES.md`](./BACKGROUND_RESOURCES.md)); the canvas already reads as water
  without one.
- Makira heading font, if/when the files are available (see README).
