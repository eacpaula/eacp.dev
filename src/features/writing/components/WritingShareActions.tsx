import type { WritingPost } from '../data/writing.types'
import { getWritingShareLinks } from '../utils/shareLinks'

interface WritingShareActionsProps {
  post: WritingPost
}

export function WritingShareActions({ post }: WritingShareActionsProps) {
  const shareLinks = getWritingShareLinks(post)

  const shareTargets = [
    {
      href: shareLinks.linkedin,
      label: 'LinkedIn',
      ariaLabel: `Share ${post.title} on LinkedIn`,
    },
    {
      href: shareLinks.telegram,
      label: 'Telegram',
      ariaLabel: `Share ${post.title} on Telegram`,
    },
    {
      href: shareLinks.whatsapp,
      label: 'WhatsApp',
      ariaLabel: `Share ${post.title} on WhatsApp`,
    },
  ]

  return (
    <section
      aria-label="Share this article"
      className="writing-share-panel sketch-surface-muted rounded-card p-5"
    >
      <div className="space-y-2">
        <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
          Share
        </p>
        <p className="text-sm leading-7 text-foreground-muted">
          Send the direct blog post link through the channel that fits the
          conversation.
        </p>
      </div>

      <div className="writing-share-grid mt-5">
        {shareTargets.map((shareTarget) => (
          <a
            key={shareTarget.label}
            href={shareTarget.href}
            target="_blank"
            rel="noreferrer"
            aria-label={shareTarget.ariaLabel}
            className="sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-4 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {shareTarget.label}
          </a>
        ))}
      </div>
    </section>
  )
}
