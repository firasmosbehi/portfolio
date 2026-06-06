import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Contact | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Get in Touch',
    subtitle: 'Firas Mosbehi',
    description: 'Open to opportunities, collaborations, and interesting DevSecOps challenges.',
  });
}
