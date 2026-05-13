import { SectionHeading } from '../ui/SectionHeading'
import type { ContactMethod } from '../../types/content'

interface ContactSectionProps {
  availabilityNote: string
  contactMethods: ContactMethod[]
}

export function ContactSection({
  availabilityNote,
  contactMethods,
}: ContactSectionProps) {
  return (
    <section id="contact" className="space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title="Clear next steps for recruiters, hiring managers, and technical teams."
        description="The page keeps the contact surface professional: email, profiles, and the resume are easy to reach without exposing unnecessary personal details."
      />

      <div className="grid gap-6 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg leading-8 text-[var(--text-muted)]">
            {availabilityNote}
          </p>
          <p className="text-sm leading-7 text-[var(--text-muted)]">
            The best fit is work that values practical full stack engineering,
            modernization, reusable systems, and delivery quality.
          </p>
        </div>

        <ul className="grid gap-3">
          {contactMethods.map((method) => (
            <li key={method.label}>
              <a
                href={method.href}
                target={method.kind === 'email' ? undefined : '_blank'}
                rel={method.kind === 'email' ? undefined : 'noreferrer'}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-4 transition hover:border-[var(--accent-strong)] hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]"
              >
                <span className="block text-sm font-semibold text-[var(--text-strong)]">
                  {method.label}
                </span>
                {method.description ? (
                  <span className="mt-1 block text-sm leading-6 text-[var(--text-muted)]">
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
