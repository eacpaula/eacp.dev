# Implementation Plan: Portfolio Visual Identity and Content Voice Refinement

**Branch**: `001-senior-portfolio-mvp` | **Date**: 2026-05-14 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-portfolio-identity-voice/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Refine the existing `eacp.dev` homepage so it presents a more distinct,
technical, senior-level brand through targeted theme-token updates, stronger
typography and section rhythm, more intentional card and layout treatment, and
copy rewrites grounded in the current source content files. The implementation
will stay inside the existing Vite + React + TypeScript + TailwindCSS setup,
reuse the current section-based architecture, preserve GitHub Pages-compatible
static deployment, and avoid new major dependencies.

## Technical Context

**Language/Version**: TypeScript 6.x, React 19.x

**Primary Dependencies**: Vite 8, React, React DOM, Tailwind CSS 4, Tailwind
Vite integration, existing ESLint toolchain

**Storage**: Local typed content files under `src/content/`; CSS custom
properties and Tailwind utility classes in `src/styles/globals.css` and section
components

**Testing**: `npm run lint`, `npm run build`, optional `npm run check`, manual
responsive and accessibility review, manual copy/source verification

**Target Platform**: Modern desktop and mobile browsers; GitHub
Pages-compatible static hosting

**Project Type**: Static single-page web application

**Performance Goals**: Preserve fast first render, clear first-screen
positioning within 10 seconds, and Lighthouse-friendly static delivery without
heavier runtime styling or animation overhead

**Constraints**: Must use the existing TailwindCSS theme/token layer as the
source of truth, must not add major dependencies unless absolutely necessary,
must not rebuild the app structure, must preserve static-first deployment and
GitHub Pages compatibility, must keep copy source-backed and professionally
voiced

**Scale/Scope**: Refine the existing 8 homepage sections, shared layout
primitives, theme variables, and local content copy without introducing new
platform features or backend integrations

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Feature must prioritize real engineering impact over flashy visuals
- Avoid generic junior-style portfolio patterns and fake projects
- Use clean, maintainable React and TypeScript
- Prefer simple architecture over unnecessary complexity
- Ensure accessibility, SEO, responsiveness, and performance as baseline
- Use minimalist, readable, professional UI
- Maintain a distinct visual identity and avoid close imitation of any single reference portfolio
- Use the existing TailwindCSS theme configuration as the source of truth for colors, spacing, typography, and design tokens
- Use a direct professional voice and avoid third-person biography-style narration
- Follow spec-driven development: specs, plans, tasks before implementation
- Keep specs small and focused; avoid overengineering
- Site remains static-first and low-cost/free to host
- Prepare for future blog integration without backend requirements

**Pre-Research Gate Result**: PASS

- The plan keeps the existing single-page React architecture and avoids a
  rewrite.
- Visual identity changes are anchored to the current token layer in
  `src/styles/globals.css`, satisfying the Tailwind source-of-truth rule.
- Copy refinement is limited to existing content surfaces and remains constrained
  by approved source files.
- No backend, CMS, dynamic blog, or major dependency additions are introduced.

## Project Structure

### Documentation (this feature)

```text
specs/002-portfolio-identity-voice/
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
│   │   ├── BlogPreviewSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EngineeringImpactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProfessionalSummarySection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       ├── CtaLink.tsx
│       └── SectionHeading.tsx
├── content/
│   ├── achievements.ts
│   ├── blog-topics.ts
│   ├── case-studies.ts
│   ├── contact.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── site-metadata.ts
│   └── skills.ts
├── lib/
│   ├── content/
│   └── seo/
├── styles/
│   └── globals.css
├── types/
│   └── content.ts
├── App.tsx
└── main.tsx

public/
├── favicon.svg
├── icons.svg
└── resume/
    └── resume.pdf
```

**Structure Decision**: Keep the existing single-project Vite application and
apply the refinement through four coordinated layers: theme tokens in
`src/styles/globals.css`, shared UI primitives in `src/components/ui/`,
section-level layout and presentation in `src/components/sections/`, and copy
changes in `src/content/`. This keeps the work incremental, preserves static
hosting compatibility, and avoids introducing a second styling or content
system.

## Phase 0 Research

- [research.md](./research.md) captures the decisions for token-driven theme
  refinement, typography hierarchy, background and section rhythm, card
  treatment, copy rewrite ownership, accessibility validation, and build-safe
  incremental delivery.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the refinement entities, ownership
  boundaries, and validation rules for visual and content changes.
- [contracts/content-contract.md](./contracts/content-contract.md) defines
  content ownership, copy rewrite boundaries, and source-grounding rules.
- [contracts/ui-contract.md](./contracts/ui-contract.md) defines section-level
  visual responsibilities, hierarchy, and interaction expectations.
- [quickstart.md](./quickstart.md) defines the recommended implementation order
  and verification steps.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design keeps the current Tailwind and CSS-variable token system as the
  primary visual source of truth.
- Planned updates strengthen distinct identity and direct professional voice
  without copying a reference layout or adding visual noise.
- The refinement remains incremental, static-first, and compatible with the
  current build and deployment model.
- Accessibility, responsiveness, and source-backed copy validation are explicit
  acceptance activities in the design artifacts.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
