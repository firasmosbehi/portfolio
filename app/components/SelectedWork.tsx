import Link from 'next/link';
import { getCaseStudy } from '../../lib/case-studies';

const projects = [
  {
    name: 'envguard',
    desc: 'Go CLI that validates .env files against declarative YAML schemas — misconfig fails before prod.',
    tags: 'go / cli / devex',
  },
  {
    name: 'portman',
    desc: 'Cross-platform CLI to list, kill and watch local ports. Ends “port 3000 is already in use”.',
    tags: 'go / cli / dev tools',
  },
  {
    name: 'taskboard-kubernetes',
    desc: 'Production-style EKS platform: ArgoCD GitOps, Gateway API on an AWS ALB, full observability stack.',
    tags: 'kubernetes / aws eks / argocd / terraform',
  },
  {
    name: 'optimized-dockerfiles',
    desc: 'Hardened multi-stage Dockerfiles for popular frameworks — images up to 90% smaller.',
    tags: 'docker / security / next.js / fastapi',
  },
];

export default function SelectedWork() {
  return (
    <section aria-labelledby="work-title" className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="work-title" className="text-3xl font-semibold tracking-tight">
          <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">01</span>
          Selected work
        </h2>
        <Link href="/projects" className="font-mono text-[13px] text-muted hover:text-accent transition-colors">
          all projects <span aria-hidden="true">→</span>
        </Link>
      </div>
      <ul className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
        {projects.map((p, i) => (
          <li key={p.name} className="bg-bg hover:bg-surface transition-colors">
            <Link
              href={getCaseStudy(p.name) ? `/projects/${p.name}` : `https://github.com/firasmosbehi/${p.name}`}
              {...(getCaseStudy(p.name) ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="group p-7 flex flex-col gap-3.5 h-full min-h-56"
            >
              <span aria-hidden="true" className="flex justify-between font-mono text-xs text-muted">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{getCaseStudy(p.name) ? 'case study →' : 'github ↗'}</span>
              </span>
              <span className="text-[22px] font-semibold tracking-tight group-hover:text-accent transition-colors">
                {p.name}
              </span>
              <span className="text-[15px] leading-relaxed text-muted grow">{p.desc}</span>
              <span className="font-mono text-xs text-muted">{p.tags}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
