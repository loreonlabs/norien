import Image from "next/image";

/** Footer — brand, tagline, links, "Built on Base" badge. */
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
          <a href="#world">World</a>
          <a href="#kingdoms">Kingdoms</a>
          <a href="#trade">Trade</a>
          <a href="https://docs.norien.live">Docs</a>
          <a href="https://play.norien.live">Play</a>
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
