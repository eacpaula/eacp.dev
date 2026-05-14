# Contract: Homepage Visual Identity Refinement

## Purpose

This contract defines the required visual and interaction behavior for the
existing homepage sections during the refinement feature.

## Required Section Order

1. Hero
2. Professional Summary
3. Engineering Impact
4. Skills
5. Experience Timeline
6. Case Studies Placeholder
7. Blog Placeholder
8. Contact

## Global Visual Rules

- The configured theme token layer in `src/styles/globals.css` remains the
  source of truth for color, surfaces, borders, shadows, and typography
- The refined identity must feel modern, technical, and professional rather
  than warm editorial
- Background and section rhythm should create clearer flow without introducing
  visual noise
- Card styling must support hierarchy and scan speed instead of soft sameness
- Motion must remain subtle and clarity-driven

## Section Responsibilities

### Hero

- Communicates senior full stack positioning within the first screen
- Uses the strongest hierarchy on the page
- Keeps primary actions highly visible without clutter
- Includes a supporting quick-read surface that remains readable and compact

### Professional Summary

- Reinforces positioning with direct professional language
- Uses layout and spacing to separate summary, focus areas, and language detail
- Avoids oversized editorial prose blocks

### Engineering Impact

- Presents impact items in a faster-scanning structure
- Keeps context, contribution, and outcome visually distinct
- Uses card treatment that feels sharper and more intentional than the current
  baseline

### Skills

- Preserves grouped skill scanning
- Improves emphasis for core skills and reduces visual noise for secondary ones
- Maintains clarity on mobile wrap behavior

### Experience Timeline

- Reads like a curated timeline, not a copied resume
- Preserves role, context, contribution, and impact hierarchy
- Maintains clear separation between entries

### Case Studies Placeholder

- Clearly signals planned technical deep dives
- Uses future-content framing rather than published-content cues

### Blog Placeholder

- Feels practical, senior-level, and intentional
- Distinguishes topic previews from live articles

### Contact

- Keeps follow-up routes visible and credible
- Reinforces availability without adding visual clutter

## Shared Primitive Expectations

- `SectionHeading` must support a stronger technical hierarchy across all
  sections
- `CtaLink` must reflect the refined brand through token-based styling rather
  than one-off color usage
- Header and navigation surfaces must remain readable, sticky, and lightweight

## Accessibility Expectations

- Color contrast must remain readable across backgrounds, surfaces, text, and
  controls
- Focus states must remain visible after token changes
- Heading order and landmark structure must remain intact
- Layout refinement must not depend on hover-only interaction or animation
