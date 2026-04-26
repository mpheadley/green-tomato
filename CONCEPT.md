# The Green Tomato — Concept Doc
*(formerly working title "The Calhoun Dispatch." Sister project to Southern Legends.)*

---

## The Name

**The Green Tomato.** Onion-mechanics with a Southern accent — vegetable name + self-important "newspaper of record" register. Whistle Stop / Fannie Flagg territory; "green" already carries *unripe, not quite there*, which is exactly Dale's coverage. Dale Brewer as "Bureau Chief, The Green Tomato" is funnier than Bureau Chief of any plausible-sounding paper before he opens his mouth.

Why it's better than "The Calhoun Dispatch":
- Lower defamation surface — nobody confuses *The Green Tomato* with the Calhoun Journal
- More memorable, easier to own visually
- Self-tagline writes itself: *"Calhoun County's Most Trusted News Source Since Recently"* / *"The Vegetable of Record"*
- Frees Dale's gravity to do more comedic work

---

## What It Is

A fake local news outlet covering Calhoun County, Alabama with the earnest gravity of a real bureau. Short-form content — videos, headlines, brief "articles" — that tells true things about NE Alabama through the language of local boosterism.

**Primary purpose: make Matt laugh.**

Secondary: eventually public, if it gets good enough.

---

## The Character

**Dale Brewer** *(working name)*
- Calhoun County Bureau Chief, The Green Tomato
- JSU broadcast journalism grad, never quite made it out of the county
- Three LinkedIn connections
- Genuinely believes the Oxford West Industrial Park expansion is the most important story of our time
- Covers the county commission agenda with the gravity of a war correspondent

Dale is not in on the joke. That's the whole thing.

---

## The Cast

Dale anchors the masthead, but The Green Tomato is a **world** — Springfield, not just Kent Brockman. Each recurring character carries a different comic register. Use them rotationally; let the reader build equity in them so "Mayor Henley announced today" lands before the verb.

- **Dale Brewer** — Bureau Chief. Earnest gravity. The straight man. Files everything as the Pulitzer story he never won.
- **Mayor Lyle Henley** *(Oxford)* — Ribbon-cutter laureate. Every Dollar General is a milestone. Speaks exclusively in groundbreaking-ceremony cadence.
- **Commissioner Buford Latham** — Forty years in office. Folksy non-sequiturs. Has feelings about the courthouse generator.
- **Pastor Brad Ellison** — Megachurch (The Bridge at Oxford). Coffee bar, fog machine, sermon series with names like *Untethered* and *Recalibrate*.
- **Coach Reggie Pickens** *(Piedmont High football)* — Local god. Asked about the offensive line, discusses Christ for eleven minutes. Won't name a starting QB.
- **Wendell Moss, Calhoun County EDC Director** — Every SEEDS grant is a moon landing. The county has been "investment-ready" since 1987.
- **Brenda Cofield** — Dale's go-to "Calhoun resident reached for comment." Always at the Saks Walmart. Has heard things.
- **Mrs. Caroline Hearst-Vance** — Old-Quintard-Avenue widow. Knows everyone's business going back four generations. Does not recognize the Oxford mayor.
- **Sheriff Earl Tubb** — Terse press conferences. *"We're aware of it."* Refuses follow-ups. Has not blinked since 2009.
- **Dr. Phillip Edmondson, JSU Department of Communications** — Dale's "expert source." Wrong with full academic confidence.
- **Trent Wickliffe, The Anniston Star** — Dale's nemesis. Has a Substack. Wears a vest.
- **Wendell Hightower** — Perpetual public-comment guy at commission meetings. Has a theory about the water.

---

## The Format

Short-form video is the natural home:
- 60-second "news reports"
- Dale on location — standing in front of the Oxford Walmart announcing a major retail development
- Dale at a podium covering ribbon-cuttings like they're moon landings
- Bad blazer. Slightly wrong lighting. Complete sincerity.

Secondary: fake headlines and 200-word "articles" in the style of the Calhoun Journal. For when video isn't worth the effort but the joke needs to exist.

---

## Aesthetic Direction

**The Green Tomato is a website that has not been updated since approximately 1998.**

This is the visual register and it's load-bearing. It does three things at once:
- Funny on first load — no setup required
- True parody of how Calhoun County institutions actually present online (county sites, school sites, half the Star's pages)
- Solves brand separation from Southern Legends visually, not just verbally

### The look
- Tiled background (small repeating pattern — green gingham, marble, or "stationery")
- Times New Roman everywhere, Comic Sans for "important" notices
- Marquee tags ("BREAKING: SCROLL TO READ")
- Animated GIFs: under-construction, mailbox, spinning newspaper, dancing baby for "Sports"
- Tables-for-layout aesthetic (modern code, period-correct UI)
- `<hr noshade size="3" color="#000080">` between sections
- Visitor counter ("You are visitor #4,217,330")
- "Last Updated: April 24, 2003" at the bottom of every page
- "Best Viewed in Netscape Navigator 4.0 at 800x600"
- Webring at the bottom linking to other fake Calhoun-area sites
- A "Sign My Guestbook" link that 404s
- One element on every page that is just permanently broken (red X for missing image)
- Email-the-Webmaster link goes to dale@thegreentomato.com

### What it rules out
Modern animations (GSAP, Lenis smooth scroll, scroll-triggered reveals), parallax, scrollytelling, photo carousels, profile cards, featured tilts — anything that looks designed after 2001. See **Build Notes** below for the component triage.

### What it enables
- Cheaper to produce — no design system to maintain
- Stronger comic identity from the URL bar to the footer
- Period-correct banner ads belong here — and they're a load-bearing part of the joke (see **Ad Inventory** below)

The visual joke is the front; the back stays Next.js 16 + MDX + RSC. The whole gag is modern engineering doing 1998 cosplay.

---

## The Rich Veins

From reading local coverage and SL research:

- **Economic development theater** — every SEEDS grant = moon landing. *"Calhoun County EDC Celebrates 47th Consecutive Year of Being Investment-Ready."*
- **Commission meetings** — same seven agenda items, forever. *"Commission Clears Full Agenda: Property Actions, Equipment Purchases, and Approving Last Month's Minutes of Approving the Previous Month's Minutes."*
- **Oxford vs. Anniston** — Oxford thinks it's a city now (Chick-fil-A, Applebee's). Anniston thinks it's a comeback story. Both have been right for 30 years and somehow still aren't.
- **High school football** — covered with more resources and passion than any actual civic issue
- **The Facebook comment section** — the same 12 people, every story, every time. Dale interviews them as experts.
- **Dollar General as economic development** — *"Third Dollar General Opens on Same Block as Two Dollar Generals, Bringing 12 Jobs to Oxford Economy."*
- **The perpetual downtown revitalization** — Anniston has been "on the verge of a renaissance" since approximately 1987.

---

## Institutional Targets

Best silly-lane premises follow the **raptor-run formula**: real institution + one of its actual specific assets, weaponized. Reader recognizes the place; the absurd is one degree off true. Three concentric rings, calibrated by Dale's geographic believability.

### Ring 1 — Calhoun core (Dale's actual beat)
- **Anniston Museum of Natural History** — raptor rehab program *(see: Raptor Run 2026)*
- **Berman Museum** — actually owns Hitler's silver tea set, Napoleon's pistol, Jeff Davis's traveling case
- **Anniston Army Depot** — chemical weapons incinerator history
- **Cheaha State Park** — Alabama's highest point at 2,407 ft
- **Quintard Mall** — dying-mall energy
- **JSU** — Cocky the Gamecock, Marching Southerners, Stadium Drive
- **RMC Anniston** — small-hospital ER comedy
- **Hobson City** — oldest Black-incorporated town in Alabama *(handle straight, not silly)*

### Ring 2 — Drive-time NE Alabama (Dale dispatched out of his depth)
- **Talladega Superspeedway** — the Talladega Curse, infield RV culture
- **Noccalula Falls** *(Gadsden)* — the legend, the ghost tours, the resident goats
- **DeSoto / Sequoyah Caverns** — laser shows in caves
- **Coldwater Mountain bike trails**
- **Mentone** — Ren-faire energy, summer camps
- **Fort Payne** — hometown of Alabama (the band)

### Ring 3 — Wider Alabama / SE region (the rare road trip — Dale's parochial frame becomes the joke)
- **Vulcan statue** *(Birmingham)* — giant naked iron man mooning Homewood
- **U.S. Space & Rocket Center** *(Huntsville)* — Saturn V, Space Camp
- **UAB hospital** — robotic surgery, transplants
- **Helen, GA** — fake Bavarian village
- **Rock City / See Rock City barns**
- **Gatlinburg / Pigeon Forge** — Ripley's-everything
- **Tail of the Dragon** — 318 curves

### Off-limits for the silly lane
- **Selma, Montgomery civil rights sites** — wrong register
- **Sand Mountain churches** (snake handling) — real faith, real people
- **Anything tornado-related** — too recent, too real
- **Auburn / Alabama football** — fanbases are the comedy, not the schools themselves

---

## Ad Inventory

Period-correct banner ads are a load-bearing visual joke — they pair with the 1998 aesthetic and reproduce the actual experience of reading a local Alabama news site, where most of the page real estate is spam. Two flavors of inventory:

### 1. Internet spam ads (the texture — primary)

The garbage that infests every local news site: weight-loss pills, "one weird trick," celebrity gossip, fake medical breakthroughs, AI-generated miracle cures, *"Local Mom Discovers"* content-farm bait. Generic enough to feel like the real local-news experience. Occasionally Calhoun-twisted to fold the lore in.

**Generic register:**
- *"Doctors Don't Want You to Know This 1 Weird Trick"*
- *"She Lost 47 Pounds With This One Vegetable"* — *(the vegetable: the green tomato. Recurring.)*
- *"Top Cardiologist: Throw Out Your Pillow Tonight"*
- *"Diabetes Breakthrough Has Big Pharma Furious"*
- *"AI Says These 3 Stocks Will Make You Rich by Friday"*
- *"This $19 Gadget Is Replacing Cable in Anniston"*
- Banners with terrible AI images (seven fingers, melted faces)
- Auto-play video that cannot be paused
- Pop-up that reappears every fifth page-load

**Calhoun-twisted register (rarer, funnier):**
- *"Anniston Mom Loses 47 Pounds With This Goat"* — Noccalula goat photo
- *"Local Man Sheds Belly Fat By Avoiding This One Calhoun County Vegetable"*
- *"JSU Researcher Discovers Trick Big Education Hates"* — Dr. Edmondson photo, uncredited
- *"Cheaha Hiker Discovers Strange New Method"* — fade-to-blurry-photo

### 2. Recurring fictional local advertisers (secondary — character work)

Same name in the same slot every issue. Lower-rent than the spam, more affectionate. They become world-building.

- **HURT? CALL BERT.** — Bert Whitlock, Attorney at Law. Concerning headshot. *"I FIGHT FOR YOU"* in red Impact font.
- **Wendell Hightower's Truck Accessories** — *"He Has a Theory."* Always pictured next to a Silverado.
- **The Bridge at Oxford** — Pastor Brad in a v-neck. *Untethered: A Five-Week Journey* banner.
- **Quintard Vape Vault** — *"Calhoun's Premier Vape Destination (Eleventh Location)."*
- **Tubb for Sheriff** — *"Re-Elect. He's Aware of It."* Same campaign sign for sixteen years.
- **Ammo Bonanza Outlet** — going out of business since 2014.
- **Cheaha Funeral Services** — *"At the Top of Our Game."* Slogan unchanged since 1976.
- **Calhoun County EDC** — *"Investment-Ready Since 1987."* Wendell Moss thumbs-up.

### Slot rules
- Mostly spam, peppered with the recurring locals — that's the real local-news experience
- One slot per page is permanently broken (red X, "image.gif could not be found")
- Period-correct chrome — gradients, exclamation points, "CLICK HERE!!!", animated GIFs
- **Fake-only.** Real local ads = legal headache and pulls the Calhoun Journal back into frame.

---

## Brand Architecture

**Sister project to Southern Legends** — not a competitor, a complement.

- SL profiles the people doing real work
- The Green Tomato skewers the institutions making their work harder
- Same love for the place, opposite register

Keeps them separate:
- Different domain, different brand, different voice
- SL = earnest, serious, embedded. The Green Tomato = sincerely absurd.
- The Bitter Southerner model: one sensibility, multiple registers

---

## The Pseudonym

Dale Brewer (or whoever) runs The Green Tomato. Matt Headley does not.

**What the pseudonym buys:**
- Calhoun Journal relationship stays clean
- HW clients don't connect it to Matt
- The character has its own voice that doesn't contaminate SL
- When it leaks — and it will — the reveal is its own story

**What it costs:**
- Can't promote it as Matt Headley
- Doesn't directly build personal brand
- Requires maintaining Dale's identity separately

The pseudonym will last maybe 6–12 months in a market this small. Plan for the reveal being a feature, not a failure.

---

## The Real Risk

The Calhoun Journal relationship. Lee Kathryn Evancho reached out personally, wants to syndicate SL work. Her husband runs JLM Communications (built the CJ site). In a market this small, a satire outlet parodying local boosterism reads as mocking the Calhoun Journal specifically — whether intended or not.

Mitigation: pseudonym + enough separation in brand that it's clearly not Matt.

But this is a real consideration before going public.

---

## Status

Concept only. Personal project. Build it when it makes you laugh, not before.

**No timeline. No business case required. This one's just for fun.**

First test: can you write five headlines that make you actually laugh out loud? If yes, there's something here. If not, shelve it.

---

## First Five Headlines (Seed List)

*Working list. The first three came out of a brainstorm Matt liked enough to keep.*

1. *Quintard Mall Welcomes Eleventh Vape Shop, Cementing Status as Region's Premier Vape Destination*
2. *JSU Marching Southerners Asked to Tone It Down for Fifth Consecutive Funeral*
3. *RMC Waiting Room Enters Its Fourteenth Hour, Forms Its Own Government*
4.
5.

---

## Second Seed List — Silly Lane

*Raptor-run formula: real institution + actual specific asset + the absurd is one degree off true + institutional response in HR/press-release language. The bulk of the publication should live here — cheaper to write, safer, more repeatable.*

1. *Berman Museum Charity Gala Concludes With Several Artifacts "Currently Unaccounted For"*
2. *Cheaha Summit Claims Third Hiker This Year; Park Cites "Increased Foot Traffic" as Sign of Success*
3. *Anniston Army Depot Family Fun Day Postponed Pending Wind Direction*
4. *Anniston Museum's "Large One" Reported Missing From Enclosure; Visitors Asked to "Use Best Judgment"*
5. *Talladega Superspeedway Infield RV Achieves De Facto Sovereign Nation Status*
6. *Vulcan Statue Continues to Moon Homewood; Birmingham Council Adopts Resolution Calling It "Heritage"*
7. *Noccalula Falls Resident Goat Achieves Plurality on Tripadvisor; Refuses to Comment*
8. *DeSoto Caverns Laser Show Strikes Stalactite; Something Has Awakened*
9. *Helen, GA Tour Returns Full of Calhoun Residents Convinced They Have Been to Germany*
10. *Coldwater Mountain Trail Association Reports Record Year, Despite or Because of Cyclist Disappearances*

---

## Build Notes — Component Triage

The Next.js + MDX + Tailwind backbone stays. The visible UI is a 1998 cosplay; the engineering is modern. Most existing components were built for a modern editorial publication and don't survive the pivot.

### Keeps (with rework)
- `src/lib/articles.ts`, MDX rendering pipeline, routing
- `Nav.tsx`, `Footer.tsx` — restyled (table-based, period-correct)
- `search/` — re-skinned as a busted FrontPage-era form
- `Comments.tsx` — re-skinned as a "Guestbook"
- `SubscribeCTA.tsx` — re-skinned as "Join Our Mailing List!" with one email field and an animated mailbox

### Cuts
- `ParallaxHero.tsx`, `LenisProvider.tsx`, `ScrollReveal.tsx`, `ReadingProgressBar.tsx` — wrong era
- `ScrollytellingProfile.tsx`, `ProfileCardHero.tsx`, `ProfileCard.tsx`, `FeaturedTilt.tsx` — SL components, not Tomato
- `PhotoStrip.tsx`, `PhotoCarousel.tsx`, `PhotoCarouselLoader.tsx`, `HeroCarousel.tsx` — too modern
- `SermonCard.tsx`, `SongCard.tsx`, `JournalCard.tsx`, `JournalNav.tsx` — leftovers from SL
- `MusicEmbed.tsx`, `AudioPlayer.tsx` — unless reskinned as a RealAudio embed gag
- `StripeBuyButton.tsx`, `StripePricingTable.tsx` — no commerce on the Tomato
- `TimelineBlock.tsx`, `PullQuote.tsx`, `InlineImage.tsx`, `ArticleImage.tsx` — replace with period-correct versions

### New components
- `<Marquee>` — for the BREAKING bar
- `<HitCounter>` — always lying upward
- `<UnderConstruction>` — drop-in GIF wrapper
- `<Webring>` — footer with five fake sister sites
- `<AdSlot>` — rotates through the spam + local inventory
- `<BrokenImage>` — one per page, deliberately
- `<Guestbook>` — replaces Comments
- `<DateStamp>` — "Last Updated: April 24, 2003"

---

## Open Questions

Pending Matt's call before any code work begins:

1. **Confirm the rename.** Doc currently assumes *The Green Tomato* is final. If it's still a maybe, flag before code references downstream multiply.
2. **Headlines 4 and 5.** First Seed List has three locked. Two more needed before the "five make me laugh" test from **Status** is satisfied.
3. **Domain.** `thegreentomato.com`? `thegreentomato.news`? Something more Calhoun-specific (`calhoungreentomato.com`)? Affects the email-the-webmaster gag and overall brand frame.
4. **Dale's last name.** "Dale Brewer" is a working name. Locking it lets him recur cleanly across articles, ads, the webmaster email, the byline, and (eventually) video.
5. **Pseudonym posture.** Aggressive — separate everything, no Matt connection — vs. casual, let it leak when it leaks. Current doc assumes aggressive for 6–12 months; revisit if priorities shift.
6. **Pastor Brad's church name.** "The Bridge at Oxford" is plausible but generic. Worth swapping to something more specifically Calhoun if the bit is going to recur in ads + articles.
7. **Real-or-fake source material in ads.** Doc says fake-only. If the Calhoun-twisted spam uses real photos of real landmarks (Cheaha, Noccalula goat, JSU), confirm — line between "public-domain location image" and "implies endorsement" is thin in a market this small.
8. **First video target.** Format section calls short-form video the natural home, but the publication is currently text + ads only. Decide whether the launch shape is text-first (cheaper, faster) or video-first (the original pitch) before any work starts.

---

## Next Steps

When work resumes (no urgency — see **Status**):

1. **Apply the rename in code.** Update `src/lib/site-config.ts` — currently still "The Calhoun Dispatch." Sweep name, tagline, URL, author, and any layout metadata.
2. **Re-byline existing content.** The Raptor Run 2026 MDX (`content/articles/raptor-run-2026.mdx`) still signs off as "The Calhoun Dispatch." Update byline and sign-off to The Green Tomato voice.
3. **First-pass 1998 treatment.** Build the visible cosplay on a feature branch first — tiled background, period-correct `Nav` and `Footer`, plus the new components in priority order: `<Marquee>`, `<AdSlot>` (with stub inventory), `<HitCounter>`, `<BrokenImage>`, `<DateStamp>`. Land it before deleting anything in the **Cuts** list.
4. **Stub the ad inventory.** Five spam ads + three recurring local ads is enough to feel populated. AI-generate the bad images on purpose (seven fingers is the goal, not the bug).
5. **Cut the SL-leftover components** once the new look is verified end-to-end. See **Build Notes — Cuts**.

The first headline test from **Status** still applies: don't ship anything until five headlines make Matt actually laugh out loud. Currently sitting at three confirmed.

---

## Story Ideas Bank

### The Anniston Museum Mummy
The museum has an actual Egyptian mummy on permanent display. Dale covers it with complete sincerity.

**Headlines:**
- "Anniston Museum Mummy Described as 'Stable' Following Annual Wellness Check"
- "Museum Clarifies Mummy Has Not Moved; Declines to Elaborate"
- "Mummy Exhibit Attendance Up 14%; Mummy Unavailable for Comment"
- "Anniston Man Reports Making Eye Contact With Mummy; Museum Says This Is Normal"
- "Mummy's Condition Unchanged for 3,000 Years, Which Museum Calls 'Encouraging'"
- "Museum Asks Visitors to Stop Talking to the Mummy; Declines to Say Why"
- "Annual Mummy Inspection Completed; Findings Sealed"

**Article angles:**
- Dale does a wellness check interview — museum PR person answers every question with "stable" and "no change"
- A visitor complaint filed after the mummy "seemed different" — museum investigation finds no evidence of movement
- The mummy is named in a grant application as a "community stakeholder"
- Museum installs new lighting near mummy "for visitor experience" — three staff members request transfers the same week

**Connection to raptor run:** The museum houses both the mummy AND live raptors. Dale covers both beats. The Anniston Museum of Natural History is the richest single institution on the beat.

### The Raptor Run
- Real event: Raptor Run 5K + Dino Dash 1K, held April 4 at the museum, through Lagarde Park
- Course: Museum Drive → Longleaf Event Center → Berman Museum parking lot → former Anniston Star building → Lagarde Park → back to museum
- "Dino Dash" is real — kids run in dinosaur costumes (Matt's kid was there)
- The museum has a live raptor rehabilitation program
- Published article: "3 Dead, 5K Continues" — already live

### Dollar General / Country Club
- Published article: "Dollar General Breaks Ground Adjacent to Anniston Country Club, Described as 'Complementary'" — already live

### The Mummy + The Raptors (crossover)
- "Museum Officials Confirm Mummy and Raptors Have Never Been in the Same Room; Offer No Further Context"
- "Mummy Exhibit Relocated Following 'Routine Maintenance' to Raptor Wing; Staff Declines Questions"
