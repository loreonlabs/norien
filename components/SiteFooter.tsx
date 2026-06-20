import Image from "next/image";
import XIcon from "@/components/XIcon";

/**
 * Shared footer for the sub-properties (Codex + Chronicles). Carries the
 * cross-ecosystem links — including Official X — so social/external links live
 * here instead of crowding the mobile header. Mirrors the landing footer style.
 */
type Link = { label: string; href: string; x?: boolean };

export default function SiteFooter({ links }: { links: Link[] }) {
  return (
    <footer className="site-foot">
      <div className="site-foot__inner">
        <div className="site-foot__brand">
          <Image src="/logo.png" alt="Norien" width={24} height={24} />
          <span>NORIEN</span>
        </div>
        <nav className="site-foot__links" aria-label="Norien network">
          {links.map((l) =>
            l.x ? (
              <a
                key={l.label}
                className="site-foot__x"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon /> {l.label}
              </a>
            ) : (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            )
          )}
        </nav>
      </div>
      <p className="site-foot__copy">© 2026 Norien. All realms reserved.</p>
    </footer>
  );
}
