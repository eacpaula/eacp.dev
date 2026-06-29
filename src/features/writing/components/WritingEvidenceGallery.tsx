import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from 'react'
import { createPortal } from 'react-dom'
import type { WritingEvidenceEntry } from '../data/writing.types'

interface WritingEvidenceGalleryProps {
  evidenceEntries: WritingEvidenceEntry[]
}

interface WritingEvidenceImageModalProps {
  entry: WritingEvidenceEntry | null
  onClose: () => void
  returnFocusRef: React.RefObject<HTMLButtonElement | null>
}

function WritingEvidenceImageModal({
  entry,
  onClose,
  returnFocusRef,
}: WritingEvidenceImageModalProps) {
  const dialogId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousOverflowRef = useRef<string>('')

  useEffect(() => {
    if (!entry) {
      return
    }

    const returnFocusTarget = returnFocusRef.current
    previousOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflowRef.current
      returnFocusTarget?.focus()
    }
  }, [entry, onClose, returnFocusRef])

  function handleDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab') {
      return
    }

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )

    if (!focusableElements || focusableElements.length === 0) {
      return
    }

    const first = focusableElements[0]
    const last = focusableElements[focusableElements.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  function handleBackdropClick(event: ReactMouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  if (!entry?.imagePath || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div
      className="writing-evidence-viewer-backdrop fixed inset-0 z-50"
      onClick={handleBackdropClick}
    >
      <div className="writing-evidence-viewer-shell overflow-y-auto px-3 py-3 sm:px-5 sm:py-5">
        <div className="mx-auto flex min-h-dvh w-full max-w-[92rem] items-center">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogId}
            onKeyDown={handleDialogKeyDown}
            className="writing-evidence-viewer-frame sketch-shell flex w-full flex-col overflow-hidden rounded-[1.35rem]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-4 py-4 sm:px-6 sm:py-5">
              <div className="space-y-2">
                <p className="sketch-badge sketch-badge-accent w-fit text-[0.64rem]">
                  Evidence Viewer
                </p>
                <h3
                  id={dialogId}
                  className="max-w-3xl font-display text-xl font-semibold text-foreground sm:text-2xl"
                >
                  {entry.caption}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close evidence viewer"
                className="sketch-button-primary inline-flex min-h-11 items-center justify-center rounded-control px-4 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Close
              </button>
            </div>

            <div className="space-y-4 p-3 sm:p-4">
              <div className="writing-evidence-viewer-image rounded-card border border-border bg-surface-strong p-2">
                <img
                  src={entry.imagePath}
                  alt={entry.altText}
                  className="block h-full w-full object-contain"
                />
              </div>

              {entry.note ? (
                <p className="px-1 text-sm leading-7 text-foreground-muted">
                  {entry.note}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function WritingEvidenceGallery({
  evidenceEntries,
}: WritingEvidenceGalleryProps) {
  const [selectedEntry, setSelectedEntry] = useState<WritingEvidenceEntry | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  if (!evidenceEntries.length) {
    return null
  }

  return (
    <>
      <div className="writing-evidence-grid grid gap-4 lg:grid-cols-2">
        {evidenceEntries.map((entry) => {
          const hasRealImage = Boolean(entry.imagePath && !entry.isPlaceholder)

          return (
            <article
              key={entry.id}
              className="writing-evidence-card sketch-surface-muted rounded-card p-4 sm:p-5"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="sketch-badge sketch-badge-muted text-[0.6rem]">
                    {entry.sourceLabel}
                  </span>
                  {entry.isPlaceholder ? (
                    <span className="sketch-badge sketch-badge-accent text-[0.6rem]">
                      Placeholder
                    </span>
                  ) : null}
                </div>

                {hasRealImage ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      triggerRef.current = event.currentTarget
                      setSelectedEntry(entry)
                    }}
                    aria-label={`Open full-size evidence image for ${entry.sourceLabel}`}
                    className="writing-evidence-preview block w-full rounded-control text-left transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <div className="writing-evidence-media relative overflow-hidden rounded-control border border-border">
                      <img
                        src={entry.imagePath}
                        alt={entry.altText}
                        loading="lazy"
                        className="writing-evidence-preview-image block h-full w-full bg-surface-strong object-cover object-top"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent-muted">
                        Click to expand
                      </p>
                      <span className="text-xs text-foreground-dim">
                        Full-size view
                      </span>
                    </div>
                  </button>
                ) : (
                  <div className="writing-evidence-placeholder rounded-control border border-dashed border-border-strong bg-surface/70 p-5">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                      Screenshot or print to be added
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground-muted">
                      This slot is intentionally a placeholder until a real public
                      example is curated and added to the repository.
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.caption}
                  </h3>
                  {entry.note ? (
                    <p className="text-sm leading-7 text-foreground-muted">
                      {entry.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <WritingEvidenceImageModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        returnFocusRef={triggerRef}
      />
    </>
  )
}
