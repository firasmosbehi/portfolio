import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function Skills() {
  const skillCategories = [
    { title: 'Container & Orchestration', skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Helm', 'ArgoCD', 'Kustomize'], delay: 100 },
    { title: 'Cloud Platforms', skills: ['AWS EKS', 'AWS EC2', 'AWS VPC', 'AWS S3', 'AWS IAM', 'AWS RDS', 'Azure'], delay: 200 },
    { title: 'Infrastructure as Code', skills: ['Terraform', 'Ansible', 'CloudFormation'], delay: 300 },
    { title: 'CI/CD Tools', skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'], delay: 400 },
    { title: 'Monitoring & Observability', skills: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'OpenTelemetry', 'ELK Stack'], delay: 500 },
    { title: 'Security & DevSecOps', skills: ['Trivy', 'SonarQube', 'OWASP', 'Vault'], delay: 600 },
    { title: 'Programming & Scripting', skills: ['Python', 'Go', 'Bash', 'Shell Scripting', 'YAML'], delay: 700 },
    { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'], delay: 800 },
    { title: 'Methodologies', skills: ['Agile', 'Scrum', 'GitOps', 'DevSecOps', 'SRE'], delay: 900 },
  ];

  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={50}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 sm:mb-12">Technical Skills</h2>
        </FadeInStagger>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <FadeInStagger key={category.title} delay={category.delay}>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 sm:mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-2.5 sm:px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs sm:text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
