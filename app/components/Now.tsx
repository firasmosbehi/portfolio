import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

const sections = [
  {
    title: 'Currently Working On',
    content: [
      'Hardening Kubernetes security posture at The QA Company with admission controllers, pod security standards, and network policies',
      'Building an internal developer platform (IDP) using Backstage, Terraform, and GitOps workflows',
      'Automating compliance evidence collection for SOC 2 readiness across AWS and Kubernetes environments',
    ],
  },
  {
    title: 'Learning',
    content: [
      'Advanced Platform Engineering patterns: golden paths, self-service infra, and internal developer portals',
      'eBPF-based observability with Cilium and Pixie for Kubernetes networking and security insights',
      'Supply chain security: Sigstore, SLSA, and reproducible builds',
    ],
  },
  {
    title: 'Building',
    content: [
      <span key="jenkins-mcp">
        <strong className="font-medium text-fg">jenkins-mcp</strong> — A comprehensive MCP server for Jenkins CI/CD with 25+ tools and dual transport support
      </span>,
      <span key="envguard">
        <strong className="font-medium text-fg">envguard</strong> — A Go CLI tool to validate .env files against declarative YAML schemas
      </span>,
      <span key="portman">
        <strong className="font-medium text-fg">portman</strong> — Cross-platform port management utility written in Go
      </span>,
    ],
  },
  {
    title: 'Reading',
    content: [
      '"Platform Engineering" by Luca Galante and the team at Humanitec',
      '"Kubernetes Security and Observability" by Brendan Creane and Amit Gupta',
      'Cloud Native Computing Foundation (CNCF) whitepapers on platform engineering',
    ],
  },
  {
    title: 'Goals for 2026',
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
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">09</span>Now
          </h1>
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">
            A snapshot of my current focus — work projects, side projects, learning, and goals.
            Inspired by Derek Sivers&apos;{' '}
            <a
              href="https://nownownow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4"
            >
              /now movement
            </a>
            .
          </p>
          <p className="mt-4 font-mono text-sm text-muted">
            last updated <span className="text-fg">{lastUpdated}</span>
          </p>
        </FadeInStagger>

        <div className="mt-10 border-t border-line">
          {sections.map((section, index) => (
            <FadeInStagger key={section.title} delay={200 + index * 100}>
              <section className="flex flex-wrap gap-x-10 gap-y-3 py-8 border-b border-line">
                <h2 className="basis-full sm:basis-48 shrink-0 font-mono text-sm text-muted lowercase">
                  {section.title}
                </h2>
                <ul className="flex-1 min-w-0 basis-80 space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-muted leading-relaxed">
                      <span aria-hidden="true" className="font-mono text-accent shrink-0">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
