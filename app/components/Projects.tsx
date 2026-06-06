import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

const accentClasses: Record<string, { title: string; badge: string }> = {
  blue: {
    title: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
    badge: 'bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  },
  cyan: {
    title: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
    badge: 'bg-cyan-100/70 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
  },
  amber: {
    title: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    badge: 'bg-amber-100/70 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  },
  purple: {
    title: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
    badge: 'bg-purple-100/70 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  },
};

export default function Projects() {
  const projects = [
    {
      title: 'jenkins-mcp',
      color: 'blue' as const,
      items: [
        'Built a comprehensive MCP (Model Context Protocol) server for Jenkins with 25+ tools enabling AI agents to interact with CI/CD pipelines',
        'Implemented dual transport support (stdio and SSE) for flexible integration with Claude, Cursor, and other AI assistants',
        'Developed in TypeScript with full test coverage and published to npm for global installation',
      ],
      tags: ['TypeScript', 'MCP', 'Jenkins', 'CI/CD', 'AI Integration'],
      github: 'https://github.com/firasmosbehi/jenkins-mcp',
      featured: true,
      delay: 100,
    },
    {
      title: 'envguard',
      color: 'cyan' as const,
      items: [
        'Created a Go CLI tool that validates .env files against declarative YAML schemas',
        'Prevents misconfigured environment variables from reaching production with fail-fast validation',
        'Distributed via Homebrew tap and GitHub Releases for cross-platform installation',
      ],
      tags: ['Go', 'CLI', 'DevEx', 'Validation', 'Open Source'],
      github: 'https://github.com/firasmosbehi/envguard',
      featured: true,
      delay: 200,
    },
    {
      title: 'portman',
      color: 'amber' as const,
      items: [
        'Cross-platform CLI for managing local ports and processes: list, check, kill, watch, and find next available ports',
        'Solves the classic "Port 3000 is already in use" problem with one clean command',
        'Supports project-wide service registries via portman.yml and colorized table output',
      ],
      tags: ['Go', 'CLI', 'Developer Tools', 'Cross-platform'],
      github: 'https://github.com/firasmosbehi/portman',
      featured: true,
      delay: 300,
    },
    {
      title: 'release-note-generator',
      color: 'purple' as const,
      items: [
        'GitHub Action that drafts release notes from Conventional Commit PR titles when you push a tag',
        'Automates changelog generation and reduces release overhead for teams using conventional commits',
        'Published to GitHub Marketplace with TypeScript implementation',
      ],
      tags: ['TypeScript', 'GitHub Actions', 'Automation', 'Release Management'],
      github: 'https://github.com/firasmosbehi/release-note-generator',
      featured: true,
      delay: 400,
    },
    {
      title: 'Kubernetes Taskboard Platform',
      color: 'blue' as const,
      items: [
        'Deployed production-ready Kubernetes platform on AWS EKS with comprehensive observability stack',
        'Implemented GitOps workflow using ArgoCD for automated continuous deployment',
        'Configured Kubernetes Gateway API with AWS Application Load Balancer integration',
      ],
      tags: ['Kubernetes', 'AWS EKS', 'ArgoCD', 'Terraform'],
      github: 'https://github.com/firasmosbehi/taskboard-kubernetes',
      delay: 500,
    },
    {
      title: 'Automated EC2 Deployment Pipeline',
      color: 'cyan' as const,
      items: [
        'Built automated deployment pipeline combining Terraform and Ansible on AWS EC2',
        'Integrated GitHub Actions CI/CD workflow for automated infrastructure deployment',
        'Demonstrated Infrastructure as Code best practices with version-controlled automation',
      ],
      tags: ['Terraform', 'Ansible', 'GitHub Actions', 'AWS EC2'],
      github: 'https://github.com/firasmosbehi/ec2-deployment',
      delay: 600,
    },
    {
      title: 'Task-Board with Full Observability Stack',
      color: 'blue' as const,
      items: [
        'Developed full-stack application with React frontend and Go backend',
        'Implemented OpenTelemetry instrumentation for distributed tracing and metrics collection',
        'Created GitHub Actions CI/CD pipeline for automated testing and Docker image publishing',
      ],
      tags: ['React', 'Go', 'OpenTelemetry', 'Docker'],
      github: 'https://github.com/firasmosbehi/task-board',
      delay: 700,
    },
    {
      title: 'Optimized Dockerfiles Repository',
      color: 'cyan' as const,
      items: [
        'Created production-ready optimized Dockerfiles for popular frameworks',
        'Demonstrated best practices including multi-stage builds and security hardening',
        'Reduced Docker image sizes by up to 90% through optimization strategies',
      ],
      tags: ['Docker', 'Next.js', 'React', 'FastAPI'],
      github: 'https://github.com/firasmosbehi/optimized-dockerfiles',
      delay: 800,
    },
  ];

  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-zinc-900">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Featured Projects
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
              A selection of recent work — from open-source developer tools to production cloud
              infrastructure and full-stack applications.
            </p>
          </div>
        </FadeInStagger>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => {
            const accent = accentClasses[project.color];
            return (
              <FadeInStagger key={project.title} delay={project.delay}>
                <GlassCard
                  className={`p-5 sm:p-7 h-full group cursor-default ${project.featured ? 'ring-1 ring-blue-500/20 dark:ring-blue-400/20' : ''}`}
                  hover
                >
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <h3
                      className={`text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300 ${accent.title}`}
                    >
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        New
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${accent.badge} border border-transparent`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors touch-manipulation"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </GlassCard>
              </FadeInStagger>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
