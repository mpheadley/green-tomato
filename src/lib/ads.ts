export type Ad = {
  id: string;
  headline: string;
  body?: string;
  cta?: string;
  variant: "spam-pink" | "spam-yellow" | "spam-cyan" | "spam-lime" | "local-bert" | "local-tubb" | "local-edc" | "local-bridge" | "local-vape" | "local-hightower" | "local-funeral" | "local-ammo" | "broken";
};

export const adInventory: Ad[] = [
  // ── Spam (the texture) ──
  { id: "weird-trick", headline: "Doctors Don't Want You to Know This 1 Weird Trick", body: "Local Anniston mom discovers what hospitals refuse to share!", cta: "CLICK HERE!!!", variant: "spam-pink" },
  { id: "47-pounds", headline: "She Lost 47 Pounds With This One Vegetable", body: "Calhoun mom shocks doctors. The vegetable will surprise you.", cta: "Read More »", variant: "spam-yellow" },
  { id: "throw-pillow", headline: "Top Cardiologist: Throw Out Your Pillow Tonight", body: "He says it's the #1 reason your heart is failing.", cta: "Watch Free Video", variant: "spam-cyan" },
  { id: "diabetes", headline: "Diabetes Breakthrough Has Big Pharma Furious", body: "This common kitchen item is a 'natural Ozempic'", cta: "See Why", variant: "spam-lime" },
  { id: "ai-stocks", headline: "AI Says These 3 Stocks Will Make You Rich by Friday", body: "Anniston man retires at 41 using this trick", cta: "FREE PICKS", variant: "spam-pink" },
  { id: "cable", headline: "This $19 Gadget Is Replacing Cable in Anniston", body: "Spectrum doesn't want you to see this", cta: "Order Now", variant: "spam-cyan" },
  // ── Calhoun-twisted spam ──
  { id: "goat", headline: "Anniston Mom Loses 47 Pounds With This Goat", body: "Pictured: the goat. Doctors are speechless.", cta: "CLICK HERE!!!", variant: "spam-yellow" },
  { id: "jsu-trick", headline: "JSU Researcher Discovers Trick Big Education Hates", body: "This 4-second method has students refusing to enroll", cta: "See the Trick", variant: "spam-lime" },
  { id: "cheaha-method", headline: "Cheaha Hiker Discovers Strange New Method", body: "He hasn't paid a power bill in 9 months. You won't believe how.", cta: "Continue »", variant: "spam-pink" },
  { id: "vegetable", headline: "Local Man Sheds Belly Fat By Avoiding This One Calhoun County Vegetable", body: "It's already in your refrigerator", cta: "Find Out More", variant: "spam-cyan" },
  // ── Recurring fictional locals ──
  { id: "bert", headline: "HURT? CALL BERT.", body: "Bert Whitlock, Attorney at Law. I FIGHT FOR YOU.", cta: "256-555-BERT", variant: "local-bert" },
  { id: "tubb", headline: "TUBB FOR SHERIFF", body: "Re-Elect. He's Aware of It.", cta: "Paid for by Friends of Sheriff Tubb", variant: "local-tubb" },
  { id: "edc", headline: "Calhoun County EDC", body: "Investment-Ready Since 1987.", cta: "Wendell Moss, Director", variant: "local-edc" },
  { id: "bridge", headline: "The Bridge at Oxford", body: "Untethered: A Five-Week Journey · Sundays 9 & 11", cta: "Pastor Brad — Coffee Bar Open", variant: "local-bridge" },
  { id: "vape", headline: "Quintard Vape Vault", body: "Calhoun's Premier Vape Destination (Eleventh Location)", cta: "Now Open Near You", variant: "local-vape" },
  { id: "hightower", headline: "Wendell Hightower's Truck Accessories", body: "He Has a Theory.", cta: "Ask Him About It", variant: "local-hightower" },
  { id: "funeral", headline: "Cheaha Funeral Services", body: "At the Top of Our Game. (Slogan unchanged since 1976.)", cta: "Pre-Plan Today", variant: "local-funeral" },
  { id: "ammo", headline: "Ammo Bonanza Outlet", body: "GOING OUT OF BUSINESS!! (Since 2014.)", cta: "Everything Must Go", variant: "local-ammo" },
  // ── The broken slot ──
  { id: "broken", headline: "", variant: "broken" },
];

/** Deterministic ad picker — same slot index → same ad on every render. */
export function pickAds(slotKey: string, count: number): Ad[] {
  const ads = adInventory;
  let h = 0;
  for (let i = 0; i < slotKey.length; i++) h = (h * 31 + slotKey.charCodeAt(i)) >>> 0;
  const out: Ad[] = [];
  for (let i = 0; i < count; i++) {
    out.push(ads[(h + i * 7) % ads.length]);
  }
  return out;
}
