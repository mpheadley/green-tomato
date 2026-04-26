import { siteConfig } from "@/lib/site-config";

export default function HitCounter() {
  const count = String(siteConfig.hitCount).padStart(7, "0");
  return (
    <div className="hit-counter">
      <span className="hit-counter-label">You are visitor #</span>
      <span className="hit-counter-digits">
        {count.split("").map((d, i) => (
          <span key={i} className="hit-counter-digit">{d}</span>
        ))}
      </span>
    </div>
  );
}
