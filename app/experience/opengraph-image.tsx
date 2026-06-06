import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Experience | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Experience',
    subtitle: 'Firas Mosbehi',
    description: 'Professional journey in DevOps, DevSecOps, and cloud infrastructure.',
  });
}
