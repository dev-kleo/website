import type { Metadata } from "next";
import { preload } from "react-dom";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { publications } from "../publications-data";
import { profile } from "../site-config";
import { PublicationsBrowser } from "./PublicationsBrowser";
import "./publications.css";

const title = "Publications — Dey Intelligence";
const description = "Research by Abhishek Dey in economics, international business, and AI and data science. Preprints, working papers and publications. Open to doctoral opportunities.";
const image = { url: "/og-v2.png", width: 1731, height: 909, alt: "Dey Intelligence — Abhishek Dey" };

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/publications" },
  openGraph: { type: "website", url: "/publications", siteName: profile.brand, title, description, images: [image] },
  twitter: { card: "summary_large_image", title, description, images: [image.url] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": publications.map((p) => ({
    "@type": "ScholarlyArticle",
    headline: p.title,
    datePublished: String(p.year),
    author: p.authors.map((name) => ({ "@type": "Person", name })),
    ...(p.venue ? { isPartOf: { "@type": "Periodical", name: p.venue } } : {}),
    keywords: [...p.applications, ...p.domains, ...p.methods].join(", "),
    ...(p.links?.paper ?? p.venueUrl ? { url: p.links?.paper ?? p.venueUrl } : {}),
  })),
};

export default function PublicationsPage() {
  preload("/fonts/source-serif-4-latin-wght.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader active="publications" />
    <main className="page-content" id="main-content">
      <div className="pub">
        {publications.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }} />}
        <header className="pub-hero"><h1>Publications</h1><p>Economics, international business, and AI and data science.</p></header>
        <PublicationsBrowser />
      </div>
      <SiteFooter compact />
    </main>
  </div>;
}
