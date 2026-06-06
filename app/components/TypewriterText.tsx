'use client';

import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  words,
  className = '',
  cursorClassName = 'text-blue-600 dark:text-blue-400',
  typingSpeed,
  deletingSpeed,
  pauseDuration,
}: TypewriterTextProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const text = useTypewriter({
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  });

  if (prefersReducedMotion) {
    return (
      <span className={className} aria-label={words.join(', ')}>
        {words[0]}
      </span>
    );
  }

  return (
    <span className={className} aria-label={words.join(', ')}>
      {text}
      <span
        className={`inline-block w-[3px] h-[1em] ml-1 align-middle animate-pulse ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
}
