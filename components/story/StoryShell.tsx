"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Navigation for The Chronicles of Norien.
 *
 * Mirrors the codex shell's interaction model — smooth scroll with NO hash and
 * NO URL mutation — but wears the cinematic story skin. The numerals echo the
 * chapter plates so the rail reads like a table of contents in a bound archive.
 */
const SECTIONS = [
  { id: "first-age", num: "I", label: "The First Age" },
  { id: "great-sea", num: "II", label: "The Great Sea" },
  { id: "merchant-kingdoms", num: "III", label: "Merchant Kingdoms" },
  { id: "old-empire", num: "IV", label: "Old Empire" },
  { id: "fall", num: "V", label: "Fall of the Empire" },
  { id: "age-of-kingdoms", num: "VI", label: "Age of Kingdoms" },
  { id: "northern-frontier", num: "VII", label: "Northern Frontier" },
  { id: "great-trade-era", num: "VIII", label: "Great Trade Era" },
  { id: "expansion", num: "IX", label: "Age of Expansion" },
  { id: "legends", num: "X", label: "Legends" },
  { id: "present-age", num: "XI", label: "Present Age" },
  { id: "timeline", num: "✦", label: "Timeline" },
];

export default function StoryShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("first-age");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Smooth scroll only — never touch the URL (no #hash, no history entries).
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setOpen(false);
  };

  return (
    <div className="story">
      <header className="story__nav">
        <div className="story__nav-left">
          <button
            className="story__menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <a className="story__brand" href="https://norien.live">
            <Image src="/logo.png" alt="Norien" width={34} height={34} priority />
            <span className="story__brand-name">
              The Chronicles of&nbsp;<span>Norien</span>
            </span>
          </a>
        </div>
        <nav className="story__navlinks">
          <a href="https://norien.live">Main Site</a>
          <a href="https://docs.norien.live">The Codex</a>
          <a className="story__cta" href="https://play.norien.live">
            Play
          </a>
        </nav>
      </header>

      {open && <div className="story__overlay" onClick={() => setOpen(false)} />}

      <div className="story__shell">
        <aside className={`story__sidebar${open ? " is-open" : ""}`}>
          <h4>The Ages</h4>
          <nav className="story__navlist">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={active === s.id ? "is-active" : ""}
                aria-current={active === s.id ? "true" : undefined}
                onClick={() => goTo(s.id)}
              >
                <span className="story__navnum">{s.num}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="story__main">{children}</main>
      </div>
    </div>
  );
}
