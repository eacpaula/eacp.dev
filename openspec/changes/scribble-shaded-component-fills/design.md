## Context

The portfolio already has a monochrome sketch-oriented visual system, a hand-drawn hero portrait, and more illustrative component outlines, but the internal surface treatment of most UI elements still looks digitally filled. The next refinement is to make component backgrounds and fills feel hand-shaded, as if they were colored or shaded on paper with pencil, charcoal, crayon, or irregular sketch strokes.

This refinement has to stay professional and recruiter-friendly. The effect should feel more like premium concept-art shading than novelty texture. The implementation also needs to stay practical for the current React 19 + TypeScript + TailwindCSS v4 stack and avoid heavy assets or high-motion behavior.

## Goals / Non-Goals

**Goals:**
- Introduce reusable hand-shaded fill behavior for buttons, cards, labels, metric boxes, section containers, and representative reusable surfaces.
- Keep the fills consistent with the existing monochrome and gold palette plus the sketch-style portrait.
- Support subtle optional motion in shading direction or offset without making the interface unstable.
- Respect reduced-motion preferences with static fallbacks.
- Keep the implementation lightweight, maintainable, and suitable for the current frontend architecture.
- Preserve readability, contrast, and professional tone.

**Non-Goals:**
- Replacing the hero portrait or changing the content structure.
- Abandoning the current black, white, gray, charcoal, and restrained gold system.
- Making the site look like a cartoon, comic, messy sketchbook, or low-fidelity wireframe.
- Adding heavy animation, particle effects, or expensive runtime rendering.
- Depending on large bitmap textures when CSS, SVG, or pseudo-element techniques can produce the effect.

## Decisions

### Decision: Add a dedicated hand-shaded fill layer on top of the current component system
- **Decision:** Extend the current component primitives with an inner shading layer rather than replacing the existing outline or shell system.
- **Rationale:** The existing borders and shells already establish a useful structure. The gap is interior fill behavior, so a new fill layer is more targeted and less disruptive.
- **Alternative considered:** Rebuild every component style from scratch around the new shading effect.
- **Why not:** That would create unnecessary churn and weaken the reuse of the current visual system.

### Decision: Simulate scribble shading through layered CSS and lightweight SVG-like patterns
- **Decision:** Use layered gradients, repeating stroke patterns, pseudo-elements, masking-style overlays, and optional subtle transform animation to simulate manual shading.
- **Rationale:** This approach is maintainable, inexpensive, and realistic in the current stack while still providing a convincing handmade feel.
- **Alternative considered:** Use raster textures or video-like animated assets for each surface.
- **Why not:** That would increase asset weight, reduce flexibility, and complicate consistent theming.

### Decision: Keep irregularity visible but bounded
- **Decision:** Allow partial coverage, directional change, and density variance, but keep the contrast range narrow and the shading subordinate to text and layout.
- **Rationale:** The effect should feel handmade, not chaotic. Bounded irregularity preserves scan quality and professionalism.
- **Alternative considered:** Use stronger roughness and obvious fill gaps to maximize the hand-drawn effect.
- **Why not:** That would risk making the interface feel unfinished or childish.

### Decision: Animate only the shading layer, not the component structure
- **Decision:** If motion is used, animate only subtle shading drift or directional shift within the fill layer.
- **Rationale:** This keeps the handmade effect alive without making components move spatially or distracting from content.
- **Alternative considered:** Animate borders, cards, or buttons with larger wobble or hover-driven draw effects.
- **Why not:** That would introduce instability and could hurt usability.

### Decision: Gate all decorative motion behind reduced-motion-aware fallbacks
- **Decision:** Use explicit reduced-motion handling so the static shaded appearance is the baseline and motion is optional.
- **Rationale:** This protects accessibility and keeps the site usable in more browsing contexts.
- **Alternative considered:** Always-on motion with only shorter timing adjustments.
- **Why not:** That would not satisfy reduced-motion expectations.

## Risks / Trade-offs

- **[Risk]** Scribble fills could reduce text contrast or visual calm. → **Mitigation:** Keep fill opacity restrained, keep the shading behind content, and validate with desktop/mobile review.
- **[Risk]** Motion could feel distracting or unstable. → **Mitigation:** Limit animation to slow directional drift and disable it for reduced-motion users.
- **[Risk]** CSS layering could become difficult to reason about. → **Mitigation:** Centralize the effect in a small set of shared primitives with clearly named roles.
- **[Risk]** The site could drift from premium to playful. → **Mitigation:** Keep typography, spacing, and information hierarchy disciplined while making only the fill layer more expressive.
- **[Risk]** Performance could regress if too many animated layers are added. → **Mitigation:** Use lightweight repeating patterns, avoid large assets, and animate selectively rather than on every possible surface.

## Migration Plan

1. Update `DESIGN.md` with rules for hand-shaded fills, coverage irregularity, motion limits, and reduced-motion handling.
2. Extend `src/styles/globals.css` with shared scribble-fill primitives and optional reduced-motion-aware animation.
3. Apply the fill treatment to reusable shared components such as buttons, badges, nav containers, and metric blocks.
4. Roll the effect across representative section surfaces without changing content structure.
5. Run `npm run lint` and `npm run build`, then perform desktop and mobile visual review with a reduced-motion spot check if practical.
6. If the shading effect hurts readability or performance, reduce layer complexity or remove animation while keeping the static shaded appearance.

## Open Questions

- No blocking product questions are required to draft the design.
- During implementation, confirm whether the shading animation should apply to all eligible surfaces or remain limited to select high-value components such as buttons and cards.
