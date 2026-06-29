# Contract: AI Role Post Content

## Purpose

Define the approved JSON shape, content-integrity rules, and local asset
requirements for the AI roles article inside the existing Writing feature.

## Approved Inputs

- `/specs/008-ai-roles-blog-post/spec.md` as the source of truth for behavior
  and content requirements
- Local JSON post files under `src/features/writing/data/posts/`
- Existing Writing registry and metadata helpers under
  `src/features/writing/data/posts.index.ts` and `src/features/writing/seo.ts`
- Local static assets under `public/blog/`
- `DESIGN.md` for visual system rules and tone constraints

## Required Runtime Outputs

- One new published `WritingPost` record registered in the Writing list
- A valid post detail page at `/blog/ai-tools-software-engineering-role-confusion`
- Ordered article sections that cover the required reflection, role comparison,
  evidence, graph, and closing argument
- Structured role profiles, evidence records, graph data, and final reflection
  available to the detail renderer
- Open Graph and Twitter-compatible metadata populated from local content when
  the current Writing SEO flow supports it

## JSON Content Requirements

- The article must live in one JSON file named
  `ai-tools-software-engineering-role-confusion.json`.
- The JSON must provide at minimum:
  - `slug`
  - `title`
  - `shortDescription`
  - `summary`
  - `publishDate`
  - `tags`
  - `coverImage.src`
  - `coverImage.alt`
  - `sections`
  - `roleProfiles`
  - `roleGraph`
  - `finalReflection`
- `slug` must equal `ai-tools-software-engineering-role-confusion`.
- The article content must remain in English and align with the approved
  reflective tone.

## Required Article Structure

- The ordered section flow must cover:
  - Opening reflection
  - Why AI role descriptions feel confusing
  - What companies often mean by "AI Engineer" and related roles
  - Role comparison and overlap
  - Screenshot or print examples of confusing role descriptions
  - The nuance around LLM integration and API consumption
  - Reassurance for software developers
  - Why fundamentals still matter
  - Why prompt and context quality matter
  - The interactive role graph and its fallback
  - Final provocative reflection
- The first paragraph must explicitly question the distinction between
  "AI Engineer" and a software engineer who uses AI effectively.

## Role Profile Requirements

- The post must include role entries for:
  - `AI Engineer`
  - `Applied AI Engineer`
  - `LLM Engineer`
  - `Machine Learning Engineer`
  - `Data Scientist`
  - `AI Product Engineer`
  - `Prompt Engineer`
  - `Automation Engineer`
  - `Software Engineer with AI Tools`
  - `Full Stack Engineer building AI integrations`
- Each role profile must support:
  - role name
  - short practical description
  - typical responsibilities
  - common skills
  - confusion points
  - proximity classification
- Role descriptions must use careful practice-based phrasing unless stronger
  source support is later added to the Writing system.

## Evidence Requirements

- Each evidence entry must support:
  - optional `imagePath`
  - optional `altText`
  - `caption`
  - `sourceLabel`
  - optional `note`
  - `isPlaceholder`
- Real screenshots or prints must be local repository assets only.
- Placeholder entries must not render broken images or imply that evidence
  already exists.
- Fake screenshots, invented company examples, or fabricated quotes are not
  allowed.

## Graph Content Requirements

- The post must provide graph data for `role`, `skill`, `responsibility`, and
  `category` nodes plus links between them.
- Role nodes must align with the `roleProfiles` dataset by ID.
- The graph dataset must support:
  - selecting a role
  - selecting a skill or responsibility
  - showing what that node usually means in the detail panel
  - deriving equivalent fallback content

## Asset Rules

- The cover image must be local, original, and aligned with the existing dark
  editorial palette and restrained gold accent system.
- The current Writing metadata flow supports social-preview images, so the post
  should include a `coverImage.socialSrc` raster asset.
- Future evidence assets, if present, must live under `public/blog/` in a
  post-specific directory or another stable local path resolved by the existing
  asset logic.

## Content Integrity Rules

- The article must not claim that Evandro is definitively an AI Engineer.
- The article may discuss real usage of AI tools, prompt/spec workflows, and
  AI-assisted engineering, but it must not overclaim ML research or model
  training depth.
- The tone must remain practical, reflective, and grounded rather than
  promotional, dismissive, or hype-driven.
- The article must acknowledge that titles vary by company and that overlap
  does not make the roles identical.

## Validation

- The new post registers cleanly without duplicating body content in the
  registry.
- The JSON contains the required slug, cover-image metadata, ordered sections,
  role profiles, graph data, and final reflection.
- Every role-profile ID and evidence ID referenced by a section resolves to a
  real record in the same JSON file.
- Every visible evidence entry is either backed by a real local asset or marked
  as a placeholder.
- Social metadata values remain consistent with the visible article title,
  summary, and cover image.
