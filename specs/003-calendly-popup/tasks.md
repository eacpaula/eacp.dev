---

description: "Task list for Calendly Popup Scheduling Integration"

---

# Tasks: Calendly Popup Scheduling Integration

**Input**: Design documents from `/specs/003-calendly-popup/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No new automated tests were explicitly requested in the specification. Validation relies on `npm run lint`, `npm run build`, and manual keyboard, mobile, desktop, and degraded-state review.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Review the existing Contact surface and align implementation scope with the Calendly popup feature

- [X] T001 Review the current Contact section structure in `src/components/sections/ContactSection.tsx` against `specs/003-calendly-popup/contracts/contact-scheduling-contract.md`
- [X] T002 Review the existing contact content and type definitions in `src/content/contact.ts`, `src/types/content.ts`, and `src/lib/content/index.ts`
- [X] T003 Review the implementation constraints and verification flow in `specs/003-calendly-popup/research.md` and `specs/003-calendly-popup/quickstart.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared content model and integration helper that all Contact scheduling work depends on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Extend scheduling-related content types in `src/types/content.ts` for centralized Calendly configuration and CTA copy
- [X] T005 [P] Add the centralized Calendly scheduling record and supporting professional copy in `src/content/contact.ts`
- [X] T006 [P] Re-export the scheduling configuration through `src/lib/content/index.ts`
- [X] T007 Create the one-time Calendly popup integration helper in `src/lib/integrations/calendly.ts` with on-demand resource loading and typed success/failure results

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Schedule a Professional Conversation from the Contact Section (Priority: P1) 🎯 MVP

**Goal**: Let relevant visitors launch a professional scheduling flow directly from the Contact section without losing access to the rest of the contact options

**Independent Test**: Open the homepage, navigate to the Contact section, activate `Schedule a call`, and confirm a Calendly popup opens using `https://calendly.com/eacpaula/chat` while email, LinkedIn, GitHub, and resume links remain visible

### Implementation for User Story 1

- [X] T008 [US1] Wire scheduling content from `src/lib/content/index.ts` into the Contact section data flow in the component tree that renders `src/components/sections/ContactSection.tsx`
- [X] T009 [US1] Add the visible primary `Schedule a call` CTA and supporting scheduling copy in `src/components/sections/ContactSection.tsx`
- [X] T010 [US1] Connect the Contact section CTA in `src/components/sections/ContactSection.tsx` to the popup-launch entry point in `src/lib/integrations/calendly.ts`
- [X] T011 [US1] Preserve and verify the existing email, LinkedIn, GitHub, and resume contact methods in `src/components/sections/ContactSection.tsx` and `src/content/contact.ts`

**Checkpoint**: User Story 1 should now provide a working popup scheduling path while keeping existing contact routes available

---

## Phase 4: User Story 2 - Keep the Contact Area Minimal and Intentional (Priority: P2)

**Goal**: Add scheduling without turning the Contact section into a cluttered or inline-calendar-heavy surface

**Independent Test**: Load the homepage before any interaction and confirm the Contact section shows a clear scheduling CTA with no inline calendar, no visually dominant third-party embed, and styling that stays aligned with the existing Tailwind-driven design system

### Implementation for User Story 2

- [X] T012 [P] [US2] Refine Contact section layout and CTA hierarchy in `src/components/sections/ContactSection.tsx` so scheduling reads as the primary action without overwhelming the section
- [X] T013 [P] [US2] Adjust the scheduling copy and contact descriptions in `src/content/contact.ts` to keep the tone concise, direct, and professionally scoped
- [X] T014 [US2] Verify the Calendly integration helper in `src/lib/integrations/calendly.ts` does not render or preload an always-visible inline calendar before CTA activation

**Checkpoint**: User Stories 1 and 2 should now deliver popup scheduling in a clean, minimal Contact section

---

## Phase 5: User Story 3 - Use the Scheduling Flow Reliably Across Devices (Priority: P3)

**Goal**: Make the popup trigger robust for keyboard, desktop, mobile, and degraded external-service conditions

**Independent Test**: Trigger the scheduling CTA with keyboard navigation and on mobile-sized and desktop-sized layouts, then confirm the page remains usable and alternative contact methods remain available even when Calendly cannot open normally

### Implementation for User Story 3

- [X] T015 [P] [US3] Add keyboard-accessible activation, busy-state handling, and repeat-click stability to `src/components/sections/ContactSection.tsx`
- [X] T016 [P] [US3] Add graceful fallback behavior in `src/lib/integrations/calendly.ts` for script load failure, popup launch failure, and repeated resource requests
- [X] T017 [US3] Surface a non-breaking degraded scheduling state in `src/components/sections/ContactSection.tsx` that keeps other contact methods usable when Calendly is unavailable

**Checkpoint**: All user stories should now be independently functional across normal and degraded scheduling scenarios

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and acceptance review across the full feature

- [X] T018 [P] Review the final Contact experience against `specs/003-calendly-popup/spec.md` and both contracts in `specs/003-calendly-popup/contracts/`
- [ ] T019 [P] Run manual responsive and accessibility review for the Contact scheduling flow in `src/components/sections/ContactSection.tsx`
- [X] T020 Run build validation with `npm run lint` and `npm run build`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion and benefits from User Story 1 CTA wiring
- **User Story 3 (Phase 5)**: Depends on Foundational completion and benefits from User Story 1 and User Story 2 interaction and layout decisions
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Prefer after US1 so the scheduling CTA exists before layout refinement
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Prefer after US1 so fallback behavior is validated against the wired popup flow

### Within Each User Story

- Content and type updates must land before Contact section wiring
- The Calendly helper must exist before CTA trigger integration
- The base CTA and contact surface should be in place before fallback and repeat-activation hardening
- Manual keyboard, responsive, and degraded-state review should happen before final build validation

### Parallel Opportunities

- T005 and T006 can run in parallel after T004 defines the scheduling content model
- T012 and T013 can run in parallel because they touch different files
- T015 and T016 can run in parallel because one focuses on UI interaction state and the other on helper failure handling
- T018 and T019 can run in parallel before T020 final validation

---

## Parallel Example: User Story 3

```bash
# Harden the popup flow in parallel once the base CTA is wired:
Task: "Add keyboard-accessible activation, busy-state handling, and repeat-click stability in src/components/sections/ContactSection.tsx"
Task: "Add graceful fallback behavior in src/lib/integrations/calendly.ts for script load failure, popup launch failure, and repeated resource requests"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm the popup opens the centralized Calendly URL and other contact methods remain available
5. Demo the scheduling entry point before refining layout polish and degraded behavior

### Incremental Delivery

1. Complete Setup + Foundational → centralized config and Calendly helper ready
2. Add User Story 1 → validate working popup scheduling CTA
3. Add User Story 2 → validate minimal Contact section presentation
4. Add User Story 3 → validate keyboard, mobile, and degraded-state reliability
5. Run Polish tasks → ship-ready scheduling integration

### Parallel Team Strategy

With multiple developers:

1. One developer extends the content model in `src/types/content.ts`, `src/content/contact.ts`, and `src/lib/content/index.ts`
2. One developer builds `src/lib/integrations/calendly.ts`
3. One developer updates `src/components/sections/ContactSection.tsx` after the shared interfaces are stable

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should remain independently reviewable in the browser
- Do not add a heavy modal framework, backend service, or always-visible inline calendar during implementation
- Preserve static-first GitHub Pages compatibility throughout the feature
