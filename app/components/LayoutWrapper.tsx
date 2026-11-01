import Navigation from './Navigation';
import Footer from './Footer';
import CommandPaletteHost from './CommandPaletteHost';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
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
      <CommandPaletteHost />
    </div>
  );
}
