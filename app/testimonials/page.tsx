import type { Metadata } from 'next';
import { baseOpenGraph } from '../../lib/seo';
import PageTransition from '../components/PageTransition';
import Testimonials from '../components/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Recommendations and feedback from colleagues and managers who have worked with Firas Mosbehi.',
  // Hidden until there are named, real quotes: unlinked and noindex, but the URL still works
  robots: { index: false, follow: true },
  alternates: { canonical: '/testimonials' },
  openGraph: {
    ...baseOpenGraph,
    url: '/testimonials',
    title: 'Testimonials | Firas Mosbehi',
    description: 'Recommendations and feedback from colleagues and managers who have worked with Firas Mosbehi.',
  },
};

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <Testimonials />
    </PageTransition>
  );
}
