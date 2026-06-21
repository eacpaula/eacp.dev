import { SectionHeading } from '../ui/SectionHeading'
import { TiltCard } from '../ui/TiltCard'
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
        title=""
        description=""
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <TiltCard key={achievement.id} maxTilt={8}>
          <article
            className="sketch-metric-card rounded-[1rem] p-5"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent">
                    {achievement.proofLabel}
                  </p>
                  <h3 className="mt-2 font-display text-4xl font-semibold leading-none text-foreground">
                    {achievement.proofMetric}
                  </h3>
                </div>
                <span className="sketch-badge sketch-badge-muted text-[0.64rem]">
                  Impact
                </span>
              </div>

              <div className="space-y-3">
                {achievement.detailHref ? (
                  <a
                    href={achievement.detailHref}
                    className="inline-block text-base font-semibold leading-7 text-foreground transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                  >
                    {achievement.title}
                  </a>
                ) : (
                  <p className="text-base font-semibold leading-7 text-foreground">
                    {achievement.title}
                  </p>
                )}
                <p className="text-sm leading-7 text-foreground-muted">
                  {achievement.proofQualifier}
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground-dim">
                  Related technologies
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {achievement.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="sketch-badge sketch-badge-muted text-[0.68rem]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {achievement.detailHref ? (
                  <a
                    href={achievement.detailHref}
                    className="mt-4 inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-strong focus-visible:text-accent-strong focus-visible:outline-none"
                  >
                    View detail
                  </a>
                ) : null}
              </div>
            </div>
          </article>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
