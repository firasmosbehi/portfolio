'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(true); // Start visible to avoid FCP/LCP penalty
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    // Only hide and animate elements that are initially below the viewport
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
        rootMargin: '0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${className} transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transform: 'translateZ(0)' }} // Hardware acceleration for mobile
    >
      {children}
    </section>
  );
}
