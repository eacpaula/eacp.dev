## Context

The portfolio already uses a monochrome and gold direction, and the hero portrait now provides a strong visual anchor through its charcoal, graphite, and hand-drawn concept-art style. The gap is no longer the hero illustration itself. The gap is the broader site atmosphere: the page background and many section surfaces still read as clean product UI panels rather than extensions of the sketch-driven visual world established by the portrait.

This change is broader than the hero-only refinements because it affects the global styling foundation and multiple shared section surfaces. At the same time, it must stay constrained: the user does not want a structural redesign, heavy animation, grunge styling, or a noisy artistic overlay that hurts readability.

Constraints:

- Keep the site static-first, Tailwind-based, and maintainable.
- Preserve strong contrast and recruiter-friendly scan behavior.
- Avoid soft startup-style gradients and colorful accent systems.
- Keep texture subtle enough for performance and readability.
- Reuse the refined system across all current homepage sections.

## Goals / Non-Goals

**Goals:**

- Make the page background feel more like a charcoal or graphite concept-art environment.
- Tighten the palette so black, white, gray, and restrained gold feel deliberate everywhere.
- Refine shared surfaces and panels so they feel integrated with the hero portrait’s world.
- Unify the hero portrait frame, hero content area, and surrounding page atmosphere.
- Define reusable texture, depth, and border rules that scale across summary, impact, skills, timeline, case studies, writing, and contact.

**Non-Goals:**

- Redesigning the site’s content structure or section order.
- Changing the hero illustration asset itself.
- Introducing heavy animation, multiple accent colors, or decorative visual noise.
- Turning the site into fantasy art, grunge collage, or game UI.

## Decisions

### 1. Refine the visual system through shared tokens and layered background treatment

Decision:
Implement the change primarily through `DESIGN.md`, `src/styles/globals.css`, and reusable section-surface patterns rather than one-off local overrides.

Rationale:
The request is explicitly whole-site, not hero-only. A token-and-surface approach keeps the change consistent and easier to maintain.

Alternatives considered:

- Style only the hero wrapper and leave later sections alone: rejected because it would not achieve whole-site cohesion.
- Add texture separately inside every section: rejected because it would create drift and unnecessary complexity.

### 2. Use subtle atmospheric texture, not literal noisy artwork

Decision:
The background should combine tonal layering with restrained sketch-like atmosphere: low-contrast charcoal bloom, soft graphite haze, mild ink-wash framing, or barely perceptible paper grain. Texture should be impressionistic rather than literal.

Rationale:
The site needs to feel closer to the portrait without sacrificing readability or looking messy. Suggestive atmosphere accomplishes that better than overt distressed textures.

Alternatives considered:

- Add heavy paper grain or scratches everywhere: rejected because it would reduce clarity and feel gimmicky.
- Keep the current very clean dark background and only adjust cards: rejected because the overall world would still feel disconnected from the portrait.

### 3. Shift surfaces from “dashboard dark cards” to “charcoal editorial panels”

Decision:
Refine panels and cards with quieter tonal separation, layered border logic, selective inset framing, and restrained texture cues so they feel like charcoal editorial panels rather than generic software dashboard tiles.

Rationale:
Many current sections already have a good layout, but their surfaces remain too flat and product-UI-like. The refinement should change their material character, not their structure.

Alternatives considered:

- Replace dark surfaces with many light paper cards: rejected because it would break the monochrome mood and reduce consistency with the hero.
- Add strong shadows for depth: rejected because the design language already favors tone and border separation over floating-card effects.

### 4. Use gold only as a precision accent

Decision:
Keep gold as the main accent for labels, borders, dividers, buttons, and emphasis details, but do not broaden it into large fills or secondary color systems.

Rationale:
Gold is already working as a premium detail layer. Over-expanding it would weaken restraint and could clash with the sketch-driven monochrome mood.

Alternatives considered:

- Add additional accent colors for differentiation across sections: rejected because the user explicitly wants a monochrome system with gold as the sole accent.

### 5. Treat the hero as the reference environment for the rest of the site

Decision:
Use the portrait card and hero shell as the visual benchmark for later sections: if a surface would feel foreign next to the portrait, it should be refined until it belongs.

Rationale:
The hero illustration is the strongest existing identity signal. The most reliable way to create cohesion is to let it define the rest of the material language.

Alternatives considered:

- Let each section choose its own stylistic interpretation of “editorial”: rejected because it would reintroduce inconsistency.

## Risks / Trade-offs

- [Texture becomes too visible in production] → Mitigation: keep texture low-contrast, layered, and test it behind real content before broad rollout.
- [Refinement stays too subtle and does not solve the cohesion problem] → Mitigation: explicitly adjust both background atmosphere and representative section surfaces instead of only one layer.
- [Overcorrection makes the site feel theatrical] → Mitigation: preserve minimalist layouts, strong spacing, and restrained gold usage throughout.
- [Performance regressions from overly complex backgrounds] → Mitigation: prefer lightweight CSS gradients and subtle overlays over large animated assets or heavy texture images.

## Migration Plan

1. Update `DESIGN.md` to document the sketch-inspired atmospheric direction, palette rules, surface language, and texture usage constraints.
2. Refine `src/styles/globals.css` to introduce the updated page background treatment and any required token additions for charcoal surfaces, layered borders, and restrained texture cues.
3. Apply the new material language to shared UI and representative sections, especially hero-adjacent surfaces and the primary section cards that establish the rest of the site’s tone.
4. Validate the refined system on desktop and mobile to confirm readability, contrast, and whole-site consistency.

Rollback strategy:

- Revert the shared token and representative surface changes together so the background and card system do not drift apart.

## Open Questions

- Should the sketch atmosphere remain entirely CSS-driven, or should the implementation allow for one lightweight static texture asset if CSS-only treatment proves too clean?
