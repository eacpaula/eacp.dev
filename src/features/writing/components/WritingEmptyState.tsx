interface WritingEmptyStateProps {
  eyebrow: string
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function WritingEmptyState({
  eyebrow,
  title,
  description,
  actionLabel,
  onAction,
}: WritingEmptyStateProps) {
  return (
    <div className="sketch-shell rounded-card p-6 sm:p-8">
      <div className="space-y-4">
        <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
          {eyebrow}
        </p>
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {title}
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="sketch-button-secondary mt-6 inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  )
}
