# Data Model: Local JSON-Driven Writing Experience

## WritingPost

- **Description**: A published article rendered in both the Writing list and the
  full post detail experience.
- **Fields**:
  - `slug`: stable identifier used for lookup, direct links, and share URLs
  - `title`: article headline shown in the list and detail view
  - `shortDescription`: concise list description for scan-first browsing
  - `summary`: slightly fuller summary shown in detail view and share metadata
  - `publishDate`: publication date used for display and ordering
  - `tags`: ordered topical labels for the article
  - `coverImage`: `WritingCoverImage` record
  - `sections`: ordered `WritingSectionBlock` records
  - `keyTakeaways`: optional closing highlights
  - `shareMetadata`: optional overrides for share title or excerpt
- **Validation Rules**:
  - `slug` must be unique across all posts
  - `title`, `shortDescription`, `summary`, `publishDate`, and `sections` are
    required
  - `sections` must contain at least one block with readable body content
  - All content must remain grounded in approved firsthand experience and the
    specification brief
- **Relationships**:
  - Owns one `WritingCoverImage`
  - Owns many `WritingSectionBlock` records
  - May define one `WritingShareMetadata` override set

## WritingCoverImage

- **Description**: The local illustrative asset and accessibility text attached
  to a `WritingPost`.
- **Fields**:
  - `src`: local asset path for the cover image
  - `alt`: descriptive alt text for screen readers and fallback contexts
- **Validation Rules**:
  - `src` must resolve to a local repository asset
  - `alt` must describe the image meaningfully and must not be empty
- **Relationships**:
  - Belongs to one `WritingPost`

## WritingSectionBlock

- **Description**: An ordered content section within a `WritingPost`, designed
  for straightforward long-form rendering without Markdown parsing.
- **Fields**:
  - `id`: stable section identifier for rendering keys and optional deep links
  - `heading`: visible section heading
  - `paragraphs`: ordered body paragraphs
  - `comparisonItems`: optional `WritingComparisonItem` records
  - `pros`: optional list of positive points
  - `cons`: optional list of tradeoffs or cautions
  - `callout`: optional emphasis sentence or note
- **Validation Rules**:
  - `heading` is required
  - Each section must contain either `paragraphs`, `comparisonItems`, `pros`,
    `cons`, or `callout`
  - Optional structured lists must not render empty labels or blank containers
- **Relationships**:
  - Belongs to one `WritingPost`
  - May own many `WritingComparisonItem` records

## WritingComparisonItem

- **Description**: A structured comparison row used when a post needs to compare
  tools, approaches, or tradeoffs.
- **Fields**:
  - `label`: compared subject name
  - `summary`: concise judgment or description
  - `strengths`: optional strengths list
  - `cautions`: optional limitations list
- **Validation Rules**:
  - `label` and `summary` are required
  - Strengths and cautions must reflect approved firsthand experience only
- **Relationships**:
  - Belongs to one `WritingSectionBlock`

## WritingShareMetadata

- **Description**: Optional share-specific metadata derived from or overriding
  base post fields.
- **Fields**:
  - `shareTitle`: optional override for outbound share title
  - `shareSummary`: optional override for outbound share excerpt
- **Validation Rules**:
  - If omitted, runtime behavior derives share values from `title` and `summary`
  - Overrides must not conflict with visible post content
- **Relationships**:
  - Belongs to one `WritingPost`

## WritingRouteState

- **Description**: Route-aware UI state that determines whether the Writing
  feature is showing the home-page post list, one dedicated article page, or an
  unavailable-post fallback.
- **Fields**:
  - `activePostSlug`: selected post slug or `null`
  - `mode`: `list`, `detail`, or `not-found`
  - `source`: `direct-link`, `list-selection`, or `return-to-list`
- **State Transitions**:
  - `initial load` → `detail` when the route path contains a valid post slug
  - `initial load` → `not-found` when the route path contains an unknown slug
  - `initial load` → `list` when the visitor is on the home page Writing
    section
  - `list entry selected` → `detail` and route updates to the selected slug
  - `back to list` → `list` and route returns to `/#blog`
  - `invalid direct link recovered` → `list` after the visitor returns to the
    Writing section
- **Validation Rules**:
  - Only one post may be active at a time
  - `activePostSlug` must refer to a registered `WritingPost` whenever
    `mode = detail`

## Derived Views

- **WritingPostPreview**:
  - Derived from `WritingPost`
  - Supplies list-level data: slug, title, shortDescription, publishDate, tags,
    and coverImage

- **WritingPostLookup**:
  - Derived from the `posts.index.ts` registry
  - Supplies ordered list view data and O(1)-style slug lookup behavior for
    direct links and share state
