# Data Model: Interactive Skills Visualization

## SkillGroup

- **Description**: A display grouping used by the overview chart and fallback
  content to communicate a coherent technical area such as frontend, backend, or
  testing.
- **Fields**:
  - `id`: stable identifier used for selection and lookups
  - `label`: recruiter-facing group label
  - `description`: optional short summary for headings, tooltips, or fallback
  - `order`: explicit display priority
  - `skillIds`: ordered list of included skill identifiers
  - `totalExperienceWeight`: aggregate numeric value derived from grouped skills
  - `skillCount`: number of included skills
  - `sourceNotes`: optional curation note explaining grouping choices
- **Validation Rules**:
  - Must contain at least one approved skill
  - Must use repository-verified labels only
  - Must not overlap into duplicate display buckets without an explicit curation
    rule
- **Relationships**:
  - Owns many `Skill` records
  - Filters many `CompanyUsage` entries through member skills

## Skill

- **Description**: A verified technical skill derived from the CSV and enriched
  with display and filtering metadata for chart and fallback views.
- **Fields**:
  - `id`: stable identifier
  - `label`: display name
  - `groupId`: parent `SkillGroup`
  - `sourceCategory`: original CSV category
  - `yearsLabel`: original human-readable value such as `8+` or `0.5`
  - `experienceWeight`: normalized numeric value used for chart comparison
  - `usageIds`: ordered list of related `CompanyUsage` identifiers
  - `relatedSkillIds`: optional neighboring skills shown in usage context
  - `order`: explicit position inside the group
  - `sourceRefs`: repository references backing the record
- **Validation Rules**:
  - Must map back to one CSV row or one explicitly justified merged display row
  - Must preserve source wording for visible experience labels
  - Must not imply exact precision beyond what the approved source supports
- **Relationships**:
  - Belongs to one `SkillGroup`
  - Connects to one or more `CompanyUsage` entries where verified

## CompanyUsage

- **Description**: A verified company, client, project, or grouped work context
  used to replace the informational role of the current timeline.
- **Fields**:
  - `id`: stable identifier
  - `name`: display name for company or project
  - `kind`: company, client context, project, or grouped freelance context
  - `periodLabel`: public-safe period text when known
  - `headline`: short work summary shown in the panel
  - `description`: concise verified description of what was done
  - `relatedSkillIds`: approved skills used in that context
  - `relatedTechnologies`: visible technologies supported by repository content
  - `sourceAliases`: raw CSV source labels that map into this record
  - `sourceRefs`: repository references backing the record
  - `priority`: order for default highlight display
  - `isHighlight`: whether the entry appears in the general no-filter summary
- **Validation Rules**:
  - Must be backed by approved repository content
  - Must omit period, technologies, or details when not verifiable
  - Must not split or merge records in ways that create unsupported claims
- **Relationships**:
  - Linked to many `Skill` records
  - May represent one role, one client context, or one safe grouped context

## SkillSelectionState

- **Description**: The local UI state that determines which chart view and usage
  panel content are active.
- **Fields**:
  - `activeGroupId`: selected group identifier or `null` for overview reset
  - `activeSkillId`: selected skill identifier or `null` when no skill is
    active
  - `interactionMode`: desktop chart, mobile simplified, or fallback text mode
  - `hasReducedMotion`: whether reduced-motion behavior is active
- **State Transitions**:
  - `initial default` → first ranked group and first ranked skill selected
  - `group changed` → new group selected and first skill in that group selected
  - `skill changed` → same group retained and usage list filtered
  - `skill cleared` → group retained and usage list broadens to group scope
  - `overview reset` → group and skill cleared and general highlights shown
- **Validation Rules**:
  - Only one group may be active at a time
  - Only one skill may be active at a time
  - `activeSkillId` must belong to `activeGroupId` whenever both are set

## SourceAliasMap

- **Description**: A curation layer that translates raw CSV source labels into
  canonical `CompanyUsage` identifiers.
- **Fields**:
  - `alias`: raw source token from the CSV
  - `usageId`: canonical target
  - `notes`: optional explanation for grouped or renamed contexts
- **Validation Rules**:
  - Every alias used by runtime filtering must map to a verified usage entry
  - Unknown aliases must be ignored or flagged for follow-up rather than guessed

## Derived Views

- **Overview Summary**:
  - Built from `SkillGroup.totalExperienceWeight` and `SkillGroup.skillCount`
  - Drives radial chart ordering, labels, and fallback summaries

- **Group Detail View**:
  - Built from ordered `Skill` records for the active group
  - Drives horizontal bar lengths, selection state, and skill labels

- **Usage Panel View**:
  - Built from `CompanyUsage` records filtered by selection state
  - Supports general highlights, group scope, and skill scope without
    duplicating unsupported detail
