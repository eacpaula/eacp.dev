import { siteMetadata } from '../../content/site-metadata'
import { buildSiteUrl } from '../../lib/seo/url'
import { SITE_OWNER_NAME } from '../../content/site-config'
import type { SiteMetadata } from '../../types/content'
import type { WritingPost } from './data/writing.types'

interface WritingMetadataOptions {
  basePath?: string
  canonicalOrigin?: string
}

function getCanonicalOrigin(options?: WritingMetadataOptions) {
  return options?.canonicalOrigin ?? siteMetadata.canonicalUrl
}

function getBasePath(options?: WritingMetadataOptions) {
  return (
    options?.basePath ??
    (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env
      ?.BASE_URL ??
    '/'
  )
}

export function buildWritingPostMetadata(
  post: WritingPost,
  options?: WritingMetadataOptions,
): SiteMetadata {
  const canonicalOrigin = getCanonicalOrigin(options)
  const basePath = getBasePath(options)

  return {
    ...siteMetadata,
    title: `${post.title} | ${SITE_OWNER_NAME}`,
    description: post.summary,
    canonicalUrl: buildSiteUrl(`blog/${post.slug}`, {
      canonicalOrigin,
      basePath,
    }),
    socialImage: buildSiteUrl(post.coverImage.socialSrc ?? post.coverImage.src, {
      canonicalOrigin,
      basePath,
    }),
    socialImageAlt: post.coverImage.alt,
    openGraphType: 'article',
    twitterCard: 'summary_large_image',
  }
}
