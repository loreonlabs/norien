"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      <a className="nav__brand" href="#top">
        <Image className="nav__sigil" src="/logo.png" alt="Norien" width={40} height={40} priority />
        <span className="nav__name">NORIEN</span>
      </a>
      <div className="nav__links">
        <a href="#world">World</a>
        <a href="#kingdoms">Kingdoms</a>
        <a href="#trade">Trade</a>
        <a href="https://docs.norien.live">Docs</a>
        <a className="nav__cta" href="https://play.norien.live">Play</a>
      </div>
    </nav>
  );
}
