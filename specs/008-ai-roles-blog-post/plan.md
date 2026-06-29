# Implementation Plan: AI Roles and Software Engineering Blog Post

**Branch**: `008-ai-roles-blog-post` | **Date**: 2026-06-29 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/008-ai-roles-blog-post/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add one new published Writing post to the existing local JSON-driven blog
system, extend the current post schema just enough to support structured role
profiles, evidence placeholders, a D3-backed interactive role map, and a
closing reflection, then reuse the existing `/blog/:slug` routing, SEO, and
graphite-and-gold editorial layout so the article feels native to the current
portfolio rather than a special microsite.

## Technical Context

**Language/Version**: TypeScript `~6.0.2`, React `19.2.6`

**Primary Dependencies**: Existing Vite 8, Tailwind CSS 4, TanStack Router,
D3 `^7.9.0`, Motion `^11.18.2`, existing Writing SEO helpers under
`src/features/writing/seo.ts` and `src/lib/seo/`

**Storage**: Local JSON post data under `src/features/writing/data/posts/`,
local static cover and social assets under `public/blog/`, optional future
evidence images under a post-specific `public/blog/` subdirectory

**Testing**: `npm run lint`, `npm run test`, `npm run build`, manual desktop,
tablet, and mobile article review, manual keyboard-only graph review, manual
fallback-content review, manual placeholder-evidence review, manual social
metadata/share-link review

**Target Platform**: Modern desktop and mobile browsers on static hosting

**Project Type**: Static React web application with route-based blog detail
pages

**Performance Goals**: Preserve zero-runtime-fetch article delivery, keep graph
rendering deterministic and lightweight, avoid force-simulation jank or heavy
rich-content tooling, and keep the new article from regressing the current
Writing list or post detail load path

**Constraints**: Must follow `DESIGN.md`; must preserve the existing Writing
experience and `/blog/:slug` route behavior; must not add backend services,
CMS tooling, Markdown/MDX processing, or remote data fetching; must not fake
screenshots or invent personal AI/ML experience; must keep role descriptions
careful and practice-based where authority is limited

**Scale/Scope**: One new post JSON file, one additive writing-schema
extension, one local cover-image pair, one post-specific interactive graph with
text fallback, minimal additions to the existing Writing renderer and styles,
no unrelated portfolio redesign

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

- The feature adds one substantive article and one bounded interactive explainer
  instead of a broad Writing-platform redesign.
- The plan stays inside the existing static React, local JSON, and local-asset
  architecture rather than introducing remote content or a CMS.
- Content integrity rules explicitly block fabricated screenshots, fake AI
  credentials, and hype-heavy positioning.
- Accessibility, fallback content, responsive graph behavior, and metadata
  continuity are treated as primary requirements instead of post-implementation
  cleanup.

## Project Structure

### Documentation (this feature)

```text
specs/008-ai-roles-blog-post/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── ai-role-post-content-contract.md
│   └── ai-role-graph-interaction-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── features/
│   └── writing/
│       ├── WritingSection.tsx
│       ├── WritingPostPage.tsx
│       ├── seo.ts
│       ├── components/
│       │   ├── WritingPostCard.tsx
│       │   ├── WritingPostDetail.tsx
│       │   ├── WritingShareActions.tsx
│       │   ├── WritingRoleProfiles.tsx
│       │   ├── WritingEvidenceGallery.tsx
│       │   ├── WritingRoleGraph.tsx
│       │   └── WritingRoleGraphFallback.tsx
│       ├── data/
│       │   ├── posts/
│       │   │   ├── spec-driven-development.json
│       │   │   └── ai-tools-software-engineering-role-confusion.json
│       │   ├── posts.index.ts
│       │   └── writing.types.ts
│       └── utils/
│           ├── shareLinks.ts
│           ├── writingUrlState.ts
│           └── roleGraphLayout.ts
├── lib/
│   └── seo/
│       └── metadata.ts
└── styles/
    └── globals.css

public/
└── blog/
    ├── spec-driven-development-cover.svg
    ├── spec-driven-development-cover.png
    ├── ai-tools-software-engineering-role-confusion-cover.svg
    ├── ai-tools-software-engineering-role-confusion-cover.png
    └── ai-tools-software-engineering-role-confusion/
        └── [future optional evidence assets]
```

**Structure Decision**: Keep this work inside `src/features/writing/` because
the existing post registry, detail page, metadata builder, and visual language
already own blog behavior. Extend the current `WritingPost` schema additively,
add a small set of role-post subcomponents plus one graph-layout utility, and
keep the article itself in one local JSON file so future updates remain a
content task rather than a feature-level refactor.

## Phase 0 Research

- [research.md](./research.md) captures the decisions to keep the article
  self-contained in one JSON file, evolve the existing Writing schema
  additively, model role descriptions and evidence placeholders as structured
  content, use a deterministic lane-based SVG graph instead of a force
  simulation, preserve the current `/blog/:slug` metadata path, and provide an
  explicit text fallback for small screens and non-visual use.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the extended `WritingPost`,
  section-reference model, role profile records, evidence entries, graph nodes,
  graph links, and selection state required for the new article.
- [contracts/ai-role-post-content-contract.md](./contracts/ai-role-post-content-contract.md)
  defines the approved JSON shape, article-section order, evidence placeholder
  rules, cover-asset requirements, and content-integrity constraints for the
  post.
- [contracts/ai-role-graph-interaction-contract.md](./contracts/ai-role-graph-interaction-contract.md)
  defines graph selection behavior, keyboard support, responsive fallback
  behavior, and node/link presentation rules.
- [quickstart.md](./quickstart.md) defines the recommended file-by-file
  implementation order, article structure map, and validation flow.
- [AGENTS.md](/mnt/development/eacp.dev/AGENTS.md) is updated to point the
  repository context marker at this plan.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design uses one grounded article plus a restrained explorable graph to
  clarify real engineering work rather than adding decorative AI visuals.
- The content model remains local, typed, and static-host compatible, which
  preserves the low-complexity architecture already used by Writing.
- The graph plan is intentionally deterministic and fallback-first, avoiding
  flashy but noisy force layouts that would conflict with recruiter readability.
- The article voice and content rules keep the feature honest about Evandro's
  positioning as a software engineer using AI tools rather than claiming a
  settled AI-engineer credential.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
