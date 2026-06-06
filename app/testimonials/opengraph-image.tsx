import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Testimonials | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Testimonials',
    subtitle: 'Firas Mosbehi',
    description: 'Recommendations from colleagues and collaborators.',
  });
}
