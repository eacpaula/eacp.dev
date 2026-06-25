import { useEffect, useLayoutEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { SiteFooter } from '../../components/layout/SiteFooter'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { profile, siteMetadata } from '../../lib/content'
import { applyDocumentMetadata } from '../../lib/seo/metadata'
import type { SiteMetadata } from '../../types/content'
import { getWritingPostBySlug } from './data/posts.index'
import { WritingEmptyState } from './components/WritingEmptyState'
import { WritingPostDetail } from './components/WritingPostDetail'

function buildWritingPostMetadata(
  postTitle: string,
  summary: string,
  slug: string,
  socialImage?: string,
): SiteMetadata {
  const canonicalUrl = new URL(
    `blog/${slug}`,
    siteMetadata.canonicalUrl.endsWith('/')
      ? siteMetadata.canonicalUrl
      : `${siteMetadata.canonicalUrl}/`,
  ).toString()

  const resolvedSocialImage = socialImage
    ? new URL(
        socialImage,
        siteMetadata.canonicalUrl.endsWith('/')
          ? siteMetadata.canonicalUrl
          : `${siteMetadata.canonicalUrl}/`,
      ).toString()
    : siteMetadata.socialImage

  return {
    ...siteMetadata,
    title: `${postTitle} | Evandro Antônio da Costa de Paula`,
    description: summary,
    canonicalUrl,
    socialImage: resolvedSocialImage,
  }
}

interface WritingPostPageProps {
  slug?: string
}

export function WritingPostPage({ slug }: WritingPostPageProps) {
  const activePost = slug ? getWritingPostBySlug(slug) : null
  const resumeLink =
    profile.primaryLinks.find((item) => item.label === 'Resume') ??
    profile.primaryLinks[0]

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || window.location.hash) {
      return
    }

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const animationFrameId = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [slug])

  useEffect(() => {
    if (activePost) {
      applyDocumentMetadata(
        buildWritingPostMetadata(
          activePost.title,
          activePost.summary,
          activePost.slug,
          activePost.coverImage.src,
        ),
      )
      return
    }

    applyDocumentMetadata({
      ...siteMetadata,
      title: `Blog Post Not Found | Evandro Antônio da Costa de Paula`,
      description:
        'The requested blog post is not available. Return to the portfolio blog list to browse published posts.',
      canonicalUrl: siteMetadata.canonicalUrl,
    })
  }, [activePost])

  return (
    <div className="min-h-screen text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-card focus:outline-none"
      >
        Skip to content
      </a>

      <SiteHeader navItems={siteMetadata.navItems} resumeLink={resumeLink} />

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-[80rem] flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12"
      >
        {activePost ? (
          <WritingPostDetail post={activePost} />
        ) : (
          <WritingEmptyState
            eyebrow="Post Unavailable"
            title="That blog page does not match a published post."
            description="The route is valid inside the application, but the requested article is not available right now. Return to the blog list to continue browsing published posts."
          />
        )}

        {!activePost ? (
          <Link
            to="/"
            hash="blog"
            className="sketch-button-secondary inline-flex w-fit min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Back to Blog
          </Link>
        ) : null}
      </main>

      <SiteFooter name={profile.name} />
    </div>
  )
}
