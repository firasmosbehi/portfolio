import { Metadata } from 'next';
import { baseOpenGraph, pageAlternates } from '../../lib/seo';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Firas Mosbehi for DevSecOps opportunities, cloud infrastructure projects, or consulting. Located in Saint Etienne, France. Available for remote work and collaborations.',
  alternates: pageAlternates('/contact'),
  openGraph: {
    ...baseOpenGraph,
    url: '/contact',
    title: 'Contact Firas Mosbehi - DevSecOps Engineer',
    description: 'Connect for DevSecOps opportunities, cloud infrastructure projects, or consulting services.',
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Contact />
    </PageTransition>
  );
}
