"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "world", label: "World" },
  { id: "kingdoms", label: "Kingdoms" },
  { id: "trade", label: "Trade" },
  { id: "expansion", label: "Expansion" },
  { id: "diplomacy", label: "Diplomacy" },
  { id: "warfare", label: "Warfare" },
  { id: "progression", label: "Progression" },
  { id: "base", label: "Gaming on Base" },
  { id: "faq", label: "FAQ" },
  { id: "vision", label: "Vision" },
];

export default function DocsShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="docs">
      <header className="docs__nav">
        <div className="docs__nav-left">
          <button className="docs__menu-btn" aria-label="Toggle navigation" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
          <a className="docs__brand" href="/docs">
            <Image src="/logo.png" alt="Norien" width={34} height={34} priority />
            <span className="docs__brand-name">The Norien&nbsp;<span>Codex</span></span>
          </a>
        </div>
        <nav className="docs__navlinks">
          <a href="https://norien.live">Main Site</a>
          <a href="https://story.norien.live">Story</a>
          <a className="docs__cta" href="https://play.norien.live">Play</a>
        </nav>
      </header>

      {open && <div className="docs__overlay" onClick={() => setOpen(false)} />}

      <div className="docs__shell">
        <aside className={`docs__sidebar${open ? " is-open" : ""}`}>
          <h4>The Codex</h4>
          <nav className="docs__navlist">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="docs__main">{children}</main>
      </div>
    </div>
  );
}
