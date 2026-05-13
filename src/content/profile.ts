import type { Profile } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`

export const profile: Profile = {
  name: 'Evandro Antonio da Costa de Paula',
  headline: 'Senior Full Stack Software Engineer',
  subheadline:
    'Modernizing enterprise products, improving delivery systems, and building reusable engineering foundations.',
  locationLabel: 'Caxias do Sul, Brazil',
  yearsLabel: '11+ years',
  summary:
    'Senior full stack software engineer with 11+ years of experience building and modernizing complex web applications. Strong across Node.js, TypeScript, React, Angular, C#/.NET, SQL, REST APIs, GraphQL, AWS, Azure, and CI/CD improvement work, with a track record of delivery acceleration, shared frontend architecture, and code quality at scale.',
  availabilityNote:
    'Open to senior full stack, frontend platform, backend/API, and product engineering opportunities, including remote and international roles.',
  focusAreas: [
    'Enterprise modernization and large-scale upgrades',
    'Reusable frontend architecture and component libraries',
    'Backend/API design and SQL-heavy product systems',
    'CI/CD quality, dependency governance, and security automation',
  ],
  languages: ['Portuguese (Native)', 'English (Fluent)', 'Spanish (Advanced)'],
  highlightMetrics: [
    { label: 'Experience', value: '11+ years' },
    { label: 'Reusable components', value: '65+' },
    { label: 'Projects reached', value: '20+' },
    { label: 'Code coverage', value: '95%+' },
  ],
  primaryLinks: [
    {
      label: 'View Resume',
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
