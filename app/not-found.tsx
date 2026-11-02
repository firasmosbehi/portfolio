import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
};

const links = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/experience', label: 'experience' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
];

export default function NotFound() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">404</span>
        Page not found
      </h1>
      <p className="mt-3 text-muted max-w-2xl leading-relaxed">
        <span className="font-mono text-fg">$ curl -I</span> came back empty. The page may have moved, or the link is
        wrong.
      </p>
      <ul className="mt-10 max-w-md border-t border-line font-mono text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between py-3 border-b border-line hover:text-accent transition-colors"
            >
              {link.label}
              <span aria-hidden="true" className="text-muted">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
