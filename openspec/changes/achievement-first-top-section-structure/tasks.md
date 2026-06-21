## 1. Rework the content model for hero plus unified impact

- [x] 1.1 Audit the current hero, summary, and impact content to document which
  content stays in the hero and which content moves into the unified impact
  cards.
- [x] 1.2 Update `src/content/profile.ts` so the hero owns one short
  positioning summary instead of carrying broader proof-oriented narrative copy.
- [x] 1.3 Update `src/content/achievements.ts` and any related content types so
  the strongest proof points can be rendered as impact cards and can later
  support optional deep-link metadata for detailed posts or case studies.

## 2. Replace summary plus impact with one unified impact section

- [x] 2.1 Refactor `src/components/sections/HeroSection.tsx` so the hero reads
  as the identity layer only, with concise positioning and no adjacent
  duplicate-summary behavior.
- [x] 2.2 Remove or fully repurpose
  `src/components/sections/ProfessionalSummarySection.tsx` so it no longer
  exists as a standalone summary section in the top-of-page flow.
- [x] 2.3 Update `src/components/sections/EngineeringImpactSection.tsx` so it
  becomes the single unified impact section using multiple metric- or
  outcome-led cards like the current summary card treatment.
- [x] 2.4 Update `src/app/AppShell.tsx` so the top-of-page section order
  reflects the intended hero → unified impact flow.

## 3. Validate clarity, credibility, and future readiness

- [x] 3.1 Verify that the hero contains exactly one short positioning summary
  and that the separate summary section is removed from the top-of-page flow.
- [x] 3.2 Verify that each visible impact card combines a concrete metric
  or outcome with a short qualifier and remains traceable to approved profile
  source material.
- [x] 3.3 Review the updated structure on desktop and mobile to confirm the
  first scan is concise, recruiter-friendly, and clearly separated into hero
  identity and one unified impact layer.
- [x] 3.4 Confirm that the impact-card content model can later support detailed
  posts or case-study-style destinations without another top-section redesign.
