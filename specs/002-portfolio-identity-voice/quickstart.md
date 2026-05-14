# Quickstart: Portfolio Visual Identity and Content Voice Refinement

## Goal

Refine the existing `eacp.dev` homepage so it looks more distinct, modern, and
technical while sounding direct, concise, and professionally credible.

## Prerequisites

- Node.js version compatible with the current Vite toolchain
- npm available locally
- Existing dependencies installed with `npm install`

## Implementation Setup

1. Review the current theme tokens in `src/styles/globals.css`.
2. Review the current content records in `src/content/`.
3. Review the existing shared UI primitives and section components under
   `src/components/`.

## Recommended Implementation Order

1. Refine the shared visual token layer:
   - Update page background, surfaces, borders, accent values, and typography
     variables in `src/styles/globals.css`
   - Preserve the existing token names and consumption pattern
2. Tighten shared primitives and shell rhythm:
   - Update `src/components/ui/SectionHeading.tsx`
   - Update `src/components/ui/CtaLink.tsx`
   - Update `src/components/layout/SiteHeader.tsx`
   - Adjust page-level spacing in `src/app/AppShell.tsx`
3. Rewrite core positioning copy:
   - Update `src/content/profile.ts`
   - Update `src/content/site-metadata.ts`
   - Review `src/content/contact.ts`
4. Refine section-level layout and hierarchy:
   - Hero
   - Professional Summary
   - Engineering Impact
   - Skills
   - Experience Timeline
   - Case Studies Placeholder
   - Blog Placeholder
   - Contact
5. Rewrite supporting content for voice and scan quality:
   - `src/content/achievements.ts`
   - `src/content/experience.ts`
   - `src/content/case-studies.ts`
   - `src/content/blog-topics.ts`
   - `src/content/skills.ts` if emphasis ordering needs refinement
6. Run quality validation:
   - `npm run lint`
   - `npm run build`
   - Optional `npm run check`
   - Manual desktop/mobile review
   - Manual contrast, focus-state, and copy/source review

## Suggested Verification Flow

1. Open the homepage on desktop width and confirm the first screen feels more
   distinct and technical than the current baseline.
2. Review the hero and summary copy for direct professional voice.
3. Scan the engineering impact cards and confirm context and outcome are easier
   to understand quickly.
4. Review case study and blog placeholders and confirm they read as planned
   future content only.
5. Check mobile spacing, wrapping, and CTA visibility.
6. Verify no deployment or static asset behavior changed unintentionally.

## Future Extension Path

- Add more formal token naming if the project later grows into a broader design
  system
- Expand case study or blog detail pages later using the existing placeholder
  content shapes
