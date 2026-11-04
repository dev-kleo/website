"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "../site-config";
import { LINK_LABELS, publications, type Publication } from "../publications-data";

type Key = "applications" | "domains" | "methods";
type Sel = Record<Key, string[]>;

const PARAM: Record<Key, string> = { applications: "app", domains: "domain", methods: "method" };
const KEYS = Object.keys(PARAM) as Key[];
const EMPTY: Sel = { applications: [], domains: [], methods: [] };
const TOTAL = publications.length;

const unique = (key: Key) => [...new Set(publications.flatMap((p) => p[key]))].sort((a, b) => a.localeCompare(b));
const OPTIONS: Record<Key, string[]> = { applications: unique("applications"), domains: unique("domains"), methods: unique("methods") };

// OR within a group, AND across groups; `skip` leaves one group out so its own counts ignore its selection.
function matches(p: Publication, sel: Sel, q: string, skip?: Key) {
  if (!KEYS.every((k) => k === skip || !sel[k].length || sel[k].some((v) => p[k].includes(v)))) return false;
  return !q || [p.title, ...p.authors, p.venue ?? "", p.status, p.statusNote ?? "", ...p.applications, ...p.domains, ...p.methods].join(" ").toLowerCase().includes(q);
}

function Authors({ names }: { names: string[] }) {
  return <p className="pub-authors">{names.map((n, i) => <span key={n}>{i > 0 && ", "}{n === profile.name ? <strong>{n}</strong> : n}</span>)}</p>;
}

export function PublicationsBrowser() {
  const [sel, setSel] = useState<Sel>(EMPTY);
  const [query, setQuery] = useState("");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [cited, setCited] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const q = query.trim().toLowerCase();

  // Restore from the URL after hydration so server and client first renders match.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = (k: Key) => params.getAll(PARAM[k]).filter((v) => OPTIONS[k].includes(v));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSel({ applications: from("applications"), domains: from("domains"), methods: from("methods") });
    setQuery(params.get("q") ?? "");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    KEYS.forEach((k) => sel[k].forEach((v) => params.append(PARAM[k], v)));
    if (query.trim()) params.set("q", query.trim());
    const qs = params.toString();
    history.replaceState(null, "", qs ? `?${qs}` : location.pathname);
  }, [sel, query, ready]);

  const results = useMemo(() => publications.filter((p) => matches(p, sel, q)).sort((a, b) => b.year - a.year), [sel, q]);
  const years = [...new Set(results.map((p) => p.year))];
  const active = KEYS.some((k) => sel[k].length) || q !== "";

  const toggle = (k: Key, v: string) => setSel((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }));
  const count = (k: Key, v: string) => publications.filter((p) => p[k].includes(v) && matches(p, sel, q, k)).length;
  const clear = () => { setSel(EMPTY); setQuery(""); };
  const copy = async () => {
    try { await navigator.clipboard.writeText(location.href); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* clipboard blocked: URL bar already holds the link */ }
  };

  const cite = async (p: Publication) => {
    try { await navigator.clipboard.writeText(p.bibtex ?? ""); setCited(p.id); setTimeout(() => setCited(""), 1800); } catch { /* clipboard blocked */ }
  };

  const list = results.length === 0 ? (
    <div className="pub-empty"><p>No works match these filters.</p>{active && <button type="button" onClick={clear}>Clear filters</button>}</div>
  ) : years.map((y) => (
    <section className="pub-year" key={y} aria-label={`${y} publications`}>
      <h3>{y}</h3>
      <ol>
        {results.filter((p) => p.year === y).map((p) => (
          <li key={p.id} className="pub-item">
            <h4>{p.title}</h4>
            <Authors names={p.authors} />
            <p className="pub-meta"><span className="pub-badge">{p.status}</span>{(p.venue || p.statusNote) && <span className="pub-venue">{p.venue && (p.venueUrl ? <a href={p.venueUrl}>{p.venue}</a> : p.venue)}{p.venue && p.statusNote && " · "}{p.statusNote && `Submitted to ${p.statusNote}`}</span>}</p>
            {p.abstract && <p className="pub-abstract">{p.abstract}</p>}
            {(p.applications.length + p.domains.length + p.methods.length > 0) && <p className="pub-tags">
              {p.applications.map((t) => <span className="pub-tag t-app" key={t}>{t}</span>)}
              {p.domains.map((t) => <span className="pub-tag t-dom" key={t}>{t}</span>)}
              {p.methods.map((t) => <span className="pub-tag t-meth" key={t}>{t}</span>)}
            </p>}
            <p className="pub-links">
              {(Object.keys(LINK_LABELS) as (keyof typeof LINK_LABELS)[]).map((k) => p.links?.[k] && <a key={k} href={p.links[k]}>{LINK_LABELS[k]}</a>)}
              {p.bibtex && <button type="button" className="pub-link" onClick={() => cite(p)}>{cited === p.id ? "Copied" : "Cite"}</button>}
            </p>
          </li>
        ))}
      </ol>
    </section>
  ));

  const cards = (k: Key, title: string, hint: string, cls: string) => (
    <section className={`pub-block ${cls}`} aria-labelledby={`pub-${k}`}>
      <div className="pub-block-head"><h2 id={`pub-${k}`}>{title}</h2><p>{hint}</p></div>
      <div className="pub-cards">
        {OPTIONS[k].map((v) => {
          const n = count(k, v);
          return <button type="button" key={v} className="pub-card" aria-pressed={sel[k].includes(v)} data-empty={n === 0} onClick={() => toggle(k, v)}><strong>{v}</strong><span>{n} {n === 1 ? "work" : "works"}</span></button>;
        })}
      </div>
    </section>
  );

  if (TOTAL === 0) return (
    <div className="pub-empty pub-soon">
      <p>Research in progress. Preprints and papers will appear here.</p>
      <p className="pub-links"><a href={profile.links.orcid}>ORCID</a>{profile.links.scholar && <a href={profile.links.scholar}>Google Scholar</a>}</p>
    </div>
  );
  return (
    <>
      {cards("applications", "Browse by application", "Select one or more. Select again to remove.", "pub-app")}
      {cards("domains", "Browse by methodological domain", "Papers that draw on both carry both labels.", "pub-dom")}

      <div className="pub-layout">
        <aside className={`pub-side${filtersOpen ? " is-open" : ""}`} aria-label="Filters">
          <button type="button" className="pub-filter-toggle" aria-expanded={filtersOpen} aria-controls="pub-methods" onClick={() => setFiltersOpen((o) => !o)}>Filters{sel.methods.length > 0 && ` (${sel.methods.length})`}</button>
          <div id="pub-methods" className="pub-side-body">
            <h2>Method</h2>
            <ul>
              {OPTIONS.methods.map((v) => <li key={v}><button type="button" className="pub-chip" aria-pressed={sel.methods.includes(v)} onClick={() => toggle("methods", v)}><span>{v}</span><span>{count("methods", v)}</span></button></li>)}
            </ul>
          </div>
        </aside>

        <div className="pub-main">
          <label className="pub-search"><span className="pub-sr">Search titles, authors and venues</span><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search titles, authors and venues" /></label>
          <div className="pub-status">
            <p aria-live="polite">Showing <strong>{results.length}</strong> of {TOTAL} works</p>
            <button type="button" className="pub-link" onClick={copy}>{copied ? "Copied" : "Copy link to this view"}</button>
          </div>

          {list}
        </div>
      </div>
    </>
  );
}
