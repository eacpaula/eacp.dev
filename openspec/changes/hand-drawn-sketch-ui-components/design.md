## Context

The portfolio already uses a monochrome graphite-and-gold system with a sketch-style portrait in the hero, but the reusable UI components still rely on relatively clean digital framing. The next refinement is not just more texture or darker surfaces; it is a true hand-drawn component language for buttons, cards, labels, navigation, dividers, metric boxes, and representative reusable containers.

The implementation must stay inside the existing React 19 + TypeScript + TailwindCSS v4 stack. It also has to preserve the portfolio’s recruiter-facing clarity: readable content, strong contrast, explicit interaction states, and a polished feel. The design therefore needs to introduce sketch irregularity carefully and systematically, not as random decorative noise.

## Goals / Non-Goals

**Goals:**
- Establish reusable hand-drawn component primitives that integrate with the current monochrome and gold visual system.
- Make buttons, cards, navigation items, badges, dividers, and metric boxes feel illustrated through CSS-friendly techniques.
- Keep the implementation maintainable through shared utilities, pseudo-element patterns, and repeated component rules rather than asset-heavy one-offs.
- Preserve accessibility, responsiveness, performance, and recruiter-friendly scan behavior.
- Apply the styling through representative reusable patterns across the portfolio without rewriting the information architecture.

**Non-Goals:**
- Replacing the hero portrait or changing the core content strategy.
- Turning the portfolio into a comic, cartoon, low-fidelity wireframe, or novelty interface.
- Introducing heavy animation, new UI frameworks, or image-heavy sketch assets for standard components.
- Adding multiple accent colors or abandoning the existing black, white, gray, charcoal, and restrained gold palette.
- Rebuilding every component from scratch if the effect can be achieved by extending the current primitives.

## Decisions

### Decision: Extend the current sketch system into a hand-drawn layer
- **Decision:** Build on top of the existing sketch editorial system in `DESIGN.md` and `src/styles/globals.css`, adding a dedicated hand-drawn component layer instead of replacing the current foundation.
- **Rationale:** The background, palette, and hero illustration already establish the right world. The missing piece is component treatment, so extending the current system is lower risk and more coherent than starting over.
- **Alternative considered:** Create a separate component theme disconnected from the current sketch foundation.
- **Why not:** That would increase visual drift and maintenance complexity.

### Decision: Simulate hand-drawn UI with layered CSS primitives
- **Decision:** Use layered borders, doubled outlines, slight positional offsets, pseudo-elements, irregular shadow pressure, and restrained transform variance to create a drawn look.
- **Rationale:** These techniques are performant, maintainable, and realistic in TailwindCSS and CSS, while avoiding bitmap-heavy or dependency-heavy approaches.
- **Alternative considered:** Use SVG or raster assets for each sketch component frame.
- **Why not:** That would reduce maintainability, complicate reuse, and likely create responsive issues for a component system.

### Decision: Keep irregularity subtle and role-based
- **Decision:** Apply the strongest hand-drawn treatment to interaction and framing primitives—buttons, cards, badges, labels, and metric boxes—while keeping text blocks and layout structure stable.
- **Rationale:** This preserves readability and professionalism while still making the components visibly illustrative.
- **Alternative considered:** Apply strong sketch irregularity uniformly to all UI surfaces and typography.
- **Why not:** That would make the interface noisy and could undermine recruiter-oriented scan quality.

### Decision: Preserve a clear hierarchy between component roles
- **Decision:** Define distinct treatments for primary buttons, secondary buttons, shell panels, inset panels, badges, nav labels, and metric boxes rather than using one universal “sketch” effect.
- **Rationale:** The interface still needs hierarchy and usability. Role-based primitives keep the sketch language coherent without flattening everything into the same outline style.
- **Alternative considered:** Use one generic sketched border treatment everywhere.
- **Why not:** That would weaken hierarchy and make key actions or metrics harder to distinguish.

### Decision: Validate through representative reusable patterns
- **Decision:** Prove the system through hero actions, navigation, quick-read metric blocks, section cards, tags, and supporting panels before considering further extraction.
- **Rationale:** This is enough surface area to verify that the new component language is reusable and not just a local effect.
- **Alternative considered:** Keep the change limited to a few button styles only.
- **Why not:** That would not satisfy the request for a coherent component system.

## Risks / Trade-offs

- **[Risk]** Hand-drawn outlines could look messy or amateurish. → **Mitigation:** Keep irregularity small, intentional, and consistent; preserve the clean layout grid and restrained palette.
- **[Risk]** Additional pseudo-elements or layered borders could make components harder to maintain. → **Mitigation:** Centralize the effect in shared primitives and document the roles clearly in `DESIGN.md`.
- **[Risk]** Accessibility could regress if sketch outlines reduce contrast or state clarity. → **Mitigation:** Keep explicit focus outlines, readable text contrast, and clear hover/active differences.
- **[Risk]** The interface could drift into novelty or cartoon styling. → **Mitigation:** Keep typography, spacing, and content presentation grounded and professional, and reserve the stronger sketch effect for framing rather than copy.
- **[Risk]** Overusing gold or outline treatment could make components too loud. → **Mitigation:** Use gold as a precision accent and vary stroke emphasis by component role.

## Migration Plan

1. Update `DESIGN.md` with explicit hand-drawn component rules and limits.
2. Add shared sketch-outline and hand-drawn component primitives in `src/styles/globals.css`.
3. Refine reusable shared components such as CTA buttons, labels, dividers, badges, and navigation controls.
4. Apply the new primitives across representative section components without altering the content structure.
5. Run `npm run lint` and `npm run build`, then perform desktop and mobile visual review.
6. If the sketch effect harms readability or professionalism, roll back by reducing the irregularity layer while keeping the broader monochrome system intact.

## Open Questions

- No blocking product question is required to draft the design.
- During implementation, confirm whether any hand-drawn details need a dedicated shared wrapper component instead of remaining utility-class based.
