import { Metadata } from 'next';
import { baseOpenGraph } from '../../lib/seo';
import Experience from '../components/Experience';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Firas Mosbehi\'s professional DevSecOps experience - 3+ years working with Kubernetes, AWS cloud infrastructure, CI/CD pipelines, Infrastructure as Code, and DevOps automation. View detailed work history and accomplishments.',
  alternates: { canonical: '/experience' },
  openGraph: {
    ...baseOpenGraph,
    url: '/experience',
    title: 'Professional Experience - Firas Mosbehi',
    description: '3+ years of DevSecOps experience in cloud infrastructure, automation, and DevOps practices.',
  },
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Experience />
    </PageTransition>
  );
}
