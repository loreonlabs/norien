const FAQ = [
  {
    q: "What is Norien?",
    a: "Norien is a persistent strategy world where you build kingdoms, control trade, expand territory, and leave a lasting legacy across generations.",
  },
  {
    q: "Is Norien playable now?",
    a: "Norien is in active development. Early experiences are taking shape, and full gameplay will open in stages as systems are completed.",
  },
  {
    q: "What is play.norien.live?",
    a: "It is the home of the playable game — where you enter the world, found your first settlement, and begin your reign.",
  },
  {
    q: "What is docs.norien.live?",
    a: "This codex: the official reference for Norien's systems, strategy, and lore. It grows alongside the world.",
  },
  {
    q: "Will progress be persistent?",
    a: "Yes. Norien is designed as a persistent world, where your kingdom, your choices, and your history endure over time rather than resetting.",
  },
  {
    q: "Is Norien built on Base?",
    a: "Yes. Norien is being built on Base as part of a new generation of persistent onchain games — designed game-first, with the technology kept quietly in the background.",
  },
  {
    q: "When will more gameplay details be released?",
    a: "Systems are revealed as they are ready. Follow the main site and the story channel for new chapters of the codex and gameplay updates.",
  },
];

export default function DocsPage() {
  return (
    <article className="codex">
      {/* HERO */}
      <header className="codex__hero">
        <p className="codex__kicker">The Norien Codex</p>
        <h1 className="codex__title">THE NORIEN CODEX</h1>
        <p className="codex__subtitle">
          Knowledge, systems, strategy, and lore from the living world of Norien.
        </p>
      </header>

      {/* 1. OVERVIEW */}
      <section className="codex__section" id="overview">
        <p className="codex__eyebrow">01 — Overview</p>
        <h2 className="codex__h2">What is Norien?</h2>
        <p>
          Norien is a <strong>persistent strategy world</strong> where players build kingdoms,
          control trade, expand territory, and leave a legacy across generations.
        </p>
        <p>
          Every ruler shares one continuous realm. The cities you raise, the routes you open, and the
          borders you draw remain part of the world long after a single session ends — a history
          written by the choices of those who came before, and the ambitions of those who follow.
        </p>
      </section>

      {/* 2. WORLD */}
      <section className="codex__section" id="world">
        <p className="codex__eyebrow">02 — World</p>
        <h2 className="codex__h2">The World of Norien</h2>
        <p>
          Norien is a living realm shaped by geography. Mountain ranges, river valleys, open seas,
          and fertile coastlines define where power can grow and how it must move.
        </p>
        <p>
          The map is divided into <strong>regions</strong> — each with its own terrain, resources,
          and opportunities. Roads and sea lanes bind settlements together, while harbors and frontier
          outposts mark the edges of the known world.
        </p>
        <p>
          Above all, Norien is shaped by <strong>player decisions</strong>. Where rulers settle, trade,
          and clash, the world responds — and the realm slowly takes the form its people give it.
        </p>
      </section>

      {/* 3. KINGDOMS */}
      <section className="codex__section" id="kingdoms">
        <p className="codex__eyebrow">03 — Kingdoms</p>
        <h2 className="codex__h2">Founding a Kingdom</h2>
        <p>
          A kingdom begins with a single stronghold. From there you raise cities, govern your people,
          and guide their growth from timber halls into capitals worthy of a crown.
        </p>
        <ul>
          <li><strong>Build cities</strong> — establish settlements and develop them into thriving centers of power.</li>
          <li><strong>Rule your people</strong> — manage growth, prosperity, and the needs of those who serve your banner.</li>
          <li><strong>Expand your influence</strong> — extend your reach across regions and rival courts.</li>
          <li><strong>Create dynasties</strong> — pass your crown down the ages until your bloodline becomes legend.</li>
        </ul>
        <p>
          The strongest kingdoms are not built in a day. They are cultivated patiently, balancing
          ambition with the slow work of governing a realm that endures.
        </p>
      </section>

      {/* 4. TRADE */}
      <section className="codex__section" id="trade">
        <p className="codex__eyebrow">04 — Trade</p>
        <h2 className="codex__h2">Trade Routes &amp; Prosperity</h2>
        <p>
          Wealth flows to those who master the map. Resources gathered from the land become the
          lifeblood of an empire when moved wisely between regions.
        </p>
        <ul>
          <li><strong>Resources</strong> — grain, timber, ore, gold, and rarer goods fuel growth and power.</li>
          <li><strong>Ports &amp; harbors</strong> — coastal gateways that open distant, richer markets.</li>
          <li><strong>Markets</strong> — where supply, demand, and ambition set the price of prosperity.</li>
          <li><strong>Trade routes</strong> — living lanes of caravans and fleets that bind your realm together.</li>
        </ul>
        <p>
          Commerce is power. A ruler who controls the routes can fund armies, raise wonders, and
          shape the fortunes of neighbors who depend on the goods that pass through their hands.
        </p>
      </section>

      {/* 5. EXPANSION */}
      <section className="codex__section" id="expansion">
        <p className="codex__eyebrow">05 — Expansion</p>
        <h2 className="codex__h2">Expansion &amp; Territory</h2>
        <p>
          Beyond the borders of the known world lie unclaimed coasts, hidden riches, and rival
          ambitions. Growth means venturing outward and securing what you find.
        </p>
        <ul>
          <li><strong>Discover lands</strong> — chart the wilds and reveal regions no crown has touched.</li>
          <li><strong>Claim regions</strong> — settle frontiers and bring new territory under your banner.</li>
          <li><strong>Defend borders</strong> — hold the edges of your realm against rivals and raiders.</li>
          <li><strong>Shape the map</strong> — every settlement and road redraws the balance of the world.</li>
        </ul>
        <p>
          Expansion is a long game of position and timing — knowing when to push outward, and when to
          fortify what you already hold.
        </p>
      </section>

      {/* 6. DIPLOMACY */}
      <section className="codex__section" id="diplomacy">
        <p className="codex__eyebrow">06 — Diplomacy</p>
        <h2 className="codex__h2">Diplomacy &amp; Influence</h2>
        <p>
          Not every realm is won by force. Influence is its own form of power, carried through words,
          treaties, and reputation as much as through armies.
        </p>
        <ul>
          <li><strong>Alliances</strong> — bind your fortunes to others for mutual strength.</li>
          <li><strong>Rivalries</strong> — measure your ambitions against the powers that oppose you.</li>
          <li><strong>Reputation</strong> — let your name reach distant courts and open doors before you arrive.</li>
          <li><strong>Negotiation</strong> — turn conflict into advantage without raising a single banner.</li>
        </ul>
        <p>
          The most enduring rulers think in decades, not battles — weaving a web of relationships that
          keeps their realm secure long after rivals have spent themselves.
        </p>
      </section>

      {/* 7. WARFARE */}
      <section className="codex__section" id="warfare">
        <p className="codex__eyebrow">07 — Warfare</p>
        <h2 className="codex__h2">Conflict &amp; Defense</h2>
        <p>
          When diplomacy fails, the strength of a realm is tested in the field. Warfare in Norien
          rewards preparation, position, and patience over reckless conquest.
        </p>
        <ul>
          <li><strong>Armies</strong> — raise and lead forces to project power across the map.</li>
          <li><strong>Defense</strong> — protect your cities, routes, and frontiers from those who would take them.</li>
          <li><strong>Fortresses</strong> — anchor your borders with strongholds that turn the tide of any campaign.</li>
          <li><strong>Strategic control</strong> — hold the ground, the seas, and the routes that truly decide a war.</li>
        </ul>
        <p>
          Many systems of conflict are still being forged. The codex will expand with detail as these
          mechanics take their final shape.
        </p>
      </section>

      {/* 8. PROGRESSION */}
      <section className="codex__section" id="progression">
        <p className="codex__eyebrow">08 — Progression</p>
        <h2 className="codex__h2">From Settlement to Realm</h2>
        <p>
          Norien is a journey measured in ages. A ruler rises from a lone settlement to a realm
          remembered in the chronicles of the world.
        </p>
        <ul>
          <li><strong>Early game</strong> — found your first settlement, secure resources, and find your footing.</li>
          <li><strong>Mid game</strong> — grow cities, open trade, and extend your influence across regions.</li>
          <li><strong>Late game</strong> — command empires, shape diplomacy, and contend for lasting dominance.</li>
        </ul>
        <p>
          And beyond a single reign, the world itself progresses — kingdoms rise and fall, the map is
          redrawn, and the long history of Norien continues to be written.
        </p>
      </section>

      {/* 9. GAMING ON BASE */}
      <section className="codex__section" id="base">
        <p className="codex__eyebrow">09 — Gaming on Base</p>
        <h2 className="codex__h2">Gaming on Base</h2>
        <p>
          Norien is being built on <strong>Base</strong> as part of a new generation of persistent
          onchain gaming experiences.
        </p>
        <div className="codex__note">
          <p>
            The technology serves the game, never the other way around. Norien is designed
            game-first — a living world of kingdoms, trade, and strategy, with the foundations kept
            quietly in the background so the experience always comes first.
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="codex__section" id="faq">
        <p className="codex__eyebrow">10 — FAQ</p>
        <h2 className="codex__h2">Frequently Asked Questions</h2>
        <div className="codex__faq">
          {FAQ.map((item) => (
            <div className="codex__faq-item" key={item.q}>
              <p className="codex__faq-q">{item.q}</p>
              <p className="codex__faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. VISION */}
      <section className="codex__section" id="vision">
        <p className="codex__eyebrow">11 — Vision</p>
        <h2 className="codex__h2">The Long Game</h2>
        <p>
          Norien is being built slowly and deliberately — as a persistent world for kingdoms, trade,
          strategy, lore, and player-driven history.
        </p>
        <p>
          The goal is not a fleeting experience, but an enduring realm: one where every reign adds to
          a shared chronicle, where the map remembers, and where the choices of players become the
          history of the world.
        </p>
        <p>
          The Codex will grow as Norien grows. This is the long game — and it is only beginning.
        </p>
      </section>
    </article>
  );
}
