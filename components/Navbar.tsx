"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollLink from "@/components/ScrollLink";
import XIcon from "@/components/XIcon";

/**
 * Primary navigation for norien.live.
 *
 * In-page links (World / Kingdoms / Trade) smooth-scroll with NO hash in the URL
 * (see ScrollLink). Cross-property links point at the other Norien domains, and
 * Official X opens in a new tab. This same link set is mirrored in the footer
 * and across the Codex + Chronicles so the whole ecosystem stays consistent.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav" aria-label="Primary">
      <ScrollLink targetId="top" className="nav__brand" ariaLabel="Norien — back to top">
        <Image className="nav__sigil" src="/logo.png" alt="Norien" width={40} height={40} priority />
        <span className="nav__name">NORIEN</span>
      </ScrollLink>
      <div className="nav__links">
        <ScrollLink targetId="world">World</ScrollLink>
        <ScrollLink targetId="kingdoms">Kingdoms</ScrollLink>
        <ScrollLink targetId="trade">Trade</ScrollLink>
        <a href="https://docs.norien.live">Codex</a>
        <a href="https://story.norien.live">Chronicles</a>
        <a className="nav__cta" href="https://play.norien.live">Play</a>
        <a
          className="nav__x"
          href="https://x.com/norienlive"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Official Norien X (opens in a new tab)"
        >
          <XIcon />
        </a>
      </div>
    </nav>
  );
}
