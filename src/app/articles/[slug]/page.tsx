import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { Link } from "next-view-transitions";
import ArticleImage from "@/app/components/ArticleImage";

const mdxComponents = {
  ArticleImage,
};

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
    <div className="bg-cd-newsprint min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-4 text-[11px] uppercase tracking-widest font-semibold text-cd-text-light">
          <Link href="/" className="hover:text-cd-red transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/articles" className="hover:text-cd-red transition-colors">News</Link>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {article.frontmatter.breaking && (
            <span className="bg-cd-red text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5">Breaking</span>
          )}
          {article.frontmatter.developing && (
            <span className="border border-cd-navy text-cd-navy text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">Developing Story</span>
          )}
          {article.frontmatter.tags?.filter(t => t !== "breaking" && t !== "developing").map(t => (
            <span key={t} className="text-[10px] text-cd-text-light uppercase tracking-wider font-semibold">{t}</span>
          ))}
        </div>

        {/* Headline */}
        <h1
          className="text-cd-text font-black uppercase leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
        >
          {article.frontmatter.title}
        </h1>

        {/* Byline */}
        <div className="border-t border-b border-cd-border py-2 mb-6 flex items-center justify-between gap-3 text-[11px] text-cd-text-light uppercase tracking-wider font-semibold">
          <span>{article.frontmatter.byline ?? "Calhoun Dispatch Staff"}</span>
          <span className="flex items-center gap-3">
            <span>{new Date(article.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </span>
        </div>

        {/* Body */}
        <article
          className="prose-article"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <MDXRemote source={article.content} components={mdxComponents} />
        </article>

        {/* Footer nav */}
        <div className="mt-10 pt-6 border-t-2 border-cd-navy">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cd-navy hover:text-cd-red transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ← All News
          </Link>
        </div>
      </div>
    </div>
  );
}
