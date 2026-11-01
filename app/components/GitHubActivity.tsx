import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';
import GlassCard from './GlassCard';

interface Repo {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  updatedAt: string;
  url: string;
}

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  recentRepos: Repo[];
  languages: Record<string, number>;
}

async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch('https://api.github.com/users/firasmosbehi/repos?per_page=100&sort=updated', {
      next: { revalidate: 3600 }, // Revalidate every hour
      // Unauthenticated calls share a 60 req/h limit per IP
      headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : undefined,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const repos = await res.json();
    const publicRepos = repos.filter((r: { fork: boolean }) => !r.fork);

    const totalStars = publicRepos.reduce(
      (sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count,
      0
    );
    const totalForks = publicRepos.reduce(
      (sum: number, r: { forks_count: number }) => sum + r.forks_count,
      0
    );

    const recentRepos = publicRepos
      .slice(0, 6)
      .map((r: { name: string; description: string | null; stargazers_count: number; language: string | null; updated_at: string; html_url: string }) => ({
        name: r.name,
        description: r.description,
        stars: r.stargazers_count,
        language: r.language,
        updatedAt: r.updated_at,
        url: r.html_url,
      }));

    const languages: Record<string, number> = {};
    publicRepos.forEach((r: { language: string | null }) => {
      if (r.language) {
        languages[r.language] = (languages[r.language] || 0) + 1;
      }
    });

    return {
      totalRepos: publicRepos.length,
      totalStars,
      totalForks,
      recentRepos,
      languages,
    };
  } catch (err) {
    // At runtime, throw so ISR keeps serving the last good page instead of caching the
    // empty state for the whole revalidate window. Build and dev fall back to the empty state.
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE !== 'phase-production-build') {
      throw err;
    }
    return {
      totalRepos: 0,
      totalStars: 0,
      totalForks: 0,
      recentRepos: [],
      languages: {},
    };
  }
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

export default async function GitHubActivity() {
  const stats = await fetchGitHubStats();

  const languageEntries = Object.entries(stats.languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const maxLang = languageEntries[0]?.[1] || 1;

  const hasData = stats.totalRepos > 0;

  return (
    <AnimatedSection className="w-full py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInStagger delay={100}>
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className="font-mono text-sm font-medium text-accent mr-3.5 align-middle">03</span>
              GitHub activity
            </h2>
            <p className="mt-3 text-muted max-w-2xl leading-relaxed">
              Live snapshot of my GitHub activity. Always building, shipping, and learning in
              public.
            </p>
          </div>
        </FadeInStagger>

        {!hasData ? (
          <GlassCard className="p-8 text-center" hover={false}>
            <p className="text-muted">
              GitHub activity data is temporarily unavailable. Check back soon!
            </p>
          </GlassCard>
        ) : (
          <>
            {/* Stats grid */}
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-xl overflow-hidden mb-12">
              {[
                { label: 'Public repos', value: stats.totalRepos },
                { label: 'Total stars', value: stats.totalStars },
                { label: 'Total forks', value: stats.totalForks },
                { label: 'Top language', value: languageEntries[0]?.[0] || '—' },
              ].map((stat) => (
                <div key={stat.label} className="bg-bg p-5 sm:p-6">
                  <dt className="font-mono text-xs text-muted uppercase tracking-wider">{stat.label}</dt>
                  <dd className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Recent repos */}
              <div className="lg:col-span-2">
                <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
                  Recently updated repositories
                </h3>
                <ul className="border-t border-line divide-y divide-line">
                  {stats.recentRepos.map((repo) => (
                    <li key={repo.name} className="py-4 sm:py-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-3 flex-wrap">
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-accent transition-colors"
                            >
                              {repo.name}
                            </a>
                            {repo.language && (
                              <span className="font-mono text-xs text-muted">{repo.language.toLowerCase()}</span>
                            )}
                          </div>
                          {repo.description && (
                            <p className="mt-1 text-sm text-muted line-clamp-2">{repo.description}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-3 font-mono text-xs text-muted flex-shrink-0">
                          <span><span aria-hidden="true">★ </span>{repo.stars}<span className="sr-only"> stars</span></span>
                          <span>updated {formatDate(repo.updatedAt)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="space-y-10">
                <div>
                  <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
                    Top languages
                  </h3>
                  <ul className="space-y-3">
                    {languageEntries.map(([lang, count]) => (
                      <li key={lang}>
                        <div className="flex items-baseline justify-between text-sm">
                          <span>{lang}</span>
                          <span className="font-mono text-xs text-muted tabular-nums">{count} repos</span>
                        </div>
                        <div className="mt-1.5 h-1 rounded-full bg-line overflow-hidden">
                          <div className="h-full bg-accent" style={{ width: `${(count / maxLang) * 100}%` }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AnimatedSection>
  );
}
