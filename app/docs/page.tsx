const FAQ = [
  {
    q: "Is Norien playable now?",
    a: "Norien is in active development. Early experiences are taking shape, and full gameplay will open in stages as systems are completed and tested.",
  },
  {
    q: "What is play.norien.live?",
    a: "It is the home of the playable game — where you enter the world, found your first settlement, and begin your reign once it goes live.",
  },
  {
    q: "What is docs.norien.live?",
    a: "This codex: the official reference for Norien's systems, strategy, and lore. It grows alongside the world as new mechanics are revealed.",
  },
  {
    q: "What is story.norien.live?",
    a: "The story channel — chapters of lore, history, and the unfolding narrative of Norien that sit alongside the gameplay.",
  },
  {
    q: "Is Norien built on Base?",
    a: "Yes. Norien is being built on Base as part of a new generation of persistent onchain games — designed game-first, with the technology kept quietly in the background.",
  },
  {
    q: "Will Norien use crypto trading?",
    a: "No. Trade in Norien means in-game resources, goods, routes, ports, and kingdom economy. Norien is game-first.",
  },
  {
    q: "When will gameplay details be released?",
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
          written by those who came before, and shaped by the ambitions of those who follow.
        </p>
        <p>
          The codex below is the official reference for how that world works: its geography, its
          economy, and the long game of building something that endures.
        </p>
      </section>

      {/* 2. WORLD */}
      <section className="codex__section" id="world">
        <p className="codex__eyebrow">02 — World</p>
        <h2 className="codex__h2">The World of Norien</h2>
        <p>
          Norien is a living realm shaped by geography. Where power can grow — and how it must move —
          is decided by the land itself.
        </p>
        <ul>
          <li><strong>Regions</strong> — the world is divided into distinct regions, each with its own terrain, resources, and opportunities.</li>
          <li><strong>Seas &amp; coastlines</strong> — open water separates and connects, opening fast paths for those who command it.</li>
          <li><strong>Settlements</strong> — villages, towns, and capitals form the beating heart of every kingdom.</li>
          <li><strong>Roads</strong> — overland routes bind settlements together and carry goods, armies, and influence.</li>
          <li><strong>Ports</strong> — coastal gateways that link distant regions and unlock richer markets.</li>
        </ul>
        <p>
          Above all, Norien responds to player decisions. Where rulers settle, trade, and clash, the
          map slowly takes the shape its people give it.
        </p>
      </section>

      {/* 3. KINGDOMS */}
      <section className="codex__section" id="kingdoms">
        <p className="codex__eyebrow">03 — Kingdoms</p>
        <h2 className="codex__h2">Founding a Kingdom</h2>
        <p>
          A kingdom begins with a single stronghold and grows into a realm worthy of a crown. Leading
          one means balancing ambition with the slow work of governing.
        </p>
        <ul>
          <li><strong>Cities</strong> — establish settlements and develop them into thriving centers of power and production.</li>
          <li><strong>Population</strong> — manage the growth, prosperity, and needs of the people who serve your banner.</li>
          <li><strong>Influence</strong> — extend your reach across regions and rival courts, on and off the battlefield.</li>
          <li><strong>Dynasties</strong> — pass your crown down the ages until your bloodline becomes legend.</li>
        </ul>
        <p>
          The strongest kingdoms are cultivated patiently. They are built not for a single victory,
          but to outlast the rulers who founded them.
        </p>
      </section>

      {/* 4. RESOURCES (new) */}
      <section className="codex__section" id="resources">
        <p className="codex__eyebrow">04 — Resources</p>
        <h2 className="codex__h2">Resources &amp; Production</h2>
        <p>
          Norien&apos;s economy is built from resources — gathered, produced, stored, moved, and
          transformed across settlements. Mastering that chain is the foundation of every strong realm.
        </p>
        <ul>
          <li><strong>Grain</strong> feeds cities and sustains a growing population.</li>
          <li><strong>Wood</strong> supports construction and the expansion of settlements.</li>
          <li><strong>Stone</strong> strengthens settlements with walls, roads, and lasting works.</li>
          <li><strong>Iron</strong> supports tools and armies, arming both labor and war.</li>
          <li><strong>Gold</strong> fuels markets and influence, turning surplus into power.</li>
          <li><strong>Ports</strong> connect distant goods, linking what one region lacks with what another holds.</li>
        </ul>
        <p>
          No settlement holds everything it needs. Production in one place creates demand in another —
          and that imbalance is what gives trade its purpose.
        </p>
      </section>

      {/* 5. TRADE */}
      <section className="codex__section" id="trade">
        <p className="codex__eyebrow">05 — Trade</p>
        <h2 className="codex__h2">Trade Routes &amp; Prosperity</h2>
        <p>
          Wealth flows to those who master the map. Trade in Norien is an in-game economy of goods
          moved wisely between the places that produce them and the places that need them.
        </p>
        <ul>
          <li><strong>In-game goods</strong> — grain, timber, ore, gold, and rarer wares carried across the realm.</li>
          <li><strong>Routes</strong> — living lanes of caravans and fleets that bind your settlements together.</li>
          <li><strong>Markets</strong> — where supply, demand, and ambition set the price of prosperity.</li>
          <li><strong>Prosperity</strong> — commerce funds armies, raises wonders, and shapes the fortunes of neighbors.</li>
        </ul>
        <p>
          A ruler who controls the routes controls more than coin. They hold sway over every kingdom
          that depends on the goods passing through their hands.
        </p>
      </section>

      {/* 6. EXPANSION */}
      <section className="codex__section" id="expansion">
        <p className="codex__eyebrow">06 — Expansion</p>
        <h2 className="codex__h2">Expansion &amp; Territory</h2>
        <p>
          Beyond the borders of the known world lie unclaimed coasts, hidden riches, and rival
          ambitions. Growth means venturing outward and securing what you find.
        </p>
        <ul>
          <li><strong>Territory</strong> — claim regions and bring new land under your banner.</li>
          <li><strong>Borders</strong> — hold the edges of your realm against rivals and raiders.</li>
          <li><strong>Scouting</strong> — chart the wilds and reveal what lies beyond the map&apos;s edge.</li>
          <li><strong>Settlements</strong> — plant new strongholds to anchor the ground you take.</li>
        </ul>
        <p>
          Expansion is a long game of position and timing — knowing when to push outward, and when to
          fortify what you already hold.
        </p>
      </section>

      {/* 7. DIPLOMACY */}
      <section className="codex__section" id="diplomacy">
        <p className="codex__eyebrow">07 — Diplomacy</p>
        <h2 className="codex__h2">Diplomacy &amp; Influence</h2>
        <p>
          Not every realm is won by force. Influence is its own power — carried through words,
          treaties, and reputation as much as through armies.
        </p>
        <ul>
          <li><strong>Alliances</strong> — bind your fortunes to others for mutual strength.</li>
          <li><strong>Rivals</strong> — measure your ambitions against the powers that oppose you.</li>
          <li><strong>Reputation</strong> — let your name reach distant courts and open doors before you arrive.</li>
        </ul>
        <p>
          The most enduring rulers think in decades, not battles — weaving relationships that keep a
          realm secure long after rivals have spent themselves.
        </p>
      </section>

      {/* 8. WARFARE */}
      <section className="codex__section" id="warfare">
        <p className="codex__eyebrow">08 — Warfare</p>
        <h2 className="codex__h2">Conflict &amp; Defense</h2>
        <p>
          When diplomacy fails, the strength of a realm is tested in the field. Warfare in Norien
          rewards preparation and position over reckless conquest.
        </p>
        <ul>
          <li><strong>Defense</strong> — protect your cities, routes, and frontiers from those who would take them.</li>
          <li><strong>Armies</strong> — raise and lead forces to project power across the map.</li>
          <li><strong>Fortresses</strong> — anchor your borders with strongholds that turn the tide of a campaign.</li>
          <li><strong>Strategic control</strong> — hold the ground, the seas, and the routes that truly decide a war.</li>
        </ul>
        <p>
          Many systems of conflict are still being forged. The codex will expand with detail as these
          mechanics take their final shape.
        </p>
      </section>

      {/* 9. PROGRESSION */}
      <section className="codex__section" id="progression">
        <p className="codex__eyebrow">09 — Progression</p>
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

      {/* 10. GAMING ON BASE */}
      <section className="codex__section" id="base">
        <p className="codex__eyebrow">10 — Gaming on Base</p>
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

      {/* 11. FAQ */}
      <section className="codex__section" id="faq">
        <p className="codex__eyebrow">11 — FAQ</p>
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

      {/* 12. VISION */}
      <section className="codex__section" id="vision">
        <p className="codex__eyebrow">12 — Vision</p>
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
          The codex will grow as Norien grows. This is the long game — and it is only beginning.
        </p>
      </section>
    </article>
  );
}
