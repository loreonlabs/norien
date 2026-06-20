import Image from "next/image";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** PLAY — final call to action. */
export default function CTASection() {
  return (
    <section className="play" id="play">
      <div className="play__inner reveal">
        <Image className="play__sigil" src="/logo.png" alt="Norien" width={56} height={56} />
        <p className="kicker">Enter Norien</p>
        <h2 className="play__head">
          Your Story
          <br />
          Begins Here
        </h2>
        <p className="play__sub">
          Step into Norien, build your kingdom and leave a legacy that will be remembered across the
          world.
        </p>
        <div className="play__actions">
          <a className="btn btn--gold btn--lg" href="https://play.norien.live">
            <span>Play Now</span>
            <ArrowIcon />
          </a>
          <a className="btn btn--ghost btn--lg" href="https://docs.norien.live">
            <span>Codex</span>
          </a>
          <a className="btn btn--ghost btn--lg" href="https://story.norien.live">
            <span>Chronicles</span>
          </a>
        </div>
      </div>
    </section>
  );
}
