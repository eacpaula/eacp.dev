# Contract: Portfolio Content Voice Refinement

## Purpose

This contract defines where copy changes belong, how voice refinements stay
source-backed, and how future placeholder content must be presented during this
feature.

## Content Ownership

```text
src/content/
├── achievements.ts
├── blog-topics.ts
├── case-studies.ts
├── contact.ts
├── experience.ts
├── profile.ts
├── site-metadata.ts
└── skills.ts
```

## Required Content Rules

### `profile.ts`

- Owns the core public positioning language for hero and summary content
- Must provide a sharper headline, subheadline, summary, and availability note
- Must avoid third-person narration and generic biography-style phrasing

### `achievements.ts`

- Owns the engineering impact statements
- Each item must preserve source-backed context, contribution, and impact
- Rewrites may tighten phrasing for scan speed but must not inflate outcomes

### `experience.ts`

- Owns the experience timeline summaries
- Contributions and impact text must stay concise and recruiter-readable
- Timeline content must not read like a resume dump

### `skills.ts`

- Owns skill labels, category order, and emphasis metadata
- Refinement may improve scan order or emphasis, but skill claims must remain
  grounded in approved source data

### `case-studies.ts`

- Owns case study preview titles, summaries, and status
- Every summary must sound like a planned technical deep dive
- Content must not imply that a full case study already exists

### `blog-topics.ts`

- Owns blog preview titles, summaries, and status
- Topics must feel practical and senior-level
- Content must not imply current publishing or dynamic integration

### `contact.ts`

- Owns short descriptions for public contact routes
- Descriptions must remain professional, direct, and concise

### `site-metadata.ts`

- Owns meta title, description, and nav labels
- Metadata should remain aligned with the sharper positioning and direct voice

## Consumer Expectations

- Section components should consume content records as the primary source of
  editable narrative copy
- Static helper text in components should be limited to structural UI framing
- Missing optional content must degrade gracefully without placeholder fluff
- Unsupported claims must be removed or softened rather than invented

## Change Rules

- All public claims must remain traceable to approved profile and repository
  source files
- First-person language is allowed only where natural and brief
- Third-person external-biography phrasing is not allowed in primary narrative
  content
- Future placeholder content must remain explicitly future-facing
