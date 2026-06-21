## Why

The hero portrait now establishes a strong charcoal, graphite, and hand-drawn concept-art mood, but the rest of the site still feels cleaner and more software-dashboard-like than the illustration it is meant to support. The global visual system needs refinement so the background, surfaces, and cards feel like they belong to the same monochrome editorial world as the portrait without harming readability or performance.

## What Changes

- Refine the global page background into a darker graphite or charcoal atmosphere with subtle sketch-inspired texture or layered treatment.
- Tighten the shared color system around black, white, gray, and restrained gold so the entire site feels more cohesive with the illustrated hero.
- Redesign section surfaces, cards, panels, and containers to feel less sterile and more integrated with the sketch-inspired visual language.
- Unify the hero container and surrounding page background so the portrait and text feel like part of the same visual system.
- Define reusable styling rules that scale consistently across summary, impact, skills, timeline, case studies, writing, and contact sections.
- Preserve accessibility, strong contrast, implementation realism, and a professional recruiter-friendly presentation.

## Capabilities

### New Capabilities
- `global-sketch-visual-system`: Defines the sketch-inspired global background, palette, surface, texture, and section-styling rules that align the full portfolio with the hero illustration.

### Modified Capabilities
- None.

## Impact

- Affected code will likely include `DESIGN.md`, `src/styles/globals.css`, shared layout and UI primitives, and representative section components under `src/components/sections/`.
- No backend, API, routing, or content-structure changes are required.
- The change will influence the entire site-wide design system, so it should be implemented through reusable tokens and shared surface patterns rather than isolated per-section tweaks.
