interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  const baseClasses =
    'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md ' +
    'border border-white/30 dark:border-zinc-700/40 ' +
    'shadow-lg shadow-zinc-200/40 dark:shadow-black/30 ' +
    'rounded-xl transition-all duration-300 ';

  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:bg-white/80 dark:hover:bg-zinc-900/80 '
    : '';

  return (
    <div className={`${baseClasses}${hoverClasses}${className}`}>
      {children}
    </div>
  );
}
