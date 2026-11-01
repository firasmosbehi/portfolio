// Child routes replace (not merge) the root openGraph, so each page spreads this back in.
export const baseOpenGraph = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: 'Firas Mosbehi Portfolio',
};
