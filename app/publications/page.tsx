import type { Metadata } from "next";
import { preload } from "react-dom";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { publications } from "../publications-data";
import { profile } from "../site-config";
import { PublicationsBrowser } from "./PublicationsBrowser";
import "./publications.css";

const description = "Research by Abhishek Dey across economics, international business, and AI and data science. Filter by application, domain and method.";

export const metadata: Metadata = {
  title: "Publications — Dey Intelligence",
  description,
  alternates: { canonical: "/publications" },
  openGraph: { url: "/publications", title: "Publications — Dey Intelligence", description, images: [{ url: "/og-publications.png", width: 1200, height: 630, alt: "Publications — Abhishek Dey" }] },
  twitter: { card: "summary_large_image", images: ["/og-publications.png"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": publications.map((p) => ({
    "@type": "ScholarlyArticle",
    headline: p.title,
    datePublished: String(p.year),
    author: p.authors.map((name) => ({ "@type": "Person", name })),
    isPartOf: { "@type": "Periodical", name: p.venue },
    keywords: [...p.applications, ...p.domains, ...p.methods].join(", "),
    ...(p.venueUrl ? { url: p.venueUrl } : {}),
    publisher: { "@type": "Organization", name: profile.brand },
  })),
};

export default function PublicationsPage() {
  preload("/fonts/source-serif-4-latin-wght.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return <div className="site-shell pub-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader active="publications" />
    <main className="page-content" id="main-content">
      <div className="pub"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="pub-hero"><h1>Publications</h1><p>Economics, international business, and AI and data science.</p></header>
      <PublicationsBrowser /></div>
      <SiteFooter />
    </main>
  </div>;
}
