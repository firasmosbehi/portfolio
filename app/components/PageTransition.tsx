// CSS-only enter animation: content is in the SSR HTML and paints without JS.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
