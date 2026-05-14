---

description: "Task list for Portfolio Visual Identity and Content Voice Refinement"
---

# Tasks: Portfolio Visual Identity and Content Voice Refinement

**Input**: Design documents from `/specs/002-portfolio-identity-voice/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No new automated tests were explicitly requested in the specification. Validation relies on `npm run lint`, `npm run build`, and manual responsive, accessibility, identity, and copy review.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `public/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Capture the current implementation baseline and align the feature workspace with the new refinement scope

- [ ] T001 Review current token usage and section styling in `src/styles/globals.css`, `src/app/AppShell.tsx`, and `src/components/ui/`
- [ ] T002 Review existing homepage copy sources in `src/content/profile.ts`, `src/content/site-metadata.ts`, `src/content/achievements.ts`, `src/content/experience.ts`, `src/content/case-studies.ts`, `src/content/blog-topics.ts`, `src/content/contact.ts`, and `src/content/skills.ts`
- [ ] T003 Review current section composition in `src/components/sections/` and `src/components/layout/` against `specs/002-portfolio-identity-voice/contracts/ui-contract.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared token, shell, and primitive changes that all story work depends on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Update the global theme token set in `src/styles/globals.css` to replace the beige/editorial baseline with the refined technical palette, typography stacks, surfaces, borders, and background rhythm
- [ ] T005 [P] Refine shared section heading hierarchy in `src/components/ui/SectionHeading.tsx` to support stronger technical presentation and clearer section rhythm
- [ ] T006 [P] Refine shared CTA styling in `src/components/ui/CtaLink.tsx` to align actions with the updated token system and stronger brand identity
- [ ] T007 Update sticky header/navigation presentation in `src/components/layout/SiteHeader.tsx` to match the new token system, maintain readability, and preserve focus visibility
- [ ] T008 Update page-level spacing and section flow in `src/app/AppShell.tsx` to improve overall layout rhythm while preserving the existing section order

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Recognize a Distinct Senior Brand Quickly (Priority: P1) 🎯 MVP

**Goal**: Make the first screen and early section flow feel distinct, modern, technical, and immediately credible for a senior software engineering portfolio

**Independent Test**: Open the homepage on desktop and mobile, review the hero and first supporting section, and confirm the visual identity no longer feels warm editorial or reference-derived while still presenting senior full stack positioning within 10 seconds

### Implementation for User Story 1

- [ ] T009 [P] [US1] Rewrite core positioning copy in `src/content/profile.ts` for sharper headline, subheadline, summary, focus areas, availability note, and hero metric framing
- [ ] T010 [P] [US1] Update metadata and navigation labels in `src/content/site-metadata.ts` to match the refined identity and positioning
- [ ] T011 [US1] Refine hero layout, hierarchy, quick-read panel, and CTA composition in `src/components/sections/HeroSection.tsx`
- [ ] T012 [US1] Refine professional summary layout, hierarchy, and supporting surfaces in `src/components/sections/ProfessionalSummarySection.tsx`
- [ ] T013 [US1] Align shell-level brand framing and footer tone in `src/components/layout/SiteFooter.tsx` and `src/App.tsx`

**Checkpoint**: User Story 1 should now deliver a distinct first impression and stronger senior brand positioning on its own

---

## Phase 4: User Story 2 - Read a Direct Professional Narrative (Priority: P2)

**Goal**: Remove external-narrator language and replace it with direct, concise, professional copy across the visible homepage narrative

**Independent Test**: Review the hero, summary, engineering impact, skills, experience timeline, and contact sections and confirm the visible copy reads as direct professional communication with no awkward third-person self-description or inflated marketing language

### Implementation for User Story 2

- [ ] T014 [P] [US2] Rewrite engineering impact content for direct voice and tighter scan phrasing in `src/content/achievements.ts`
- [ ] T015 [P] [US2] Rewrite experience timeline content for direct professional tone in `src/content/experience.ts`
- [ ] T016 [P] [US2] Rewrite case study and blog placeholder summaries for future-facing professional tone in `src/content/case-studies.ts` and `src/content/blog-topics.ts`
- [ ] T017 [P] [US2] Refine contact and supporting recruiter-facing copy in `src/content/contact.ts` and `src/content/skills.ts`
- [ ] T018 [US2] Update static helper text and section framing copy in `src/components/sections/ProfessionalSummarySection.tsx`, `src/components/sections/EngineeringImpactSection.tsx`, `src/components/sections/SkillsSection.tsx`, `src/components/sections/ExperienceSection.tsx`, `src/components/sections/CaseStudiesSection.tsx`, `src/components/sections/BlogPreviewSection.tsx`, and `src/components/sections/ContactSection.tsx`

**Checkpoint**: User Stories 1 and 2 should now communicate a distinct identity and a direct professional voice independently of further layout polish

---

## Phase 5: User Story 3 - Scan Impact and Future Content Intentionally (Priority: P3)

**Goal**: Improve scan speed, section clarity, and future-content framing across the rest of the homepage without expanding scope or architecture

**Independent Test**: Review the engineering impact, skills, experience, case studies, blog, and contact sections on desktop and mobile and confirm they are easier to scan, better differentiated, and clearly intentional about future content

### Implementation for User Story 3

- [ ] T019 [P] [US3] Refine engineering impact card hierarchy, density, and technology tag treatment in `src/components/sections/EngineeringImpactSection.tsx`
- [ ] T020 [P] [US3] Refine skills group layout, emphasis treatment, and wrap behavior in `src/components/sections/SkillsSection.tsx`
- [ ] T021 [P] [US3] Refine experience timeline spacing, entry hierarchy, and supporting metadata treatment in `src/components/sections/ExperienceSection.tsx`
- [ ] T022 [P] [US3] Refine placeholder card styling and status visibility in `src/components/sections/CaseStudiesSection.tsx` and `src/components/sections/BlogPreviewSection.tsx`
- [ ] T023 [US3] Refine contact section layout and follow-up scan behavior in `src/components/sections/ContactSection.tsx`

**Checkpoint**: All user stories should now be independently functional and the full homepage should feel sharper, more scannable, and more intentional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and small cross-story adjustments

- [ ] T024 [P] Run final source-backed copy review against `docs/profile/evandro-resume-summary.md`, `docs/profile/skills.csv`, and `src/content/`
- [ ] T025 [P] Run accessibility and responsive review across `src/app/AppShell.tsx`, `src/components/layout/`, and `src/components/sections/`
- [ ] T026 Run build validation with `npm run lint` and `npm run build`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion and benefits from User Story 1 section updates, but can be validated independently once its own tasks are complete
- **User Story 3 (Phase 5)**: Depends on Foundational completion and benefits from the copy decisions in User Story 2 for final scan behavior
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Prefer after US1 so section framing and core positioning copy are already stabilized
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Prefer after US2 so scan refinements reflect final voice/content decisions

### Within Each User Story

- Shared token and primitive updates must land before story-specific section changes
- Content rewrites should land before final section-level scan and hierarchy refinements
- Story-specific component updates should be validated in the browser before moving to the next story

### Parallel Opportunities

- T005 and T006 can run in parallel after T004 establishes the updated token direction
- T009 and T010 can run in parallel for US1 content updates
- T014, T015, T016, and T017 can run in parallel because they touch separate content files
- T019, T020, T021, and T022 can run in parallel because they focus on different section files
- T024 and T025 can run in parallel before final build validation

---

## Parallel Example: User Story 2

```bash
# Launch content rewrites together once the foundation is ready:
Task: "Rewrite engineering impact content in src/content/achievements.ts"
Task: "Rewrite experience timeline content in src/content/experience.ts"
Task: "Rewrite placeholder summaries in src/content/case-studies.ts and src/content/blog-topics.ts"
Task: "Refine contact and skills copy in src/content/contact.ts and src/content/skills.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Review the first screen and summary on mobile and desktop
5. Demo the new visual identity direction before widening copy and scan refinements

### Incremental Delivery

1. Complete Setup + Foundational → updated token and shared UI base ready
2. Add User Story 1 → validate distinct first impression
3. Add User Story 2 → validate direct professional voice
4. Add User Story 3 → validate scan quality and future-content framing
5. Run Polish tasks → ship-ready refinement

### Parallel Team Strategy

With multiple developers:

1. One developer updates `src/styles/globals.css` and shared primitives
2. One developer handles `src/content/` voice rewrites once the shared direction is stable
3. One developer handles section-level hierarchy refinements after content and token direction are clear

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should remain independently reviewable in the browser
- Avoid introducing new dependencies unless implementation proves a blocker in the current stack
- Preserve GitHub Pages compatibility and static-first behavior during every phase
