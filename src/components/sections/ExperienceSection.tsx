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
            className="grid gap-6 rounded-card border border-border bg-surface p-6 shadow-card lg:grid-cols-[240px_1fr]"
          >
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {item.period}
              </p>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {item.organization}
              </h3>
              <p className="text-sm leading-6 text-foreground-muted">{item.role}</p>
            </div>

            <div className="space-y-5">
              <p className="text-sm leading-7 text-foreground-muted">{item.context}</p>
              <ul className="grid gap-3 md:grid-cols-2">
                {item.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="rounded-control border border-border bg-surface-muted px-4 py-4 text-sm leading-7 text-foreground"
                  >
                    {contribution}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={`${item.id}-${technology}`}
                    className="rounded-tag border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-foreground-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="rounded-card border border-accent bg-surface-strong px-4 py-4 text-sm leading-7 text-foreground">
                {item.impact}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
