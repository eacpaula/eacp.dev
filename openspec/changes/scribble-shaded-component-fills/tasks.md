## 1. Define the hand-shaded fill foundation

- [x] 1.1 Update `DESIGN.md` to document scribble, crayon, pencil, or charcoal-style fill behavior, irregular coverage rules, motion limits, and reduced-motion expectations.
- [x] 1.2 Extend `src/styles/globals.css` with reusable hand-shaded fill primitives, stroke-density layering, and reduced-motion-aware animation utilities for component interiors.

## 2. Refine shared reusable component primitives

- [x] 2.1 Update shared button and action styles in `src/components/ui/CtaLink.tsx` and related interactive patterns so buttons use the new hand-shaded fills while preserving clarity and accessibility.
- [x] 2.2 Refine shared labels, badges, dividers, and metric-like primitives in `src/components/ui/SectionHeading.tsx` and related reusable styles so small UI details use consistent scribble-shaded interior treatment.
- [x] 2.3 Refine shared navigation and container controls in `src/components/layout/SiteHeader.tsx` and related shared layout elements so nav or tab-like components adopt the new shaded-fill system.

## 3. Apply the fill system across representative sections

- [x] 3.1 Update hero and quick-read component surfaces in `src/components/sections/HeroSection.tsx` and `src/components/sections/ProfessionalSummarySection.tsx` so buttons, labels, panels, and metric boxes use the new hand-shaded fill treatment.
- [x] 3.2 Update representative reusable content blocks in `src/components/sections/EngineeringImpactSection.tsx`, `src/components/sections/SkillsSection.tsx`, and `src/components/sections/ExperienceSection.tsx` so cards, tags, separators, and supporting panels match the shaded-fill system.
- [x] 3.3 Update supporting reusable surfaces in `src/components/sections/CaseStudiesSection.tsx`, `src/components/sections/BlogPreviewSection.tsx`, and `src/components/sections/ContactSection.tsx` so the scribble-filled treatment scales consistently across the homepage.

## 4. Validate usability, motion, and consistency

- [x] 4.1 Run `npm run lint` and `npm run build` after the shading and motion changes.
- [x] 4.2 Perform desktop and mobile visual review, including a reduced-motion behavior check, to confirm the scribble-filled treatment remains readable, professional, cohesive, and non-distracting.
