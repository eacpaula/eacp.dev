# Tasks: Local JSON-Driven Writing Experience

**Input**: Design documents from `/specs/006-writing-blog-revamp/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No story-level automated test tasks were generated because the specification does not require a TDD workflow. Validation is covered through explicit implementation review tasks and the required `lint`, `test`, and `build` commands.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Current Writing Section Analysis)

**Purpose**: Inspect the existing Writing implementation and establish the exact replacement boundary before feature code is added.

- [x] T001 Audit the current Writing section structure in `src/components/sections/BlogPreviewSection.tsx`, `src/content/blog-topics.ts`, `src/app/AppShell.tsx`, and `src/content/site-metadata.ts`
- [x] T002 Audit shared content and type touchpoints that the Writing replacement may affect in `src/lib/content/index.ts` and `src/types/content.ts`
- [x] T003 Create the feature scaffolding directories and initial files under `src/features/writing/` and `public/writing/`

---

## Phase 2: Foundational (Blocking Content Architecture)

**Purpose**: Build the shared content and navigation infrastructure that all user stories depend on.

**⚠️ CRITICAL**: No user story work should start until this phase is complete.

- [x] T004 Define the Writing content, image, comparison-block, share-metadata, and view-state interfaces in `src/features/writing/data/writing.types.ts`
- [x] T005 Create the post registry and slug lookup foundation for local JSON-driven content in `src/features/writing/data/posts.index.ts`
- [x] T006 [P] Implement route helper utilities for Writing list and post-page paths in `src/features/writing/utils/writingUrlState.ts`
- [x] T007 [P] Implement LinkedIn, Telegram, and WhatsApp share URL builders in `src/features/writing/utils/shareLinks.ts`
- [x] T008 Create the base feature shell and safe empty-state contract in `src/features/writing/WritingSection.tsx` and `src/features/writing/components/WritingEmptyState.tsx`

**Checkpoint**: Shared content architecture, URL state, and share-link utilities are ready for story implementation.

---

## Phase 3: User Story 1 - Browse Real Writing (Priority: P1) 🎯 MVP

**Goal**: Replace placeholder Writing roadmap entries with a real local post list that is visually integrated, accessible, and easy to scan.

**Independent Test**: Load the portfolio, navigate to `#blog`, and confirm that at least one real post appears as a stacked full-width list entry with a local image, title, and short description while no placeholder roadmap entries remain.

- [x] T009 [P] [US1] Create the first local Writing cover asset in `public/writing/spec-driven-development-cover.svg`
- [x] T010 [US1] Create the first post JSON file with slug, list metadata, image reference, alt text, and initial content structure in `src/features/writing/data/posts/spec-driven-development.json`
- [x] T011 [US1] Implement post preview sourcing, ordering, and registry exports in `src/features/writing/data/posts.index.ts`
- [x] T012 [P] [US1] Implement the Writing post list item component for image, title, and short description in `src/features/writing/components/WritingPostCard.tsx`
- [x] T013 [P] [US1] Implement the Writing stacked-list component for published posts in `src/features/writing/components/WritingPostList.tsx`
- [x] T014 [P] [US1] Implement the no-post fallback UI for the Writing section in `src/features/writing/components/WritingEmptyState.tsx`
- [x] T015 [US1] Compose the list-mode Writing section with accessible post-link selection in `src/features/writing/WritingSection.tsx`
- [x] T016 [US1] Replace the placeholder Writing section wiring and preserve the `Writing` nav anchor in `src/app/AppShell.tsx` and `src/content/site-metadata.ts`
- [x] T017 [US1] Add Writing list-row, section, and focus-state styles aligned with `DESIGN.md` in `src/styles/globals.css`

**Checkpoint**: User Story 1 should now show a real, accessible, local Writing list and no placeholder roadmap entries.

---

## Phase 4: User Story 2 - Read and Share a Full Post (Priority: P2)

**Goal**: Let visitors open the full article on a dedicated portfolio page, read the complete content, and use direct-link share actions.

**Independent Test**: Open the Spec-Driven Development post from the Writing list or a direct `/writing/spec-driven-development` URL and confirm that the full article, metadata, and LinkedIn/Telegram/WhatsApp share actions render correctly with a way back to the list.

- [x] T018 [US2] Draft the full Spec-Driven Development article sections and grounded firsthand commentary in `src/features/writing/data/posts/spec-driven-development.json`
- [x] T019 [US2] Add the required OpenSpec, Spec Kit, and Kiro comparison blocks, vibe-coding reflections, and assistant-usage commentary in `src/features/writing/data/posts/spec-driven-development.json`
- [x] T020 [US2] Align the article tone, claims, and limitations with the approved spec in `src/features/writing/data/posts/spec-driven-development.json` and `specs/006-writing-blog-revamp/spec.md`
- [x] T021 [P] [US2] Implement the full article detail component with semantic headings, metadata, and structured section rendering in `src/features/writing/components/WritingPostDetail.tsx`
- [x] T022 [P] [US2] Implement the LinkedIn, Telegram, and WhatsApp share action component in `src/features/writing/components/WritingShareActions.tsx`
- [x] T023 [US2] Implement the dedicated route-based post page, invalid-slug fallback, and return-to-list behavior in `src/features/writing/WritingPostPage.tsx`
- [x] T024 [US2] Wire list selection, router-based direct-link hydration, article detail rendering, share actions, and header navigation across `src/App.tsx`, `src/main.tsx`, `src/components/layout/SiteHeader.tsx`, `src/features/writing/WritingSection.tsx`, `src/features/writing/components/WritingPostList.tsx`, and `src/features/writing/components/WritingPostDetail.tsx`
- [x] T025 [US2] Add long-form article, share-action, and detail-layout styling in `src/styles/globals.css`

**Checkpoint**: User Story 2 should now support full in-portfolio article reading on dedicated pages, direct links, share actions, and graceful invalid-slug recovery.

---

## Phase 5: User Story 3 - Add Future Posts With Minimal Friction (Priority: P3)

**Goal**: Keep the Writing system easy to extend so future posts mainly require a JSON file, a local asset, and at most a small registry update.

**Independent Test**: Review the final post registry and content model, then confirm that adding another article would only require a new JSON file, a local image asset, and the documented registry touchpoint without changing unrelated sections.

- [x] T026 [US3] Refine the one-file-per-post authoring flow and exported lookup helpers in `src/features/writing/data/posts.index.ts`
- [x] T027 [US3] Ensure optional section fields such as comparisons, pros, cons, callouts, and takeaways render safely for future posts in `src/features/writing/components/WritingPostDetail.tsx` and `src/features/writing/data/writing.types.ts`
- [x] T028 [P] [US3] Remove the obsolete placeholder post dataset in `src/content/blog-topics.ts`
- [x] T029 [P] [US3] Remove obsolete placeholder content exports and preview-type wiring in `src/lib/content/index.ts` and `src/types/content.ts`
- [x] T030 [US3] Delete or retire the replaced placeholder section component in `src/components/sections/BlogPreviewSection.tsx`

**Checkpoint**: User Story 3 should leave the Writing feature maintainable for future local-post additions and fully remove the old placeholder content path.

---

## Phase 6: Polish & Cross-Cutting Validation

**Purpose**: Finish accessibility, responsiveness, validation, and cleanup checks that span multiple stories.

- [x] T031 Add final keyboard, visible-focus, and alt-text refinements across `src/features/writing/components/WritingPostCard.tsx`, `src/features/writing/components/WritingPostDetail.tsx`, `src/features/writing/components/WritingShareActions.tsx`, `src/features/writing/components/WritingEmptyState.tsx`, and `src/styles/globals.css`
- [x] T032 Add final responsive layout refinements for stacked list entries, article reading width, share controls, and image scaling in `src/features/writing/WritingSection.tsx`, `src/features/writing/components/WritingPostList.tsx`, `src/features/writing/components/WritingPostDetail.tsx`, and `src/styles/globals.css`
- [x] T033 Run `npm run lint`, `npm run test`, and `npm run build` from `package.json`
- [x] T034 Validate list view, post detail view, share actions, responsive behavior, and first-post content against `specs/006-writing-blog-revamp/spec.md` and `specs/006-writing-blog-revamp/quickstart.md`
- [x] T035 Review the final feature-only diff for unrelated changes across `src/features/writing/`, `public/writing/`, `src/app/AppShell.tsx`, `src/content/site-metadata.ts`, `src/lib/content/index.ts`, and `src/types/content.ts`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; starts immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 and blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Phase 2; delivers the MVP Writing list.
- **User Story 2 (Phase 4)**: Depends on Phase 3 because it extends the first real post and list flow into detail and share behavior.
- **User Story 3 (Phase 5)**: Depends on Phases 3 and 4 because it finalizes the reusable authoring path and removes the old placeholder implementation.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Starts after Foundational and has no dependency on later stories.
- **US2 (P2)**: Builds on US1 list and registry behavior to add full article reading and share flows.
- **US3 (P3)**: Builds on the completed Writing feature to simplify future additions and remove obsolete placeholder paths.

### Within Each User Story

- Content and data tasks precede component wiring.
- Component implementation precedes shared styling refinement.
- Section composition happens after the underlying data and component pieces exist.
- Cleanup of old placeholder files happens only after the replacement path is functional.

---

## Parallel Opportunities

- **Phase 2**: `T006` and `T007` can run in parallel after `T004` and `T005`.
- **US1**: `T009`, `T012`, `T013`, and `T014` can run in parallel once the foundational types exist.
- **US2**: `T021` and `T022` can run in parallel while article content tasks `T018` to `T020` are being completed.
- **US3**: `T028` and `T029` can run in parallel after the replacement Writing flow is confirmed.

## Parallel Example: User Story 1

```bash
# Parallel UI and asset work for the Writing list:
Task: "Create the first local Writing cover asset in public/writing/spec-driven-development-cover.svg"
Task: "Implement the Writing post card component in src/features/writing/components/WritingPostCard.tsx"
Task: "Implement the Writing post list/grid component in src/features/writing/components/WritingPostList.tsx"
Task: "Implement the no-post fallback UI in src/features/writing/components/WritingEmptyState.tsx"
```

## Parallel Example: User Story 2

```bash
# Parallel article-detail implementation once the content direction is fixed:
Task: "Implement the full article detail component in src/features/writing/components/WritingPostDetail.tsx"
Task: "Implement the LinkedIn, Telegram, and WhatsApp share action component in src/features/writing/components/WritingShareActions.tsx"
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate `#blog` stacked-list behavior before expanding to post pages.

### Incremental Delivery

1. Finish Setup + Foundational to lock the content model and URL/share utilities.
2. Deliver US1 to replace placeholders with a real local post list.
3. Deliver US2 to add route-based full reading and share behavior for the first article.
4. Deliver US3 to finalize maintainability and remove the obsolete placeholder path.
5. Finish with Phase 6 validation and cleanup review.

### Suggested MVP Scope

- **MVP**: Phase 1, Phase 2, and Phase 3 only.
- This delivers the highest-priority outcome: the placeholder Writing roadmap is replaced with a real local Writing section.

## Notes

- All tasks follow the required checklist format with sequential task IDs.
- `[P]` markers only appear on tasks that can be completed independently in different files.
- Story labels are used only on user-story phases.
- Validation tasks intentionally cover `lint`, `test`, `build`, manual story verification, responsive review, accessibility basics, content correctness, and unrelated-change review.
