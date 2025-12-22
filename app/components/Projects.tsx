import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="w-full min-h-screen flex items-center justify-center py-28 px-6 bg-white dark:bg-zinc-900 snap-start">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">Featured Projects</h2>
        </FadeInStagger>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kubernetes Taskboard Platform */}
          <FadeInStagger delay={200}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Kubernetes Taskboard Platform</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Deployed production-ready Kubernetes platform on AWS EKS with comprehensive observability stack</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Implemented GitOps workflow using ArgoCD for automated continuous deployment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Configured Kubernetes Gateway API with AWS Application Load Balancer integration</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Kubernetes</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">AWS EKS</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">ArgoCD</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Terraform</span>
            </div>
            </div>
          </FadeInStagger>

          {/* Automated EC2 Deployment Pipeline */}
          <FadeInStagger delay={300}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-cyan-600 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Automated EC2 Deployment Pipeline</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Built automated deployment pipeline combining Terraform and Ansible on AWS EC2</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Integrated GitHub Actions CI/CD workflow for automated infrastructure deployment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Demonstrated Infrastructure as Code best practices with version-controlled automation</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Terraform</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Ansible</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">GitHub Actions</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">AWS EC2</span>
            </div>
            </div>
          </FadeInStagger>

          {/* Task-Board with Full Observability Stack */}
          <FadeInStagger delay={400}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Task-Board with Full Observability Stack</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Developed full-stack application with React frontend and Go backend</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Implemented OpenTelemetry instrumentation for distributed tracing and metrics collection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Created GitHub Actions CI/CD pipeline for automated testing and Docker image publishing</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Go</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">OpenTelemetry</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Docker</span>
            </div>
            </div>
          </FadeInStagger>

          {/* Optimized Dockerfiles Repository */}
          <FadeInStagger delay={500}>
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-cyan-600 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Optimized Dockerfiles Repository</h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Created production-ready optimized Dockerfiles for popular frameworks</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Demonstrated best practices including multi-stage builds and security hardening</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Reduced Docker image sizes by up to 90% through optimization strategies</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm">FastAPI</span>
            </div>
            </div>
          </FadeInStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
