import Image from "next/image";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** KINGDOMS — contained cinematic plate (hero.jpg via next/image) + cards. */
export default function KingdomsSection() {
  return (
    <section className="kingdoms" id="kingdoms">
      <div className="kingdoms__plate reveal">
        <Image
          className="kingdoms__img"
          src="/images/hero.jpg"
          alt=""
          fill
          sizes="(max-width: 1240px) 100vw, 1240px"
          style={{ objectFit: "cover", objectPosition: "center 42%" }}
          aria-hidden="true"
        />
        <div className="kingdoms__veil" aria-hidden="true" />
        <div className="kingdoms__inner">
          <p className="kicker">Kingdoms &amp; Dynasties</p>
          <h2 className="kingdoms__head">
            Rule Cities.
            <br />
            Raise Dynasties.
          </h2>
          <p className="kingdoms__lede">
            Lead your people, expand your influence and build a kingdom capable of surviving
            generations.
          </p>
          <a className="btn btn--gold" href="https://play.norien.live">
            <span>Claim Your Throne</span>
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="points">
        <article className="point reveal">
          <svg className="point__ico" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><use href="#ico-compass" /></svg>
          <h3>Discover Lands</h3>
          <p>Chart unexplored territories and secure new opportunities for expansion.</p>
        </article>
        <article className="point reveal">
          <svg className="point__ico" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><use href="#ico-banner" /></svg>
          <h3>Grow Your Influence</h3>
          <p>Build alliances, strengthen your reputation and become a power across the realm.</p>
        </article>
        <article className="point reveal">
          <svg className="point__ico" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><use href="#ico-spire" /></svg>
          <h3>The Long Game</h3>
          <p>Every decision leaves a mark on the future of your kingdom.</p>
        </article>
      </div>
    </section>
  );
}
