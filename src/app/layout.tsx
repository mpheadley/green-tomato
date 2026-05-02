import type { Metadata } from "next";
import { UnifrakturMaguntia } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import SocialFollowStrip from "./components/SocialFollowStrip";
import NewsletterPopup from "./components/NewsletterPopup";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const blackletter = UnifrakturMaguntia({
  variable: "--font-blackletter",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${siteConfig.url}/feed.xml` },
  },
  openGraph: {
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={blackletter.variable}>
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5099067013703258"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <div className="gt-page">
            <Nav />
            <SocialFollowStrip />
            <Marquee>
              ★ BREAKING: CALHOUN COUNTY COMMISSION CLEARS FULL AGENDA ★ DEVELOPING: OXFORD MAN STILL FROM OXFORD ★ RAPTOR RUN INVESTIGATION ONGOING ★ MUMMY DESCRIBED AS STABLE ★ DOLLAR GENERAL CALLED &quot;COMPLEMENTARY&quot; ★ GT NOW COVERING ALL 67 COUNTIES ★ ALDOT ANNOUNCES COMPLETION ESTIMATE ★ GOVERNOR IVEY ISSUES STATEMENT ★
            </Marquee>
            <main id="main-content" className="gt-body">{children}</main>
            <Footer />
          </div>
          <NewsletterPopup />
        </body>
      </html>
    </ViewTransitions>
  );
}
