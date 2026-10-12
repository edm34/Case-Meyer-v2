# Casa Meyer

Website for Casa Meyer, the last house designed by Luis Barragán (Bosques de las Lomas, Mexico City, 1978). A private home, visited by appointment.

Built with [Astro](https://astro.build) as a static site. No database, no CMS: every page is populated from the files in `src/content`.

## Run it

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## How the site is populated

| Folder / file                 | What it drives                                   |
| ----------------------------- | ------------------------------------------------ |
| `src/content/slides.json`     | The full-screen image sequence on the home page  |
| `src/content/spaces/*.md`     | The Spaces index and each space's page           |
| `src/content/archive/*.md`    | The Archive index (grouped by type) and item pages |
| `src/content/chronology.json` | The chronology on the Luis Barragán page         |
| `src/content/tours.json`      | The visit types listed on the Visit page         |
| `src/lib/site.ts`             | Site name, navigation, booking email / endpoint  |
| `public/images/`              | Photographs and drawings                         |

Add a markdown file to `spaces/` or `archive/` and it appears in that index automatically. The schema for each collection is in `src/content.config.ts`.

## Design

- Colours come from the house: the yellow gate (`--yellow`), the pink lattice (`--pink`), lime-washed white, and the single green square (`--green`). Hard-edged blocks, no gradients.
- The loading screen (`src/components/Preloader.astro`) draws the pink celosía bar by bar, lights the green square, then slides a yellow panel across like the gate. It shows once per browser session.
- Type is a grotesk sans-serif, uppercase tracked labels, large regular-weight headings.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. In the repository settings, under Pages, set the source to "GitHub Actions". The site will be at `https://<owner>.github.io/<repo>/`.

To use a custom domain, add a `public/CNAME` file and set `BASE_PATH=/` and `SITE_URL` in the workflow.
