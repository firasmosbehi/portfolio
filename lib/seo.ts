// Canonical origin for metadata, sitemap, robots, feed and JSON-LD.
// NEXT_PUBLIC_SITE_URL wins; otherwise Vercel's production domain (it switches to a custom
// domain automatically once one is attached); otherwise the current vercel.app address.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://portfolio-firas-projects.vercel.app')
).replace(/\/$/, '');

export const SITE_HOST = new URL(SITE_URL).host;

// Child routes replace (not merge) the root openGraph, so each page spreads this back in.
export const baseOpenGraph = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: 'Firas Mosbehi Portfolio',
};
