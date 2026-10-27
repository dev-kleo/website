import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { profile } from "../site-config";
import type { Copy } from "./copy";
import "./ozon-price-tracker.css";

export const chromeWebStoreUrl = "https://chromewebstore.google.com/detail/ozon-price-tracker/dodppojnnlcmbjeenenmpalmiikkmfkh";

function jsonLd(c: Copy) {
  const url = `${profile.siteUrl}${c.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Price Tracker for Ozon, Wildberries & Yandex Market", alternateName: "Ozon Price Tracker", applicationCategory: "BrowserApplication", operatingSystem: "Chrome", description: c.description, url, downloadUrl: chromeWebStoreUrl, inLanguage: c.lang, author: { "@type": "Person", name: profile.name, url: profile.siteUrl } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: c.lang === "ru" ? "Главная" : "Home", item: profile.siteUrl },
        { "@type": "ListItem", position: 2, name: c.lang === "ru" ? "Работы" : "Work", item: `${profile.siteUrl}/projects` },
        { "@type": "ListItem", position: 3, name: c.breadcrumb, item: url },
      ] },
      { "@type": "FAQPage", inLanguage: c.lang, mainEntity: c.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };
}

function PriceChart({ c }: { c: Copy["chart"] }) {
  return <figure className="op-tile">
    <div className="mono op-tile-top"><span>{c.top}</span><span className="op-tile-status"><span className="dot" aria-hidden="true" />{c.illustration}</span></div>
    <p className="op-product">{c.product}</p>
    <div className="op-price-row"><strong className="op-price">7 490 ₽</strong><s className="op-was">9 090 ₽</s><span className="mono op-drop">−17.6%</span></div>
    <svg viewBox="0 0 720 250" role="img" aria-labelledby="op-chart-title op-chart-desc">
      <title id="op-chart-title">{c.title}</title>
      <desc id="op-chart-desc">{c.desc}</desc>
      <g className="op-grid"><line x1="60" x2="600" y1="30" y2="30" /><line x1="60" x2="600" y1="102" y2="102" /><line x1="60" x2="600" y1="174" y2="174" /><line x1="60" x2="600" y1="210" y2="210" /></g>
      <g className="op-axis" textAnchor="end"><text x="48" y="34">9 500</text><text x="48" y="106">8 500</text><text x="48" y="178">7 500</text></g>
      <g className="op-axis"><text x="60" y="236">{c.ago}</text><text x="600" y="236" textAnchor="end">{c.today}</text></g>
      <line className="op-ref" x1="60" x2="600" y1="59.5" y2="59.5" />
      <text className="op-axis" x="600" y="49" textAnchor="end">{c.earlier}</text>
      <path className="op-line" pathLength={1} d="M60 59.5H150V88.3H228V45.1H300V66.7H390V109.9H570V174.7H600" />
      <g className="op-end"><circle cx="600" cy="174.7" r="6" /><rect x="618" y="158" width="92" height="32" rx="4" /><text x="664" y="179" textAnchor="middle">7 490 ₽</text></g>
    </svg>
    <figcaption className="mono op-note">{c.note}</figcaption>
  </figure>;
}

export function Landing({ c }: { c: Copy }) {
  return <div className="site-shell op-shell" lang={c.lang}><a className="skip-link" href="#main-content">{c.lang === "ru" ? "Перейти к содержимому" : "Skip to content"}</a><SiteHeader active="work" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(c)).replace(/</g, "\\u003c") }} />
    <main className="page-content op-page" id="main-content">
      <section className="op-hero" aria-labelledby="op-title">
        <p className="mono op-kicker"><span className="dot" aria-hidden="true" />{c.kicker}</p>
        <h1 id="op-title">{c.h1}</h1>
        <p className="op-lede">{c.lede}</p>
        <div className="op-actions"><a className="button button-primary" href={chromeWebStoreUrl} target="_blank" rel="noreferrer">{c.cta} <span aria-hidden="true">↗</span></a><a className="text-action" href="#how-it-works">{c.seeHow} <span aria-hidden="true">↓</span></a></div>
        <ul className="mono op-facts">{c.facts.map((f) => <li key={f}>{f}</li>)}</ul>
      </section>

      <PriceChart c={c.chart} />

      <section id="how-it-works" className="op-section" aria-labelledby="op-how">
        <div className="mono section-bar"><span>S.01</span><span>{c.stepsCount}</span></div>
        <div className="op-head"><p className="mono muted">{c.howKicker}</p><h2 id="op-how">{c.howTitle}</h2></div>
        <ol className="op-steps">{c.steps.map(([number, name, body]) => <li className="op-step" key={number}><span className="mono muted">{number}</span><h3>{name}</h3><p>{body}</p></li>)}</ol>
      </section>

      <section className="band op-band" aria-labelledby="op-features"><div className="op-inner">
        <div className="mono section-bar"><span>S.02</span><span>{c.features.length} {c.featuresCount}</span></div>
        <div className="op-head"><p className="mono dim">{c.featuresKicker}</p><h2 id="op-features">{c.featuresTitle}</h2></div>
        <div className="band-grid">{c.features.map(([name, body]) => <article className="band-item" key={name}><h3>{name}</h3><p>{body}</p></article>)}</div>
      </div></section>

      <section className="op-section" aria-labelledby="op-compare">
        <div className="mono section-bar"><span>S.03</span><span>{c.compareKicker}</span></div>
        <div className="op-head"><h2 id="op-compare">{c.compareTitle}</h2></div>
        <div className="op-compare"><table>
          <thead><tr>{c.compareHead.map((h, i) => <th key={i} scope="col" className={i === 1 ? "op-us" : undefined}>{h}</th>)}</tr></thead>
          <tbody>{c.compareRows.map(([label, us, them]) => <tr key={label}><th scope="row">{label}</th><td className="op-us">{us}</td><td>{them}</td></tr>)}</tbody>
        </table></div>
        <p className="mono muted op-compare-note">{c.compareNote}</p>
      </section>

      <section className="op-section" aria-labelledby="op-faq">
        <div className="mono section-bar"><span>S.04</span><span>{c.faqs.length} {c.faqCount}</span></div>
        <div className="op-head"><p className="mono muted">{c.faqKicker}</p><h2 id="op-faq">{c.faqTitle}</h2></div>
        <div className="op-faq">{c.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="op-final" aria-labelledby="op-final-title">
        <h2 id="op-final-title">{c.finalTitle}</h2>
        <p>{c.finalText}</p>
        <div className="op-actions"><a className="button button-primary" href={chromeWebStoreUrl} target="_blank" rel="noreferrer">{c.finalCta} <span aria-hidden="true">↗</span></a><Link className="text-action" href="/projects">{c.allWork} <span aria-hidden="true">→</span></Link><Link className="text-action" href={c.otherLangHref} hrefLang={c.lang === "ru" ? "en" : "ru"} lang={c.lang === "ru" ? "en" : "ru"}>{c.otherLangLabel} <span aria-hidden="true">→</span></Link></div>
      </section>
      <SiteFooter />
    </main>
  </div>;
}
