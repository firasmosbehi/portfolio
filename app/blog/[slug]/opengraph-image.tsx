import { generateOgImage } from '../../components/OgImage';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function Image({ params }: OgImageProps) {
  const { slug } = await params;

  return generateOgImage({
    title: slugToTitle(slug),
    subtitle: 'Blog',
    description: 'Technical article by Firas Mosbehi',
  });
}
