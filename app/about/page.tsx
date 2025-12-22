import { Metadata } from 'next';
import About from '../components/About';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about Firas Mosbehi, a DevSecOps Engineer with 2+ years of experience in cloud infrastructure, Kubernetes, AWS, CI/CD pipelines, and Infrastructure as Code. Passionate about automation and DevOps best practices.',
  openGraph: {
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
