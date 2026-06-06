'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInStagger({ children, className = '', delay = 0 }: FadeInStaggerProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible for SSR/FCP
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const el = elementRef.current;
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
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
