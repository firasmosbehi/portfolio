import { generateOgImage } from '../components/OgImage';

export const runtime = 'edge';
export const alt = 'Certifications | Firas Mosbehi';

export default function Image() {
  return generateOgImage({
    title: 'Certifications',
    subtitle: 'Firas Mosbehi',
    description: 'Professional credentials in Kubernetes, Terraform, AWS, and Docker.',
  });
}
