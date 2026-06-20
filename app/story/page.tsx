import Image from "next/image";

/**
 * THE CHRONICLES OF NORIEN — story.norien.live
 *
 * A cinematic, long-form lore archive (NOT docs, NOT gameplay). Each chapter is
 * an "age": full-bleed artwork, a numeral plate, a title, narrative prose, and a
 * decorative divider. Every image is distinct. Names are fictional throughout.
 */

type Chapter = {
  id: string;
  num: string; // roman numeral plate
  index: string; // "01"
  age: string; // small label above title
  title: string;
  image: string;
  alt: string;
  paragraphs: string[];
};

const CHAPTERS: Chapter[] = [
  {
    id: "first-age",
    num: "I",
    index: "01",
    age: "The First Age",
    title: "Before the Crowns",
    image: "/story/ch01-first-age.jpg",
    alt: "An ancient, untouched world of mist-wrapped mountains, rivers, and deep forests.",
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
    age: "The Great Sea",
    title: "The Heart of the World",
    image: "/story/ch02-great-sea.jpg",
    alt: "A lone sailing ship on a vast, mirror-still sea beneath a sky of stars.",
    paragraphs: [
      "In time the rivers led the people to something far greater than any valley — the Great Sea, an horizon without end. At first it was a boundary, a wall of water that marked the edge of the known. Then someone built a hull strong enough to answer it, and the edge of the world became its center.",
      "The sea gave more than fish and salt. It gave distance made small. A village that had known only its nearest neighbours could now trade with shores it had never seen, carrying grain in one direction and timber in another, returning with stories worth more than cargo.",
      "Coastal settlements swelled into the first true ports, their harbours crowded with sails at every tide. The Great Sea did not divide Norien — it bound it together. From this water the whole of civilization would learn its oldest lesson: that those who master the routes between places will shape the places themselves.",
    ],
  },
  {
    id: "merchant-kingdoms",
    num: "III",
    index: "03",
    age: "The Merchant Kingdoms",
    title: "The Price of Power",
    image: "/story/ch03-merchant-kingdoms.jpg",
    alt: "A bustling medieval trade town at golden hour, its lanes lined with merchant houses.",
    paragraphs: [
      "Where goods gather, wealth follows, and where wealth gathers, power is never far behind. The great ports grew inland into cities, and the cities grew into kingdoms ruled not by warlords but by guilds, brokers, and the keepers of the ledgers. These were the Merchant Kingdoms, and their crowns were stitched from coin.",
      "Their streets were a single endless market — spice and silver, wool and wine, contracts sealed by handshake and broken by ruin. A family could rise from a stall to a dynasty within three generations, and fall faster still. Reputation became currency; a name worth trusting was worth more than any vault.",
      "It was in this age that Norien learned a truth its rulers would never forget: a trade route, once opened, is more valuable than any army. Steel could take a city for a season, but the kingdom that controlled the flow of goods controlled it for a hundred years.",
    ],
  },
  {
    id: "old-empire",
    num: "IV",
    index: "04",
    age: "The Old Empire",
    title: "One Crown to Bind Them",
    image: "/story/ch04-old-empire.jpg",
    alt: "A golden capital of monuments and temples crowning a sunlit hill.",
    paragraphs: [
      "From among the merchant cities rose one that would not be content to trade as an equal. Through alliance, ambition, and a patience that bordered on the eternal, it bound the scattered kingdoms beneath a single crown — and so was born the Old Empire, the greatest power Norien had ever known.",
      "Its golden capital was a wonder of the age: avenues of monuments, halls of polished stone, and banners that flew from every garrison between the northern peaks and the southern shore. Roads paved by imperial decree carried law, coin, and legion alike to the farthest province. For the first time, a traveller could cross the whole of the known world and never leave the reach of one ruler.",
      "Under that single crown, Norien knew an order it had never imagined — a century of roads kept safe, of harvests counted, of a peace enforced by the certainty of imperial reach. To those who lived within it, the Empire did not seem like a thing that could end. Nothing so vast ever does.",
    ],
  },
  {
    id: "fall",
    num: "V",
    index: "05",
    age: "The Fall of the Empire",
    title: "The Long Shattering",
    image: "/story/ch05-fall.jpg",
    alt: "The ruins of a great imperial city, its arches broken and silent at dusk.",
    paragraphs: [
      "No empire falls in a single day. The Old Empire died the way the great ones always do — slowly, from within, long before the walls came down. Governors grew into kings in all but name. The treasury, stretched across too many provinces, bled coin faster than the routes could replace it. Ambition, once aimed outward, turned upon the throne itself.",
      "When the breaking came, it came everywhere at once. Banners that had flown for a hundred years were torn down or burned. Cities that had never feared a siege learned the sound of one. The roads that had carried law now carried refugees, and the harbours that had welcomed fleets watched them sail away for good.",
      "By the end, the capital stood half-empty, its monuments cracked and its halls silent. The crown that had bound the world was gone, and no hand was strong enough to lift it again. Norien did not fall into darkness — it fell into pieces, and from those pieces a very different world would have to be built.",
    ],
  },
  {
    id: "age-of-kingdoms",
    num: "VI",
    index: "06",
    age: "The Age of Kingdoms",
    title: "A Hundred Thrones",
    image: "/story/ch06-age-of-kingdoms.jpg",
    alt: "A fortified medieval castle crowning a forested ridge beneath a brooding sky.",
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
    age: "The Northern Frontier",
    title: "Where the Maps End",
    image: "/story/ch07-northern-frontier.jpg",
    alt: "A remote stronghold in a frozen forest beneath snow-laden mountains.",
    paragraphs: [
      "Beyond the last of the settled kingdoms lay the North — a country of snow-locked mountains and frozen coastlines where the maps simply ended in white. Few who ventured there returned, and fewer still returned with anything but stories.",
      "Yet stories were enough to draw them on. Tales told of strongholds raised by exiles and lost generations ago, of forgotten settlements still burning their hearths somewhere past the ice, of riches buried in valleys no living ruler had ever taxed. The frontier promised everything precisely because it had been claimed by no one.",
      "The North asked a terrible price for its secrets, and most who paid it were never heard from again. But for the restless, the disinherited, and the dangerously brave, the frozen edge of Norien was not a wall. It was an invitation — and the world has never lacked for those willing to answer it.",
    ],
  },
  {
    id: "great-trade-era",
    num: "VIII",
    index: "08",
    age: "The Great Trade Era",
    title: "Lords of the Routes",
    image: "/story/ch08-great-trade-era.jpg",
    alt: "A thriving coastal port town built into cliffs above a busy harbour.",
    paragraphs: [
      "As the kingdoms steadied, the sea rose again to prominence — and this time it remade the balance of the entire world. Fleets grew vast, harbours grew deep, and the cliff-side ports swelled with the commerce of a dozen realms. This was the Great Trade Era, when the map of power was drawn in shipping lanes.",
      "A kingdom's strength was no longer measured only in soldiers or soil, but in the routes it could command and the ports it could hold. A single deep harbour at the right strait could enrich a realm beyond its size, and threaten neighbours far larger. Ports became the most fiercely contested assets in all of Norien.",
      "Treaties were signed over cargo manifests and broken over tariffs. Alliances formed around the control of a channel; wars were fought for the right to anchor in a bay. The lords who understood the routes did not merely grow rich — they grew indispensable, and the whole of the world turned upon their tides.",
    ],
  },
  {
    id: "expansion",
    num: "IX",
    index: "09",
    age: "The Age of Expansion",
    title: "Beyond the Border Stones",
    image: "/story/ch09-expansion.jpg",
    alt: "Sunlit wilderness of cliffs, forests, and open meadow at the frontier's edge.",
    paragraphs: [
      "Wealth breeds appetite, and the trading kingdoms had grown hungry for more than coin. They wanted land — new valleys to settle, new rivers to claim, new ground on which to plant a border stone and call it home. So began the Age of Expansion, when the realms of Norien pressed outward in every direction at once.",
      "Explorers went first, charting the wild country beyond the settled marches and returning with maps that turned rumour into territory. Behind them came the settlers, raising frontier towns where there had been only forest, and behind them came the rulers, eager to fold the new ground into their domains.",
      "Every border that moved created opportunity — and friction. Two kingdoms expanding toward the same fertile basin would soon discover whether they were neighbours or rivals. The world was no longer being divided among the old powers; it was being made larger, and there was room in it for any ruler bold enough to reach.",
    ],
  },
  {
    id: "legends",
    num: "X",
    index: "10",
    age: "Legends of Norien",
    title: "The Names That Endure",
    image: "/story/ch10-legends.jpg",
    alt: "A mist-shrouded ancient path lit by a distant, otherworldly glow.",
    paragraphs: [
      "Across all these ages, certain names refused to fade. They passed from ledger to ballad to legend, until it grew hard to tell where the history ended and the myth began. These are the figures Norien still remembers — not for how they lived, but for what they left behind.",
      "There was Vaelric the Unbought, the merchant-prince said to have owned every route on the southern sea and bowed to no crown. There was Queen Aldessa of the High Marches, who held a frozen frontier with a single garrison through nine long winters. There was the explorer Toren Halvane, who sailed past the last charted shore and was never seen again — though his maps, they say, are still in use.",
      "Warriors, rulers, merchants, and wanderers — their relics surface still, in a rusted seal, a half-burnt charter, a sword with a name no living tongue can place. Norien keeps its legends close, for they are the proof of a simple promise: that a single life, lived boldly enough, can outlast the age that made it.",
    ],
  },
  {
    id: "present-age",
    num: "XI",
    index: "11",
    age: "The Present Age",
    title: "The Unwritten Chapter",
    image: "/story/ch11-present-age.jpg",
    alt: "A vast living realm seen from above — a great trade river winding through a sprawling city.",
    paragraphs: [
      "And so we arrive at now — the Present Age, the living world as it stands. The kingdoms endure, the trade rivers run thick with commerce, the ports bustle, and the old castles still keep their watch over borders won and lost a hundred times over. Every age before this one has led here.",
      "This is where you enter the world. Not as a reader of its history, but as one of the hands that will write the next of it. The realms you raise, the routes you open, the borders you draw — these will become the record that some future chronicle remembers, or forgets.",
      "Norien has had its first ages, its empires, its falls and its frontiers. What it does not yet have is an ending. The future is unwritten, and every decision — every settlement founded, every alliance kept, every crown claimed — becomes part of the history. The next legend has not been named. It is waiting to be.",
    ],
  },
];

const TIMELINE = CHAPTERS.map((c) => ({ index: c.index, age: c.age, id: c.id }));

export default function StoryPage() {
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
          <span className="chron__hero-scroll" aria-hidden="true">
            Scroll to begin
          </span>
        </div>
      </header>

      {/* CHAPTERS */}
      {CHAPTERS.map((c, i) => (
        <section key={c.id} id={c.id} className="chron__chapter">
          <figure className="chron__art">
            <Image
              src={c.image}
              alt={c.alt}
              fill
              sizes="(max-width: 900px) 100vw, 860px"
              priority={i === 0}
            />
            <figcaption className="chron__plate">
              <span className="chron__plate-num">{c.num}</span>
            </figcaption>
          </figure>

          <p className="chron__eyebrow">
            Chapter {c.index} — {c.age}
          </p>
          <h2 className="chron__h2">{c.title}</h2>

          <div className="chron__text">
            {c.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>

          <div className="chron__divider" aria-hidden="true">
            <span />
          </div>
        </section>
      ))}

      {/* TIMELINE */}
      <section id="timeline" className="chron__chapter chron__timeline-section">
        <p className="chron__eyebrow">The Ages — A Timeline</p>
        <h2 className="chron__h2">Eleven Ages of Norien</h2>
        <p className="chron__text">
          From the first untouched lands to the world that waits for you now — the long
          arc of a living kingdom, age by age.
        </p>

        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <li key={t.id} className="timeline__item">
              <span className="timeline__node">{t.index}</span>
              <span className="timeline__label">{t.age}</span>
              {i < TIMELINE.length - 1 && (
                <span className="timeline__arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="chron__divider" aria-hidden="true">
          <span />
        </div>

        <p className="chron__closing">
          The future is unwritten. The next chapter is yours to write.
        </p>
        <a className="chron__cta" href="https://play.norien.live">
          Enter the World
        </a>
      </section>
    </article>
  );
}
