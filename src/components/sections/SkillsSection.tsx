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
        title=""
        description=""
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="sketch-surface rounded-card p-6"
          >
            <div className="space-y-4">
              <div className="space-y-2 border-b border-border pb-4">
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
                          ? 'sketch-badge sketch-badge-accent text-[0.68rem]'
                          : 'sketch-badge sketch-badge-muted text-[0.68rem]'
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
