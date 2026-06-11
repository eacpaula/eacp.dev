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
            className="rounded-card border border-border bg-surface p-6 shadow-card"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-tag border border-accent bg-accent-soft px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-muted">
                  {caseStudy.status}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {caseStudy.title}
              </h3>
              <p className="text-sm leading-7 text-foreground-muted">
                {caseStudy.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.relatedThemes.map((theme) => (
                  <span
                    key={`${caseStudy.slug}-${theme}`}
                    className="rounded-tag border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground-muted"
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
