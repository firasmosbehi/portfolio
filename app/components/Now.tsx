import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

const sections = [
  {
    title: 'Currently Working On',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    content: [
      'Hardening Kubernetes security posture at The QA Company with admission controllers, pod security standards, and network policies',
      'Building an internal developer platform (IDP) using Backstage, Terraform, and GitOps workflows',
      'Automating compliance evidence collection for SOC 2 readiness across AWS and Kubernetes environments',
    ],
  },
  {
    title: 'Learning',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    content: [
      'Advanced Platform Engineering patterns: golden paths, self-service infra, and internal developer portals',
      'eBPF-based observability with Cilium and Pixie for Kubernetes networking and security insights',
      'Supply chain security: Sigstore, SLSA, and reproducible builds',
    ],
  },
  {
    title: 'Building',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    content: [
      <span key="jenkins-mcp">
        <strong>jenkins-mcp</strong> — A comprehensive MCP server for Jenkins CI/CD with 25+ tools and dual transport support
      </span>,
      <span key="envguard">
        <strong>envguard</strong> — A Go CLI tool to validate .env files against declarative YAML schemas
      </span>,
      <span key="portman">
        <strong>portman</strong> — Cross-platform port management utility written in Go
      </span>,
    ],
  },
  {
    title: 'Reading',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    content: [
      '"Platform Engineering" by Luca Galante and the team at Humanitec',
      '"Kubernetes Security and Observability" by Brendan Creane and Amit Gupta',
      'Cloud Native Computing Foundation (CNCF) whitepapers on platform engineering',
    ],
  },
  {
    title: 'Goals for 2026',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    content: [
      'Earn CKA (Certified Kubernetes Administrator) and Terraform Associate certifications',
      'Speak at a DevOps / cloud-native meetup or conference',
      'Grow open-source projects to 100+ combined GitHub stars',
      'Publish 6 technical blog posts on Kubernetes, DevSecOps, and platform engineering',
    ],
  },
];

export default function Now() {
  const lastUpdated = 'June 2026';

  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto">
        <FadeInStagger delay={100}>
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              What I&apos;m Doing{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Now
              </span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              A snapshot of my current focus — work projects, side projects, learning, and goals.
              Inspired by Derek Sivers&apos;{' '}
              <a
                href="https://nownownow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                /now movement
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              Last updated: <span className="font-medium text-zinc-700 dark:text-zinc-300">{lastUpdated}</span>
            </p>
          </div>
        </FadeInStagger>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <FadeInStagger key={section.title} delay={200 + index * 100}>
              <GlassCard className="p-5 sm:p-6 md:p-8" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                      {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
