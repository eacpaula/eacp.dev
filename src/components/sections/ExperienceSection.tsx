import { SectionHeading } from '../ui/SectionHeading'
import type { ExperienceItem } from '../../types/content'

interface ExperienceSectionProps {
  experienceItems: ExperienceItem[]
}

export function ExperienceSection({ experienceItems }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-10">
      <SectionHeading
        eyebrow="Experience Timeline"
        title="Each role stays concise, but the engineering context is still visible."
        description="The timeline keeps the emphasis on operating environment, contributions, and outcomes instead of reproducing the resume line by line."
      />

      <div className="space-y-5">
        {experienceItems.map((item) => (
          <article
            key={item.id}
            className="grid gap-6 rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[240px_1fr]"
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                {item.period}
              </p>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--text-strong)]">
                {item.organization}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-muted)]">{item.role}</p>
            </div>

            <div className="space-y-5">
              <p className="text-sm leading-7 text-[var(--text-muted)]">{item.context}</p>
              <ul className="grid gap-3 md:grid-cols-2">
                {item.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-4 text-sm leading-7 text-[var(--text-strong)]"
                  >
                    {contribution}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={`${item.id}-${technology}`}
                    className="rounded-xl border border-[var(--border-strong)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-strong)] px-4 py-4 text-sm leading-7 text-[var(--text-strong)]">
                {item.impact}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
