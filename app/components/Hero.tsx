import Link from 'next/link';

const whoami = [
  ['name', 'Firas Mosbehi'],
  ['role', 'DevSecOps Engineer'],
  ['stack', 'k8s · aws · terraform · vault'],
  ['focus', 'supply-chain security, gitops'],
  ['status', '● shipping'],
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-16 sm:pt-24 sm:pb-20 grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center"
    >
      <div className="min-w-0">
        <p className="mb-7 font-mono text-[13px] text-muted flex items-center gap-2.5">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-accent" />
          open to new roles · saint-étienne, fr
        </p>
        <h1
          id="hero-title"
          className="text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-[-0.035em] font-semibold"
        >
          I build cloud platforms that ship fast and <span className="text-accent">fail safe</span>.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
          DevSecOps engineer at The QA Company. Kubernetes, AWS and Terraform — with security gates
          wired into every pipeline, not bolted on after.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-5 rounded-lg bg-fill text-on-fill font-semibold"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV (PDF)"
            className="inline-flex items-center h-12 px-5 rounded-lg border border-line font-medium hover:border-muted transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>

      <div
        role="group"
        aria-label="Profile summary"
        className="min-w-0 border border-line rounded-xl bg-surface font-mono text-[13px] leading-[1.9] overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line text-muted">
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full border border-line" />
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full border border-line" />
          <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full border border-line" />
          <span className="ml-2 text-xs">~/firas</span>
        </div>
        <div className="px-5 pt-4 pb-5">
          <div>
            <span className="text-accent">$</span> whoami --verbose
          </div>
          <dl className="mt-1.5 grid grid-cols-[6rem_minmax(0,1fr)] gap-x-3">
            {whoami.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-muted">{k}</dt>
                <dd className={k === 'status' ? 'text-accent' : undefined}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
