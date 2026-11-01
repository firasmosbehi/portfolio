import Link from 'next/link';

const links = [
  { href: '/education', label: 'education' },
  { href: '/certifications', label: 'certs' },
  { href: '/testimonials', label: 'reviews' },
  { href: '/now', label: 'now' },
  { href: 'https://github.com/firasmosbehi', label: 'github' },
  { href: 'https://linkedin.com/in/firasmosbehi', label: 'linkedin' },
  { href: '/feed.xml', label: 'rss' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-4 sm:justify-between font-mono text-[13px] text-muted">
        <span>© {new Date().getFullYear()} Firas Mosbehi</span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) =>
            link.href.startsWith('http') ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
