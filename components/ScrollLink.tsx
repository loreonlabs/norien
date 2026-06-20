"use client";

/**
 * In-page navigation that smooth-scrolls to a section WITHOUT ever writing a
 * hash to the URL (no `#world` in the address bar). Renders a <button> so there
 * is no href to fall back to — the address bar stays clean by construction.
 * Used by the landing nav + footer; the docs/story rails use the same pattern.
 */
export default function ScrollLink({
  targetId,
  className,
  children,
  ariaLabel,
}: {
  targetId: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  const onClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
