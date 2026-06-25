import specDrivenDevelopmentPostData from './posts/spec-driven-development.json'
import type { WritingPost, WritingPostPreview } from './writing.types'

function resolveAssetPath(assetPath: string) {
  if (/^(https?:)?\/\//.test(assetPath)) {
    return assetPath
  }

  return `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`
}

function normalizePost(post: WritingPost): WritingPost {
  return {
    ...post,
    coverImage: {
      ...post.coverImage,
      src: resolveAssetPath(post.coverImage.src),
      socialSrc: post.coverImage.socialSrc
        ? resolveAssetPath(post.coverImage.socialSrc)
        : undefined,
    },
  }
}

function sortPostsByPublishDateDescending(left: WritingPost, right: WritingPost) {
  return (
    new Date(right.publishDate).getTime() - new Date(left.publishDate).getTime()
  )
}

const posts = [normalizePost(specDrivenDevelopmentPostData as WritingPost)].sort(
  sortPostsByPublishDateDescending,
)

export const writingPosts = posts

export const writingPostPreviews: WritingPostPreview[] = posts.map((post) => ({
  slug: post.slug,
  title: post.title,
  shortDescription: post.shortDescription,
  publishDate: post.publishDate,
  tags: post.tags,
  coverImage: post.coverImage,
}))

export function getWritingPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null
}
