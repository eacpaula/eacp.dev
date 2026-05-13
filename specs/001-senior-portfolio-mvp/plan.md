# Implementation Plan: Senior Full Stack Engineer Portfolio MVP

**Branch**: `001-senior-portfolio-mvp` | **Date**: 2026-05-12 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-senior-portfolio-mvp/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build the first public version of `eacp.dev` as a static-first portfolio homepage that positions Evandro as a senior full stack software engineer through concise recruiter-focused content, structured engineering impact narratives, and direct proof-point actions. The implementation will use the existing Vite + React + TypeScript app, add Tailwind CSS, and organize all public content into typed local source files so the site remains maintainable now and ready for future case study and blog expansion later.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 6.x, React 19.x

**Primary Dependencies**: Vite 8, React, React DOM, Tailwind CSS, Tailwind Vite integration, existing ESLint toolchain

**Storage**: Local typed content files in the repository; static assets under `public/`

**Testing**: `npm run lint`, `tsc -b` via build, manual responsive/accessibility verification

**Target Platform**: Modern desktop and mobile browsers; GitHub Pages-compatible static hosting

**Project Type**: Static single-page web application

**Performance Goals**: Fast first render for content-first browsing; primary positioning visible immediately; Lighthouse-friendly static delivery

**Constraints**: Static-first only, no backend services, no CMS, no dynamic blog integration in MVP, accessible semantic HTML, low dependency overhead, claims must remain source-backed

**Scale/Scope**: One public homepage with 8 primary sections, structured local content files, future-ready placeholders for case studies and blog content

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Feature must prioritize real engineering impact over flashy visuals
- Avoid generic junior-style portfolio patterns and fake projects
- Use clean, maintainable React and TypeScript
- Prefer simple architecture over unnecessary complexity
- Ensure accessibility, SEO, responsiveness, and performance as baseline
- Use minimalist, readable, professional UI
- Follow spec-driven development: specs, plans, tasks before implementation
- Keep specs small and focused; avoid overengineering
- Site remains static-first and low-cost/free to host
- Prepare for future blog integration without backend requirements

**Pre-Research Gate Result**: PASS

- The plan is content-first and recruiter-focused, centered on real engineering impact from approved source files.
- Architecture remains simple: one static React application, local content files, shallow section components, no backend.
- The requested stack matches the constitution’s technical direction.
- Future blog integration is prepared through content structure only, not implementation.

## Project Structure

### Documentation (this feature)

```text
specs/001-senior-portfolio-mvp/
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
│   ├── sections/
│   └── ui/
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

**Structure Decision**: Use the existing single-project Vite app and evolve it into a section-based static portfolio. Content is separated into typed local files under `src/content/`, section UI lives under `src/components/sections/`, and small support utilities remain under `src/lib/`. This keeps the architecture simple, supports GitHub Pages static deployment, and leaves room for future blog or case study adapters without forcing backend or CMS complexity into the MVP.

## Phase 0 Research

- [research.md](./research.md) captures the decisions for SPA scope, Tailwind integration, local typed content files, future blog adapter boundaries, accessible section architecture, and GitHub Pages compatibility.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the public content entities and local file mapping.
- [contracts/content-contract.md](./contracts/content-contract.md) defines the local structured content boundary.
- [contracts/ui-contract.md](./contracts/ui-contract.md) defines the homepage section composition and accessibility expectations.
- [quickstart.md](./quickstart.md) defines the recommended implementation order and verification steps.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- Design artifacts preserve static-first hosting and avoid backend infrastructure.
- The content contract enforces source-backed claims and supports recruiter-focused communication.
- The planned code structure uses clean, maintainable React and TypeScript with no unjustified complexity.
- Future blog support is explicitly deferred while the data model keeps a clean extension path.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
