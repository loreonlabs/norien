/**
 * WorldBackdrop — a faint, fixed Norien-world presence placed behind text-heavy
 * surfaces (the Codex and the Chronicles) so they feel like the same world as
 * play.norien.live without harming readability. Low-opacity, static, decorative
 * only (pointer-events: none, aria-hidden). Uses the canonical scene vocabulary
 * (deep-blue mountains, floating isles, horizon glow, stars) and brand tokens.
 *
 * Intentionally separate from PlayScene — PlayScene is the frozen canon and is
 * not imported or modified here.
 */
const FAR =
  "M0 320V180l120-60 120 55 120-85 140 80 140-60 140 65 140-80 140 70 140-45 120 55 120-45 120 40V320Z";
const MID =
  "M0 360V230l160-80 160 90 140-100 160 95 140-115 140 110 140-80 160 95 140-75 140 65V360Z";

function Isle({ w }: { w: number }) {
  return (
    <svg width={w} viewBox="0 0 300 240" className="wbd__isle-svg">
      <path
        className="wbd__top"
        d="M44 78q106-44 212 0 4 24-40 34-66 16-132 0-44-10-40-34Z"
      />
      <path className="wbd__rock" d="M58 96q92 26 184 0-12 40-44 78-22 26-48 56-26-30-48-56-32-38-44-78Z" />
      <path className="wbd__gold" d="M120 74V44h10v8h8v-8h10v8h8v-8h10v30z" />
    </svg>
  );
}

export default function WorldBackdrop() {
  return (
    <div className="wbd" aria-hidden="true">
      <div className="wbd__glow" />
      <div className="wbd__stars" />
      <svg className="wbd__far" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice">
        <path d={FAR} />
      </svg>
      <svg className="wbd__mid" viewBox="0 0 1440 360" preserveAspectRatio="xMidYMax slice">
        <path d={MID} />
      </svg>
      <div className="wbd__isle wbd__isle--l">
        <Isle w={150} />
      </div>
      <div className="wbd__isle wbd__isle--r">
        <Isle w={128} />
      </div>
    </div>
  );
}
