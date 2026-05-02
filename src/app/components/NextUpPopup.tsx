"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";

interface Article {
  slug: string;
  frontmatter: { title: string };
}

interface Props {
  next: Article;
}

export default function NextUpPopup({ next }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const key = `gt_nextup_${next.slug}`;
    if (sessionStorage.getItem(key)) return;

    function onScroll() {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.85) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [next.slug, dismissed]);

  function dismiss() {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(`gt_nextup_${next.slug}`, "1");
  }

  if (!visible) return null;

  return (
    <div className="gt-nextup">
      <button onClick={dismiss} aria-label="Close" className="gt-nextup-close">[ X ]</button>
      <p className="gt-nextup-developing">&#9733; DEVELOPING &#9733;</p>
      <Link href={`/articles/${next.slug}`} className="gt-nextup-headline" onClick={dismiss}>
        {next.frontmatter.title}
      </Link>
      <p className="gt-nextup-byline">— Buford Tatum, Bureau Chief</p>
    </div>
  );
}
