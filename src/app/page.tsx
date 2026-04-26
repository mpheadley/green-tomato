import { Link } from "next-view-transitions";
import { getAllArticles, getLeadArticle } from "@/lib/articles";
import AdSlot from "./components/AdSlot";

export default function HomePage() {
  const lead = getLeadArticle();
  const rest = getAllArticles().filter((a) => a.slug !== lead?.slug);

  return (
    <>
      <div className="gt-section-header">★ Today's Headlines ★</div>

      {lead && (
        <Link href={`/articles/${lead.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <article className="gt-story gt-story-lead">
            <div style={{ marginBottom: 6 }}>
              {lead.frontmatter.breaking && <span className="gt-badge gt-badge-breaking">Breaking!!</span>}
              {lead.frontmatter.developing && <span className="gt-badge gt-badge-developing">Developing</span>}
              {lead.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").slice(0, 2).map(t => (
                <span key={t} className="gt-badge gt-badge-tag">{t}</span>
              ))}
            </div>
            <h2 className="gt-story-headline">{lead.frontmatter.title}</h2>
            {lead.frontmatter.heroImage && (
              <img
                src={lead.frontmatter.heroImage}
                alt={lead.frontmatter.heroAlt ?? ""}
                width={720}
                height={420}
                loading="eager"
                className="gt-story-hero"
              />
            )}
            <p className="gt-story-excerpt">{lead.frontmatter.excerpt}</p>
            <div className="gt-byline">
              By <strong>{lead.frontmatter.byline ?? "Green Tomato Staff"}</strong> ·{" "}
              {new Date(lead.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {lead.readingTime}
            </div>
          </article>
        </Link>
      )}

      <AdSlot slotKey="home-after-lead" count={2} />

      <hr className="gt-rule" />

      <div className="gt-section-header" style={{ marginTop: 8 }}>More News</div>

      {rest.length > 0 ? (
        <div className="gt-story-grid">
          {rest.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <article className="gt-story">
                {article.frontmatter.heroImage && (
                  <img
                    src={article.frontmatter.heroImage}
                    alt={article.frontmatter.heroAlt ?? ""}
                    width={360}
                    height={210}
                    loading="lazy"
                    className="gt-story-thumb"
                  />
                )}
                <div style={{ marginBottom: 4 }}>
                  {article.frontmatter.breaking && <span className="gt-badge gt-badge-breaking">Breaking!!</span>}
                  {article.frontmatter.developing && <span className="gt-badge gt-badge-developing">Developing</span>}
                  {article.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").slice(0, 2).map(t => (
                    <span key={t} className="gt-badge gt-badge-tag">{t}</span>
                  ))}
                </div>
                <h3 className="gt-story-headline">{article.frontmatter.title}</h3>
                <p className="gt-story-excerpt">{article.frontmatter.excerpt}</p>
                <div className="gt-byline">
                  By <strong>{article.frontmatter.byline ?? "Green Tomato Staff"}</strong> ·{" "}
                  {new Date(article.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p style={{ fontStyle: "italic" }}>No further news on record. Check back soon.</p>
      )}

      <AdSlot slotKey="home-bottom" count={2} />
    </>
  );
}
