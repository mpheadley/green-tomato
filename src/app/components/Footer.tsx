import { Link } from "next-view-transitions";
import { siteConfig } from "@/lib/site-config";
import HitCounter from "./HitCounter";
import DateStamp from "./DateStamp";

const webring = [
  { label: "Calhoun Co. Probate Office", href: "#" },
  { label: "Oxford Lions Club Online", href: "#" },
  { label: "Anniston Star Memorial", href: "#" },
  { label: "Friends of the Mummy", href: "#" },
  { label: "JSU Geology Department", href: "#" },
];

export default function Footer() {
  return (
    <footer className="gt-footer">
      <div className="gt-webring">
        <strong>★ THE NORTHEAST ALABAMA WEBRING ★</strong>
        [ <a href="#">« Prev</a> ]
        {webring.map((s, i) => (
          <span key={i}>
            {" | "}
            <a href={s.href}>{s.label}</a>
          </span>
        ))}
        {" | "}[ <a href="#">Next »</a> ]
      </div>

      <div className="gt-footer-grid">
        <div>
          <p style={{ margin: "0 0 6px", fontWeight: "bold" }}>The Green Tomato</p>
          <p style={{ margin: "0 0 4px", fontSize: "0.78rem" }}>
            Established {siteConfig.established}.
            <br />
            Editorial: <a href={`mailto:${siteConfig.webmaster}`}>{siteConfig.webmaster}</a>
            <br />
            Sign My <Link href="/guestbook">Guestbook!</Link>
          </p>
          <DateStamp />
        </div>
        <div style={{ textAlign: "center" }}>
          <HitCounter />
          <p style={{ margin: "8px 0 0", fontSize: "0.72rem" }}>
            <span className="broken-image" aria-hidden="true" />
            <br />
            (image: gt_logo.gif)
          </p>
        </div>
      </div>

      <hr className="gt-rule" style={{ borderTopColor: "#fff", opacity: 0.5 }} />
      <p style={{ textAlign: "center", margin: 0, fontSize: "0.74rem" }}>
        &copy; {new Date().getFullYear()} The Green Tomato. All rights reserved.
        All incidents considered developing.
        {" · "}
        <Link href="/privacy">Privacy</Link>
      </p>
    </footer>
  );
}
