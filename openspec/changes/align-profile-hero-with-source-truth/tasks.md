## 1. Rebase profile content on the approved source

- [x] 1.1 Review `docs/profile/evandro-source-of-true.md` and select the
  achievement themes, metrics, and summary signals that will replace the
  current decorative `achievementEmblems`.
- [x] 1.2 Update `src/content/profile.ts` so `achievementEmblems` contains
  source-backed achievement entries instead of language motif placeholders.
- [x] 1.3 Rewrite the hero `subheadline` and `summary` in
  `src/content/profile.ts` so they match the approved profile positioning and
  avoid unsupported claims.

## 2. Update hero and summary presentation

- [x] 2.1 Refine `src/components/sections/HeroSection.tsx` so the hero emblem
  area presents the new achievement-backed content clearly.
- [x] 2.2 Adjust the hero summary treatment in
  `src/components/sections/HeroSection.tsx` so the supporting summary becomes
  right-aligned on larger layouts without harming mobile readability.
- [x] 2.3 Review `src/components/sections/ProfessionalSummarySection.tsx` and
  any related styling to ensure the adjacent summary surface remains visually
  consistent with the updated hero copy and alignment direction.

## 3. Validate source alignment and responsive behavior

- [x] 3.1 Verify every hero achievement, metric, and copy claim maps back to
  `docs/profile/evandro-source-of-true.md`.
- [x] 3.2 Run a desktop and mobile review of the hero and summary sections to
  confirm the right-aligned summary treatment remains readable and the scan path
  is still clear.
- [x] 3.3 Do a final copy review to confirm the updated subheadline lands close
  to the intended LinkedIn-style positioning while staying technically
  defensible.
