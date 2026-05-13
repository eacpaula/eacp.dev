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
        title="Structured for recruiter scanning, not résumé overload."
        description="Core strengths are emphasized first. Experience labels stay compact, and the grouping reflects how the work is actually evaluated in senior hiring conversations."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-[var(--font-display)] text-2xl text-[var(--text-strong)]">
                  {group.category}
                </h3>
                {group.priorityNote ? (
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
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
                          ? 'inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)] bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold text-[var(--text-strong)]'
                          : 'inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-medium text-[var(--text-strong)]'
                      }
                    >
                      <span>{skill.name}</span>
                      {skill.yearsLabel ? (
                        <span className="text-[var(--text-muted)]">{skill.yearsLabel}</span>
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
