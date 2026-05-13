import { SectionHeading } from '../ui/SectionHeading'
import type { BlogTopicPreview } from '../../types/content'

interface BlogPreviewSectionProps {
  blogTopics: BlogTopicPreview[]
}

export function BlogPreviewSection({ blogTopics }: BlogPreviewSectionProps) {
  return (
    <section id="blog" className="space-y-10">
      <SectionHeading
        eyebrow="Blog Preview"
        title="Future technical writing is part of the plan, not a placeholder afterthought."
        description="The structure is ready for later Hashnode or headless integration, but the MVP keeps the source local and clearly marks topics as upcoming."
      />

      <div className="grid gap-4">
        {blogTopics.map((topic) => (
          <article
            key={topic.slug}
            className="flex flex-col gap-4 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] md:flex-row md:items-start md:justify-between"
          >
            <div className="space-y-2">
              <h3 className="font-[var(--font-display)] text-2xl text-[var(--text-strong)]">
                {topic.title}
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)]">
                {topic.summary}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {topic.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
