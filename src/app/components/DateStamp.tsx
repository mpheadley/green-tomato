import { siteConfig } from "@/lib/site-config";

export default function DateStamp() {
  return (
    <p className="date-stamp">
      <i>Last Updated: {siteConfig.lastUpdated}</i>
      <br />
      <small>Best Viewed in Netscape Navigator 4.0 at 800x600</small>
    </p>
  );
}
