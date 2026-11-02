'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">500</span>
        Something broke
      </h1>
      <p className="mt-3 text-muted max-w-2xl leading-relaxed">This page hit an unexpected error. Try again, or head back home.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center h-12 px-5 rounded-lg bg-fill text-on-fill font-semibold"
        >
          Try again
        </button>
        <Link href="/" className="inline-flex items-center h-12 px-5 rounded-lg border border-line font-medium hover:border-muted">
          Back home
        </Link>
      </div>
    </section>
  );
}
