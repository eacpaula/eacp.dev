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
            className="rounded-card border border-border bg-surface p-7 shadow-card"
          >
            <div className="space-y-6">
              <div className="space-y-4 border-b border-border pb-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Featured impact
                </p>
                <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
                  {achievement.title}
                </h3>
              </div>

              <dl className="grid gap-4">
                <div className="rounded-control border border-border bg-surface-muted p-4">
                  <dt className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground-dim">
                    Context
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-foreground-muted">
                    {achievement.context}
                  </dd>
                </div>
                <div className="rounded-control border border-border bg-surface-muted p-4">
                  <dt className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground-dim">
                    Contribution
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-foreground-muted">
                    {achievement.contribution}
                  </dd>
                </div>
                <div className="rounded-control border border-accent bg-surface-strong p-4">
                  <dt className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground-dim">
                    Outcome
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-foreground">
                    {achievement.impact}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground-dim">
                    Related technologies
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {achievement.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-tag border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-muted"
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
