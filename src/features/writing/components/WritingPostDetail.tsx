import { Link } from '@tanstack/react-router'
import type { WritingPost } from '../data/writing.types'
import { formatPublishDate } from '../utils/publishDate'
import { WritingEvidenceGallery } from './WritingEvidenceGallery'
import { WritingRoleGraph } from './WritingRoleGraph'
import { WritingRoleProfiles } from './WritingRoleProfiles'
import { WritingShareActions } from './WritingShareActions'

interface WritingPostDetailProps {
  post: WritingPost
}

export function WritingPostDetail({ post }: WritingPostDetailProps) {
  const roleProfileById = new Map(
    (post.roleProfiles ?? []).map((roleProfile) => [roleProfile.id, roleProfile] as const),
  )
  const evidenceById = new Map(
    (post.roleEvidence ?? []).map((entry) => [entry.id, entry] as const),
  )
  const tableOfContentsItems = post.sections
    .filter((section) => section.includeInToc !== false)
    .map((section) => ({
      href: `#blog-section-${section.id}`,
      label: section.tocLabel ?? section.heading,
    }))

  const summaryCard = tableOfContentsItems.length ? (
    <section
      aria-label="Table of contents"
      className="sketch-surface-muted rounded-card p-5"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
            Summary
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">
            {post.tableOfContentsTitle ?? 'On this page'}
          </h2>
        </div>

        <ol className="space-y-3 text-sm leading-7 text-foreground-muted">
          {tableOfContentsItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex rounded-control transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  ) : null

  return (
    <article className="writing-detail space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          hash="blog"
          className="sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Back to Blog
        </Link>

        <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-foreground-dim">
          Published{' '}
          {formatPublishDate(post.publishDate, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <div className="writing-detail-hero sketch-shell rounded-card p-4 sm:p-5">
        <div className="writing-detail-hero-image-frame">
          <img
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            className="writing-detail-hero-image"
          />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex flex-wrap gap-2" aria-label="Post tags">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="sketch-badge sketch-badge-accent text-[0.6rem]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <h1 className="max-w-4xl font-display text-3xl font-semibold leading-[1.08] text-foreground sm:text-4xl lg:text-[2.9rem]">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground-muted sm:text-[1.08rem]">
            {post.summary}
          </p>
        </div>
      </div>

      {summaryCard ? <div className="xl:hidden">{summaryCard}</div> : null}

      <div className="writing-detail-layout">
        <div className="space-y-6">
          <section className="writing-detail-section scroll-mt-28 sketch-surface rounded-card p-5 sm:p-6">
            <div className="space-y-10">
              {post.sections.map((section) => (
                <div
                  key={section.id}
                  id={`blog-section-${section.id}`}
                  aria-labelledby={`blog-section-heading-${section.id}`}
                  className="space-y-5"
                >
                  <h2
                    id={`blog-section-heading-${section.id}`}
                    className="font-display text-2xl font-semibold text-foreground"
                  >
                    {section.heading}
                  </h2>

                  {section.paragraphs?.length ? (
                    <div className="writing-detail-prose space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-foreground-muted sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {section.callout ? (
                    <div className="sketch-surface-muted rounded-card p-4">
                      <p className="text-sm leading-7 text-foreground">
                        {section.callout}
                      </p>
                    </div>
                  ) : null}

                  {section.comparisonItems?.length ? (
                    <div className="grid gap-4 lg:grid-cols-3">
                      {section.comparisonItems.map((item) => (
                        <article
                          key={item.label}
                          className="sketch-surface-muted rounded-card p-4"
                        >
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <p className="sketch-badge sketch-badge-accent w-fit text-[0.6rem]">
                                Tool
                              </p>
                              <h3 className="text-lg font-semibold text-foreground">
                                {item.label}
                              </h3>
                              <p className="text-sm leading-7 text-foreground-muted">
                                {item.summary}
                              </p>
                            </div>

                            {item.strengths?.length ? (
                              <div className="space-y-2">
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                                  Strengths
                                </p>
                                <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
                                  {item.strengths.map((strength) => (
                                    <li key={strength} className="writing-list-item">
                                      {strength}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {item.cautions?.length ? (
                              <div className="space-y-2">
                                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                                  Cautions
                                </p>
                                <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
                                  {item.cautions.map((caution) => (
                                    <li key={caution} className="writing-list-item">
                                      {caution}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : null}

                  {section.pros?.length || section.cons?.length ? (
                    <div className="grid gap-4 lg:grid-cols-2">
                      {section.pros?.length ? (
                        <div className="sketch-surface-muted rounded-card p-4">
                          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                            What helped
                          </p>
                          <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground-muted">
                            {section.pros.map((pro) => (
                              <li key={pro} className="writing-list-item">
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {section.cons?.length ? (
                        <div className="sketch-surface-muted rounded-card p-4">
                          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                            What to watch
                          </p>
                          <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground-muted">
                            {section.cons.map((con) => (
                              <li key={con} className="writing-list-item">
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {section.roleProfileIds?.length ? (
                    <WritingRoleProfiles
                      roleProfiles={section.roleProfileIds
                        .map((roleProfileId) => roleProfileById.get(roleProfileId))
                        .filter((roleProfile): roleProfile is NonNullable<typeof roleProfile> =>
                          Boolean(roleProfile),
                        )}
                    />
                  ) : null}

                  {section.evidenceIds?.length ? (
                    <WritingEvidenceGallery
                      evidenceEntries={section.evidenceIds
                        .map((evidenceId) => evidenceById.get(evidenceId))
                        .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))}
                    />
                  ) : null}

                  {section.renderRoleGraph && post.roleGraph ? (
                    <WritingRoleGraph
                      graph={post.roleGraph}
                      roleProfiles={post.roleProfiles}
                    />
                  ) : null}
                </div>
              ))}

              {post.finalReflection ? (
                <div className="space-y-5 border-t border-white/8 pt-10">
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {post.finalReflection.heading}
                  </h2>

                  <div className="writing-detail-prose space-y-4">
                    {post.finalReflection.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-8 text-foreground-muted sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {post.finalReflection.callout ? (
                    <div className="sketch-surface-muted rounded-card p-4">
                      <p className="text-sm leading-7 text-foreground">
                        {post.finalReflection.callout}
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          {summaryCard ? <div className="hidden xl:block">{summaryCard}</div> : null}

          <WritingShareActions post={post} />

          {post.keyTakeaways?.length ? (
            <section className="sketch-paper rounded-card p-5">
              <div className="space-y-3">
                <p className="sketch-badge sketch-badge-paper w-fit text-[0.64rem]">
                  Key Takeaways
                </p>
                <ul className="space-y-3 text-sm leading-7 text-foreground-ink">
                  {post.keyTakeaways.map((takeaway) => (
                    <li
                      key={takeaway}
                      className="writing-list-item writing-list-item-paper"
                    >
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}
        </aside>
      </div>
    </article>
  )
}
