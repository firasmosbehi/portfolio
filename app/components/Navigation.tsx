'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import CommandPaletteTrigger from './CommandPaletteTrigger';

const primaryLinks = [
  { href: '/about', label: 'about' },
  { href: '/experience', label: 'experience' },
  { href: '/projects', label: 'projects' },
  { href: '/skills', label: 'skills' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
];

const allLinks = [
  ...primaryLinks.slice(0, 4),
  { href: '/education', label: 'education' },
  { href: '/certifications', label: 'certifications' },
  { href: '/blog', label: 'blog' },
  { href: '/testimonials', label: 'reviews' },
  { href: '/now', label: 'now' },
  { href: '/contact', label: 'contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // On the <header> so taps inside the mobile panel aren't treated as outside clicks
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-line">
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-[15px] text-fg hover:text-fg">
          <span className="font-mono text-xs border border-line rounded px-1.5 py-1">FM</span>
          firas mosbehi
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-6 font-mono text-[13px]">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`transition-colors hover:text-accent ${isActive(link.href) ? 'text-fg' : 'text-muted'}`}
            >
              {link.label}
            </Link>
          ))}
          <CommandPaletteTrigger showLabel={false} />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <CommandPaletteTrigger showLabel={false} showShortcut={false} size="sm" />
          <ThemeToggle />
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-fg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isMobileMenuOpen}
        className="md:hidden border-t border-line bg-bg max-h-[calc(100dvh-4rem)] overflow-y-auto"
      >
        <ul className="px-4 py-3 font-mono text-sm">
          {allLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex items-center justify-between py-3 border-b border-line last:border-b-0 ${isActive(link.href) ? 'text-accent' : 'text-fg'}`}
              >
                {link.label}
                <span aria-hidden="true" className="text-muted">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
