import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Projects | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Featured Projects',
    subtitle: 'Firas Mosbehi',
    description: 'Open-source tools, cloud infrastructure, and full-stack applications.',
  });
}
