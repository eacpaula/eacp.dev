## Why

The portfolio’s component outlines now feel more hand-drawn, but the interior fills and shading still read too digital and even for the sketch world established by the hero portrait. The component system needs a hand-shaded fill language so buttons, cards, labels, metric boxes, and section containers feel colored or shaded by hand without losing readability or professionalism.

## What Changes

- Define a scribble, crayon, charcoal, or pencil-shaded fill system for reusable UI components across the portfolio.
- Refine component backgrounds and fills so they feel hand-shaded, partially irregular, and visually alive rather than flat or digitally uniform.
- Keep drawn borders and outlines, but make the interior fills support the same illustrated language.
- Introduce subtle optional animation for scribble direction or shading drift, with reduced-motion-safe fallbacks.
- Apply the fill behavior across buttons, cards, panels, metric blocks, labels, navigation containers, dividers, and representative section surfaces.
- Preserve the existing monochrome plus restrained gold palette, hero portrait, accessibility, performance, and recruiter-friendly scan quality.

## Capabilities

### New Capabilities
- `scribble-shaded-component-system`: Defines reusable hand-shaded fills, irregular coverage rules, subtle motion behavior, and component-surface styling patterns for the portfolio UI.

### Modified Capabilities
- None.

## Impact

- Affected code will likely include `DESIGN.md`, `src/styles/globals.css`, shared UI primitives under `src/components/ui/`, layout containers under `src/components/layout/`, and representative section components under `src/components/sections/`.
- No backend, routing, API, or content-model changes are required.
- The implementation should rely on maintainable CSS, SVG, masking, pseudo-elements, lightweight overlays, and reduced-motion-aware animation rather than heavy image assets.
