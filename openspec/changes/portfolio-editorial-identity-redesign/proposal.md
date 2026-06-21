## Why

The current top section communicates too much at once and dilutes the first impression of the portfolio. The homepage needs a clearer identity system and a simpler recruiter-facing scan path that feels distinctive, professional, and consistent with Evandro's engineering profile.

## What Changes

- Redesign the homepage hero to reduce copy weight, remove non-essential badges, and simplify the headline hierarchy around name, role, short summary, and primary actions.
- Replace the current quick-read treatment with an editorial newspaper-style facts panel that remains structured and readable.
- Introduce a new black, white, and gray visual system with restrained gold accents for badges, key actions, borders, and emphasis details.
- Add a stylized hero illustration concept that preserves Evandro's recognizable features while expressing engineering achievement through military-inspired insignia symbolism.
- Update the achievement metrics presentation so the cards stay modern but visually connect to the new editorial direction.
- Define reusable visual rules so the redesigned identity can scale beyond the homepage into the rest of the site.

## Capabilities

### New Capabilities
- `portfolio-top-section-redesign`: Redefines the hero, quick-read panel, and achievement scan behavior for a simpler recruiter-first homepage entry point.
- `portfolio-visual-direction`: Defines the site-wide black, white, gray, and gold identity system, illustration treatment, and reusable editorial styling rules.

### Modified Capabilities
- None.

## Impact

- Affected code will include `src/components/sections/HeroSection.tsx`, `src/components/sections/ProfessionalSummarySection.tsx`, `src/components/sections/EngineeringImpactSection.tsx`, shared UI primitives, content files such as `src/content/profile.ts` and `src/content/achievements.ts`, and the shared styling foundation in `src/styles/`.
- No backend, API, routing, or hosting model changes are required.
- The change will influence future section styling so the updated design language remains consistent across the portfolio.
