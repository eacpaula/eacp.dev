import { SectionHeading } from '../ui/SectionHeading'
import type { SkillGroup } from '../../types/content'

interface SkillsSectionProps {
  skillGroups: SkillGroup[]
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-10">
      <SectionHeading
        eyebrow="Skills and Technology"
        title="The skills section is organized for real evaluation, not keyword stuffing."
        description="Core strengths surface first, supporting tools stay visible without dominating the layout, and the grouping reflects how technical hiring conversations usually happen."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-card border border-border bg-surface p-6 shadow-card"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {group.category}
                </h3>
                {group.priorityNote ? (
                  <p className="mt-2 text-sm leading-6 text-foreground-muted">
                    {group.priorityNote}
                  </p>
                ) : null}
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={`${group.category}-${skill.name}`}>
                    <span
                      className={
                        skill.emphasis === 'core'
                          ? 'inline-flex items-center gap-2 rounded-tag border border-accent bg-accent-soft px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-muted'
                          : 'inline-flex items-center gap-2 rounded-tag border border-border bg-surface-muted px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-muted'
                      }
                    >
                      <span>{skill.name}</span>
                      {skill.yearsLabel ? (
                        <span className="text-foreground-dim">{skill.yearsLabel}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
