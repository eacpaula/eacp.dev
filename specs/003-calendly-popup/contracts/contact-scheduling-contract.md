# Contract: Contact Section Scheduling Surface

## Purpose

This contract defines how the Contact section exposes the new scheduling
experience while preserving the existing professional contact options.

## Required Content Ownership

```text
src/content/contact.ts
```

## Required Contact Section Behavior

- The Contact section must render a visible primary scheduling CTA labeled
  `Schedule a call`
- The scheduling CTA must appear alongside email, LinkedIn, GitHub, and resume
  options
- The section must not render a full inline calendar before user interaction
- The scheduling copy must remain direct, concise, and professional

## Required Data Surface

- A single centralized scheduling URL record must be stored in the contact
  content/config layer
- Existing `contactMethods` must remain available without duplication or
  replacement
- Supporting copy should make clear that scheduling is for recruiting,
  technical discussions, opportunities, or collaboration

## Consumer Expectations

- `ContactSection.tsx` consumes scheduling config and contact methods as
  content-driven inputs
- The scheduling CTA must remain keyboard accessible
- The visual treatment must remain aligned with the current design system and
  Contact section rhythm

## Failure Rules

- If scheduling cannot be opened normally, the Contact section must remain
  intact
- Existing contact options must stay visible and usable
- The degraded scheduling state must not visually break the page
