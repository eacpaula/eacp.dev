import type { ContactSectionContent } from '../types/content'

const resumeHref = `${import.meta.env.BASE_URL}resume/resume.pdf`
const calendlyHref = 'https://calendly.com/eacpaula/chat'

export const contactSectionContent: ContactSectionContent = {
  eyebrow: 'Contact',
  heading: "Let's connect if my work resonates with what you're building.",
  directContacts: [
    {
      label: 'Email',
      value: 'eacpaula@outlook.com',
      href: 'mailto:eacpaula@outlook.com',
      kind: 'email',
      placement: 'left',
    },
    {
      label: 'Phone',
      value: '+55 54 98149-1193',
      href: 'tel:+5554981491193',
      kind: 'phone',
      placement: 'right',
    },
  ],
  actions: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eacpaula/',
      kind: 'profile',
      opensInNewContext: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/eacpaula',
      kind: 'profile',
      opensInNewContext: true,
    },
    {
      label: 'Schedule a Call',
      href: calendlyHref,
      kind: 'scheduling',
    },
    {
      label: 'Resume',
      href: resumeHref,
      kind: 'resume',
    },
  ],
  portraitAlt:
    'Illustrated portrait of Evandro Antonio da Costa de Paula wearing a dark hoodie with gold engineering achievement emblems.',
}
