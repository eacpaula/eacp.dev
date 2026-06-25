---

description: "Task list for Interactive Skills Visualization"

---

# Tasks: Interactive Skills Visualization

**Input**: Design documents from `/specs/005-d3-skills-visualization/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No dedicated new automated test tasks are generated. Validation for
this feature uses the existing `npm run lint`, `npm run test`, and
`npm run build` scripts plus the manual review flow defined in `quickstart.md`.

**Organization**: Tasks are grouped by user story to enable independent
implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the exact feature scope, approved data sources, and current
replacement surface before implementation starts

- [X] T001 Review the approved requirements in `specs/005-d3-skills-visualization/spec.md`, `specs/005-d3-skills-visualization/plan.md`, and `specs/005-d3-skills-visualization/research.md`
- [X] T002 Audit `docs/profile/evandro-skills.csv`, `docs/profile/evandro-source-of-true.md`, and `docs/profile/evandro-resume-summary.md` to confirm available columns, skill labels, experience values, source aliases, and verified company or project mapping gaps
- [X] T003 Audit the current replacement surface in `src/components/sections/SkillsSection.tsx`, `src/components/sections/ExperienceSection.tsx`, `src/app/AppShell.tsx`, `src/content/site-metadata.ts`, `src/lib/content/index.ts`, and `src/styles/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared data, state, dependency, and scaffolding
foundation that all user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Add the planned D3 dependencies in `package.json` and `package-lock.json`
- [X] T005 Create feature-scoped interfaces for `SkillGroup`, `Skill`, `CompanyUsage`, and `SkillSelectionState` in `src/features/skills/data/skillExplorer.types.ts`
- [X] T006 Create the curated runtime dataset, alias mapping, group ordering, and safe missing-mapping notes in `src/features/skills/data/skillExplorer.data.ts`
- [X] T007 [P] Create shared aggregation, radial geometry, bar scaling, and label helpers in `src/features/skills/utils/chartUtils.ts`
- [X] T008 [P] Implement local selection and derived-data state in `src/features/skills/hooks/useSkillSelection.ts`
- [X] T009 Create the root `SkillsExplorerSection` scaffold in `src/features/skills/SkillsExplorerSection.tsx`
- [X] T010 Create shared chart, panel, active-state, and focus-state styling hooks in `src/styles/globals.css`

**Checkpoint**: Foundation ready; chart, usage, and accessibility work can now
proceed on top of a verified feature data model

---

## Phase 3: User Story 1 - Explore Skill Strength by Group (Priority: P1) 🎯 MVP

**Goal**: Deliver the new interactive Skills section overview and group drill-down
so recruiters can understand breadth and depth faster than the current static
skill cards

**Independent Test**: Open the Skills section, confirm the overview shows skill
groups with relative depth, select a group, and verify the group detail chart
shows only that group's skills with the first skill auto-selected.

### Implementation for User Story 1

- [X] T011 [P] [US1] Implement the radial group overview chart with D3-driven arcs, accessible labels, and click or keyboard group selection in `src/features/skills/components/RadialSkillGroupChart.tsx`
- [X] T012 [P] [US1] Implement the horizontal skill detail chart with D3-driven scales, accessible labels, and click or keyboard skill selection in `src/features/skills/components/HorizontalSkillBarChart.tsx`
- [X] T013 [US1] Wire default group selection, first-skill auto-selection, overview-to-detail transitions, and aggregate chart data in `src/features/skills/SkillsExplorerSection.tsx` and `src/features/skills/hooks/useSkillSelection.ts`
- [X] T014 [US1] Apply the graphite, muted, and restrained-gold chart styling and non-color selection cues in `src/features/skills/SkillsExplorerSection.tsx`, `src/features/skills/components/RadialSkillGroupChart.tsx`, `src/features/skills/components/HorizontalSkillBarChart.tsx`, and `src/styles/globals.css`
- [X] T015 [US1] Replace the old static Skills section mount with the new explorer section while keeping the rest of the page stable in `src/app/AppShell.tsx`

**Checkpoint**: User Story 1 should now provide a working Skills overview and
group drill-down flow as the MVP section experience

---

## Phase 4: User Story 2 - Connect Skills to Real Experience (Priority: P2)

**Goal**: Preserve the informational value of the old timeline by filtering
verified company and project context from the selected group or skill

**Independent Test**: Select a group, then a skill, and confirm the section
shows only verified related company or project entries with safe handling when a
mapping is incomplete.

### Implementation for User Story 2

- [X] T016 [P] [US2] Expand curated usage mappings, general highlights, and verified related-technology data in `src/features/skills/data/skillExplorer.data.ts`
- [X] T017 [P] [US2] Implement the filtered usage panel with safe empty states and lightweight Motion transitions in `src/features/skills/components/SkillUsagePanel.tsx`
- [X] T018 [US2] Wire general-highlight, group-filtered, skill-filtered, and clear-selection panel states in `src/features/skills/SkillsExplorerSection.tsx` and `src/features/skills/hooks/useSkillSelection.ts`
- [X] T019 [US2] Remove standalone timeline composition and update navigation anchors in `src/app/AppShell.tsx` and `src/content/site-metadata.ts`

**Checkpoint**: User Stories 1 and 2 should now replace the separate Skills and
Timeline sections with one unified section that preserves verified professional
context

---

## Phase 5: User Story 3 - Access the Same Information Without Chart Reliance (Priority: P3)

**Goal**: Make the section usable through keyboard navigation, fallback content,
reduced motion, and mobile-friendly behavior without losing the approved data

**Independent Test**: Navigate the section with keyboard only and on a mobile
viewport, then confirm groups, skills, and related usage entries remain
available even without depending on complex radial interaction.

### Implementation for User Story 3

- [X] T020 [P] [US3] Implement semantic grouped fallback content and chart-summary text in `src/features/skills/components/SkillsAccessibleFallback.tsx`
- [X] T021 [US3] Add keyboard-operable selection controls, chart descriptions, and non-color active-state cues in `src/features/skills/SkillsExplorerSection.tsx`, `src/features/skills/components/RadialSkillGroupChart.tsx`, `src/features/skills/components/HorizontalSkillBarChart.tsx`, and `src/features/skills/components/SkillUsagePanel.tsx`
- [X] T022 [US3] Add reduced-motion-safe behavior for chart, panel, and state transitions in `src/features/skills/SkillsExplorerSection.tsx`, `src/features/skills/components/RadialSkillGroupChart.tsx`, `src/features/skills/components/HorizontalSkillBarChart.tsx`, and `src/features/skills/components/SkillUsagePanel.tsx`
- [X] T023 [US3] Implement tablet and mobile adaptive layout plus simplified mobile group selection in `src/features/skills/SkillsExplorerSection.tsx`, `src/features/skills/components/SkillsAccessibleFallback.tsx`, and `src/styles/globals.css`

**Checkpoint**: All three user stories should now be independently functional,
with accessible and mobile-safe access to the same approved information

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup, visual integration, and validation across the whole
feature

- [X] T024 [P] Remove obsolete exports, imports, and retired static-section wiring in `src/lib/content/index.ts`, `src/content/skills.ts`, `src/components/sections/SkillsSection.tsx`, `src/components/sections/ExperienceSection.tsx`, and `src/app/AppShell.tsx`
- [X] T025 [P] Tune chart labels, spacing, surface treatments, hover states, and gold or muted emphasis for visual integration in `src/features/skills/SkillsExplorerSection.tsx`, `src/features/skills/components/RadialSkillGroupChart.tsx`, `src/features/skills/components/HorizontalSkillBarChart.tsx`, `src/features/skills/components/SkillUsagePanel.tsx`, `src/features/skills/components/SkillsAccessibleFallback.tsx`, and `src/styles/globals.css`
- [X] T026 [P] Run `npm run lint`, `npm run test`, and `npm run build` via `package.json` and fix regressions in affected files under `src/`
- [X] T027 Run the manual desktop, mobile, keyboard, reduced-motion, and content-accuracy validation flow from `specs/005-d3-skills-visualization/quickstart.md`, `docs/profile/evandro-skills.csv`, and `docs/profile/evandro-source-of-true.md`
- [X] T028 Review `git diff` for unrelated changes and resolve feature-scope cleanup in affected files under `src/` and `specs/005-d3-skills-visualization/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on User Story 1 because the usage panel
  builds on the new chart-driven section composition
- **User Story 3 (Phase 5)**: Depends on User Stories 1 and 2 because fallback,
  keyboard, reduced-motion, and mobile behavior should harden the final unified
  section
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational; establishes the MVP
  explorer section and chart drill-down
- **User Story 2 (P2)**: Depends on US1; attaches verified experience context
  and removes the standalone timeline
- **User Story 3 (P3)**: Depends on US1 and US2; adds fallback access,
  keyboard, reduced motion, and responsive simplification to the complete
  section

### Within Each User Story

- Curated data before rendered filters
- Chart primitives before section orchestration
- Section orchestration before page-level replacement
- Replacement before cleanup and final validation

### Parallel Opportunities

- T007 and T008 can run in parallel after T005 and T006 define the shared data
  model
- T011 and T012 can run in parallel after Phase 2 completes
- T016 and T017 can run in parallel after the User Story 1 section exists
- T024, T025, and T026 can run in parallel after all user stories are complete

---

## Parallel Example: User Story 1

```bash
# Launch both chart components after the feature data model and shared helpers exist:
Task: "Implement the radial group overview chart in src/features/skills/components/RadialSkillGroupChart.tsx"
Task: "Implement the horizontal skill detail chart in src/features/skills/components/HorizontalSkillBarChart.tsx"
```

## Parallel Example: User Story 2

```bash
# Build data-backed usage filtering and the panel component together:
Task: "Expand curated usage mappings in src/features/skills/data/skillExplorer.data.ts"
Task: "Implement the filtered usage panel in src/features/skills/components/SkillUsagePanel.tsx"
```

## Parallel Example: User Story 3

```bash
# Build fallback content while responsive layout work proceeds:
Task: "Implement semantic grouped fallback content in src/features/skills/components/SkillsAccessibleFallback.tsx"
Task: "Implement tablet and mobile adaptive layout in src/features/skills/SkillsExplorerSection.tsx and src/styles/globals.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm the new Skills section provides a working
   overview and group drill-down flow before experience filtering is added

### Incremental Delivery

1. Complete Setup + Foundational → feature data model and scaffolding ready
2. Add User Story 1 → validate overview and detail charts
3. Add User Story 2 → validate verified usage filtering and timeline removal
4. Add User Story 3 → validate keyboard, fallback, reduced-motion, and mobile behavior
5. Complete Polish → run command-based and manual validation

### Parallel Team Strategy

With multiple developers:

1. One developer completes Phase 2 data and state foundations
2. Once Foundational is done:
   - Developer A: `RadialSkillGroupChart.tsx` and chart styling
   - Developer B: `HorizontalSkillBarChart.tsx` and section orchestration
   - Developer C: `SkillUsagePanel.tsx` and curated usage mapping
3. Finish with shared accessibility, responsive, and validation passes

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] labels map tasks directly to the approved user stories
- Keep all content grounded in approved repository data; omit missing detail
  instead of guessing
- Do not expand this task list into a broad site redesign or unrelated feature
  work
