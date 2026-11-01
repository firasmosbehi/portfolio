import type { Metadata } from 'next';
import { baseOpenGraph } from '../../lib/seo';
import PageTransition from '../components/PageTransition';
import Now from '../components/Now';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Firas Mosbehi is currently working on, learning, and building.',
  alternates: { canonical: '/now' },
  openGraph: {
    ...baseOpenGraph,
    url: '/now',
    title: 'Now | Firas Mosbehi',
    description: 'What Firas Mosbehi is currently working on, learning, and building.',
  },
};

export default function NowPage() {
  return (
    <PageTransition>
      <Now />
    </PageTransition>
  );
}
