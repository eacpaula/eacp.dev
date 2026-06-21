## Context

The current homepage top section is split across `HeroSection.tsx`, `ProfessionalSummarySection.tsx`, and the first metric-heavy surfaces in `EngineeringImpactSection.tsx`. The hero currently over-communicates through metadata chips, a large seniority label, an oversized name treatment, and a quick-read block that reads more like a secondary card than a distinctive identity surface.

The existing shared style layer in `src/styles/globals.css` and `DESIGN.md` is dark-mode-first but still depends on blue and green accents that do not match the requested black, white, gray, and gold direction. This change therefore needs both a top-section redesign and a reusable visual system adjustment that can scale across the portfolio without fragmenting section styles.

Constraints:

- Keep the portfolio static-first, React-based, and Tailwind-driven.
- Keep all public claims source-backed by repository content.
- Preserve recruiter scan speed and accessibility.
- Avoid third-person or inflated marketing language.
- Keep the redesign extensible to the rest of the site.

Stakeholders:

- Recruiters and hiring managers scanning the first screen quickly
- Technical reviewers looking for concrete engineering signal
- The portfolio owner, who needs a more memorable but still professional identity

## Goals / Non-Goals

**Goals:**

- Simplify the hero information architecture around name, role, short summary, and core actions.
- Introduce a distinctive illustration-led identity without turning the hero into an art-first splash page.
- Redesign the Quick Read panel into an editorial facts surface that improves scan behavior.
- Replace the current accent logic with a grayscale foundation and restrained gold emphasis.
- Define reusable surface, border, badge, and highlight patterns that can extend to other sections.
- Keep all achievement symbolism tied to real, source-backed profile evidence.

**Non-Goals:**

- Redesigning every section in this change; the objective is to define the direction and implement the top-of-page surfaces first.
- Adding new pages, routing, backend behavior, or CMS integrations.
- Introducing unsupported achievements, titles, or biography-heavy storytelling.
- Creating a colorful branding system or a soft consumer-app visual language.
- Depending on a fully realistic portrait treatment.

## Decisions

### 1. Recompose the top of the homepage as one identity system across multiple existing sections

Decision:
Treat the hero, Quick Read panel, and top metrics as one coordinated identity layer even if implementation still spans `HeroSection.tsx`, `ProfessionalSummarySection.tsx`, and `EngineeringImpactSection.tsx`.

Rationale:
The current issue is not isolated to one card. The information hierarchy, quick facts, and metric tone currently compete with each other. Designing them as one system prevents a new hero from clashing with the next surface.

Alternatives considered:

- Redesign only `HeroSection.tsx`: rejected because the current quick-read and summary surfaces would still feel like a different product.
- Collapse all top content into one giant hero component: rejected because it would increase component complexity and reduce reuse options for later sections.

### 2. Reduce headline weight and move identity emphasis into composition rather than font scale

Decision:
Use the full name exactly as requested, place `Full Stack Engineer` once below it, shorten supporting copy, remove the metadata badges, and reduce the name's visual dominance. Distinctiveness comes from composition, illustration, and disciplined detail rather than oversized typography.

Rationale:
The current hero is visually heavy because every signal is treated as primary. The redesign makes the top scan path linear: illustration, name, role, short summary, actions, quick facts.

Alternatives considered:

- Keep the large-name treatment and only remove badges: rejected because the hierarchy would still feel self-promotional and dense.
- Keep the senior title for authority: rejected because the request explicitly removes it and the profile can signal strength through evidence instead.

### 3. Use an illustrated achievement-symbolism layer instead of generic decoration

Decision:
Add a stylized concept-art portrait surface with hoodie/sweatshirt clothing, military-inspired visual symbolism, and gold merit emblems mapped to real achievements. Support the illustration with adjacent legend or caption logic if needed so the emblem meanings stay explicit.

Rationale:
This creates a memorable identity without relying on startup-style gradients or generic developer imagery. The symbolism also converts career facts into a visual motif that can recur elsewhere as badges, stamps, or section markers.

Alternatives considered:

- Use a normal headshot: rejected because it does not establish the requested distinctive identity.
- Use abstract geometric artwork only: rejected because the request explicitly wants Evandro's recognizable facial features preserved.

### 4. Replace blue/green accent usage with a grayscale-plus-gold token system

Decision:
Update the shared token layer and `DESIGN.md` guidance so the default presentation uses black, white, and gray surfaces with gold reserved for emphasis roles such as emblems, CTA highlights, key borders, dividers, and selection details.

Rationale:
The current accent palette communicates a deployment-dashboard tone. The requested redesign shifts the portfolio toward a sharper editorial identity while staying technical and restrained.

Alternatives considered:

- Keep blue and add gold on top: rejected because it would dilute the new direction and reintroduce palette noise.
- Use gold broadly across all surfaces: rejected because it would weaken restraint and make the site feel ornamental instead of professional.

### 5. Model the Quick Read panel after editorial print structure, not literal novelty styling

Decision:
Structure the Quick Read surface like an editorial card with clear heading hierarchy, thin dividers, bullet facts, and small note-like cues, while keeping spacing, contrast, and responsive behavior modern. The metrics remain compact cards but inherit subtle print-inspired details such as rule lines, label styling, and tonal paper-like contrast.

Rationale:
The user wants an old-newspaper direction, but the portfolio still needs to read like a serious engineering site. The implementation should borrow structure and rhythm from editorial print without introducing gimmicks.

Alternatives considered:

- Make the panel heavily decorative with textures and distressed effects: rejected because it would hurt readability and professionalism.
- Keep the current quick-read card and only rename it: rejected because it does not solve the differentiation problem.

### 6. Scale the new direction through reusable primitives instead of one-off section styling

Decision:
Implement the redesign through shared tokens and repeatable surface patterns: hero illustration frame, editorial panel, metric card variant, emblem/badge motif, gold-accent CTA variant, section divider logic, and monochrome content cards.

Rationale:
The rest of the site already relies on repeated component patterns. If the new direction is encoded only in one section, future pages or sections will drift immediately.

Alternatives considered:

- Hardcode the redesign only in the hero: rejected because it would not satisfy the requirement to define a scalable visual concept.

## Risks / Trade-offs

- [Illustration quality risk] → Mitigation: treat the illustration as a defined asset brief with explicit requirements for likeness, grayscale rendering, hoodie silhouette, and emblem meanings before implementation finalization.
- [Gold overuse risk] → Mitigation: restrict gold to a small token set for emphasis roles rather than background fills across large surfaces.
- [Editorial styling harms readability] → Mitigation: keep strong contrast, modern spacing, and clear type sizes; use newspaper influence as structure, not decoration.
- [Conflict with current design-token work] → Mitigation: update `DESIGN.md` and shared token definitions as part of the same implementation sequence so the source of truth matches the shipped UI.
- [Unsupported achievement symbolism] → Mitigation: only map emblems to facts already present in `src/content/` and `docs/profile/`.

## Migration Plan

1. Update the design source of truth (`DESIGN.md` and the shared token layer in `src/styles/`) to define grayscale and gold roles.
2. Update `src/content/profile.ts` so the displayed name, role, summary, and quick-read facts match the new content rules.
3. Refactor `HeroSection.tsx` into the new illustration-first composition and CTA hierarchy.
4. Redesign `ProfessionalSummarySection.tsx` to become the editorial Quick Read surface or move that responsibility into the hero-adjacent structure if implementation proves cleaner.
5. Adjust `EngineeringImpactSection.tsx` metric and card cues so the top achievement surfaces visually align with the new direction.
6. Validate desktop/mobile hierarchy, contrast, and action clarity.

Rollback strategy:

- Revert token changes and top-section component changes together. The redesign should be implemented in a small, isolated set of content and section files so rollback is straightforward.

## Open Questions

- Which approved portrait reference image should be used to guide likeness for the illustration asset?
- Should the emblem meanings be shown through visible labels, a compact legend, hover/focus affordances, or a hybrid treatment?

## Acceptance Criteria Summary

- The hero displays `Evandro Antônio da Costa de Paula` with `Full Stack Engineer` shown once directly below.
- The top metadata badges for location, years of experience, and fluent English are removed.
- The hero summary is shorter and the CTAs still include Resume, Contact, GitHub, and LinkedIn.
- The left-side illustration is grayscale, stylized, hoodie-based, military-symbolism-inspired, and uses gold achievement emblems tied to real profile facts.
- The Quick Read panel uses a readable editorial card structure with highlighted bullet facts.
- The supporting metrics remain modern cards with subtle newspaper styling cues.
- The shared visual system is predominantly black, white, and gray with restrained gold accents.
- The redesign documentation clearly explains how the style extends to the remaining sections of the site.
