# The Pulpit Truth + Green Tomato — Two-Site Strategy

*Captured 2026-05-01 from brainstorm; expanded 2026-05-01 with comprehensive handoff. Operational plan for running both projects.*

*Naming note: project name evolved through brainstorm — originally "Liberty News Network / LNN," then "The Pulpit," locked as **The Pulpit Truth** 2026-05-01. The "Truth" addition commits to the satirical posture (real evangelical-truth-outlet register). See `THE_PULPIT_TRUTH.md` for concept and `pulpit-truth-naming-decision.md` for the full decision arc.*

*Strategy update (handoff): The Pulpit Truth launches **inside** The Green Tomato as a Faith & Religion section, then spins off as an independent publication once it has traction. Earlier framing (syndicate from a separate Pulpit site to GT) is replaced by incubation-then-spinoff.*

---

## The Two-Project Frame

**The Pulpit Truth** — national focus, primary scaling target, larger audience potential. Progressive-Christian satire. Insider credibility (M.Div Northern Seminary, 20 years UMC pastoral). See `THE_PULPIT_TRUTH.md`.

**The Green Tomato (GT)** — regional Alabama / East Central Alabama. Live, not yet publicly launched. Hosts The Pulpit Truth during incubation. See `CONCEPT.md`.

**Why both, why not one:**
- The voices don't overlap. Buford is a Calhoun County bureau chief who cannot do national religion satire without breaking character. The Pulpit Truth's communications-director-of-Zion narrator cannot do Oxford's third Dollar General without breaking character. Forcing them into one outlet flattens both.
- The audiences are different. The Pulpit Truth scales to ex-evangelicals and progressive Christians nationally. GT scales to Calhoun County and adjacent. Overlap exists, but the front doors should be different so each audience finds its outlet.
- The risk profiles are different. GT names real Anniston-area institutions under Matt's pseudonymous-but-traceable byline. The Pulpit Truth names megachurch pastors and national political figures under hard-pseudonymous bylines (Rev. Beauregard / Judson) with identity-protection workflows for video. Different legal posture, different editorial guardrails.
- The aesthetics should be different. GT is locked-in 1998 cosplay. The Pulpit Truth should look current (modern Christian newsmagazine register). One site cannot do both visual jokes — which is partly why The Pulpit Truth eventually spins off.

**Why not pick one and drop the other:**
- GT is already live with ~30 articles. Sunk-cost is small but real, and the work is good.
- The Pulpit Truth has a clear gap-in-market thesis and Matt's deepest credential. Hard to walk away from.
- Hosting The Pulpit Truth inside GT during incubation costs nothing extra and creates cross-pollination.

---

## Identity Protection (load-bearing)

Matt's face and name on Pulpit content risks damaging Headley Web (web design business) and Southern Legends (community storytelling) — both have conservative Jacksonville, Alabama clientele. **Matt's identity must stay protected locally. This is non-negotiable.**

GT operates with looser pseudonymity (Buford is the persona; Matt's authorship is structural but not advertised). The Pulpit Truth operates with hard pseudonymity:
- All bylines under fictional names (Rev. Beauregard for video, Judson for written)
- Video uses face swap or careful framing + voice alteration
- Pseudonym announced on camera ("I'm Rev. Beauregard")
- Matt's real name never appears on Pulpit content

This adds a constraint to the build: even though The Pulpit Truth incubates inside GT, the Pulpit content needs separate authorship attribution and visual treatment. When the Faith & Religion section ships, its bylines and About content cannot reveal Matt.

---

## Sequencing

### Now → near term (next 1–2 months)
- **GT continues at current pace** (1–2 articles/month, per `editorial-calendar.md`). Don't accelerate. Don't slow.
- **The Pulpit Truth voice test.** Three drafts already complete (Shepherd App, Submission Sermon, Chick-fil-A Baptism — see `pulpit-truth-drafts.md`). Extend to 5–10 articles in flat Markdown. Goal: prove the voice holds across the Phase 1 / Phase 2 / Phase 3 launch slate. If it doesn't, fix the concept before building infrastructure.
- **Lock pseudonyms.** Rev. Beauregard / Judson are working candidates. Lock with the first published piece.
- **Domain decision deferred.** Pulpit doesn't need its own domain during incubation phase. Defer until spinoff.

### Mid term (2–6 months out)
- **Wire Faith & Religion section into GT.** This is The Pulpit Truth's incubation home. Visual treatment for Pulpit content distinct from Buford's voice — different masthead badge, different pseudonym attribution, ideally a different stylesheet within the section.
- **Promote drafted articles to MDX in `content/articles/_drafts/`** with `pulpit-` prefix, ready for the Faith & Religion section.
- **Begin video for The Pulpit Truth** — sermon-style segments first (most distinctive to brand). Identity-protection workflow (face swap tool, voice alteration) gates video pace; decide on tooling before filming.
- **Identify Black-church-tradition collaborator** for The Pulpit Truth. Do not launch that column without one.
- **Make intro to Calhoun County progressive-Christian TikTok preacher.** Possible collaborator on video and commentary; access to Sebastian (videographer son) could solve the production-capacity bottleneck.
- **Audience benchmark:** 3–6 months to 1,000 readers. Not a promise, a checkpoint to evaluate spinoff readiness.

### Long term (6+ months)
- **Public launch GT** (still pre-launch — needs the holdback removed when ready).
- **The Pulpit Truth spinoff** once traction is established (1,000+ readers, distinctive audience separate from GT's regional readership). Independent domain (`thepulpit.news` / `pulpit.news`), independent visual identity (modern Christian newsmagazine), independent pastor network.
- **Faith & Religion section in GT continues** — at spinoff, it transitions from "incubation home" to "syndicated view of Pulpit content." Same articles, two front doors.
- **Walton Goggins / Gemstones pitch** only after The Pulpit Truth has a body of work to point at.
- **Patreon / merchandise / speaking** as audience grows.

The order matters: GT is already running, so it doesn't need a sprint. The Pulpit Truth is the new build inside it, and should get the focused energy. Don't try to do both new at once.

---

## Home Base — Incubate Inside GT, Then Spin Off

**Phase 1 — Incubate (months 0–6).** The Pulpit Truth launches as the Faith & Religion section of GT. Zero new infrastructure cost. Articles live as MDX in GT's content tree, badged as Faith & Religion / The Pulpit Truth. Bylines pseudonymous (Rev. Beauregard / Judson). About copy explains Faith & Religion as content from "The Pulpit Truth, the official communications outlet of Zion Community Church" — playing the bit straight.

**Phase 2 — Spinoff (months 6+, contingent on traction).** The Pulpit Truth launches at its own domain with its own visual identity (modern Christian newsmagazine register). GT's Faith & Religion section continues as a syndicated view — same articles, GT-styled chrome — to keep both front doors active.

This is cheaper than premature launch. The Pulpit Truth doesn't need its own domain or chrome until it has a body of work and an audience that justifies separate infrastructure.

---

## Syndication Model (post-spinoff)

**GT → The Pulpit Truth:** GT does not feed The Pulpit Truth. Calhoun-specific bits don't travel.

**The Pulpit Truth → GT:** GT pulls The Pulpit Truth's faith content into a "Faith & Religion" section. This:
- Gives GT a fifth section without writing more
- Cross-promotes The Pulpit Truth to GT's regional audience (likely overlap)
- Keeps GT's local voice intact — Pulpit content is clearly badged as syndicated, not Buford

**Implementation note (when we get there):** keep The Pulpit Truth articles as the source of truth post-spinoff. GT's faith section should be a syndicated view, not duplicate MDX files. Probably a content collection or build-time fetch from a shared content directory. Decide when building, not now.

**Cross-pollinating bits (one observation, two pieces):**
- **Chick-fil-A theology.** GT covers a specific Oxford CFA opening as religion journalism (already drafted: `_drafts/chick-fil-a-oxford-chosen.mdx`). The Pulpit Truth covers the national pattern (Chick-fil-A Baptism — drafted, see `pulpit-truth-drafts.md`). The Pulpit Truth's Chick-fil-A piece even names Oxford as the pilot location, which makes it a natural first crossover when both pieces ship.
- **Megachurch coverage.** GT has Pastor Brad Ellison at The Bridge at Oxford (CONCEPT.md cast). The Pulpit Truth has the Communications Director of Zion Community Church + a stable of pastor characters (Hipster, Neo-Calvinist, Prosperity, Fundamentalist, Megachurch Celebrity, Southern Baptist Traditionalist). Don't merge; local and national versions of the same archetype.
- **Southern Gospel.** Could go either way. Default to The Pulpit Truth unless the bit is specifically Calhoun-coded.

Rule of thumb: if it could run in any Bible Belt town, it's The Pulpit Truth. If it requires Calhoun County context to land, it's GT.

---

## Green Tomato — New Angles from This Brainstorm

The brainstorm surfaced GT-specific bits not yet in `satire-targets.md` or `editorial-calendar.md`. Bank these here; promote into the editorial calendar when ready to draft.

### Anniston / Calhoun County
- **Mayor Sierra Smith** — young, Black, possibly the most qualified person for a much bigger job. Satirize the *mismatch* between her skills and the job, not her. She's the straight man; the institution is the joke. **Loop her in before publishing anything that mentions her by fictional analog.** Risk: even a fictional name tracking too closely reads as targeting her personally. Get her sign-off first.
- **Anniston selling RMC to Orlando Health** — already has a research file (`rmc-orlando-health.md`); pull angles from there.
- **County Commission and Sheriff candidate forums** — Buford covers as primary process journalism. Wendell Hightower public-comment guy is the recurring color.
- **Farmers market director vacancy** — handle carefully. Specific enough that publishing satire about it could out the author to people in the loop. Hold or write generically.
- **Calhoun County America 250 celebration** — civic-booster register, Wendell Moss EDC angle, "America 250 Committee Cancels Fourth Subcommittee."

### Chief Ladiga Trail
- "Trail Enthusiasts Shocked to Learn Chief Ladiga Was an Actual Person"
- "Jacksonville State Students Finally Discover Trail Name Means Something"
- "Local Historians Announce Major Discovery: Chief Ladiga Trail Actually Connected to History"
- The bit: cultural erasure and performative Indigenous history recognition. Satirize the institutional forgetting, not Indigenous history itself. Easy to misread — write carefully.

### Alabama Politics
- 2026 gubernatorial race — Ivey term-limited, Tuberville running. Buford covers as wire-service.
- Auburn's new head coach Alex Golesh — coaching absurdity, plays into existing GT football register.
- Iron Bowl satire — already implied in CONCEPT.md.
- **Sabanology as religion** — fans baptized in Saban's name. "Theology of Eternal Domination" connecting football supremacy to Christian nationalism. **This is a hinge bit** — could run on either site. Probably GT first (Alabama-coded), then a national version on The Pulpit Truth.

### Food / Retail Culture
- Jack's as senior center — "Jack's Expands Senior Services After Realizing They're Running De Facto Retirement Community." Fits GT's existing Jack's-as-sacrament register.
- Duck Dynasty fashion line — rural aesthetic commodified.
- Tractor Supply manager runs for mayor.

### Civil Rights / Racial Justice
- "Alabama Celebrates Civil Rights History by Doing Nothing About Current Racism"
- "State Education Board Discovers Ingenious Loophole: Teaching Civil Rights Without Mentioning Systemic Racism"
- "Birmingham Landmarks Attract Tourists Eager to Learn History They'll Immediately Forget"
- The risk: this beat is the easiest place to slip into preaching. The headline does the work; the body should be deadpan civic-booster voice, not editorial. If the body needs to *explain* why the institution is wrong, the satire failed.

### Education / Culture Wars
- "Alabama Schools Add Ten Commandments Displays, Accidentally Violates Most of Them"
- "State Education Board Clarifies: Evolution Optional, Creationism Mandatory"
- "Local Library Announces Brave New Policy: Books We Haven't Read Yet Are Banned First"

### Immigration
- "Alabama Passes Strictest Immigration Bill, Immediately Realizes Entire Economy Collapses"
- "ICE Raid in Calhoun County Accidentally Deports Half the City Council"
- "Local Man Celebrates Immigration Enforcement Until Realizing His Entire Construction Crew Was Undocumented"
- "Alabama Passes Immigration Crackdown, Economy Collapses Within Hours, State Immediately Blames Biden"
- Same risk as civil rights beat: this is satire of institutional cognitive dissonance, not of the people affected. Keep the lens on the institution.

---

## Proposed GT Site Sections

Currently GT site structure is flat-ish (articles, drafts). Brainstorm proposed:
- Politics
- Faith & Religion (syndicated from The Pulpit Truth)
- Arts & Culture
- Lifestyle
- Gardening
- Sports

**Recommendation:** don't add sections until there's enough content to populate them. A section with two articles in it reads as broken. Re-evaluate when we have ~10 published articles per proposed section. Faith & Religion is the exception — once The Pulpit Truth exists, it can launch with however many articles already exist.

---

## Collaborators / Inspirations to Research

Track these and follow up. Most are Pulpit-relevant.

- **Phil Vischer (VeggieTales) / Holy Post Podcast** — progressive Christian commentary; reference for tone, possible boost
- **Mockingbird Media** — Episcopal/Presbyterian progressive Christian outlet; reference, possible cross-pollination
- **John Wesley graphic/comic strip** — Methodist pastor satire project; possible collaborator
- **Walton Goggins / Righteous Gemstones producers** — long-term pitch; not a near-term move
- **Local Jacksonville theater friends** — real actors for The Pulpit Truth video content; line up before video production
- **Real pastor network across denominations** — guest contributors for The Pulpit Truth; build the list now, ask later
- **Black church tradition collaborator** — *required* for the fake-pastor column. Do not launch without one.
- **Calhoun County progressive Christian TikTok preacher** — knows Sebastian (videographer son). Possible collaborator on video and commentary. Make the intro early — production capacity may be solvable here.

---

## Strategic Notes (kept here so they don't get lost)

- The Pulpit Truth = national focus, primary project (M.Div Northern Seminary, 20 years UMC pastoral)
- GT = regional Alabama focus, secondary / Pulpit's incubation home pre-spinoff / syndication partner post-spinoff
- Both start from zero audience — The Pulpit Truth has bigger national scaling potential
- Matt's pastoral background = credibility to satirize from inside the tradition (cannot be faked, irreplaceable)
- The Pulpit Truth is prophetic work for Matt, not just a comedy project. Hold it with that weight. Grief over lost ministry is real and present; the project is partly healing work.
- Always punch up at systems, never down at victims (especially survivors of spiritual abuse)
- Identity protection for The Pulpit Truth is non-negotiable. Pseudonyms (Rev. Beauregard, Judson) and face/voice alteration for video are required.
- Find real Black pastor collaborator for Black church tradition column — don't write that voice yourself
- Loop in Mayor Sierra Smith before publishing pieces about her (GT-side risk, separate from Pulpit identity protection)
- Don't dumb down theology — Matt's M.Div is a strength, but stay in pew vocabulary not seminary vocabulary
- Video strategy: repackage articles as deadpan news anchor / sermon-style clips for TikTok and Reels

---

## What This Doc Is Not

This is a planning capture, not a roadmap commitment. Decisions get made when we get to them. The point is to keep the brainstorm from evaporating between sessions and to have a single place to consult when picking the next move.

Update this doc when sequencing changes, when new angles surface, or when a question on it gets answered. Don't update it speculatively.
