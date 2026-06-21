## 1. Define the hand-drawn component foundation

- [x] 1.1 Update `DESIGN.md` to document the hand-drawn component rules for buttons, cards, badges, labels, dividers, navigation, metric boxes, and restraint limits.
- [x] 1.2 Extend `src/styles/globals.css` with reusable sketch-outline, layered border, pseudo-frame, and irregularity primitives that support the hand-drawn component language.

## 2. Refine shared reusable UI primitives

- [x] 2.1 Update shared action components such as `src/components/ui/CtaLink.tsx` so primary and secondary buttons use the new hand-drawn contour treatment while preserving accessibility.
- [x] 2.2 Refine shared label, divider, badge, and heading patterns in `src/components/ui/SectionHeading.tsx` and related reusable UI styles so small UI details adopt the sketched language.
- [x] 2.3 Refine `src/components/layout/SiteHeader.tsx` and related shared navigation or layout controls so navigation items and similar tab-like elements feel hand-drawn but remain easy to scan.

## 3. Apply the component system across representative sections

- [x] 3.1 Update hero and quick-read component treatments in `src/components/sections/HeroSection.tsx` and `src/components/sections/ProfessionalSummarySection.tsx` so action buttons, labels, framed panels, and metric boxes use the hand-drawn style.
- [x] 3.2 Update representative reusable content blocks in `src/components/sections/EngineeringImpactSection.tsx`, `src/components/sections/SkillsSection.tsx`, and `src/components/sections/ExperienceSection.tsx` so cards, tags, separators, and supporting panels match the new component system.
- [x] 3.3 Update supporting reusable surfaces in `src/components/sections/CaseStudiesSection.tsx`, `src/components/sections/BlogPreviewSection.tsx`, and `src/components/sections/ContactSection.tsx` so the hand-drawn component language scales consistently across the homepage.

## 4. Validate usability and consistency

- [x] 4.1 Run `npm run lint` and `npm run build` after the component changes.
- [x] 4.2 Perform desktop and mobile visual review to confirm the hand-drawn treatment remains readable, professional, cohesive with the hero portrait, and restrained rather than messy.
