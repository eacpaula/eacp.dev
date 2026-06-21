## Context

The current homepage hero content is split between `src/content/profile.ts`,
`src/components/sections/HeroSection.tsx`, and
`src/components/sections/ProfessionalSummarySection.tsx`. Today,
`achievementEmblems` is populated with decorative language and runtime badges
(`Node.js`, `.NET`, `PHP`, `Python`, `Go`, `Java`) whose labels, metrics, and
descriptions describe stitched motifs rather than real achievements.

That model conflicts with the stronger source-backed profile now documented in
`docs/profile/evandro-source-of-true.md`, especially the `Executive Summary`
and `Selected Achievements` sections. The current hero subheadline and summary
also undersell the intended market positioning, and the summary treatment does
not match the requested right-aligned editorial direction.

Constraints:

- Keep all public claims traceable to repository source files.
- Preserve the current React content model unless a small type update makes the
  new achievement representation clearer.
- Keep the first-screen experience concise and recruiter-readable.
- Do not treat `Applied AI Engineer` as a supported headline unless the final
  copy can be justified against approved source material.

## Goals / Non-Goals

**Goals:**

- Rebase hero achievement content on the approved achievements in
  `docs/profile/evandro-source-of-true.md`.
- Update the hero subheadline to better reflect the intended LinkedIn-style
  positioning while staying source-backed and technically credible.
- Revise the summary copy and layout so the summary reads in the same direction
  as the source-of-truth profile and is right-aligned where requested.
- Keep the implementation localized to the existing content and top-section
  components.

**Non-Goals:**

- Rewriting unrelated sections such as skills, timeline, case studies, or
  contact.
- Introducing a new CMS, schema store, or dynamic content pipeline.
- Expanding the portfolio into a broader AI-focused narrative without clearer
  supporting source material.

## Decisions

### 1. Treat `docs/profile/evandro-source-of-true.md` as the governing content reference for the hero refresh

Decision:
Use the `Executive Summary` and `Selected Achievements` sections in
`docs/profile/evandro-source-of-true.md` as the primary source for the new hero
copy and achievement items.

Rationale:
This file is already the strongest recruiter-facing synthesis in the repository
and is explicitly framed as source material for LinkedIn and public-profile
outputs.

Alternatives considered:

- Keep using `src/content/achievements.ts` as the main source: rejected because
  the user explicitly requested alignment to `evandro-source-of-true.md`.
- Synthesize new achievement copy from multiple files: rejected because it adds
  more interpretation risk than this change needs.

### 2. Redefine `achievementEmblems` as achievement-backed content, not decorative stack motifs

Decision:
Preserve the `achievementEmblems` slot in the profile model, but change its
contents so each emblem represents a real achievement theme or measurable
outcome rather than a programming-language insignia.

Rationale:
This keeps the component contract small while aligning the UI with evidence the
hero can defend. The same structure can still render compact badge-like UI in
the hero.

Alternatives considered:

- Rename the field and refactor every consumer immediately: rejected because
  the current ask is content and behavior alignment, not a broad domain-model
  rewrite.
- Keep the decorative badges and only change the summary text: rejected because
  the hero would still contradict the requested source-backed direction.

### 3. Use a LinkedIn-style subheadline pattern with evidence-based guardrails

Decision:
Update the subheadline toward a terse role-and-stack pattern inspired by the
user's LinkedIn phrasing, while constraining final wording to supported claims
such as software engineering, full stack delivery, Node.js, React.js, .NET,
AWS, and Azure.

Rationale:
The current sentence reads well but is less scannable than the requested
professional headline style. A compact positioning line better matches the
user's intent and recruiter behavior.

Alternatives considered:

- Reuse the exact LinkedIn string verbatim: rejected for now because
  `Applied AI Engineer` may overstate the documented AI depth.
- Keep the current prose subheadline: rejected because it does not satisfy the
  user's requested positioning update.

### 4. Apply the requested summary alignment in layout, not only text copy

Decision:
Update the hero summary treatment so the supporting summary block becomes
right-aligned in the hero composition, matching the requested editorial
direction instead of only rewriting the sentence itself.

Rationale:
The user asked for alignment to change, not just wording. Encoding this in the
design keeps implementation from stopping at copy updates.

Alternatives considered:

- Adjust only the summary text: rejected because it would ignore the layout
  change request.
- Right-align the entire hero copy stack: rejected because name, role, and CTAs
  are likely more readable if only the supporting summary treatment shifts.

## Risks / Trade-offs

- [AI positioning may be under-supported] → Mitigation: treat `Applied AI
  Engineer` as an implementation-time validation point and soften or remove it
  if the approved source material cannot defend it.
- [Achievement cards may become too text-heavy] → Mitigation: keep each emblem
  short, metric-led, and tied to one identifiable achievement theme.
- [Right alignment could hurt mobile readability] → Mitigation: scope
  right-aligned treatment primarily to larger breakpoints and preserve a clear
  mobile reading flow.
- [Keeping the existing field name may blur meaning] → Mitigation: document in
  code comments or type descriptions that `achievementEmblems` now represents
  achievement badges rather than decorative stack insignias.
