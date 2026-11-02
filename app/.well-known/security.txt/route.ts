import { SITE_URL } from '../../../lib/seo';

// RFC 9116. Prerendered at build, so Expires rolls forward a year on every deploy.
export const dynamic = 'force-static';

export function GET() {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const body = [
    'Contact: mailto:firas.mosbehi@insat.ucar.tn',
    `Expires: ${expires.toISOString()}`,
    'Preferred-Languages: en, fr',
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
