import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function Experience() {
  const experiences = [
    {
      title: 'DevSecOps Engineer',
      company: 'The QA Company',
      location: 'Saint-Étienne, France',
      period: '02/2025 – Present',
      duration: 'Current',
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
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <div className="mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">02</span>
              Experience
            </h1>
            <p className="mt-3 text-muted max-w-2xl leading-relaxed">
              3+ years of hands-on experience building, securing, and scaling cloud-native
              infrastructure across fast-moving engineering teams.
            </p>
          </div>
        </FadeInStagger>

        <ol className="border-t border-line">
          {experiences.map((exp) => (
            <li key={exp.title} className="border-b border-line">
              <FadeInStagger delay={exp.delay}>
                <article className="flex flex-col md:flex-row gap-3 md:gap-10 py-8">
                  <div className="md:w-52 shrink-0 font-mono text-[13px] leading-relaxed text-muted">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                    <div>{exp.duration}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-semibold">
                      {exp.title} <span className="font-normal text-muted">at</span> {exp.company}
                    </h2>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-muted max-w-3xl">
                      {exp.summary}
                    </p>
                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted max-w-3xl">
                      {exp.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="font-mono text-accent shrink-0">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 font-mono text-xs text-muted">
                      {exp.tags.map((t) => t.toLowerCase()).join(' / ')}
                    </p>
                  </div>
                </article>
              </FadeInStagger>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
