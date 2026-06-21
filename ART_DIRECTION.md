# Norien — Art Direction (Canon)

**The `play.norien.live` scene is the single source of truth for Norien's visual
identity.** It is *not* temporary "coming soon" artwork — it is the official world
concept of Norien. Every future visual asset (game world, login, main menu,
loading, character select, maps, cities, dungeons, UI backgrounds, trailers,
promo videos, marketing) must look like it belongs to the exact same universe.

A player should feel the landing page is a screenshot taken from inside the game.

Canonical implementation lives in:
- `components/play/PlayScene.tsx` — the layered open-world scene
- `app/globals.css` — the `.coming` / `.cscene` rules and the `:root` brand tokens

## The look

- Dark navy fantasy world; deep midnight tones (peaceful, not grim).
- Floating islands / elevated landmasses with ruin spires.
- Low-poly, stylized terrain — clean silhouettes, not realistic detail.
- Golden compass symbolism (the Norien logo/sigil) as a recurring motif.
- Soft atmospheric fog and a glowing horizon.
- Layered deep-blue mountains for depth and scale.
- Warm golden highlights / energy pathways against the cool navy.
- Calm, awe-driven exploration atmosphere — fantasy adventure, vast and inviting.

## Palette (use these tokens; do not introduce new base colors)

| Token | Hex | Use |
|-------|-----|-----|
| `--ink-950` | `#04090f` | deepest background / night sky top |
| `--ink-900` | `#070d15` | base background |
| `--ink-850` | `#0a121d` | raised surfaces |
| `--ink-800` | `#0e1726` | panels |
| `--ivory` | `#f5efe1` | primary text |
| `--parchment` | `#e8dcc0` | secondary / lore text |
| `--gold` | `#d9b15f` | primary accent |
| `--gold-lt` | `#f0d79a` | highlights / rim light / glow |
| `--gold-dk` | `#a87d33` | shadowed gold |
| `--green` | `#4fd187` | "live"/status accent only |

Deep-blue terrain tones used in the scene: `#142336` (far), `#0b1626` (mid),
`#05090f` (foreground), island top `#263b43` with a `--gold-lt` rim.

## Typography

- **Cinzel** — display / titles / labels (the engraved, heraldic voice).
- **Cormorant Garamond** — italic lore / subtitles / flavor text.
- **Inter** — functional UI / body / dense reading.

## Rules

- **Do not redesign or replace the `play.norien.live` landing page.** It is the
  fixed reference, not a draft.
- **Harmonization is one-directional:** bring other pages and game environments
  *closer to the landing page* — never adjust the landing page to match them.
- **Expand** this world; never replace it. New assets extend the same scene.
- Reuse the modular scene layers (sky, mountains, ruins, islands, fog, pathway,
  particles) as the starting point for new environment art.
- Keep the golden compass/sigil and the navy-with-gold contrast in every surface.

## Do NOT

- Different art styles or color palettes.
- Futuristic / cyberpunk / sci-fi architecture or UI.
- Photorealistic graphics.
- Neon, high-saturation, or "AI-fantasy" looks.
- Unrelated fantasy concepts that break the calm, low-poly, navy/gold identity.
