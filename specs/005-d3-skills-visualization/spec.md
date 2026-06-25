# Feature Specification: Interactive Skills Visualization

**Feature Branch**: `005-d3-skills-visualization`

**Created**: 2026-06-23

**Status**: Draft

**Input**: User description: "Create a new feature specification for replacing the current Skills and Timeline sections with an interactive D3.js-based skills visualization."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Explore Skill Strength by Group (Priority: P1)

As a recruiter or hiring manager reviewing the portfolio, I need one clear
skills section that summarizes Evandro's technical depth by group and lets me
drill into a chosen area so I can understand both breadth and depth without
reading long static lists.

**Why this priority**: The main value of the feature is making technical
strength easier to scan and compare than the current separate sections do.

**Independent Test**: Open the Skills section, review the initial overview,
select one skill group, and confirm the section reveals the skills within that
group without requiring any other page section to change.

**Acceptance Scenarios**:

1. **Given** a visitor opens the Skills section for the first time, **When**
   they view the initial state, **Then** they see a high-level overview of
   skill groups that communicates both group breadth and relative depth.
2. **Given** a visitor selects a skill group from the overview, **When** the
   section moves to the group detail state, **Then** it shows only the skills
   within that group and clears any previous skill-level selection.

---

### User Story 2 - Connect Skills to Real Experience (Priority: P2)

As a recruiter or technical lead, I need the selected group or skill to reveal
the related company and project context so I can understand where the claimed
skills were actually used.

**Why this priority**: Replacing the timeline only works if the new section
preserves credible professional context instead of becoming a decorative chart.

**Independent Test**: Select a group, then select a skill inside that group,
and confirm the experience list narrows to verified company or project entries
that match the current selection.

**Acceptance Scenarios**:

1. **Given** no group is selected, **When** a visitor reaches the experience
   area inside the Skills section, **Then** they see a general set of verified
   career highlights rather than an empty state.
2. **Given** a visitor selects a group or skill, **When** the experience area
   updates, **Then** it shows only the verified company or project entries
   related to that current selection, including context and related skills when
   available.

---

### User Story 3 - Access the Same Information Without Chart Reliance (Priority: P3)

As a visitor using keyboard navigation, reduced motion, or a small mobile
screen, I need the same skills and experience information to remain available
through clear text-based structure so I can use the section without depending on
complex chart interaction.

**Why this priority**: The feature must remain recruiter-friendly,
accessibility-conscious, and usable across devices even if the visual chart is
simplified or less practical in some contexts.

**Independent Test**: Navigate the section with keyboard-only input and on a
mobile-sized viewport, then confirm the visitor can still review groups, choose
skills, and read the related experience content through visible controls and
text-based content.

**Acceptance Scenarios**:

1. **Given** a visitor cannot or does not use pointer-based chart interaction,
   **When** they navigate the section through keyboard or text controls, **Then**
   they can reach the same group and skill information available in the chart
   views.
2. **Given** a visitor prefers reduced motion or uses a small-screen device,
   **When** they use the section, **Then** the content remains readable and the
   interaction model avoids relying on dense or distracting animation.

### Edge Cases

- What happens when approved source data lists a skill but does not include a
  precise experience duration?
- How does the section behave when a selected skill maps to only one verified
  company or project entry?
- What happens when a display group contains many skills and labels would become
  crowded in the overview?
- How does the section respond when a visitor changes from one group to another
  after already selecting a skill?
- What happens on mobile or reduced-motion contexts where the full overview
  interaction is less practical?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST replace the current separate Skills section and
  Experience Timeline section with one unified section titled `Skills`.
- **FR-002**: The system MUST present an initial overview state that summarizes
  Evandro's skills by display group and communicates both the breadth of each
  group and its relative experience weight.
- **FR-003**: The system MUST allow a visitor to select exactly one skill group
  at a time from the overview state.
- **FR-004**: The system MUST present a group-detail state that lists only the
  skills belonging to the selected group and shows their relative experience in
  a comparable way.
- **FR-005**: The system MUST allow a visitor to select exactly one skill at a
  time within the selected group.
- **FR-006**: The system MUST update the experience content inside the Skills
  section based on the current selection state using these rules:
  no group selected shows general verified highlights; group selected shows
  verified entries related to that group; skill selected shows only verified
  entries related to that skill.
- **FR-007**: The system MUST allow a visitor to clear a selected skill without
  losing the current group context.
- **FR-008**: The system MUST allow a visitor to return from the group-detail
  state to the overview state.
- **FR-009**: Selecting a new group MUST clear any previously selected skill.
- **FR-010**: The system MUST preserve the informational value of the current
  timeline by showing company or project name, period when available, a short
  description of the work performed, and related skills used in that context.
- **FR-011**: The system MUST derive displayed skills from
  `docs/profile/evandro-skills.csv` and MAY supplement company or project
  context only from verified profile content already stored in the repository.
- **FR-012**: The system MUST NOT invent unsupported skills, companies,
  projects, experience durations, or professional claims, and MUST omit unknown
  details instead of guessing.
- **FR-013**: The system MUST use explicit, reviewable grouping and ordering
  rules so that display groups, labels, priorities, and experience associations
  remain consistent with approved profile data.
- **FR-014**: The system MUST preserve the existing portfolio visual identity by
  using a high-contrast black, white, gray, and restrained gold presentation
  with a professional editorial feel.
- **FR-015**: The system MUST make selection state clear through more than color
  alone, including visible labels, focus treatment, or other explicit state
  indicators.
- **FR-016**: The system MUST provide a text-based fallback or complementary
  structure that exposes the same approved skills and related experience content
  without requiring chart interpretation.
- **FR-017**: The system MUST support keyboard access for practical selection
  actions and provide visible focus states for interactive controls.
- **FR-018**: The system MUST respect reduced-motion preferences by minimizing
  non-essential motion while preserving state changes and readability.
- **FR-019**: The system MUST remain usable across desktop, tablet, and mobile
  layouts, and MAY simplify the visual interaction pattern on smaller screens as
  long as the same approved information remains accessible.
- **FR-020**: The system MUST keep chart behavior purposeful and restrained and
  MUST NOT introduce decorative visual treatments that obscure the skills data.
- **FR-021**: The system MUST keep the rest of the page stable when group or
  skill selection changes, updating only the content inside the Skills section.
- **FR-022**: The system MUST complete without breaking the existing site build
  and navigation flow.

### Key Entities *(include if feature involves data)*

- **Skill Group**: A display grouping that collects related technical skills
  into one overview category and defines the order, label, and relative summary
  shown to visitors.
- **Skill Record**: A verified skill entry derived from approved profile data
  that includes display name, source category, relative experience value or
  weight, and the approved experience sources tied to that skill.
- **Experience Entry**: A verified company or project context that describes
  where one or more skills were used, including organization or project name,
  period when known, concise work summary, and related skills.
- **Selection State**: The current combination of overview, selected group, and
  selected skill that determines which chart view and which experience entries
  are visible.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A visitor can move from the initial skills overview to a
  skill-specific experience view in no more than three deliberate selections.
- **SC-002**: Every group and skill shown in the visual experience uses only
  approved repository data, with zero unsupported companies, projects, skills,
  or fabricated experience claims displayed.
- **SC-003**: The unified Skills section fully replaces the previous two-section
  flow while still exposing verified professional context for all featured
  groups through the in-section experience content.
- **SC-004**: Keyboard-only and reduced-motion users can access the same group,
  skill, and experience information as pointer users through visible controls
  and text-based content.
- **SC-005**: On desktop, tablet, and mobile review, the section remains
  readable at default zoom without requiring hover-only interaction to access
  core information.

## Assumptions

- `docs/profile/evandro-skills.csv` is the primary approved inventory of skills
- Additional company and project context can be derived only from already
  verified profile documents and current portfolio content in the repository.
- Some skills may require relative experience weights or grouped interpretation
  when exact duration is not consistently available, but the feature must avoid
  implying unsupported precision.
- The mobile presentation may simplify the visual chart treatment as long as the
  same approved information remains available through readable content and clear
  controls.
- The new unified section is responsible for preserving the most important
  professional context currently delivered by the existing timeline.
