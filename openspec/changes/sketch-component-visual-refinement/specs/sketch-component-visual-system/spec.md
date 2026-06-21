## ADDED Requirements

### Requirement: Sketch-inspired reusable component language
The system MUST define a reusable component styling language that makes buttons, cards, panels, badges, labels, metric blocks, dividers, navigation elements, and content containers feel visually consistent with the portfolio’s sketch-inspired hero identity. The component language MUST favor charcoal, graphite, ink, editorial, and paper-like cues over generic SaaS or dashboard styling while remaining polished and professional.

#### Scenario: Reviewer compares hero and reusable UI
- **WHEN** a reviewer scans the hero and then moves through reusable interface patterns across the homepage
- **THEN** the components read as part of the same sketch-inspired visual system rather than a separate generic dark UI kit

### Requirement: Premium monochrome button treatment
The system MUST refine primary and secondary button styles to align with the black, white, gray, and restrained gold identity. Primary actions MUST use premium emphasis without introducing colorful or playful styling. Secondary actions MUST remain clearly interactive while using editorial border, surface, or ink-line cues consistent with the visual system. All button variants MUST preserve keyboard focus visibility, hover clarity, active feedback, and readable contrast.

#### Scenario: User reviews primary and secondary actions
- **WHEN** a user encounters call-to-action buttons in the hero, navigation, and contact areas
- **THEN** the controls feel tactile, monochrome-first, and gold-accented where appropriate while remaining accessible and professional

### Requirement: Graphite and editorial card surfaces
The system MUST refine cards, panels, shells, and content containers so they use restrained charcoal, graphite, ink, or paper-like surface treatments with subtle borders and layered depth. The system MUST avoid heavy shadows, glassmorphism, colorful gradients, and overly smooth dashboard-like panels. Surface treatments MUST remain readable and structured.

#### Scenario: User scans content panels
- **WHEN** a reviewer scans summary, impact, skills, timeline, case studies, writing, and contact content containers
- **THEN** those surfaces feel editorial and sketch-aligned rather than flat or sterile

### Requirement: Editorial metric and achievement blocks
The system MUST style metric blocks and achievement summaries with clear information hierarchy and restrained editorial cues. Key values, labels, or separators MAY use gold emphasis, but the presentation MUST remain grounded in real profile evidence and MUST NOT look decorative-only or exaggerated.

#### Scenario: Recruiter scans highlight metrics
- **WHEN** the metric and achievement blocks are reviewed quickly
- **THEN** key numbers and supporting labels remain easy to parse and visually credible within the sketch-inspired system

### Requirement: Integrated sketch-inspired navigation
The system MUST refine the navigation bar and related navigation controls so they feel integrated with the sketch-inspired component system. Navigation MUST remain minimal, readable, and professional, and MUST avoid looking like generic app chrome. Hover, active, and focus states MUST use restrained monochrome contrast and gold emphasis where appropriate.

#### Scenario: User navigates section links
- **WHEN** a user hovers, focuses, or uses navigation controls to move through the homepage
- **THEN** the navigation feels visually integrated with the rest of the component system and interaction states remain clear

### Requirement: Editorial badges, labels, and dividers
The system MUST refine badges, labels, section dividers, and small markers so they feel like editorial stamps, technical labels, stitched markers, or printed interface details. The system MUST preserve readability, MUST keep decorative usage restrained, and MUST ensure separators and layout rhythm remain clean rather than noisy.

#### Scenario: User scans metadata and separators
- **WHEN** a reviewer encounters tags, status labels, eyebrow text, metric labels, and section dividers
- **THEN** those elements reinforce the sketch-editorial identity without cluttering the layout

### Requirement: Subtle CSS-friendly texture rules
The system MUST implement texture and irregularity primarily through CSS-friendly techniques such as layered gradients, border treatment, low-contrast overlays, pseudo-elements, and restrained surface variation. The system MUST avoid heavy asset usage unless already justified and available, and texture MUST NOT reduce readability, accessibility, or frontend performance.

#### Scenario: Frontend implementation is reviewed
- **WHEN** the styling approach is inspected in code and in-browser
- **THEN** the sketch-like texture remains subtle, maintainable, and realistic for the existing React, TypeScript, and TailwindCSS codebase

### Requirement: Whole-site component system scalability
The system MUST apply the refined component styling rules across representative reusable patterns that appear in hero, quick read, impact, skills, timeline, case studies, writing, and contact sections without changing the core content structure. The rules MUST scale through shared utilities or primitives rather than isolated one-off overrides.

#### Scenario: Representative sections reuse the system
- **WHEN** the component rules are extended across the homepage
- **THEN** the same component language can be reused consistently across sections without introducing conflicting local styles

### Requirement: Accessibility and readability preservation
The system MUST preserve accessibility, contrast, readability, and recruiter-friendly clarity while introducing the sketch-inspired styling. The system MUST NOT become messy, fantasy-themed, game-like, military-themed, overly textured, or structurally different from the current content layout.

#### Scenario: Accessibility and tone review
- **WHEN** the refined component system is reviewed for usability and professional tone
- **THEN** content remains readable, interaction states remain perceivable, and the site still feels professional and intentional
