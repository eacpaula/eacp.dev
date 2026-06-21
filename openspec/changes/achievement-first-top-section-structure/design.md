## Context

The current top-of-page experience is split across `HeroSection.tsx`,
`ProfessionalSummarySection.tsx`, and `EngineeringImpactSection.tsx`, with
content inputs coming from `src/content/profile.ts` and
`src/content/achievements.ts`. Today, the summary section and the impact
section both talk about the same core strengths, while the summary area already
contains the more card-driven visual treatment the user prefers for proof.

The problem is no longer “how do we create a separate proof layer?” The real
problem is that proof is split between two adjacent sections. The user wants
one concise hero summary and then one unified impact section that uses multiple
cards like the current summary-card treatment.

Constraints:

- Keep claims source-backed by approved profile references.
- Preserve the current static React architecture and stay within the existing
  top-of-page section model unless a small structural change materially improves
  scan behavior.
- Keep the tone direct, professional, and evidence-driven.
- Prepare the content model for future achievement-linked posts or case-study
  style writeups without requiring those pages to exist immediately.

Stakeholders:

- Recruiters and hiring managers scanning the first screen quickly
- Technical reviewers looking for concrete proof rather than self-description
- The portfolio owner, who wants clearer separation between positioning and
  evidence

## Goals / Non-Goals

**Goals:**

- Keep one short positioning summary in the hero.
- Remove the standalone summary section below the hero.
- Consolidate summary-card proof and impact content into one unified impact
  section.
- Define what a strong recruiter-facing impact card should contain, including
  metric emphasis and short explanatory framing.
- Prepare the impact cards for future detailed posts or case-study-style pages
  without needing a second top-level proof section.

**Non-Goals:**

- Redesigning the whole portfolio information architecture.
- Replacing approved source content with invented or inflated claims.
- Committing to a specific routing or CMS design for future detailed posts.
- Expanding the top section into a long-form narrative or biography area.

## Decisions

### 1. Treat the top section as a two-layer scan: hero identity, then unified impact

Decision:
Structure the top section conceptually as:
1. Hero for identity and one compact positioning summary
2. One unified impact section directly below it for fast proof

Rationale:
This matches the user's actual intent more closely than the previous “proof
layer plus separate depth layer” interpretation. The hero answers who Evandro
is, and the next section immediately proves it without another intermediate
summary surface.

Alternatives considered:

- Keep the current summary-plus-impact sequence and just tighten copy: rejected
  because the overlap would remain architectural.
- Keep a separate proof layer and a separate impact/depth layer: rejected
  because that still preserves two adjacent sections about the same themes.

### 2. Remove the standalone summary section and absorb its strongest card patterns into impact

Decision:
Do not keep `ProfessionalSummarySection.tsx` as a separate narrative or hybrid
summary surface. Instead, reuse its strongest card-style patterns as the basis
for the unified impact section.

Rationale:
The current summary section already contains the visual card direction the user
prefers. The problem is the section’s role, not the existence of cards.

Alternatives considered:

- Keep the summary section and only rename it: rejected because it would still
  feel like a separate section competing with impact.
- Remove the card treatment entirely and move back to text blocks: rejected
  because the user explicitly wants multiple cards as the proof format.

### 3. Make impact cards the main proof format

Decision:
Use multiple impact cards as the main proof surface below the hero. Each card
should lead with a metric, outcome, or achievement signal, then add just enough
supporting text to explain why it matters.

Rationale:
This keeps the page concise while letting proof stay visual, fast to scan, and
aligned with the existing card treatment the user referenced.

Alternatives considered:

- Keep long context/contribution/outcome cards immediately below the hero:
  rejected because that becomes too text-heavy for the first scan.
- Use only a row of bare numbers: rejected because metrics without context can
  read as empty vanity stats.

### 4. Future detail belongs behind impact cards, not in another top-level summary/impact split

Decision:
Design the impact content model so each card can later map to a post, case
study, or detailed writeup. The top section only needs a compact card payload
now, while deeper explanation can live off-card in future destinations.

Rationale:
This gives the page one clear proof surface now while keeping future depth
available when the user writes those detailed posts.

Alternatives considered:

- Hardcode cards as presentation-only strings: rejected because it makes future
  deep-link expansion harder.
- Keep a second on-page depth section immediately after the cards: rejected
  because it recreates the same duplication under a different label.

## Risks / Trade-offs

- [Too much compression removes useful nuance] → Mitigation: keep one concise
  qualifier per impact card so the proof remains interpretable.
- [Metric-first cards become vanity statistics] → Mitigation: require every
  visible metric to carry a credible outcome label and approved source backing.
- [Removing the summary section creates abrupt transition] → Mitigation: keep a
  short hero summary so the cards still have framing.
- [Future detail has no place on-page] → Mitigation: treat detailed posts or
  case studies as the next destination rather than forcing another adjacent
  section now.

## Migration Plan

1. Audit the current hero, summary, and impact content to identify what stays
   in the hero and what moves into the unified impact cards.
2. Update the source content model so the hero owns concise positioning while
   the impact section owns the top proof cards.
3. Remove or repurpose `ProfessionalSummarySection.tsx` so it no longer exists
   as a standalone summary section.
4. Refactor `EngineeringImpactSection.tsx` into the unified impact-card surface
   using the preferred card treatment.
5. Validate that the resulting structure improves first-scan clarity and keeps
   future impact-detail expansion possible through linked destinations.

Rollback strategy:

- Revert the top-section content-model and section-structure changes together so
  the current summary-plus-impact flow is restored consistently.

## Open Questions

- Should the future detailed achievement destinations live as blog posts, case
  studies, or a hybrid model?
- How many impact cards should appear in the first unified section before the
  page starts feeling crowded?
- Should one impact card be visually featured, or should all top proof points
  carry equal weight?
