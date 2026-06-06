'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const initParticles = () => {
      const area = width * height;
      const density = Math.max(20, Math.min(60, Math.floor(area / 25000)));
      particlesRef.current = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme === 'dark';
      const particleColor = isDark ? '147, 197, 253' : '59, 130, 246'; // blue-300 / blue-500
      const lineColor = isDark ? '147, 197, 253' : '59, 130, 246';

      const particles = particlesRef.current;
      const maxDistance = 120;
      const mouseDistance = 160;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction
        const dxm = mouseRef.current.x - p.x;
        const dym = mouseRef.current.y - p.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        if (distm < mouseDistance) {
          const force = (mouseDistance - distm) / mouseDistance;
          p.vx -= (dxm / distm) * force * 0.02;
          p.vy -= (dym / distm) * force * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, 0.5)`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse connections
        if (distm < mouseDistance) {
          const opacity = (1 - distm / mouseDistance) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      if (isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animationRef.current) {
          animationRef.current = requestAnimationFrame(draw);
        }
      },
      { threshold: 0 }
    );

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    observer.observe(canvas);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.7 }}
      aria-hidden="true"
    />
  );
}
