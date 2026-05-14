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
        title="These are planned deep dives, not filler cards pretending to be finished work."
        description="Each preview points to a real engineering theme worth unpacking later, while staying explicit that the long-form writeup is still upcoming."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <article
            key={caseStudy.slug}
            className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-xl border border-[var(--accent-strong)] bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-contrast)]">
                  {caseStudy.status}
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--text-strong)]">
                {caseStudy.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-muted)]">
                {caseStudy.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.relatedThemes.map((theme) => (
                  <span
                    key={`${caseStudy.slug}-${theme}`}
                    className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs text-[var(--text-muted)]"
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
