import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function Education() {
  return (
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">05</span>Education
          </h1>
        </FadeInStagger>

        <FadeInStagger delay={300}>
          <div className="mt-10 border-t border-line">
            <article className="flex flex-wrap gap-x-10 gap-y-3 py-8 border-b border-line">
              <p className="basis-full sm:basis-48 shrink-0 font-mono text-sm text-muted leading-relaxed">
                Graduated 2025
                <br />
                Tunisia
              </p>
              <div className="flex-1 min-w-0 basis-80">
                <h2 className="text-xl font-semibold">
                  Engineering Diploma in Software Engineering
                </h2>
                <p className="mt-1 text-muted">
                  National Institute of Applied Sciences and Technology (INSAT)
                </p>
                <p className="mt-4 font-mono text-sm text-muted">
                  GPA 15/20 · Very Good Mention
                </p>
                <p className="mt-4 text-muted leading-relaxed max-w-3xl">
                  <span className="font-medium text-fg">Relevant coursework:</span> Software
                  Architecture, DevOps Practices, Cloud Computing, Database Management, Distributed
                  Systems, Containerization Technologies, CI/CD Pipeline Development, Network
                  Administration
                </p>
              </div>
            </article>
          </div>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
