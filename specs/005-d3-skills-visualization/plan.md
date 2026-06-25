# Implementation Plan: Interactive Skills Visualization

**Branch**: `005-d3-skills-visualization` | **Date**: 2026-06-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/005-d3-skills-visualization/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Replace the current static Skills and Experience Timeline sections with one
feature-scoped interactive Skills explorer that uses a React-owned SVG
rendering approach, D3 calculations for chart geometry and scales, curated
TypeScript data derived from `docs/profile/evandro-skills.csv` plus verified
repository profile content, and the existing monochrome-plus-gold design system
to preserve recruiter-facing clarity while making skills and experience easier
to explore.

## Technical Context

**Language/Version**: TypeScript `~6.0.2`, React `19.2.6`

**Primary Dependencies**: Existing Vite 8, Tailwind CSS 4, React DOM, Motion
11; planned targeted D3 packages for shape and scale calculations

**Storage**: Local source files only; feature data will live in typed
TypeScript modules derived from `docs/profile/evandro-skills.csv` and verified
profile documents already in the repository

**Testing**: `npm run lint`, `npm run build`, `npm run test`, manual desktop
and mobile interaction review, keyboard-only review, reduced-motion review,
content accuracy review against approved profile sources

**Target Platform**: Modern desktop and mobile browsers on static hosting

**Project Type**: Static single-page React web application

**Performance Goals**: Preserve fast static delivery, avoid runtime CSV parsing
or heavy DOM mutation, keep chart interaction responsive across desktop and
tablet layouts, and keep mobile fallbacks lightweight and readable

**Constraints**: Must follow `DESIGN.md`; must not invent skills or experience
claims; must replace both current sections with one `#skills` section; must not
add backend infrastructure, global state, canvas/WebGL, or decorative chart
complexity; must provide accessible fallback content and reduced-motion support

**Scale/Scope**: One feature-scoped skills module with curated data, two chart
components, one filtered experience panel, one accessible fallback structure,
and app-shell/navigation updates limited to replacing the existing Skills and
Timeline flow

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

- The feature replaces two content sections with one data-backed interaction
  model that better exposes real professional breadth and depth.
- The approach stays inside the existing React, Tailwind, and static-hosted
  architecture and avoids canvas, WebGL, or a chart framework overhaul.
- Accessibility, reduced motion, content accuracy, and recruiter readability
  are explicit constraints rather than follow-up concerns.
- `DESIGN.md` remains the visual authority, so the chart treatment will extend
  the current graphite, sketch, and restrained-gold system instead of
  introducing a dashboard palette.

## Project Structure

### Documentation (this feature)

```text
specs/005-d3-skills-visualization/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── skills-explorer-data-contract.md
│   └── skills-explorer-interaction-contract.md
└── tasks.md
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
│   └── ui/
│       ├── CtaLink.tsx
│       ├── SectionHeading.tsx
│       └── TiltCard.tsx
├── content/
│   └── site-metadata.ts
├── features/
│   └── skills/
│       ├── SkillsExplorerSection.tsx
│       ├── components/
│       │   ├── HorizontalSkillBarChart.tsx
│       │   ├── RadialSkillGroupChart.tsx
│       │   ├── SkillUsagePanel.tsx
│       │   └── SkillsAccessibleFallback.tsx
│       ├── data/
│       │   ├── skillExplorer.data.ts
│       │   └── skillExplorer.types.ts
│       ├── hooks/
│       │   └── useSkillSelection.ts
│       └── utils/
│           └── chartUtils.ts
├── styles/
│   └── globals.css
└── types/
    └── content.ts

docs/
└── profile/
    ├── evandro-skills.csv
    ├── evandro-source-of-true.md
    └── evandro-resume-summary.md
```

**Structure Decision**: Keep the existing single-project frontend architecture,
but add one feature-scoped module under `src/features/skills/` because the new
section has enough local data, chart, state, and accessibility complexity to
justify co-location. Reuse `AppShell`, shared UI primitives, global styling
tokens, and `site-metadata.ts` instead of spreading chart logic across the
current generic `src/content/skills.ts` and `src/content/experience.ts` files.

## Phase 0 Research

- [research.md](./research.md) captures the decisions to use a curated typed
  data file instead of runtime CSV loading, normalize CSV source aliases into
  canonical experience entries, use D3 for calculations while React owns SVG
  rendering, reuse Motion for panel transitions, and simplify interaction on
  mobile instead of forcing the radial chart everywhere.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the `SkillGroup`, `Skill`,
  `CompanyUsage`, `SkillSelectionState`, and supporting canonical source
  entities needed to keep chart and fallback content grounded in approved data.
- [contracts/skills-explorer-data-contract.md](./contracts/skills-explorer-data-contract.md)
  defines the approved data inputs, alias normalization, and missing-data rules
  for the runtime dataset.
- [contracts/skills-explorer-interaction-contract.md](./contracts/skills-explorer-interaction-contract.md)
  defines required chart states, selection behavior, accessibility guarantees,
  responsive simplification, and replacement outcomes.
- [quickstart.md](./quickstart.md) defines the recommended file-by-file
  implementation order and validation flow for the feature.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design remains practical and data-led, replacing static lists with a
  clearer recruiter-facing interaction without drifting into decorative visual
  experimentation.
- React retains ownership of rendering and state, which keeps the feature
  maintainable for the existing codebase and avoids brittle imperative D3 DOM
  management.
- The data plan explicitly limits runtime content to approved repository
  sources, preventing fabricated claims while still supporting filtered company
  and project context.
- Mobile, keyboard, and reduced-motion behavior are planned as first-class
  interaction modes, which keeps baseline quality aligned with the
  constitution.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
