import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  {
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100/70 dark:bg-blue-900/30',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Open Source Projects',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-100/70 dark:bg-cyan-900/30',
  },
  {
    value: 8,
    suffix: '',
    label: 'Total Stars Earned',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-100/70 dark:bg-amber-900/30',
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Uptime Achieved',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-100/70 dark:bg-emerald-900/30',
  },
  {
    value: 60,
    suffix: '%',
    label: 'Faster Deployments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100/70 dark:bg-purple-900/30',
  },
];

export default function StatsSection() {
  return (
    <AnimatedSection className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 sm:mb-12 text-center">
            Impact in Numbers
          </h2>
        </FadeInStagger>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <FadeInStagger key={stat.label} delay={200 + index * 100}>
              <GlassCard className="p-5 sm:p-6 text-center h-full flex flex-col items-center" hover>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${stat.bg} ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color}`}>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </GlassCard>
            </FadeInStagger>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
