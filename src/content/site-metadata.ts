import type { SiteMetadata } from '../types/content'

export const siteMetadata: SiteMetadata = {
  title: 'Evandro Antônio da Costa de Paula | Full Stack Engineer',
  description:
    'Full stack engineer focused on modernization, reusable frontend systems, API design, CI/CD quality, and practical engineering impact.',
  canonicalUrl: 'https://eacp.dev',
  socialImage: `${import.meta.env.BASE_URL}favicon.svg`,
  navItems: [
    { label: 'Impact', href: '#impact' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#experience' },
    { label: 'Writing', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
}
