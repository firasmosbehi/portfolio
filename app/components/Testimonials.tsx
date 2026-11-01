import Link from 'next/link';
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
  },
  {
    quote:
      'Working with Firas on our CI/CD transformation was a game-changer. He did not just implement pipelines — he built a culture of automation and reliability that the entire team adopted.',
    name: 'Senior DevOps Lead',
    role: 'Nexaminds',
    relation: 'Former Colleague',
    linkedin: '#',
  },
  {
    quote:
      'His deep knowledge of cloud infrastructure and security best practices made him the go-to person for our most critical infrastructure decisions. Highly recommended for any DevSecOps role.',
    name: 'Cloud Architect',
    role: 'Client Project',
    relation: 'Collaborator',
    linkedin: '#',
  },
];

export default function TestimonialsComponent() {
  return (
    <AnimatedSection className="w-full py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">08</span>
            What People Say
          </h1>
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">
            Recommendations and feedback from colleagues, managers, and collaborators I have had
            the pleasure of working with.
          </p>
        </FadeInStagger>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeInStagger key={testimonial.name} delay={200 + index * 100}>
              <GlassCard className="p-6 sm:p-7 h-full flex flex-col" hover={false}>
                <figure className="flex flex-col h-full">
                  <blockquote className="flex-1 text-fg leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="flex items-center gap-3 mt-6 pt-4 border-t border-line">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-fg">{testimonial.name}</div>
                      <div className="mt-0.5 font-mono text-xs text-muted">
                        {testimonial.role} / {testimonial.relation}
                      </div>
                    </div>
                    {testimonial.linkedin && testimonial.linkedin !== '#' && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label={`${testimonial.name}'s LinkedIn profile`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </figcaption>
                </figure>
              </GlassCard>
            </FadeInStagger>
          ))}
        </div>

        <FadeInStagger delay={600}>
          <p className="mt-10 pt-5 border-t border-line text-sm text-muted leading-relaxed">
            <span className="font-mono text-xs text-fg mr-2">NOTE</span>
            These testimonials are representative placeholders based on feedback received during
            past engagements. I am actively collecting formal LinkedIn recommendations to replace
            them with verified, attributed quotes. If we have worked together and you would like to
            contribute a recommendation, please{' '}
            <Link href="/contact" className="text-accent hover:underline">
              reach out
            </Link>
            .
          </p>
        </FadeInStagger>
      </div>
    </AnimatedSection>
  );
}
