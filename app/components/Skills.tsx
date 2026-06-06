'use client';

import { useRef, useState, MouseEvent } from 'react';
import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

interface SkillItem {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  gridClass: string;
  delay: number;
}

const categories: SkillCategory[] = [
  {
    title: 'Container & Orchestration',
    gridClass: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1',
    delay: 100,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    skills: [
      { name: 'Kubernetes', level: 95 },
      { name: 'Docker', level: 95 },
      { name: 'Helm', level: 85 },
      { name: 'ArgoCD', level: 90 },
      { name: 'Kustomize', level: 80 },
      { name: 'Docker Compose', level: 90 },
    ],
  },
  {
    title: 'Cloud Platforms',
    gridClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-2',
    delay: 200,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: [
      { name: 'AWS EKS', level: 90 },
      { name: 'AWS EC2 / VPC', level: 85 },
      { name: 'AWS S3 / IAM / RDS', level: 80 },
      { name: 'Azure', level: 65 },
    ],
  },
  {
    title: 'Infrastructure as Code',
    gridClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
    delay: 300,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 85 },
      { name: 'CloudFormation', level: 70 },
    ],
  },
  {
    title: 'CI/CD Tools',
    gridClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
    delay: 400,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    skills: [
      { name: 'GitLab CI', level: 90 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Jenkins', level: 85 },
      { name: 'Azure DevOps', level: 70 },
    ],
  },
  {
    title: 'Monitoring & Observability',
    gridClass: 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1',
    delay: 500,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    skills: [
      { name: 'Prometheus & Grafana', level: 90 },
      { name: 'OpenTelemetry', level: 85 },
      { name: 'ELK Stack', level: 80 },
      { name: 'Loki / Tempo', level: 75 },
    ],
  },
  {
    title: 'Security & DevSecOps',
    gridClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
    delay: 600,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    skills: [
      { name: 'Trivy', level: 90 },
      { name: 'SonarQube', level: 80 },
      { name: 'Vault', level: 75 },
      { name: 'OWASP', level: 80 },
    ],
  },
  {
    title: 'Programming',
    gridClass: 'col-span-1 sm:col-span-1 lg:col-span-1 row-span-1',
    delay: 700,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: 'Go', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'Bash / Shell', level: 90 },
      { name: 'TypeScript', level: 75 },
    ],
  },
];

function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          '--spotlight-x': `${position.x}px`,
          '--spotlight-y': `${position.y}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), rgba(59,130,246,0.12), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

function ProficiencyBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
        <span className="text-xs text-zinc-500 dark:text-zinc-500 tabular-nums">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-zinc-200/70 dark:bg-zinc-700/70 overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={50}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Technical Skills
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-12 max-w-2xl">
            Technologies and tools I use to build, deploy, secure, and observe cloud-native
            systems at scale.
          </p>
        </FadeInStagger>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-min">
          {categories.map((category) => (
            <FadeInStagger
              key={category.title}
              delay={category.delay}
              className={category.gridClass}
            >
              <SpotlightCard className="h-full">
                <GlassCard className="p-5 sm:p-6 h-full flex flex-col" hover>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex-1 space-y-3">
                    {category.skills.map((skill, idx) => (
                      <ProficiencyBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={category.delay + idx * 80}
                      />
                    ))}
                  </div>
                </GlassCard>
              </SpotlightCard>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
