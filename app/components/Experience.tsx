import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

const accentClasses: Record<string, { border: string; text: string; badge: string }> = {
  blue: {
    border: 'bg-blue-600 group-hover:bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  },
  cyan: {
    border: 'bg-cyan-600 group-hover:bg-cyan-500',
    text: 'text-cyan-600 dark:text-cyan-400',
    badge: 'bg-cyan-100/70 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
  },
};

export default function Experience() {
  const experiences = [
    {
      title: 'DevSecOps Engineer',
      company: 'The QA Company',
      location: 'Saint-Étienne, France',
      period: '02/2025 – Present',
      duration: 'Current',
      color: 'blue' as const,
      summary:
        'Leading security-first DevOps initiatives for an AI/QA platform, hardening cloud infrastructure and embedding security gates across the entire SDLC.',
      items: [
        'Integrated Trivy, SonarQube, and OWASP ZAP into GitLab CI pipelines, reducing critical vulnerabilities by 70% before production deployment',
        'Architected high-availability Kubernetes infrastructure on AWS EKS across dev/staging/prod with 99.95% uptime and automated failover',
        'Deployed HashiCorp Vault for secrets management and rotated credentials across 50+ services with zero downtime',
        'Built Infrastructure as Code foundation using Terraform and Ansible, cutting environment provisioning time from days to minutes',
        'Established Prometheus + Grafana + Loki observability stack, reducing mean time to detect (MTTD) incidents by 60%',
        'Mentored 2 junior engineers on Kubernetes security best practices and GitOps workflows with ArgoCD',
      ],
      tags: ['Kubernetes', 'AWS EKS', 'Terraform', 'Vault', 'GitLab CI', 'ArgoCD'],
      delay: 300,
    },
    {
      title: 'DevOps Developer',
      company: 'Nexaminds',
      location: 'Tunisia',
      period: '09/2023 – 11/2024',
      duration: '1 yr 3 mos',
      color: 'cyan' as const,
      summary:
        'Full-stack DevOps ownership for microservices platforms, delivering automated pipelines and production-grade containerization for client projects.',
      items: [
        'Developed and maintained 15+ GitLab CI pipelines automating build, test, and deployment processes for microservices applications',
        'Orchestrated containerized deployments on Kubernetes clusters with auto-scaling, service mesh, and ingress load balancing',
        'Reduced Docker image sizes by up to 90% and deployment time by 60% through multi-stage builds and layer caching strategies',
        'Implemented ELK stack for centralized logging and Grafana dashboards for application performance monitoring',
        'Collaborated with a 6-person engineering squad to deliver 4 major client releases on schedule',
      ],
      tags: ['Docker', 'Kubernetes', 'GitLab CI', 'ELK', 'Grafana', 'Microservices'],
      delay: 500,
    },
  ];

  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Experience
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
              3+ years of hands-on experience building, securing, and scaling cloud-native
              infrastructure across fast-moving engineering teams.
            </p>
          </div>
        </FadeInStagger>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent hidden md:block" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp) => {
              const accent = accentClasses[exp.color];
              return (
                <FadeInStagger key={exp.title} delay={exp.delay}>
                  <div className="relative md:pl-16 lg:pl-20">
                    {/* Timeline dot */}
                    <div
                      className={`hidden md:flex absolute left-0 md:left-4 lg:left-6 top-6 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-900 ${exp.color === 'blue' ? 'bg-blue-600' : 'bg-cyan-600'} shadow-md z-10`}
                    />

                    <GlassCard className="p-5 sm:p-7 md:p-8 relative overflow-hidden group">
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 ${accent.border} transition-colors duration-300`}
                      />
                      <div className="pl-4 sm:pl-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4 gap-2">
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                              {exp.title}
                            </h3>
                            <p className={`text-base sm:text-lg ${accent.text} font-medium`}>
                              {exp.company}
                            </p>
                            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500">
                              {exp.location}
                            </p>
                          </div>
                          <div className="flex flex-row md:flex-col md:items-end gap-2 md:gap-0">
                            <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                              {exp.period}
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${accent.badge} font-medium`}
                            >
                              {exp.duration}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                          {exp.summary}
                        </p>

                        <ul className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-5">
                          {exp.items.map((item, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className={`${accent.text} mt-1.5 flex-shrink-0`}>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2.5 py-1 rounded-full text-xs font-medium ${accent.badge}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </FadeInStagger>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
