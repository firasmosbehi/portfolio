import type { Metadata } from 'next';
import PageTransition from '../components/PageTransition';
import Testimonials from '../components/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Recommendations and feedback from colleagues and managers who have worked with Firas Mosbehi.',
  openGraph: {
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
