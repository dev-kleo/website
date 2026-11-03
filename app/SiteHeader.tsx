"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { WebsiteTranslator } from "./WebsiteTranslator";

const GREETINGS = ["Dey Intelligence", "Hello", "नमस्ते", "নমস্কার", "Привет"];

const MENU = [
  { href: "/#research", label: "Research", key: "research" },
  { href: "/#projects", label: "Projects", key: "projects" },
  { href: "/#experience", label: "Experience", key: "experience" },
  { href: "/writing", label: "Writing & Research", key: "writing & research" },
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    root?.querySelector<HTMLElement>("[data-close]")?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !root) return;
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("a[href],button"));
      if (!nodes.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      returnTo?.focus();
    };
  }, [open, onClose]);
  return ref;
}

function CloseButton({ onClick, light }: { onClick: () => void; light?: boolean }) {
  return (
    <button type="button" className={`closebtn${light ? " closebtn-dark" : ""}`} data-close onClick={onClick}>
      <span className="mono">Close</span>
      <span className="closebtn-x"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11" /></svg></span>
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
          <button type="button" className="wordmark" onClick={onLogo} aria-label="Dey Intelligence">{wordmark}</button>
        ) : (
          <Link className="wordmark" href="/" aria-label="Dey Intelligence, home"><span className="wordmark-text">Dey Intelligence</span></Link>
        )}
        <div className="header-actions">
          <WebsiteTranslator compact />
          <ThemeToggle />
          <button type="button" className="menu-button" aria-haspopup="dialog" aria-controls="site-menu" aria-expanded={menu && !menuClosing} onClick={() => { clearTimeout(closeTimer.current); setMenuClosing(false); setMenu(true); }}>
            <span>Menu</span>
            <span className="menu-circle"><svg width="16" height="8" viewBox="0 0 16 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M1 1h14M1 7h14" /></svg></span>
          </button>
        </div>
      </header>

      {menu && (
        <div id="site-menu" className={`menu-overlay${menuClosing ? " is-closing" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu" ref={menuRef}>
          <div className="menu-top"><span className="menu-brand">Dey Intelligence</span><CloseButton onClick={closeMenu} light /></div>
          <nav className="menu-nav" aria-label="Primary">
            {MENU.map((item) => (
              <Link key={item.key} href={item.href} onClick={closeMenuNow} aria-current={item.key === active ? "page" : undefined}>{item.label}</Link>
            ))}
          </nav>
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
