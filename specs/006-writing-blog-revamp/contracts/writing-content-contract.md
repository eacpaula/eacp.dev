# Contract: Writing Content

## Purpose

Define the approved runtime content shape, authorship rules, and local asset
requirements for the Writing feature.

## Approved Inputs

- `/specs/006-writing-blog-revamp/spec.md` as the source of truth for required
  behavior and the first article brief
- Local JSON post files under `src/features/writing/data/posts/`
- Local static cover assets under `public/writing/`
- Existing site metadata and portfolio identity rules in `DESIGN.md`

## Required Runtime Outputs

- An ordered collection of published `WritingPost` records
- A derived preview list for Writing entries
- Slug-based lookup for direct post detail loading
- Local cover image references with usable alt text
- Optional share metadata derived from or overridden by post content

## JSON Content Requirements

- Each published post must live in its own JSON file.
- Each JSON file must provide at minimum:
  - `slug`
  - `title`
  - `shortDescription`
  - `summary`
  - `publishDate`
  - `tags`
  - `coverImage.src`
  - `coverImage.alt`
  - `sections`
- `sections` must support ordered article rendering through:
  - `heading`
  - `paragraphs`
  - optional `comparisonItems`
  - optional `pros`
  - optional `cons`
  - optional `callout`
- Optional `keyTakeaways` and `shareMetadata` may appear when useful, but the
  runtime experience must not depend on them.

## Registry Rules

- A small `posts.index.ts` registry may import and expose post JSON files.
- The registry may sort posts by publish date and provide lookup helpers.
- The registry must not duplicate article body content in a second source of
  truth.
- Adding a post should require only:
  - creating the JSON file
  - adding the local cover asset
  - registering the post in the small index if the chosen loader requires it

## Asset Rules

- Cover images must be local repository assets only.
- The first Spec-Driven Development post must use an original local cover image
  aligned with the graphite, monochrome, and restrained-gold design system.
- Asset references must remain compatible with the site's static hosting base
  path and must not rely on remote URLs.

## Content Integrity Rules

- The initial Spec-Driven Development article must remain grounded in approved
  firsthand experience with OpenSpec, Spec Kit, and Kiro.
- Content must not invent experience, claims, or depth of evaluation that was
  not approved in the specification.
- The tone must stay practical, grounded, and personal rather than promotional
  or hype-driven.

## Validation

- Every registered post resolves to exactly one JSON file.
- Every list-visible field comes from the JSON source data.
- Every post has a valid local cover image reference and non-empty alt text.
- The first post contains the required comparison and reflection themes from the
  feature specification.
