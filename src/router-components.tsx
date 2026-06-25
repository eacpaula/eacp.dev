import { Link, Outlet, useParams } from '@tanstack/react-router'
import { WritingPostPage } from './features/writing/WritingPostPage'

export function RootRouteComponent() {
  return <Outlet />
}

export function RouterNotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[68.75rem] flex-col justify-center gap-6 px-4 py-16 text-foreground sm:px-6">
      <div className="space-y-3">
        <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
          Page Unavailable
        </p>
        <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          That page does not exist in this portfolio.
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
          Use the main portfolio navigation or return to the home page to keep
          browsing.
        </p>
      </div>

      <Link
        to="/"
        hash="hero"
        className="sketch-button-secondary inline-flex min-h-11 w-fit items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to Home
      </Link>
    </main>
  )
}

export function BlogPostRouteComponent() {
  const params = useParams({ strict: false })
  const slug = typeof params.slug === 'string' ? params.slug : undefined

  return <WritingPostPage slug={slug} />
}
