import { SectionHeading } from '../ui/SectionHeading'
import type { CaseStudyPreview } from '../../types/content'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudyPreview[]
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="space-y-10">
      <SectionHeading
        eyebrow="Featured Case Studies"
        title="Detailed engineering writeups are planned, but not faked."
        description="The MVP previews the themes that deserve deeper treatment later without pretending those case studies already exist."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <article
            key={caseStudy.slug}
            className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[var(--accent-strong)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-strong)]">
                  {caseStudy.status}
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-2xl text-[var(--text-strong)]">
                {caseStudy.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">
                {caseStudy.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.relatedThemes.map((theme) => (
                  <span
                    key={`${caseStudy.slug}-${theme}`}
                    className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
