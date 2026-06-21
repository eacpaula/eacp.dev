import type { Achievement } from '../types/content'

export const achievements: Achievement[] = [
  {
    id: 'angular-modernization',
    title: 'Enterprise Angular modernization',
    proofLabel: 'Modernization',
    proofMetric: '3 apps / 8 months',
    proofQualifier:
      'Angular 8 to 18 migration across large marketplace products with a compressed delivery timeline.',
    detailHref: undefined,
    context:
      'Three large marketplace applications were overdue for framework upgrades and the initial timeline pointed to more than a year of work.',
    contribution:
      'Led the Angular 8 to Angular 18 migration and set a repeatable upgrade path that could be reused across the application set.',
    impact:
      'Brought the modernization effort down to roughly eight months while keeping progress moving across multiple large applications.',
    technologies: ['Angular', 'TypeScript', 'Storybook', 'Unit Testing'],
    sourceRefs: ['docs/profile/evandro-source-of-true.md'],
    featured: true,
  },
  {
    id: 'react-library-scale',
    title: 'React component library at scale',
    proofLabel: 'Reusable systems',
    proofMetric: '65+ components',
    proofQualifier:
      'Bit.dev Harmony rollout that supported reuse across more than 20 projects.',
    detailHref: undefined,
    context:
      'Multiple product teams needed consistent frontend building blocks instead of repeating one-off implementations from project to project.',
    contribution:
      'Introduced Bit.dev Harmony and helped build a reusable React component library designed for broad adoption.',
    impact:
      'Delivered more than 65 reusable components and supported reuse across 20+ projects, improving consistency and development leverage.',
    technologies: ['React.js', 'Bit.dev', 'Storybook', 'TypeScript'],
    sourceRefs: ['docs/profile/evandro-source-of-true.md'],
    featured: true,
  },
  {
    id: 'cicd-security',
    title: 'CI/CD and dependency governance improvements',
    proofLabel: 'Delivery governance',
    proofMetric: '20+ pipelines',
    proofQualifier:
      'Dependabot rollout across Azure DevOps pipelines with stronger dependency review workflows.',
    detailHref: undefined,
    context:
      'Large project portfolios needed better visibility into dependency updates and clearer alignment with existing security tooling.',
    contribution:
      'Implemented Dependabot across 20+ projects in Azure DevOps pipelines and connected vulnerability review flows to the existing security toolchain.',
    impact:
      'Improved dependency visibility and strengthened governance across a wide project surface.',
    technologies: [
      'Azure DevOps',
      'Dependabot',
      'Snyk',
      'BlackDuck',
      'Aqua Security',
    ],
    sourceRefs: ['docs/profile/evandro-source-of-true.md'],
    featured: true,
  },
  {
    id: 'quality-baseline',
    title: 'Code quality and documentation discipline',
    proofLabel: 'Quality baseline',
    proofMetric: '95%+ coverage',
    proofQualifier:
      'Sustained automated quality standards across more than 20 projects with API documentation support.',
    detailHref: undefined,
    context:
      'Shared teams needed reliable engineering standards for maintainability, onboarding, and integration clarity across many projects.',
    contribution:
      'Maintained high automated coverage baselines, documented REST APIs, and reinforced engineering standards around testing and documentation.',
    impact:
      'Kept code coverage above 95% across 20+ projects and improved API integration clarity through Swagger and Postman documentation.',
    technologies: ['Jest', 'Swagger', 'Postman', 'CI/CD Pipelines'],
    sourceRefs: ['docs/profile/evandro-source-of-true.md'],
    featured: true,
  },
  {
    id: 'performance-optimization',
    title: 'Performance optimization in product systems',
    proofLabel: 'Performance',
    proofMetric: '40% faster feed',
    proofQualifier:
      'SQL optimization, table restructuring, and indexing improvements under delivery pressure.',
    detailHref: undefined,
    context:
      'A private social network hit performance bottlenecks in feed logic while critical user flows were under delivery pressure.',
    contribution:
      'Optimized SQL queries, restructured tables, and introduced indexing improvements while still contributing to urgent feature delivery.',
    impact:
      'Improved feed performance by 40% and helped stabilize investor-facing product delivery under tight deadlines.',
    technologies: ['SQL', 'PostgreSQL', 'React Native', 'Performance Analysis'],
    sourceRefs: ['docs/profile/evandro-source-of-true.md'],
    featured: true,
  },
  {
    id: 'delivery-architecture',
    title: 'Architecture and delivery process improvements',
    proofLabel: 'Architecture',
    proofMetric: 'Lower duplicate effort',
    proofQualifier:
      'Reusable foundations and branching improvements that reduced rework across client-customized delivery.',
    detailHref: undefined,
    context:
      'Teams working on evolving platforms needed cleaner project structures, better reuse, and less duplicated delivery effort.',
    contribution:
      'Introduced cleaner frontend and backend practices, improved branching strategy, and helped establish reusable architectural standards.',
    impact:
      'Reduced duplicated effort for client customization work and improved maintainability across newer project foundations.',
    technologies: ['Nest.js', 'React.js', 'Laravel', 'Git', 'Hexagonal Architecture'],
    sourceRefs: ['docs/profile/evandro-source-of-true.md'],
    featured: false,
  },
]
