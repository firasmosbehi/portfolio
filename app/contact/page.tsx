import { Metadata } from 'next';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Firas Mosbehi for DevSecOps opportunities, cloud infrastructure projects, or consulting. Located in Saint Etienne, France. Available for remote work and collaborations.',
  openGraph: {
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
