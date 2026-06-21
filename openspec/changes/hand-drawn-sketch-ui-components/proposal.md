## Why

The portfolio already has a strong monochrome sketch atmosphere and illustrated hero portrait, but the reusable UI components still feel too clean and standard for that world. The component system needs a more explicit hand-drawn interface language so buttons, cards, labels, navigation, metric boxes, and section containers feel intentionally sketched without sacrificing clarity or professionalism.

## What Changes

- Define a hand-drawn sketch UI component system for the portfolio’s reusable interface patterns.
- Redesign buttons, cards, panels, labels, dividers, navigation items, tabs, and metric blocks so they feel inked, outlined, and illustrated rather than sterile or dashboard-like.
- Establish maintainable CSS- and Tailwind-friendly techniques for sketch borders, irregular contours, layered outlines, and restrained doodled emphasis.
- Apply the component language across representative portfolio sections while keeping the layout structure, monochrome palette, hero portrait, and restrained gold accents intact.
- Preserve accessibility, responsiveness, recruiter-friendly readability, and performance while increasing visual distinctiveness.

## Capabilities

### New Capabilities
- `hand-drawn-sketch-component-system`: Defines the portfolio’s reusable hand-drawn component styling rules for buttons, cards, panels, navigation, labels, dividers, metric boxes, and representative content containers.

### Modified Capabilities
- None.

## Impact

- Affected code will likely include `DESIGN.md`, `src/styles/globals.css`, shared UI primitives under `src/components/ui/`, layout components under `src/components/layout/`, and representative section components under `src/components/sections/`.
- No backend, routing, API, or content-model changes are required.
- The work should be implemented through shared styling primitives and reusable component patterns rather than image-heavy assets or one-off section overrides.
