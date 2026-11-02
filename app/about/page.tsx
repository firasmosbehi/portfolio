import { Metadata } from 'next';
import { baseOpenGraph, pageAlternates } from '../../lib/seo';
import About from '../components/About';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about Firas Mosbehi, a DevSecOps Engineer with 3+ years of experience in cloud infrastructure, Kubernetes, AWS, CI/CD pipelines, and Infrastructure as Code. Passionate about automation and DevOps best practices.',
  alternates: pageAlternates('/about'),
  openGraph: {
    ...baseOpenGraph,
    url: '/about',
    title: 'About Firas Mosbehi - DevSecOps Engineer',
    description: 'DevSecOps Engineer with expertise in cloud infrastructure, containerization, and CI/CD automation.',
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <About />
    </PageTransition>
  );
}
