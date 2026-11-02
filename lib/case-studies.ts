// Project case studies rendered at /projects/[slug].
// Every fact here comes from the project's own README; keep it that way (no invented metrics).

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  stack: string[];
  repo: string;
  goal: string[];
  architecture: { layer: string; items: string[] }[];
  decisions: { title: string; body: string }[];
  highlights: string[];
  extra?: { title: string; items: string[] };
  related?: { label: string; href: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'taskboard-kubernetes',
    title: 'Kubernetes Taskboard Platform',
    tagline: 'A production-shaped EKS platform: Terraform, GitOps, Gateway API and full observability.',
    summary:
      'An Infrastructure as Code bundle that stands up a complete cloud-native stack on AWS EKS — network, cluster, GitOps delivery, routing and a full observability stack — for a React + Go application backed by PostgreSQL.',
    stack: ['Terraform', 'AWS EKS', 'ArgoCD', 'Kustomize', 'Gateway API', 'Prometheus', 'Loki', 'Tempo', 'OpenTelemetry', 'Grafana'],
    repo: 'https://github.com/firasmosbehi/taskboard-kubernetes',
    goal: [
      'Go beyond "a cluster that runs": provision the whole path from VPC to dashboards from code, so the platform can be rebuilt from an empty AWS account.',
      'Deliver application changes through Git only, with the cluster continuously reconciled to what is declared.',
      'Make every request observable — metrics, logs and traces — from day one rather than bolted on later.',
    ],
    architecture: [
      { layer: 'Edge', items: ['Gateway API Gateway backed by an AWS Application Load Balancer', 'HTTPRoutes for the frontend, backend API, Grafana and Prometheus'] },
      { layer: 'Application', items: ['React frontend served by Nginx', 'Go REST API', 'PostgreSQL on Amazon RDS'] },
      { layer: 'Observability', items: ['OpenTelemetry Collector as the telemetry pipeline', 'Prometheus (metrics), Loki (logs), Tempo (traces)', 'Grafana dashboards over all three'] },
      { layer: 'Delivery', items: ['ArgoCD with auto-sync, auto-prune and self-healing', 'Kustomize-managed manifests as the single source of truth'] },
      { layer: 'Infrastructure', items: ['Terraform: VPC across 3 availability zones with public and private subnets and NAT gateways', 'EKS 1.31 with managed node groups, IRSA and cluster-autoscaler support'] },
    ],
    decisions: [
      { title: 'Gateway API instead of Ingress', body: 'Migrated routing from Ingress to Gateway API for more expressive routing and a cleaner split between infrastructure (the Gateway) and application routing (HTTPRoutes).' },
      { title: 'GitOps with ArgoCD', body: 'Auto-sync, auto-prune and self-heal keep the cluster equal to Git, and the Git history doubles as an audit trail of every change.' },
      { title: 'IRSA for AWS access', body: 'Pods get AWS permissions through IAM Roles for Service Accounts rather than node-wide credentials.' },
      { title: 'Explicit service discovery', body: 'Services address each other by fully-qualified DNS names (<service>.<namespace>.svc.cluster.local), which keeps manifests explicit and portable across clusters.' },
      { title: 'One resource per file', body: 'Deployments and Services live in separate manifests, so each component can be reviewed and changed on its own.' },
    ],
    highlights: [
      'Multi-AZ by default: 3 availability zones, managed node groups, autoscaler-ready.',
      'Documented running cost of about $255/month (EKS control plane, two t3.medium nodes, three NAT gateways, ALB, EBS), with notes on cutting it for dev environments.',
      'Runbook-style README: quick start, maintenance, troubleshooting and clean-up steps.',
    ],
    extra: {
      title: 'Production hardening checklist',
      items: [
        'Move secrets to AWS Secrets Manager or External Secrets Operator',
        'Restrict traffic with Kubernetes NetworkPolicies and least-privilege RBAC',
        'Enforce Pod Security Standards and scan images before deploy',
        'Serve HTTPS with ACM certificates and consider a private EKS endpoint',
      ],
    },
    related: [{ label: 'GitOps with ArgoCD: A Practical Guide', href: '/blog/gitops-argocd-practical-guide' }],
  },
  {
    slug: 'envguard',
    title: 'envguard',
    tagline: 'Validating .env files against a declarative schema — before they reach production.',
    summary:
      'envguard is a fast, language-agnostic Go CLI that validates environment files against a YAML schema: types, ranges, regex patterns, enums, required fields, defaults and strict mode. It ships as a single binary with thin Node.js and Python wrappers and a native GitHub Action.',
    stack: ['Go', 'Cobra', 'YAML', 'Node.js', 'Python', 'GitHub Actions', 'Homebrew'],
    repo: 'https://github.com/firasmosbehi/envguard',
    goal: [
      'Catch missing or malformed configuration at validation time, not as a crash after deployment.',
      'Use one schema and one validation engine for every language and CI system instead of per-project checks.',
      'Flag hardcoded secrets that end up in .env files.',
    ],
    architecture: [
      { layer: 'CLI', items: ['Cobra commands: validate, scan, generate-example, init'] },
      { layer: 'Core', items: ['YAML schema parser with inheritance (extends)', '.env parser', 'Validation engine', 'Reporters: human-readable text and JSON for CI'] },
      { layer: 'Distribution', items: ['Static binaries on GitHub Releases, Homebrew and Docker', 'npm and PyPI packages (envguard-validator)', 'GitHub Action (action.yml)'] },
    ],
    decisions: [
      { title: 'Single static binary', body: 'The Go CLI compiles to one binary with no runtime dependencies, so it runs the same on a laptop, in a container or in any CI runner.' },
      { title: 'Language-agnostic core', body: 'All validation logic lives in Go. The Node.js and Python packages are thin wrappers that run the CLI and parse its JSON output, so behaviour never drifts between languages.' },
      { title: 'Fail fast, report all', body: 'Validation never stops at the first error: every issue is collected and reported in one run.' },
      { title: 'Stable exit codes', body: '0 for pass, 1 for validation failures, 2 for I/O or schema errors — preserved by every wrapper, so pipelines can branch on them.' },
    ],
    highlights: [
      'Environment-aware rules: requiredIn (e.g. only in production and staging) and devOnly variables.',
      'Secret scanning for AWS access keys, GitHub, Stripe and Slack tokens, private keys and JWTs.',
      'Schema inheritance to share a base schema across environments.',
      'Docs site, CI and a test workflow for the GitHub Action; current release v0.1.5.',
    ],
    related: [{ label: 'Validating .env Files at Scale with Go', href: '/blog/envguard-dotenv-validation' }],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
