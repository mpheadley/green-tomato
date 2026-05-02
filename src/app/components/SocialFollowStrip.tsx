const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/thegreentomato" },
  { label: "Instagram", href: "https://instagram.com/thegreentomato" },
  { label: "X / Twitter", href: "https://x.com/greentomatonews" },
  { label: "YouTube", href: "https://youtube.com/@thegreentomato" },
];

export default function SocialFollowStrip() {
  return (
    <div
      style={{
        background: "#000080",
        color: "#FFFF00",
        borderTop: "2px solid #FFFF00",
        borderBottom: "2px solid #FFFF00",
        padding: "4px 12px",
        fontSize: "0.75rem",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "4px 12px",
      }}
    >
      <strong>★ FIND US ON THE INFORMATION SUPERHIGHWAY:</strong>
      {SOCIALS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFF00", textDecoration: "underline" }}
        >
          [{label}]
        </a>
      ))}
    </div>
  );
}
