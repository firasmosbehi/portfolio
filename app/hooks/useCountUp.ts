'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnMount?: boolean;
  suffix?: string;
  prefix?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function useCountUp({
  end,
  duration = 2000,
  startOnMount = true,
  suffix = '',
  prefix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const start = useCallback(() => {
    if (hasStarted) return;

    // Defer start to next tick to avoid synchronous setState during render
    setTimeout(() => {
      setHasStarted(true);
      const startTime = performance.now();
      let rafId: number;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(easedProgress * end);

        setCount(currentValue);

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      rafId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(rafId);
    }, 0);
  }, [end, duration, hasStarted]);

  useEffect(() => {
    if (startOnMount) {
      start();
    }
  }, [startOnMount, start]);

  return {
    value: count,
    displayValue: `${prefix}${count}${suffix}`,
    start,
    hasStarted,
  };
}
