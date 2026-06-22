# Shift AI Landing Page — Implementation Plan

## Overview

Build a pre-launch landing page for Shift AI using Astro + Shadcn Svelte. Single-page site with email capture and blog infrastructure. Fast, SEO-optimized, AI-search-ready from day one.

**Tech Stack:** Astro · Shadcn Svelte · Tailwind CSS · Supabase · Astro Content Collections
**Package Manager:** npm
**Design:** Aesthetic black and white (matching shadcn defaults and the Shift app)

MARKETING.md file is in "C:\\Shift\\.planning\\shift\\MARKETING.md"

---

## Phase 1: Project Scaffolding

- Create Astro project (`npm create astro@latest`, empty template)
- Add Svelte (`npx astro add svelte`) + Tailwind (`npx astro add tailwind`)
- Set up `$lib` path aliases in tsconfig.json
- Install Shadcn Svelte (`npx shadcn-svelte@latest init`), add button/input/card components
- **Outcome:** `npm run dev` serves a blank page with Tailwind + Shadcn working

## Phase 2: Base Layout & Design System

- Create `Base.astro` layout with SEO meta tags, OG tags, dark mode support
- Aesthetic black and white palette (matching shadcn defaults and the Shift app)
  - Pure black/white backgrounds, neutral grays for depth
  - No accent colors — monochrome throughout
  - Clean typography, generous whitespace
- Set up dark mode (system preference detection)
- Add favicon and OG image placeholders
- **Outcome:** Clean HTML shell with proper meta, dark mode works, monochrome aesthetic

## Phase 3: Landing Page Sections (7 sections)

1. **Hero** — Headline from MARKETING.md + email input + CTA
2. **Problem** — 3 pain point cards ("one delay collapses your day")
3. **How It Works** — 3-step visual (Add tasks → AI schedules → One tap rebuild)
4. **Features** — 6 cards (AI Reschedule, AI Task Placement, Smart Notifications, AI Justifications, Undo System, Personalization)
5. **Social Proof** — Stat counters + testimonial cards
6. **Waitlist CTA** — Final email capture
7. **Footer** — Links, social, copyright
- **Outcome:** Full landing page, responsive, content matches MARKETING.md messaging

## Phase 4: Email Capture (Supabase)

- Create `waitlist` table in Supabase (id, email, created_at) with RLS for anonymous inserts
- Create Supabase client (`src/lib/supabase.ts`)
- Create POST API route (`src/pages/api/waitlist.ts`) with validation + duplicate handling
- Build interactive `EmailForm.svelte` (client:load) with loading/success/error states
- Wire into Hero and WaitlistCTA sections
- **Outcome:** Emails stored in Supabase, friendly error handling, works without JS fallback

## Phase 5: Blog Infrastructure

- Content collection config (`src/content/config.ts`) with schema (title, description, pubDate, author, tags)
- Blog listing page (`/blog`) with post cards sorted by date
- Blog post template (`/blog/[...slug]`) with Article + FAQPage schema markup
- Author attribution, "Last updated" dates, extractable answer block patterns
- Blog Preview component on landing page (latest 3 posts)
- Placeholder post (`hello-world.md`)
- **Outcome:** Drop `.md` files into `src/content/blog/` → new posts appear automatically

## Phase 6: AI SEO Foundation

- `public/robots.txt` — allow GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended; block CCBot
- `public/llms.txt` — product context for AI systems
- Schema markup on landing page (Organization, WebSite, WebPage)
- Astro sitemap integration (`npx astro add sitemap`)
- **Outcome:** `/robots.txt`, `/llms.txt`, `/sitemap.xml` all present; site is AI-citation-ready

## Phase 7: Polish & Launch Prep

- Responsive audit (375px, 768px, 1024px, 1440px)
- Dark mode audit (contrast ratios, all sections)
- Lighthouse performance check (target 95+)
- SEO meta tags (title, description, OG image, Twitter card)
- Accessibility (keyboard nav, screen reader, focus indicators)
- `.env.example` + README.md with setup docs
- **Outcome:** Production-ready, deployable landing page

---

## Final File Structure

```
shift-ai-landing/
├── public/
│   ├── favicon.svg, og-image.png, llms.txt, robots.txt
├── src/
│   ├── components/ (Hero, Problem, HowItWorks, Features, SocialProof, WaitlistCTA, Footer, EmailForm.svelte, ui/)
│   ├── content/ (config.ts, blog/hello-world.md)
│   ├── layouts/ (Base.astro)
│   ├── lib/ (supabase.ts, utils.ts)
│   ├── pages/ (index.astro, blog/index.astro, blog/[...slug].astro, api/waitlist.ts)
│   └── styles/ (global.css)
├── astro.config.mjs, package.json, tsconfig.json, components.json
├── .env.example, .gitignore, README.md, PLAN.md
```

## Not in Scope (Later)

Blog posts, referral mechanic, analytics, deployment, pricing page, legal pages
