import type { ExperienceItem } from '../types/content'

export const experienceItems: ExperienceItem[] = [
  {
    id: 'tailwind-business-ventures',
    organization: 'Tailwind Business Ventures',
    context: 'Marketplace and enterprise product environments, including MDFCommerce and Acuity Brands contexts.',
    role: 'Software Engineer / Full Stack Software Engineer',
    period: '2021 to 2026',
    contributions: [
      'Led enterprise Angular upgrade work across large applications.',
      'Helped build shared component library foundations for multiple teams.',
      'Improved dependency governance, CI/CD practices, and code quality standards.',
    ],
    technologies: ['Angular', 'React.js', 'TypeScript', 'Azure DevOps', 'Bit.dev', 'Nest.js'],
    impact:
      'Reduced upgrade timelines, expanded reusable frontend architecture, and supported more consistent engineering delivery across many projects.',
  },
  {
    id: 'oxdreams',
    organization: 'OxDreams',
    context: 'Private social network startup environment with investor-driven deadlines.',
    role: 'Sr. Software Engineer',
    period: '2021 to 2022',
    contributions: [
      'Optimized feed logic and database performance.',
      'Delivered critical product features under time pressure.',
      'Supported urgent product adjustments and mentored junior developers.',
    ],
    technologies: ['SQL', 'PostgreSQL', 'React Native', 'Django'],
    impact:
      'Improved feed performance by 40% and helped keep investor-facing delivery on track.',
  },
  {
    id: 'fullsoft',
    organization: 'FullSoft',
    context: 'Platform reconstruction during a pandemic-era delivery window.',
    role: 'Sr. FullStack Developer',
    period: '2020 to 2021',
    contributions: [
      'Helped rebuild core platform features on a fixed timeline.',
      'Introduced React.js workflows into the company’s development process.',
      'Worked on requirements discovery, documentation, and UAT support.',
    ],
    technologies: ['React.js', 'C#', '.NET', 'Electron'],
    impact:
      'Reached the reconstruction deadline and enabled final UAT preparation for release.',
  },
  {
    id: 'saga-sistemas',
    organization: 'Saga Sistemas',
    context: 'Portal customization and base-project strategy for multiple client variations.',
    role: 'Sr. FullStack Developer',
    period: '2019 to 2020',
    contributions: [
      'Improved Laravel base-project architecture.',
      'Refined release and branching strategy for customized client portals.',
      'Introduced React.js as part of a modernization initiative.',
    ],
    technologies: ['Laravel', 'React.js', 'PHP', 'PL/SQL'],
    impact:
      'Reduced repeated feature replication work and established a cleaner path for new client deliveries.',
  },
  {
    id: 'fdd',
    organization: 'FDD',
    context: 'Product development and MVP delivery across frontend-heavy work.',
    role: 'FullStack Developer',
    period: '2018',
    contributions: [
      'Investigated and resolved frontend performance bottlenecks.',
      'Delivered an MVP with blockchain-related integrations.',
      'Maintained features, APIs, and UI improvements.',
    ],
    technologies: ['AngularJS', 'CodeIgniter', 'APIs', 'Chrome DevTools'],
    impact:
      'Improved application efficiency and delivered an MVP quickly enough to earn strong internal recognition.',
  },
  {
    id: 'axysweb',
    organization: 'AxysWeb',
    context: 'Legacy backend systems and early .NET Core adoption for client platforms.',
    role: 'Backend Developer',
    period: '2016 to 2017',
    contributions: [
      'Proposed a new project model during .NET Core adoption.',
      'Supported the transition from monolithic patterns to RESTful APIs.',
      'Improved third-party integrations and SQL query performance.',
    ],
    technologies: ['C#', '.NET Core', 'REST API', 'SQL Server'],
    impact:
      'Improved performance indices and helped establish a more modern backend direction early in the product lifecycle.',
  },
]
