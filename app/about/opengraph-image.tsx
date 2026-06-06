import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'About Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'About Me',
    subtitle: 'Firas Mosbehi',
    description: 'DevSecOps Engineer with 3+ years building secure, automated cloud infrastructure.',
  });
}
