## Why

The portfolio now has a clear sketch-inspired hero direction, but many reusable UI components still read like generic dark dashboard elements rather than part of the same charcoal-and-ink system. The component layer needs a shared visual language so buttons, cards, navigation, badges, metrics, and content containers feel cohesive with the illustrated identity while staying accessible and recruiter-friendly.

## What Changes

- Define a sketch-inspired component styling system for reusable UI patterns across the portfolio.
- Refine primary and secondary buttons to use monochrome surfaces, restrained gold emphasis, and more tactile editorial border treatments.
- Refine cards, panels, metric blocks, badges, labels, dividers, and content containers so they feel more graphite, paper, ink, and charcoal aligned.
- Refine navigation styling so it feels integrated with the same system instead of resembling generic application chrome.
- Establish texture, border, spacing, and accent rules that scale consistently across hero, quick read, impact, skills, timeline, case studies, writing, and contact sections.
- Preserve content structure, accessibility, readability, performance, and implementation realism in the existing React, TypeScript, and TailwindCSS stack.

## Capabilities

### New Capabilities
- `sketch-component-visual-system`: Defines reusable component-level styling rules for buttons, cards, panels, badges, navigation, metric blocks, dividers, and section containers within the sketch-inspired portfolio identity.

### Modified Capabilities
- None.

## Impact

- Affected code will likely include `DESIGN.md`, `src/styles/globals.css`, shared UI primitives under `src/components/ui/`, layout elements under `src/components/layout/`, and representative section components under `src/components/sections/`.
- No backend, API, routing, or content-model changes are required.
- The change should be implemented through reusable tokens, utilities, and component styling rules rather than one-off per-section overrides.
