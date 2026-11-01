import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function About() {
  return (
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">01</span>About
          </h1>
        </FadeInStagger>

        <div className="mt-10 border-t border-line pt-10 max-w-3xl">
          <FadeInStagger delay={300}>
            <p className="text-lg text-muted leading-relaxed">
              Results-driven DevSecOps Engineer with 3+ years of hands-on experience in automating
              deployment pipelines, managing cloud infrastructure, and implementing CI/CD
              solutions. Proven expertise in containerization technologies, infrastructure as
              code, and cloud platforms including AWS and Azure.
            </p>
          </FadeInStagger>
          <FadeInStagger delay={500}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Strong track record of reducing deployment times, improving system reliability, and
              fostering collaboration between development and operations teams. Passionate about
              leveraging automation and modern DevOps practices to optimize software delivery
              processes and enhance operational efficiency.
            </p>
          </FadeInStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
