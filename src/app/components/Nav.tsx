import { Link } from "next-view-transitions";
import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  return (
    <>
      <div className="gt-masthead">
        <h1 className="gt-masthead-title">The Green Tomato</h1>
        <p className="gt-masthead-tagline">{siteConfig.tagline}</p>
        <p className="gt-masthead-edition">
          Vol. I, No. 1 · Calhoun County, Alabama · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <nav className="gt-nav" aria-label="Main">
        <table className="gt-nav-table" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              {siteConfig.nav.map((item) => (
                <td key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </nav>
    </>
  );
}
