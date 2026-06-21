## Why

The current homepage summary and impact sections overlap too heavily: they
repeat similar modernization, reusable-systems, delivery-quality, and
engineering-range themes while splitting proof across two adjacent surfaces.
This change is needed to simplify the top section into a clearer recruiter scan
that keeps the hero concise and consolidates proof into one stronger impact
section.

## What Changes

- Keep the hero responsible for identity and one short positioning summary only.
- Remove the standalone summary layer below the hero and fold its strongest
  card-based content into a single unified impact section.
- Redefine the impact section so it becomes the main top-of-page proof surface,
  using multiple metric- or outcome-led cards like the current card treatment
  shown in the summary area.
- Prepare each impact card for future linkage to a detailed post or
  case-study-style writeup without requiring a second top-level proof section.

## Capabilities

### New Capabilities
- `achievement-first-top-section`: Defines the recruiter-facing content
  hierarchy, unified impact-card structure, and future deep-link readiness for
  the portfolio’s hero-adjacent proof area.

### Modified Capabilities
- None.

## Impact

- Affected code will likely include `src/content/profile.ts`,
  `src/content/achievements.ts`, `src/components/sections/HeroSection.tsx`,
  `src/components/sections/ProfessionalSummarySection.tsx`,
  `src/components/sections/EngineeringImpactSection.tsx`, and
  `src/app/AppShell.tsx`.
- Affected source content will include `docs/profile/evandro-source-of-true.md`
  and other approved profile references used to keep achievement claims
  evidence-backed.
- No backend or API changes are expected.
