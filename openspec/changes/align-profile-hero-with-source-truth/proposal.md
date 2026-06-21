## Why

The current homepage hero uses decorative stack emblems and copy that no longer
matches the stronger, source-backed positioning captured in
`docs/profile/evandro-source-of-true.md`. This change is needed now so the
first-screen profile signal aligns with the documented achievements, current
market positioning, and intended summary presentation.

## What Changes

- Replace decorative `achievementEmblems` content with source-backed achievement
  highlights derived from the approved achievements reference in
  `docs/profile/evandro-source-of-true.md`.
- Update the hero subheadline so it aligns more closely with the intended
  LinkedIn-style positioning around software engineering, full stack delivery,
  applied AI, and core platform strengths.
- Revise the supporting summary copy and its presentation so the hero and
  summary areas read consistently with the source of truth.
- Adjust the summary layout treatment so the summary block is right-aligned in
  the same editorial direction requested for the source-backed profile content.

## Capabilities

### New Capabilities
- `profile-hero-source-alignment`: Ensure the homepage hero and adjacent summary
  content present source-backed achievements, positioning copy, and alignment
  treatment based on the approved profile reference.

### Modified Capabilities
- None.

## Impact

- Affected code: `src/content/profile.ts`,
  `src/components/sections/HeroSection.tsx`,
  `src/components/sections/ProfessionalSummarySection.tsx`, and any shared types
  or styling touched by the new achievement representation.
- Affected source content: `docs/profile/evandro-source-of-true.md` becomes the
  governing reference for the updated hero achievements and positioning copy.
- No API or backend changes.
