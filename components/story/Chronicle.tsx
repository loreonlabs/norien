"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

/**
 * THE CHRONICLES OF NORIEN — the full lore archive (client island).
 *
 * Holds all narrative data and the interactive chrome that makes it read like a
 * premium codex: a fullscreen artwork lightbox (ESC / click-outside), a book
 * flow (Previous / Next chapter) that smooth-scrolls WITHOUT touching the URL,
 * per-chapter metadata + quote, an illustrated world map (inline SVG, so it
 * stays lightweight and on-brand), faction + myth archives, and a connected
 * golden timeline with rise/fall markers. Names are fictional throughout.
 */

type Meta = { era: string; region: string; status: string; importance: string };
type Chapter = {
  id: string;
  num: string;
  index: string;
  short: string; // book-flow label
  age: string;
  title: string;
  image: string;
  alt: string;
  meta: Meta;
  quote: { text: string; source: string };
  paragraphs: string[];
};

const CHAPTERS: Chapter[] = [
  {
    id: "first-age",
    num: "I",
    index: "01",
    short: "The First Age",
    age: "The First Age",
    title: "Before the Crowns",
    image: "/story/ch01-first-age.jpg",
    alt: "An ancient, untouched world of mist-wrapped mountains, rivers, and deep forests.",
    meta: { era: "The First Age", region: "The Whole of Norien", status: "Mythic", importance: "Foundational" },
    quote: { text: "Before the first crown, there was only the land — and the land remembers.", source: "The Elder Verses" },
    paragraphs: [
      "Long before any banner was raised or any throne was carved, Norien simply was. Mountains stood unnamed against the dawn, rivers ran toward seas no map had measured, and forests breathed without a single soul to count their years. There were no kingdoms here — only a vast and patient land waiting for footsteps.",
      "The first peoples came not as conquerors but as wanderers, following the rivers down from the high country in search of warmth and water. Where the valleys opened into fertile plains, they paused. They learned the rhythm of the floods, the seasons of the soil, and the quiet promise of land that could be tended rather than merely crossed.",
      "From those first hearths grew the first settlements — clusters of timber and stone that clung to the riverbanks and the forest edges. They asked for little and built for permanence. In their patience lies the true beginning of Norien: not in glory, but in the simple decision to stay.",
    ],
  },
  {
    id: "great-sea",
    num: "II",
    index: "02",
    short: "The Great Sea",
    age: "The Great Sea",
    title: "The Heart of the World",
    image: "/story/ch02-great-sea.jpg",
    alt: "A lone sailing ship on a vast, mirror-still sea beneath a sky of stars.",
    meta: { era: "The First Age", region: "The Great Sea", status: "Mythic", importance: "Major" },
    quote: { text: "Give a people the sea, and you give them the world.", source: "Saying of the Merchant Coast" },
    paragraphs: [
      "In time the rivers led the people to something far greater than any valley — the Great Sea, an horizon without end. At first it was a boundary, a wall of water that marked the edge of the known. Then someone built a hull strong enough to answer it, and the edge of the world became its center.",
      "The first crossings were acts of pure nerve, made in small craft by those who trusted the stars more than the shore. They returned changed, and richer — carrying grain in one direction and timber in another, and bringing home stories worth more than any cargo.",
      "Coastal settlements swelled into the first true ports, their harbours crowded with sails at every tide. The Great Sea did not divide Norien; it bound it together. From this water the whole of civilization would learn its oldest lesson — that distance, once crossed with confidence, becomes opportunity.",
    ],
  },
  {
    id: "merchant-kingdoms",
    num: "III",
    index: "03",
    short: "Merchant Kingdoms",
    age: "The Merchant Kingdoms",
    title: "The Price of Power",
    image: "/story/ch03-merchant-kingdoms.jpg",
    alt: "A bustling medieval trade town at golden hour, its lanes lined with merchant houses.",
    meta: { era: "Age of Commerce", region: "Merchant Coast", status: "Historical", importance: "Major" },
    quote: { text: "A trusted name outlasts a full vault.", source: "Ledger of the Three Houses" },
    paragraphs: [
      "Where goods gather, wealth follows, and where wealth gathers, power is never far behind. The great ports grew inland into cities, and the cities into kingdoms ruled not by warlords but by guilds, brokers, and the keepers of the ledgers. These were the Merchant Kingdoms, and their crowns were stitched from coin.",
      "A family could rise from a single stall to a dynasty within three generations — and fall faster still. Reputation became the truest currency: a name worth trusting could move more cargo than any fleet, and a name disgraced could empty a counting-house overnight.",
      "It was here that Norien first learned a truth its rulers would never forget. A trade route, once opened, is worth more than any army. Steel might take a city for a season, but whoever governs the flow of goods governs it for a hundred years.",
    ],
  },
  {
    id: "old-empire",
    num: "IV",
    index: "04",
    short: "Old Empire",
    age: "The Old Empire",
    title: "One Crown to Bind Them",
    image: "/story/ch04-old-empire.jpg",
    alt: "A golden capital of monuments and temples crowning a sunlit hill.",
    meta: { era: "The Imperial Age", region: "Old Imperial Lands", status: "Historical", importance: "Defining" },
    quote: { text: "One road, one law, one crown — and the world grew quiet.", source: "Annals of the Imperial Court" },
    paragraphs: [
      "From among the merchant cities rose one that would not be content to trade as an equal. Through alliance, ambition, and a patience that bordered on the eternal, it bound the scattered kingdoms beneath a single crown — and so was born the Old Empire, the greatest power Norien had ever known.",
      "Its golden capital was a wonder of the age: avenues of monuments, halls of polished stone, and banners flying from every garrison between the northern peaks and the southern shore. Roads paved by imperial decree carried law, coin, and legion alike to the farthest province. For the first time, a traveller could cross the whole of the known world and never leave the reach of one ruler.",
      "Under that single crown, Norien knew an order it had never imagined — a century of safe roads, counted harvests, and a peace held by the sheer certainty of imperial reach. To those who lived within it, the Empire did not seem like a thing that could end. Nothing so vast ever does.",
    ],
  },
  {
    id: "fall",
    num: "V",
    index: "05",
    short: "Fall of the Empire",
    age: "The Fall of the Empire",
    title: "The Long Shattering",
    image: "/story/ch05-fall.jpg",
    alt: "The ruins of a great imperial city, its arches broken and silent at dusk.",
    meta: { era: "The Imperial Age", region: "Old Imperial Lands", status: "Historical", importance: "Defining" },
    quote: { text: "Empires fall. Roads remain.", source: "Chronicle of the Fifth Age" },
    paragraphs: [
      "No empire falls in a single day. The Old Empire died the way the great ones always do — slowly, from within, long before the walls came down. Governors grew into kings in all but name. The treasury, stretched across too many provinces, bled coin faster than the routes could replace it. Ambition, once aimed outward, turned upon the throne itself.",
      "When the breaking came, it came everywhere at once. Banners that had flown for a hundred years were torn down or burned. Cities that had never feared a siege learned the sound of one. The roads that had carried law now carried refugees, and the harbours that had welcomed fleets watched them sail away for good.",
      "By the end the capital stood half-empty, its monuments cracked and its halls silent. The crown that had bound the world was gone, and no hand proved strong enough to lift it again. Norien did not fall into darkness — it fell into pieces, and from those pieces a very different world would have to be built.",
    ],
  },
  {
    id: "age-of-kingdoms",
    num: "VI",
    index: "06",
    short: "Age of Kingdoms",
    age: "The Age of Kingdoms",
    title: "A Hundred Thrones",
    image: "/story/ch06-age-of-kingdoms.jpg",
    alt: "A fortified medieval castle crowning a forested ridge beneath a brooding sky.",
    meta: { era: "Age of Kingdoms", region: "Central Realm", status: "Historical", importance: "Major" },
    quote: { text: "A hill, a wall, and the will to hold it — that is a kingdom.", source: "Sayings of the Stone Lords" },
    paragraphs: [
      "Out of the Empire's ruin rose not one power but a hundred. Where a province had stood, a kingdom took its place; where a governor had ruled, a regional lord raised a castle and called the surrounding land his own. The world became decentralized, contested, and gloriously alive.",
      "These were the years of stone — of keeps built on every defensible ridge, of walled towns and sworn vassals, of borders drawn and redrawn with each marriage, each feud, each harvest. No single ruler could command the whole, and so each learned to bargain, to threaten, and to endure.",
      "It was a harder world than the Empire, but a freer one. A capable ruler with a strong castle and a clever steward could carve out a legacy that answered to no distant throne. Ambition, once the privilege of emperors, now belonged to anyone bold enough to claim a hill and hold it.",
    ],
  },
  {
    id: "northern-frontier",
    num: "VII",
    index: "07",
    short: "Northern Frontier",
    age: "The Northern Frontier",
    title: "Where the Maps End",
    image: "/story/ch07-northern-frontier.jpg",
    alt: "A remote stronghold in a frozen forest beneath snow-laden mountains.",
    meta: { era: "Age of Kingdoms", region: "Northern Frontier", status: "Contested", importance: "Moderate" },
    quote: { text: "The maps end, but the world does not.", source: "Marginalia of the Frostward Charts" },
    paragraphs: [
      "Beyond the last of the settled kingdoms lay the North — a country of snow-locked mountains and frozen coastlines where the maps simply ended in white. Few who ventured there returned, and fewer still returned with anything but stories.",
      "Yet stories were enough to draw them on. Tales told of strongholds raised by exiles generations ago, of forgotten settlements still burning their hearths somewhere past the ice, of riches buried in valleys no living ruler had ever taxed. The frontier promised everything precisely because it belonged to no one.",
      "The North asked a terrible price for its secrets, and most who paid it were never heard from again. But to the restless, the disinherited, and the dangerously brave, the frozen edge of Norien was never a wall. It was an invitation — and the world has never lacked for those willing to answer it.",
    ],
  },
  {
    id: "great-trade-era",
    num: "VIII",
    index: "08",
    short: "Great Trade Era",
    age: "The Great Trade Era",
    title: "Lords of the Routes",
    image: "/story/ch08-great-trade-era.jpg",
    alt: "A thriving coastal port town built into cliffs above a busy harbour.",
    meta: { era: "Age of Trade", region: "Merchant Coast & Great Sea", status: "Historical", importance: "Major" },
    quote: { text: "Hold the harbour, and you hold the realm.", source: "Articles of the Tide" },
    paragraphs: [
      "As the kingdoms steadied, the sea rose again to prominence — and this time it remade the balance of the entire world. Fleets grew vast, harbours grew deep, and the cliff-side ports swelled with the commerce of a dozen realms. This was the Great Trade Era, when the map of power was drawn in shipping lanes.",
      "A kingdom's strength was no longer measured only in soldiers or soil, but in the routes it could command and the ports it could hold. A single deep harbour at the right strait could enrich a realm far beyond its size — and threaten neighbours far larger. Ports became the most fiercely contested assets in all of Norien.",
      "Treaties were signed over cargo manifests and broken over tariffs. Alliances formed around the control of a channel; wars were fought for the right to anchor in a bay. The lords who understood the routes did not merely grow rich — they grew indispensable, and the whole of the world turned upon their tides.",
    ],
  },
  {
    id: "expansion",
    num: "IX",
    index: "09",
    short: "Age of Expansion",
    age: "The Age of Expansion",
    title: "Beyond the Border Stones",
    image: "/story/ch09-expansion.jpg",
    alt: "Sunlit wilderness of cliffs, forests, and open meadow at the frontier's edge.",
    meta: { era: "Age of Expansion", region: "The Frontiers", status: "Ongoing", importance: "Major" },
    quote: { text: "Every border stone was once the edge of the known.", source: "Journals of the Pathfinders" },
    paragraphs: [
      "Wealth breeds appetite, and the trading kingdoms had grown hungry for more than coin. They wanted land — new valleys to settle, new rivers to claim, new ground on which to plant a border stone and call it home. So began the Age of Expansion, when the realms of Norien pressed outward in every direction at once.",
      "Explorers went first, charting the wild country beyond the settled marches and returning with maps that turned rumour into territory. Behind them came the settlers, raising frontier towns where there had been only forest; and behind them came the rulers, eager to fold the new ground into their domains.",
      "Every border that moved created opportunity — and friction. Two kingdoms expanding toward the same fertile basin would soon learn whether they were neighbours or rivals. The world was no longer being divided among the old powers; it was being made larger, and there was room in it for any ruler bold enough to reach.",
    ],
  },
  {
    id: "legends",
    num: "X",
    index: "10",
    short: "Legends",
    age: "Legends of Norien",
    title: "The Names That Endure",
    image: "/story/ch10-legends.jpg",
    alt: "A mist-shrouded ancient path lit by a distant, otherworldly glow.",
    meta: { era: "All Ages", region: "Across Norien", status: "Legend", importance: "Cultural" },
    quote: { text: "A life lived boldly enough becomes a story no age can bury.", source: "The Book of Names" },
    paragraphs: [
      "Across all these ages, certain names refused to fade. They passed from ledger to ballad to legend, until it grew hard to tell where the history ended and the myth began. These are the figures Norien still remembers — not for how they lived, but for what they left behind.",
      "There was Vaelric the Unbought, the merchant-prince said to have owned every route on the southern sea and to have bowed to no crown. There was Queen Aldessa of the High Marches, who held a frozen frontier with a single garrison through nine long winters. There was the explorer Toren Halvane, who sailed past the last charted shore and was never seen again — though his maps, they say, are still in use.",
      "Warriors, rulers, merchants, and wanderers — their relics surface still, in a rusted seal, a half-burnt charter, a sword bearing a name no living tongue can place. Norien keeps its legends close, for they are the proof of a single promise: that one life, lived boldly enough, can outlast the age that made it.",
    ],
  },
  {
    id: "present-age",
    num: "XI",
    index: "11",
    short: "Present Age",
    age: "The Present Age",
    title: "The Unwritten Chapter",
    image: "/story/ch11-present-age.jpg",
    alt: "A vast living realm of spires, domes, and rooftops stretching to the horizon.",
    meta: { era: "The Present Age", region: "All of Norien", status: "Living", importance: "Unwritten" },
    quote: { text: "The next page is blank. Take up the pen.", source: "Inscription at the Gate of Now" },
    paragraphs: [
      "And so we arrive at now — the Present Age, the living world as it stands. The kingdoms endure, the trade rivers run thick with commerce, the ports bustle, and the old castles still keep their watch over borders won and lost a hundred times over. Every age before this one has led here.",
      "This is where you enter the world — not as a reader of its history, but as one of the hands that will write the next of it. The realms you raise, the routes you open, the borders you draw: these become the record that some future chronicle remembers, or forgets.",
      "Norien has had its first ages, its empires, its falls and its frontiers. What it does not yet have is an ending. The future is unwritten, and every decision — every settlement founded, every alliance kept, every crown claimed — becomes part of the history. The next legend has not been named. It is waiting to be.",
    ],
  },
];

const REGIONS = [
  {
    name: "The Central Realm",
    blurb:
      "The contested heartland of castles and competing crowns. More of Norien's history has been decided on these plains and ridges than anywhere else — and it is decided still.",
  },
  {
    name: "The Northern Frontier",
    blurb:
      "Snow-locked mountains and frozen coasts beyond the last reliable map. Home to remote strongholds, the hardy clans, and the settlements the south has long since forgotten.",
  },
  {
    name: "The Great Sea",
    blurb:
      "The vast water that binds every shore. The oldest road in Norien and the beating heart of its trade — and, the sailors swear, the keeper of its strangest myths.",
  },
  {
    name: "The Merchant Coast",
    blurb:
      "A ribbon of deep harbours and crowded port cities. The wealthiest coastline in the world, and for that reason the most fiercely and endlessly contested.",
  },
  {
    name: "The Old Imperial Lands",
    blurb:
      "The sun-worn south where the Old Empire rose and shattered. A country of monuments and ruins, where the past lies heaviest and memory runs longest.",
  },
];

const FACTIONS = [
  {
    name: "The Kingdoms",
    blurb:
      "Regional crowns descended from the Age of Kingdoms, ruling by castle, vassalage, and ever-shifting alliance. Proud, divided, and the closest thing Norien has to order.",
  },
  {
    name: "The Merchant Houses",
    blurb:
      "Trade dynasties that command routes, fleets, and credit across the Merchant Coast. They measure power in ledgers, not soldiers — and own debts in every court that matters.",
  },
  {
    name: "The Explorers' Guild",
    blurb:
      "Chartmakers and pathfinders who sell the one thing every ruler covets: knowledge of what lies beyond the border stones. Their maps have made and unmade kingdoms.",
  },
  {
    name: "The Imperial Remnants",
    blurb:
      "Heirs, orders, and pretenders who still claim the authority of the Old Empire. Scattered and rivalrous, they share one dream — to bind the shattered world beneath a single crown once more.",
  },
  {
    name: "The Northern Clans",
    blurb:
      "Hardened kin-bands of the frozen frontier, bound by oath and survival and beholden to no southern throne. Underestimated by every power that has tried to claim their lands.",
  },
];

const MYTHS = [
  {
    name: "Ancient Stories",
    blurb:
      "Tales of the First Age, when — the elders insist — the land itself chose the people who would tend it, and the rivers ran where they were asked.",
  },
  {
    name: "The Lost Kings",
    blurb:
      "Rulers who vanished with their crowns and were never confirmed dead. Some are mourned as fallen; others, it is whispered, are merely waiting for the right age to return.",
  },
  {
    name: "Forgotten Cities",
    blurb:
      "Settlements swallowed by forest, ice, or sea, whose bells are still said to ring on certain nights — and whose treasuries have never been found.",
  },
  {
    name: "Sea Myths",
    blurb:
      "Of the things that sail the uncharted Great Sea, the islands that drift, and the harbour that appears only by starlight to those already lost.",
  },
  {
    name: "Old Prophecies",
    blurb:
      "Warnings and promises copied from chronicle to chronicle across a thousand years, each awaiting the age bold or foolish enough to fulfil it.",
  },
];

type Trend = "rise" | "fall" | "peak" | "steady" | "living";
const TIMELINE: { index: string; age: string; event: string; trend: Trend }[] = [
  { index: "I", age: "The First Age", event: "The first settlements take root along the rivers.", trend: "rise" },
  { index: "II", age: "The Great Sea", event: "The first ports open the searoads of the world.", trend: "rise" },
  { index: "III", age: "Merchant Kingdoms", event: "Commerce forges the first true crowns.", trend: "rise" },
  { index: "IV", age: "The Old Empire", event: "A single crown unites the known world.", trend: "peak" },
  { index: "V", age: "Fall of the Empire", event: "The Empire shatters; the world fragments.", trend: "fall" },
  { index: "VI", age: "Age of Kingdoms", event: "A hundred castles rise from the ruins.", trend: "rise" },
  { index: "VII", age: "Northern Frontier", event: "The frozen north draws the desperate and the bold.", trend: "steady" },
  { index: "VIII", age: "Great Trade Era", event: "Ports become the most prized assets of nations.", trend: "rise" },
  { index: "IX", age: "Age of Expansion", event: "Borders push outward into the unknown.", trend: "rise" },
  { index: "X", age: "Legends of Norien", event: "The age of great names, relics, and myth.", trend: "steady" },
  { index: "XI", age: "The Present Age", event: "The living world — and the chapter you will write.", trend: "living" },
];

const TREND_LABEL: Record<Trend, string> = {
  rise: "Rise",
  fall: "Fall",
  peak: "Zenith",
  steady: "Steady",
  living: "Now",
};
const TREND_GLYPH: Record<Trend, string> = {
  rise: "▲",
  fall: "▼",
  peak: "★",
  steady: "◆",
  living: "✦",
};

export default function Chronicle() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  // ESC to close + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("story--locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("story--locked");
    };
  }, [lightbox, close]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="chron">
      {/* HERO */}
      <header className="chron__hero">
        <Image
          className="chron__hero-img"
          src="/story/hero.jpg"
          alt="The world of Norien at golden dawn."
          fill
          priority
          sizes="100vw"
        />
        <div className="chron__hero-overlay" />
        <div className="chron__hero-inner">
          <p className="chron__hero-kicker">The Chronicles of Norien</p>
          <h1 className="chron__hero-title">
            THE CHRONICLES
            <br />
            OF NORIEN
          </h1>
          <p className="chron__hero-sub">
            Every kingdom begins as a story.
            <br />
            Every story becomes a legacy.
          </p>
          <button
            type="button"
            className="chron__hero-scroll"
            onClick={() => scrollToId("first-age")}
          >
            Scroll to begin
          </button>
        </div>
      </header>

      {/* CHAPTERS */}
      {CHAPTERS.map((c, i) => {
        const prev = CHAPTERS[i - 1];
        const next = CHAPTERS[i + 1];
        return (
          <section key={c.id} id={c.id} className="chron__chapter">
            <button
              type="button"
              className="chron__art"
              onClick={() => setLightbox({ src: c.image, alt: c.alt })}
              aria-label={`View artwork for ${c.age} in full screen`}
            >
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(max-width: 900px) 100vw, 860px"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <span className="chron__plate">
                <span className="chron__plate-num">{c.num}</span>
              </span>
              <span className="chron__expand" aria-hidden="true">
                ⤢ Expand
              </span>
            </button>

            <p className="chron__eyebrow">
              Chapter {c.index} — {c.age}
            </p>
            <h2 className="chron__h2">{c.title}</h2>

            <dl className="chron__meta">
              <div>
                <dt>Era</dt>
                <dd>{c.meta.era}</dd>
              </div>
              <div>
                <dt>Region</dt>
                <dd>{c.meta.region}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{c.meta.status}</dd>
              </div>
              <div>
                <dt>Importance</dt>
                <dd>{c.meta.importance}</dd>
              </div>
            </dl>

            <figure className="chron__quote">
              <blockquote>“{c.quote.text}”</blockquote>
              <figcaption>— {c.quote.source}</figcaption>
            </figure>

            <div className="chron__text">
              {c.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>

            <nav className="chron__chapnav" aria-label="Chapter navigation">
              {prev ? (
                <button type="button" className="chron__chapnav-btn" onClick={() => scrollToId(prev.id)}>
                  <span className="chron__chapnav-dir">← Previous</span>
                  <span className="chron__chapnav-name">{prev.short}</span>
                </button>
              ) : (
                <span className="chron__chapnav-btn is-empty" aria-hidden="true" />
              )}
              {next ? (
                <button
                  type="button"
                  className="chron__chapnav-btn chron__chapnav-btn--next"
                  onClick={() => scrollToId(next.id)}
                >
                  <span className="chron__chapnav-dir">Next →</span>
                  <span className="chron__chapnav-name">{next.short}</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="chron__chapnav-btn chron__chapnav-btn--next"
                  onClick={() => scrollToId("world")}
                >
                  <span className="chron__chapnav-dir">Continue →</span>
                  <span className="chron__chapnav-name">The Archive</span>
                </button>
              )}
            </nav>

            <div className="chron__divider" aria-hidden="true">
              <span />
            </div>
          </section>
        );
      })}

      {/* WORLD OF NORIEN — illustrated map */}
      <section id="world" className="chron__chapter chron__archive">
        <p className="chron__eyebrow">The Archive — Geography</p>
        <h2 className="chron__h2">World of Norien</h2>
        <p className="chron__lead">
          One continuous realm, bound by a single sea. From the frozen north to the sun-worn
          imperial south, every region carries its own history — and its own ambitions.
        </p>

        <WorldMap />

        <div className="region-grid">
          {REGIONS.map((r) => (
            <article key={r.name} className="region-card">
              <h3>{r.name}</h3>
              <p>{r.blurb}</p>
            </article>
          ))}
        </div>

        <div className="chron__divider" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* FACTIONS */}
      <section id="factions" className="chron__chapter chron__archive">
        <p className="chron__eyebrow">The Archive — Powers</p>
        <h2 className="chron__h2">Factions</h2>
        <p className="chron__lead">
          No single crown rules Norien. Power is shared, contested, and traded among the
          great factions — and every ruler must reckon with all of them.
        </p>

        <div className="faction-grid">
          {FACTIONS.map((f, i) => (
            <article key={f.name} className="faction-card">
              <span className="faction-card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{f.name}</h3>
              <p>{f.blurb}</p>
            </article>
          ))}
        </div>

        <div className="chron__divider" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* LEGENDS & MYTHS */}
      <section id="legends-myths" className="chron__chapter chron__archive">
        <p className="chron__eyebrow">The Archive — Lore</p>
        <h2 className="chron__h2">Legends &amp; Myths</h2>
        <p className="chron__lead">
          Not all of Norien's history can be proven. Some of it is sung, whispered, or warned
          against — the stories the world tells about itself.
        </p>

        <div className="myth-grid">
          {MYTHS.map((m) => (
            <article key={m.name} className="myth-card">
              <h3>{m.name}</h3>
              <p>{m.blurb}</p>
            </article>
          ))}
        </div>

        <div className="chron__divider" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="chron__chapter chron__archive">
        <p className="chron__eyebrow">The Archive — Timeline</p>
        <h2 className="chron__h2">Eleven Ages of Norien</h2>
        <p className="chron__lead">
          The long arc of a living kingdom, age by age — from the first untouched lands to the
          world that waits for you now.
        </p>

        <ol className="timeline2">
          {TIMELINE.map((t) => (
            <li key={t.index} className={`t2-item t2-${t.trend}`}>
              <span className="t2-node">{t.index}</span>
              <div className="t2-body">
                <div className="t2-head">
                  <h3 className="t2-age">{t.age}</h3>
                  <span className={`t2-trend t2-trend--${t.trend}`}>
                    {TREND_GLYPH[t.trend]} {TREND_LABEL[t.trend]}
                  </span>
                </div>
                <p className="t2-event">{t.event}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="chron__divider" aria-hidden="true">
          <span />
        </div>

        <p className="chron__closing">
          The future is unwritten. The next chapter is yours to write.
        </p>
        <div className="chron__cta-wrap">
          <a className="chron__cta" href="https://play.norien.live">
            Enter the World
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="chron__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Artwork viewer"
          onClick={close}
        >
          <button type="button" className="chron__lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          <figure className="chron__lightbox-fig" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              sizes="92vw"
              className="chron__lightbox-img"
            />
            <figcaption>{lightbox.alt}</figcaption>
          </figure>
        </div>
      )}
    </article>
  );
}

/* Inline, lightweight illustrated map — stylized parchment of Norien's regions.
   Kept as SVG so it scales crisply, weighs almost nothing, and stays on-brand. */
function WorldMap() {
  return (
    <figure className="worldmap">
      <svg
        viewBox="0 0 800 520"
        role="img"
        aria-label="An illustrated map of the world of Norien and its five great regions."
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1422" />
            <stop offset="100%" stopColor="#050b14" />
          </linearGradient>
          <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16202c" />
            <stop offset="100%" stopColor="#0e1822" />
          </linearGradient>
          <radialGradient id="northGlow" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#f0d79a" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#f0d79a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* sea */}
        <rect x="0" y="0" width="800" height="520" fill="url(#seaGrad)" />
        {/* sea texture */}
        <g stroke="rgba(217,177,95,0.10)" strokeWidth="1.2" fill="none">
          <path d="M40 110 q18 -10 36 0 t36 0 t36 0" />
          <path d="M60 160 q18 -10 36 0 t36 0 t36 0" />
          <path d="M40 430 q18 -10 36 0 t36 0 t36 0 t36 0" />
          <path d="M520 470 q18 -10 36 0 t36 0 t36 0" />
        </g>

        {/* landmass */}
        <path
          d="M300 60 C 360 38 470 64 524 116 C 604 150 706 182 722 262 C 740 338 700 408 618 446
             C 540 484 432 474 384 432 C 326 462 256 442 256 382 C 232 332 262 300 252 260
             C 242 210 252 150 300 60 Z"
          fill="url(#landGrad)"
          stroke="rgba(217,177,95,0.55)"
          strokeWidth="2"
        />
        <rect x="0" y="0" width="800" height="520" fill="url(#northGlow)" />

        {/* mountains — north */}
        <g fill="none" stroke="rgba(245,239,225,0.55)" strokeWidth="2">
          <path d="M372 150 l16 -26 l16 26 M398 156 l18 -30 l18 30" />
        </g>
        {/* ruins glyph — south (old imperial lands) */}
        <g stroke="rgba(217,177,95,0.6)" strokeWidth="2" fill="none">
          <path d="M584 392 v-22 M598 392 v-22 M612 392 v-16 M578 370 h40" />
        </g>
        {/* castle glyph — central realm */}
        <g stroke="rgba(245,239,225,0.55)" strokeWidth="2" fill="none">
          <path d="M452 286 v-20 h6 v8 h6 v-8 h6 v8 h6 v-8 h6 v20 z" />
        </g>

        {/* trade routes — dotted lines from the coast across the sea */}
        <g stroke="rgba(217,177,95,0.4)" strokeWidth="1.6" strokeDasharray="3 7" fill="none">
          <path d="M256 360 C 190 360 150 320 120 300" />
          <path d="M270 300 C 200 280 160 250 130 210" />
        </g>

        {/* region markers */}
        {[
          { x: 404, y: 150, label: "Northern Frontier", anchor: "middle", dy: -16 },
          { x: 468, y: 286, label: "Central Realm", anchor: "start", dy: 26 },
          { x: 600, y: 388, label: "Old Imperial Lands", anchor: "middle", dy: 26 },
          { x: 256, y: 360, label: "Merchant Coast", anchor: "end", dy: 26 },
          { x: 120, y: 250, label: "The Great Sea", anchor: "middle", dy: 28 },
        ].map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy={m.y} r="4.5" fill="#f0d79a" stroke="#a87d33" strokeWidth="1" />
            <text
              x={m.x}
              y={m.y + (m.dy as number)}
              textAnchor={m.anchor as "start" | "middle" | "end"}
              className="worldmap__label"
            >
              {m.label}
            </text>
          </g>
        ))}

        {/* compass rose */}
        <g transform="translate(700,90)" stroke="rgba(217,177,95,0.7)" fill="rgba(217,177,95,0.7)">
          <circle r="22" fill="none" strokeWidth="1.5" />
          <path d="M0 -26 L5 0 L0 26 L-5 0 Z" fill="rgba(240,215,154,0.85)" stroke="none" />
          <path d="M-26 0 L0 5 L26 0 L0 -5 Z" fill="rgba(217,177,95,0.45)" stroke="none" />
          <text x="0" y="-30" textAnchor="middle" className="worldmap__compass">N</text>
        </g>
      </svg>
    </figure>
  );
}
