import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

interface SkillItem {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  gridClass: string;
  wide?: boolean; // lay skills out in two columns inside wide cells
}

// Spans tile without holes (grid-flow-dense): sm 2 cols, lg 4 cols.
const categories: SkillCategory[] = [
  {
    title: 'Container & Orchestration',
    gridClass: 'sm:col-span-2',
    wide: true,
    skills: [
      { name: 'Kubernetes', level: 95 },
      { name: 'Docker', level: 95 },
      { name: 'Helm', level: 85 },
      { name: 'ArgoCD', level: 90 },
      { name: 'Kustomize', level: 80 },
      { name: 'Docker Compose', level: 90 },
    ],
  },
  {
    title: 'Cloud Platforms',
    gridClass: 'sm:row-span-2',
    skills: [
      { name: 'AWS EKS', level: 90 },
      { name: 'AWS EC2 / VPC', level: 85 },
      { name: 'AWS S3 / IAM / RDS', level: 80 },
      { name: 'Azure', level: 65 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    gridClass: '',
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 85 },
      { name: 'CloudFormation', level: 70 },
    ],
  },
  {
    title: 'CI/CD Tools',
    gridClass: '',
    skills: [
      { name: 'GitLab CI', level: 90 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Jenkins', level: 85 },
      { name: 'Azure DevOps', level: 70 },
    ],
  },
  {
    title: 'Monitoring & Observability',
    gridClass: 'sm:col-span-2 lg:col-span-4',
    wide: true,
    skills: [
      { name: 'Prometheus & Grafana', level: 90 },
      { name: 'OpenTelemetry', level: 85 },
      { name: 'ELK Stack', level: 80 },
      { name: 'Loki / Tempo', level: 75 },
    ],
  },
  {
    title: 'Security & DevSecOps',
    gridClass: '',
    skills: [
      { name: 'Trivy', level: 90 },
      { name: 'SonarQube', level: 80 },
      { name: 'Vault', level: 75 },
      { name: 'OWASP', level: 80 },
    ],
  },
  {
    title: 'Programming',
    gridClass: '',
    skills: [
      { name: 'Go', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'Bash / Shell', level: 90 },
      { name: 'TypeScript', level: 75 },
    ],
  },
];

function ProficiencyBar({ name, level }: SkillItem) {
  return (
    <li>
      <div className="flex justify-between items-baseline gap-3 mb-1.5">
        <span className="text-sm text-fg">{name}</span>
        <span className="font-mono text-xs text-muted tabular-nums">{level}%</span>
      </div>
      <div
        className="h-1 w-full rounded-full bg-line overflow-hidden"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full bg-accent" style={{ width: `${level}%` }} />
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={50}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">04</span>
            Technical Skills
          </h1>
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">
            Technologies and tools I use to build, deploy, secure, and observe cloud-native
            systems at scale.
          </p>
        </FadeInStagger>

        <FadeInStagger delay={150} className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-px bg-line border border-line rounded-xl overflow-hidden">
            {categories.map((category) => (
              <section key={category.title} className={`bg-surface p-5 sm:p-6 ${category.gridClass}`}>
                <h2 className="text-base font-semibold tracking-tight mb-5">{category.title}</h2>
                <ul className={`grid gap-4 ${category.wide ? 'sm:grid-cols-2 sm:gap-x-8' : ''}`}>
                  {category.skills.map((skill) => (
                    <ProficiencyBar key={skill.name} {...skill} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
