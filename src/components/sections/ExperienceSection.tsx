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
            className="sketch-surface grid gap-6 rounded-card p-6 lg:grid-cols-[240px_1fr]"
          >
            <div className="space-y-3 border-b border-border pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
              <p className="sketch-badge sketch-badge-accent w-fit text-[0.64rem]">
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
                    className="sketch-surface-muted rounded-control px-4 py-4 text-sm leading-7 text-foreground"
                  >
                    {contribution}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={`${item.id}-${technology}`}
                    className="sketch-badge sketch-badge-muted text-[0.68rem]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="sketch-surface-strong rounded-card border border-accent px-4 py-4 text-sm leading-7 text-foreground">
                {item.impact}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
