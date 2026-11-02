import type { Metadata } from 'next';
import { baseOpenGraph, pageAlternates } from '../../lib/seo';
import PageTransition from '../components/PageTransition';
import Certifications from '../components/Certifications';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Professional certifications and credentials earned by Firas Mosbehi in DevOps, cloud, and security.',
  alternates: pageAlternates('/certifications'),
  openGraph: {
    ...baseOpenGraph,
    url: '/certifications',
    title: 'Certifications | Firas Mosbehi',
    description: 'Professional certifications and credentials earned by Firas Mosbehi in DevOps, cloud, and security.',
  },
};

export default function CertificationsPage() {
  return (
    <PageTransition>
      <Certifications />
    </PageTransition>
  );
}
