import { Metadata } from 'next';
import Skills from '../components/Skills';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Technical Skills',
  description: 'Comprehensive list of Firas Mosbehi\'s technical skills: Kubernetes, Docker, AWS (EKS, EC2, VPC, S3), Terraform, Ansible, CI/CD tools (Jenkins, GitHub Actions, GitLab CI), monitoring (Prometheus, Grafana), Python, Go, and DevSecOps practices.',
  openGraph: {
    title: 'Technical Skills - Firas Mosbehi',
    description: 'Expert skills in Kubernetes, AWS, Infrastructure as Code, CI/CD, and DevSecOps technologies.',
  },
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <Skills />
    </PageTransition>
  );
}
