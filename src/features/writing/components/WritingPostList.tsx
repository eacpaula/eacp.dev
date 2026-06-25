import type { WritingPostPreview } from '../data/writing.types'
import { WritingPostCard } from './WritingPostCard'

interface WritingPostListProps {
  posts: WritingPostPreview[]
}

export function WritingPostList({ posts }: WritingPostListProps) {
  return (
    <div className="writing-list-stack">
      {posts.map((post) => (
        <WritingPostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
