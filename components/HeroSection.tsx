"use client";

import { useEffect, useRef } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true; // required for autoplay in most browsers
    const tryPlay = () => {
      const p = video.play();
      if (p) p.catch(() => {});
    };
    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });

    const events: Array<keyof WindowEventMap> = ["pointerdown", "touchstart", "keydown"];
    events.forEach((ev) => window.addEventListener(ev, tryPlay, { once: true, passive: true }));

    return () => {
      video.removeEventListener("canplay", tryPlay);
      events.forEach((ev) => window.removeEventListener(ev, tryPlay));
    };
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />

      <video
        ref={videoRef}
        className="hero__video"
        src="/videos/hero.mp4"
        poster="/images/hero.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* readability: subtle left-side dark gradient behind text only */}
      <div className="hero__grade" aria-hidden="true" />
      {/* cinematic bottom fade so the hero dissolves into the page */}
      <div className="hero__fade" aria-hidden="true" />

      <div className="hero__content">
        <span className="status">
          <span className="status__dot" aria-hidden="true" />
          Gaming on Base
        </span>
        <h1 className="hero__title">
          Build Kingdoms.
          <br />
          Shape Trade.
          <br />
          <em>Leave a Legacy.</em>
        </h1>
        <p className="hero__sub">
          Norien is a persistent strategy world where every city, trade route and decision shapes
          the future of the realm.
        </p>
        <div className="hero__actions">
          <a className="btn btn--gold" href="https://play.norien.live">
            <span>Play Now</span>
            <ArrowIcon />
          </a>
          <a className="btn btn--ghost" href="https://docs.norien.live">
            <span>Documentation</span>
          </a>
        </div>
      </div>
    </header>
  );
}
