import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import AnimatedSection from '../components/AnimatedSection';
import FadeInStagger from '../components/FadeInStagger';
import GlassCard from '../components/GlassCard';
import PageTransition from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles by Firas Mosbehi on DevSecOps, Kubernetes, cloud infrastructure, and developer tools.',
  openGraph: {
    title: 'Blog | Firas Mosbehi',
    description: 'Technical articles by Firas Mosbehi on DevSecOps, Kubernetes, cloud infrastructure, and developer tools.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageTransition>
      <AnimatedSection className="w-full min-h-screen flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto">
          <FadeInStagger delay={100}>
            <div className="mb-10 sm:mb-14">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Technical{' '}
                <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Deep dives into DevSecOps, Kubernetes, cloud infrastructure, and the open-source
                tools I am building.
              </p>
            </div>
          </FadeInStagger>

          {posts.length === 0 ? (
            <GlassCard className="p-8 text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                No posts yet. Check back soon for new articles!
              </p>
            </GlassCard>
          ) : (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <FadeInStagger key={post.slug} delay={200 + index * 100}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <GlassCard className="p-5 sm:p-7" hover>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h2>
                        <span className="text-sm text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {post.readingTime}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </FadeInStagger>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
