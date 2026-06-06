import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Skills | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Technical Skills',
    subtitle: 'Firas Mosbehi',
    description: 'Kubernetes · AWS · Terraform · CI/CD · Security · Observability',
  });
}
