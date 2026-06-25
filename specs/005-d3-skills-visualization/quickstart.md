# Quickstart: Interactive Skills Visualization

## Recommended Implementation Order

1. Audit `docs/profile/evandro-skills.csv`, `docs/profile/evandro-source-of-true.md`,
   `docs/profile/evandro-resume-summary.md`, `src/content/skills.ts`, and
   `src/content/experience.ts` to define the curated runtime dataset and alias
   mapping rules.
2. Add the feature-scoped types and data files under `src/features/skills/data/`
   so groups, skills, usage entries, and selection rules are centralized before
   chart work begins.
3. Install the targeted D3 packages needed for scale and shape calculations, and
   reuse existing Motion rather than adding a new animation dependency.
4. Build `useSkillSelection.ts` and the root `SkillsExplorerSection.tsx` so the
   section orchestration, default state behavior, reset behavior, and responsive
   branching are stable before chart polish.
5. Implement `RadialSkillGroupChart.tsx` using D3 calculations and React-owned
   SVG output, with explicit selection, hover, and keyboard behavior.
6. Implement `HorizontalSkillBarChart.tsx` for the active group, including
   default-skill selection, muted versus active states, and reduced-motion-safe
   updates.
7. Implement `SkillUsagePanel.tsx` and `SkillsAccessibleFallback.tsx` so the
   section preserves professional context and remains usable without chart
   reliance.
8. Update `AppShell.tsx` and `src/content/site-metadata.ts` to replace the old
   Skills and Timeline sections with the unified explorer and the updated
   navigation anchor strategy.
9. Remove or retire the now-obsolete static section wiring only after the new
   explorer fully covers the previous informational role.
10. Run validation and content review before any visual fine-tuning beyond the
   approved design system.

## File-by-File Plan

- `src/features/skills/data/skillExplorer.types.ts`
  Define `SkillGroup`, `Skill`, `CompanyUsage`, `SkillSelectionState`, and any
  alias-map helper types.
- `src/features/skills/data/skillExplorer.data.ts`
  Curate the runtime dataset derived from approved profile sources, including
  group ordering, skill weights, and verified usage entries.
- `src/features/skills/utils/chartUtils.ts`
  Hold D3-driven calculations for radial geometry, scales, bar lengths, label
  helpers, and any ordering utilities.
- `src/features/skills/hooks/useSkillSelection.ts`
  Encapsulate default selection, group changes, skill changes, clear actions,
  and derived filtered usage lists.
- `src/features/skills/components/RadialSkillGroupChart.tsx`
  Render the overview chart, keyboard operable selectors, and the overview reset
  affordance.
- `src/features/skills/components/HorizontalSkillBarChart.tsx`
  Render selected-group skills with clear active-state behavior and restrained
  update animation.
- `src/features/skills/components/SkillUsagePanel.tsx`
  Render general highlights, group usage, skill usage, and safe empty-state
  messaging.
- `src/features/skills/components/SkillsAccessibleFallback.tsx`
  Render a semantic grouped list or disclosure structure that mirrors the same
  approved information.
- `src/features/skills/SkillsExplorerSection.tsx`
  Compose the section heading, chart area, usage panel, fallback content, and
  responsive branch logic.
- `src/app/AppShell.tsx`
  Replace `SkillsSection` and `ExperienceSection` with the new explorer section.
- `src/content/site-metadata.ts`
  Remove the separate `Timeline` navigation item and keep `#skills` as the
  primary anchor.
- `src/styles/globals.css`
  Add only the extra shared classes or variables needed for chart surfaces,
  focus treatment, and muted versus accent states while staying aligned with
  `DESIGN.md`.

## Suggested Validation Pass

- Run `npm run lint`.
- Run `npm run test`.
- Run `npm run build`.
- Review the section on desktop for overview clarity, group-to-skill drill-down,
  and usage-panel fidelity.
- Review on tablet and mobile to confirm the simplified interaction remains
  readable and complete.
- Review with keyboard-only navigation.
- Review with reduced-motion enabled.
- Cross-check displayed skills, usage entries, and labels against
  `docs/profile/evandro-skills.csv` and verified profile documents.
- Confirm the final page contains one `#skills` section and no standalone
  timeline section.
