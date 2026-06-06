import type { Metadata } from 'next';
import PageTransition from '../components/PageTransition';
import Now from '../components/Now';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Firas Mosbehi is currently working on, learning, and building.',
  openGraph: {
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
