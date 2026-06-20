"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import XIcon from "@/components/XIcon";

/**
 * Navigation + chrome for The Chronicles of Norien.
 *
 * Interaction model: smooth scroll with NO hash and NO URL mutation — the rail
 * and the in-page book flow both call scrollIntoView and update local state
 * only. A thin gold reading-progress bar tracks document scroll. The nav is
 * split into the eleven Ages and a separate Archive (world, factions, myths,
 * timeline) so it reads like the contents of a bound history.
 */
const AGES = [
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
];

const ARCHIVE = [
  { id: "world", num: "◆", label: "World of Norien" },
  { id: "factions", num: "◆", label: "Factions" },
  { id: "legends-myths", num: "◆", label: "Legends & Myths" },
  { id: "timeline", num: "◆", label: "Timeline" },
];

const ALL = [...AGES, ...ARCHIVE];

export default function StoryShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("first-age");
  const barRef = useRef<HTMLSpanElement | null>(null);

  // Active-section spy (no URL change).
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );
    ALL.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Reading progress — rAF-throttled, writes scaleX directly to avoid re-renders.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Smooth scroll only — never touch the URL (no #hash, no history entries).
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setOpen(false);
  };

  const renderGroup = (items: typeof AGES) =>
    items.map((s) => (
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
    ));

  return (
    <div className="story">
      <div className="story__progress" aria-hidden="true">
        <span ref={barRef} />
      </div>

      <header className="story__nav">
        <div className="story__nav-left">
          <button
            className="story__menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={open}
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
          <a href="https://docs.norien.live">Codex</a>
          <a className="story__cta" href="https://play.norien.live">
            Play
          </a>
          <a
            className="story__x"
            href="https://x.com/norienlive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official Norien X (opens in a new tab)"
          >
            <XIcon />
          </a>
        </nav>
      </header>

      {open && <div className="story__overlay" onClick={() => setOpen(false)} />}

      <div className="story__shell">
        <aside className={`story__sidebar${open ? " is-open" : ""}`}>
          <h4>The Ages</h4>
          <nav className="story__navlist">{renderGroup(AGES)}</nav>
          <h4 className="story__navhead-2">The Archive</h4>
          <nav className="story__navlist">{renderGroup(ARCHIVE)}</nav>
        </aside>

        <main className="story__main">{children}</main>
      </div>
    </div>
  );
}
