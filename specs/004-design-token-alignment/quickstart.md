# Quickstart: Design Token Alignment with DESIGN.md

## Recommended Implementation Order

1. Review `DESIGN.md` and list the core visual roles that must become shared
   semantic tokens.
2. Audit the current shared styling foundation and representative components to
   identify token drift, especially light-theme defaults, arbitrary radii,
   one-off shadows, and inconsistent accent usage.
3. Align the shared styling foundation so the primary token set expresses the
   approved dark-mode-first palette, typography hierarchy, spacing rhythm, shape
   rules, and surface layering.
4. Normalize representative shared UI components first:
   application shell, header, CTA link, and section heading.
5. Update representative section-level components that exercise cards, chips,
   nested surfaces, and action states.
6. Run `npm run lint` and `npm run build`.
7. Review the homepage on desktop and mobile for token consistency, readable
   contrast, focus visibility, and preservation of the technical brand.

## Suggested Validation Pass

- Confirm the page no longer defaults to a light visual system that conflicts
  with `DESIGN.md`.
- Confirm shared surfaces, borders, and text roles feel consistent across hero,
  summary, impact, skills, and contact sections.
- Confirm primary and secondary actions use the same token logic across header,
  hero, and contact flows.
- Confirm section spacing and container rhythm still feel deliberate and
  maintainable after token normalization.
- Confirm the final build remains static-hosting compatible with no new runtime
  dependencies.
