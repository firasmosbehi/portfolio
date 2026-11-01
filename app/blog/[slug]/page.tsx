import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '../../../lib/blog';
import AnimatedSection from '../../components/AnimatedSection';
import FadeInStagger from '../../components/FadeInStagger';
import PageTransition from '../../components/PageTransition';
import { mdxComponents } from '../../components/MdxComponents';
import remarkGfm from 'remark-gfm';
import { baseOpenGraph } from '../../../lib/seo';

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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      ...baseOpenGraph,
      url: `/blog/${slug}`,
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

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://firasmosbahi.com/blog/${slug}`,
    author: { '@type': 'Person', name: 'Firas Mosbehi', url: 'https://firasmosbahi.com' },
    keywords: post.tags.join(', '),
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        // Escape '<' so frontmatter can't close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, '\\u003c') }}
      />
      <AnimatedSection className="w-full py-20 sm:py-28">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeInStagger delay={100}>
            <header className="mb-10 sm:mb-12 pb-8 border-b border-line">
              <Link href="/blog" className="font-mono text-[13px] text-muted hover:text-accent transition-colors">
                ← all posts
              </Link>
              <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">{post.description}</p>
              <p className="mt-5 font-mono text-xs text-muted">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {[post.readingTime, ...post.tags].map((item) => (
                  <span key={item}> / {item}</span>
                ))}
              </p>
            </header>
          </FadeInStagger>

          <FadeInStagger delay={200}>
            <div>
              <MDXRemote
                source={post.content.replace(/^\s*# [^\n]*\n/, '')}
                components={mdxComponents}
                options={{
                  parseFrontmatter: false,
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
              />
            </div>
          </FadeInStagger>
        </article>
      </AnimatedSection>
    </PageTransition>
  );
}
