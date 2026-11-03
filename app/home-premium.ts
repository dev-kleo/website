// Premium homepage markup served by app/index.html/route.ts.
// Content comes from the existing data modules, so papers, projects, writing and
// the reading shelf stay in one place. The previous story homepage is still in
// home-3d.ts and the classic layout is still served at /classic.
import { projects } from "./projects-data";
import { currentlyReading } from "./reading-data";
import { experience, navigationItems, profile } from "./site-config";
import { academicPapers, blogPosts } from "./writing-data";

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const isPublic = (href: string) => /^https?:\/\//.test(href);

const month = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

const css = `
:root{--ease:cubic-bezier(.16,1,.3,1);--ink:#141413;--muted:#5E5D59;--line:#E8E6DC;--paper:#FAF9F5;--soft:#F0EEE6;--clay:#B4462A}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
h1,h2,h3,p{margin:0}
.serif{font-family:'Newsreader',Georgia,serif}
.mono{font-family:'IBM Plex Mono',ui-monospace,Menlo,monospace}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
.eyebrow{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:500}
.skip{position:absolute;left:-999px}
.skip:focus{left:16px;top:16px;background:var(--ink);color:var(--paper);padding:10px 16px;border-radius:8px;z-index:10}
header.top{border-bottom:1px solid var(--line)}
header.top .wrap{padding-top:20px;padding-bottom:20px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px}
.brand{font-family:'Newsreader',Georgia,serif;font-size:22px;font-weight:500;letter-spacing:-.01em}
nav.main{display:flex;flex-wrap:wrap;gap:28px;font-size:14px}
.nav-link{color:var(--muted);transition:color .2s}
.nav-link:hover{color:var(--ink)}
@keyframes rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
.hero-in{opacity:0;animation:rise 1.1s var(--ease) forwards}
.d1{animation-delay:.1s}.d2{animation-delay:.25s}.d3{animation-delay:.4s}.d4{animation-delay:.55s}
@supports (animation-timeline:view()){.reveal{opacity:0;animation:rise linear both;animation-timeline:view();animation-range:entry 5% entry 40%}}
.btn-dark{display:inline-block;background:var(--ink);color:var(--paper);padding:15px 28px;border-radius:999px;font-size:15px;font-weight:500;transition:background .25s,transform .4s var(--ease)}
.btn-dark:hover{background:#3D3D3A;transform:translateY(-2px)}
.btn-line{display:inline-block;border:1px solid #CFCDC2;padding:14px 28px;border-radius:999px;font-size:15px;font-weight:500;transition:border-color .25s,background .25s,transform .4s var(--ease)}
.btn-line:hover{border-color:var(--ink);background:var(--soft);transform:translateY(-2px)}
.row{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;padding:28px 12px;border-bottom:1px solid var(--line);transition:background .3s,padding-left .4s var(--ease)}
a.row:hover{background:#F5F4ED;padding-left:24px}
.link-arrow{display:inline-block;transition:color .25s,transform .4s var(--ease)}
.link-arrow:hover{color:var(--clay);transform:translateX(4px)}
.grid-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(#E4E2D8 1px,transparent 1px),linear-gradient(90deg,#E4E2D8 1px,transparent 1px);background-size:64px 64px;-webkit-mask-image:radial-gradient(ellipse 70% 65% at 50% 38%,#000 15%,transparent 75%);mask-image:radial-gradient(ellipse 70% 65% at 50% 38%,#000 15%,transparent 75%);animation:drift 30s linear infinite}
@keyframes drift{to{background-position:64px 64px}}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(180,70,42,.5)}100%{box-shadow:0 0 0 10px rgba(180,70,42,0)}}
.dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--clay);margin-right:12px;vertical-align:1px;animation:pulse 2.2s ease-out infinite}
@keyframes typing{to{width:28ch}}
.type{display:inline-block;overflow:hidden;white-space:nowrap;vertical-align:bottom;width:0;animation:typing 2s steps(28) .9s forwards}
@keyframes blink{50%{opacity:0}}
.caret{display:inline-block;width:1ch;height:1.1em;background:var(--ink);margin-left:4px;vertical-align:-3px;animation:blink 1.1s steps(1) infinite}
.hero{position:relative;overflow:hidden}
.hero .wrap{position:relative;padding-top:144px;padding-bottom:96px}
.hero h1{max-width:900px;font-family:'Newsreader',Georgia,serif;font-weight:300;font-size:clamp(44px,7.2vw,92px);line-height:1.02;letter-spacing:-.025em}
.hero .lede{margin-top:36px;max-width:620px;font-size:20px;line-height:1.55;color:var(--muted)}
.hero .lede b{color:var(--ink);font-weight:500}
.cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:48px}
.links{display:flex;flex-wrap:wrap;gap:12px 32px;margin-top:28px;font-size:13px;color:var(--muted)}
.strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:96px;border-top:1px solid #CFCDC2}
.strip>div{padding:24px 24px 0 0}
.strip .k{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.strip .v{margin-top:10px;font-size:16px;line-height:1.5}
.strip .v span{color:var(--muted)}
section.block{border-top:1px solid var(--line)}
section.block .wrap{padding-top:128px;padding-bottom:128px}
.split{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:64px}
.span2{grid-column:span 2;min-width:0}
h2.h{font-family:'Newsreader',Georgia,serif;font-weight:300;font-size:48px;line-height:1.08;letter-spacing:-.02em}
.list{border-top:1px solid var(--line)}
.row .t{font-family:'Newsreader',Georgia,serif;font-size:24px;line-height:1.3;max-width:560px}
.row .s{margin-top:8px;font-size:15px;color:var(--muted);max-width:560px;line-height:1.5}
.row .r{font-size:14px;color:var(--muted)}
.intro{margin-bottom:48px;font-size:18px;line-height:1.65;color:var(--muted);max-width:640px}
.projects{background-color:#141413;background-image:radial-gradient(#2E2E2B 1px,transparent 1px);background-size:28px 28px;color:var(--paper)}
.projects .wrap{padding-top:128px;padding-bottom:128px}
.projects .eyebrow{color:#A8A69C}
.projects h2{margin:0 0 72px;max-width:760px;font-family:'Newsreader',Georgia,serif;font-weight:300;font-size:56px;line-height:1.06;letter-spacing:-.02em}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}
.card{background:#1F1F1D;border-radius:24px;padding:40px;min-height:280px;display:flex;flex-direction:column;justify-content:space-between;transition:background .3s,transform .5s var(--ease),box-shadow .3s}
.card:hover{background:#262624;transform:translateY(-6px);box-shadow:inset 0 0 0 1px #55554F}
.card .tag{font-size:12px;color:#A8A69C;letter-spacing:.08em;text-transform:uppercase}
.card .n{margin-top:14px;font-family:'Newsreader',Georgia,serif;font-size:34px;font-weight:400;letter-spacing:-.01em}
.card p{margin-top:14px;font-size:16px;line-height:1.6;color:#C9C7BC}
.card .go{margin-top:32px;font-size:14px;font-weight:500}
.shelf{margin-top:56px;background:var(--soft);border-radius:24px;padding:40px}
.shelf .b{margin-top:24px;font-family:'Newsreader',Georgia,serif;font-size:24px;line-height:1.3}
.shelf .a{margin-top:6px;font-size:14px;color:var(--muted)}
section.cv{background:#F5F4ED}
.cv .item{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px 40px;padding:28px 0;border-bottom:1px solid #DAD8CD}
.cv .item .lab{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.cv .item .body{grid-column:span 2;font-size:17px;line-height:1.65;color:#3D3D3A}
.cv .item .body p+p{margin-top:8px}
.contact{background:#141413;color:var(--paper)}
.contact .wrap{padding-top:128px;padding-bottom:64px}
.contact h2{max-width:760px;font-family:'Newsreader',Georgia,serif;font-weight:300;font-size:clamp(40px,6vw,72px);line-height:1.04;letter-spacing:-.025em}
.contact .sub{margin-top:28px;max-width:560px;font-size:18px;line-height:1.6;color:#C9C7BC}
.contact .mail{display:inline-block;margin-top:40px;background:var(--paper);color:var(--ink);padding:15px 28px;border-radius:999px;font-size:15px;font-weight:500;transition:transform .4s var(--ease)}
.contact .mail:hover{transform:translateY(-2px)}
.foot{margin-top:112px;padding-top:28px;border-top:1px solid #3D3D3A;display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;font-size:13px;color:#A8A69C}
.foot nav{display:flex;flex-wrap:wrap;gap:24px}
.foot a{color:#C9C7BC}
.foot a:hover{color:#fff}
a:focus-visible{outline:2px solid var(--clay);outline-offset:3px;border-radius:4px}
@media (prefers-reduced-motion:reduce){
html{scroll-behavior:auto}
.grid-bg,.dot,.caret{animation:none!important}
.type{animation:none!important;width:28ch}
.hero-in,.reveal{animation:none!important;opacity:1!important;transform:none!important}
.btn-dark,.btn-line,.row,.card,.link-arrow,.contact .mail{transition:none!important}
.btn-dark:hover,.btn-line:hover,.card:hover,.link-arrow:hover,.contact .mail:hover{transform:none!important}
}
`;

const paperRows = academicPapers
  .map((paper) => {
    const inner = `<div><div class="t">${esc(paper.title)}</div><div class="s">${esc(paper.publicationType)} &middot; ${esc(paper.venue)}</div></div><div class="r mono">${esc(paper.status)} &middot; ${esc(paper.year)}</div>`;
    return isPublic(paper.href)
      ? `<a class="row" href="${esc(paper.href)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<div class="row">${inner}</div>`;
  })
  .join("\n");

const projectCards = projects
  .map((project) => {
    const tags = [project.technologies[0], project.status].filter(Boolean).join(" · ");
    return `<a class="card" href="${esc(project.href ?? `/projects/${project.slug}`)}"><div><div class="tag mono">${esc(tags)}</div><div class="n">${esc(project.name)}</div><p>${esc(project.summary)}</p></div><div class="go">View project &rarr;</div></a>`;
  })
  .join("\n");

const postRows = blogPosts
  .map(
    (post) =>
      `<a class="row" href="${esc(post.href ?? `/writing/${post.slug}`)}"><div><div class="t">${esc(post.title)}</div></div><div class="r mono">${esc(month(post.publishedAt))}</div></a>`,
  )
  .join("\n");

const shelf = currentlyReading
  ? `<div class="shelf"><div class="eyebrow mono">Currently reading</div><div class="b">${esc(currentlyReading.title)}</div><div class="a">${esc(currentlyReading.author)}</div></div>`
  : "";

const experienceRows = experience
  .map(
    (item) =>
      `<div class="item"><div class="lab mono">${esc(item.title)}</div><div class="body">${item.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div></div>`,
  )
  .join("\n");

const navLinks = [
  `<a class="nav-link" href="#research">Research</a>`,
  ...navigationItems.map((item) => `<a class="nav-link" href="${esc(item.href)}">${esc(item.label)}</a>`),
  `<a class="nav-link" href="#contact">Contact</a>`,
].join("");

export const homeHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Dey Intelligence — Abhishek Dey, AI Engineer</title>
<meta name="description" content="${esc(profile.description)}">
<meta name="theme-color" content="#FAF9F5">
<link rel="canonical" href="${esc(profile.siteUrl)}/">
<link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/images/dey-intelligence-mark.png">
<meta property="og:type" content="website"><meta property="og:site_name" content="${esc(profile.brand)}"><meta property="og:title" content="Dey Intelligence — Abhishek Dey, AI Engineer"><meta property="og:description" content="${esc(profile.description)}"><meta property="og:url" content="${esc(profile.siteUrl)}/"><meta property="og:image" content="${esc(profile.siteUrl)}/og-v2.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap"><a class="brand" href="/">${esc(profile.brand)}</a><nav class="main" aria-label="Main">${navLinks}</nav></div></header>
<main id="main">

<section class="hero" id="top">
<div class="grid-bg" aria-hidden="true"></div>
<div class="wrap">
<p class="hero-in mono eyebrow-line" style="margin:0 0 28px;font-size:13px;letter-spacing:.04em;color:var(--muted);font-weight:500"><span class="dot" aria-hidden="true"></span><span class="type">seeking phd positions &middot; 2027</span><span class="caret" aria-hidden="true"></span></p>
<h1 class="hero-in d1">Research at the intersection of economics and AI.</h1>
<p class="lede hero-in d2"><b>${esc(profile.name)}.</b> MSc candidate in Economics (International Business) at South Ural State University. Alongside my studies, I build and ship AI-assisted software.</p>
<div class="cta hero-in d3"><a class="btn-dark" href="#research">Read my research</a><a class="btn-line" href="/projects">Explore projects</a></div>
<div class="links mono hero-in d4"><a class="link-arrow" href="${esc(profile.links.orcid)}">ORCID 0009-0007-4913-7090 &#8599;</a><a class="link-arrow" href="${esc(profile.links.github)}">GitHub &#8599;</a><a class="link-arrow" href="${esc(profile.links.linkedin)}">LinkedIn &#8599;</a><a class="link-arrow" href="mailto:${esc(profile.links.email)}">Email &#8599;</a></div>
<div class="strip hero-in d4">
<div><div class="k mono">Degree</div><div class="v">MSc Economics (International Business)<br><span>South Ural State University, 2025&ndash;2027</span></div></div>
<div><div class="k mono">Funding</div><div class="v">Fully funded scholarship<br><span>Awarded for the second year</span></div></div>
<div><div class="k mono">Research</div><div class="v">Generative AI, AI governance<br><span>Macroeconomics and inflation</span></div></div>
<div><div class="k mono">Languages</div><div class="v">IELTS 7.0<br><span>English, Russian (A2), Bengali, Hindi</span></div></div>
</div>
</div>
</section>

<section class="block" id="research"><div class="wrap"><div class="split reveal">
<div><p class="eyebrow" style="margin-bottom:16px">Research</p><h2 class="h">Trade, markets, and the machines that read them.</h2></div>
<div class="span2"><p class="intro">Working papers, preprints and articles on generative AI, AI governance and macroeconomics.</p><div class="list">
${paperRows}
</div></div>
</div></div></section>

<section class="projects" id="projects"><div class="wrap">
<p class="eyebrow" style="margin-bottom:16px">Projects</p>
<h2 class="reveal">Small tools, shipped and in use.</h2>
<div class="cards reveal">
${projectCards}
</div>
<p style="margin-top:48px;font-size:15px"><a class="link-arrow" href="/projects" style="font-weight:500">All projects &rarr;</a></p>
</div></section>

<section class="block" id="writing"><div class="wrap"><div class="split reveal">
<div><p class="eyebrow" style="margin-bottom:16px">Writing &amp; reading</p><h2 class="h">Notes, and the shelf behind them.</h2></div>
<div class="span2"><div class="list">
${postRows}
</div>
${shelf}
<p style="margin-top:32px;font-size:15px;font-weight:500"><a class="link-arrow" href="/writing">All writing &rarr;</a></p>
</div>
</div></div></section>

<section class="block cv" id="cv"><div class="wrap"><div class="split reveal">
<div><p class="eyebrow" style="margin-bottom:16px">Experience</p><h2 class="h">Education and work.</h2></div>
<div class="span2"><div style="border-top:1px solid #DAD8CD">
${experienceRows}
</div></div>
</div></div></section>

<section class="contact" id="contact"><div class="wrap">
<h2 class="reveal">Open to a conversation.</h2>
<p class="sub">For research supervision, PhD opportunities, or collaboration.</p>
<a class="mail" href="mailto:${esc(profile.links.email)}">${esc(profile.links.email)}</a>
<div class="foot mono"><div>&copy; 2026 ${esc(profile.name)} &middot; Chelyabinsk, Russia</div><nav aria-label="Footer"><a href="${esc(profile.links.github)}">GitHub</a><a href="${esc(profile.links.linkedin)}">LinkedIn</a><a href="${esc(profile.links.orcid)}">ORCID</a><a href="/flappy-bird/privacy">Privacy</a></nav></div>
</div></section>

</main>
</body>
</html>
`;
