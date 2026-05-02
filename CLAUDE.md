# The Green Tomato — Agent Orientation

Read this before touching any code. It tells you what exists, where it lives, and the voice/aesthetic rules that govern every line of content and UI.

---

## What This Product Is

A fake local newspaper covering Calhoun County, Alabama with the earnest gravity of a real bureau. Short-form satire — articles, headlines, classifieds — that tells true things about NE Alabama through the language of local boosterism.

**Primary purpose: make Matt laugh.**
**Secondary purpose: passive income (Google AdSense, already live — `ca-pub-5099067013703258`).**

This is NOT a serious content platform. Do not over-engineer it. Keep it weird and fun.

---

## The Voice — This Is the Most Important Thing

**Persona: Buford Tatum, Bureau Chief, The Green Tomato**
- JSU broadcast journalism grad, never quite made it out of Calhoun County
- Three LinkedIn connections
- Covers the Oxford West Industrial Park expansion with the gravity of a war correspondent
- **Buford is not in on the joke.** That is the whole thing.

**The aesthetic:** Onion-mechanics with a Southern accent. Earnest, not ironic. Every article treats a non-event with the solemnity of breaking news.

### Kill List (never use these words in any content or UI copy)
`delve, leverage, harness, foster, robust, pivotal, seamless, tapestry, elevate, revolutionize, empower, streamline, optimize, cutting-edge, innovative`

Also banned in copy: em dashes, semicolons in narrative, "Moreover/Furthermore/Additionally" as paragraph openers, "In conclusion."

**Beat expansion (2026-05-01):** GT now covers all of Alabama, not just Calhoun County. Buford's home base remains Calhoun County, but he now files from Montgomery, Birmingham, Huntsville, Mobile, Auburn, Tuscaloosa, and anywhere in the state. The voice and earnestness do not change. The beat gets bigger.

### Content Checklist (run before writing any article or UI copy)
- Does Buford sound earnest? (Never knowing, never winking)
- Is the subject genuinely local to Alabama? (Calhoun County is home base; statewide coverage is now in scope)
- Does the headline treat a non-event as significant?
- Are there specific details? (Names, prices, square footage, years of service)
- Does the piece avoid explaining the joke?

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS v4 + CSS custom properties in globals.css |
| Font | UnifrakturMaguntia (blackletter masthead, `--font-blackletter`) + Times New Roman (body — hardcoded in CSS) |
| Content | MDX files in `content/articles/` + gray-matter + reading-time |
| Database | Supabase (`src/lib/supabase.ts`) — for comments and guestbook |
| Monetization | Google AdSense (`ca-pub-5099067013703258`) — live in layout.tsx |
| View transitions | `next-view-transitions` |
| Deploy | Vercel |

---

## The 1998 Aesthetic

This site deliberately looks like a 1998 local newspaper website. That is not a bug.

**Design tokens** (CSS vars in `globals.css`):
```
--gt-bg: #d8e8c8        /* gingham green page background */
--gt-paper: #FFFFFF     /* content area "paper" */
--gt-text: #000000      /* body text */
--gt-navy: #000080      /* masthead background, rules */
--gt-yellow: #FFFF00    /* masthead text */
--gt-teal: #008080      /* accent */
--gt-link: #0000EE      /* unvisited links */
--gt-visited: #551A8B   /* visited links */
--gt-rule: #000080      /* horizontal rules */
```

**Layout classes** (defined in `globals.css`):
- `.gt-page` — fixed 760px width, white paper with navy ridge border
- `.gt-masthead` — navy bg, yellow text, double-border bottom
- `.gt-body` — main content area with padding
- `.gt-story` — article card
- `.gt-story-lead` — featured/lead article
- `.gt-story-headline` — article headline style
- `.gt-byline` — "By Buford Tatum, Bureau Chief · [date] · N min read"
- `.gt-badge` — category pills (breaking, developing, tag)
- `.gt-rule` — navy `<hr>`
- `.gt-section-header` — "★ Today's Headlines ★" style section labels
- `.gt-story-grid` — multi-column article grid

Do not break the aesthetic. No modern rounded cards, no sans-serif body, no gradients.

---

## Directory Map

```
content/
  articles/           — Published MDX articles (frontmatter + body)
  articles/_drafts/   — Unpublished drafts (not rendered)
  merch/              — Merch data
  research/           — Research notes

src/
  app/
    articles/[slug]/  — Article detail page + OG image
    articles/         — All articles listing
    classifieds/      — Classifieds page
    guestbook/        — Guestbook (Supabase-backed)
    print/            — Printable edition
    search/           — Full-text search (client component)
    shop/             — Merch shop (Stripe buy buttons)
    api/
      comments/[slug]/route.ts    — GET comments per article
      comments/submit/route.ts    — POST new comment
      subscribe/route.ts          — POST newsletter signup
    components/
      AdSlot.tsx         — Google AdSense slot (renders programmatic + "fake" period ads)
      ArticleImage.tsx   — Responsive article image
      AudioPlayer.tsx    — Period-correct audio player UI
      Comments.tsx       — Comment thread per article
      CookieBanner.tsx   — GDPR/CCPA cookie notice
      DateStamp.tsx      — "UPDATED 4:32 PM CST" style timestamp
      EditionDate.tsx    — "Tuesday, [date]" edition header
      Footer.tsx         — Masthead-style footer
      HitCounter.tsx     — Fake hit counter (aesthetic)
      Marquee.tsx        — Scrolling breaking news ticker
      Nav.tsx            — Period-correct navigation bar
      PullQuote.tsx      — Blockquote with navy rule
      ShareButtons.tsx   — Social share (era-appropriate icons)
      SubscribeCTA.tsx   — Email subscribe CTA
      VideoEmbed.tsx     — YouTube embed, period-styled frame
    page.tsx             — Homepage: lead article + grid + AdSlots
    layout.tsx           — Root: UnifrakturMaguntia, Nav, Marquee, Footer, AdSense script
    globals.css          — All design tokens + gt-* CSS classes

  lib/
    articles.ts        — getAllArticles(), getArticleBySlug(), getLeadArticle(), getAllTags()
    ads.ts             — Ad slot inventory and rotation
    journal.ts         — Journal content helpers
    profiles.ts        — Profile/person content helpers (SL crossover)
    search.ts          — Full-text search logic
    site-config.ts     — siteConfig: name, tagline, description, URL
    supabase.ts        — Supabase client (comments, guestbook, subscribers)
```

---

## Article Content System

Articles are MDX files in `content/articles/` with this frontmatter schema:

```yaml
---
title: "Oxford Man Reports Feeling Cautiously Optimistic About Spring"
date: "2026-04-15"
excerpt: "Local man cites pollen counts, recent road work as key variables."
byline: "Buford Tatum, Bureau Chief"
tags: ["Local", "Human Interest"]
published: true          # false = stays in _drafts behavior, not rendered
featured: false          # true = lead article on homepage
breaking: false          # true = BREAKING!! badge
developing: false        # true = DEVELOPING badge
heroImage: "/images/articles/spring-optimism.webp"
heroAlt: "Man standing near dogwood tree, expression unreadable"
---
```

**`published: true`** is required to appear on the site. Omitting it = hidden.
**`featured: true`** makes it the lead article. Only one article should be featured at a time.

To create a new article: add an MDX file to `content/articles/` with correct frontmatter. The lib reads the filesystem at build time — no database needed for articles.

---

## What Is Built (do not rebuild)

- Homepage with lead article, article grid, AdSlots
- Article detail pages with OG image per article
- All articles listing
- Classifieds page
- Guestbook (Supabase)
- Search
- Print edition
- Shop page (Stripe buy buttons — merch)
- Comments per article (Supabase)
- Newsletter subscribe API
- Scrolling breaking news ticker (Marquee)
- Hit counter (aesthetic, not real analytics)
- Cookie banner
- Full 1998 aesthetic: gingham bg, navy masthead, Times New Roman body, yellow/navy palette

---

## What Is NOT Built Yet

### High priority
- **New article generator script:** `scripts/new-article.ts` — scaffold a new MDX file with correct frontmatter, slug from title, current date
- **Newsletter integration** — subscribe API exists but no email provider is connected. Options: Buttondown, Beehiiv, or Resend. Pick one and wire it.

### Low priority (80/20 rule — only if fun)
- Direct local business ad sales (`/advertise` page)
- Buford's "Editor's picks" sidebar
- "Letters to the Editor" section

---

## Running Locally

```bash
cd /Volumes/Samsung_T5/webdev/green-tomato
npm run dev       # localhost:3000
npm run build     # verify before claiming done
```

**Env vars:**
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
# Google AdSense is hardcoded in layout.tsx (ca-pub-5099067013703258)
```

---

## Content Rules for Agents Writing Articles

1. **Buford Tatum** is always the byline: `"Buford Tatum, Bureau Chief"`
2. Buford covers Calhoun County: Oxford, Anniston, Jacksonville, Piedmont, Cleburne County, Weaver, Ohatchee, Delta, Talladega (nearby)
3. JSU = Jacksonville State University (in Jacksonville, AL — Buford's alma mater)
4. Every story treats a minor local event with maximum gravity
5. No punchlines, no irony, no winking — pure Buford earnestness
6. Specific details always: dollar amounts, square footage, years, named officials with full titles
7. Pull quotes from made-up locals ("'I think it's going to be really good for the area,' said one resident")
8. Article length: 150–300 words is the Buford sweet spot
9. Run the kill list before delivering any content

---

## Self-Verification Contract

`npm run build` must pass. Fix all TypeScript and build errors before reporting done.

---

## Writing Coach & Audit Triggers

When the user says any of the phrases below, **immediately invoke the corresponding slash command** — no confirmation needed.

| User says | Invoke |
|---|---|
| "writing guide", "writing coach", "coach me", "satire guide", "satire coach", "socratic coach", "homiletics coach" | `/coach-gt` |
| "audit this", "check this piece", "audit satire", "run the audit", "voice check" | `/audit-satire [path to current article]` |
| "voice guide", "authentic voice guide" | Read `content/research/SATIRE-CRAFT-GUIDE.md` silently and apply rules; confirm to user |

Ask for the file path if none is obvious from context.

## Image Generation

**Always use GPT for GT images. Never ask — GPT is locked for this publication.**

Skip the "Imagen or GPT?" prompt. Run the full checklist in `content/research/image-prompts.md` before every generation.
