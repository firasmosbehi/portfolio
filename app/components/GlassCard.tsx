interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// Hairline panel on the surface token. Name kept so existing imports don't churn.
export default function GlassCard({
  children,
  className = '',
  hover = true,
}: GlassCardProps) {
  const hoverClasses = hover ? 'hover:border-muted/60 ' : '';

  return (
    <div className={`bg-surface border border-line rounded-xl transition-colors duration-200 ${hoverClasses}${className}`}>
      {children}
    </div>
  );
}
