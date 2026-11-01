'use client';

import Navigation from './Navigation';
import Footer from './Footer';
import CommandPalette from './CommandPalette';
import { useCommandPaletteContext } from './CommandPaletteContext';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen: isCommandPaletteOpen, close: closeCommandPalette } = useCommandPaletteContext();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-fill focus:text-on-fill"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="relative">{children}</main>
      <Footer />
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={closeCommandPalette} />
    </div>
  );
}
