# Research: Local JSON-Driven Writing Experience

## Decision 1: Use one JSON file per post plus a small typed registry

- **Decision**: Store each published article in its own JSON file under
  `src/features/writing/data/posts/` and keep a small `posts.index.ts` registry
  responsible for importing those files, validating required fields, sorting
  posts, and exposing list and lookup helpers.
- **Rationale**: The approved specification requires one JSON file per post and
  allows a small registration step. A registry keeps ordering and future
  metadata curation explicit, matches the repository's current preference for
  local curated modules, and avoids introducing content-loading magic.
- **Alternatives considered**:
  - One large combined JSON file: rejected because it makes future post
    maintenance noisier and weakens the per-post authoring workflow.
  - Runtime `import.meta.glob` discovery: rejected because it hides ordering and
    validation behind implicit behavior for limited practical gain.

## Decision 2: Use route-based post pages with a lightweight router

- **Decision**: Add lightweight route infrastructure so each article lives at a
  dedicated path such as `/writing/spec-driven-development`, while keeping the
  Writing list on the portfolio home page at `/#blog`.
- **Rationale**: The approved implementation direction requires each post to
  open on a separate isolated page rather than inside the one-page layout.
  Route-based pages give clean direct links, better mental separation between
  list and article reading, and a clearer share target.
- **Alternatives considered**:
  - Query-parameter detail state inside the home page: rejected because it does
    not satisfy the requirement for a separate page per post.
  - Keep detail state only in local component state: rejected because it would
    not support direct links or robust share URLs.

## Decision 3: Add a static-host fallback for direct post URLs

- **Decision**: Keep `BrowserRouter` and add a root `404.html` redirect shim so
  direct requests to `/writing/:slug` still recover correctly on static
  hosting.
- **Rationale**: The portfolio is deployed as a static site. Dedicated routes
  need a client-side fallback so shared links and refreshes on post pages do
  not return a host-level 404.
- **Alternatives considered**:
  - Switch to `HashRouter`: rejected because it produces less clean article
    URLs.
  - Require server rewrites: rejected because the feature must stay
    static-host-friendly without backend or host-specific configuration.

## Decision 4: Use structured JSON sections instead of Markdown, raw HTML, or JSX

- **Decision**: Model full post content as ordered JSON sections with plain
  paragraphs plus optional structured fields for comparison items, pros, cons,
  and key takeaways.
- **Rationale**: The feature needs long-form content plus a few editorial
  structures for the first post, but does not justify Markdown parsing, MDX, or
  raw HTML rendering. Structured JSON stays portable, easy to validate, and
  easier to migrate later if the blog grows.
- **Alternatives considered**:
  - Markdown or MDX: rejected because the specification explicitly prefers to
    avoid it unless truly necessary, and the current content needs are modest.
  - Storing JSX fragments in source files: rejected because it breaks the
    per-post JSON requirement and ties content too tightly to rendering code.

## Decision 5: Store cover illustrations as local public assets referenced by JSON

- **Decision**: Place post cover illustrations under `public/writing/` and let
  each post JSON file reference its local asset path directly.
- **Rationale**: Public assets keep the authoring model simple for JSON-driven
  content, avoid per-post asset imports, and work cleanly with the repository's
  existing base-path-aware asset usage.
- **Alternatives considered**:
  - Import cover images from `src/` modules: rejected because every new post
    would need both JSON edits and asset import plumbing.
  - Use external image hosts: rejected because the feature must remain entirely
    local and static-first.

## Decision 6: Prefer an SVG cover illustration for the first post

- **Decision**: Create the first Spec-Driven Development cover as a local SVG
  illustration with graphite surfaces, subtle gold accents, and structured
  workflow motifs.
- **Rationale**: SVG is lightweight, crisp at all screen sizes, easy to keep
  aligned with the editorial brand, and simpler to maintain for an original
  abstract technical illustration than raster export workflows.
- **Alternatives considered**:
  - PNG or WebP artwork: rejected for the initial post because the concept does
    not require photographic texture or heavy painterly detail.
  - Reusing generic stock or external imagery: rejected because the feature must
    feel original and integrated with the portfolio identity.

## Decision 7: Keep share actions as simple destination URLs with no SDKs

- **Decision**: Implement LinkedIn, Telegram, and WhatsApp sharing through
  plain URL-based share targets generated from the current post's canonical
  detail URL and title/summary.
- **Rationale**: URL-based share links satisfy the feature requirement, keep the
  site static, and avoid third-party scripts, SDK maintenance, and privacy
  overhead.
- **Alternatives considered**:
  - Third-party share widgets or SDKs: rejected because they add unnecessary
    runtime weight and external dependencies.
  - A copy-only share pattern: rejected because the feature explicitly requires
    destination-specific share actions.

## Decision 8: Replace the old section with a feature-scoped Writing module

- **Decision**: Retire the current `BlogPreviewSection` placeholder flow and
  replace it with a `src/features/writing/` module composed from list, detail,
  share, and empty-state components.
- **Rationale**: The new Writing experience has enough local data and view-state
  logic to justify a feature boundary, and moving it out of shared placeholder
  content avoids expanding `src/content/blog-topics.ts` into a pseudo CMS.
- **Alternatives considered**:
  - Keep extending `src/components/sections/BlogPreviewSection.tsx` and
    `src/content/blog-topics.ts`: rejected because those files describe
    placeholder previews, not a durable article system.
  - Build the feature directly inside `AppShell.tsx`: rejected because it would
    blur page composition with content and interaction logic.
