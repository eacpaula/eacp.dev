# Data Model: Senior Full Stack Engineer Portfolio MVP

## Overview

The MVP uses local structured content files as the authoritative public content layer. The data model is intentionally small, typed, and static-first. Each entity exists to support a visible section of the public homepage or a future-compatible extension point.

## Entity: Site Metadata

**Purpose**: Defines SEO-facing and site-wide metadata used by the homepage shell.

**Fields**:
- `title`: public page title
- `description`: recruiter-facing meta description
- `canonicalUrl`: deployed site URL
- `socialImage`: optional static preview asset path
- `navItems`: ordered navigation targets for in-page sections

**Validation Rules**:
- `title` must clearly identify Evandro and senior full stack positioning
- `description` must stay concise and avoid unsupported claims
- `navItems` must match real section identifiers used in the page

## Entity: Profile

**Purpose**: Represents Evandro’s core public professional positioning.

**Fields**:
- `name`: full public name
- `headline`: senior-level homepage headline
- `subheadline`: concise supporting positioning statement
- `locationLabel`: optional broad location label if shown publicly
- `summary`: recruiter-friendly professional summary
- `yearsLabel`: summary expression such as "11+ years" or "around 12 years"
- `availabilityNote`: brief opportunity positioning for contact section
- `primaryLinks`: ordered set of primary actions

**Relationships**:
- Referenced by Hero section
- Referenced by Professional Summary section
- Referenced by Contact section

**Validation Rules**:
- `headline`, `subheadline`, and `summary` must be sourced from approved profile context
- `primaryLinks` must only include links intended for public use
- `availabilityNote` must remain professional and opportunity-focused

## Entity: Primary Link

**Purpose**: Describes one recruiter-facing action such as resume, contact, GitHub, or LinkedIn.

**Fields**:
- `label`: action text
- `href`: destination URL or route
- `kind`: internal, external, email, or asset
- `prominence`: primary or secondary

**Validation Rules**:
- `label` must be clear and action-oriented
- `href` must resolve in the deployed site

## Entity: Achievement

**Purpose**: Represents one engineering impact item in the MVP.

**Fields**:
- `id`: stable identifier
- `title`: short accomplishment label
- `context`: business or technical problem statement
- `contribution`: Evandro’s action or role
- `impact`: measurable or concrete outcome
- `technologies`: related technology labels
- `sourceRefs`: internal notes to approved source material
- `featured`: whether the item appears in the main impact section

**Relationships**:
- Displayed in Engineering Impact section
- May inform future case studies

**Validation Rules**:
- Each item must contain all four narrative fields: `context`, `contribution`, `impact`, `technologies`
- `impact` must not overstate results beyond approved source files
- `sourceRefs` must map to at least one approved content source

## Entity: Skill Group

**Purpose**: Organizes scannable technical capabilities by category.

**Fields**:
- `category`: public section label
- `skills`: ordered list of skill entries
- `priorityNote`: optional label for visual emphasis

**Validation Rules**:
- `category` must map to one of the MVP-approved groups
- ordering should prioritize the most relevant senior-profile skills first

## Entity: Skill Entry

**Purpose**: Represents one public skill item sourced from the local skills dataset.

**Fields**:
- `name`: public skill label
- `category`: original or mapped category
- `emphasis`: core, supporting, or secondary
- `yearsLabel`: optional compact experience label
- `sourceRefs`: internal notes to source dataset rows

**Validation Rules**:
- `name` must exist in the approved skills source
- `yearsLabel` must remain compact and non-noisy if displayed
- `emphasis` must reflect recruiter relevance, not exaggeration

## Entity: Experience Item

**Purpose**: Summarizes one role or employer context in the experience overview.

**Fields**:
- `id`: stable identifier
- `organization`: company or context label
- `context`: supporting context such as product or client environment
- `role`: public role label
- `period`: date range label
- `contributions`: concise list of main contributions
- `technologies`: supporting technology labels
- `impact`: concise business or engineering outcome

**Relationships**:
- Displayed in Experience Overview section
- Can be referenced by achievements and case studies

**Validation Rules**:
- Each item must be concise and not duplicate the resume wholesale
- `organization`, `role`, and `period` must be source-backed
- `impact` should describe real outcomes only

## Entity: Case Study Preview

**Purpose**: Represents a future detailed engineering writeup advertised in the MVP.

**Fields**:
- `slug`: stable future identifier
- `title`: case study title
- `summary`: short preview description
- `status`: upcoming or placeholder
- `relatedThemes`: supporting topic labels

**Validation Rules**:
- `status` must clearly indicate the content is not published yet
- `summary` must be credible and aligned with source-backed experience

## Entity: Blog Topic Preview

**Purpose**: Represents a future blog article topic shown in the placeholder section.

**Fields**:
- `slug`: stable future identifier
- `title`: topic title
- `summary`: concise topic description
- `status`: upcoming or placeholder
- `origin`: local-placeholder or future-remote

**Validation Rules**:
- Topics must align with Evandro’s real experience or approved AI workflow themes
- `origin` should support later migration to a remote content source

## Entity: Contact Method

**Purpose**: Represents a public follow-up channel.

**Fields**:
- `label`: public action label
- `href`: contact destination
- `kind`: email, profile, or asset
- `description`: optional short reason to click

**Validation Rules**:
- only professional public contact methods are allowed
- `href` must be valid at deploy time

## Relationships Summary

- `Profile` owns `Primary Link` items
- `Profile`, `Achievement`, `Skill Group`, `Experience Item`, `Case Study Preview`, `Blog Topic Preview`, and `Contact Method` feed the single-page homepage
- `Achievement` items may reference one or more `Experience Item` contexts
- `Case Study Preview` items may be derived from `Achievement` and `Experience Item` data
- `Blog Topic Preview` items remain independent but should map to the same themes

## Suggested Local File Mapping

```text
src/content/
├── site-metadata.ts
├── profile.ts
├── achievements.ts
├── skills.ts
├── experience.ts
├── case-studies.ts
├── blog-topics.ts
└── contact.ts
```
