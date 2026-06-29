---
description: "Task list for AI Roles and Software Engineering Blog Post"
---

# Tasks: AI Roles and Software Engineering Blog Post

**Input**: Design documents from `/specs/008-ai-roles-blog-post/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No story-level automated test tasks were generated because the specification does not require a TDD workflow. Validation is covered through explicit review tasks plus `npm run lint`, `npm run test`, and `npm run build`.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g. `US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: Setup (Current Writing Architecture Inspection)

**Purpose**: Inspect the current Writing, SEO, asset, and D3 implementation boundaries before feature code is added.

- [X] T001 Audit the local JSON post structure and registry touchpoints in `src/features/writing/data/writing.types.ts`, `src/features/writing/data/posts.index.ts`, and `src/features/writing/data/posts/spec-driven-development.json`
- [X] T002 [P] Audit blog list and post-card rendering plus current cover-image usage in `src/features/writing/WritingSection.tsx`, `src/features/writing/components/WritingPostList.tsx`, `src/features/writing/components/WritingPostCard.tsx`, and `public/blog/spec-driven-development-cover.svg`
- [X] T003 [P] Audit blog detail rendering, share links, and Open Graph metadata behavior in `src/features/writing/components/WritingPostDetail.tsx`, `src/features/writing/WritingPostPage.tsx`, `src/features/writing/seo.ts`, `src/features/writing/utils/shareLinks.ts`, and `src/lib/seo/metadata.ts`
- [X] T004 [P] Audit existing D3 interaction and accessibility conventions in `src/features/skills/components/RadialSkillGroupChart.tsx`, `src/features/skills/components/HorizontalSkillBarChart.tsx`, `src/features/skills/hooks/useSkillSelection.ts`, and `src/styles/globals.css`

---

## Phase 2: Foundational (Blocking Shared Post Architecture)

**Purpose**: Establish the shared Writing schema and renderer entry points that every story depends on.

**⚠️ CRITICAL**: No user story work should begin until this phase is complete.

- [X] T005 Extend the Writing content schema for role profiles, evidence entries, graph data, section references, and final reflection in `src/features/writing/data/writing.types.ts`
- [X] T006 [P] Prepare the post registry and second-post asset normalization path in `src/features/writing/data/posts.index.ts`
- [X] T007 [P] Add section-level render hooks for role profiles, evidence blocks, graph blocks, and final reflection in `src/features/writing/components/WritingPostDetail.tsx`
- [X] T008 [P] Create the shared article subcomponent scaffolding in `src/features/writing/components/WritingRoleProfiles.tsx`, `src/features/writing/components/WritingEvidenceGallery.tsx`, `src/features/writing/components/WritingRoleGraph.tsx`, and `src/features/writing/components/WritingRoleGraphFallback.tsx`
- [X] T009 [P] Add shared styling primitives for role cards, evidence placeholders, graph surfaces, and fallback states in `src/styles/globals.css`

**Checkpoint**: Shared schema, render hooks, and styling primitives are ready for story implementation.

---

## Phase 3: User Story 1 - Read a Grounded Reflection on AI Roles (Priority: P1) 🎯 MVP

**Goal**: Publish the new AI roles article with grounded content, structured role descriptions, cover art, and honest evidence placeholders.

**Independent Test**: Open `/blog/ai-tools-software-engineering-role-confusion` from the Writing list and confirm the post shows the reflective title, required first paragraph, grounded role discussion, visible cover image, evidence section, and final provocative reflection in English.

- [X] T010 [US1] Create the new post JSON shell with slug, title, shortDescription, summary, publishDate, tags, table-of-contents title, and share metadata in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T011 [P] [US1] Register the new article in `src/features/writing/data/posts.index.ts` so it appears in `src/features/writing/WritingSection.tsx`
- [X] T012 [US1] Draft the ordered article sections for the opening reflection, title-confusion framing, API-integration nuance, developer reassurance, fundamentals, prompt/context quality, focused AI toolset, and closing reflection in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T013 [US1] Define the required role entries for AI Engineer, Applied AI Engineer, LLM Engineer, ML Engineer, Data Scientist, AI Product Engineer, Prompt Engineer, Automation Engineer, Software Engineer with AI Tools, and Full Stack Engineer building AI integrations in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T014 [US1] Define the screenshot and print placeholder records with captions, source labels, notes, and placeholder flags in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T015 [P] [US1] Create the local cover illustration and social preview assets in `public/blog/ai-tools-software-engineering-role-confusion-cover.svg` and `public/blog/ai-tools-software-engineering-role-confusion-cover.png`
- [X] T016 [US1] Connect cover-image metadata, alt text, section references, evidence references, and final reflection fields in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T017 [US1] Implement structured role-profile and evidence rendering in `src/features/writing/components/WritingRoleProfiles.tsx`, `src/features/writing/components/WritingEvidenceGallery.tsx`, and `src/features/writing/components/WritingPostDetail.tsx`
- [X] T018 [US1] Verify the new article cover appears cleanly in list and detail contexts through `src/features/writing/components/WritingPostCard.tsx` and `src/features/writing/components/WritingPostDetail.tsx`

**Checkpoint**: User Story 1 should now publish a complete, grounded article that reads correctly without the interactive graph.

---

## Phase 4: User Story 2 - Explore Role Overlap Through an Interactive Map (Priority: P2)

**Goal**: Add a readable interactive role-and-skills map with connected-node highlighting, detail panel behavior, and a responsive presentation that stays aligned with the Writing experience.

**Independent Test**: Open the role-map section in the new post, select any role, and confirm that connected skills and responsibilities highlight, unrelated nodes mute, a detail panel updates, and the experience remains understandable instead of visually noisy.

- [X] T019 [US2] Define maintainable role-graph nodes, links, default selection, and node descriptions in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T020 [P] [US2] Implement deterministic lane-based graph layout and link-highlighting helpers in `src/features/writing/utils/roleGraphLayout.ts`
- [X] T021 [P] [US2] Implement the primary SVG role graph with node selection, connected-node highlighting, muted unrelated nodes, and detail-panel state in `src/features/writing/components/WritingRoleGraph.tsx`
- [X] T022 [P] [US2] Implement the text fallback or simplified mobile selector for the same graph data in `src/features/writing/components/WritingRoleGraphFallback.tsx`
- [X] T023 [US2] Add keyboard activation, selected-state semantics, and accessible graph labeling in `src/features/writing/components/WritingRoleGraph.tsx` and `src/features/writing/components/WritingRoleGraphFallback.tsx`
- [X] T024 [US2] Embed conditional graph rendering and responsive graph-versus-fallback switching in `src/features/writing/components/WritingPostDetail.tsx`
- [X] T025 [US2] Refine the role-graph visual treatment to match the Writing identity in `src/styles/globals.css`

**Checkpoint**: User Story 2 should now provide a usable interactive role map plus synchronized detail behavior.

---

## Phase 5: User Story 3 - Maintain the Post Through the Local Content Workflow (Priority: P3)

**Goal**: Keep the article maintainable as local content so future evidence, role, and graph updates do not require unrelated Writing changes.

**Independent Test**: Review the final JSON, registry, and renderer wiring and confirm that future edits to role descriptions, evidence placeholders, cover assets, or graph data can be made through the local post workflow without redesigning other blog posts.

- [X] T026 [P] [US3] Harden optional evidence-image handling and future asset-path support in `src/features/writing/components/WritingEvidenceGallery.tsx` and `src/features/writing/data/writing.types.ts`
- [X] T027 [US3] Harden conditional rendering so role profiles, evidence blocks, graph sections, and final reflection only render when the related post data exists in `src/features/writing/components/WritingPostDetail.tsx`
- [X] T028 [P] [US3] Connect article-specific share and social-preview metadata to the new post content in `src/features/writing/seo.ts`, `src/features/writing/WritingPostPage.tsx`, and `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T029 [US3] Verify the new article remains maintainable through the local registry and content workflow in `src/features/writing/data/posts.index.ts`, `src/features/writing/data/writing.types.ts`, and `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
- [X] T030 [US3] Preserve clean blog navigation and ensure the graph section only renders when graph data exists in `src/features/writing/WritingSection.tsx`, `src/features/writing/WritingPostPage.tsx`, and `src/features/writing/components/WritingPostDetail.tsx`

**Checkpoint**: User Story 3 should leave the feature easy to evolve through the existing local Writing workflow.

---

## Phase 6: Polish & Cross-Cutting Validation

**Purpose**: Review accuracy, run validation, and confirm the diff stays scoped to this feature.

- [X] T031 Review the article for overclaims, non-authoritative role wording, and honest personal positioning in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json` and `specs/008-ai-roles-blog-post/spec.md`
- [X] T032 Review the API-integration argument, AI-engineer nuance, and non-dismissive tone in `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json` and `specs/008-ai-roles-blog-post/contracts/ai-role-post-content-contract.md`
- [X] T033 Run `npm run lint`, `npm run test`, and `npm run build` from `package.json`
- [X] T034 Validate blog list rendering, post detail rendering, graph interactions, graph fallback behavior, responsive layout, image loading, and share metadata against `specs/008-ai-roles-blog-post/quickstart.md`
- [X] T035 Review the final feature-only diff across `src/features/writing/`, `public/blog/`, `AGENTS.md`, and `specs/008-ai-roles-blog-post/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 and blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Phase 2; delivers the publishable article MVP.
- **User Story 2 (Phase 4)**: Depends on User Story 1 because the role graph is embedded inside the new post content and post-detail flow.
- **User Story 3 (Phase 5)**: Depends on User Stories 1 and 2 because it hardens the finished article workflow and conditional rendering.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Starts after Foundational and has no dependency on later stories.
- **US2 (P2)**: Builds on the published article shell and post-detail integration from US1.
- **US3 (P3)**: Builds on the completed article and graph behavior to keep the workflow maintainable.

### Within Each User Story

- Shared schema and render hooks precede article-specific JSON work.
- Post JSON structure precedes component integration.
- Graph data precedes graph layout and component behavior.
- Conditional rendering and metadata hardening happen after the core content and graph exist.
- Validation and diff review happen only after implementation is complete.

---

## Parallel Opportunities

- **Phase 1**: `T002`, `T003`, and `T004` can run in parallel after `T001`.
- **Phase 2**: `T006`, `T007`, `T008`, and `T009` can run in parallel after `T005`.
- **US1**: `T011` and `T015` can run in parallel after `T010`.
- **US2**: `T020`, `T021`, and `T022` can run in parallel after `T019`.
- **US3**: `T026` and `T028` can run in parallel after User Story 2 is complete.

## Parallel Example: User Story 2

```bash
Task: "Implement deterministic lane-based graph layout and link-highlighting helpers in src/features/writing/utils/roleGraphLayout.ts"
Task: "Implement the primary SVG role graph in src/features/writing/components/WritingRoleGraph.tsx"
Task: "Implement the text fallback or simplified mobile selector in src/features/writing/components/WritingRoleGraphFallback.tsx"
```

## Parallel Example: User Story 3

```bash
Task: "Harden optional evidence-image handling and future asset-path support in src/features/writing/components/WritingEvidenceGallery.tsx and src/features/writing/data/writing.types.ts"
Task: "Connect article-specific share and social-preview metadata in src/features/writing/seo.ts, src/features/writing/WritingPostPage.tsx, and src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate the new article as a readable published Writing post before adding the interactive graph.

### Incremental Delivery

1. Finish Setup + Foundational to lock the schema and renderer boundaries.
2. Deliver US1 to publish the article, role descriptions, evidence placeholders, and cover assets.
3. Deliver US2 to add the interactive role map and fallback behavior.
4. Deliver US3 to harden the local workflow, metadata, and conditional rendering.
5. Finish with Phase 6 validation and scoped diff review.

### Suggested MVP Scope

- **MVP**: Phase 1, Phase 2, and Phase 3 only.
- This delivers the highest-priority outcome: a complete published article that communicates the role-confusion reflection without waiting on the interactive graph.

---

## Notes

- All tasks follow the required checklist format with sequential task IDs.
- `[P]` markers are only used where the work can happen in different files without incomplete-task conflicts.
- Story labels appear only in user-story phases.
- The task list is intentionally scoped to this single post, its supporting assets, and the minimal Writing renderer changes required to support it.
