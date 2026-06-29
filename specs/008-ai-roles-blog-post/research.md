# Research: AI Roles and Software Engineering Blog Post

## Decision 1: Keep the article self-contained in one local JSON post file

- **Decision**: Store the new article in one JSON file under
  `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
  and extend the existing `WritingPost` shape additively instead of creating a
  second content system or a detached graph-only data source.
- **Rationale**: The current Writing feature already uses one JSON file per
  post plus a small registry. Keeping the role descriptions, evidence
  placeholders, graph data, and final reflection together preserves that
  workflow and keeps future editing focused on one content artifact.
- **Alternatives considered**:
  - Split the graph into a separate file immediately: rejected because this is
    only the second post and a second source of truth would add more registry
    work than value right now.
  - Move the article to MDX or JSX: rejected because the current Writing system
    is intentionally JSON-driven and the feature does not justify a content
    format migration.

## Decision 2: Extend the existing Writing schema with structured optional fields

- **Decision**: Add optional structured fields for `roleProfiles`,
  `roleEvidence`, `roleGraph`, and `finalReflection`, and let ordered article
  sections reference those records by ID when they need to render specialized
  content inside the normal detail flow.
- **Rationale**: The current `WritingPostDetail` renderer already understands
  ordered sections, prose blocks, comparison items, and list-style callouts.
  An additive schema extension preserves backward compatibility for the
  Spec-Driven Development post while avoiding hardcoded post-specific JSX.
- **Alternatives considered**:
  - Hardcode this article in a custom component: rejected because it would
    bypass the local post workflow and make future maintenance inconsistent.
  - Replace `WritingSectionBlock` with a full generic block-registry system:
    rejected because the feature needs only a few new block types and not a
    platform-level renderer rewrite.

## Decision 3: Use careful practice-based role descriptions instead of faux authority

- **Decision**: Model each role profile with practical description fields,
  overlap/confusion notes, and emphasis categories, while requiring the actual
  copy to use grounded wording such as "usually involves" or "in practice"
  where the post is describing market patterns rather than verified personal
  credentials.
- **Rationale**: The approved spec explicitly forbids inflated claims and asks
  for non-authoritative wording unless a stronger citation system already
  exists. Encoding that expectation directly into the data model keeps the
  article honest.
- **Alternatives considered**:
  - Write assertive role definitions as if they were universal: rejected
    because titles vary by company and the article should acknowledge that.
  - Add a new citation engine first: rejected because the current Writing
    workflow does not need a broader footnote system to publish this article.

## Decision 4: Use a deterministic lane-based node-link diagram, not a force-directed graph

- **Decision**: Build the interactive role map as a React-owned SVG with D3
  scale and path calculations, placing nodes in fixed lanes by type (`role`,
  `skill`, `responsibility`, `category`) and highlighting relationships through
  selection rather than physics simulation.
- **Rationale**: The article needs readers to compare titles and adjacent
  responsibilities clearly. A deterministic layout is easier to scan, easier to
  test, and more consistent with the current portfolio's structured editorial
  style than a moving force graph.
- **Alternatives considered**:
  - Force-directed network graph: rejected because it is more visually noisy,
    harder to stabilize responsively, and unnecessary for a bounded dataset.
  - Radial network graph: rejected because it looks more decorative than
    practical for dense role-and-skill comparisons.

## Decision 5: Always provide a text fallback and simplify mobile behavior

- **Decision**: Treat the graph as an enhancement on larger layouts, but always
  provide a text fallback that exposes the same role-to-skill and
  responsibility relationships, with mobile free to default to the fallback or
  a simplified selector-plus-detail mode when the SVG graph becomes too dense.
- **Rationale**: The spec requires an accessible text-based representation, and
  the current Writing experience already favors readable editorial layouts over
  interaction-heavy screens. This also avoids forcing dense node-link behavior
  onto narrow touch devices.
- **Alternatives considered**:
  - Require the same graph everywhere: rejected because readability and tap
    target quality would degrade on small screens.
  - Hide the graph entirely on mobile without fallback: rejected because it
    would fail the content-parity requirement.

## Decision 6: Support evidence placeholders without rendering broken images

- **Decision**: Model screenshot and print evidence entries with an optional
  `imagePath`; when it is absent, render the caption, source label, and note as
  a clearly labeled placeholder card instead of emitting an empty image frame.
- **Rationale**: The spec allows missing screenshots at first release, but it
  explicitly forbids pretending evidence exists. Placeholder cards keep the
  article structurally complete without misleading the reader or causing broken
  assets.
- **Alternatives considered**:
  - Use dummy images: rejected because fabricated evidence is not allowed.
  - Omit the section entirely until every image exists: rejected because the
    article still needs a credible place for future evidence and review notes.

## Decision 7: Reuse the current `/blog/:slug` metadata and share path

- **Decision**: Keep the new article inside the current `posts.index.ts`
  registry, preserve `/blog/:slug` direct links, populate `coverImage.socialSrc`
  for Open Graph and Twitter metadata, and keep share-link generation in the
  existing Writing utilities.
- **Rationale**: The repo already has working article metadata generation and
  share-link helpers, and current routes are `/blog/:slug` rather than the
  earlier planning-era `/writing/:slug`. Reusing that path avoids unnecessary
  URL churn and keeps the new post aligned with the live architecture.
- **Alternatives considered**:
  - Introduce a new route namespace for this article: rejected because it would
    add inconsistency without solving a real problem.
  - Skip social-image metadata: rejected because the current Writing flow
    already supports it and the spec asks for it when available.

## Decision 8: Use a local SVG cover illustration plus a raster social variant

- **Decision**: Plan the cover as a local SVG illustration using the existing
  graphite, off-white, and restrained-gold palette, then provide a PNG social
  image variant so the article metadata can keep using large-card previews.
- **Rationale**: The current Writing post already uses this pattern, and the
  article concept is better served by an original technical/editorial
  illustration than by stock photography or a remote image dependency.
- **Alternatives considered**:
  - Use only one SVG asset for all contexts: rejected because some social
    preview surfaces handle raster images more consistently.
  - Defer the cover entirely: rejected because the Writing list and detail hero
    expect a meaningful visual from the start.
