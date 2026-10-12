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
  // A primary section has no page of its own: its URL goes to the first child.
  redirects: Object.fromEntries(
    Object.entries({
      '/casa': '/casa/house/',
      '/barragan': '/barragan/biography/',
      '/meyer': '/meyer/friendship/',
      '/visit': '/visit/visits/',
    }).map(([from, to]) => [from, `${base.replace(/\/$/, '')}${to}`]),
  ),
});
