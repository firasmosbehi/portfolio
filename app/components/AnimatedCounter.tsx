'use client';

import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { displayValue, start } = useCountUp({
    end,
    duration,
    startOnMount: false,
    suffix,
    prefix,
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      start();
    }
  }, [isVisible, start]);

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {end}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${end}${suffix}`}>
      {displayValue}
    </span>
  );
}
