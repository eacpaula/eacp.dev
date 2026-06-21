## ADDED Requirements

### Requirement: Hand-drawn reusable component language
The system MUST define a reusable component styling language that makes buttons, cards, panels, navigation items, tabs, labels, dividers, metric boxes, and content containers look intentionally hand-drawn. The visual language MUST resemble inked, sketched, or doodled interface elements translated into a polished web UI rather than standard dark dashboard components.

#### Scenario: Reviewer compares components to the hero illustration
- **WHEN** a reviewer moves from the sketch-style hero portrait into reusable interface elements across the homepage
- **THEN** the components feel like part of the same illustrated world rather than a separate clean UI kit

### Requirement: Sketch-style button treatment
The system MUST redesign primary and secondary buttons so they resemble hand-drawn interface controls with outlined contours, layered stroke treatment, or subtle illustrative irregularity. Primary and secondary actions MUST remain visually distinct, gold MAY be used for emphasis, and hover, focus, active, and keyboard states MUST remain clear and accessible.

#### Scenario: User reviews hero and contact actions
- **WHEN** a user encounters portfolio call-to-action buttons
- **THEN** the buttons read as sketch-drawn controls while remaining clearly clickable, readable, and professionally styled

### Requirement: Drawn card and panel framing
The system MUST refine cards, panels, shells, and framed content containers so they no longer look like generic clean rectangles. These surfaces MUST use hand-drawn or illustrated framing cues such as layered outlines, slightly irregular border treatment, editorial inset framing, or restrained surface texture while preserving structure and readability.

#### Scenario: Reviewer scans content containers
- **WHEN** a reviewer scans summary, impact, skills, timeline, case studies, writing, and contact panels
- **THEN** those surfaces feel like drawn containers rather than flat dashboard cards

### Requirement: Sketch-integrated navigation and tabs
The system MUST style navigation items, header controls, and tab-like interface elements using the same hand-drawn component language. Navigation MUST remain easy to scan and professional, and active, hover, and focus states MUST remain visually explicit.

#### Scenario: User scans primary navigation
- **WHEN** a user interacts with navigation items and similar small reusable controls
- **THEN** they appear as outlined or sketched interface labels with clear state changes and good readability

### Requirement: Drawn metric and highlight boxes
The system MUST present metrics, achievements, and highlighted facts inside sketched information boxes that preserve strong information hierarchy. Gold MAY emphasize numbers, labels, or border accents, but the result MUST stay grounded, readable, and evidence-oriented rather than decorative-only.

#### Scenario: Recruiter scans quick-read metrics
- **WHEN** a recruiter scans metric boxes or highlighted achievement summaries
- **THEN** key information remains easy to parse and the hand-drawn treatment supports rather than competes with the content

### Requirement: Sketch labels, badges, and dividers
The system MUST apply the hand-drawn component language to small UI details including labels, badges, tags, dividers, arrows, separators, and metadata markers. These details MUST feel illustrated or inked, but decorative usage MUST remain restrained and MUST NOT clutter the interface.

#### Scenario: Reviewer scans metadata and separators
- **WHEN** a reviewer encounters tags, section labels, dividers, and small metadata markers
- **THEN** those details reinforce the sketch style without making the interface noisy

### Requirement: Maintainable CSS-first implementation
The system MUST implement the sketch effect primarily through maintainable React, TypeScript, and TailwindCSS-compatible techniques such as layered borders, pseudo-elements, slight transforms, outline offsets, background layering, and subtle texture cues. The system MUST avoid heavy dependencies and MUST avoid image-heavy UI component construction unless already justified and available.

#### Scenario: Frontend implementation is inspected
- **WHEN** the styling approach is reviewed in code
- **THEN** the effect is maintainable, performant, and realistic for the existing frontend stack

### Requirement: Professional readability and accessibility preservation
The system MUST preserve accessibility, readability, responsiveness, and professional tone while introducing the hand-drawn component style. The interface MUST NOT become childish, messy, cartoon-like, low-fidelity, or overly rough, and MUST NOT make the content harder to scan for recruiters or hiring managers.

#### Scenario: Accessibility and tone review
- **WHEN** the final interface is reviewed for usability and presentation quality
- **THEN** the site remains readable, recruiter-friendly, and polished despite the stronger sketch treatment

### Requirement: Representative whole-site reuse
The system MUST apply the hand-drawn component rules across representative reusable patterns including hero action buttons, navigation, cards, metric blocks, labels, section containers, quick-read UI, and supporting content blocks. The styling MUST scale through shared primitives or utilities rather than isolated section-only hacks.

#### Scenario: Design system is reused across sections
- **WHEN** the component language is applied across representative homepage sections
- **THEN** the hand-drawn style remains consistent without forcing a content or layout rewrite
