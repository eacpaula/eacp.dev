# Research: Interactive Skills Visualization

## Decision 1: Use a curated typed TypeScript data file derived from the CSV

- **Decision**: Keep `docs/profile/evandro-skills.csv` as the editorial source
  of truth, but build the runtime dataset as a curated TypeScript module under
  `src/features/skills/data/` instead of loading or parsing the CSV in the
  browser.
- **Rationale**: The current app already uses hand-curated content modules such
  as `src/content/skills.ts` and `src/content/experience.ts`. A curated data
  file matches that pattern, avoids runtime parsing complexity in a static
  portfolio, and makes it easier to normalize aliases, ordering, descriptions,
  and missing-data behavior in one reviewable location.
- **Alternatives considered**:
  - Load the CSV directly at runtime: rejected because it adds runtime
    transformation complexity for a small static site and still leaves alias
    normalization unresolved.
  - Create a build-time parser utility: rejected because it adds tooling and
    maintenance overhead before the manual mapping rules have stabilized.

## Decision 2: Normalize CSV source aliases into canonical experience entries

- **Decision**: Create canonical `CompanyUsage` entries keyed by verified public
  portfolio contexts, then map CSV `experience_sources` tokens such as
  `Acuity`, `MDFCommerce`, `OxDreams`, `Saga`, `FullSoft`, `FDD`, `AxysWeb`,
  and `Freelancer Projects (Hyper System; Masset; Atagon)` to those canonical
  entries with explicit alias rules.
- **Rationale**: The CSV mixes company names, client names, grouped freelancer
  buckets, and abbreviated labels, while the current public timeline groups some
  roles together under `Tailwind Business Ventures`. A canonical mapping layer
  is required to make skill filtering stable and understandable to users.
- **Alternatives considered**:
  - Reuse raw CSV labels directly in the UI: rejected because labels like
    `Acuity` and `MDFCommerce` would not align cleanly with current public
    experience cards.
  - Keep the current combined Tailwind entry as one record: rejected because the
    CSV clearly distinguishes Acuity and MDFCommerce and the new feature needs
    finer-grained filtering.

## Decision 3: Use only verified repository data and omit unsupported detail

- **Decision**: Derive skill usage contexts only from
  `docs/profile/evandro-skills.csv`, `docs/profile/evandro-source-of-true.md`,
  `docs/profile/evandro-resume-summary.md`, and currently published portfolio
  content, with explicit omission or safe fallback messaging when a skill lacks
  enough verified project detail.
- **Rationale**: The specification explicitly forbids invented companies,
  projects, durations, or descriptions. The public repository already contains
  enough verified content for major roles, but not every CSV token carries the
  same level of description.
- **Alternatives considered**:
  - Infer missing descriptions from skill combinations or likely job context:
    rejected because it would create unsupported claims.
  - Hide skills that lack perfect usage detail: rejected because the overview
    still needs a truthful breadth picture even when detailed usage is sparse.

## Decision 4: Use D3 for calculations and React for SVG rendering

- **Decision**: Implement the charts with D3 scale and shape calculations while
  React owns rendering, component lifecycle, selection state, and semantic
  structure.
- **Rationale**: The project is already a React application, and the requested
  charts are easiest to maintain when geometry and scales are delegated to D3
  but DOM ownership remains declarative. This matches the feature brief and
  avoids brittle imperative mutation.
- **Alternatives considered**:
  - Imperative D3 DOM rendering: rejected because it would complicate state,
    accessibility, and React reconciliation.
  - Replace D3 with a higher-level chart library: rejected because the feature
    specifically calls for D3 and the visual identity needs tighter control than
    generic chart packages usually provide.

## Decision 5: Add focused D3 packages and reuse existing Motion

- **Decision**: Add only the D3 modules needed for the charts, such as scale,
  shape, array, and formatting helpers, and reuse the already installed `motion`
  package for list and panel transitions instead of layering on another
  animation system.
- **Rationale**: `motion` is already in the project and used in `TiltCard`.
  Targeted D3 packages satisfy the chart requirement without pulling in a second
  chart abstraction or mixing complex D3 transitions with React-owned state.
- **Alternatives considered**:
  - Add the full D3 DOM interaction model and D3 transitions: rejected because
    it creates unnecessary overlap with React and Motion.
  - Add a dedicated animation library for the new section: rejected because the
    existing Motion dependency already covers the required panel-level motion.

## Decision 6: Keep local selection state with a default active group and a reset path

- **Decision**: Use feature-local `activeGroupId` and `activeSkillId` state,
  defaulting to the first ranked group and its first ranked skill on load, while
  still supporting an explicit overview reset that clears group and skill
  selection and returns the experience list to general highlights.
- **Rationale**: The user requested a default selected group and skill for the
  implementation plan, while the approved spec also requires an overview state
  and general-highlight behavior when no group is selected. Supporting both
  states keeps the interaction predictable without adding global state.
- **Alternatives considered**:
  - Always start with no selection: rejected because it does not follow the
    requested planning direction for default state behavior.
  - Persist selection globally or in URL state: rejected because the feature is
    page-local and does not justify broader state complexity.

## Decision 7: Use a mobile simplification instead of forcing radial interaction everywhere

- **Decision**: Keep the radial group chart as the primary desktop and tablet
  overview, but switch to a simplified grouped selector plus horizontal bars and
  usage cards on small screens when the radial layout would compromise
  readability or touch interaction.
- **Rationale**: The spec explicitly allows simplified mobile behavior and
  requires the section to stay useful without complex radial interaction.
- **Alternatives considered**:
  - Force the same radial chart on mobile: rejected because labels, tap targets,
    and drill-down clarity would degrade.
  - Replace the entire experience with a mobile-only unrelated design: rejected
    because it would fracture the feature’s interaction model and maintenance.

## Decision 8: Replace both current sections through one feature-scoped section and nav update

- **Decision**: Remove the current standalone `SkillsSection` and
  `ExperienceSection` usage from `AppShell`, replace them with one
  `SkillsExplorerSection`, keep `#skills` as the anchor target, and update the
  navigation to drop the separate `Timeline` entry.
- **Rationale**: The feature specification requires one unified section and
  explicitly says the old timeline should not remain as a separate informational
  block.
- **Alternatives considered**:
  - Keep the old timeline below the chart as extra context: rejected because it
    duplicates the informational role the new usage panel is meant to replace.
  - Preserve both `#skills` and `#experience` navigation targets: rejected
    because it would imply two independent sections still exist.
