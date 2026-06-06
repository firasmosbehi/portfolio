import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import GitHubActivity from './components/GitHubActivity';
import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <StatsSection />
      <GitHubActivity />
    </PageTransition>
  );
}
