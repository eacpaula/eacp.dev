import type { WritingPost } from '../data/writing.types'
import { siteMetadata } from '../../../lib/content'
import { buildSiteUrl } from '../../../lib/seo/url'
import { getBlogPostPath } from './writingUrlState'

function getBlogDetailUrl(slug: string) {
  return buildSiteUrl(getBlogPostPath(slug), {
    canonicalOrigin: siteMetadata.canonicalUrl,
    basePath: import.meta.env.BASE_URL,
  })
}

function getShareText(post: WritingPost) {
  return post.shareMetadata?.text ?? `${post.title} — ${post.summary}`
}

function getShareTitle(post: WritingPost) {
  return post.shareMetadata?.title ?? post.title
}

export function getWritingShareLinks(post: WritingPost) {
  const articleUrl = getBlogDetailUrl(post.slug)
  const encodedUrl = encodeURIComponent(articleUrl)
  const encodedText = encodeURIComponent(getShareText(post))

  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${getShareTitle(post)} ${articleUrl}`)}`,
    articleUrl,
  }
}
