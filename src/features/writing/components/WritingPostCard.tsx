import { Link } from '@tanstack/react-router'
import type { WritingPostPreview } from '../data/writing.types'

interface WritingPostCardProps {
  post: WritingPostPreview
}

function formatPublishDate(publishDate: string) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(publishDate))
}

export function WritingPostCard({ post }: WritingPostCardProps) {
  return (
    <article className="writing-list-item-shell sketch-shell rounded-card">
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="writing-list-link block rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`Read ${post.title}`}
      >
        <div className="writing-list-row">
          <div className="writing-list-thumb-frame">
            <img
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              className="writing-list-thumb"
            />
          </div>

          <div className="min-w-0 space-y-4 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="sketch-badge sketch-badge-muted text-[0.64rem]">
                Published
              </p>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-foreground-dim">
                {formatPublishDate(post.publishDate)}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="max-w-3xl font-display text-2xl font-semibold leading-tight text-foreground sm:text-[2rem]">
                {post.title}
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-foreground-muted sm:text-base">
                {post.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <ul className="flex flex-wrap gap-2" aria-label="Post tags">
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <span className="sketch-badge sketch-badge-accent text-[0.6rem]">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>

              <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent-muted">
                Read post
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
