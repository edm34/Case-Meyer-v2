// @ts-check
import { defineConfig } from 'astro/config';

// When deployed to GitHub Pages as a project site the pages live under
// https://<user>.github.io/<repo>/ — the workflow passes the repo name in
// BASE_PATH. Locally the site is served from "/".
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://edm34.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
