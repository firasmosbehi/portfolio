import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

const testimonials = [
  {
    quote:
      'Firas has an exceptional ability to bridge the gap between development and operations. His work on our Kubernetes migration reduced deployment friction by 70% and dramatically improved our incident response times.',
    name: 'Engineering Manager',
    role: 'The QA Company',
    relation: 'Direct Manager',
    linkedin: '#',
    initials: 'EM',
    color: 'blue',
  },
  {
    quote:
      'Working with Firas on our CI/CD transformation was a game-changer. He did not just implement pipelines — he built a culture of automation and reliability that the entire team adopted.',
    name: 'Senior DevOps Lead',
    role: 'Nexaminds',
    relation: 'Former Colleague',
    linkedin: '#',
    initials: 'DL',
    color: 'cyan',
  },
  {
    quote:
      'His deep knowledge of cloud infrastructure and security best practices made him the go-to person for our most critical infrastructure decisions. Highly recommended for any DevSecOps role.',
    name: 'Cloud Architect',
    role: 'Client Project',
    relation: 'Collaborator',
    linkedin: '#',
    initials: 'CA',
    color: 'purple',
  },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
};

export default function TestimonialsComponent() {
  return (
    <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <FadeInStagger delay={100}>
          <div className="mb-8 sm:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              What People{' '}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Say
              </span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Recommendations and feedback from colleagues, managers, and collaborators I have had
              the pleasure of working with.
            </p>
          </div>
        </FadeInStagger>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInStagger key={testimonial.name} delay={200 + index * 100}>
              <GlassCard className="p-6 sm:p-8 h-full flex flex-col" hover>
                {/* Quote icon */}
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="flex-1 text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/50 dark:border-zinc-700/30">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ${colorClasses[testimonial.color]}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500">
                      {testimonial.role} · {testimonial.relation}
                    </div>
                  </div>
                  {testimonial.linkedin && testimonial.linkedin !== '#' && (
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`${testimonial.name}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </GlassCard>
            </FadeInStagger>
          ))}
        </div>

        <FadeInStagger delay={600}>
          <div className="mt-10 p-5 sm:p-6 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold">Note:</span> These testimonials are representative
              placeholders based on feedback received during past engagements. I am actively
              collecting formal LinkedIn recommendations to replace them with verified, attributed
              quotes. If we have worked together and you would like to contribute a recommendation,
              please{' '}
              <a
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                reach out
              </a>
              .
            </p>
          </div>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
