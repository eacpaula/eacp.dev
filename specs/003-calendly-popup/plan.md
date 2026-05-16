# Implementation Plan: Calendly Popup Scheduling Integration

**Branch**: `001-senior-portfolio-mvp` | **Date**: 2026-05-14 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/003-calendly-popup/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Add a professional `Schedule a call` action to the existing Contact section
that opens Evandro's Calendly booking page in a popup-style scheduling
experience. The implementation will stay inside the current Vite + React +
TypeScript + TailwindCSS app, centralize the Calendly URL in one content/config
location, lazy-load Calendly's standard popup widget resources only when
needed, and preserve static-first GitHub Pages-compatible delivery with
graceful fallback behavior if Calendly is unavailable.

## Technical Context

**Language/Version**: TypeScript 6.x, React 19.x

**Primary Dependencies**: Vite 8, React, React DOM, Tailwind CSS 4, Tailwind
Vite integration, existing ESLint toolchain, Calendly hosted widget script/CSS

**Storage**: Local typed content/config files under `src/content/` with a small
client-side integration helper under `src/lib/`

**Testing**: `npm run lint`, `npm run build`, optional `npm run check`, manual
desktop/mobile scheduling trigger review, manual keyboard accessibility review,
manual degraded-state review with Calendly unavailable

**Target Platform**: Modern desktop and mobile browsers; GitHub
Pages-compatible static hosting

**Project Type**: Static single-page web application with third-party client
widget integration

**Performance Goals**: Preserve fast initial page load by avoiding default
inline calendar rendering and deferring Calendly asset loading until user
interaction where practical

**Constraints**: Must use Calendly's standard popup widget behavior, must not
add a heavy modal library or backend infrastructure, must centralize the
Calendly URL, must load external widget resources safely and only once, must
keep Contact options visible and accessible, must preserve static-first GitHub
Pages compatibility

**Scale/Scope**: Refine the existing Contact section, typed content model,
small integration helper layer, and contact UI flow without changing the rest
of the site architecture

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

- The feature preserves the existing single-page React architecture and Contact
  section structure.
- Calendly popup integration avoids an always-visible inline calendar and keeps
  the interface minimalist.
- The plan centralizes configuration and isolates third-party script loading in
  a small helper rather than introducing a new dependency or framework.
- The feature remains static-first, low-cost, and compatible with GitHub Pages.

## Project Structure

### Documentation (this feature)

```text
specs/003-calendly-popup/
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
│   │   └── ContactSection.tsx
│   └── ui/
├── content/
│   ├── contact.ts
│   └── site-metadata.ts
├── lib/
│   ├── content/
│   │   └── index.ts
│   ├── integrations/
│   │   └── calendly.ts
│   └── seo/
├── styles/
│   └── globals.css
├── types/
│   └── content.ts
├── App.tsx
└── main.tsx

public/
└── resume/
    └── resume.pdf
```

**Structure Decision**: Keep the existing single-project frontend and implement
the feature through four small changes: add centralized scheduling config in
`src/content/contact.ts`, extend content types in `src/types/content.ts`,
introduce a single integration helper in `src/lib/integrations/calendly.ts`,
and update `src/components/sections/ContactSection.tsx` to render and trigger
the popup CTA. This keeps the feature incremental and avoids scattering
third-party script logic across the app.

## Phase 0 Research

- [research.md](./research.md) captures the decisions for using Calendly's
  popup text/custom button behavior, centralizing the scheduling URL, loading
  the external widget resources once on demand, graceful degraded behavior, and
  static-safe validation.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the centralized scheduling
  configuration, popup session state, and fallback behavior boundaries.
- [contracts/contact-scheduling-contract.md](./contracts/contact-scheduling-contract.md)
  defines the Contact section content and interaction contract for the
  scheduling CTA.
- [contracts/calendly-integration-contract.md](./contracts/calendly-integration-contract.md)
  defines the one-time script loading and popup trigger contract for the
  Calendly helper.
- [quickstart.md](./quickstart.md) defines the recommended implementation order
  and verification steps.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design keeps the Contact section clean and avoids an inline calendar or
  floating third-party widget that would dominate the UI.
- The Calendly URL remains centralized in the content/config layer and the
  integration logic is isolated in one helper, preserving codebase simplicity.
- The implementation remains static-first, GitHub Pages-compatible, and avoids
  new major dependencies.
- Accessibility, mobile behavior, graceful failure, and build validation are
  explicit design checkpoints.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
