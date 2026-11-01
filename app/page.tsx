import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import SelectedWork from './components/SelectedWork';
import LatestPosts from './components/LatestPosts';
import GitHubActivity from './components/GitHubActivity';
import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <StatsSection />
      <SelectedWork />
      <LatestPosts />
      <GitHubActivity />
    </PageTransition>
  );
}
