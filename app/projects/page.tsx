import { Metadata } from 'next';
import Projects from '../components/Projects';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Firas Mosbehi\'s DevOps and cloud infrastructure projects including Kubernetes platforms on AWS EKS, automated CI/CD pipelines, Infrastructure as Code implementations with Terraform and Ansible, and containerization solutions.',
  openGraph: {
    title: 'Projects - Firas Mosbehi DevSecOps Portfolio',
    description: 'Featured DevOps projects: Kubernetes platforms, CI/CD automation, Infrastructure as Code, and cloud solutions.',
  },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Projects />
    </PageTransition>
  );
}
