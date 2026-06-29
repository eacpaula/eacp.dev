import aiRolesPostData from './posts/ai-tools-software-engineering-role-confusion.json'
import specDrivenDevelopmentPostData from './posts/spec-driven-development.json'
import { comparePublishDateDescending } from '../utils/publishDate'
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
    roleEvidence: post.roleEvidence?.map((entry) => ({
      ...entry,
      imagePath: entry.imagePath ? resolveAssetPath(entry.imagePath) : undefined,
    })),
  }
}

function sortPostsByPublishDateDescending(left: WritingPost, right: WritingPost) {
  return comparePublishDateDescending(left.publishDate, right.publishDate)
}

const posts = [
  normalizePost(aiRolesPostData as WritingPost),
  normalizePost(specDrivenDevelopmentPostData as WritingPost),
].sort(sortPostsByPublishDateDescending)

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
