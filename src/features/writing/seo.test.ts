import { describe, expect, it } from 'vitest'
import aiRolesPostData from './data/posts/ai-tools-software-engineering-role-confusion.json'
import postData from './data/posts/spec-driven-development.json'
import type { WritingPost } from './data/writing.types'
import { buildWritingPostMetadata } from './seo'

describe('buildWritingPostMetadata', () => {
  it('builds absolute article metadata from the post JSON source', () => {
    const metadata = buildWritingPostMetadata(postData as WritingPost, {
      basePath: '/',
      canonicalOrigin: 'https://eacp.dev',
    })

    expect(metadata.title).toContain(postData.title)
    expect(metadata.description).toBe(postData.summary)
    expect(metadata.canonicalUrl).toBe(
      'https://eacp.dev/blog/spec-driven-development-open-spec-spec-kit-kiro',
    )
    expect(metadata.socialImage).toBe(
      'https://eacp.dev/blog/spec-driven-development-cover.png',
    )
    expect(metadata.socialImageAlt).toBe(postData.coverImage.alt)
    expect(metadata.openGraphType).toBe('article')
    expect(metadata.twitterCard).toBe('summary_large_image')
  })

  it('builds metadata for the AI roles article using the local social preview asset', () => {
    const metadata = buildWritingPostMetadata(aiRolesPostData as WritingPost, {
      basePath: '/',
      canonicalOrigin: 'https://eacp.dev',
    })

    expect(metadata.title).toContain(aiRolesPostData.title)
    expect(metadata.description).toBe(aiRolesPostData.summary)
    expect(metadata.canonicalUrl).toBe(
      'https://eacp.dev/blog/ai-tools-software-engineering-role-confusion',
    )
    expect(metadata.socialImage).toBe(
      'https://eacp.dev/blog/ai-tools-software-engineering-role-confusion-cover.png',
    )
    expect(metadata.socialImageAlt).toBe(aiRolesPostData.coverImage.alt)
    expect(metadata.openGraphType).toBe('article')
    expect(metadata.twitterCard).toBe('summary_large_image')
  })
})
