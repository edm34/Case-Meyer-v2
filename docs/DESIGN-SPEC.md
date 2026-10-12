# Website Design Template: split-wordmark editorial layout

Build specification supplied by the owner on 12 October 2026, documenting the structure and styling of the reference site (barragan-foundation.org, designed and developed by Knoth & Renner) so that this site can mirror its design with its own branding and content.

Ground rules: mirror the design system, not the content. No copy, photograph, wordmark, font file or map credential from the reference is used here. Values are in `rem` and `vh` on purpose: on desktop `1rem = 1vw`.

## Decisions taken for Casa Meyer

| Decision | Choice |
| --- | --- |
| Typefaces | Free substitutes: Jost 500 (single-storey "a" via `ss01`) for the sans, Source Serif 4 for the serif. Swap for Neuzeit Grotesk and Eliza if licensed. |
| Grey text | `#767676` for text (WCAG AA), `#969696` kept for borders. |
| Phone type | 12 px floor on captions and index rows. |
| Opening scroll offset | Kept (sub-pages open scrolled 20vw on desktop). |
| Left-word prefix | "La" in front of "Casa" on hover. No accent flourish. |
| Colour | The reference interface has no colour. Here the house colours are used where the reference uses tints: bullets and active states in the lattice pink, the home feature band in the gate yellow, gallery and cover bands in warm white, linked-row hover in pink paper. Type stays black on white. |
| Maps | Leaflet with the CARTO Positron grey basemap (no token needed). |
| Loading screen | Addition not in the reference: the pink celosía draws itself, the green square lights, a yellow panel slides across like the gate. Once per session. |

## Key numbers from the spec

- Root: `clamp(10px, 1vw, 24px)` desktop, `min(3vw, 16px)` below 768 px.
- Grid: centred wrapping flex row, blocks as fractions of 12 columns (2, 3, 5, 6, 7, 8), no gutter. Phone: everything 100%.
- Type: corner words 5rem → 2.5rem on scroll (first 7vw), sub-nav 5rem → 2.5rem (12vw → 19vw, sticky at 17vw), intro serif 2rem/1.15, body serif 1.3rem/1.6rem, rows and meta sans 1rem, captions 0.8rem.
- Body `padding-top: 12rem`, sub-nav `margin-top: 6rem`, content starts 8rem below the sub-nav, legal pages 22rem from top.
- Motion: hovers 0.3s, reveals 0.8s rise of 8rem, accordion 0.5s, header scrub eased `1-(1-p)^2`.
- Home: fixed photographs cross-fade on `p = (H - y) / (0.8H)`: 0→0.25 fade in, 0.25→0.75 hold, 0.75→1 fade out. Sections padded 25vh top / 50vh bottom, first section offset 40vh + 40vh. Feature carousel band 110vh.
- Footer: 1px rule, four columns in a 6-col block, legal line 7-col centred 0.8rem.
- Header bar: fixed, `top:-2rem`, `height: 6rem` (9rem on detail pages), `box-shadow: 0 2rem 1rem #fff`, hidden on desktop home.

The full specification as supplied is kept in the project conversation; this file records the parts the build depends on.
