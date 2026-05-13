import type { Achievement } from '../types/content'

export const achievements: Achievement[] = [
  {
    id: 'angular-modernization',
    title: 'Enterprise Angular modernization',
    context:
      'Three large client-side marketplace applications required long-overdue upgrades that were projected to take more than a year.',
    contribution:
      'Led the Angular 8 to Angular 18 modernization effort and established a repeatable upgrade strategy across the application set.',
    impact:
      'Reduced the overall modernization timeline to roughly eight months while keeping progress moving across multiple large applications.',
    technologies: ['Angular', 'TypeScript', 'Storybook', 'Unit Testing'],
    sourceRefs: ['docs/profile/evandro-resume-summary.md'],
    featured: true,
  },
  {
    id: 'react-library-scale',
    title: 'React component library at scale',
    context:
      'Multiple product teams needed consistent frontend building blocks instead of repeated one-off implementations.',
    contribution:
      'Introduced Bit.dev Harmony and helped build a reusable React component library designed for adoption across many projects.',
    impact:
      'Delivered more than 65 reusable components and supported reuse across 20+ projects, improving consistency and development leverage.',
    technologies: ['React.js', 'Bit.dev', 'Storybook', 'TypeScript'],
    sourceRefs: [
      'docs/profile/evandro-resume-summary.md',
      'docs/profile/skills.csv',
    ],
    featured: true,
  },
  {
    id: 'cicd-security',
    title: 'CI/CD and dependency governance improvements',
    context:
      'Large project portfolios needed clearer package update visibility and stronger integration with security tooling.',
    contribution:
      'Implemented Dependabot across 20+ projects in Azure DevOps pipelines and integrated vulnerability review flows with existing security tools.',
    impact:
      'Improved package update identification and strengthened dependency governance across a wide project surface.',
    technologies: [
      'Azure DevOps',
      'Dependabot',
      'Snyk',
      'BlackDuck',
      'Aqua Security',
    ],
    sourceRefs: [
      'docs/profile/evandro-resume-summary.md',
      'docs/profile/skills.csv',
    ],
    featured: true,
  },
  {
    id: 'quality-baseline',
    title: 'Code quality and documentation discipline',
    context:
      'Shared teams needed reliable engineering standards for maintainability, onboarding, and integration clarity.',
    contribution:
      'Maintained high automated coverage baselines, documented REST APIs, and reinforced engineering standards around testing and documentation.',
    impact:
      'Kept code coverage above 95% across 20+ projects and improved API integration clarity with Swagger and Postman documentation.',
    technologies: ['Jest', 'Swagger', 'Postman', 'CI/CD Pipelines'],
    sourceRefs: ['docs/profile/evandro-resume-summary.md'],
    featured: true,
  },
  {
    id: 'performance-optimization',
    title: 'Performance optimization in product systems',
    context:
      'A private social network experienced performance bottlenecks in feed logic and load testing pressure in critical user flows.',
    contribution:
      'Optimized SQL queries, restructured tables, and introduced indexing improvements while contributing to urgent feature delivery.',
    impact:
      'Improved feed performance by 40% and helped stabilize investor-facing product delivery under tight deadlines.',
    technologies: ['SQL', 'PostgreSQL', 'React Native', 'Performance Analysis'],
    sourceRefs: ['docs/profile/evandro-resume-summary.md'],
    featured: true,
  },
  {
    id: 'delivery-architecture',
    title: 'Architecture and delivery process improvements',
    context:
      'Teams working on evolving platforms needed cleaner project structures, better reuse, and less duplication in delivery.',
    contribution:
      'Introduced cleaner frontend and backend practices, improved branching strategy, and helped establish reusable architectural standards.',
    impact:
      'Reduced duplicated effort for client customization work and improved maintainability across newer project foundations.',
    technologies: ['Nest.js', 'React.js', 'Laravel', 'Git', 'Hexagonal Architecture'],
    sourceRefs: ['docs/profile/evandro-resume-summary.md'],
    featured: false,
  },
]
