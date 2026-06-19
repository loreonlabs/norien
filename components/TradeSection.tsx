/** TRADE — routes, ports & prosperity. */
export default function TradeSection() {
  return (
    <section className="section" id="trade">
      <div className="section__head reveal">
        <p className="kicker">Trade &amp; Prosperity</p>
        <h2 className="section__title">
          Trade Moves
          <br />
          the World
        </h2>
        <p className="section__lede">
          Control trade routes, establish prosperous ports and turn commerce into power.
        </p>
      </div>

      <div className="points">
        <article className="point reveal">
          <svg className="point__ico" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><use href="#ico-route" /></svg>
          <h3>Trade Routes</h3>
          <p>Connect cities and move valuable resources across the realm.</p>
        </article>
        <article className="point reveal">
          <svg className="point__ico" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><use href="#ico-harbor" /></svg>
          <h3>Ports &amp; Harbors</h3>
          <p>Build strategic gateways that connect distant regions.</p>
        </article>
        <article className="point reveal">
          <svg className="point__ico" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true"><use href="#ico-crown" /></svg>
          <h3>Prosperity</h3>
          <p>Transform economic strength into long-term growth.</p>
        </article>
      </div>
    </section>
  );
}
