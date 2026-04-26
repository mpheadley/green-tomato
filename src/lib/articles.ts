import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content/articles");

export interface ArticleFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  byline?: string;
  published: boolean;
  featured?: boolean;
  breaking?: boolean;
  developing?: boolean;
  heroImage?: string;
  heroAlt?: string;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: string;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map(getArticleBySlug)
    .filter((a): a is Article => a !== null && a.frontmatter.published === true)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getAllTags(): string[] {
  const tags = new Set(getAllArticles().flatMap((a) => a.frontmatter.tags ?? []));
  return Array.from(tags).sort();
}

/** Returns the lead article (featured: true) or falls back to the most recent. */
export function getLeadArticle(): Article | null {
  const all = getAllArticles();
  if (all.length === 0) return null;
  return all.find((a) => a.frontmatter.featured) ?? all[0];
}
