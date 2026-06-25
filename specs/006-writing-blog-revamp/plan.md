# Implementation Plan: Local JSON-Driven Writing Experience

**Branch**: `[006-writing-blog-revamp]` | **Date**: 2026-06-25 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/006-writing-blog-revamp/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Replace the current placeholder Writing roadmap with a feature-scoped Writing
experience that keeps one local JSON file per post, uses a small typed registry
for ordering and lookup, serves local illustrative assets, renders published
posts as a full-width stacked list, and opens full articles on dedicated
application routes instead of inside the one-page layout.

## Technical Context

**Language/Version**: TypeScript `~6.0.2`, React `19.2.6`

**Primary Dependencies**: Existing Vite 8, Tailwind CSS 4, React DOM, React
Router DOM for route-based post pages

**Storage**: Local JSON post files under `src/features/writing/data/posts/`
plus local static image assets under `public/writing/`

**Testing**: `npm run lint`, `npm run test`, `npm run build`, manual desktop,
tablet, and mobile review, keyboard-only review, share-link review, and content
accuracy review against the approved article brief

**Target Platform**: Modern desktop and mobile browsers on static hosting

**Project Type**: Static single-page React web application

**Performance Goals**: Preserve fast static delivery, render the Writing list
from bundled local content without network fetches, open dedicated article
pages without server-side infrastructure, and keep long-form reading
comfortable on desktop and mobile

**Constraints**: Must follow `DESIGN.md`; must preserve the current `Writing`
navigation label and `#blog` anchor behavior; must not add backend
infrastructure, CMS tooling, paid APIs, third-party share SDKs, or Markdown
processing; must keep one JSON file per post and keep the first article grounded
in approved firsthand experience only

**Scale/Scope**: One feature-scoped writing module, one stacked list view, one
route-based detail page, one initial published article, one local cover
illustration, router/app-shell updates limited to replacing the current Writing
section and its placeholder data, and a static-host fallback page for direct
post URLs

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Feature must prioritize real engineering impact over flashy visuals
- Avoid generic junior-style portfolio patterns and fake projects
- Use clean, maintainable React and TypeScript
- Prefer simple architecture over unnecessary complexity
- Ensure accessibility, SEO, responsiveness, and performance as baseline
- Use minimalist, readable, professional UI
- Maintain a distinct visual identity and avoid close imitation of any single reference portfolio
- Follow `DESIGN.md` at the project root as the design-system source of truth, and keep TailwindCSS theme/configuration aligned with it
- Use a direct professional voice and avoid third-person biography-style narration
- Follow spec-driven development: specs, plans, tasks before implementation
- Keep specs small and focused; avoid overengineering
- Site remains static-first and low-cost/free to host
- Prepare for future blog integration without backend requirements

**Pre-Research Gate Result**: PASS

- The feature removes placeholder content and replaces it with real local
  writing, which increases portfolio credibility instead of adding decorative
  UI.
- The architecture stays inside the existing static React application and adds
  only minimal routing needed for dedicated post pages, without CMS or
  remote-content complexity.
- The content plan explicitly restricts the first article to approved firsthand
  experience, which aligns with the authenticity principle.
- `DESIGN.md`, keyboard access, readability, and share behavior remain explicit
  planning constraints rather than follow-up polish.

## Project Structure

### Documentation (this feature)

```text
specs/006-writing-blog-revamp/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── writing-content-contract.md
│   └── writing-interaction-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   └── AppShell.tsx
├── App.tsx
├── main.tsx
├── components/
│   └── layout/
│       └── SiteHeader.tsx
├── content/
│   └── site-metadata.ts
├── features/
│   └── writing/
│       ├── WritingSection.tsx
│       ├── WritingPostPage.tsx
│       ├── components/
│       │   ├── WritingEmptyState.tsx
│       │   ├── WritingPostCard.tsx
│       │   ├── WritingPostDetail.tsx
│       │   ├── WritingPostList.tsx
│       │   └── WritingShareActions.tsx
│       ├── data/
│       │   ├── posts/
│       │   │   └── spec-driven-development.json
│       │   ├── posts.index.ts
│       │   └── writing.types.ts
│       └── utils/
│           ├── shareLinks.ts
│           └── writingUrlState.ts
├── styles/
│   └── globals.css
└── types/
    └── content.ts

public/
└── writing/
    └── spec-driven-development-cover.svg

repo root/
└── 404.html
```

**Structure Decision**: Keep the existing single-project frontend architecture,
but move Writing into its own feature module because the new section now has its
own content model, view state, share behavior, and long-form presentation
requirements. Use `public/writing/` for cover assets so each post JSON file can
reference a stable local path without per-asset imports, and keep a small
`posts.index.ts` registry for ordering, lookup, and future extensibility.

## Phase 0 Research

- [research.md](./research.md) captures the decisions to use one JSON file per
  post plus a small typed registry, route-based dedicated post pages,
  structured JSON sections instead of Markdown or JSX content, local public SVG
  cover assets, simple URL-based share links, and a feature-scoped Writing
  module with static-host direct-link fallback support.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the `WritingPost`,
  `WritingSectionBlock`, `WritingComparisonItem`, `WritingShareMetadata`, and
  `WritingRouteState` entities required to keep list and detail views
  consistent.
- [contracts/writing-content-contract.md](./contracts/writing-content-contract.md)
  defines the approved JSON shape, local asset rules, authorship constraints,
  and required derived outputs for runtime content.
- [contracts/writing-interaction-contract.md](./contracts/writing-interaction-contract.md)
  defines list/detail states, URL behavior, share-link behavior, accessibility
  guarantees, and placeholder-replacement outcomes.
- [quickstart.md](./quickstart.md) defines the recommended implementation order,
  file-by-file plan, and validation flow for the feature.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design keeps the experience practical and recruiter-facing by centering
  real article content, not blog chrome or remote integration.
- Dedicated route-based post pages match the desired reading flow while the
  static-host fallback keeps direct links working without backend support.
- The content model stays serializable and local, which preserves the
  static-first constraint while leaving room for future platform migration.
- Visual treatment remains anchored to the existing graphite, paper, and gold
  system in `DESIGN.md`, with readability and accessibility treated as baseline
  requirements.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
