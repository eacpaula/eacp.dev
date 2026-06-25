---
description: "Task list for Contact Section Rework with Center Portrait and Fullscreen Resume Viewer"
---

# Tasks: Contact Section Rework with Center Portrait and Fullscreen Resume Viewer

**Input**: Design documents from `/specs/007-contact-section-rework/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Rely on targeted manual validation plus `npm run lint`, `npm run test`, and `npm run build`

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g. US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare the feature task structure and align feature imports with the approved plan

- [X] T001 Create the Contact feature module structure under `src/features/contact/` and identify replacement points in `src/app/AppShell.tsx`
- [X] T002 Verify ignore/config coverage for this TypeScript frontend in `.gitignore` and `eslint.config.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared content model and viewer primitives required by all user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T003 Update contact-facing content types in `src/types/content.ts` for direct contact details, contact actions, and resume viewer inputs
- [X] T004 Update `src/content/contact.ts` and `src/lib/content/index.ts` to expose the new minimal Contact content structure and retain existing public destinations
- [X] T005 Create the base fullscreen resume viewer component in `src/features/contact/components/ResumeViewerModal.tsx`
- [X] T006 Add shared contact-viewer layout styling in `src/styles/globals.css`

**Checkpoint**: Shared types, content, and viewer primitives are ready

---

## Phase 3: User Story 1 - Reach Out Through a Warmer Contact Section (Priority: P1) 🎯 MVP

**Goal**: Replace the current copy-heavy Contact section with a warmer heading, minimal copy, and a portrait-centered direct-contact layout

**Independent Test**: Open the homepage and confirm the Contact section shows the new heading, no obsolete explanatory paragraphs, the reused portrait centered, visible email on the left, and visible phone on the right on desktop

### Implementation for User Story 1

- [X] T007 [P] [US1] Create `src/features/contact/components/ContactDirectLinks.tsx` for visible email and phone rails
- [X] T008 [US1] Implement the new Contact section layout in `src/features/contact/ContactSection.tsx` using the existing `hero-editorial-portrait.png`
- [X] T009 [US1] Replace the old Contact import and props wiring in `src/app/AppShell.tsx`

**Checkpoint**: User Story 1 should now render the new minimalist Contact composition

---

## Phase 4: User Story 2 - Use Direct Actions Without Extra Friction (Priority: P2)

**Goal**: Provide concise LinkedIn, GitHub, Schedule a Call, and Resume actions while preserving the existing Calendly behavior and adding the fullscreen resume viewer

**Independent Test**: Open the Contact section, confirm the four concise action buttons are present, activate scheduling, and activate Resume to open the fullscreen viewer with visible document actions

### Implementation for User Story 2

- [X] T010 [P] [US2] Create `src/features/contact/components/ContactActionButtons.tsx` for concise contact actions and scheduling feedback
- [X] T011 [US2] Wire Calendly action handling and resume viewer state into `src/features/contact/ContactSection.tsx`
- [X] T012 [US2] Complete embedded PDF, download, print, fallback, and close behavior in `src/features/contact/components/ResumeViewerModal.tsx`

**Checkpoint**: User Story 2 should now deliver the simplified action row and fullscreen resume experience

---

## Phase 5: User Story 3 - Review and Navigate the Section Accessibly on Any Screen (Priority: P3)

**Goal**: Ensure the reworked Contact section and resume viewer remain keyboard accessible and responsive across desktop, tablet, and mobile layouts

**Independent Test**: Review the Contact section and resume viewer with keyboard-only navigation and at mobile/tablet/desktop widths, confirming visible focus states, usable stacking, and reliable close behavior

### Implementation for User Story 3

- [X] T013 [US3] Add dialog focus management, escape handling, and focus return behavior in `src/features/contact/components/ResumeViewerModal.tsx`
- [X] T014 [US3] Refine responsive behavior and focus-visible treatments across `src/features/contact/ContactSection.tsx`, `src/features/contact/components/ContactDirectLinks.tsx`, `src/features/contact/components/ContactActionButtons.tsx`, and `src/styles/globals.css`

**Checkpoint**: User Story 3 should now keep the feature usable on smaller screens and with keyboard-only interaction

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, cleanup, and task completion tracking

- [X] T015 Run end-to-end feature validation through `npm run lint`, `npm run test`, and `npm run build`
- [X] T016 Review the implemented Contact experience against `specs/007-contact-section-rework/spec.md` and update this task list with completed checkboxes

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on User Story 1 layout scaffolding and Foundational completion
- **User Story 3 (Phase 5)**: Depends on User Stories 1 and 2
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Delivers the new heading, copy removal, and portrait-centered direct-contact layout
- **User Story 2 (P2)**: Builds on the Contact section structure to add concise actions, scheduling behavior, and the resume viewer
- **User Story 3 (P3)**: Hardens keyboard, dialog, and responsive behavior across the finished feature

### Parallel Opportunities

- T007 and T010 are parallelizable component creation tasks once foundational work is complete
- Styling refinements in T014 can happen alongside final viewer accessibility work in T013 after the core behavior is in place

---

## Parallel Example: User Story 2

```bash
Task: "Create src/features/contact/components/ContactActionButtons.tsx for concise contact actions and scheduling feedback"
Task: "Complete embedded PDF, download, print, fallback, and close behavior in src/features/contact/components/ResumeViewerModal.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup
2. Complete Foundational work
3. Complete User Story 1
4. Validate the new heading, copy removal, portrait reuse, and direct-contact layout

### Incremental Delivery

1. Build shared types/content/viewer primitives
2. Ship the new Contact composition
3. Add the simplified action row and fullscreen resume viewer
4. Harden accessibility and responsiveness
5. Run lint, test, and build validation

## Notes

- Reuse the existing `hero-editorial-portrait.png` asset
- Keep Calendly on the existing popup helper path
- Do not redesign unrelated sections or change non-Contact resume links in this feature
