# Quickstart: Local JSON-Driven Writing Experience

## Recommended Implementation Order

1. Audit the current placeholder Writing flow in `src/components/sections/BlogPreviewSection.tsx`,
   `src/content/blog-topics.ts`, `src/content/site-metadata.ts`, and
   `src/app/AppShell.tsx` so the replacement work stays bounded to the current
   section.
2. Create the feature-scoped types, JSON registry, and URL-state helpers under
   `src/features/writing/` before building any UI so list/detail behavior is
   driven by stable content and navigation primitives.
3. Add the first post JSON file and the local cover asset, then validate that
   the content model fully supports the approved Spec-Driven Development brief.
4. Add the route shell in `src/App.tsx`, `src/main.tsx`, and the dedicated
   `WritingPostPage.tsx` so article navigation is path-based from the start.
5. Implement the root `WritingSection.tsx` list orchestration and the dedicated
   post-page rendering flow.
6. Build the list, row, detail, share, and empty-state components with the
   existing graphite-plus-gold design language and semantic reading structure.
7. Update `AppShell.tsx` and `src/content/site-metadata.ts` to swap out the old
   placeholder section while preserving the `Writing` navigation label and
   `#blog` anchor.
8. Update `SiteHeader.tsx`, `index.html`, `404.html`, and `vite.config.ts` so
   dedicated post URLs still work cleanly on static hosting.
9. Remove obsolete placeholder data and types only after the new Writing
   experience fully covers the same section role.
10. Run validation and content review before any optional visual polish beyond
   the approved design system.

## File-by-File Plan

- `src/features/writing/data/writing.types.ts`
  Define `WritingPost`, `WritingCoverImage`, `WritingSectionBlock`,
  `WritingComparisonItem`, and `WritingShareMetadata`.
- `src/features/writing/data/posts/spec-driven-development.json`
  Author the first real published article using the approved JSON schema and the
  required SDD comparison content.
- `src/features/writing/data/posts.index.ts`
  Import the post JSON files, sort published entries, expose list-preview data,
  and provide slug lookup helpers.
- `src/features/writing/utils/writingUrlState.ts`
  Centralize Writing list and post-route path helpers.
- `src/features/writing/utils/shareLinks.ts`
  Generate LinkedIn, Telegram, and WhatsApp share URLs for the active post.
- `src/features/writing/components/WritingPostCard.tsx`
  Render the stacked list-row surface for image, title, and short description.
- `src/features/writing/components/WritingPostList.tsx`
  Render the stacked list of published posts.
- `src/features/writing/components/WritingPostDetail.tsx`
  Render the editorial reading layout, metadata, body sections, and return
  action.
- `src/features/writing/components/WritingShareActions.tsx`
  Render the three required share controls with accessible labeling.
- `src/features/writing/components/WritingEmptyState.tsx`
  Render a safe fallback for no posts or an unavailable slug.
- `src/features/writing/WritingSection.tsx`
  Compose the home-page Writing list and feature-level heading/section layout.
- `src/features/writing/WritingPostPage.tsx`
  Render the dedicated route-based post page, invalid-slug fallback, and page
  metadata updates.
- `src/App.tsx`
  Register the home route and `/writing/:slug` route.
- `src/main.tsx`
  Mount the router with the correct base path.
- `src/components/layout/SiteHeader.tsx`
  Keep the existing anchor navigation working both on the home page and from
  dedicated post routes.
- `public/writing/spec-driven-development-cover.svg`
  Hold the original local cover illustration for the first article.
- `index.html`
  Restore route redirects after static-host fallback handoff.
- `404.html`
  Redirect unknown static-host routes back into the SPA while preserving the
  intended Writing path.
- `vite.config.ts`
  Emit both `index.html` and `404.html` for static-host route recovery.
- `src/app/AppShell.tsx`
  Replace the placeholder `BlogPreviewSection` with the new feature component.
- `src/content/site-metadata.ts`
  Preserve the `Writing` navigation item while keeping it pointed at `#blog`.
- `src/lib/content/index.ts`
  Remove the old `blogTopicPreviews` export if it becomes obsolete.
- `src/types/content.ts`
  Remove or retire the placeholder `BlogTopicPreview` type if it is no longer
  referenced.
- `src/styles/globals.css`
  Add only the shared Writing-specific styles needed for card treatment, article
  layout, focus states, and editorial spacing while staying aligned with
  `DESIGN.md`.

## First Post Structure Plan

- Opening context: why Spec-Driven Development became worth testing in real
  work
- Practical definition: what structured specification work changes compared with
  ad hoc prompting
- OpenSpec section: what felt useful, where flexibility helped, and where it
  could weaken results
- Spec Kit section: why the workflow felt clearer, more verbose, and better
  structured
- Kiro section: why the IDE-native experience felt coherent and promising, with
  explicit limits on the depth of evaluation
- Comparison section: direct contrast of OpenSpec, Spec Kit, and Kiro
- Reflection section: pure vibe coding, prompt quality, and the role of human
  context and research
- Closing takeaways: practical lessons for engineers using AI-assisted
  specification workflows

## Suggested Validation Pass

- Run `npm run lint`.
- Run `npm run test`.
- Run `npm run build`.
- Verify the Writing list renders real local post entries and no placeholder
  entries remain.
- Verify selecting a list entry opens the full article on `/writing/:slug` and
  the return path restores the list view.
- Verify a direct-link post URL opens the correct article and an invalid slug
  shows a graceful fallback.
- Verify share actions open destination-specific handoff URLs for LinkedIn,
  Telegram, and WhatsApp.
- Verify the first Spec-Driven Development article renders all required content
  sections, comparisons, and reflections.
- Review desktop, tablet, and mobile layouts for readable list rows,
  comfortable line length, and usable share controls.
- Review keyboard navigation, focus visibility, alt text behavior, and heading
  structure.
- Confirm that unrelated sections still behave the same after the Writing
  replacement.
