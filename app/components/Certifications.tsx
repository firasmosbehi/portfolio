import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

const certifications = [
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: 'In Progress',
    expiry: '—',
    status: 'in-progress' as const,
    description: 'Demonstrates deep Kubernetes cluster administration skills including installation, configuration, networking, storage, security, and troubleshooting.',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'In Progress',
    expiry: '—',
    status: 'in-progress' as const,
    description: 'Validates proficiency in Infrastructure as Code using Terraform, including state management, modules, workspaces, and cloud provider integrations.',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Planned',
    expiry: '—',
    status: 'planned' as const,
    description: 'Covers designing distributed systems on AWS, including high availability, cost optimization, security, and scalable architectures.',
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker, Inc.',
    date: 'Planned',
    expiry: '—',
    status: 'planned' as const,
    description: 'Proves expertise in containerization, Docker image creation, orchestration, networking, storage, and enterprise operations.',
  },
];

const statusConfig = {
  completed: { label: 'active', class: 'text-accent' },
  'in-progress': { label: 'in progress', class: 'text-accent' },
  planned: { label: 'planned', class: 'text-muted' },
};

export default function CertificationsComponent() {
  return (
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">06</span>Certifications
          </h1>
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">
            Professional certifications that validate my expertise in cloud infrastructure,
            container orchestration, and DevSecOps practices.
          </p>
        </FadeInStagger>

        <div className="mt-10 border-t border-line">
          {certifications.map((cert, index) => {
            const status = statusConfig[cert.status];
            return (
              <FadeInStagger key={cert.name} delay={200 + index * 100}>
                <article className="flex flex-wrap gap-x-10 gap-y-3 py-8 border-b border-line">
                  <div className="basis-full sm:basis-48 shrink-0 font-mono text-sm text-muted leading-relaxed">
                    <p className={status.class}>
                      <span className="sr-only">Status: </span>[{status.label}]
                    </p>
                    <p>issued {cert.date}</p>
                    <p>expires {cert.expiry}</p>
                  </div>
                  <div className="flex-1 min-w-0 basis-80">
                    <h2 className="text-xl font-semibold">{cert.name}</h2>
                    <p className="mt-1 font-mono text-xs text-muted">{cert.issuer}</p>
                    <p className="mt-3 text-muted leading-relaxed max-w-3xl">{cert.description}</p>
                  </div>
                </article>
              </FadeInStagger>
            );
          })}
        </div>

        <FadeInStagger delay={700}>
          <p className="mt-8 text-sm text-muted leading-relaxed max-w-3xl">
            <span className="font-mono text-fg">note:</span> Certifications marked as &quot;In
            Progress&quot; are actively being studied for. Those marked as &quot;Planned&quot; are
            on the roadmap for 2026. This page is updated as credentials are earned.
          </p>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
