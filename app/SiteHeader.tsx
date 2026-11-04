"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import { profile } from "./site-config";
import { ThemeToggle } from "./ThemeToggle";
import { WebsiteTranslator } from "./WebsiteTranslator";

const GREETINGS = ["Dey Intelligence", "Hello", "नमस्ते", "নমস্কার", "Привет"];

const MENU = [
  { href: "/#research", label: "Research", key: "research" },
  { href: "/#projects", label: "Projects", key: "projects" },
  { href: "/#experience", label: "Experience", key: "experience" },
  { href: "/publications", label: "Publications", key: "publications" },
  { href: "/reading", label: "Reading", key: "reading" },
  { href: "/about", label: "About", key: "about" },
  { href: "/#contact", label: "Contact", key: "contact" },
];

function useOverlay(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const root = ref.current;
    const returnTo = document.activeElement as HTMLElement | null;
    // Fixed body + saved offset locks scroll on iOS too; restored on close so the page does not jump.
    const y = window.scrollY, body = document.body.style, saved = [body.position, body.top, body.width];
    body.position = "fixed"; body.top = `${-y}px`; body.width = "100%";
    root?.querySelector<HTMLElement>("[data-close]")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !root) return;
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("a[href],button")).filter((n) => n.getClientRects().length);
      if (!nodes.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      [body.position, body.top, body.width] = saved;
      window.scrollTo({ top: y, behavior: "instant" });
      returnTo?.focus({ preventScroll: true });
    };
  }, [open, onClose]);
  return ref;
}

// Two thin lines; `x` morphs them into a cross (CSS, transform only).
function Burger({ x }: { x?: boolean }) {
  return <span className={`burger${x ? " is-x" : ""}`} aria-hidden="true"><i /><i /></span>;
}

function CloseButton({ onClick, light, controls }: { onClick: () => void; light?: boolean; controls?: string }) {
  return (
    <button type="button" className={`closebtn${light ? " closebtn-dark" : ""}`} data-close onClick={onClick} aria-label={controls ? "Close menu" : "Close"} aria-expanded={controls ? true : undefined} aria-controls={controls}>
      <span className="mono" aria-hidden="true">Close</span>
      <span className="closebtn-x"><Burger x /></span>
    </button>
  );
}

export function SiteHeader({ active }: { active: string }) {
  const home = active === "home";
  const [menu, setMenu] = useState(false);
  const [egg, setEgg] = useState(false);
  const [logo, setLogo] = useState(0);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeMenu = useCallback(() => {
    setMenuClosing(true);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => { setMenu(false); setMenuClosing(false); }, 220);
  }, []);
  useEffect(() => () => clearTimeout(closeTimer.current), []);
  const closeMenuNow = useCallback(() => { clearTimeout(closeTimer.current); setMenu(false); setMenuClosing(false); }, []);
  const closeEgg = useCallback(() => setEgg(false), []);
  const menuRef = useOverlay(menu, closeMenu);
  const eggRef = useOverlay(egg, closeEgg);

  function onLogo() {
    const next = logo + 1;
    if (next >= GREETINGS.length) { setLogo(0); setEgg(true); } else setLogo(next);
  }

  const wordmark = (
    <span key={logo} className="wordmark-text">{GREETINGS[logo]}</span>
  );

  return (
    <>
      <header className="site-header hdr">
        {home ? (
          <button type="button" className="wordmark" onClick={onLogo} aria-label="Dey Intelligence"><BrandMark />{wordmark}</button>
        ) : (
          <Link className="wordmark" href="/" aria-label="Dey Intelligence, home"><BrandMark /><span className="wordmark-text">Dey Intelligence</span></Link>
        )}
        <div className="header-actions">
          <WebsiteTranslator compact />
          <ThemeToggle />
          <button type="button" className="menu-button" aria-label="Open menu" aria-haspopup="dialog" aria-controls="site-menu" aria-expanded={menu && !menuClosing} onClick={() => { clearTimeout(closeTimer.current); setMenuClosing(false); setMenu(true); }}>
            <span aria-hidden="true">Menu</span>
            <span className="menu-circle"><Burger /></span>
          </button>
        </div>
      </header>

      {menu && (
        <div id="site-menu" className={`menu-overlay${menuClosing ? " is-closing" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu" ref={menuRef} onClick={(e) => { if (!(e.target as HTMLElement).closest("a,button")) closeMenu(); }}>
          <div className="menu-top"><span className="menu-brand"><BrandMark dark />Dey Intelligence</span><CloseButton onClick={closeMenu} light controls="site-menu" /></div>
          <nav className="menu-nav" aria-label="Primary">
            {MENU.map((item, i) => (
              <Link key={item.key} href={item.href} onClick={closeMenuNow} aria-current={item.key === active ? "page" : undefined} style={{ "--i": i } as React.CSSProperties}>
                <span className="menu-idx mono" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><span className="menu-label">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="menu-foot">
            <div className="menu-contact">
              <a href={`mailto:${profile.links.email}`} onClick={closeMenuNow}>{profile.links.email}</a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <a className="menu-cta" href={`mailto:${profile.links.email}`} onClick={closeMenuNow}>Get in touch</a>
          </div>
        </div>
      )}

      {egg && (
        <div className="egg" role="dialog" aria-modal="true" aria-label="Easter egg" ref={eggRef}>
          <div className="egg-top"><span className="mono">Easter egg · 1 of 1</span><CloseButton onClick={closeEgg} /></div>
          <div className="egg-body">
            <h2>You found it.</h2>
            <p>Four hellos, two disciplines, one studio. Most people never click the logo, so thank you for looking closely. That is most of research.</p>
            <Link href="/#research" onClick={closeEgg} className="mono egg-link">Read the paper →</Link>
          </div>
          <div className="egg-marquee" aria-hidden="true"><div>{Array.from({ length: 4 }, () => "Hello — नमस्ते — নমস্কার — Привет — ").join("")}{Array.from({ length: 4 }, () => "Hello — नमस्ते — নমস্কার — Привет — ").join("")}</div></div>
        </div>
      )}
    </>
  );
}
