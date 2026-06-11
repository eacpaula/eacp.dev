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

      <div className="rounded-card border border-border bg-surface p-8 shadow-card">
        <div className="space-y-7">
          <p className="text-lg leading-8 text-foreground-muted">
            {profile.summary}
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-control border border-border bg-surface-muted px-4 py-4 text-sm font-medium leading-6 text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="rounded-card border border-border bg-surface-strong p-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Languages
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              {profile.languages.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
