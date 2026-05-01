# GT Autonomous Session Prompt

*Paste this at the start of a new Claude session to run a full unattended build.*
*Last updated: 2026-04-30*

---

## PRE-READ (do this before writing any code or content)

Read these files in full before proceeding:
1. `/Volumes/Samsung_T5/webdev/green-tomato/CONCEPT.md`
2. `/Volumes/Samsung_T5/webdev/green-tomato/LEGAL_GUIDELINES.md`
3. `/Volumes/Samsung_T5/webdev/green-tomato/src/lib/articles.ts`
4. `/Volumes/Samsung_T5/webdev/green-tomato/src/app/articles/` — full directory
5. `/Volumes/Samsung_T5/webdev/green-tomato/content/research/autonomous-session-plan.md`
6. `/Volumes/Samsung_T5/webdev/green-tomato/content/research/satire-targets.md`
7. `/Volumes/Samsung_T5/webdev/green-tomato/content/research/editorial-calendar.md`
8. `/Volumes/Samsung_T5/webdev/green-tomato/content/research/image-prompts.md`

Also run: `ls /Volumes/Samsung_T5/webdev/green-tomato/content/articles/` and
`ls /Volumes/Samsung_T5/webdev/green-tomato/content/articles/_drafts/`
to see what already exists before drafting anything new.

---

## THE GREEN TOMATO — CONTEXT

Fake local newspaper covering Calhoun County, Alabama.
Bureau Chief: Buford Tatum. JSU journalism grad. Earnest. Never in on the joke.
Covers non-events with the gravity of a war correspondent.
Dateline format: `ANNISTON, Ala. —` or `OXFORD, Ala. —` etc.

**Kill list — never use these words:**
delve, foster, leverage, harness, underscore, showcase, navigate (metaphorically),
bolster, streamline, optimize, unlock, unleash, elevate, align, empower, revolutionize,
robust, pivotal, seamless, multifaceted, cutting-edge, "It's worth noting,"
"At the end of the day," "In today's world," em dashes (use periods or commas instead).

**Diversity rule — mandatory:**
Anniston is ~55% Black, ~40% white. Specify race for every named or described person
in articles and image prompts. Do not leave it unspecified. Do not default to white.

---

## WHAT ALREADY EXISTS — DO NOT REWRITE

- `/articles/[slug]/page.tsx` — article detail page exists, do not replace
- `/articles/[slug]/opengraph-image.tsx` — OG image route exists, do not replace
- `src/lib/articles.ts` — `ArticleFrontmatter` type exists, extend if needed, don't replace
- `src/app/sitemap.ts` — exists but only covers profiles; ADD articles to it, don't rewrite
- `/classifieds/page.tsx` — exists with basic content; UPGRADE it, don't replace
- Check `content/articles/*.mdx` before drafting — don't duplicate existing articles

---

## RECURRING CAST — USE THESE, DON'T INVENT NEW OFFICIALS

These names appear across multiple articles and are entirely fictional. Use them freely:
- **Buford Tatum** — Bureau Chief, The Green Tomato. Byline on every article.
- **Mayor Lyle Henley** — fictional Anniston mayor. Ribbon-cutter. Groundbreaking tone.
- **Sheriff Earl Tubb** — fictional Calhoun County sheriff. Measured. "Largely resolved."
- **Pastor Brad Ellison** — fictional pastor, The Bridge at Oxford. Fog machine. Sermon series.
- **Wendell Moss** — fictional Calhoun County EDC director. Every grant is a moon landing.
- **Brenda Cofield** — fictional Saks-area resident. Buford's go-to vox pop. Always at the Saks Walmart.

Real individuals (living people Matt knows) must always get fictional names. Real institutions
(Called Coffee, UWECA, Anniston Star, Knox Foundation) may be named directly.

---

## BUILD TASKS

### 1. scripts/generate-article.ts
Scaffold script that creates a new article MDX file with correct frontmatter.
Location: `scripts/generate-article.ts` (not in `src/`).
Usage: `npx ts-node scripts/generate-article.ts "Article Title" "slug-here"`
Output: `content/articles/_drafts/slug-here.mdx` pre-filled with all frontmatter fields,
`published: false`, today's date, `byline: "Buford Tatum, Bureau Chief"`.

### 2. Add articles to sitemap
`src/app/sitemap.ts` currently only covers profiles. Import `getAllArticles` and add
a sitemap entry per published article. Priority 0.7, changeFrequency "weekly".
Follow the existing pattern for profiles. Do not break the profile entries.

### 3. Upgrade /classifieds/page.tsx
The page exists but needs:
- Buford's Editor's Note at the top (one paragraph, completely earnest, in the GT
  newspaper voice — e.g., noting submission volume, the integrity of the classifieds
  process, Buford's commitment to accuracy in personal ads)
- Expand to 20 total classifieds (keep existing ones, add more)
- At least 3 annotated with `[Editor's note: ...]` in Buford's voice — earnest,
  never ironic, applied with full journalistic gravity to mundane personal ads
- Period-correct column layout (two or three columns on desktop, newspaper feel)
- Categories: For Sale, Wanted, Services, Pets, Community Notices, Personals
- Guidelines: plausible Calhoun County specificity, mix of poignant/absurd/mundane,
  no punchlines — the comedy is in the sincerity, 555- phone numbers, specific prices

### 4. Five new articles
Save as MDX in `content/articles/_drafts/`. Each: 150–250 words, Buford voice,
correct byline, realistic pull quote, kill list checked, diversity rule applied.

Check existing articles first. Do not duplicate. The Dollar General angle is already
covered in `dollar-general-country-club.mdx` — the "two Dollar Generals 400 feet apart"
piece is different enough to use, but confirm first.

**Article topics:**
1. Oxford Parkway construction phase 3 delayed again — city engineer quoted, timeline
   described as "fluid." Wendell Moss notes the county remains investment-ready.
2. Anniston Farmers Market sets single-day attendance record — three vendors confirmed
   attendance. Market manager reaches for comment; call not returned by press time.
3. Local man wins Calhoun County Fair pie competition for fourth consecutive year —
   different pie each time. He declines to name next year's pie. Sheriff Tubb was a judge.
4. Alabama Power substation upgrade described as "once-in-a-generation infrastructure
   moment" — Mayor Henley attends ribbon cutting. Alabama Power representatives present.
   The substation is not visible from the road.
5. New Dollar General opens 400 feet from existing Dollar General — Wendell Moss calls
   it "a sign of continued retail momentum." The original Dollar General declined comment.
   Brenda Cofield, reached at the Saks Walmart, said she had heard.

---

## IMAGE PROMPTS (draft, do not generate)

For each new article drafted, write a locked image prompt following the GT wire-service
template from `content/research/image-prompts.md`. Log each prompt in that file under
a new section with the article slug and date.

Also write prompts for these existing articles that are unpublished pending hero images:
- `highway-21-marquee-standoff.mdx` — two roadside church marquees, competing messages,
  visible from a car window
- `berman-museum-gala.mdx` — museum gala, tuxedos, one empty display case in background
- `quintard-mall-vape-shop.mdx` — ribbon cutting inside mall, balloons, fourth vape storefront

**For all prompts:**
- Model: always GPT (`--model gpt`)
- Follow the standing template: wire service / small-town newspaper photograph
- Specify race for every visible person (Anniston ~55% Black)
- No text unless a sign/logo is part of the joke (misspell real trademarks: NASKAR not NASCAR)
- Photojournalistic grain, slightly blown-out highlights

**Do not generate images.** Draft prompts only and log them. Generation requires
Matt's approval. Exception: if Matt said "generate images without asking this session"
at the start of the session, proceed through generation, then immediately run
`open -R <path>` after each image.

---

## DOC UPDATES (after all drafting is done)

1. Add new articles to `content/research/editorial-calendar.md` with target publish dates
2. Log all image prompts in `content/research/image-prompts.md`
3. Update `content/research/autonomous-session-plan.md` — check off completed Tier 1 items
4. If new satire targets or angles were discovered, add to `content/research/satire-targets.md`

---

## COMMIT STRATEGY

Commit every 3–4 articles rather than one giant commit at the end.
Message format: `Draft [N] articles: [topic1], [topic2]...`
Final commit: `Update docs: editorial calendar, image prompts, session plan`
Push after final commit.

---

## FICTIONAL NAMES — PENDING DECISIONS

Before publishing any Called Coffee or UWECA articles, Matt must confirm:
- Called Coffee owner fictional name (currently TBD — do not publish until confirmed)
- UWECA director fictional name (currently "Calvin Odom" — placeholder, confirm with Matt)
- Main Street Anniston director fictional name (currently "Dorothy Finch" — placeholder)

For autonomous sessions: use the placeholders in drafts. Flag them with a comment:
`{/* FICTIONAL NAME PENDING MATT APPROVAL — currently: Calvin Odom */}`
Do not flip these to `published: true` without confirmed fictional names.
