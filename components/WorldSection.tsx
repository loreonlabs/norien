/** WORLD — intro + world-scale stats. */
export default function WorldSection() {
  return (
    <section className="section world" id="world">
      <div className="section__head reveal">
        <p className="kicker">A Persistent World</p>
        <h2 className="section__title">
          A Living World
          <br />
          That Never Stands Still
        </h2>
        <p className="section__lede">
          From fertile valleys to distant coastlines, every region offers new opportunities for
          growth, diplomacy and conquest.
        </p>
      </div>

      <div className="stats">
        <div className="stat reveal">
          <span className="stat__num" data-count="1200">0</span>
          <span className="stat__label">Tiles of open world</span>
        </div>
        <div className="stat reveal">
          <span className="stat__num" data-count="40">0</span>
          <span className="stat__label">Rival kingdoms</span>
        </div>
        <div className="stat reveal">
          <span className="stat__num" data-count="300">0</span>
          <span className="stat__label">Trade goods &amp; routes</span>
        </div>
      </div>
    </section>
  );
}
