import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Now | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: "What I'm Doing Now",
    subtitle: 'Firas Mosbehi',
    description: 'Current focus, projects, learning, and goals.',
  });
}
