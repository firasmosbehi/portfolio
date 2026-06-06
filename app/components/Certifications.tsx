import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

const certifications = [
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: 'In Progress',
    expiry: '—',
    status: 'in-progress' as const,
    verifyUrl: '#',
    description: 'Demonstrates deep Kubernetes cluster administration skills including installation, configuration, networking, storage, security, and troubleshooting.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'In Progress',
    expiry: '—',
    status: 'in-progress' as const,
    verifyUrl: '#',
    description: 'Validates proficiency in Infrastructure as Code using Terraform, including state management, modules, workspaces, and cloud provider integrations.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Planned',
    expiry: '—',
    status: 'planned' as const,
    verifyUrl: '#',
    description: 'Covers designing distributed systems on AWS, including high availability, cost optimization, security, and scalable architectures.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker, Inc.',
    date: 'Planned',
    expiry: '—',
    status: 'planned' as const,
    verifyUrl: '#',
    description: 'Proves expertise in containerization, Docker image creation, orchestration, networking, storage, and enterprise operations.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const statusConfig = {
  completed: {
    label: 'Active',
    class: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  },
  'in-progress': {
    label: 'In Progress',
    class: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  },
  planned: {
    label: 'Planned',
    class: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400',
  },
};

export default function CertificationsComponent() {
  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto">
        <FadeInStagger delay={100}>
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Certifications &{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Credentials
              </span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Professional certifications that validate my expertise in cloud infrastructure,
              container orchestration, and DevSecOps practices.
            </p>
          </div>
        </FadeInStagger>

        <div className="grid gap-6">
          {certifications.map((cert, index) => {
            const status = statusConfig[cert.status];
            return (
              <FadeInStagger key={cert.name} delay={200 + index * 100}>
                <GlassCard className="p-5 sm:p-7 md:p-8 relative overflow-hidden" hover>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-100/70 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                            {cert.name}
                          </h2>
                          <p className="text-sm text-zinc-500 dark:text-zinc-500">
                            {cert.issuer}
                          </p>
                        </div>
                        <span
                          className={`self-start px-2.5 py-1 rounded-full text-xs font-medium ${status.class}`}
                        >
                          {status.label}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                        <span>
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">Issued:</span>{' '}
                          {cert.date}
                        </span>
                        <span>
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">Expires:</span>{' '}
                          {cert.expiry}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeInStagger>
            );
          })}
        </div>

        <FadeInStagger delay={700}>
          <div className="mt-10 p-5 sm:p-6 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold">Note:</span> Certifications marked as &quot;In
              Progress&quot; are actively being studied for. Those marked as &quot;Planned&quot; are
              on the roadmap for 2026. This page is updated as credentials are earned.
            </p>
          </div>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
