'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  href?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const navigate = useCallback(
    (href: string) => {
      router.push(href);
      onClose();
    },
    [router, onClose]
  );

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('firas.mosbehi@insat.ucar.tn');
      onClose();
    } catch {
      // ignore
    }
  }, [onClose]);

  const allCommands: CommandItem[] = [
    {
      id: 'nav-home',
      title: 'Go to Home',
      subtitle: 'Return to the landing page',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      action: () => navigate('/'),
    },
    {
      id: 'nav-about',
      title: 'Go to About',
      subtitle: 'Learn more about me',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      action: () => navigate('/about'),
    },
    {
      id: 'nav-experience',
      title: 'Go to Experience',
      subtitle: 'View my work history',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      action: () => navigate('/experience'),
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      subtitle: 'See my featured projects',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      action: () => navigate('/projects'),
    },
    {
      id: 'nav-skills',
      title: 'Go to Skills',
      subtitle: 'Browse my technical skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      action: () => navigate('/skills'),
    },
    {
      id: 'nav-education',
      title: 'Go to Education',
      subtitle: 'My academic background',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      action: () => navigate('/education'),
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact',
      subtitle: 'Get in touch',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => navigate('/contact'),
    },
    {
      id: 'action-theme',
      title: `Switch to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle color theme',
      icon: resolvedTheme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'action-copy-email',
      title: 'Copy Email Address',
      subtitle: 'Copy to clipboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      ),
      action: copyEmail,
    },
    {
      id: 'action-cv',
      title: 'View CV / Resume',
      subtitle: 'Open PDF in new tab',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      action: () => {
        window.open('/cv.pdf', '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'action-github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/firasmosbehi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      action: () => {
        window.open('https://github.com/firasmosbehi', '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      id: 'action-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect professionally',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      action: () => {
        window.open('https://linkedin.com/in/firasmosbehi', '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
  ];

  // Simple fuzzy search
  const filteredCommands = query.trim() === ''
    ? allCommands
    : allCommands.filter((cmd) => {
        const q = query.toLowerCase();
        return (
          cmd.title.toLowerCase().includes(q) ||
          (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
          cmd.id.toLowerCase().includes(q)
        );
      });

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = filteredCommands[selectedIndex];
        if (cmd) {
          cmd.action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const selectedItem = list.children[selectedIndex] as HTMLElement | undefined;
    if (selectedItem) {
      selectedItem.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <svg
            className="w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none text-base"
            aria-label="Search commands"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <ul
          ref={listRef}
          className="max-h-[50vh] overflow-y-auto py-2"
          role="listbox"
        >
          {filteredCommands.length === 0 ? (
            <li className="px-4 py-8 text-center text-zinc-500 dark:text-zinc-400">
              No commands found for &quot;{query}&quot;
            </li>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              const content = (
                <div className="flex items-center gap-3 px-4 py-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {cmd.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-medium truncate ${
                        isSelected
                          ? 'text-zinc-900 dark:text-zinc-100'
                          : 'text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      {cmd.title}
                    </div>
                    {cmd.subtitle && (
                      <div className="text-xs text-zinc-500 dark:text-zinc-500 truncate">
                        {cmd.subtitle}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400">
                      ↵
                    </kbd>
                  )}
                </div>
              );

              return (
                <li
                  key={cmd.id}
                  role="option"
                  aria-selected={isSelected}
                  className={`cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-blue-950/30'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                  }`}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  {cmd.href ? (
                    <Link href={cmd.href} className="block" onClick={() => cmd.action()}>
                      {content}
                    </Link>
                  ) : (
                    <button className="w-full text-left">{content}</button>
                  )}
                </li>
              );
            })
          )}
        </ul>

        {/* Footer */}
        <div className="hidden sm:flex items-center justify-between px-4 py-2.5 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">↵</kbd>
              <span>to select</span>
            </span>
          </div>
          <span>{filteredCommands.length} commands</span>
        </div>
      </div>
    </div>
  );
}
