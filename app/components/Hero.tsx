import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';
import TypewriterText from './TypewriterText';
import ParticleCanvas from './ParticleCanvas';
import AnimatedAvatar from './AnimatedAvatar';

const ROLES = [
  'DevSecOps Engineer',
  'Kubernetes Expert',
  'Cloud Infrastructure Architect',
  'Open Source Contributor',
];

export default function Hero() {
  return (
    <AnimatedSection
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden"
      id="home"
    >
      <ParticleCanvas />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">
          <article className="flex-1 text-center md:text-left order-2 md:order-1">
            <FadeInStagger delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Hi, I&apos;m{' '}
                <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Firas Mosbehi
                </span>
              </h1>
            </FadeInStagger>
            <FadeInStagger delay={300}>
              <p
                className="text-xl sm:text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 mb-6 min-h-[1.5em]"
                role="doc-subtitle"
              >
                <TypewriterText
                  words={ROLES}
                  className="font-medium"
                  cursorClassName="text-blue-600 dark:text-cyan-400"
                />
              </p>
            </FadeInStagger>
            <FadeInStagger delay={500}>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Based in Saint Etienne, France. Specializing in automating deployment pipelines,
                managing cloud infrastructure, and implementing CI/CD solutions.
              </p>
            </FadeInStagger>
            <FadeInStagger delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-center touch-manipulation"
                  aria-label="Get in Touch - Contact Firas Mosbehi"
                >
                  Get in Touch
                </Link>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 active:scale-95 hover:scale-105 transition-all duration-300 font-medium text-center touch-manipulation"
                  aria-label="View CV - Download Firas Mosbehi's CV (PDF)"
                >
                  View CV
                </a>
              </div>
            </FadeInStagger>
          </article>

          <div className="flex-1 flex flex-col items-center gap-6 order-1 md:order-2 w-full max-w-sm md:max-w-none">
            <FadeInStagger delay={400} className="w-full">
              <AnimatedAvatar />
            </FadeInStagger>

            <FadeInStagger delay={600} className="w-full hidden md:block">
              <GlassCard className="p-5 lg:p-6" hover>
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                      3+
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-600 dark:text-zinc-400">
                      Years
                    </div>
                  </div>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-0.5">
                      30+
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-600 dark:text-zinc-400">
                      Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                      99.9%
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-600 dark:text-zinc-400">
                      Uptime
                    </div>
                  </div>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-0.5">
                      60%
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-600 dark:text-zinc-400">
                      Faster
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
