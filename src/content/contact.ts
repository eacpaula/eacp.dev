import type { ContactMethod, ContactSectionContent } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`
const calendlyHref = 'https://calendly.com/eacpaula/chat'

export const contactSectionContent: ContactSectionContent = {
  supportingText:
    'Scheduling works best for recruiting conversations, technical interviews, collaboration, or project scope discussions.',
  schedulingCta: {
    label: 'Schedule a call',
    url: calendlyHref,
    description:
      'Open a short scheduling flow without leaving the portfolio context first.',
    intent:
      'Use this for hiring discussions, interview coordination, technical introductions, or collaboration.',
    kind: 'scheduling',
  },
}

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    href: 'mailto:eacpaula@outlook.com',
    kind: 'email',
    description:
      'Best for direct follow-up, written role discussions, and project details.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eacpaula/',
    kind: 'profile',
    description: 'Background, current positioning, and recruiter-facing context.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/eacpaula',
    kind: 'profile',
    description: 'Public code, implementation samples, and technical exploration.',
  },
  {
    label: 'Resume',
    href: resumeHref,
    kind: 'asset',
    description: 'Current PDF resume for hiring teams and technical reviewers.',
  },
]
