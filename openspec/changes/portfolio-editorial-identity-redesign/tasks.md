## 1. Update the visual source of truth

- [x] 1.1 Revise `DESIGN.md` to document the new black, white, gray, and gold direction, including the editorial tone, emblem symbolism rules, and whole-site scaling guidance.
- [x] 1.2 Update the shared token layer in `src/styles/globals.css` to replace the current blue/green accent logic with grayscale and restrained gold accent roles.
- [x] 1.3 Adjust shared UI primitives in `src/components/ui/CtaLink.tsx`, `src/components/ui/SectionHeading.tsx`, and related global styles so buttons, headings, borders, and highlights use the new visual language consistently.

## 2. Prepare content and data for the redesigned top section

- [x] 2.1 Update `src/content/profile.ts` so the hero uses `Evandro Antônio da Costa de Paula`, the single role label `Full Stack Engineer`, a shorter summary, and the preserved Resume, Contact, GitHub, and LinkedIn CTAs.
- [x] 2.2 Remove obsolete top-of-hero metadata dependencies from the hero content flow, including location, years of experience, and fluent-English emphasis.
- [x] 2.3 Define the source-backed quick-read facts and achievement-emblem mappings using existing repository evidence from `src/content/achievements.ts` and `docs/profile/`.

## 3. Implement the hero and Quick Read redesign

- [x] 3.1 Refactor `src/components/sections/HeroSection.tsx` into the new composition with the illustration on the left, the name and single role line below it, and a simplified CTA hierarchy.
- [x] 3.2 Add the illustration and emblem presentation layer for the hero, including achievement-linked gold insignia and responsive behavior that preserves readability on smaller screens.
- [x] 3.3 Redesign `src/components/sections/ProfessionalSummarySection.tsx` as the editorial Quick Read surface with highlighted bullet facts and restrained newspaper-card structure.
- [x] 3.4 Update `src/app/AppShell.tsx` as needed so the hero and Quick Read sections read as one coordinated top-of-page identity system.

## 4. Align supporting metric and section surfaces

- [x] 4.1 Restyle the top metrics presentation so the current metric cards remain modern while inheriting subtle editorial cues and grayscale-plus-gold detailing.
- [x] 4.2 Update `src/components/sections/EngineeringImpactSection.tsx` so its opening cards and labels do not conflict with the new top-section direction.
- [x] 4.3 Review `src/components/layout/SiteHeader.tsx` and `src/components/layout/SiteFooter.tsx` for any accent, border, or surface treatments that must change to stay visually consistent with the redesign.

## 5. Validate the redesign

- [x] 5.1 Run a manual desktop and mobile review to confirm the hero scan path, illustration placement, and Quick Read structure remain clear and balanced.
- [x] 5.2 Verify the final copy and metrics remain neutral in tone, avoid third-person narration, and stay fully traceable to approved profile sources.
- [x] 5.3 Confirm the implemented surfaces satisfy the new specs for hero hierarchy, editorial Quick Read behavior, achievement symbolism, and grayscale-plus-gold visual consistency.
