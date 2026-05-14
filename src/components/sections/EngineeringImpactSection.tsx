import { SectionHeading } from '../ui/SectionHeading'
import type { Achievement } from '../../types/content'

interface EngineeringImpactSectionProps {
  achievements: Achievement[]
}

export function EngineeringImpactSection({
  achievements,
}: EngineeringImpactSectionProps) {
  return (
    <section id="impact" className="space-y-10">
      <SectionHeading
        eyebrow="Engineering Impact"
        title="The strongest signal is concrete delivery, not vague portfolio language."
        description="Each impact entry separates the context, contribution, and outcome so technical reviewers can scan what changed without reading a wall of copy."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)]"
          >
            <div className="space-y-6">
              <div className="space-y-4 border-b border-[var(--border)] pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  Featured impact
                </p>
                <h3 className="font-[var(--font-display)] text-2xl font-semibold leading-tight text-[var(--text-strong)]">
                  {achievement.title}
                </h3>
              </div>

              <dl className="grid gap-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Context
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                    {achievement.context}
                  </dd>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Contribution
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                    {achievement.contribution}
                  </dd>
                </div>
                <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-strong)] p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Outcome
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--text-strong)]">
                    {achievement.impact}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Related technologies
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {achievement.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--text-strong)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
