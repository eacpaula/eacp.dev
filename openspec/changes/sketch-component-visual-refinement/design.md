## Context

The portfolio already has a defined sketch-inspired hero illustration and a recently refined charcoal-and-gold page atmosphere, but reusable UI patterns still vary between older dashboard-like treatments and newer editorial surfaces. The current stack is a static React 19 + TypeScript + TailwindCSS v4 application, so the component refinement needs to stay CSS- and utility-driven, align with `DESIGN.md`, and avoid introducing a new framework or content restructure.

The immediate stakeholders are portfolio reviewers, recruiters, and engineering hiring managers who need quick readability first and visual distinctiveness second. The design therefore needs to improve component cohesion without reducing contrast, clarity, or implementation realism.

## Goals / Non-Goals

**Goals:**
- Establish reusable component-level styling rules that align buttons, cards, badges, navigation, metric blocks, dividers, and containers with the sketch-inspired hero direction.
- Consolidate the styling into shared tokens and reusable surface or control patterns rather than ad hoc per-section treatments.
- Preserve accessibility, keyboard focus states, contrast, performance, and recruiter-friendly clarity.
- Keep the system realistic for the existing React, TypeScript, and TailwindCSS codebase.
- Make the component language reusable across hero, quick read, impact, skills, timeline, case studies, writing, and contact sections.

**Non-Goals:**
- Rewriting content structure or information architecture.
- Replacing the hero portrait or introducing new illustration assets.
- Adding heavy animation, runtime theming systems, or a new UI framework.
- Introducing colorful accents, grunge styling, fantasy/game aesthetics, or decorative-only metrics.
- Expanding the work into new pages, backend changes, or content model changes.

## Decisions

### Decision: Extend the existing sketch token layer instead of creating a parallel theme
- **Decision:** Continue using `DESIGN.md` and `src/styles/globals.css` as the design-system source of truth, and add or refine only the tokens and shared utility classes needed for component styling.
- **Rationale:** The site already has a working charcoal-and-gold direction. Extending the existing token layer avoids duplicated styling logic and keeps the component update incremental.
- **Alternative considered:** Create section-specific component styling inside each section component.
- **Why not:** That would increase divergence, make the system harder to maintain, and weaken the whole-site consistency the change is meant to introduce.

### Decision: Treat buttons, cards, badges, and navigation as reusable primitives first
- **Decision:** Refine shared UI primitives and repeated layout patterns before tuning individual section compositions.
- **Rationale:** Most of the visual inconsistency now comes from repeated component patterns rather than section-specific layout decisions. Updating primitives first gives better reuse and lowers future drift.
- **Alternative considered:** Start from representative sections only and accept some shared-style duplication.
- **Why not:** That would solve individual screens faster but would not create a durable component system.

### Decision: Use subtle CSS layering for texture and irregularity
- **Decision:** Express the sketch mood through gradients, low-contrast overlays, border contrast, inset lines, and restrained pseudo-surface effects instead of image-heavy textures.
- **Rationale:** This stays performant, maintainable, and realistic in TailwindCSS while keeping the page readable.
- **Alternative considered:** Use large texture assets or noisy bitmap overlays.
- **Why not:** That would increase visual clutter, asset weight, and maintenance complexity while risking readability.

### Decision: Keep gold as a precision accent rather than a dominant fill color
- **Decision:** Reserve gold for action emphasis, thin dividers, labels, metric highlights, and small stitched or stamped details.
- **Rationale:** The portfolio’s identity depends on monochrome discipline. Restrained gold keeps the UI premium and connected to the hero without turning components flashy.
- **Alternative considered:** Expand gold into broader panel fills or multi-tone decorative accents.
- **Why not:** That would compete with the portrait and undermine the black, white, gray, and charcoal foundation.

### Decision: Validate through representative reusable patterns and section touchpoints
- **Decision:** Apply the refined component rules across shared UI and representative sections: hero CTAs, quick read, impact cards, skill tags, timeline blocks, case studies, writing cards, contact panels, and navigation.
- **Rationale:** The system has to prove whole-site scalability, not just isolated component polish.
- **Alternative considered:** Limit validation to shared UI files only.
- **Why not:** That would leave unresolved whether the refined primitives actually compose cleanly across the portfolio.

## Risks / Trade-offs

- **[Risk]** Texture and layered surfaces could become visually noisy. → **Mitigation:** Keep contrast differences low, prefer one or two subtle overlays per surface, and validate through desktop and mobile review.
- **[Risk]** Gold accents could become overused across components. → **Mitigation:** Reserve gold for emphasis roles only and keep default surfaces monochrome-first.
- **[Risk]** Reusable utility classes could become too generic to express editorial nuances. → **Mitigation:** Define a small set of purpose-built sketch surface and control patterns instead of a large unstructured utility set.
- **[Risk]** Accessibility may regress if border or hover states become too subtle. → **Mitigation:** Preserve explicit focus outlines, maintain readable foreground contrast, and verify hover/focus states manually.
- **[Risk]** Section-level overrides may remain after previous iterations. → **Mitigation:** Audit representative components and replace generic panel treatments with shared primitives where possible.

## Migration Plan

1. Update `DESIGN.md` if component-level rules need explicit source-of-truth clarification.
2. Refine shared styling tokens and reusable sketch utilities in `src/styles/globals.css`.
3. Update shared UI primitives such as CTA links, section headings, badges, and navigation controls.
4. Apply the component rules across representative section components without changing content structure.
5. Run `npm run lint` and `npm run build`, then perform desktop and mobile visual review.
6. If the result regresses clarity or cohesion, roll back by reverting the component-specific styling changes while leaving stable global tokens intact.

## Open Questions

- No blocking product questions at proposal time.
- During implementation, confirm whether any remaining repeated component patterns should be extracted further into dedicated primitives or left as shared utility-class composition.
