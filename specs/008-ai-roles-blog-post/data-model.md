# Data Model: AI Roles and Software Engineering Blog Post

## WritingPost

- **Description**: A published Writing article rendered in both the blog list
  and the full post detail route, extended here to support role profiles,
  evidence placeholders, a role graph, and a closing reflection.
- **Fields**:
  - `slug`: stable identifier used for lookup, direct links, and share URLs
  - `title`: article headline shown in list and detail views
  - `shortDescription`: concise list description for scan-first browsing
  - `summary`: fuller article summary used in the detail hero and SEO metadata
  - `publishDate`: publication date used for display and ordering
  - `tags`: ordered topical labels for the article
  - `coverImage`: `WritingCoverImage`
  - `sections`: ordered `WritingSectionBlock[]`
  - `roleProfiles`: ordered `WritingRoleProfile[]`
  - `roleEvidence`: ordered `WritingEvidenceEntry[]`
  - `roleGraph`: `WritingRoleGraph`
  - `finalReflection`: `WritingFinalReflection`
  - `tableOfContentsTitle`: optional override for the summary card heading
  - `keyTakeaways`: optional closing highlights
  - `shareMetadata`: optional share-specific title or text
- **Validation Rules**:
  - `slug` must be unique across all registered posts
  - `title`, `shortDescription`, `summary`, `publishDate`, `coverImage`,
    `sections`, `roleProfiles`, `roleGraph`, and `finalReflection` are
    required for this feature's post
  - `sections` must contain enough ordered content to cover the approved
    article structure from the specification
  - Every ID referenced inside a section must resolve to a record owned by the
    same `WritingPost`
  - Content must remain grounded, English-language, and free of inflated AI/ML
    experience claims
- **Relationships**:
  - Owns one `WritingCoverImage`
  - Owns many `WritingSectionBlock` records
  - Owns many `WritingRoleProfile` records
  - Owns many `WritingEvidenceEntry` records
  - Owns one `WritingRoleGraph`
  - Owns one `WritingFinalReflection`

## WritingCoverImage

- **Description**: The local illustration and accessibility text for the post
  hero and social sharing.
- **Fields**:
  - `src`: local asset path for the in-app cover
  - `socialSrc`: local asset path for the social-preview image
  - `alt`: descriptive alt text for the article image
- **Validation Rules**:
  - `src` must resolve to a local repository asset
  - `socialSrc` should be present when the Writing SEO flow supports social
    images
  - `alt` must be meaningful and non-empty
- **Relationships**:
  - Belongs to one `WritingPost`

## WritingSectionBlock

- **Description**: An ordered article section inside the normal
  `WritingPostDetail` flow. Sections remain prose-first but may reference the
  post's structured role data.
- **Fields**:
  - `id`: stable identifier for rendering keys and anchor links
  - `heading`: visible section heading
  - `tocLabel`: optional shorter label for the table of contents
  - `includeInToc`: optional flag to suppress the section from the summary card
  - `paragraphs`: optional ordered body paragraphs
  - `comparisonItems`: optional existing comparison-card content
  - `pros`: optional positive or reassuring bullet list
  - `cons`: optional caution or warning bullet list
  - `callout`: optional emphasized note
  - `roleProfileIds`: optional ordered references to `WritingRoleProfile`
    records rendered inside the section
  - `evidenceIds`: optional ordered references to `WritingEvidenceEntry`
    records rendered inside the section
  - `renderRoleGraph`: optional flag that marks the section where the
    `WritingRoleGraph` component should appear
- **Validation Rules**:
  - `heading` is required
  - Each section must contain at least one populated content source
  - `roleProfileIds` and `evidenceIds` must reference records owned by the same
    post
  - Only one section may set `renderRoleGraph = true`
- **Relationships**:
  - Belongs to one `WritingPost`
  - May reference many `WritingRoleProfile` records
  - May reference many `WritingEvidenceEntry` records
  - May own many `WritingComparisonItem` records

## WritingComparisonItem

- **Description**: Existing structured comparison row content reused when the
  article needs explicit side-by-side framing.
- **Fields**:
  - `label`: compared subject name
  - `summary`: concise description or judgment
  - `strengths`: optional strengths list
  - `cautions`: optional warnings list
- **Validation Rules**:
  - `label` and `summary` are required
  - Comparison text must stay grounded in the approved article brief
- **Relationships**:
  - Belongs to one `WritingSectionBlock`

## WritingRoleProfile

- **Description**: A structured description of one AI-related role used by both
  the article body and the interactive graph detail panel.
- **Fields**:
  - `id`: stable role identifier
  - `name`: display name such as `AI Engineer` or `LLM Engineer`
  - `shortDescription`: concise practical framing of what the role usually
    involves
  - `typicalResponsibilities`: ordered responsibility list
  - `commonSkills`: ordered skill list
  - `confusionPoints`: ordered notes about where this role overlaps with or is
    misused alongside other titles
  - `proximity`: `software-engineering`, `ml-data`, `product`, `automation`, or
    `mixed`
  - `practiceNote`: optional qualifier such as "in practice" or "often depends
    on the company"
- **Validation Rules**:
  - `id`, `name`, `shortDescription`, `typicalResponsibilities`,
    `commonSkills`, `confusionPoints`, and `proximity` are required
  - Descriptions must avoid unsupported personal credentials or claims of
    universal authority
- **Relationships**:
  - Belongs to one `WritingPost`
  - Must correspond to exactly one `role` node inside `WritingRoleGraph`

## WritingEvidenceEntry

- **Description**: A real or placeholder screenshot/print item used to show
  confusing job descriptions without inventing evidence.
- **Fields**:
  - `id`: stable evidence identifier
  - `imagePath`: optional local asset path for a real screenshot or print
  - `altText`: optional image alt text; required when `imagePath` is present
  - `caption`: visible explanation of what the reader is seeing
  - `sourceLabel`: concise source tag such as site or company label
  - `note`: optional explanation of why the example is confusing
  - `isPlaceholder`: boolean marker for entries awaiting a real asset
- **Validation Rules**:
  - `caption`, `sourceLabel`, and `isPlaceholder` are required
  - `altText` must be present when `imagePath` is present
  - `imagePath` must be absent or omitted when `isPlaceholder = true`
  - Placeholder entries must render as honest placeholders and not as broken
    images
- **Relationships**:
  - Belongs to one `WritingPost`

## WritingRoleGraph

- **Description**: The structured node-link dataset and display defaults for
  the interactive role map and its text fallback.
- **Fields**:
  - `intro`: optional short explanation shown above the graph
  - `defaultNodeId`: node selected on first render
  - `nodes`: ordered `RoleGraphNode[]`
  - `links`: ordered `RoleGraphLink[]`
- **Validation Rules**:
  - `defaultNodeId` must reference an existing node
  - Every link endpoint must reference an existing node
  - Every `role` node ID must match a `WritingRoleProfile.id`
  - The dataset must include at least one node of each required type: `role`,
    `skill`, `responsibility`, `category`
- **Relationships**:
  - Belongs to one `WritingPost`
  - Owns many `RoleGraphNode` records
  - Owns many `RoleGraphLink` records

## RoleGraphNode

- **Description**: One node inside the role map.
- **Fields**:
  - `id`: stable node identifier
  - `label`: visible node label
  - `type`: `role`, `skill`, `responsibility`, or `category`
  - `description`: short detail text for the graph detail panel
  - `laneOrder`: numeric ordering key within its type lane
- **Validation Rules**:
  - `id`, `label`, `type`, and `laneOrder` are required
  - `role` node IDs must align with `WritingRoleProfile.id`
- **Relationships**:
  - Belongs to one `WritingRoleGraph`

## RoleGraphLink

- **Description**: A relationship between two nodes in the role map.
- **Fields**:
  - `source`: source node ID
  - `target`: target node ID
  - `strength`: optional relative emphasis weight used for stroke treatment
  - `note`: optional detail-panel context
- **Validation Rules**:
  - `source` and `target` are required
  - Self-links are not allowed
  - Both endpoints must exist in the same `WritingRoleGraph`
- **Relationships**:
  - Belongs to one `WritingRoleGraph`

## WritingFinalReflection

- **Description**: A closing, provocative reflection rendered after the main
  article sections.
- **Fields**:
  - `heading`: visible closing heading
  - `paragraphs`: ordered closing paragraphs
  - `callout`: optional final emphasized line
- **Validation Rules**:
  - `heading` and at least one paragraph are required
  - The reflection must challenge title inflation without dismissing real AI
    engineering work
- **Relationships**:
  - Belongs to one `WritingPost`

## RoleGraphSelectionState

- **Description**: Runtime UI state for the interactive graph and fallback
  detail presentation.
- **Fields**:
  - `activeNodeId`: currently selected node
  - `activeNodeType`: currently selected node type
  - `mode`: `graph` or `fallback`
- **State Transitions**:
  - `initial load` -> `graph` with `defaultNodeId` selected on desktop/tablet
  - `initial load` -> `fallback` on narrow layouts if the graph is suppressed
  - `role selected` -> highlight connected skills, responsibilities, and
    categories
  - `skill/responsibility/category selected` -> highlight connected roles and
    update the detail panel
  - `fallback item selected` -> mirror the same active node and detail content
- **Validation Rules**:
  - Only one node may be active at a time
  - `activeNodeId` must exist in the graph dataset

## Derived Views

- **WritingPostPreview**:
  - Derived from `WritingPost`
  - Supplies list-level fields: slug, title, shortDescription, publishDate,
    tags, and coverImage

- **RoleGraphDetailView**:
  - Derived from `RoleGraphSelectionState` and `WritingRoleGraph`
  - Supplies the selected node, connected nodes, connected links, and any
    matching `WritingRoleProfile` detail

- **EvidenceGalleryView**:
  - Derived from ordered `evidenceIds` within a `WritingSectionBlock`
  - Supplies either a real image card or a clearly labeled placeholder card per
    entry
