"use client";

import { useEffect, useState } from "react";

interface Props {
  slug: string;
  title: string;
}

export default function FloatingShareBar({ slug, title }: Props) {
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("share-bar-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const full = typeof window !== "undefined" ? `${window.location.origin}/articles/${slug}` : `/articles/${slug}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(full)}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(full)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(full)}`;

  async function copy() {
    await navigator.clipboard.writeText(full).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="gt-float-share"
      style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? "none" : "auto" }}
    >
      <span className="gt-float-share-label">[ SHARE ]</span>
      <a href={xUrl} target="_blank" rel="noopener noreferrer" className="gt-float-share-link">
        [X]
      </a>
      <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="gt-float-share-link">
        [FB]
      </a>
      <a href={emailUrl} className="gt-float-share-link">
        [Email]
      </a>
      <button onClick={copy} className="gt-float-share-link">
        {copied ? "[Copied!]" : "[Copy]"}
      </button>
    </div>
  );
}
