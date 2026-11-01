import { codeToHtml } from 'shiki';

interface CodeProps {
  children: string;
  className?: string;
}

async function CodeBlock({ children, className }: CodeProps) {
  const language = className?.replace('language-', '') || 'text';

  // Dual themes: light colors inline, dark colors as --shiki-dark vars swapped in under .dark below.
  const html = await codeToHtml(children, {
    lang: language as never,
    themes: { light: 'github-light', dark: 'github-dark' },
  });

  return (
    <div
      className="my-6 rounded-lg overflow-hidden border border-line bg-surface text-sm leading-relaxed [&_pre]:bg-surface! [&_pre]:p-4 [&_pre]:overflow-x-auto [&_code]:font-mono dark:[&_pre]:text-(--shiki-dark)! dark:[&_span]:text-(--shiki-dark)!"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

type Props = { children?: React.ReactNode };

export const mdxComponents = {
  // The post title is the page's only h1, so MDX headings shift down one level.
  h1: ({ children }: Props) => (
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-12 mb-4 leading-tight">{children}</h2>
  ),
  h2: ({ children }: Props) => (
    <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4 leading-tight">{children}</h2>
  ),
  h3: ({ children }: Props) => (
    <h3 className="text-xl font-semibold tracking-tight mt-8 mb-3 leading-tight">{children}</h3>
  ),
  p: ({ children }: Props) => <p className="text-base sm:text-[17px] mb-5 leading-relaxed">{children}</p>,
  ul: ({ children }: Props) => <ul className="list-disc pl-6 mb-5 space-y-2 marker:text-muted">{children}</ul>,
  ol: ({ children }: Props) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 marker:font-mono marker:text-muted">{children}</ol>
  ),
  li: ({ children }: Props) => <li className="text-base sm:text-[17px] leading-relaxed">{children}</li>,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      className="text-accent underline underline-offset-4"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children, className }: CodeProps) => {
    // Inline code (no className) vs code block (has language- class)
    if (!className) {
      return <code className="font-mono text-[0.9em] bg-surface border border-line px-1 rounded">{children}</code>;
    }
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
  pre: ({ children }: Props) => <>{children}</>,
  blockquote: ({ children }: Props) => (
    <blockquote className="border-l-2 border-line pl-4 my-6 text-muted [&_p]:text-muted">{children}</blockquote>
  ),
  hr: () => <hr className="my-10 border-line" />,
  table: ({ children }: Props) => (
    <div className="overflow-x-auto my-6 border border-line rounded-lg">
      <table className="w-full text-sm text-left border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: Props) => (
    <th className="px-4 py-3 font-mono text-xs font-medium text-muted bg-surface border-b border-line">{children}</th>
  ),
  td: ({ children }: Props) => <td className="px-4 py-3 border-b border-line">{children}</td>,
  strong: ({ children }: Props) => <strong className="font-semibold text-fg">{children}</strong>,
};
