import AnimatedSection from './AnimatedSection';
import FadeInStagger from './FadeInStagger';

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="w-full min-h-screen flex items-center justify-center py-24 px-6 snap-start">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">Experience</h2>
        </FadeInStagger>

        <div className="space-y-12">
          {/* DevSecOps Engineer */}
          <FadeInStagger delay={300}>
            <div className="border-l-4 border-blue-600 pl-6 hover:border-blue-500 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">DevSecOps Engineer</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">The QA Company</p>
                <p className="text-zinc-500 dark:text-zinc-500">Saint-Étienne, France</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">02/2025 – Present</p>
            </div>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Designed and implemented secure DevOps practices integrating security testing into CI/CD pipelines, reducing vulnerabilities by implementing automated security scanning tools</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Architected and deployed high-availability infrastructure across multiple environments ensuring 99.9% uptime and seamless failover capabilities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Established comprehensive monitoring and alerting systems using Prometheus and Grafana to ensure system reliability and rapid incident response</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                <span>Implemented infrastructure as code using Terraform and Ansible for consistent multi-environment deployments</span>
              </li>
            </ul>
            </div>
          </FadeInStagger>

          {/* DevOps Developer */}
          <FadeInStagger delay={500}>
            <div className="border-l-4 border-cyan-600 pl-6 hover:border-cyan-500 transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">DevOps Developer</h3>
                <p className="text-lg text-cyan-600 dark:text-cyan-400 font-medium">Nexaminds</p>
                <p className="text-zinc-500 dark:text-zinc-500">Tunisia</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">09/2023 – 11/2024</p>
            </div>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Developed and maintained CI/CD pipelines using GitLab CI, automating build, test, and deployment processes for microservices applications</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Orchestrated containerized microservices deployments on Kubernetes clusters, implementing auto-scaling, service mesh, and load balancing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Created Docker containerization strategies reducing deployment time by 60% and improving environment consistency</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-1.5">•</span>
                <span>Implemented monitoring solutions and logging aggregation using ELK stack to track application performance</span>
              </li>
            </ul>
            </div>
          </FadeInStagger>
        </div>
      </div>
    </AnimatedSection>
  );
}
