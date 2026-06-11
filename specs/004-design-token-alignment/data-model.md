# Data Model: Design Token Alignment with DESIGN.md

## Design Source of Truth

- **Description**: The approved visual specification in `DESIGN.md` that defines
  the intended brand language for the portfolio.
- **Fields**:
  - `brandDirection`: high-seniority, modern corporate, developer-tool identity
  - `colorSystem`: dark-mode-first palette, accent roles, status colors, tonal
    surfaces, outline behavior
  - `typographySystem`: display, body, and mono roles with defined hierarchy
  - `spacingSystem`: container width, gutters, section rhythm, spacing scale
  - `shapeSystem`: default corner radii by component category
  - `elevationSystem`: tonal layers and restrained border-first separation
- **Relationships**:
  - Drives the `Semantic Design Token Set`
  - Resolves `Alignment Gap` decisions
  - Constrains `Representative UI Component` styling

## Semantic Design Token Set

- **Description**: The shared visual role definitions used by the application to
  implement the approved design direction consistently.
- **Fields**:
  - `backgroundRoles`: page, surface base, elevated surface, interactive surface
  - `textRoles`: strong, default, muted, inverse, technical label
  - `borderRoles`: default border, stronger border, interactive border
  - `actionRoles`: primary action, secondary action, accent, focus/highlight
  - `statusRoles`: live/current, archived/neutral, error if needed
  - `shapeRoles`: control radius, card radius, tag radius
  - `spacingRoles`: container max width, gutter, stack spacing, section gap
  - `elevationRoles`: border-first separation and limited shadow usage
- **Validation Rules**:
  - Must map back to the visual intent in `DESIGN.md`
  - Must use semantic names based on role rather than a single component
  - Must be reusable across multiple sections without creating local variants
  - Must support readable contrast and accessible focus treatment

## Alignment Gap

- **Description**: A mismatch between the current shared styling implementation
  and the approved visual system.
- **Fields**:
  - `category`: color, typography, spacing, shape, elevation, component pattern
  - `currentState`: what the app currently expresses
  - `targetState`: what `DESIGN.md` requires
  - `migrationPriority`: foundational, representative, follow-up
  - `affectedComponents`: shared components or sections influenced by the gap
- **State Transitions**:
  - `identified` → `mapped` → `implemented` → `validated`

## Representative UI Component

- **Description**: An existing component chosen to prove that the aligned token
  system works in practical UI usage.
- **Fields**:
  - `componentType`: layout shell, navigation, CTA, section heading, card, chip,
    contact block
  - `tokenCoverage`: which semantic roles the component consumes
  - `currentDrift`: key ways the component differs from the approved system
  - `validationGoal`: what the component must prove after migration
- **Relationships**:
  - Consumes `Semantic Design Token Set`
  - Helps close one or more `Alignment Gap` records

## Validation Review

- **Description**: The manual quality check used to confirm the aligned tokens
  work in the running portfolio.
- **Fields**:
  - `viewportSet`: desktop and mobile review
  - `checks`: readability, contrast, focus visibility, token consistency,
    shared surface behavior, action treatment consistency
  - `buildStatus`: successful or failed
  - `notes`: any remaining follow-up items outside current scope
