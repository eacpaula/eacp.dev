import {
  useEffect,
  useId,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
} from 'react'
import { createPortal } from 'react-dom'

interface ResumeViewerModalProps {
  isOpen: boolean
  onClose: () => void
  resumeHref: string
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

export function ResumeViewerModal({
  isOpen,
  onClose,
  resumeHref,
  returnFocusRef,
}: ResumeViewerModalProps) {
  const dialogId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const previousOverflowRef = useRef<string>('')

  useEffect(() => {
    if (!isOpen) {
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
  }, [isOpen, onClose, returnFocusRef])

  function handlePrint() {
    try {
      const frameWindow = iframeRef.current?.contentWindow

      if (frameWindow) {
        frameWindow.focus()
        frameWindow.print()
        return
      }
    } catch {
      // Fall through to the new-tab fallback below.
    }

    window.open(resumeHref, '_blank', 'noopener,noreferrer')
  }

  function handleDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab') {
      return
    }

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
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

  if (!isOpen || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div className="contact-viewer-backdrop fixed inset-0 z-50">
      <div className="contact-viewer-shell overflow-y-auto">
        <div className="mx-auto flex min-h-dvh w-full max-w-[92rem] items-stretch px-3 py-3 sm:px-5 sm:py-5">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogId}
            onKeyDown={handleDialogKeyDown}
            className="contact-viewer-frame sketch-shell flex w-full flex-col overflow-hidden rounded-[1.35rem]"
          >
            <div className="flex flex-col gap-4 border-b border-border px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-2">
                  <p className="sketch-badge sketch-badge-accent w-fit text-[0.64rem]">
                    Resume Viewer
                  </p>
                  <h3
                    id={dialogId}
                    className="font-display text-xl font-semibold text-foreground sm:text-2xl"
                  >
                    Review resume without leaving the portfolio
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={resumeHref}
                    download
                    aria-label="Download resume PDF"
                    className="sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-4 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={handlePrint}
                    aria-label="Print resume"
                    className="sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-4 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Print
                  </button>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close resume viewer"
                    className="sketch-button-primary inline-flex min-h-11 items-center justify-center rounded-control px-4 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Close
                  </button>
                </div>
              </div>

              <p className="text-sm leading-6 text-foreground-dim">
                If the PDF does not render clearly in your browser, use
                Download or{' '}
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent-muted underline underline-offset-4 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                >
                  open it in a new tab
                </a>
                .
              </p>
            </div>

            <div className="flex-1 p-3 sm:p-4">
              <iframe
                ref={iframeRef}
                title="Evandro resume PDF"
                src={resumeHref}
                className="contact-viewer-pdf rounded-card"
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
