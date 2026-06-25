import type { WritingPost } from '../data/writing.types'
import { getBlogPostPath } from './writingUrlState'

function getBlogDetailUrl(slug: string) {
  const baseUrl =
    typeof window === 'undefined'
      ? new URL(import.meta.env.BASE_URL, 'https://eacp.dev')
      : new URL(import.meta.env.BASE_URL, window.location.origin)

  return new URL(getBlogPostPath(slug).replace(/^\//, ''), baseUrl).toString()
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
