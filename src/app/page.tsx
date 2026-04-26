import { Link } from "next-view-transitions";
import { getAllArticles } from "@/lib/articles";
import AdSlot from "./components/AdSlot";

export default function HomePage() {
  const articles = getAllArticles();
  const lead = articles[0];
  const rest = articles.slice(1);

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
        rest.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <article className="gt-story">
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
        ))
      ) : (
        <p style={{ fontStyle: "italic" }}>No further news on record. Check back soon.</p>
      )}

      <AdSlot slotKey="home-bottom" count={2} />
    </>
  );
}
