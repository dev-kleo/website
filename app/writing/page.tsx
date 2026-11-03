import type { Metadata } from "next";
import Link from "next/link";
import { preload } from "react-dom";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { PublicationsBrowser } from "../publications/PublicationsBrowser";
import "../publications/publications.css";
import { publications } from "../publications-data";
import { profile } from "../site-config";
import { academicPapers, blogPosts } from "../writing-data";

export const metadata: Metadata = {
  title: "Writing & Research — Dey Intelligence",
  description: "Notes, public academic papers, and research reviews by Abhishek Dey.",
  alternates: { canonical: "/writing" },
  openGraph: { url: "/writing" },
};

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function hasPublicLink(href: string) {
  return href.startsWith("https://") || href.startsWith("http://");
}

const publicationsSchema = {
  "@context": "https://schema.org",
  "@graph": publications.map((p) => ({
    "@type": "ScholarlyArticle",
    headline: p.title,
    datePublished: String(p.year),
    author: p.authors.map((name) => ({ "@type": "Person", name })),
    isPartOf: { "@type": "Periodical", name: p.venue },
    keywords: [...p.applications, ...p.domains, ...p.methods].join(", "),
    ...(p.venueUrl ? { url: p.venueUrl } : {}),
  })),
};

export default function WritingPage() {
  preload("/fonts/source-serif-4-latin-wght.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  const papersSchema = academicPapers.length > 0 ? { "@context": "https://schema.org", "@graph": academicPapers.map((paper) => ({ "@type": "ScholarlyArticle", headline: paper.title, description: paper.description, datePublished: paper.year, genre: paper.publicationType, keywords: paper.researchAreas.join(", "), author: { "@id": `${profile.siteUrl}/about#person`, "@type": "Person", name: profile.name }, ...(hasPublicLink(paper.href) ? { url: paper.href } : {}) })) } : undefined;
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader active="writing & research" />
    <main className="page-content" id="main-content">{papersSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(papersSchema) }} />}
      <section className="writing-hero"><p className="eyebrow">Ideas in public</p><h1>Writing &amp; research</h1><p>Notes on building useful AI systems, software, economics, and the research that informs the work.</p></section>
      <section className="writing-section ruled" aria-labelledby="notes-heading"><div className="writing-section-heading"><div><p className="eyebrow">Blog</p><h2 id="notes-heading">Notes</h2></div><p>Short essays, product thinking, and working observations.</p></div>{blogPosts.length > 0 ? <div className="writing-list">{blogPosts.map((post) => <article className="writing-entry" key={post.slug}><div className="writing-entry-meta"><span>{post.topic}</span><time dateTime={post.publishedAt}>{displayDate(post.publishedAt)}</time></div><h3><Link href={post.href ?? `/writing/${post.slug}`}>{post.title} <span aria-hidden="true">→</span></Link></h3><p>{post.summary}</p></article>)}</div> : <p className="writing-empty">New notes will appear here. Add a post in <code>app/writing-data.ts</code> when it is ready to publish.</p>}</section>
      <section className="writing-section ruled" aria-labelledby="papers-heading">
        <div className="writing-section-heading"><div><p className="eyebrow">Public record</p><h2 id="papers-heading">Academic papers &amp; reviews</h2></div><p>Published papers, preprints, literature reviews, and conference work.</p></div>
        {academicPapers.length > 0 ? <div className="writing-list">{academicPapers.map((paper) => {
          const linkIsAvailable = hasPublicLink(paper.href);
          return <article className="writing-entry academic-entry" key={paper.title}>
            <div className="academic-entry-topline">
              <div className="writing-entry-meta"><span>{paper.publicationType}</span><time dateTime={paper.year}>{paper.year}</time></div>
              <span className="status academic-status">{paper.status}</span>
            </div>
            <h3>{linkIsAvailable ? <a href={paper.href} target="_blank" rel="noreferrer">{paper.title} <span aria-hidden="true">↗</span></a> : paper.title}</h3>
            <p>{paper.description}</p>
            <div className="academic-entry-footer">
              <div className="tag-list" aria-label="Research areas">{paper.researchAreas.map((area) => <span key={area}>{area}</span>)}</div>
              {linkIsAvailable
                ? <a className="button academic-link-button" href={paper.href} target="_blank" rel="noreferrer">View paper <span aria-hidden="true">↗</span></a>
                : <span className="button academic-link-button is-disabled" aria-disabled="true">Public link pending</span>}
            </div>
          </article>;
        })}</div> : <p className="writing-empty">Your public papers and academic reviews will appear here. Add each item in <code>app/writing-data.ts</code> with its public link.</p>}
      </section>
      <section className="pub" aria-labelledby="publications-heading">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsSchema).replace(/</g, "\u003c") }} />
        <header className="pub-hero"><p className="eyebrow">Research output</p><h2 id="publications-heading">Publications</h2><p>Economics, international business, and AI and data science.</p></header>
        <PublicationsBrowser />
      </section>
      <SiteFooter />
    </main>
  </div>;
}
