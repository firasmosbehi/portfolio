import type { Metadata } from 'next';
import { baseOpenGraph, pageAlternates } from '../../lib/seo';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import AnimatedSection from '../components/AnimatedSection';
import FadeInStagger from '../components/FadeInStagger';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles by Firas Mosbehi on DevSecOps, Kubernetes, cloud infrastructure, and developer tools.',
  alternates: pageAlternates('/blog'),
  openGraph: {
    ...baseOpenGraph,
    url: '/blog',
    title: 'Blog | Firas Mosbehi',
    description: 'Technical articles by Firas Mosbehi on DevSecOps, Kubernetes, cloud infrastructure, and developer tools.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageTransition>
      <AnimatedSection className="w-full py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInStagger delay={100}>
            <div className="mb-10 sm:mb-14">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">07</span>
                Blog
              </h1>
              <p className="mt-3 text-muted max-w-2xl leading-relaxed">
                Deep dives into DevSecOps, Kubernetes, cloud infrastructure, and the open-source
                tools I am building.
              </p>
            </div>
          </FadeInStagger>

          {posts.length === 0 ? (
            <p className="border-t border-b border-line py-8 text-muted">
              No posts yet. Check back soon for new articles!
            </p>
          ) : (
            <FadeInStagger delay={200}>
              <ul className="border-t border-line">
                {posts.map((post) => (
                  <li key={post.slug} className="border-b border-line">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-wrap items-baseline gap-x-8 gap-y-2 px-2 py-5"
                    >
                      <time dateTime={post.date} className="basis-30 shrink-0 font-mono text-[13px] text-muted">
                        {new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                      <div className="grow-999 basis-90 min-w-0">
                        <h2 className="text-[17px] font-medium group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <span className="block mt-1 text-sm text-muted leading-relaxed">
                          {post.description}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {[...post.tags.slice(0, 2), post.readingTime].join(' / ')}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInStagger>
          )}
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
