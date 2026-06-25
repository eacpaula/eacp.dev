# Contract: Skills Explorer Data

## Purpose

Define the approved runtime data shape and curation rules for the interactive
Skills explorer.

## Approved Inputs

- `docs/profile/evandro-skills.csv` as the primary skills inventory
- `docs/profile/evandro-source-of-true.md` for verified company, role, period,
  and skill-context wording
- `docs/profile/evandro-resume-summary.md` for verified summary-level alignment
- Existing public portfolio content when it does not conflict with the approved
  profile documents

## Required Runtime Outputs

- Ordered `SkillGroup` records with stable ids, labels, and aggregate weights
- Ordered `Skill` records with normalized comparison weights and preserved
  source-friendly experience labels
- Canonical `CompanyUsage` records with verified names, descriptions, periods,
  related skills, and source references
- Alias mapping from CSV `experience_sources` tokens to canonical usage entries

## Curation Rules

- Runtime data must live in typed source files, not inside chart components.
- The CSV remains the editorial source of truth for the visible skill list.
- Group labels may be curated for recruiter readability, but the included skills
  must remain grounded in approved data.
- Experience weights may normalize values like `12+`, `8+`, or `0.5`, but
  visible labels must not overstate precision beyond the source text.
- Usage entries may split current public experience content into more specific
  canonical records such as `Acuity Brands` and `MDFCommerce` when verified by
  repository documents.
- Grouped contexts such as freelancer work may appear only when a safe,
  repository-backed grouped description exists.

## Missing Data Behavior

- If a skill has approved CSV presence but no sufficiently verified usage
  context, the skill may still appear in charts.
- When a filtered skill or group lacks verified usage detail, the usage panel
  must show a grounded message instead of guessed companies, projects, or
  descriptions.
- Unknown CSV aliases must be omitted from filtering results until curated.

## Validation

- Every visible skill maps to an approved source row.
- Every visible usage entry maps to one or more repository references.
- No runtime data file introduces unsupported companies, projects, durations, or
  claims.
- Group totals and counts can be recalculated from the underlying skill set
  without hidden manual math.
