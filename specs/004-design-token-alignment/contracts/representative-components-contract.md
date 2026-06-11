# Contract: Representative Components Validation

## Purpose

Define which existing UI patterns must adopt the aligned tokens to prove the
design system works in real interface usage.

## Representative Components

- **Application shell**: page background, global text role, section rhythm, skip
  link treatment
- **Site header**: overlay/background, navigation surface, hover/focus behavior,
  resume action treatment
- **Primary CTA link**: primary and secondary button roles, border treatment,
  shape, limited elevation
- **Section heading**: eyebrow label, display typography, body copy hierarchy
- **Hero section**: major surface container, metadata chips, metrics cards,
  emphasis hierarchy
- **Professional summary or impact cards**: repeated card, nested surface, and
  label treatment
- **Contact section**: scheduling CTA, supporting cards, action and feedback
  states

## Required Outcomes

- Each representative component visibly reflects the aligned token system.
- Components that share the same visual role use the same token family for that
  role.
- Distinct visual hierarchy is preserved without introducing section-specific
  palettes.
- Large arbitrary radii, heavy glow-style shadows, and light-theme carryover
  values are reduced where the approved system provides a better shared role.

## Out of Scope

- Full redesign of every homepage section
- New page creation
- Animation system redesign
- Backend or content-architecture changes

## Validation

- Desktop and mobile review confirms consistent shared styling behavior.
- Interactive controls preserve clear focus states and readable contrast.
- The portfolio still feels minimalist, senior, technical, and dark-mode-first
  after representative updates.
