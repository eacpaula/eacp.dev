import { SectionHeading } from '../../components/ui/SectionHeading'
import { writingPostPreviews, writingPosts } from './data/posts.index'
import { WritingEmptyState } from './components/WritingEmptyState'
import { WritingPostList } from './components/WritingPostList'

export function WritingSection() {
  return (
    <section id="blog" className="space-y-10 scroll-mt-28">
      <SectionHeading
        eyebrow="Blog"
        title="Published engineering notes with real opinions behind them."
        description=""
      />

      {writingPosts.length > 0 ? <WritingPostList posts={writingPostPreviews} /> : null}

      {writingPosts.length === 0 ? (
        <WritingEmptyState
          eyebrow="Blog In Progress"
          title="Published posts will appear here as they are added."
          description="The local content system is ready for long-form blog posts, but no articles are currently registered."
        />
      ) : null}
    </section>
  )
}
