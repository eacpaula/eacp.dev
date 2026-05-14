import type { ContactMethod } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    href: 'mailto:eacpaula@outlook.com',
    kind: 'email',
    description: 'Best path for role discussions, project conversations, and direct follow-up.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eacpaula/',
    kind: 'profile',
    description: 'Profile, background, and current positioning.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/eacpaula',
    kind: 'profile',
    description: 'Code samples, public repositories, and technical experiments.',
  },
  {
    label: 'Resume',
    href: resumeHref,
    kind: 'asset',
    description: 'Current PDF resume for recruiters and hiring teams.',
  },
]
