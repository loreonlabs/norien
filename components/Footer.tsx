import Image from "next/image";
import ScrollLink from "@/components/ScrollLink";
import XIcon from "@/components/XIcon";

/** Footer — brand, tagline, the full Norien nav set, "Built on Base" badge. */
export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__inner">
        <div className="foot__brand">
          <Image src="/logo.png" alt="Norien" width={26} height={26} />
          <span>NORIEN</span>
        </div>
        <p className="foot__meta">Build dynasties. Control trade. Shape history.</p>
        <div className="foot__links">
          <ScrollLink targetId="world">World</ScrollLink>
          <ScrollLink targetId="kingdoms">Kingdoms</ScrollLink>
          <ScrollLink targetId="trade">Trade</ScrollLink>
          <a href="https://docs.norien.live">Codex</a>
          <a href="https://story.norien.live">Chronicles</a>
          <a href="https://play.norien.live">Play</a>
          <a
            className="foot__x"
            href="https://x.com/norienlive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon /> Official X
          </a>
        </div>
      </div>
      <div className="foot__base">
        <span className="status__dot" aria-hidden="true" />
        Built on Base
      </div>
      <p className="foot__copy">© 2026 Norien. All realms reserved.</p>
    </footer>
  );
}
