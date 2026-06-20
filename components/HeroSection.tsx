"use client";

import { useEffect, useRef, useState } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);   // video has a playable frame → fade it in
  const [failed, setFailed] = useState(false); // video errored → show still image fallback

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true; // required for autoplay in most browsers

    const failedRef = { current: false };
    const reveal = () => {
      if (failedRef.current) return;
      setReady(true);
    };
    const onError = () => {
      failedRef.current = true;
      setReady(false);
      setFailed(true);
    };

    // already buffered (e.g. fast cache / bfcache restore)?
    if (video.readyState >= 2) reveal();

    video.addEventListener("loadeddata", reveal);
    video.addEventListener("canplay", reveal);
    video.addEventListener("playing", reveal);
    video.addEventListener("error", onError);

    // begin playback immediately; retry once on first interaction if autoplay is blocked
    const tryPlay = () => {
      const p = video.play();
      if (p) p.catch(() => {});
    };
    tryPlay();
    const interactions: Array<keyof WindowEventMap> = ["pointerdown", "touchstart", "keydown"];
    interactions.forEach((ev) => window.addEventListener(ev, tryPlay, { once: true, passive: true }));

    // safety net: never leave the hero on the blank navy layer forever
    const safety = window.setTimeout(reveal, 6000);

    return () => {
      video.removeEventListener("loadeddata", reveal);
      video.removeEventListener("canplay", reveal);
      video.removeEventListener("playing", reveal);
      video.removeEventListener("error", onError);
      interactions.forEach((ev) => window.removeEventListener(ev, tryPlay));
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <header className="hero" id="top">
      {/* dark navy loading layer (lowest) */}
      <div className="hero__bg" aria-hidden="true" />
      {/* still-image fallback — only fades in if the video fails */}
      <div className={`hero__fallback${failed ? " is-visible" : ""}`} aria-hidden="true" />

      {/* primary background video: no poster (prevents image→video flash) */}
      <video
        ref={videoRef}
        className={`hero__video${ready ? " is-ready" : ""}`}
        src="/videos/hero.mp4"
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
            <span>Codex</span>
          </a>
        </div>
      </div>
    </header>
  );
}
