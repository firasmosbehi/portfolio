'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

const field =
  'w-full h-12 px-4 rounded-lg bg-bg border border-line text-fg placeholder:text-muted focus:border-accent transition-colors';
const label = 'block font-mono text-xs text-muted mb-2';

const links = [
  { label: 'email', value: 'firas.mosbehi@insat.ucar.tn', href: 'mailto:firas.mosbehi@insat.ucar.tn' },
  { label: 'github', value: 'github.com/firasmosbehi', href: 'https://github.com/firasmosbehi' },
  { label: 'linkedin', value: 'linkedin.com/in/firasmosbehi', href: 'https://linkedin.com/in/firasmosbehi' },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  // The form (and its focused submit button) unmounts on success; move focus so it isn't lost
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Non-JSON bodies (e.g. a proxy's 502 HTML page) fall through to the generic error
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  return (
    <AnimatedSection className="w-full py-20 sm:py-28" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">10</span>Get in Touch
          </h1>
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">
            I&apos;m always interested in hearing about new opportunities, collaborations, and
            interesting DevSecOps challenges.
          </p>
        </FadeInStagger>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact info */}
          <FadeInStagger delay={200} className="lg:col-span-2">
            <ul className="border-t border-line font-mono text-sm">
              {links.map((link) => {
                const external = link.href.startsWith('http');
                return (
                  <li key={link.label} className="border-b border-line">
                    <a
                      href={link.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-baseline gap-4 py-4 hover:text-accent transition-colors"
                    >
                      <span className="w-20 shrink-0 text-muted">{link.label}</span>
                      <span className="break-all">{link.value}</span>
                    </a>
                  </li>
                );
              })}
              <li className="flex items-baseline gap-4 py-4 border-b border-line">
                <span className="w-20 shrink-0 text-muted">location</span>
                <span>Saint Etienne, France</span>
              </li>
            </ul>
          </FadeInStagger>

          {/* Contact form */}
          <FadeInStagger delay={300} className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8" hover={false}>
              {status === 'success' ? (
                <div ref={successRef} tabIndex={-1} className="py-6 outline-none" role="status">
                  <p className="font-mono text-xs text-accent">status: sent</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">Message Sent!</h2>
                  <p className="mt-2 text-muted leading-relaxed">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center h-12 px-5 rounded-lg border border-line font-medium hover:border-muted transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={label}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        autoComplete="name"
                        className={field}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={label}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className={field}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={label}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={field}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      aria-describedby="message-count"
                      className={`${field} h-auto min-h-36 py-3 resize-y`}
                      placeholder="Tell me about your project or opportunity..."
                    />
                    <p id="message-count" className="mt-1.5 font-mono text-xs text-muted text-right">
                      {formData.message.length}/5000
                    </p>
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-lg bg-fill text-on-fill font-semibold w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </FadeInStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
