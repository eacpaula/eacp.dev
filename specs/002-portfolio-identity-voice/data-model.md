# Data Model: Portfolio Visual Identity and Content Voice Refinement

## Overview

This feature does not add new backend data. Its data model defines the existing
homepage refinement surfaces, the token and content ownership boundaries, and
the validation rules that keep the new identity distinct, source-backed, and
easy to implement incrementally.

## Entity: Theme Token Set

**Purpose**: Represents the shared visual tokens that control the portfolio's
overall color, surface, border, shadow, and typography mood.

**Fields**:
- `pageBackground`: page-level background composition and atmosphere
- `surface`: primary panel/surface tone
- `surfaceSoft`: secondary surface tone
- `surfaceOverlay`: sticky header and overlay surface tone
- `textStrong`: highest-emphasis text color
- `textBase`: default body text color
- `textMuted`: secondary and helper text color
- `accent`: brand accent tone
- `accentStrong`: stronger action/state accent tone
- `accentSoft`: low-emphasis accent background
- `accentInk`: readable foreground on accent backgrounds
- `border`: default border color
- `borderStrong`: emphasized border color
- `shadowSoft`: shared elevation treatment
- `fontBody`: primary reading stack
- `fontDisplay`: heading and emphasis stack

**Source Mapping**:
- Owned by `src/styles/globals.css`

**Validation Rules**:
- Tokens must move the site away from beige-heavy editorial styling
- Contrast must support readability across primary text and surfaces
- Accent usage must feel intentional and not dominate the interface
- Typography choices must support a more technical, senior-level presentation

## Entity: Section Presentation Surface

**Purpose**: Describes how each homepage section applies tokenized layout,
spacing, background, and hierarchy decisions.

**Fields**:
- `sectionId`: stable section anchor
- `eyebrow`: small label text when present
- `headline`: primary section heading
- `supportingDescription`: short helper copy
- `containerStyle`: section-level layout and outer rhythm
- `surfaceStyle`: card/panel styling if present
- `scanPattern`: how content is grouped for fast review

**Source Mapping**:
- Owned by `src/components/sections/*.tsx`
- Shared heading behavior supported by `src/components/ui/SectionHeading.tsx`

**Validation Rules**:
- Sections must remain visually distinct without fragmenting the overall system
- Spacing must improve rhythm between sections and inside cards
- Heading hierarchy must remain readable on mobile and desktop

## Entity: Voice Content Block

**Purpose**: Represents any visible narrative copy that needs tone review and
rewrite as part of the refinement.

**Fields**:
- `location`: file and section where the copy appears
- `contentType`: headline, summary, description, label, helper text, or CTA
- `sourceText`: existing copy before refinement
- `revisedText`: updated copy
- `voiceMode`: direct professional, neutral impact-oriented, or selective
  first-person
- `sourceRefs`: supporting profile or project context references

**Source Mapping**:
- Primarily `src/content/*.ts`
- Secondary static UI copy in `src/components/sections/*.tsx` and
  `src/components/ui/*.tsx`

**Validation Rules**:
- Revised text must avoid third-person external narration
- Claims must remain grounded in approved source material
- Marketing-heavy, exaggerated, or biography-style phrasing is not allowed

## Entity: Impact Card Hierarchy

**Purpose**: Defines the information structure for engineering impact entries so
they remain easier to scan after refinement.

**Fields**:
- `title`: impact label
- `context`: problem or environment summary
- `contribution`: action summary
- `outcome`: result summary
- `technologies`: supporting technology list
- `emphasisLevel`: featured or standard treatment

**Source Mapping**:
- Content owned by `src/content/achievements.ts`
- Presentation owned by `src/components/sections/EngineeringImpactSection.tsx`

**Validation Rules**:
- Context, contribution, and outcome must remain visually separable
- Technologies must support scanning without overwhelming the card
- Impact cards must stay concise enough for quick review

## Entity: Placeholder Content Preview

**Purpose**: Represents future case study and blog previews that must read as
intentional, not fake completed content.

**Fields**:
- `title`: preview title
- `summary`: future-content framing text
- `status`: explicit upcoming marker
- `themeLabels`: topical tags or related themes
- `intent`: planned deep dive or planned article

**Source Mapping**:
- `src/content/case-studies.ts`
- `src/content/blog-topics.ts`

**Validation Rules**:
- Summaries must clearly describe future content, not present-tense publication
- Topics must remain aligned with approved experience areas
- Status labels must remain visible in UI treatment

## Entity: Verification Surface

**Purpose**: Captures the quality checkpoints required before implementation is
accepted.

**Fields**:
- `tokenReview`: theme alignment against the configured palette
- `identityReview`: check for distinctness from reference sites
- `voiceReview`: check for direct professional tone
- `accessibilityReview`: contrast, focus, semantics, readability
- `responsiveReview`: mobile and desktop scan behavior
- `buildReview`: lint and build success

**Validation Rules**:
- Every implementation pass must cover all review dimensions
- Manual review is required in addition to lint/build validation

## Relationships Summary

- `Theme Token Set` informs every `Section Presentation Surface`
- `Section Presentation Surface` consumes `Voice Content Block` copy and may
  render `Impact Card Hierarchy` or `Placeholder Content Preview` records
- `Voice Content Block` changes must remain grounded in source records from
  `src/content/` and approved profile documents
- `Verification Surface` applies across theme, section, and content changes

## Suggested Local File Mapping

```text
src/
├── styles/globals.css
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
└── content/
    ├── achievements.ts
    ├── blog-topics.ts
    ├── case-studies.ts
    ├── contact.ts
    ├── experience.ts
    ├── profile.ts
    ├── site-metadata.ts
    └── skills.ts
```
