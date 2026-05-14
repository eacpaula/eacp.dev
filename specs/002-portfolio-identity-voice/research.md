# Research: Portfolio Visual Identity and Content Voice Refinement

## Decision: Keep the existing TailwindCSS v4 + CSS custom property token layer as the visual foundation

**Rationale**: The current site already centralizes its visual system in
`src/styles/globals.css` through CSS custom properties consumed by Tailwind
utility classes. Refining those existing tokens is the most direct way to
change the brand mood, contrast profile, surfaces, and spacing behavior without
adding a parallel theme system or changing the build pipeline.

**Alternatives considered**:
- Add a new design token library: rejected because it would increase complexity
  without solving a problem the current token layer cannot handle.
- Introduce a separate Tailwind config-driven theme rewrite: rejected because
  the project already uses Tailwind v4 plus CSS variables effectively, and a
  second source of truth would create unnecessary drift.

## Decision: Shift the visual identity from warm editorial styling to a cooler, higher-contrast technical palette using the existing configured tokens

**Rationale**: The current `--page-bg`, `--surface`, `--accent`, and font
 choices create the beige editorial feeling the spec wants to remove. The
 refinement should retune those same variables toward a more technical, modern,
 confident brand while preserving the existing static rendering model and
 section/component interfaces.

**Alternatives considered**:
- Keep the current palette and only adjust copy: rejected because the visual
  similarity concern would remain unresolved.
- Introduce highly saturated or effect-heavy branding: rejected because the
  constitution still requires a minimalist, readable, professional UI.

## Decision: Strengthen typography hierarchy through existing font variables and weight/scale adjustments rather than adding external font dependencies

**Rationale**: The site needs a stronger, more product-engineering visual voice,
 but adding remote font dependencies would increase page weight and complexity.
 The current font variable approach allows the implementation to replace or
 rebalance display and body stacks, heading sizes, tracking, and rhythm while
 staying inside the existing setup.

**Alternatives considered**:
- Add hosted webfont packages: rejected because they are not required to meet
  the feature goals and would introduce extra runtime dependency and loading
  overhead.
- Preserve the current serif-forward hierarchy: rejected because it reinforces
  the editorial feeling the feature is meant to move away from.

## Decision: Preserve the current section-based React architecture and refine presentation through shared primitives plus targeted section updates

**Rationale**: The current app already cleanly separates layout, section
 components, shared UI primitives, and content files. Refinement work can stay
 incremental by adjusting shared primitives such as `SectionHeading` and
 `CtaLink`, then updating the specific section components to improve card
 styling, spacing, and layout rhythm.

**Alternatives considered**:
- Rebuild the homepage from scratch: rejected because it is explicitly out of
  scope and would add avoidable delivery risk.
- Hard-code one-off section styling without shared primitive updates: rejected
  because it would make the new identity inconsistent and harder to maintain.

## Decision: Treat source copy rewrites as content-layer changes first and component text changes second

**Rationale**: Most personal voice, phrasing, and credibility issues originate
 in `src/content/` records and a smaller set of static descriptive strings in
 section components. Updating content files first keeps source-backed claims
 centralized and makes tone review easier, while component-level rewrites can be
 limited to structural UI text such as headings and helper descriptions.

**Alternatives considered**:
- Rewrite all visible text inside JSX only: rejected because it weakens content
  ownership and makes future copy review harder.
- Leave current section helper text unchanged: rejected because some of the
  current framing still contributes to the external-narrator feel.

## Decision: Use restrained background, surface, and card refinements to create section rhythm instead of animation-heavy differentiation

**Rationale**: The feature calls for stronger section rhythm, more polished
 surfaces, and clearer scan patterns. Background layering, borders, contrast,
 card density, and spacing changes can achieve that without violating the
 constitution's low-noise and low-motion requirements.

**Alternatives considered**:
- Heavy animation and 3D presentation: rejected because it conflicts with the
  minimalist and accessibility constraints.
- Flat identical surfaces everywhere: rejected because it preserves the current
  monotony and does not improve section distinction enough.

## Decision: Keep validation lightweight and aligned with the current toolchain

**Rationale**: `npm run lint`, `npm run build`, and `npm run check` already
 cover the existing toolchain. The main additional quality work for this feature
 is manual review of contrast, responsive behavior, keyboard/focus states, and
 source-backed copy accuracy across the refined sections.

**Alternatives considered**:
- Add automated visual regression tooling now: rejected because it would be a
  larger process change than this refinement needs.
- Rely on visual review only: rejected because the feature still needs existing
  static build validation and linting checks to protect the codebase.

## Decision: Preserve GitHub Pages compatibility and static deployment behavior throughout the refinement

**Rationale**: The current deployment model is part of the constitution and the
 spec. The refinement should avoid changes that assume server logic, runtime
 fetching, or environment-specific rendering behavior.

**Alternatives considered**:
- Introduce runtime content fetching for future placeholders: rejected because
  dynamic integration is out of scope.
- Change the deployment strategy while refining design: rejected because it does
  not advance the feature goals and adds unnecessary risk.
