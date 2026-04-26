import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { Link } from "next-view-transitions";
import ArticleImage from "@/app/components/ArticleImage";
import AdSlot from "@/app/components/AdSlot";

const mdxComponents = { ArticleImage };

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || !article.frontmatter.published) notFound();

  return (
    <>
      <p style={{ fontSize: "0.78rem", marginBottom: 4 }}>
        <Link href="/">Home</Link> &raquo; <Link href="/articles">News</Link> &raquo; <i>{article.frontmatter.title}</i>
      </p>

      <div style={{ marginBottom: 6 }}>
        {article.frontmatter.breaking && <span className="gt-badge gt-badge-breaking">Breaking!!</span>}
        {article.frontmatter.developing && <span className="gt-badge gt-badge-developing">Developing</span>}
        {article.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").map(t => (
          <span key={t} className="gt-badge gt-badge-tag">{t}</span>
        ))}
      </div>

      <h1 className="gt-article-headline">{article.frontmatter.title}</h1>

      <div className="gt-article-byline">
        By <strong style={{ fontStyle: "normal" }}>{article.frontmatter.byline ?? "Green Tomato Staff"}</strong>
        {" — "}
        {new Date(article.frontmatter.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        {" · "}{article.readingTime}
      </div>

      <article className="gt-article-body">
        <MDXRemote source={article.content} components={mdxComponents} />
      </article>

      <AdSlot slotKey={`article-bottom-${slug}`} count={2} />

      <hr className="gt-rule" />

      <p style={{ textAlign: "center", margin: "10px 0" }}>
        <Link href="/articles">[ &laquo; Back to All News ]</Link>
      </p>
    </>
  );
}
