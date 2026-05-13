# Tasks: Senior Full Stack Engineer Portfolio MVP

**Input**: Design documents from `/specs/001-senior-portfolio-mvp/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Per-story test tasks are not included because the specification does not explicitly require TDD or dedicated automated test artifacts. Validation tasks cover lint, build, accessibility, and manual story verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project layout under `src/` and `public/`
- Documentation and planning artifacts under `specs/001-senior-portfolio-mvp/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Replace starter assumptions and prepare the requested frontend stack

- [X] T001 Add Tailwind CSS dependencies and update scripts in package.json
- [X] T002 Configure Tailwind CSS and Vite integration in vite.config.ts
- [X] T003 [P] Remove starter-only styling assumptions and establish global style entry in src/main.tsx and src/styles/globals.css
- [X] T004 [P] Clean the starter app shell and route rendering through src/App.tsx and src/app/AppShell.tsx

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core content model, shared layout, and deployment foundations required by all user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Define shared portfolio content types in src/types/content.ts
- [X] T006 [P] Create site metadata and navigation content in src/content/site-metadata.ts
- [X] T007 [P] Create profile and contact content sources in src/content/profile.ts and src/content/contact.ts
- [X] T008 [P] Create achievements, experience, skills, case-study, and blog placeholder content in src/content/achievements.ts, src/content/experience.ts, src/content/skills.ts, src/content/case-studies.ts, and src/content/blog-topics.ts
- [X] T009 Create content access helpers and content mapping utilities in src/lib/content/index.ts
- [X] T010 [P] Create reusable section and CTA primitives in src/components/ui/SectionHeading.tsx and src/components/ui/CtaLink.tsx
- [X] T011 [P] Create shared page chrome components in src/components/layout/SiteHeader.tsx and src/components/layout/SiteFooter.tsx
- [X] T012 Configure GitHub Pages-compatible metadata and asset handling in vite.config.ts and src/lib/seo/metadata.ts
- [X] T013 Compose the base homepage structure with semantic landmarks in src/app/AppShell.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Understand Professional Positioning Fast (Priority: P1) 🎯 MVP

**Goal**: Make the homepage communicate Evandro’s senior full stack positioning within seconds through hero, summary, navigation, and core calls to action.

**Independent Test**: Open the homepage and confirm that the hero and professional summary alone communicate Evandro’s name, seniority, positioning, and primary resume/contact/GitHub/LinkedIn actions within 10 seconds.

### Implementation for User Story 1

- [X] T014 [P] [US1] Implement the hero section in src/components/sections/HeroSection.tsx
- [X] T015 [P] [US1] Implement the professional summary section in src/components/sections/ProfessionalSummarySection.tsx
- [X] T016 [US1] Integrate the hero and summary sections into the page flow in src/app/AppShell.tsx
- [X] T017 [US1] Refine homepage copy hierarchy, anchor navigation, and primary CTA placement in src/components/layout/SiteHeader.tsx and src/components/sections/HeroSection.tsx
- [X] T018 [US1] Apply responsive and dark-mode-friendly presentation for hero and summary content in src/styles/globals.css

**Checkpoint**: User Story 1 should be fully functional and independently testable

---

## Phase 4: User Story 2 - Evaluate Engineering Impact Credibly (Priority: P2)

**Goal**: Show real engineering accomplishments, scannable skill depth, and concise experience context grounded in approved source files.

**Independent Test**: Review the engineering impact, skills, and experience sections and confirm that they present source-backed accomplishments with clear context, contribution, impact, technologies, and concise career context.

### Implementation for User Story 2

- [X] T019 [P] [US2] Implement the engineering impact section in src/components/sections/EngineeringImpactSection.tsx
- [X] T020 [P] [US2] Implement the skills and technology section in src/components/sections/SkillsSection.tsx
- [X] T021 [P] [US2] Implement the experience overview section in src/components/sections/ExperienceSection.tsx
- [X] T022 [US2] Integrate the engineering impact, skills, and experience sections into the homepage in src/app/AppShell.tsx
- [X] T023 [US2] Tune content emphasis and scanning behavior for achievements, skills, and experience in src/content/achievements.ts, src/content/skills.ts, and src/content/experience.ts
- [X] T024 [US2] Refine layout density and responsive presentation for impact, skills, and experience sections in src/styles/globals.css

**Checkpoint**: User Stories 1 and 2 should both work independently

---

## Phase 5: User Story 3 - Access Proof Points and Future Content Paths (Priority: P3)

**Goal**: Provide clear follow-up actions and credible placeholders for future case studies and technical writing.

**Independent Test**: Open the homepage and confirm that contact actions work, resume and external profile links are reachable, and case study/blog placeholders clearly appear as upcoming content.

### Implementation for User Story 3

- [X] T025 [P] [US3] Implement the featured case studies preview section in src/components/sections/CaseStudiesSection.tsx
- [X] T026 [P] [US3] Implement the blog preview placeholder section in src/components/sections/BlogPreviewSection.tsx
- [X] T027 [P] [US3] Implement the contact section in src/components/sections/ContactSection.tsx
- [X] T028 [US3] Integrate the case studies, blog preview, and contact sections into the homepage in src/app/AppShell.tsx
- [X] T029 [US3] Ensure placeholder labeling and future-content messaging stay accurate in src/content/case-studies.ts and src/content/blog-topics.ts
- [X] T030 [US3] Verify public action targets and resume asset usage in src/content/contact.ts, src/content/profile.ts, and public/resume/resume.pdf

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Finish accessibility, deployment, and verification work across the whole MVP

- [X] T031 [P] Add document title, meta description, and canonical metadata wiring in index.html and src/lib/seo/metadata.ts
- [X] T032 Improve accessibility details for landmarks, focus states, and link labels in src/app/AppShell.tsx, src/components/layout/SiteHeader.tsx, and src/styles/globals.css
- [X] T033 Validate GitHub Pages static deployment behavior and asset paths in vite.config.ts and package.json
- [X] T034 Run quality verification for the MVP with npm run lint and npm run build
- [ ] T035 Run manual quickstart validation against specs/001-senior-portfolio-mvp/quickstart.md and record any follow-up fixes in specs/001-senior-portfolio-mvp/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phases 3-5)**: Depend on Foundational phase completion
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational phase completion
- **User Story 2 (P2)**: Can start after Foundational phase completion; benefits from US1 visual patterns but remains independently testable
- **User Story 3 (P3)**: Can start after Foundational phase completion; depends on shared content and layout primitives only

### Within Each User Story

- Shared content and layout foundations must exist before story components are implemented
- Section components should be completed before AppShell integration
- Content tuning should happen after the first rendering pass for that story
- Responsive and accessibility refinement should complete before story sign-off

### Parallel Opportunities

- `T003` and `T004` can run in parallel after Tailwind setup direction is clear
- `T006`, `T007`, and `T008` can run in parallel after `T005`
- `T010` and `T011` can run in parallel after foundational content typing is in place
- In **US1**, `T014` and `T015` can run in parallel
- In **US2**, `T019`, `T020`, and `T021` can run in parallel
- In **US3**, `T025`, `T026`, and `T027` can run in parallel
- In **Polish**, `T031` and `T032` can run in parallel before final verification

---

## Parallel Example: User Story 2

```bash
Task: "Implement the engineering impact section in src/components/sections/EngineeringImpactSection.tsx"
Task: "Implement the skills and technology section in src/components/sections/SkillsSection.tsx"
Task: "Implement the experience overview section in src/components/sections/ExperienceSection.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate recruiter-first positioning and primary CTAs
5. Stop for review if needed before broader section work

### Incremental Delivery

1. Finish Setup and Foundational work once
2. Deliver User Story 1 as the recruiter-facing MVP
3. Add User Story 2 for engineering credibility depth
4. Add User Story 3 for conversion and future-content positioning
5. Finish with accessibility, SEO, and deployment polish

### Parallel Team Strategy

1. One person handles setup and foundational tasks
2. After foundation is complete:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Rejoin for polish and deployment verification

---

## Notes

- [P] tasks target separate files and can be worked independently
- Story labels map directly to the user stories in spec.md for traceability
- Content files are part of the implementation surface because the MVP is content-first and source-truth-sensitive
- Keep claims aligned with approved source documents while implementing each section
