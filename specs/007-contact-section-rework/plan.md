# Implementation Plan: Contact Section Rework with Center Portrait and Fullscreen Resume Viewer

**Branch**: `007-contact-section-rework` | **Date**: 2026-06-25 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/007-contact-section-rework/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Replace the current copy-heavy Contact section with a simpler, warmer
recruiter-facing layout centered on the existing portrait, visible direct
contact details, and concise follow-up actions. Keep Calendly as the existing
on-demand popup integration, move the Contact implementation into a small
feature-scoped module, and add a fullscreen in-site resume viewer with visible
download, print, and close actions plus graceful fallback when embedded PDF
rendering is limited.

## Technical Context

**Language/Version**: TypeScript `~6.0.2`, React `19.2.6`

**Primary Dependencies**: Existing Vite 8, Tailwind CSS 4, React DOM,
TanStack Router, existing Calendly popup helper under `src/lib/integrations/`

**Storage**: Local typed content/config under `src/content/`, portrait asset
under `src/assets/`, static resume PDF under `public/resume/`

**Testing**: `npm run lint`, `npm run test`, `npm run build`, manual desktop,
tablet, and mobile layout review, manual keyboard-only review, manual resume
viewer review, manual print/download review, manual degraded Calendly review

**Target Platform**: Modern desktop and mobile browsers on static hosting

**Project Type**: Static React web application with client-side overlay and
third-party popup interaction

**Performance Goals**: Preserve fast initial load by keeping resume viewer DOM
and PDF embedding lazy until user action; preserve on-demand Calendly loading;
avoid new heavy viewer or modal dependencies

**Constraints**: Must reuse `hero-editorial-portrait.png`; must follow
`DESIGN.md`; must not redesign unrelated sections or navigation; must keep the
solution static-first and GitHub Pages-compatible; must not add a modal library
or PDF viewer dependency unless the browser-native approach proves inadequate

**Scale/Scope**: One feature-scoped Contact module, one fullscreen resume
viewer component, limited content/type updates, minimal global style additions,
no backend changes, no route changes, no unrelated section redesign

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

- The feature improves the portfolio's conversion surface by making contact
  paths clearer and more human without broad visual churn.
- The plan reuses the existing design language, portrait asset, content layer,
  and Calendly helper instead of adding a new framework or document viewer.
- The proposed fullscreen resume viewer stays local to the client and preserves
  static-host compatibility.
- Accessibility, responsiveness, and keyboard behavior are explicit design
  requirements rather than follow-up polish.

## Project Structure

### Documentation (this feature)

```text
specs/007-contact-section-rework/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── contact-surface-contract.md
│   └── resume-viewer-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
│   └── AppShell.tsx
├── assets/
│   └── hero-editorial-portrait.png
├── content/
│   └── contact.ts
├── features/
│   └── contact/
│       ├── ContactSection.tsx
│       └── components/
│           ├── ContactActionButtons.tsx
│           ├── ContactDirectLinks.tsx
│           └── ResumeViewerModal.tsx
├── lib/
│   ├── content/
│   │   └── index.ts
│   └── integrations/
│       └── calendly.ts
├── styles/
│   └── globals.css
└── types/
    └── content.ts

public/
└── resume/
    └── resume.pdf
```

**Structure Decision**: Move the Contact implementation into
`src/features/contact/` because the feature now owns multiple presentation
subcomponents plus fullscreen viewer state. Keep public content in
`src/content/contact.ts`, keep the existing Calendly integration helper in
`src/lib/integrations/calendly.ts`, and reuse the shared design tokens and
button primitives from the current app. This balances feature cohesion against
the repo's existing content and integration layering.

## Phase 0 Research

- [research.md](./research.md) captures the decisions for simplifying Contact
  copy, reusing the portrait asset, adopting a desktop-left / center / right
  layout that collapses cleanly on smaller screens, keeping Calendly as a
  single button backed by the current popup helper, and using a browser-native
  embedded PDF inside a fullscreen dialog with fallback behavior.

## Phase 1 Design Outputs

- [data-model.md](./data-model.md) defines the direct-contact rails, action-row
  model, and resume viewer state needed to replace the current card-heavy
  Contact structure.
- [contracts/contact-surface-contract.md](./contracts/contact-surface-contract.md)
  defines the required content ownership, layout hierarchy, copy removal, and
  action behavior for the reworked Contact section.
- [contracts/resume-viewer-contract.md](./contracts/resume-viewer-contract.md)
  defines the fullscreen viewer behavior, toolbar actions, keyboard rules, and
  embedded-PDF fallback expectations.
- [quickstart.md](./quickstart.md) defines the recommended implementation
  sequence and validation flow for the feature.
- [AGENTS.md](/mnt/development/eacp.dev/AGENTS.md) is updated to point the
  repository context marker at this plan.

## Post-Design Constitution Check

**Post-Design Gate Result**: PASS

- The design keeps the Contact section intentional and minimal rather than
  expanding into a marketing-heavy or dashboard-like surface.
- The fullscreen resume viewer uses the browser's native PDF capabilities and a
  small local dialog component instead of introducing extra infrastructure.
- The feature remains visually aligned with `DESIGN.md` by reusing the
  graphite, paper, and restrained gold system already present across the site.
- Scope remains tightly bounded to Contact plus the contact-triggered resume
  viewing experience, which avoids unrelated hero, header, navigation, or blog
  churn.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
