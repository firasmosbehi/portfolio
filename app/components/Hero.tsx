import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function Hero() {
  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center px-6 snap-start">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <FadeInStagger delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Hi, I&apos;m <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Firas Mosbehi</span>
              </h1>
            </FadeInStagger>
            <FadeInStagger delay={300}>
              <h2 className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 mb-6">
                DevSecOps Engineer
              </h2>
            </FadeInStagger>
            <FadeInStagger delay={500}>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Based in Saint Etienne, France. Specializing in automating deployment pipelines, managing cloud infrastructure, and implementing CI/CD solutions.
              </p>
            </FadeInStagger>
            <FadeInStagger delay={700}>
              <div className="flex gap-4">
                <a
                  href="mailto:firas.mosbehi@insat.ucar.tn"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:scale-105 transition-all duration-300 font-medium"
                >
                  View CV
                </a>
              </div>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
