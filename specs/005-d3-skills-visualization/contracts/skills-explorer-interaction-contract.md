# Contract: Skills Explorer Interaction

## Purpose

Define the user-visible states, interaction rules, accessibility guarantees, and
replacement outcomes for the unified Skills explorer section.

## Required Views

- **Overview state**: a radial skill-group summary that communicates breadth and
  relative depth
- **Group detail state**: a horizontal skill comparison for the selected group
- **Usage panel state**: verified company or project context filtered by current
  selection
- **Accessible fallback**: text-based grouped content exposing the same approved
  information without requiring SVG interpretation

## Selection Rules

- Only one group may be active at a time.
- Only one skill may be active at a time.
- The initial load selects the default ranked group and its first ranked skill.
- Changing group resets skill selection to the first skill in that group.
- Clearing the active skill keeps the group selected and broadens the usage
  panel to group scope.
- Resetting to overview clears both active group and active skill and shows
  general verified highlights.

## Chart Behavior

- D3 is responsible for scales, geometry, ordering, and comparison math.
- React owns rendered SVG structure, interaction wiring, and state updates.
- Visual treatment uses monochrome and gold roles from the existing design
  system rather than multi-color chart palettes.
- Hover and focus states must be visible, but core comprehension must not depend
  on hover-only disclosure.

## Accessibility Requirements

- Group and skill selection must be reachable through keyboard-operable
  controls.
- Focus visibility must remain explicit against dark surfaces.
- Selection state must be communicated with labels, emphasis, and structure,
  not color alone.
- Reduced-motion users must receive the same information with minimized
  non-essential animation.
- The accessible fallback must remain useful even if SVG interaction is not used
  at all.

## Responsive Requirements

- Desktop may present overview and detail in a composed grid.
- Tablet may stack or compress panels while preserving readable labels.
- Mobile may replace the radial interaction with a simpler selector and
  horizontal list presentation if the same information stays available.

## Replacement Outcomes

- `#skills` remains the anchor target for the unified section.
- The separate timeline section is removed from the page composition.
- Navigation no longer points to a standalone `#experience` section.
- Other sections and page-level metadata remain stable outside the skills flow.

## Validation

- A visitor can reach skill-specific usage context within three selections or
  fewer.
- Keyboard-only and reduced-motion review confirm equivalent access to group,
  skill, and usage information.
- Mobile review confirms the section remains readable without dense radial
  interaction.
- The final page contains one coherent Skills section instead of separate Skills
  and Timeline sections.
