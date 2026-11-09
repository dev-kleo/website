import Image from "next/image";
import type { Metadata } from "next";
import { BsOpenai } from "react-icons/bs";
import { SiCursor, SiDocker, SiGithub, SiObsidian, SiOllama } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { profile } from "../site-config";

const primaryTools = [
  { name: "Obsidian", Icon: SiObsidian, className: "tool-logo-obsidian" },
  { name: "Codex", Icon: BsOpenai, className: "tool-logo-codex" },
  { name: "VS Code", Icon: VscVscode, className: "tool-logo-vscode" },
  { name: "Ollama", Icon: SiOllama, className: "tool-logo-ollama" },
  { name: "Docker", Icon: SiDocker, className: "tool-logo-docker" },
  { name: "GitHub", Icon: SiGithub, className: "tool-logo-github" },
  { name: "Cursor", Icon: SiCursor, className: "tool-logo-cursor" },
];

export const metadata: Metadata = { title: "About — Dey Intelligence", description: "About Abhishek Dey, an independent researcher and entrepreneur working across economics, AI and software.", alternates: { canonical: "/about" }, openGraph: { url: "/about", title: "About — Dey Intelligence", description: "About Abhishek Dey, an independent researcher and entrepreneur working across economics, AI and software." } };

export default function AboutPage() {
  const personSchema = { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@id": `${profile.siteUrl}/about#person`, "@type": "Person", name: profile.name, jobTitle: profile.role, description: profile.description, url: `${profile.siteUrl}/about`, sameAs: [profile.links.github, profile.links.linkedin].filter(Boolean) } };
  return <div className="site-shell about-page"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader active="about" />
    <main className="page-content about-content" id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /><section className="about-hero"><p className="eyebrow">The person behind Dey Intelligence</p><h1>About</h1></section><section className="about-intro"><div className="about-copy"><p>I&apos;m Abhishek Dey, an independent researcher and entrepreneur with a background in computer science, economics, and international business. I research economics and AI, build and ship software products, and work with businesses, startups, universities and research teams.</p><p>My work starts with a clear problem, turns research into useful constraints, and focuses on software people can rely on.</p></div><div className="about-photo"><Image src="/images/about-photo.png" alt="Illustration of Abhishek Dey working at a laptop" width={1254} height={1254} sizes="(min-width: 1020px) 336px, 80vw" /></div></section><section className="about-section"><p className="eyebrow">Currently · updated {profile.currentFocusUpdated}</p><h2>Currently</h2><ul><li>Developing a verified-source assistant for international students.</li><li>Prototyping real-time Russian–English interpretation on iOS.</li><li>Exploring how economics and incentives shape useful AI products.</li></ul></section><section className="about-section tools-section"><h2>Tools</h2><div className="tools-content"><h3>Software</h3><p>I build primarily with TypeScript and React, choosing focused tools that make reliable systems easier to ship and maintain.</p><ul className="tools-list"><li><strong>Coding:</strong> TypeScript, React, and Next.js</li><li><strong>AI systems:</strong> Retrieval-augmented generation, browser APIs, native speech interfaces, and Ollama</li><li><strong>Development tools:</strong> Codex, VS Code, and Cursor</li><li><strong>Knowledge:</strong> Obsidian</li><li><strong>Shipping:</strong> Docker, GitHub, and Netlify</li></ul><ul className="tool-grid" aria-label="Primary tools">{primaryTools.map(({ name, Icon, className }) => <li key={name}><span className={`tool-logo ${className}`} aria-hidden="true"><Icon /></span><span>{name}</span></li>)}</ul></div></section><section className="about-section hobbies-section"><p className="eyebrow">Outside of work</p><h2>Hobbies</h2><p>When I&apos;m away from the keyboard, I enjoy a good balance of strategy, stories, and quiet creative time.</p><ul className="hobbies-list"><li>Chess</li><li>Reading books</li><li>Watching horror movies</li><li>Photography</li><li>Playing with my cat :)</li></ul></section>{(profile.links.email || profile.links.phone || profile.links.github || profile.links.linkedin) && <section className="about-section"><h2>Contact</h2><div className="contact-links">{profile.links.email && <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a>}{profile.links.phone && <a href={`tel:${profile.links.phone}`}>+7 912 808 3769</a>}{profile.links.github && <a href={profile.links.github}>GitHub</a>}{profile.links.linkedin && <a href={profile.links.linkedin}>LinkedIn</a>}</div></section>}<SiteFooter /></main>
  </div>;
}
