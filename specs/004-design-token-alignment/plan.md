# Implementation Plan: Design Token Alignment with DESIGN.md

**Branch**: `001-senior-portfolio-mvp` | **Date**: 2026-05-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-design-token-alignment/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Align the portfolio's shared visual foundation with `DESIGN.md` by replacing the
current mixed light/dark token set with a semantic dark-mode-first system,
mapping those tokens into the TailwindCSS v4 styling layer already used by the
app, and updating a small set of representative shared components to validate
the new system without turning the effort into a full-site redesign.

## Technical Context

**Language/Version**: TypeScript 6.x, React 19.x

**Primary Dependencies**: Vite 8, Tailwind CSS 4 via `@tailwindcss/vite`,
React, React DOM, existing ESLint toolchain

**Storage**: Local source files only; shared styling lives in `src/styles/` and
component classes under `src/components/`

**Testing**: `npm run lint`, `npm run build`, manual desktop/mobile visual
review, manual contrast/focus-state review, manual regression review for shared
sections

**Target Platform**: Modern desktop and mobile browsers; static hosting via
GitHub Pages-compatible deployment

**Project Type**: Static single-page React web application

**Performance Goals**: Preserve fast static delivery, avoid runtime styling
complexity, and keep no measurable regression in initial load behavior while
changing shared tokens

**Constraints**: Must follow `DESIGN.md` as source of truth, must keep Tailwind,
must not introduce a new UI framework, must remain incremental, must reduce
arbitrary values where practical, must keep accessibility and responsiveness
intact, must not expand into a full homepage redesign

**Scale/Scope**: Shared global token layer plus representative shared and
section-level components across the existing homepage; no new pages or backend
work

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

- The feature directly implements the constitution rule that `DESIGN.md` is the
  design-system source of truth.
- Scope is intentionally narrow: token alignment plus representative component
  validation, not a broad redesign.
- The implementation stays inside the existing React + TailwindCSS static app
  and avoids new framework or infrastructure complexity.
- Accessibility, responsiveness, maintainability, and visual distinctiveness are
  explicit planning constraints.

## Project Structure

### Documentation (this feature)

```text
specs/004-design-token-alignment/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   └── AppShell.tsx
├── components/
│   ├── layout/
│   │   ├── SiteFooter.tsx
│   │   └── SiteHeader.tsx
│   ├── sections/
│   │   ├── ContactSection.tsx
│   │   ├── EngineeringImpactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProfessionalSummarySection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       ├── CtaLink.tsx
│       └── SectionHeading.tsx
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

**Structure Decision**: Keep the existing single-project frontend architecture.
Implement the feature through one shared styling foundation update in
`src/styles/globals.css`, then migrate representative layout, UI, and section
components that currently expose the greatest token drift. This keeps the work
incremental, static-safe, and easy to review.

## Phase 0 Research

- [research.md](./research.md) captures the decisions to treat `DESIGN.md` as
  the canonical visual authority, use semantic tokens instead of one-off values,
  keep TailwindCSS v4 in place without adding a standalone UI system, and
  validate the migration through a small set of representative components.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the design-source, semantic token,
  alignment-gap, and representative-component entities that drive the work.
- [contracts/token-alignment-contract.md](./contracts/token-alignment-contract.md)
  defines the shared token contract between `DESIGN.md`, the global styling
  layer, and component consumers.
- [contracts/representative-components-contract.md](./contracts/representative-components-contract.md)
  defines which UI patterns must adopt the aligned tokens to validate the
  system.
- [quickstart.md](./quickstart.md) defines the recommended implementation order
  and verification flow.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design keeps `DESIGN.md` as the single visual authority and maps it into
  the existing TailwindCSS-based implementation layer rather than inventing a
  parallel system.
- The plan reduces arbitrary values through semantic roles and representative
  migration, which improves maintainability without overengineering.
- Static-first deployment remains unchanged because the work is limited to local
  styling and component updates.
- The validation plan explicitly checks accessibility, responsiveness, and
  distinct technical brand expression after token alignment.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
