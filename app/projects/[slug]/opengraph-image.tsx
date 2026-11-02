import { generateOgImage } from '../../components/OgImage';
import { getCaseStudy } from '../../../lib/case-studies';

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return generateOgImage({
    title: study?.title ?? 'Case Study',
    subtitle: 'Case Study',
    description: study?.tagline ?? 'Project case study by Firas Mosbehi',
  });
}
