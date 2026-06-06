import type { Metadata } from 'next';
import PageTransition from '../components/PageTransition';
import Certifications from '../components/Certifications';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Professional certifications and credentials earned by Firas Mosbehi in DevOps, cloud, and security.',
  openGraph: {
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
