import { SectionHeading } from '../ui/SectionHeading'
import type { BlogTopicPreview } from '../../types/content'

interface BlogPreviewSectionProps {
  blogTopics: BlogTopicPreview[]
}

export function BlogPreviewSection({ blogTopics }: BlogPreviewSectionProps) {
  return (
    <section id="blog" className="space-y-10">
      <SectionHeading
        eyebrow="Writing Roadmap"
        title="The blog area points to practical technical writing that is worth publishing later."
        description="The structure stays local and static-first for now, but the topics already reflect the kind of engineering work the site should eventually unpack in public."
      />

      <div className="grid gap-4">
        {blogTopics.map((topic) => (
          <article
            key={topic.slug}
            className="flex flex-col gap-4 rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] md:flex-row md:items-start md:justify-between"
          >
            <div className="space-y-2">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--text-strong)]">
                {topic.title}
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)]">
                {topic.summary}
              </p>
            </div>
            <span className="shrink-0 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {topic.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
