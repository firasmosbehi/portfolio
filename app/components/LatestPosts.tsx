import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 4);
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="writing-title" className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28">
      <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="writing-title" className="text-3xl font-semibold tracking-tight">
          <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">02</span>
          Writing
        </h2>
        <Link href="/blog" className="font-mono text-[13px] text-muted hover:text-accent transition-colors">
          all posts <span aria-hidden="true">→</span>
        </Link>
      </div>
      <ul className="border-t border-line">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-line">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-wrap items-baseline gap-x-8 gap-y-2 px-2 py-5 hover:bg-surface transition-colors"
            >
              <time dateTime={post.date} className="w-28 shrink-0 font-mono text-[13px] text-muted">
                {post.date.slice(0, 10)}
              </time>
              <span className="flex-[999_1_22rem] min-w-0 text-[17px] font-medium">{post.title}</span>
              {post.tags[0] && <span className="font-mono text-xs text-muted">{post.tags[0]}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
