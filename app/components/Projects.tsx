import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { getCaseStudy } from '../../lib/case-studies';
import FadeInStagger from './FadeInStagger';

export default function Projects() {
  const projects = [
    {
      title: 'envguard',
      items: [
        'Created a Go CLI tool that validates .env files against declarative YAML schemas',
        'Prevents misconfigured environment variables from reaching production with fail-fast validation',
        'Distributed via Homebrew tap and GitHub Releases for cross-platform installation',
      ],
      tags: ['Go', 'CLI', 'DevEx', 'Validation', 'Open Source'],
      github: 'https://github.com/firasmosbehi/envguard',
      featured: true,
    },
    {
      title: 'portman',
      items: [
        'Cross-platform CLI for managing local ports and processes: list, check, kill, watch, and find next available ports',
        'Solves the classic "Port 3000 is already in use" problem with one clean command',
        'Supports project-wide service registries via portman.yml and colorized table output',
      ],
      tags: ['Go', 'CLI', 'Developer Tools', 'Cross-platform'],
      github: 'https://github.com/firasmosbehi/portman',
      featured: true,
    },
    {
      title: 'Kubernetes Taskboard Platform',
      items: [
        'Deployed production-ready Kubernetes platform on AWS EKS with comprehensive observability stack',
        'Implemented GitOps workflow using ArgoCD for automated continuous deployment',
        'Configured Kubernetes Gateway API with AWS Application Load Balancer integration',
      ],
      tags: ['Kubernetes', 'AWS EKS', 'ArgoCD', 'Terraform'],
      github: 'https://github.com/firasmosbehi/taskboard-kubernetes',
    },
    {
      title: 'Automated EC2 Deployment Pipeline',
      items: [
        'Built automated deployment pipeline combining Terraform and Ansible on AWS EC2',
        'Integrated GitHub Actions CI/CD workflow for automated infrastructure deployment',
        'Demonstrated Infrastructure as Code best practices with version-controlled automation',
      ],
      tags: ['Terraform', 'Ansible', 'GitHub Actions', 'AWS EC2'],
      github: 'https://github.com/firasmosbehi/ec2-deployment',
    },
    {
      title: 'Task-Board with Full Observability Stack',
      items: [
        'Developed full-stack application with React frontend and Go backend',
        'Implemented OpenTelemetry instrumentation for distributed tracing and metrics collection',
        'Created GitHub Actions CI/CD pipeline for automated testing and Docker image publishing',
      ],
      tags: ['React', 'Go', 'OpenTelemetry', 'Docker'],
      github: 'https://github.com/firasmosbehi/task-board',
    },
    {
      title: 'Optimized Dockerfiles Repository',
      items: [
        'Created production-ready optimized Dockerfiles for popular frameworks',
        'Demonstrated best practices including multi-stage builds and security hardening',
        'Reduced Docker image sizes by up to 90% through optimization strategies',
      ],
      tags: ['Docker', 'Next.js', 'React', 'FastAPI'],
      github: 'https://github.com/firasmosbehi/optimized-dockerfiles',
    },
  ];

  return (
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <div className="mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">03</span>
              Featured Projects
            </h1>
            <p className="mt-3 text-muted max-w-2xl leading-relaxed">
              A selection of recent work — from open-source developer tools to production cloud
              infrastructure and full-stack applications.
            </p>
          </div>
        </FadeInStagger>

        {/* ponytail: one fade for the whole grid; per-cell fades expose the bg-line gap while hidden */}
        <FadeInStagger delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
            {projects.map((project, i) => (
              <article key={project.title} className="bg-bg p-6 sm:p-7 flex flex-col gap-4">
                <div className="flex justify-between gap-3 font-mono text-xs text-muted">
                  <span>
                    {String(i + 1).padStart(2, '0')}
                    {project.featured && <span className="ml-3 text-accent">featured</span>}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-my-3 -mx-2 py-3 px-2 hover:text-accent transition-colors touch-manipulation"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    github ↗
                  </a>
                </div>
                <h2 className="text-xl sm:text-[22px] font-semibold tracking-tight">{project.title}</h2>
                <ul className="space-y-1.5 text-[15px] leading-relaxed text-muted flex-grow">
                  {project.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="font-mono text-accent shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-xs text-muted">
                  {project.tags.map((t) => t.toLowerCase()).join(' / ')}
                </p>
                {getCaseStudy(project.github.split('/').pop() ?? '') && (
                  <Link
                    href={`/projects/${project.github.split('/').pop()}`}
                    className="font-mono text-[13px] text-accent hover:underline underline-offset-4"
                  >
                    read the case study <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
