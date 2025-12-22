import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function About() {
  return (
    <AnimatedSection id="about" className="w-full min-h-screen flex items-center justify-center py-20 px-6 bg-white dark:bg-zinc-900 snap-start">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">About Me</h2>
        </FadeInStagger>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <FadeInStagger delay={300}>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Results-driven DevOps Engineer with 2 years of hands-on experience in automating deployment pipelines,
              managing cloud infrastructure, and implementing CI/CD solutions. Proven expertise in containerization
              technologies, infrastructure as code, and cloud platforms including AWS and Azure.
            </p>
          </FadeInStagger>
          <FadeInStagger delay={500}>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              Strong track record of reducing deployment times, improving system reliability, and fostering collaboration
              between development and operations teams. Passionate about leveraging automation and modern DevOps practices
              to optimize software delivery processes and enhance operational efficiency.
            </p>
          </FadeInStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
