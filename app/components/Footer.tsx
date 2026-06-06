'use client';

import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR/FCP
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const el = footerRef.current;
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (!inViewport) {
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`w-full py-8 px-6 border-t border-zinc-200 dark:border-zinc-800 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="w-full max-w-7xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
        <p>© 2025 Firas Mosbehi. All rights reserved.</p>
      </div>
    </footer>
  );
}
