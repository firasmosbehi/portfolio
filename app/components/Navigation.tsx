'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import CommandPaletteTrigger from './CommandPaletteTrigger';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/education', label: 'Education' },
    { href: '/certifications', label: 'Certs' },
    { href: '/blog', label: 'Blog' },
    { href: '/testimonials', label: 'Reviews' },
    { href: '/now', label: 'Now' },
    { href: '/contact', label: 'Contact' },
  ];

  const navContainerClasses = `fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`;

  return (
    <nav ref={navRef} className={navContainerClasses}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Firas Mosbehi
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-4 lg:gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-110 transition-all duration-200 ${isActive(link.href) ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <CommandPaletteTrigger />
          </div>
          <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <CommandPaletteTrigger showLabel={false} showShortcut={false} size="sm" />
          <ThemeToggle />
          <button
            className="w-10 h-10 flex items-center justify-center text-zinc-900 dark:text-zinc-100 active:scale-95 transition-transform touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out will-change-[max-height,opacity] ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 space-y-2 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-zinc-200 dark:border-zinc-800">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-zinc-600 dark:text-zinc-400 active:scale-95 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 touch-manipulation ${isActive(link.href) ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : '0ms',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
