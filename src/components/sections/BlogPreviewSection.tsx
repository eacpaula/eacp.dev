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
            className="sketch-surface flex flex-col gap-4 rounded-card p-5 md:flex-row md:items-start md:justify-between"
          >
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {topic.title}
              </h3>
              <p className="max-w-3xl text-sm leading-7 text-foreground-muted">
                {topic.summary}
              </p>
            </div>
            <span className="sketch-badge sketch-badge-muted shrink-0 text-[0.64rem]">
              {topic.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
