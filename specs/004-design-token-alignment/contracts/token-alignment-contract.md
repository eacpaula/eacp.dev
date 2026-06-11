# Contract: Token Alignment

## Purpose

Define the contract between `DESIGN.md`, the shared styling foundation, and
component consumers for the Design Token Alignment feature.

## Inputs

- The approved visual rules in `DESIGN.md`
- The current shared styling foundation
- Existing components that consume shared visual roles

## Required Outcomes

- A single semantic token system exists for the primary visual roles used across
  the portfolio.
- Shared tokens reflect the approved dark-mode-first technical identity rather
  than the older light-first palette behavior.
- Typography, spacing rhythm, surface hierarchy, border strength, and elevation
  rules are represented consistently enough for contributors to reuse them.
- Shared token names express intent and role, not a single component or page.

## Required Token Coverage

- Page background
- Base and elevated surfaces
- Surface emphasis or highlight treatment
- Default and stronger borders
- Primary, default, muted, and inverse text roles as needed
- Primary action and secondary action treatment
- Accent and highlight usage
- Focus-visible treatment
- Shared radii roles
- Shared spacing roles
- Shared elevation rules

## Consumer Expectations

- Shared components must consume the aligned tokens for their primary visual
  roles instead of preserving arbitrary local values where a matching semantic
  role exists.
- New or revised components must be able to adopt the system without inventing a
  separate palette or spacing model.
- If a required visual role does not exist, the token system must be expanded at
  the shared layer before local component styling diverges.

## Validation

- Contributors can point to one token source for each core visual role.
- Review of representative components shows consistent surfaces, text contrast,
  borders, and actions.
- The alignment does not require a new framework or runtime styling system.
