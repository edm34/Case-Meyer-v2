/** Prefix a site-root path with the configured base (needed on GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
