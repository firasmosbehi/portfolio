import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Education | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Education',
    subtitle: 'Firas Mosbehi',
    description: 'Engineering background in Software Engineering and DevOps practices.',
  });
}
