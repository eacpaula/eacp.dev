import { SectionHeading } from '../ui/SectionHeading'
import type { Profile } from '../../types/content'

interface ProfessionalSummarySectionProps {
  profile: Profile
}

export function ProfessionalSummarySection({
  profile,
}: ProfessionalSummarySectionProps) {
  return (
    <section id="summary" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <SectionHeading
        eyebrow="Professional Summary"
        title="The profile stays concise, but the engineering signal is explicit."
        description="The summary keeps the focus on modernization, reusable systems, backend depth, and delivery quality without sliding into biography-style filler."
      />

      <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)]">
        <div className="space-y-7">
          <p className="text-lg leading-8 text-[var(--text-base)]">
            {profile.summary}
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4 text-sm font-medium leading-6 text-[var(--text-strong)]"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              Languages
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-strong)]">
              {profile.languages.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
