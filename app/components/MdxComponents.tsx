import { codeToHtml } from 'shiki';

interface CodeProps {
  children: string;
  className?: string;
}

async function CodeBlock({ children, className }: CodeProps) {
  const language = className?.replace('language-', '') || 'text';

  const html = await codeToHtml(children, {
    lang: language as never,
    theme: 'github-dark',
  });

  return (
    <div
      className="my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const mdxComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-10 mb-6 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-10 mb-4 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-3 leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-zinc-600 dark:text-zinc-400">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-zinc-600 dark:text-zinc-400">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="text-base sm:text-lg leading-relaxed">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      className="text-blue-600 dark:text-blue-400 hover:underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children, className }: CodeProps) => {
    // Inline code (no className) vs code block (has language- class)
    if (!className) {
      return (
        <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-mono">
          {children}
        </code>
      );
    }
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
  pre: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-blue-500 pl-5 py-1 my-6 italic text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-zinc-200 dark:border-zinc-800" />,
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm text-left border-collapse">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
      {children}
    </td>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>
  ),
};
