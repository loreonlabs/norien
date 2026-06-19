/**
 * Hidden SVG symbol definitions reused across the page via <use href="#id" />.
 * Rendered once in the layout so every section can reference the icons.
 */
export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="sigil" viewBox="0 0 48 48">
          <path d="M24 3l4.6 9.7L39 14l-7 7.4 1.8 10.6L24 27l-9.8 5 1.8-10.6L9 14l10.4-1.3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M24 27v18M16 39h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </symbol>
        <symbol id="ico-crown" viewBox="0 0 48 48">
          <path d="M8 34l2-16 8 8 6-12 6 12 8-8 2 16z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8 38h32" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </symbol>
        <symbol id="ico-route" viewBox="0 0 48 48">
          <circle cx="11" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="37" cy="35" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M11 17c0 12 26 6 26 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeDasharray="3 4" strokeLinecap="round" />
        </symbol>
        <symbol id="ico-harbor" viewBox="0 0 48 48">
          <path d="M24 8v22M16 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" />
          <path d="M11 26c0 8 6 13 13 13s13-5 13-13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="24" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </symbol>
        <symbol id="ico-compass" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M24 24l9-9-5 13-13 5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </symbol>
        <symbol id="ico-banner" viewBox="0 0 48 48">
          <path d="M14 6v36" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M14 8h22l-5 8 5 8H14z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </symbol>
        <symbol id="ico-spire" viewBox="0 0 48 48">
          <path d="M24 5l6 12v22H18V17z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 39h24M24 5v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}
