import { generateOgImage } from './components/OgImage';

export const runtime = 'edge';
export const alt = 'Firas Mosbehi - DevSecOps Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return generateOgImage({
    title: 'Firas Mosbehi',
    subtitle: 'DevSecOps Engineer',
    description: 'Kubernetes · AWS · Terraform · CI/CD · Cloud Infrastructure',
  });
}
