import { describe, expect, it } from 'vitest'
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
})
