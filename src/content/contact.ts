import type { ContactMethod } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    href: 'mailto:eacpaula@outlook.com',
    kind: 'email',
    description: 'Direct contact for role discussions and project conversations.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eacpaula/',
    kind: 'profile',
    description: 'Professional profile and background overview.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/eacpaula',
    kind: 'profile',
    description: 'Code samples, experiments, and public repositories.',
  },
  {
    label: 'Resume',
    href: resumeHref,
    kind: 'asset',
    description: 'Printable PDF version of the current resume.',
  },
]
