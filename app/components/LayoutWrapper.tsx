'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  const routes = ['/', '/about', '/experience', '/projects', '/skills', '/education', '/contact'];

  const navigateToRoute = (direction: 'up' | 'down') => {
    if (isNavigating) return;

    const currentIndex = routes.indexOf(pathname);

    if (direction === 'down' && currentIndex < routes.length - 1) {
      setIsNavigating(true);
      router.push(routes[currentIndex + 1]);
      setTimeout(() => setIsNavigating(false), 800);
    } else if (direction === 'up' && currentIndex > 0) {
      setIsNavigating(true);
      router.push(routes[currentIndex - 1]);
      setTimeout(() => setIsNavigating(false), 800);
    }
  };

  useEffect(() => {
    // Check if device is mobile/tablet
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 1024;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable keyboard navigation on mobile
      if (isMobile) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToRoute(e.key === 'ArrowDown' ? 'down' : 'up');
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Only enable wheel navigation on desktop
      if (isMobile) return;

      // Clear existing timeout
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }

      // Set a new timeout to debounce wheel events
      wheelTimeout.current = setTimeout(() => {
        if (Math.abs(e.deltaY) > 10) {
          navigateToRoute(e.deltaY > 0 ? 'down' : 'up');
        }
      }, 50);
    };

    // Only add listeners on desktop
    if (!isMobile) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel, { passive: true });
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
      }
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, [pathname, isNavigating]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black lg:overflow-hidden overflow-y-auto">
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
