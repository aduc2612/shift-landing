\*\*The whole app is at "C:\\Shift", but for most cases you only need to read "C:\\Shift\\.planning\\shift\\MARKETING.md"\*\*



Before each task, look at the available marketing skills and use the appropriate ones if needed



Expert Astro developer building fast, SEO-optimized landing pages.

Write clean, simple, maintainable code. Clarity over abstraction.

Think like a senior web developer focused on performance and accessibility.



\---



\## Project Overview



Pre-launch landing page for Shift AI — a single-page site with email capture, blog infrastructure, and AI-search optimization.



Site includes:



\- \*\*Landing page:\*\* 7 sections (Hero, Problem, How It Works, Features, Social Proof, Waitlist CTA, Footer) with responsive design

\- \*\*Email capture:\*\* Supabase-backed waitlist signup with validation and duplicate handling

\- \*\*Blog infrastructure:\*\* Content collections with automatic post generation from markdown files

\- \*\*Dark mode:\*\* System preference detection with proper contrast and readability

\- \*\*AI SEO:\*\* robots.txt, llms.txt, sitemap.xml, and schema markup for AI citation

\- \*\*Performance:\*\* Lighthouse 95+ target, optimized images, minimal JavaScript



\## Keep implementation simple and readable.



\---



\## Tech Stack



\- \*\*Framework:\*\* Astro (latest)

\- \*\*Styling:\*\* Tailwind CSS

\- \*\*Components:\*\* Svelte (via Astro Svelte integration) + Shadcn Svelte components

\- \*\*Backend:\*\* Supabase (Postgres + Auth)

\- \*\*Content:\*\* Astro Content Collections

\- \*\*Package Manager:\*\* npm

\- \*\*TypeScript:\*\* Strict mode



Do not introduce new major libraries unless strong reason.

Ask before installing anything new.



\---



\## Development Philosophy



Build feature by feature, phase by phase per PLAN.md:



1\. Read this file first and PLAN.md.

2\. Keep implementation simple.

3\. Avoid overengineering.

4\. Prefer readable code over clever code.

5\. Build smallest useful version first.

6\. Refactor only when repetition appears.

7\. Test responsive design early (375px, 768px, 1024px, 1440px).



\---



\## Decision Making



If unclear or could be improved, suggest better approach. If new library would significantly help, recommend, explain why, ask before adding.

Do not install new libraries without approval.



\---



\## Architecture



All site code in `src/`. Config files at project root.



```

shift-ai-landing/

├── public/

│   ├── favicon.svg

│   ├── og-image.png

│   ├── llms.txt

│   ├── robots.txt

│

├── src/

│   ├── components/

│   │   ├── sections/

│   │   │   ├── Hero.astro

│   │   │   ├── Problem.astro

│   │   │   ├── HowItWorks.astro

│   │   │   ├── Features.astro

│   │   │   ├── SocialProof.astro

│   │   │   ├── WaitlistCTA.astro

│   │   │   ├── Footer.astro

│   │   ├── EmailForm.svelte

│   │   ├── ui/

│   │   │   ├── Button.svelte

│   │   │   ├── Input.svelte

│   │   │   ├── Card.svelte

│   │

│   ├── content/

│   │   ├── config.ts

│   │   ├── blog/

│   │   │   ├── hello-world.md

│   │

│   ├── layouts/

│   │   ├── Base.astro

│   │   ├── BlogLayout.astro

│   │

│   ├── lib/

│   │   ├── supabase.ts

│   │   ├── utils.ts

│   │   ├── constants.ts

│   │

│   ├── pages/

│   │   ├── index.astro

│   │   ├── blog/

│   │   │   ├── index.astro

│   │   │   ├── \[...slug].astro

│   │   ├── api/

│   │   │   ├── waitlist.ts

│   │

│   ├── styles/

│   │   ├── global.css

│

├── astro.config.mjs

├── tailwind.config.mjs

├── tsconfig.json

├── .env.example

├── README.md

├── PLAN.md

```



\*\*components/\*\* — Reusable UI building blocks.

\- `sections/` — full-width landing page sections (one file per section)

\- `EmailForm.svelte` — interactive form with client-side validation and state

\- `ui/` — shadcn Svelte components (buttons, inputs, cards)



\*\*content/\*\* — Astro Content Collections.

\- `config.ts` — schema definitions (title, description, pubDate, author, tags)

\- `blog/` — markdown blog posts, one file per post



\*\*layouts/\*\* — Astro layout wrappers.

\- `Base.astro` — HTML shell, meta tags, dark mode, SEO structure

\- `BlogLayout.astro` — article-specific layout (heading, date, author, schema)



\*\*lib/\*\* — utility functions and shared logic.

\- `supabase.ts` — Supabase client configuration

\- `utils.ts` — helper functions (formatters, validators)

\- `constants.ts` — theme colors, spacing, copy



\*\*pages/\*\* — Astro file-based routing.

\- `index.astro` — landing page (composes 7 sections)

\- `blog/index.astro` — blog listing page

\- `blog/\[...slug].astro` — dynamic blog post pages

\- `api/waitlist.ts` — server-side POST endpoint for email capture



\*\*styles/\*\* — global Tailwind configuration and custom CSS.



\---



\## Astro \& Svelte Integration



\*\*Astro components\*\* (.astro) — use for server-rendered, static, or minimal-JS sections.

\- Hero, Problem, HowItWorks, Features, SocialProof sections should be pure Astro + Tailwind

\- Pass content/text via props, keep layout and structure in template



\*\*Svelte components\*\* (.svelte) — use for interactive, client-rendered elements.

\- EmailForm.svelte requires `client:load` directive to hydrate on page load

\- Shadcn UI components are Svelte-based, use within `.astro` files with `<Component client:load />`

\- Keep Svelte components focused on single interactive concerns



\---



\## Styling Rules



Use \*\*Tailwind CSS only\*\*. No CSS Modules, no inline `<style>` tags.



\*\*Color palette:\*\*

\- Pure black/white backgrounds

\- Neutral grays for depth (reference `tailwind.config.mjs` for exact shades)

\- No accent colors — monochrome throughout

\- Ensure WCAG AA contrast on all text



\*\*Spacing:\*\*

\- Reference Tailwind spacing scale (4px base unit: `p-4`, `mb-8`, `gap-6`, etc.)

\- Consistent padding/margins across sections (e.g., `px-6 md:px-12 lg:px-24`)

\- Generous whitespace between sections



\*\*Typography:\*\*

\- Clear hierarchy: heading sizes, weights, line-height

\- Reference `tailwind.config.mjs` for font-family, font-sizes

\- Maintain readability at all breakpoints



\*\*Responsive design:\*\*

\- Mobile-first: base styles apply to 375px

\- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1440px)

\- Test sections at each breakpoint for layout shifts and overflow



\*\*Dark mode:\*\*

\- Use Tailwind's `dark:` variant for dark-specific styles

\- Base styles = light theme, `dark:` overrides for dark theme

\- System preference detected via `prefers-color-scheme` in Base.astro

\- Ensure all text readable in both modes (test contrast with tools)



\*\*Borders \& shadows:\*\*

\- Avoid borders. Use surface color changes and shadows for visual separation.

\- Reference subtle shadow utilities: `shadow-sm`, `shadow-md`



\---



\## Component Structure



\*\*Astro section components:\*\*

```

<section class="w-full py-12 md:py-20">

&#x20; <div class="max-w-7xl mx-auto px-6 md:px-12">

&#x20;   <!-- content -->

&#x20; </div>

</section>

```



\*\*Responsive containers:\*\*

\- Always wrap section content in a centered max-width container

\- Use consistent padding on left/right (`px-6 md:px-12`)

\- Stack sections vertically with generous top/bottom padding



\*\*Svelte interactive components:\*\*

\- Use `client:load` to hydrate on page load (EmailForm)

\- Accept props for content and callbacks

\- Emit custom events or use bind directives for two-way data flow

\- Handle loading, success, and error states locally



\---



\## Content Collections \& Blog



\*\*Blog schema\*\* (defined in `src/content/config.ts`):

```

\- title: string

\- description: string

\- pubDate: Date

\- author: string

\- tags: string\[]

```



\*\*Writing blog posts:\*\*

\- Add `.md` files to `src/content/blog/`

\- Filename becomes slug (e.g., `hello-world.md` → `/blog/hello-world`)

\- Include frontmatter with all schema fields



\*\*Blog listing\*\* (`/blog`):

\- Fetch all posts via `getCollection('blog')`

\- Sort by `pubDate` descending

\- Display 10 recent posts, with pagination or infinite scroll if needed



\*\*Blog post page\*\* (`/blog/\[...slug]`):

\- Render post with Article schema markup

\- Include publish date, author, edit date if available

\- Show previous/next post links for navigation

\- Add FAQPage schema markup if post answers common questions



\*\*On landing page:\*\*

\- Show latest 3 blog posts in preview section

\- Link to `/blog` for full archive



\---



\## Email Capture \& Supabase



\*\*Supabase table structure:\*\*

```

Table: waitlist

\- id (UUID, primary key)

\- email (text, unique)

\- created\_at (timestamp)

```



\*\*RLS policy:\*\*

\- Allow anonymous INSERT only (for public signup)

\- No SELECT or UPDATE



\*\*API endpoint\*\* (`src/pages/api/waitlist.ts`):

\- Accept POST with `email` in request body

\- Validate email format (basic regex or email-validator package)

\- Check for duplicates — return 409 if email exists

\- Insert into Supabase, return 201 on success

\- Return friendly error messages (don't expose DB errors)



\*\*EmailForm.svelte:\*\*

\- Input field with email validation

\- Submit button (disable while loading)

\- Show loading state (spinner or disabled button)

\- Show success state (confirmation message, clear input after delay)

\- Show error state (inline error message with user-friendly text)

\- Handle network errors gracefully



\*\*Form states:\*\*

\- Idle: empty form, ready for input

\- Loading: submitted, waiting for response

\- Success: email saved, show confirmation (3 seconds)

\- Error: show error message, allow retry



\---



\## AI SEO Foundation



\*\*robots.txt\*\* (`public/robots.txt`):

\- Allow GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended

\- Block CCBot and other aggressive crawlers

\- Allow Googlebot, Bingbot, and standard search bots



\*\*llms.txt\*\* (`public/llms.txt`):

\- Plain text file with product context for AI systems

\- Include: product name, brief description, use case, company info

\- Keep under 1000 words, conversational tone



\*\*Schema markup:\*\*

\- Organization schema on all pages (company name, logo, contact)

\- WebSite schema with site name and landing page link

\- WebPage schema on each page (title, description, datePublished)

\- Article schema on blog posts (headline, datePublished, author, body)

\- FAQPage schema on blog posts answering FAQs



\*\*Sitemap:\*\*

\- Use Astro sitemap integration (`npx astro add sitemap`)

\- Auto-generates `/sitemap.xml` with all pages + blog posts



\*\*Meta tags:\*\*

\- Title: concise, keyword-relevant (50-60 chars)

\- Description: compelling summary (150-160 chars)

\- OG image: open graph image for social sharing (1200×630px)

\- Twitter card: summary with image

\- Canonical URL: self-referential to prevent duplication



\---



\## Performance \& Optimization



\*\*Target metrics:\*\*

\- Lighthouse score 95+

\- Core Web Vitals all green

\- First Contentful Paint < 1.5s

\- Largest Contentful Paint < 2.5s

\- Cumulative Layout Shift < 0.1



\*\*Image optimization:\*\*

\- Use Astro's `<Image>` component for automatic optimization

\- Provide `alt` text on all images

\- Use modern formats (WebP) with fallbacks

\- Lazy load images below the fold



\*\*CSS \& JS:\*\*

\- Inline critical CSS in `<head>` (Tailwind purges unused)

\- Defer non-critical scripts

\- EmailForm.svelte hydrated via `client:load` only when visible

\- No unused JavaScript bundles



\*\*Build optimization:\*\*

\- Run `astro build` and inspect output size

\- Check for unused Shadcn components and remove

\- Minify and compress assets



\---



\## Accessibility



\*\*WCAG AA compliance:\*\*

\- All headings properly nested (h1, h2, h3)

\- Sufficient color contrast (4.5:1 for text, 3:1 for large text)

\- Interactive elements keyboard accessible (focus visible)

\- Forms labeled properly (input id linked to label)

\- Alt text on images (descriptive, not "image of...")

\- Skip link to main content



\*\*Focus states:\*\*

\- All interactive elements have visible `:focus` rings

\- Use `outline-2 outline-offset-2` for focus indicators

\- Ensure focus order matches visual order (left to right, top to bottom)



\*\*Testing:\*\*

\- Test with keyboard navigation only (Tab, Shift+Tab, Enter)

\- Test with screen reader (VoiceOver, NVDA)

\- Run axe or WAVE accessibility audit before launch



\---



\## Dark Mode Implementation



\*\*In Base.astro:\*\*

\- Detect system preference: `prefers-color-scheme: dark`

\- Set `<html class="dark">` if dark mode

\- Store preference in `<html>` element for Tailwind to reference



\*\*Tailwind dark mode:\*\*

\- Base Tailwind classes apply to light theme

\- `dark:` prefixed classes apply when `<html class="dark">`

\- Example: `bg-white dark:bg-slate-950`



\*\*Testing dark mode:\*\*

1\. Toggle system color scheme in OS settings

2\. Inspect all sections: contrast, readability, visual balance

3\. Check images and graphics for visibility in dark

4\. Verify form inputs, buttons, cards have proper dark variants



\---



\## TypeScript



\- Strict mode enabled in `tsconfig.json`

\- No `any` types — use `unknown` if type is genuinely unknown, then narrow

\- Define types for props in `.astro` components

\- Use `Record<string, unknown>` for flexible object types when appropriate

\- Keep types simple and readable



\---



\## Testing \& QA



\*\*Responsive design audit:\*\*

\- 375px (mobile)

\- 768px (tablet)

\- 1024px (desktop)

\- 1440px (wide desktop)

\- Test on actual devices if possible (iOS Safari, Chrome Android)



\*\*Dark mode audit:\*\*

\- Toggle system preference in OS

\- Check all sections for contrast and readability

\- Verify no text becomes invisible



\*\*Performance audit:\*\*

\- Run Lighthouse (target 95+)

\- Check Core Web Vitals

\- Profile images and assets for optimization opportunities



\*\*Accessibility audit:\*\*

\- Keyboard navigation (Tab through all interactive elements)

\- Screen reader test (macOS VoiceOver or Windows NVDA)

\- Use axe or WAVE browser extension



\*\*Cross-browser testing:\*\*

\- Chrome (desktop and mobile)

\- Firefox (desktop)

\- Safari (desktop and iOS)

\- Edge (if relevant)



\*\*Content check:\*\*

\- All copy matches MARKETING.md

\- Links work and point to correct URLs

\- Email form actually saves to Supabase

\- Blog posts display correctly with schema markup



\---



\## Email Form Testing



Test the EmailForm component thoroughly:



1\. \*\*Valid email:\*\* enters valid email, receives confirmation

2\. \*\*Duplicate email:\*\* enters email already in waitlist, shows friendly message

3\. \*\*Invalid email:\*\* enters non-email string, shows validation error

4\. \*\*Network error:\*\* simulate offline, shows error with retry

5\. \*\*Loading state:\*\* verify button disables and shows loading indicator

6\. \*\*Success state:\*\* verify confirmation shows and input clears after delay

7\. \*\*Mobile:\*\* test on small screens, touch interactions work



\---



\## Feature Implementation



When building a feature per PLAN.md phases:



1\. Read this file and PLAN.md first.

2\. Identify files to change (components, pages, layouts, config).

3\. Keep changes focused and minimal.

4\. Always inform user of manual steps (Supabase table creation, env setup).

5\. Do not rewrite unrelated code.

6\. Follow existing patterns and naming conventions.

7\. Ensure feature works end to end with real data.

8\. Fix all TypeScript and Astro build errors before finishing.

9\. Run responsive and dark mode audits before considering feature complete.



\---



\## Communication



Be concise. Explain what was built, which sections/pages changed, and how to test it.



\---



\## Deployment Checklist



Before going live:



\- \[ ] All TypeScript strict mode checks pass (`npm run build` succeeds)

\- \[ ] Lighthouse score 95+ (performance, accessibility, SEO)

\- \[ ] All responsive breakpoints tested (375px, 768px, 1024px, 1440px)

\- \[ ] Dark mode tested and contrast verified

\- \[ ] Email form tested (valid, duplicate, invalid, offline scenarios)

\- \[ ] Blog posts render with schema markup

\- \[ ] `/robots.txt`, `/llms.txt`, `/sitemap.xml` all accessible

\- \[ ] OG image and Twitter card metadata correct

\- \[ ] Supabase RLS policies verified (anonymous INSERT only)

\- \[ ] `.env.example` updated with required keys

\- \[ ] README.md has setup and deployment instructions

\- \[ ] No secrets in code (all in `.env`)



\---



\## Final Reminder



Before every feature:



\- Read this file and PLAN.md.

\- Follow them strictly.

\- Build clean, simple code.

\- Follow basic principles: Separation of Concerns, Clarity, Performance, Accessibility.

\- Test responsive design and dark mode early.

\- Keep Astro builds fast and lighthouse scores high.

