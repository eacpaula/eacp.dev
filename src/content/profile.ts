import type { Profile } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`

export const profile: Profile = {
  name: 'Evandro Antônio da Costa de Paula',
  role: 'Full Stack Engineer',
  subheadline:
    'Software Engineer | Full Stack | Applied AI Engineer | Node.js | React.js | .NET | AWS | Azure',
  summary:
    'Full Stack Software Engineer with 10+ years of experience building and modernizing web applications using React, Angular, Node.js, NestJS, TypeScript, and .NET/C#. Strong background in frontend architecture, reusable component libraries, REST APIs, relational databases, CI/CD, automated testing, and cloud environments with AWS and Azure. Experienced in leading technical modernization, improving application performance, documenting APIs, and collaborating remotely with international product and engineering teams.',
  availabilityNote:
    'I am open to full stack, frontend platform, backend/API, and product engineering roles, including remote and international teams.',
  achievementEmblems: [
    {
      id: 'modernization',
      label: 'Modernization',
      metric: '5 apps / 8 months',
      description:
        'Completed Angular 8 to 18 modernization across three large-scale applications in approximately eight months.',
    },
    {
      id: 'angular-library',
      label: 'Shared UI foundation',
      metric: 'Company-wide library',
      description:
        'Helped architect an Angular component library with standards, Storybook, tests, and onboarding support.',
    },
    {
      id: 'react-library',
      label: 'React component system',
      metric: '65+ components',
      description:
        'Led Bit.dev Harmony adoption for a reusable React library used across more than 20 projects.',
    },
    {
      id: 'pipeline-governance',
      label: 'Delivery governance',
      metric: '20+ pipelines',
      description:
        'Implemented Dependabot across Azure DevOps CI/CD pipelines and strengthened dependency workflows.',
    },
    {
      id: 'quality-baseline',
      label: 'Quality baseline',
      metric: '95%+ coverage',
      description:
        'Maintained code coverage above 95% across more than 20 projects.',
    },
    {
      id: 'performance',
      label: 'Performance',
      metric: '40% faster feed',
      description:
        'Improved social feed performance through SQL optimization, table restructuring, and indexing.',
    },
  ],
  primaryLinks: [
    {
      label: 'Resume',
      href: resumeHref,
      kind: 'asset',
      prominence: 'primary',
    },
    {
      label: 'Contact',
      href: '#contact',
      kind: 'anchor',
      prominence: 'primary',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/eacpaula',
      kind: 'external',
      prominence: 'secondary',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eacpaula/',
      kind: 'external',
      prominence: 'secondary',
    },
  ],
}
