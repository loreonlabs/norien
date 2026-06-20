"use client";

import { useEffect, useRef } from "react";

/**
 * Cinematic, CSS-driven open-world backdrop for the play.norien.live "Coming
 * Soon" screen. Everything is layered SVG silhouettes + gradients + CSS
 * keyframes (fog drift, island float, particle rise, ambient glow) plus a
 * lightweight pointer-parallax — no WebGL, no heavy libraries. The layers are
 * intentionally modular (sky / mountains / ruins / islands / fog / path) so the
 * same scene can later seed the real game world's environment art.
 */

// Deterministic particle field (no Math.random → no hydration mismatch).
const PARTICLES = [
  { left: 8, delay: 0, dur: 17, size: 3, drift: 14 },
  { left: 18, delay: 6, dur: 22, size: 2, drift: -10 },
  { left: 27, delay: 11, dur: 19, size: 4, drift: 8 },
  { left: 36, delay: 3, dur: 24, size: 2, drift: -16 },
  { left: 44, delay: 14, dur: 20, size: 3, drift: 12 },
  { left: 53, delay: 8, dur: 26, size: 2, drift: -8 },
  { left: 61, delay: 2, dur: 18, size: 3, drift: 16 },
  { left: 69, delay: 12, dur: 23, size: 2, drift: -12 },
  { left: 77, delay: 5, dur: 21, size: 4, drift: 10 },
  { left: 85, delay: 16, dur: 25, size: 2, drift: -14 },
  { left: 92, delay: 9, dur: 19, size: 3, drift: 9 },
  { left: 14, delay: 18, dur: 27, size: 2, drift: -7 },
  { left: 48, delay: 20, dur: 22, size: 2, drift: 13 },
  { left: 73, delay: 22, dur: 24, size: 3, drift: -11 },
];

type V = React.CSSProperties & Record<string, string | number>;

export default function PlayScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", tx.toFixed(3));
      el.style.setProperty("--my", ty.toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cscene" ref={ref} aria-hidden="true">
      {/* sky + ambient */}
      <div className="cscene__sky" />
      <div className="cscene__stars" />
      <div className="cscene__glow" />

      {/* far mountains */}
      <div className="cscene__par cscene__far" style={{ "--dx": "10px", "--dy": "6px" } as V}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice">
          <path d="M0 320V180l120-60 120 55 120-85 140 80 140-60 140 65 140-80 140 70 140-45 120 55 120-45 120 40V320Z" />
        </svg>
      </div>

      {/* distant ancient ruins on the horizon */}
      <div className="cscene__par cscene__ruins" style={{ "--dx": "16px", "--dy": "8px" } as V}>
        <svg viewBox="0 0 420 200" preserveAspectRatio="xMidYMax meet">
          {/* broken colonnade */}
          <path d="M40 200V96h16v104Zm34 0V92h16v108Zm70 0V70h18v130Zm34 0V70h18v130Zm18-130 8-18 8 18Zm70 130V86h16v114Zm60 0V100h16v100Zm-26-14h120v10H334Z" />
          <path d="M150 70h70v10h-70z" />
        </svg>
      </div>

      {/* mid mountains */}
      <div className="cscene__par cscene__mid" style={{ "--dx": "22px", "--dy": "12px" } as V}>
        <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMax slice">
          <path d="M0 360V230l160-80 160 90 140-100 160 95 140-115 140 110 140-80 160 95 140-75 140 65V360Z" />
        </svg>
      </div>

      {/* floating landmasses */}
      <div className="cscene__par cscene__isle cscene__isle--a" style={{ "--dx": "34px", "--dy": "20px" } as V}>
        <span className="cscene__float">
          <Island />
        </span>
      </div>
      <div className="cscene__par cscene__isle cscene__isle--b" style={{ "--dx": "46px", "--dy": "26px" } as V}>
        <span className="cscene__float cscene__float--slow">
          <Island small />
        </span>
      </div>
      <div className="cscene__par cscene__isle cscene__isle--c" style={{ "--dx": "28px", "--dy": "16px" } as V}>
        <span className="cscene__float cscene__float--slow2">
          <Island small />
        </span>
      </div>

      {/* drifting fog bands */}
      <div className="cscene__fog cscene__fog--1" />
      <div className="cscene__fog cscene__fog--2" />

      {/* glowing energy pathway rising toward the horizon */}
      <div className="cscene__par cscene__pathwrap" style={{ "--dx": "40px", "--dy": "10px" } as V}>
        <svg className="cscene__path" viewBox="0 0 600 360" preserveAspectRatio="xMidYMax meet">
          <path d="M300 360C290 250 250 210 250 150 250 110 285 80 300 40" />
          <path d="M300 360C310 250 350 210 350 150 350 110 315 80 300 40" />
        </svg>
      </div>

      {/* near foreground ridge */}
      <div className="cscene__par cscene__fore" style={{ "--dx": "56px", "--dy": "30px" } as V}>
        <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice">
          <path d="M0 300V170l200-55 220 60 220-70 220 75 220-65 220 60 140-40V300Z" />
        </svg>
      </div>

      {/* ambient rising particles */}
      <div className="cscene__particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={
              {
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--delay": `${p.delay}s`,
                "--dur": `${p.dur}s`,
                "--drift": `${p.drift}px`,
              } as V
            }
          />
        ))}
      </div>

      <div className="cscene__vignette" />
    </div>
  );
}

function Island({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 300 240" width={small ? 168 : 252} preserveAspectRatio="xMidYMid meet">
      {/* grassy top */}
      <path className="cscene__isle-top" d="M44 78q106-44 212 0 4 24-40 34-66 16-132 0-44-10-40-34Z" />
      {/* rocky underside */}
      <path className="cscene__isle-rock" d="M58 96q92 26 184 0-12 40-44 78-22 26-48 56-26-30-48-56-32-38-44-78Z" />
      {/* tiny ruin spire on top */}
      <path className="cscene__isle-spire" d="M138 52h8v22h-8zm14 4h7v18h-7zm-28 2h7v16h-7z" />
    </svg>
  );
}
