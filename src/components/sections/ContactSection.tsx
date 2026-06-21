import { useState } from 'react'
import { openCalendlyPopup } from '../../lib/integrations/calendly'
import type { ContactMethod, SchedulingCta } from '../../types/content'
import { SectionHeading } from '../ui/SectionHeading'

interface ContactSectionProps {
  availabilityNote: string
  contactMethods: ContactMethod[]
  schedulingCta: SchedulingCta
  supportingText: string
}

export function ContactSection({
  availabilityNote,
  contactMethods,
  schedulingCta,
  supportingText,
}: ContactSectionProps) {
  const [isScheduling, setIsScheduling] = useState(false)
  const [schedulingFeedback, setSchedulingFeedback] = useState<string | null>(
    null,
  )

  async function handleSchedulingActivation() {
    if (isScheduling) {
      return
    }

    setIsScheduling(true)
    setSchedulingFeedback(null)

    const result = await openCalendlyPopup(schedulingCta.url)

    if (result.status !== 'opened') {
      setSchedulingFeedback(result.message)
    }

    setIsScheduling(false)
  }

  return (
    <section id="contact" className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="The next step should be obvious if the work looks relevant."
        description="Email, profile links, and the resume stay easy to reach. The contact area is direct, professional, and intentionally low-friction."
      />

      <div className="sketch-shell grid gap-6 rounded-card p-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg leading-8 text-foreground-muted">
              {availabilityNote}
            </p>
            <p className="text-sm leading-7 text-foreground-muted">
              {supportingText}
            </p>
          </div>

          <div className="sketch-surface-muted rounded-card p-5">
            <div className="space-y-3">
              <p className="sketch-badge sketch-badge-accent w-fit text-[0.64rem]">
                Professional Scheduling
              </p>
              <div className="space-y-2">
                <p className="text-base font-semibold text-foreground">
                  {schedulingCta.description}
                </p>
                <p className="text-sm leading-7 text-foreground-muted">
                  {schedulingCta.intent}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                onClick={handleSchedulingActivation}
                disabled={isScheduling}
                className="sketch-button-primary inline-flex min-h-12 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold transition hover:-translate-y-px disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {isScheduling ? 'Opening scheduler...' : schedulingCta.label}
              </button>
              <p
                aria-live="polite"
                className="min-h-6 text-sm leading-6 text-foreground-dim"
              >
                {schedulingFeedback ??
                  'The popup opens on demand and falls back cleanly if Calendly is unavailable.'}
              </p>
            </div>
          </div>
        </div>

        <ul className="grid gap-3">
          {contactMethods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                target={method.kind === 'email' ? undefined : '_blank'}
                rel={method.kind === 'email' ? undefined : 'noreferrer'}
                className="sketch-surface-muted block rounded-control px-5 py-4 transition hover:border-accent hover:bg-surface-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="block text-sm font-semibold text-foreground">
                  {method.label}
                </span>
                {method.description ? (
                  <span className="mt-1 block text-sm leading-6 text-foreground-muted">
                    {method.description}
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
