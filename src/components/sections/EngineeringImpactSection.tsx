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
        title="Concrete outcomes instead of generic portfolio claims."
        description="Each item keeps the same shape: what the context was, how Evandro contributed, what changed, and which technologies were involved."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)]"
          >
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                  Featured impact
                </p>
                <h3 className="font-[var(--font-display)] text-2xl leading-tight text-[var(--text-strong)]">
                  {achievement.title}
                </h3>
              </div>

              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Problem / context
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                    {achievement.context}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Action / contribution
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                    {achievement.contribution}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Result / impact
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
                        className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-strong)]"
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
