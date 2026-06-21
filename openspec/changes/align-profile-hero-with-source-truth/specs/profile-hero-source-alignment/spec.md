## ADDED Requirements

### Requirement: Source-backed achievement emblems
The system MUST redefine the homepage `achievementEmblems` content so each item
represents a real achievement, outcome, or engineering-strength signal backed
by `docs/profile/evandro-source-of-true.md`. The system MUST NOT present the
current decorative programming-language motif entries as the public
`achievementEmblems` content.

#### Scenario: Hero achievements use approved source material
- **WHEN** the homepage hero renders achievement emblems
- **THEN** each emblem label, metric, and supporting description maps to an
  approved achievement or positioning signal in `docs/profile/evandro-source-of-true.md`

#### Scenario: Decorative stack motifs are removed from the public hero content
- **WHEN** a visitor scans the hero emblem area
- **THEN** they do not see the current stitched-motif entries for `Node.js`,
  `.NET`, `PHP`, `Python`, `Go`, or `Java` presented as the achievement set

### Requirement: Source-aligned hero positioning copy
The system MUST update the hero subheadline and supporting summary so they align
with the professional positioning documented in
`docs/profile/evandro-source-of-true.md` and the user's requested LinkedIn-style
direction. The system MUST keep the copy concise, first-person or direct in
tone, and limited to claims supported by repository source material.

#### Scenario: Subheadline reflects intended market positioning
- **WHEN** a recruiter reads the hero subheadline
- **THEN** the line communicates software-engineering and full-stack
  positioning with concise technology and platform signals rather than a long
  descriptive sentence

#### Scenario: Unsupported positioning is not introduced
- **WHEN** the hero copy is updated
- **THEN** any claim such as `Applied AI Engineer` appears only if it is
  defensible from approved repository source material, otherwise the wording is
  softened or omitted

### Requirement: Right-aligned hero summary treatment
The system MUST adjust the hero summary presentation so the supporting summary
block follows the requested right-aligned editorial treatment while preserving
readability and responsive behavior.

#### Scenario: Summary alignment changes on larger layouts
- **WHEN** the homepage is viewed on a layout with enough horizontal space
- **THEN** the supporting summary block is visually right-aligned relative to
  its hero content area

#### Scenario: Mobile reading flow remains clear
- **WHEN** the homepage is viewed on a narrow screen
- **THEN** the summary remains easy to read without awkward clipping, overflow,
  or degraded scan order
