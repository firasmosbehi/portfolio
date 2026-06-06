import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

export default function Education() {
  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-white dark:bg-zinc-900">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 sm:mb-12">
            Education
          </h2>
        </FadeInStagger>

        <FadeInStagger delay={300}>
          <GlassCard className="p-5 sm:p-7 md:p-8 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300" />
            <div className="pl-4 sm:pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Engineering Diploma in Software Engineering
                  </h3>
                  <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium">
                    National School of Applied Sciences and Technologies (INSAT)
                  </p>
                  <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500">Tunisia</p>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium mt-2 md:mt-0">
                  Graduated: 2025
                </p>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-2">
                GPA: 15/20 | Honors: Very Good Mention
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold">Relevant Coursework:</span> Software Architecture,
                DevOps Practices, Cloud Computing, Database Management, Distributed Systems,
                Containerization Technologies, CI/CD Pipeline Development, Network Administration
              </p>
            </div>
          </GlassCard>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
