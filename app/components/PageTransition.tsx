'use client';

import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="transition-all will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.995)',
        transitionDuration: isVisible ? '600ms' : '200ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}
