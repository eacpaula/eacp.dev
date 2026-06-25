import type { SiteMetadata } from '../types/content'
import { SITE_CANONICAL_ORIGIN, SITE_OWNER_NAME } from './site-config'
import { buildSiteUrl } from '../lib/seo/url'

const basePath =
  (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ??
  '/'

export const siteMetadata: SiteMetadata = {
  title: `${SITE_OWNER_NAME} | Full Stack Engineer`,
  description:
    'Full stack engineer focused on modernization, reusable frontend systems, API design, CI/CD quality, and practical engineering impact.',
  canonicalUrl: SITE_CANONICAL_ORIGIN,
  socialImage: buildSiteUrl('favicon.svg', {
    canonicalOrigin: SITE_CANONICAL_ORIGIN,
    basePath,
  }),
  socialImageAlt: 'Portfolio favicon with an E monogram rendered in a sketch style.',
  openGraphType: 'website',
  twitterCard: 'summary',
  navItems: [
    { label: 'Impact', href: '#impact' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
}
