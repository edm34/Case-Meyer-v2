# Casa Meyer

Website for Casa Meyer, the last house designed by Luis Barragán (Bosques de las Lomas, Mexico City, 1978). A private home, visited by appointment.

Built with [Astro](https://astro.build) as a static site. No database, no CMS: every page is populated from the files in `src/content`. The layout follows the split-wordmark editorial specification in `docs/DESIGN-SPEC.md`.

## Run it

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Structure

Four primary sections, reached from the two corner words and the links that slide in beneath them. Each section has three or four child pages, listed in `src/lib/site.ts`.

| URL | Template | Populated from |
| --- | --- | --- |
| `/` | Home: cross-fading photographs, four sections, feature carousel | `src/content/home.json` |
| `/casa/house/`, `/casa/drawings/`, `/barragan/biography/`, `/meyer/*`, `/visit/*` | Article assembled from blocks | `src/content/pages/<section>/<child>.json` |
| `/casa/spaces/`, `/casa/spaces/<slug>/` | Index table and detail pages | `src/content/spaces/*.json` |
| `/barragan/works/`, `/barragan/works/<slug>/` | Index table and detail pages | `src/content/works/*.json` |
| `/barragan/chronology/` | Ruled list rows | `src/content/chronology.json` |
| `/barragan/map/` | Map of all works | `src/content/works/*.json` (lat, lng) |
| `/imprint/`, `/privacy/` | Legal pages | `src/content/pages/legal/*.json` |

### Blocks

Article pages are a list of blocks, in order. A `break` starts a new row; a left- or right-placed text block pairs with the side image next to it.

| Block | Fields |
| --- | --- |
| `intro`, `large`, `small` | `html` |
| `text` | `html`, `placement` (left, centre, right) |
| `image` | `image` {src, alt, caption, credit, width, height}, `placement` |
| `gallery` | `images[]`, `size` (large, small) |
| `subheading` | `text` |
| `row` | `title`, `html`, optional `image`, `side` |
| `faq` | `question`, `html` |
| `video` | `url` |
| `form` | `form: "booking"` |
| `downloads` | `groups[]` of `{title, files[] {label, href, thumb}}` |

Index items (works, spaces): `title`, `year`, `category`, `notes`, `location`, `address`, `lat`, `lng`, `thumb`, `order`, and an optional `detail` {`cover`, `intro`, `meta`, `blocks`}. Items with `detail` get a page and an arrow in the table.

## Design

- Fluid: `1rem = 1vw` on desktop (clamped 10–24 px), `3vw` on phones. Everything scales with the window.
- Two typefaces, one weight each: Jost 500 (sans) and Source Serif 4 (serif), loaded from Google Fonts. Swap in `src/styles/global.css` if licensed faces are available.
- Colour comes from the house: the lattice pink for bullets and active states, the gate yellow for the home feature band, warm white for cover and gallery bands. Tokens in `src/styles/global.css`.
- Loading screen (`src/components/Preloader.astro`): the pink celosía draws itself, the green square lights, a yellow panel slides across like the gate. Once per browser session.
- Maps use Leaflet with the CARTO Positron basemap; no token needed.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. In the repository settings, under Pages, set the source to "GitHub Actions". The site will be at `https://<owner>.github.io/<repo>/`.

For a custom domain add `public/CNAME` and set `BASE_PATH=/` and `SITE_URL` in the workflow.
