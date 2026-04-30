import { pickAds, type Ad } from "@/lib/ads";

function AdCard({ ad }: { ad: Ad }) {
  const href = `/ads/${ad.id}`;
  if (ad.variant === "broken") {
    return (
      <a href={href} className="ad ad-broken" role="complementary" aria-label="Advertisement">
        <span className="broken-image" aria-hidden="true" />
        <p className="ad-broken-caption">(image: ad_banner_07.gif could not be loaded)</p>
      </a>
    );
  }
  return (
    <a href={href} className={`ad ad-${ad.variant} ${ad.image ? "ad-with-image" : ""}`} role="complementary" aria-label="Advertisement">
      <p className="ad-eyebrow">★ ADVERTISEMENT ★</p>
      {ad.image && (
        <img src={ad.image} alt="" width={140} height={140} loading="lazy" className="ad-image" aria-hidden="true" />
      )}
      <div className="ad-text">
        <p className="ad-headline">{ad.headline}</p>
        {ad.body && <p className="ad-body">{ad.body}</p>}
        {ad.cta && (
          <p className="ad-cta">
            <span className="ad-cta-arrow">»</span> {ad.cta} <span className="ad-cta-arrow">«</span>
          </p>
        )}
      </div>
    </a>
  );
}

export default function AdSlot({ slotKey, count = 1 }: { slotKey: string; count?: number }) {
  const ads = pickAds(slotKey, count);
  return (
    <div className="ad-stack">
      {ads.map((ad, i) => (
        <AdCard key={`${ad.id}-${i}`} ad={ad} />
      ))}
    </div>
  );
}
