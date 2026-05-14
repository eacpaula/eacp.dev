import type { SiteMetadata } from '../types/content'

export const siteMetadata: SiteMetadata = {
  title: 'Evandro Costa | Senior Full Stack Software Engineer',
  description:
    'Senior full stack software engineer focused on modernization, reusable frontend systems, API design, CI/CD quality, and practical engineering impact.',
  canonicalUrl: 'https://eacp.dev',
  socialImage: `${import.meta.env.BASE_URL}favicon.svg`,
  navItems: [
    { label: 'Summary', href: '#summary' },
    { label: 'Impact', href: '#impact' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#experience' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Writing', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
}
