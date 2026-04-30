# Image Prompt Archive

Reference for regenerating or iterating on GT article images.

---

## GT Photo Style — Standing Template

Every GT image should read as **wire service / small-town newspaper photography, circa 1998–2004**. Not disposable camera nostalgia. Not cinematic. A local freelance photographer who thinks he's AP.

**Always include in every prompt:**
- `"Wire service photograph"` or `"Small-town newspaper photograph"` — establishes the register
- `"Photojournalistic grain"` — slight film noise, not clean digital
- `"Slightly blown-out highlights"` — flash used indoors, or harsh Alabama sun outdoors
- `"No text"` — always

**Always avoid:**
- Rain or dramatic weather — stacks too many details, oversells the absurdity
- Cinematic lighting, golden hour, or atmospheric haze — too polished
- Sepia or vintage filters — reads as intentional nostalgia, not earnest local news
- Photographers visible in frame — breaks the wire service POV
- Posed subjects — action mid-moment, slightly off-center framing
- All-white crowds or casts — Anniston is a majority-Black city (~55% Black, ~40% white). Defaulting to white subjects misrepresents the place. Fix it in the prompt, not after.
- Real trademarked logos rendered cleanly — always misspell or alter them: "NASKAR" not "NASCAR", "Chik-Fil-A" not "Chick-fil-A", "Wal-Mart Supercenter" partially obscured. If a misspelled logo is part of the joke, include it explicitly — don't suppress it with "No text." "No text" is only for scenes where all text is unwanted noise. See LEGAL_GUIDELINES.md §2.

**Diversity — build it into every prompt:**
Anniston and Calhoun County are racially diverse. The default AI output skews white; correct for it explicitly. For any scene with people:
- Named officials, spokespeople, bystanders: specify race when it matters for accuracy or variety. Don't let the model decide.
- Crowds: specify "mixed crowd" or "diverse group of Calhoun County residents" — do not leave it unspecified.
- One person: consider "a Black woman in a blazer," "a middle-aged Black man," "an older white man," etc. — whatever fits the scene and reflects where this actually takes place.
- Never over-specify to the point of tokenism. The goal is accuracy, not a checklist. If a scene has one person, pick what feels true to the story.

**Always show the prompt to Matt before generating.** Draft it, present it, wait for approval. Never run the tool first.

**After every generation, immediately run `open -R <path>` to reveal in Finder.** No exceptions.

**Model: always GPT** (`--model gpt`) for all GT article images. No exceptions. GPT handles multi-person scenes, institutional settings, and period-correct news photography better than Imagen for this project.

**Base prompt template:**
> [Wire service / Small-town newspaper] photograph. [Scene description — specific, one absurd element max]. [Race/appearance of key subjects — don't leave unspecified]. [Alabama/Calhoun County location detail if applicable]. Photojournalistic grain, slightly blown-out highlights. No text.

---

## Raptor Run Hero — CURRENT (April 29, 2026)

**File:** `public/images/articles/raptor-run/hero.webp`
**Model:** GPT Image 1.5 via Replicate
**Reference image:** None
**Dimensions:** 1024x768 (3:2)

**Prompt:**
> Wire service race photograph. Wide shot of a 5K race on a paved road through a wooded park. A velociraptor chases a pack of runners from behind. Runners in mid-stride, several falling, expressions of terror. Race bibs visible. Sunny day, dappled light through trees. Alabama pine woods on both sides of the road. Photojournalistic grain, slightly blown-out highlights. No text.

**Why this prompt:**
- Wooded park road matches actual Raptor Run course (through Lagarde Park)
- No museum in background — article text establishes location, image doesn't need to
- No photographer — earlier attempts had photographer facing viewer, breaking the wire service register
- No rain — original image had rain, daughter's note was "too much," agreed it was stacking details
- Pine woods are accurate to NE Alabama / the actual course

**What didn't work:**
- Using the museum exterior photo as reference — GPT reproduces style not the actual building
- Pillow gradient composite — runners went transparent in the blend zone
- rembg cutout composite — looked like a bad Photoshop job, off-brand
- Gemini image — good composition but wrong building (massive brutalist tower vs. modest 1960s brick)

**Archived original:** `assets/images/ai-generated/articles/raptor-run/hero-original-rain.webp`

---

## Velvet Magnolia Ribbon Cutting — CURRENT (April 29, 2026)

**File:** `public/images/articles/velvet-magnolia/hero.webp`
**Model:** GPT Image 1.5 via Replicate
**Reference image:** `generated-images/20260429_150010_gpt_small-town-newspaper-photograph.-exterio.webp`
**Dimensions:** 1024x768 (3:2)

**Prompt:**
> Small-town newspaper photograph. Exterior ribbon cutting ceremony in front of a gentleman's club entrance. A man in a suit holds oversized scissors over a red ribbon. Several officials in suits stand flanking him, smiling. Behind them, the sign for 'The Velvet Magnolia' features a tasteful pink neon silhouette of a woman's figure. To the left, an Olive Garden restaurant. To the right, a small framing shop. Daylight, flat lighting, photojournalistic grain, slightly blown-out highlights. No text.

---

## Knox Concert Series Revival — CURRENT (April 30, 2026)

**Article:** `content/articles/knox-concert-series-rebrand.mdx`
**File:** `public/images/articles/knox-concert-series/hero.webp` *(not yet wired — move from merch/designs first)*
**Source:** `merch/designs/20260430_131822_gpt_wire-service-photograph.-interior-of-a-f.webp`
**Model:** GPT Image 1.5 via Replicate
**Dimensions:** 1024x1024 (1:1) — crop to 3:2 before wiring if needed

**Prompt:**
> Wire service photograph. Interior of a formal concert hall with ornate ceiling and rows of empty velvet seats. A professional wrestling ring — corner posts, ropes, canvas mat — is fully assembled on the stage where an orchestra would normally perform. A podium with a microphone stands at the side of the stage, unoccupied. The juxtaposition is total. Alabama civic venue. Photojournalistic grain, slightly blown-out highlights. No text.

---

## Knox Option B — One Act, Full Gravity *(not yet generated)*

**Article:** not yet written
**Concept:** Press conference. A spokesperson in a blazer stands at a podium inside a formal venue. Behind them, a large printed banner or projected image promotes a professional wrestling card — two wrestlers mid-grapple, bright colors. The spokesperson's posture is grave and institutional. The room is half-empty. Photojournalistic grain.

**Prompt (draft):**
> Wire service photograph. Press conference inside a formal civic auditorium. A woman in a blazer stands at a podium. Behind her, a large vinyl banner shows two professional wrestlers in combat, brightly colored, mid-grapple. The room is formal — upholstered chairs, a draped table, institutional lighting. Several audience members seated, expression neutral. Alabama. Photojournalistic grain, slightly blown-out highlights. No text.

---

## Knox Option C — The Holiday Slot *(not yet generated)*

**Article:** not yet written — publish December 2026
**Concept:** A wrestling ring on a concert hall stage, but dressed for Christmas — tinsel on the corner posts, a Santa figure mid-action in the ring. Empty velvet seats. A marquee or banner in the background reads something seasonal. The absurdity is total, the framing is deadpan.

**Prompt (draft):**
> Wire service photograph. Interior of a formal concert hall. A professional wrestling ring on the stage is decorated for Christmas — tinsel on the corner posts, a string of lights along the ropes. A man dressed as Santa Claus stands in the center of the ring, arms raised. Rows of empty velvet seats. Institutional lighting. Alabama civic venue. No audience visible. Photojournalistic grain, slightly blown-out highlights. No text.

---

## GT 404 Splatter Tomato — APPROVED, NOT YET GENERATED

**Used by:** `src/app/not-found.tsx` (replaces the rotated `pixel-tomato.webp` placeholder currently in place) and as the 404-scoped favicon
**Model:** GPT Image 1.5 via Replicate (`--model gpt`)
**Reference image:** `public/images/site/pixel-tomato.webp` — must read as the same character, gone bad

**Two assets to generate:**
1. **Hero splat** — `public/images/site/pixel-tomato-splat.webp`, 512×512, transparent background, 1:1
2. **Favicon splat** — `public/images/site/pixel-tomato-splat-favicon.png`, 32×32 (also export 16×16 if the tool allows). Transparent background. Crop tighter than the hero — splatter trimmed to fit the favicon canvas.

**Prompt (locked — splat variant, not rot):**
> Pixel art icon, 64×64 retro 1990s web sprite scaled up, transparent background. A green unripe tomato — same chunky pixel silhouette, palette, and cartoon stem-leaf as the Green Tomato newspaper mascot — but burst open and splattered. The tomato is cracked down one side with bright green-yellow pulp and seeds spilling out, a few seeds flung outward in pixelated arcs. Small drips and splat blobs radiate around it on the transparent background, like it just hit the ground. Stem still attached, slightly askew. Hard chunky pixels, no anti-aliasing, limited palette of greens (deep green, mid green, lime, pale yellow-green) plus a couple of off-white seed pixels. No text. No drop shadow. Read as a corrupted version of the original mascot, not a different tomato.

**Why this prompt deviates from the wire-service template:**
- This is a site asset / logo, sibling to `pixel-tomato.webp` — not an article photo. Photojournalistic register would be wrong.
- "Same chunky pixel silhouette… as the mascot" forces continuity so the 404 reads as *the GT logo, ruined* — that's the joke
- "Green-yellow pulp" keeps it on-brand (a green tomato bursting reveals paler flesh, not red — leaning red would break the unripe-tomato premise)
- "No drop shadow" matches existing pixel-tomato

**Wire-in (post-generation, one commit):**
1. Swap `src/app/not-found.tsx` `<img src>` from `pixel-tomato.webp` → `pixel-tomato-splat.webp`, drop the `transform: rotate(-8deg)` (splatter has its own asymmetry)
2. Add to `not-found.tsx` metadata: `icons: { icon: '/images/site/pixel-tomato-splat-favicon.png' }` so the browser tab shows the splat tomato on 404 pages only

