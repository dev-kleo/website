"use client";

import { useEffect, useState } from "react";

const COLORS = ["#f26a21", "#ffffff", "#2f6fed", "#1f7a4d"];

export function FundingHeading() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!on) return;
    const t = window.setTimeout(() => setOn(false), 3600);
    return () => window.clearTimeout(t);
  }, [on]);
  return (
    <>
      <h2 className="footer-heading">
        Open to project work, research collaboration and{" "}
        <button type="button" className="footer-funded" onClick={() => setOn(true)}>funded PhD positions.</button>
      </h2>
      {on && (
        <>
          <div className="confetti" aria-hidden="true">
            {Array.from({ length: 36 }, (_, i) => {
              const size = 8 + (i % 3) * 4;
              return <span key={i} style={{ left: `${(i * 37) % 100}%`, width: size, height: size + 4, background: COLORS[i % 4], animationDuration: `${1.8 + (i % 5) * 0.35}s`, animationDelay: `${(i % 9) * 0.08}s` }} />;
            })}
          </div>
          <div className="toast mono" role="status">Fully funded, ideally.</div>
        </>
      )}
    </>
  );
}
