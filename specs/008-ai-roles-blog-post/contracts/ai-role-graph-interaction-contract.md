# Contract: AI Role Graph Interaction

## Purpose

Define the behavior, accessibility guarantees, and responsive fallback rules
for the interactive role-and-skills map embedded in the AI roles article.

## Required Views

- **Graph section**: the article section that introduces the interactive role
  map and hosts the primary SVG graph on larger layouts
- **Detail panel**: the node-detail view that explains the selected role,
  skill, responsibility, or category
- **Fallback view**: a text-first representation of the same relationships for
  mobile, keyboard-only review, or scenarios where dense graph interaction is
  not suitable

## Data Relationship Rules

- Nodes must be typed as `role`, `skill`, `responsibility`, or `category`.
- Links must connect valid node IDs from the same graph dataset.
- Every `role` node must correspond to a `WritingRoleProfile`.
- The fallback view must be derivable from the same node/link dataset rather
  than from a manually maintained second relationship source.

## Interaction Rules

- The graph must load with one valid default node selected.
- Selecting a `role` node must:
  - highlight connected skills, responsibilities, and categories
  - mute unrelated nodes and links
  - populate the detail panel with that role's practical description and overlap context
- Selecting a `skill`, `responsibility`, or `category` node must:
  - highlight connected roles
  - keep the network readable by muting unrelated elements
  - explain the selected node and its role relationships in the detail panel
- The interaction model may allow only one active node at a time.
- The experience may expose a reset or "show all" action if needed for clarity,
  but it must not be required for basic comparison.

## Layout Rules

- The desktop and tablet graph should use a deterministic lane-based node-link
  layout rather than a free-moving force simulation.
- Roles should remain visually distinct from skills, responsibilities, and
  categories.
- Link styling may vary by weight or emphasis, but the graph must avoid visual
  clutter and preserve scan speed.
- The detail panel should live close enough to the graph that users can compare
  selection and explanation without losing context.

## Accessibility Requirements

- All interactive nodes must be keyboard reachable.
- Enter and Space must activate focused nodes.
- The selected state must be communicated through visible styling and an
  accessible pressed/selected indicator.
- The graph container must expose a useful accessible label or description.
- The fallback view must communicate the same relationships in plain text
  without requiring SVG interpretation.
- Focus treatment must remain explicit against the dark surface palette.

## Responsive Requirements

- Desktop should show the full graph and the detail panel together.
- Tablet may keep the same model with tighter spacing if readability remains
  acceptable.
- Mobile may switch to the text fallback or a simplified selector-plus-detail
  flow when the graph becomes too dense.
- The mobile experience must not rely on drag gestures, hover-only affordances,
  or tiny tap targets.

## Content Parity Rules

- The fallback view must expose the same role, skill, responsibility, and
  category relationships that the graph shows.
- Switching between graph and fallback modes must not change the underlying
  meaning of the dataset.
- Any explanatory copy shown only in the detail panel should also be reachable
  from the fallback selection path.

## Validation

- Selecting any role reveals its connected skills and responsibilities within
  two interactions.
- Keyboard-only review confirms node focus, activation, and visible selection.
- Mobile review confirms a usable fallback when the graph is too dense.
- Unrelated nodes visibly mute during selection without hiding the context
  completely.
- The detail panel remains synchronized with the active node in both graph and
  fallback modes.
