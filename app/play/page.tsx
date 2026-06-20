import Image from "next/image";
import PlayScene from "@/components/play/PlayScene";
import XIcon from "@/components/XIcon";

/**
 * play.norien.live — "Coming Soon" launch screen.
 *
 * A full-screen cinematic hero: the CSS-driven open-world scene (<PlayScene/>)
 * sits behind a centered content column with staggered fade-in. Static + light
 * by design so it loads fast on Vercel. Does not touch the norien.live landing.
 */
export default function PlayPage() {
  return (
    <main className="coming">
      <PlayScene />

      <div className="coming__content">
        <Image
          className="coming__logo"
          src="/logo.png"
          alt="Norien"
          width={92}
          height={92}
          priority
        />

        <span className="coming__kicker">An Open World Built on Base</span>

        <h1 className="coming__title">
          Norien is <span>Coming Soon</span>
        </h1>

        <p className="coming__sub">
          Explore a new world where adventure, discovery, and onchain gaming converge.
        </p>

        <div className="coming__actions">
          <a
            className="coming__btn"
            href="https://x.com/norienlive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon size={17} />
            <span>Follow on X</span>
          </a>
        </div>

        <span className="coming__base">
          <span className="coming__base-dot" aria-hidden="true" />
          Gaming on Base
        </span>
      </div>
    </main>
  );
}
