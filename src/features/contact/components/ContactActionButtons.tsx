import type { RefObject } from 'react'
import type { ContactAction } from '../../../types/content'

interface ContactActionButtonsProps {
  actions: ContactAction[]
  isScheduling: boolean
  schedulingFeedback: string | null
  onSchedule: (url: string) => void
  onResume: () => void
  resumeButtonRef: RefObject<HTMLButtonElement | null>
}

export function ContactActionButtons({
  actions,
  isScheduling,
  schedulingFeedback,
  onSchedule,
  onResume,
  resumeButtonRef,
}: ContactActionButtonsProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-center gap-3">
        {actions.map((action) => {
          if (action.kind === 'profile') {
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.opensInNewContext ? '_blank' : undefined}
                rel={action.opensInNewContext ? 'noreferrer' : undefined}
                className="sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {action.label}
              </a>
            )
          }

          if (action.kind === 'scheduling') {
            return (
              <button
                key={action.label}
                type="button"
                onClick={() => onSchedule(action.href)}
                disabled={isScheduling}
                aria-label="Schedule a call"
                className="sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {isScheduling ? 'Opening...' : action.label}
              </button>
            )
          }

          return (
            <button
              key={action.label}
              ref={resumeButtonRef}
              type="button"
              onClick={onResume}
              aria-label="Open resume viewer"
              className="sketch-button-primary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {action.label}
            </button>
          )
        })}
      </div>

      <p
        aria-live="polite"
        className="min-h-6 text-center text-sm leading-6 text-foreground-dim"
      >
        {schedulingFeedback}
      </p>
    </div>
  )
}
