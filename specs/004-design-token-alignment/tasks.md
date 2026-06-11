---

description: "Task list for Design Token Alignment with DESIGN.md"
---

# Tasks: Design Token Alignment with DESIGN.md

**Input**: Design documents from `/specs/004-design-token-alignment/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No dedicated automated test tasks are generated because the feature
spec does not require new automated tests. Validation uses `npm run lint`,
`npm run build`, and the manual review flow defined in `quickstart.md`.

**Organization**: Tasks are grouped by user story to enable independent
implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the migration scope and shared implementation surface

- [X] T001 Review token requirements in `DESIGN.md`, `specs/004-design-token-alignment/spec.md`, and `specs/004-design-token-alignment/contracts/token-alignment-contract.md`
- [X] T002 Review representative component scope in `specs/004-design-token-alignment/contracts/representative-components-contract.md` and `specs/004-design-token-alignment/quickstart.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared semantic token foundation that all user
stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T003 Create the semantic dark-mode-first token foundation in `src/styles/globals.css`
- [X] T004 Align shared typography, spacing, shape, border, and elevation tokens in `src/styles/globals.css`
- [X] T005 Update global page, selection, and base element token consumption in `src/styles/globals.css` and `src/app/AppShell.tsx`
- [X] T006 Normalize shared interactive primitives to the new token system in `src/components/ui/CtaLink.tsx` and `src/components/ui/SectionHeading.tsx`
- [X] T007 Normalize layout chrome to the new token system in `src/components/layout/SiteHeader.tsx` and `src/components/layout/SiteFooter.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Establish Shared Tokens (Priority: P1) 🎯 MVP

**Goal**: Replace ad hoc visual roles with a reusable semantic token system that
works across the portfolio foundation

**Independent Test**: Review the homepage after the shared token migration and
confirm page background, shared surfaces, text roles, borders, and primary
actions all pull from one consistent semantic system without obvious light-theme
carryover.

### Implementation for User Story 1

- [X] T008 [US1] Map the hero shell and metrics surfaces to the aligned token system in `src/components/sections/HeroSection.tsx`
- [X] T009 [P] [US1] Map the professional summary cards and emphasis block to the aligned token system in `src/components/sections/ProfessionalSummarySection.tsx`
- [X] T010 [P] [US1] Map the engineering impact cards, nested surfaces, and technology chips to the aligned token system in `src/components/sections/EngineeringImpactSection.tsx`
- [X] T011 [US1] Remove remaining arbitrary radii and one-off visual values from the User Story 1 components in `src/components/sections/HeroSection.tsx`, `src/components/sections/ProfessionalSummarySection.tsx`, and `src/components/sections/EngineeringImpactSection.tsx`

**Checkpoint**: User Story 1 should now prove that the semantic token system
works across the app shell, shared UI primitives, and core flagship sections

---

## Phase 4: User Story 2 - Align the Existing Portfolio UI (Priority: P2)

**Goal**: Apply the aligned token system to representative shared UI patterns so
the live portfolio reflects a consistent dark technical brand

**Independent Test**: Open the homepage on desktop and mobile and verify that
shared patterns such as section headings, cards, chips, CTA treatments, and
contact blocks use the same token logic without mismatched surfaces, shadows, or
accent behavior.

### Implementation for User Story 2

- [X] T012 [P] [US2] Align skill cards and skill emphasis chips to the semantic token system in `src/components/sections/SkillsSection.tsx`
- [X] T013 [P] [US2] Align case study cards, labels, and supporting chips to the semantic token system in `src/components/sections/CaseStudiesSection.tsx`
- [X] T014 [P] [US2] Align blog preview cards and metadata pills to the semantic token system in `src/components/sections/BlogPreviewSection.tsx`
- [X] T015 [P] [US2] Align experience cards, supporting detail blocks, and technology tags to the semantic token system in `src/components/sections/ExperienceSection.tsx`
- [X] T016 [US2] Align contact surfaces, scheduling CTA treatment, and contact method cards to the semantic token system in `src/components/sections/ContactSection.tsx`
- [X] T017 [US2] Remove remaining inconsistent token usage across representative section components in `src/components/sections/SkillsSection.tsx`, `src/components/sections/CaseStudiesSection.tsx`, `src/components/sections/BlogPreviewSection.tsx`, `src/components/sections/ExperienceSection.tsx`, and `src/components/sections/ContactSection.tsx`

**Checkpoint**: User Stories 1 and 2 should now produce a consistent tokenized
homepage without a full redesign

---

## Phase 5: User Story 3 - Preserve Lightweight Maintenance (Priority: P3)

**Goal**: Keep the aligned token system easy to maintain, static-safe, and
practical for future contributors

**Independent Test**: Verify that contributors can identify the shared token
source quickly, that the implementation stays inside the existing styling stack,
and that the portfolio still builds successfully without new UI infrastructure.

### Implementation for User Story 3

- [X] T018 [US3] Simplify and clarify semantic token role grouping for future contributors in `src/styles/globals.css`
- [X] T019 [US3] Normalize any remaining shell-level direct token drift in `src/app/AppShell.tsx`, `src/components/layout/SiteHeader.tsx`, `src/components/layout/SiteFooter.tsx`, `src/components/ui/CtaLink.tsx`, and `src/components/ui/SectionHeading.tsx`
- [X] T020 [US3] Verify the existing TailwindCSS and static-hosting setup remains unchanged while token alignment is completed in `package.json`, `vite.config.ts`, and `src/styles/globals.css`

**Checkpoint**: All user stories should now be independently functional and the
token system should remain maintainable within the current architecture

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and cleanup across the feature

- [X] T021 [P] Run lint and address any style-system regressions in `package.json` and affected files under `src/`
- [X] T022 [P] Run build and address any integration regressions in `package.json` and affected files under `src/`
- [ ] T023 Run the manual validation flow from `specs/004-design-token-alignment/quickstart.md` and fix any final token inconsistencies in `src/styles/globals.css` and affected files under `src/components/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion and should build on the semantic token patterns proven in User Story 1
- **User Story 3 (Phase 5)**: Depends on Foundational completion and should run after the representative component migration is in place
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - establishes the MVP token system
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) but is easiest after User Story 1 defines the stable section-level token patterns
- **User Story 3 (P3)**: Depends on the token system and representative migrations being in place so maintainability cleanup can reflect the final structure

### Within Each User Story

- Shared token foundation before section migration
- Core section migration before cleanup of remaining arbitrary values
- Representative component updates before final validation

### Parallel Opportunities

- T009 and T010 can run in parallel after T008 starts the User Story 1 section migration pattern
- T012, T013, T014, and T015 can run in parallel after Phase 2 completes
- T021 and T022 can run in parallel after implementation is complete

---

## Parallel Example: User Story 2

```bash
# Launch representative section migrations together after the shared token foundation is ready:
Task: "Align skill cards and skill emphasis chips in src/components/sections/SkillsSection.tsx"
Task: "Align case study cards and labels in src/components/sections/CaseStudiesSection.tsx"
Task: "Align blog preview cards and metadata pills in src/components/sections/BlogPreviewSection.tsx"
Task: "Align experience cards and detail blocks in src/components/sections/ExperienceSection.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm the semantic token system works across the
   shell, shared primitives, and core flagship sections

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate semantic token foundation
3. Add User Story 2 → Validate representative section adoption
4. Add User Story 3 → Validate maintainability and static-first constraints
5. Complete Polish → Run lint, build, and manual quickstart validation

### Parallel Team Strategy

With multiple developers:

1. One developer completes the shared token foundation in `src/styles/globals.css`
   and shared primitives
2. Once Foundational is done:
   - Developer A: Hero, summary, and impact sections
   - Developer B: Skills, case studies, and blog preview sections
   - Developer C: Experience and contact sections
3. Finish with a shared cleanup and validation pass

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently testable through the acceptance flow in the
  spec and quickstart documents
- Avoid expanding these tasks into a full redesign; keep the work constrained to
  token alignment and representative migration
