import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '../../../lib/case-studies';
import { baseOpenGraph, pageAlternates } from '../../../lib/seo';
import PageTransition from '../../components/PageTransition';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: 'Not Found' };

  return {
    title: `${study.title} — Case Study`,
    description: study.tagline,
    alternates: pageAlternates(`/projects/${slug}`),
    openGraph: {
      ...baseOpenGraph,
      url: `/projects/${slug}`,
      title: `${study.title} — Case Study | Firas Mosbehi`,
      description: study.tagline,
    },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-mono text-xs text-muted uppercase tracking-wider mb-5">{children}</h2>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <PageTransition>
      <article className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <nav aria-label="Breadcrumb" className="font-mono text-[13px] text-muted mb-8">
          <Link href="/projects" className="hover:text-accent transition-colors">projects</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{study.slug}</span>
        </nav>

        <header className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">case study</span>
            {study.title}
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">{study.tagline}</p>
        </header>

        <dl className="mt-12 grid sm:grid-cols-[10rem_1fr] gap-x-10 gap-y-3 border-y border-line py-6 font-mono text-[13px]">
          <dt className="text-muted">stack</dt>
          <dd>{study.stack.map((s) => s.toLowerCase()).join(' / ')}</dd>
          <dt className="text-muted">source</dt>
          <dd>
            <a href={study.repo} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              {study.repo.replace('https://', '')} <span aria-hidden="true">↗</span>
            </a>
          </dd>
        </dl>

        <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-14">
          <section aria-labelledby="overview">
            <SectionTitle><span id="overview">Overview</span></SectionTitle>
            <p className="leading-relaxed">{study.summary}</p>
            <h3 className="mt-10 font-semibold">Goal</h3>
            <ul className="mt-3 space-y-2 text-muted leading-relaxed">
              {study.goal.map((g) => (
                <li key={g} className="flex gap-3">
                  <span aria-hidden="true" className="font-mono text-accent shrink-0">–</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="architecture">
            <SectionTitle><span id="architecture">Architecture</span></SectionTitle>
            <ol className="border border-line rounded-xl overflow-hidden divide-y divide-line">
              {study.architecture.map((a) => (
                <li key={a.layer} className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-2 p-5 bg-surface">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider pt-0.5">{a.layer}</span>
                  <ul className="space-y-1 text-[15px] leading-relaxed">
                    {a.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section aria-labelledby="decisions" className="mt-20">
          <SectionTitle><span id="decisions">Key decisions</span></SectionTitle>
          <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
            {study.decisions.map((d, i) => (
              <div key={d.title} className="bg-bg p-6 md:last:odd:col-span-2">
                <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-semibold">{d.title}</h3>
                <p className="mt-2 text-[15px] text-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 grid lg:grid-cols-2 gap-14">
          <section aria-labelledby="highlights">
            <SectionTitle><span id="highlights">Highlights</span></SectionTitle>
            <ul className="border-t border-line">
              {study.highlights.map((h) => (
                <li key={h} className="py-3 border-b border-line leading-relaxed">{h}</li>
              ))}
            </ul>
          </section>

          {study.extra && (
            <section aria-labelledby="extra">
              <SectionTitle><span id="extra">{study.extra.title}</span></SectionTitle>
              <ul className="border-t border-line">
                {study.extra.items.map((h) => (
                  <li key={h} className="py-3 border-b border-line leading-relaxed text-muted flex gap-3">
                    <span aria-hidden="true" className="font-mono text-accent shrink-0">[ ]</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {study.related && (
          <section aria-labelledby="related" className="mt-20">
            <SectionTitle><span id="related">Related writing</span></SectionTitle>
            <ul className="font-mono text-sm">
              {study.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-accent transition-colors">
                    {r.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </PageTransition>
  );
}
