# Research: Design Token Alignment with DESIGN.md

## Decision 1: Treat `DESIGN.md` as the canonical visual authority

- **Decision**: Use `DESIGN.md` as the governing source for palette behavior,
  typography roles, spacing rhythm, shape language, elevation, and component
  treatment.
- **Rationale**: The constitution now explicitly requires `DESIGN.md` to be the
  design-system source of truth, and the current codebase still reflects an
  older blue-glass system that does not match the approved dark technical brand.
- **Alternatives considered**:
  - Keep the current shared styles and only make selective visual tweaks:
    rejected because it would preserve drift and continue one-off decisions.
  - Let components interpret `DESIGN.md` independently: rejected because it
    would increase inconsistency across sections.

## Decision 2: Keep TailwindCSS v4 as the implementation layer

- **Decision**: Retain the existing TailwindCSS v4 setup and express the aligned
  design system through the current styling foundation rather than introducing a
  new UI framework or separate styling stack.
- **Rationale**: The project already uses Tailwind through Vite, the
  constitution requires simple architecture, and the feature scope is alignment
  rather than infrastructure replacement.
- **Alternatives considered**:
  - Introduce a component library or full design-system framework: rejected
    because it adds complexity unrelated to the goal.
  - Replace Tailwind with custom CSS-only styling: rejected because it would
    discard the current implementation approach instead of aligning it.

## Decision 3: Use semantic tokens instead of component-specific visual values

- **Decision**: Define token roles around visual purpose such as page
  background, surfaces, border strength, primary text, muted text, primary
  action, accent, highlight, and status emphasis.
- **Rationale**: `DESIGN.md` describes a coherent brand system, while the
  current implementation relies on a mix of direct colors, gradient values,
  varying radii, and component-level shadow definitions. Semantic roles make the
  design easier to apply consistently in new and existing UI.
- **Alternatives considered**:
  - Preserve raw color names only: rejected because it does not communicate
    usage intent well enough for future contributors.
  - Align only color tokens and ignore spacing, shape, and elevation: rejected
    because the design drift also appears in radii, shadows, and container
    treatments.

## Decision 4: Standardize around the approved dark-mode-first brand

- **Decision**: Replace the current mixed light-first and dark-override palette
  behavior with a dark-mode-first foundation that reflects the approved
  developer-tool aesthetic.
- **Rationale**: `DESIGN.md` calls for a dark technical interface with white
  text, electric blue accent usage, emerald status highlights, tonal surfaces,
  subtle borders, and minimal shadows. The current root tokens still default to
  a light gradient background and translucent light surfaces, which conflicts
  with that direction.
- **Alternatives considered**:
  - Preserve the current light default and only improve dark mode: rejected
    because it keeps the core identity mismatch in place.
  - Fully remove all background atmosphere: rejected because `DESIGN.md`
    supports a deliberate, restrained sense of depth through tonal layering.

## Decision 5: Validate the system through representative components only

- **Decision**: Migrate a focused set of shared and section-level components
  that expose the main token roles instead of redesigning every section.
- **Rationale**: The spec explicitly limits scope to token alignment and
  validation. Updating representative components proves the system works in
  practice without turning the feature into a full visual rewrite.
- **Alternatives considered**:
  - Update every section in one pass: rejected because it expands scope beyond
    the planning target and makes review harder.
  - Change only `globals.css` without touching components: rejected because it
    would not validate whether the semantic tokens are practical for real UI.

## Decision 6: Reduce arbitrary values incrementally

- **Decision**: Remove arbitrary radii, shadows, and ad hoc visual values where
  the approved token system can express the same intent, but avoid broad
  refactors unrelated to the feature.
- **Rationale**: The current components contain repeated arbitrary values such as
  large custom radii, one-off shadow declarations, and direct token references
  that do not align to the approved system. Incremental normalization improves
  consistency while keeping the change set reviewable.
- **Alternatives considered**:
  - Leave arbitrary values in place if the colors look acceptable: rejected
    because the feature goal includes reducing ad hoc visual values.
  - Remove all arbitrary values across the app immediately: rejected because
    some values may remain acceptable until later refinement phases.
