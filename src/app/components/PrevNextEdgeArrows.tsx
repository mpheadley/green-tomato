import { Link } from "next-view-transitions";

interface Article {
  slug: string;
  frontmatter: { title: string };
}

interface Props {
  prev: Article | null;
  next: Article | null;
}

export default function PrevNextEdgeArrows({ prev, next }: Props) {
  return (
    <>
      {prev && (
        <Link
          href={`/articles/${prev.slug}`}
          aria-label={`Previous: ${prev.frontmatter.title}`}
          title={prev.frontmatter.title}
          className="gt-edge-arrow gt-edge-arrow--prev"
        >
          ← PREV
        </Link>
      )}
      {next && (
        <Link
          href={`/articles/${next.slug}`}
          aria-label={`Next: ${next.frontmatter.title}`}
          title={next.frontmatter.title}
          className="gt-edge-arrow gt-edge-arrow--next"
        >
          NEXT →
        </Link>
      )}
    </>
  );
}
