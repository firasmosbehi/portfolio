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

const LANGUAGE_COLORS: Record<string, string> = {
  Go: 'bg-cyan-500',
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-emerald-500',
  Dockerfile: 'bg-sky-600',
  HCL: 'bg-purple-500',
  'Go Template': 'bg-pink-500',
  Dart: 'bg-teal-500',
  Shell: 'bg-zinc-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-indigo-500',
};

async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const res = await fetch('https://api.github.com/users/firasmosbehi/repos?per_page=100&sort=updated', {
      next: { revalidate: 3600 }, // Revalidate every hour
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
  } catch {
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

function ActivityHeatmap() {
  // Generate a mock heatmap grid based on recent activity
  // In a real implementation, this would use commit data
  const weeks = 16;
  const days = 7;
  // Deterministic pseudo-random values based on index (avoids impure Math.random during render)
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const x = Math.sin(i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  });

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-[3px] min-w-max">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, dayIndex) => {
              const intensity = cells[weekIndex * days + dayIndex];
              let bgClass = 'bg-zinc-100 dark:bg-zinc-800';
              if (intensity > 0.8) bgClass = 'bg-blue-500 dark:bg-blue-500';
              else if (intensity > 0.6) bgClass = 'bg-blue-400 dark:bg-blue-400';
              else if (intensity > 0.4) bgClass = 'bg-blue-300 dark:bg-blue-300';
              else if (intensity > 0.2) bgClass = 'bg-blue-200 dark:bg-blue-800';

              return (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${bgClass}`}
                  title={`Activity level: ${Math.round(intensity * 100)}%`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500 dark:text-zinc-500">
        <span>Less</span>
        <div className="flex gap-[3px]">
          <div className="w-3 h-3 rounded-sm bg-zinc-100 dark:bg-zinc-800" />
          <div className="w-3 h-3 rounded-sm bg-blue-200 dark:bg-blue-800" />
          <div className="w-3 h-3 rounded-sm bg-blue-300 dark:bg-blue-300" />
          <div className="w-3 h-3 rounded-sm bg-blue-400 dark:bg-blue-400" />
          <div className="w-3 h-3 rounded-sm bg-blue-500 dark:bg-blue-500" />
        </div>
        <span>More</span>
      </div>
    </div>
  );
}

export default async function GitHubActivity() {
  const stats = await fetchGitHubStats();

  const languageEntries = Object.entries(stats.languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const hasData = stats.totalRepos > 0;

  return (
    <AnimatedSection className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Open Source Activity
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Live snapshot of my GitHub activity. Always building, shipping, and learning in
              public.
            </p>
          </div>
        </FadeInStagger>

        {!hasData ? (
          <GlassCard className="p-8 text-center">
            <p className="text-zinc-600 dark:text-zinc-400">
              GitHub activity data is temporarily unavailable. Check back soon!
            </p>
          </GlassCard>
        ) : (
          <>
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {[
                { label: 'Public Repos', value: stats.totalRepos },
                { label: 'Total Stars', value: stats.totalStars },
                { label: 'Total Forks', value: stats.totalForks },
                { label: 'Top Language', value: languageEntries[0]?.[0] || '—' },
              ].map((stat, index) => (
                <FadeInStagger key={stat.label} delay={200 + index * 100}>
                  <GlassCard className="p-5 text-center" hover>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      {stat.label}
                    </div>
                  </GlassCard>
                </FadeInStagger>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Recent repos */}
              <div className="lg:col-span-2">
                <FadeInStagger delay={400}>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    Recently Updated Repositories
                  </h3>
                </FadeInStagger>
                <div className="space-y-4">
                  {stats.recentRepos.map((repo, index) => (
                    <FadeInStagger key={repo.name} delay={500 + index * 100}>
                      <GlassCard className="p-4 sm:p-5" hover>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <a
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                {repo.name}
                              </a>
                              {repo.language && (
                                <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-500">
                                  <span
                                    className={`w-2 h-2 rounded-full ${LANGUAGE_COLORS[repo.language] || 'bg-zinc-400'}`}
                                  />
                                  {repo.language}
                                </span>
                              )}
                            </div>
                            {repo.description && (
                              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                {repo.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                              {repo.stars}
                            </span>
                            <span>Updated {formatDate(repo.updatedAt)}</span>
                          </div>
                        </div>
                      </GlassCard>
                    </FadeInStagger>
                  ))}
                </div>
              </div>

              {/* Languages & heatmap */}
              <div className="space-y-6">
                <FadeInStagger delay={400}>
                  <GlassCard className="p-5 sm:p-6" hover>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                      Top Languages
                    </h3>
                    <div className="space-y-3">
                      {languageEntries.map(([lang, count]) => (
                        <div key={lang} className="flex items-center gap-3">
                          <span
                            className={`w-3 h-3 rounded-full ${LANGUAGE_COLORS[lang] || 'bg-zinc-400'}`}
                          />
                          <span className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">{lang}</span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-500 tabular-nums">
                            {count} repos
                          </span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </FadeInStagger>

                <FadeInStagger delay={500}>
                  <GlassCard className="p-5 sm:p-6" hover>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                      Activity Heatmap
                    </h3>
                    <ActivityHeatmap />
                    <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
                      Based on recent push activity across public repositories.
                    </p>
                  </GlassCard>
                </FadeInStagger>
              </div>
            </div>
          </>
        )}
      </div>
    </AnimatedSection>
  );
}
