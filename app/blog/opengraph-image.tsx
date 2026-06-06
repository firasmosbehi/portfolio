import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Blog | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Technical Blog',
    subtitle: 'Firas Mosbehi',
    description: 'Deep dives into DevSecOps, Kubernetes, and cloud-native development.',
  });
}
