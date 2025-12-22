'use client';

import { useEffect } from 'react';

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();

        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;

        // Find current section
        let currentIndex = 0;
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            currentIndex = index;
          }
        });

        // Navigate to next or previous section
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
          sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth">
      {children}
    </div>
  );
}
