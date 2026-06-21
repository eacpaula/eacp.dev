## Context

The previous hero redesign established a new monochrome editorial identity and introduced a generated portrait asset at `src/assets/hero-editorial-portrait.png`, rendered inside `src/components/sections/HeroSection.tsx`. That image already preserves the core face, hoodie silhouette, and gold merit-badge concept, but it still reads too close to a polished portrait rendering instead of a clearly illustrative identity image.

This refinement is intentionally narrower than the full hero redesign. The goal is not to change the hero information architecture again. The goal is to replace the current hero image with a more visibly illustrated version and update any related hero presentation details that no longer match the refined badge system.

Constraints:

- Preserve the recognizable face and existing hoodie-based honors concept.
- Keep the hero aligned with the current monochrome and gold editorial system.
- Avoid broad UI churn outside the hero asset and directly related copy.
- Keep all imagery suitable for a premium engineering portfolio rather than a playful or generic developer illustration.

## Goals / Non-Goals

**Goals:**

- Make the portrait read more clearly as semi-realistic digital illustration and less like a photoreal portrait.
- Replace the generic current emblems with stitched language-inspired insignias for Node.js, .NET, PHP, Python, Go, and Java.
- Preserve the existing identity, wardrobe, and honors framing already established by the previous hero change.
- Keep the refined asset integrated cleanly with the current hero component and merit-marker treatment.

**Non-Goals:**

- Redesigning the hero layout, copy hierarchy, or CTA composition.
- Reworking the broader top-section palette or Quick Read panel.
- Adding new sections, interactions, or backend behavior.
- Turning the portrait into literal logo collage, mascot art, or hard-edged comic art.

## Decisions

### 1. Refine the current portrait asset rather than redesign the hero structure

Decision:
Treat this as an asset-focused change centered on the hero portrait file and any directly dependent hero description details.

Rationale:
The current issue is the image treatment, not the top-level hero information architecture. Keeping the change narrow avoids unnecessary rework and preserves the validated layout from the previous change.

Alternatives considered:

- Reopen the whole hero redesign: rejected because the request is specifically about the portrait style and insignia content.
- Leave the current asset in place and only relabel the merit markers: rejected because the visual problem would remain unsolved.

### 2. Push the prompt and acceptance criteria toward clearly illustrative rendering

Decision:
The replacement image should explicitly target semi-realistic digital illustration, editorial concept art, hand-drawn energy, stylized shading, light ink treatment, and painterly monochrome rendering while explicitly avoiding photo texture and hyper-real skin detail.

Rationale:
The previous generated image likely drifted toward realism because its prompt preserved identity and polish more strongly than stylization. This refinement corrects that balance.

Alternatives considered:

- Move to flat vector or graphic poster style: rejected because it would likely lose the requested semi-realistic identity signal.
- Keep a realistic render and only add stronger brush texture: rejected because that would still risk a studio-photo impression.

### 3. Use language-inspired stitched badges instead of abstract engineering emblems

Decision:
Replace the generic current insignia set with stitched badge concepts inspired by Node.js, .NET, PHP, Python, Go, and Java, rendered as embroidered honors integrated into the hoodie.

Rationale:
The user wants the portrait to feel technically personal, not generically “engineering.” Language-inspired insignias create a more specific identity signal while still fitting the honors motif.

Alternatives considered:

- Use direct plain logos pasted onto the hoodie: rejected because it would feel less premium and less integrated with the honors aesthetic.
- Keep abstract achievement symbols only: rejected because the user explicitly requested language-inspired stitched insignias.

### 4. Keep the hero component changes minimal

Decision:
Implementation should primarily replace `src/assets/hero-editorial-portrait.png` or update the imported portrait asset path, then adjust hero alt text or supporting references only if needed.

Rationale:
The current hero component already fits the desired layout and surrounding system. Minimizing code changes reduces risk and keeps the change reviewable.

Alternatives considered:

- Introduce a new hero rendering system for badges: rejected because the visual refinement can be handled asset-first.

## Risks / Trade-offs

- [Over-stylization reduces likeness] → Mitigation: keep facial structure, hair shape, beard, and expression as explicit preservation constraints during asset generation.
- [Language-inspired insignias feel like pasted logos] → Mitigation: require stitched, embroidered badge treatment integrated into the hoodie fabric instead of flat logo overlays.
- [Prompt drift reintroduces realism] → Mitigation: explicitly ban photo texture, hyper-real skin, and studio-photo appearance in the refined asset brief.
- [Badge language becomes visually noisy] → Mitigation: keep the palette monochrome-first and gold-only for embroidery details and badge edges.

## Migration Plan

1. Review the current hero asset and its presentation in `HeroSection.tsx`.
2. Generate or otherwise produce a refined replacement portrait asset using the updated visual brief.
3. Replace the current hero portrait asset in `src/assets/`.
4. Update hero alt text or related merit-marker wording only if the current description becomes inaccurate.
5. Validate the result in desktop and mobile hero layouts to confirm the new image still fits the established composition.

Rollback strategy:

- Restore the previous hero portrait asset and any accompanying hero text adjustments.

## Open Questions

- Should the language-inspired insignias read as subtle references to each language logo, or as more literal stitched logo motifs, provided they stay premium and integrated?
