import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '../../../lib/blog';
import AnimatedSection from '../../components/AnimatedSection';
import FadeInStagger from '../../components/FadeInStagger';
import GlassCard from '../../components/GlassCard';
import PageTransition from '../../components/PageTransition';
import { mdxComponents } from '../../components/MdxComponents';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Firas Mosbehi`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageTransition>
      <AnimatedSection className="w-full min-h-screen py-20 sm:py-24 px-4 sm:px-6">
        <div className="w-full max-w-3xl mx-auto">
          <FadeInStagger delay={100}>
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-zinc-500 dark:text-zinc-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeInStagger>

          <FadeInStagger delay={200}>
            <GlassCard className="p-6 sm:p-8 md:p-10" hover={false}>
              <article className="prose dark:prose-invert max-w-none">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{
                    parseFrontmatter: false,
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </article>
            </GlassCard>
          </FadeInStagger>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
