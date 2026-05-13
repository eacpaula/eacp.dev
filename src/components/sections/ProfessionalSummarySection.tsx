import { SectionHeading } from '../ui/SectionHeading'
import type { Profile } from '../../types/content'

interface ProfessionalSummarySectionProps {
  profile: Profile
}

export function ProfessionalSummarySection({
  profile,
}: ProfessionalSummarySectionProps) {
  return (
    <section id="summary" className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
      <SectionHeading
        eyebrow="Professional Summary"
        title="A senior engineering profile built around modernization, leverage, and delivery quality."
        description="The MVP focuses on what recruiters and technical interviewers need first: technical depth, business impact, and the specific kinds of systems Evandro has improved."
      />

      <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)]">
        <div className="space-y-6">
          <p className="text-lg leading-8 text-[var(--text-muted)]">
            {profile.summary}
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4 text-sm leading-6 text-[var(--text-strong)]"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
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
