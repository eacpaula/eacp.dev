import type { Profile } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`

export const profile: Profile = {
  name: 'Evandro Antonio da Costa de Paula',
  headline: 'Senior Full Stack Software Engineer',
  subheadline:
    'I modernize enterprise products, build reusable frontend systems, and improve delivery quality across complex web platforms.',
  locationLabel: 'Caxias do Sul, Brazil',
  yearsLabel: '11+ years',
  summary:
    'I am a senior full stack software engineer with 11+ years of experience across React, Angular, Node.js, C#/.NET, SQL, APIs, cloud platforms, and CI/CD improvement work. My focus is practical: modernize complex products, reduce delivery friction, and leave reusable systems behind.',
  availabilityNote:
    'I am open to senior full stack, frontend platform, backend/API, and product engineering roles, including remote and international teams.',
  focusAreas: [
    'Enterprise modernization with lower delivery risk',
    'Reusable frontend architecture and component systems',
    'Backend/API design for product and platform teams',
    'CI/CD quality, dependency governance, and engineering standards',
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
