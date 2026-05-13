# Contract: Portfolio Content Model

## Purpose

This contract defines the local structured content boundary for the MVP. Components consume typed content records instead of embedding portfolio copy directly in UI files.

## Content Sources

```text
src/content/
├── site-metadata.ts
├── profile.ts
├── achievements.ts
├── skills.ts
├── experience.ts
├── case-studies.ts
├── blog-topics.ts
└── contact.ts
```

## Required Content Exports

### `site-metadata.ts`

- Exports one site metadata object
- Must provide page title, description, canonical URL, and navigation items

### `profile.ts`

- Exports one profile object
- Must provide name, headline, subheadline, summary, years label, and primary CTA links

### `achievements.ts`

- Exports an ordered array of achievement items
- Each item must contain `title`, `context`, `contribution`, `impact`, and `technologies`
- At least five items must be available for the MVP

### `skills.ts`

- Exports grouped skill data for the approved public categories
- Must support visual prioritization of core skills

### `experience.ts`

- Exports an ordered array of concise experience items
- Each item must contain organization, role, period, contributions, technologies, and impact

### `case-studies.ts`

- Exports preview cards only
- Every item must include a status that clearly indicates the content is upcoming

### `blog-topics.ts`

- Exports placeholder article topics
- Data shape must allow future replacement or augmentation by a remote content adapter

### `contact.ts`

- Exports public contact methods suitable for homepage display
- Only professional public channels are allowed

## Consumer Expectations

- Section components must treat content files as read-only inputs
- Missing optional fields must degrade gracefully
- Missing required fields should fail TypeScript checks during development
- The page must not render placeholder copy that implies unpublished content already exists

## Change Rules

- New public claims must be added to content files only after they are verified against approved source documents
- Future Hashnode integration must adapt into the same blog-topic shape or a compatible superset
- If content is split into JSON or markdown later, the consuming section APIs should remain stable
