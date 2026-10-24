import Link from "next/link";
import type { Metadata } from "next";
import { HeroKicker } from "../HeroKicker";
import { HeroTitle } from "../HeroTitle";
import { HomeShowcase } from "../HomeShowcase";
import { LoadingIntro } from "../LoadingIntro";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { projectCards, researchCards } from "../home-cards";
import { currentlyReading } from "../reading-data";
import { experience, profile } from "../site-config";

export const metadata: Metadata = {
  title: "Dey Intelligence — Abhishek Dey, AI Engineer",
  description: profile.description,
  alternates: { canonical: "/classic" },
  openGraph: { url: "/classic" },
};

export default function Home() {
  return <div className="site-shell home"><a className="skip-link" href="#main-content">Skip to content</a>
    <LoadingIntro />
    <SiteHeader active="home" />
    <main id="main-content">
      <section className="home-hero">
        <HeroKicker />
        <HeroTitle />
        <p className="hero-lede rise" style={{ "--d": "4.4s" } as React.CSSProperties}>Abhishek Dey builds grounded AI tools and writes research at the intersection of software and economics.</p>
        <div className="mono hero-facts rise" style={{ "--d": "4.7s" } as React.CSSProperties}>
          <a href={profile.links.orcid}>ORCID 0009-0007-4913-7090</a>
          <span>Chelyabinsk, Russia</span>
          <span>MSc Economics 2025–2027</span>
        </div>
      </section>

      <HomeShowcase research={researchCards} projects={projectCards} />

      <section id="experience" className="band" aria-labelledby="experience-h">
        <div className="mono section-bar"><span>S.03</span><span>Background</span></div>
        <div className="section-head"><div className="mono dim">Education and practice</div><h2 id="experience-h">Experience</h2></div>
        <div className="band-grid">
          {experience.map((item) => <div className="band-item" key={item.index}>
            <div className="mono dim">{item.index}</div>
            <h3>{item.title}</h3>
            {item.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>)}
        </div>
      </section>

      <section id="writing" className="next-pages" aria-label="More pages">
        <div className="mono section-bar"><span>S.04</span><span>Next pages</span></div>
        <Link className="row" href="/writing"><span className="row-title">Writing &amp; Research</span><span className="mono muted">Notes, papers and drafts →</span></Link>
        <Link className="row" href="/reading"><span className="row-title">Reading shelf</span><span className="mono muted">{currentlyReading ? `Currently reading: ${currentlyReading.title} →` : "Books and notes →"}</span></Link>
      </section>
      <SiteFooter />
    </main>
  </div>;
}
