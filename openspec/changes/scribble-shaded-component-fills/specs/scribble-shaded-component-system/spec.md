## ADDED Requirements

### Requirement: Hand-shaded component fills
The system MUST define reusable component fills that feel hand-shaded, scribbled, crayon-like, charcoal-like, or pencil-shaded rather than flat and digitally even. The fill behavior MUST suggest manual stroke coverage, density variation, or partial irregularity while remaining controlled and professional.

#### Scenario: Reviewer scans filled UI surfaces
- **WHEN** a reviewer inspects buttons, cards, panels, labels, metric boxes, and section containers
- **THEN** the fills feel manually shaded or colored rather than uniformly digital

### Requirement: Monochrome sketch-fill cohesion
The system MUST apply the hand-shaded fill treatment inside the existing monochrome black, white, and gray system with restrained gold accents. The fills MUST feel cohesive with the sketch-style hero portrait and MUST NOT introduce loud color or generic smooth SaaS gradients.

#### Scenario: Reviewer compares hero and reusable surfaces
- **WHEN** the hero portrait and surrounding interface surfaces are reviewed together
- **THEN** the fills, palette, and shading all read as part of the same sketch-based world

### Requirement: Drawn border and fill integration
The system MUST ensure that drawn borders and interior fills work together as one illustrated component treatment. Borders MUST continue to feel hand-drawn, and the internal scribble or shading treatment MUST complement rather than conflict with the outline.

#### Scenario: User inspects sketched component frames
- **WHEN** a user looks at cards, buttons, labels, and panels
- **THEN** each element feels like an illustrated object with both drawn framing and hand-shaded interior treatment

### Requirement: Controlled irregularity and readability
The system MUST keep the scribble and shading irregularity controlled, tasteful, and readability-safe. Shading MAY show incomplete coverage, directional strokes, or density variation, but it MUST NOT make the interface feel messy, chaotic, childish, or low-fidelity.

#### Scenario: Recruiter scans content quickly
- **WHEN** a recruiter scans highlighted facts, metrics, and core section content
- **THEN** the shading adds character without reducing hierarchy, readability, or professionalism

### Requirement: Representative surface coverage
The system MUST apply the scribble-shaded fill behavior across representative reusable components including buttons, cards, panels, section containers, metric blocks, labels, and navigation or tab containers. The treatment MUST scale through shared patterns rather than isolated one-off overrides.

#### Scenario: Component system is reused across the homepage
- **WHEN** representative reusable surfaces are reviewed across hero, quick-read, impact, skills, timeline, case studies, writing, and contact sections
- **THEN** the hand-shaded fill treatment remains consistent across component roles

### Requirement: Subtle scribble-direction animation
The system MAY introduce subtle animation in which scribble direction, shading offset, or stroke movement shifts slowly over time to suggest living hand-made shading. If animation is used, it MUST remain slow, restrained, non-distracting, and secondary to content readability.

#### Scenario: Reviewer observes animated shading
- **WHEN** the interface is viewed over time on a motion-capable device
- **THEN** any shading movement feels subtle and alive rather than unstable or attention-seeking

### Requirement: Reduced-motion-safe behavior
The system MUST respect reduced-motion preferences. Animated scribble or shading behavior MUST provide a non-animated fallback or be disabled when the user prefers reduced motion, while preserving the static hand-shaded appearance.

#### Scenario: User prefers reduced motion
- **WHEN** the user has reduced-motion preferences enabled
- **THEN** the interface shows static hand-shaded fills without decorative motion

### Requirement: Maintainable lightweight implementation
The system MUST implement the hand-shaded effect through maintainable frontend techniques such as CSS layering, pseudo-elements, masks, repeating stroke patterns, lightweight SVG backgrounds, or subtle transforms. The system MUST avoid large runtime cost and SHOULD avoid heavy image dependence where a code-native approach is sufficient.

#### Scenario: Frontend implementation is reviewed
- **WHEN** the styling solution is examined in code and in-browser
- **THEN** it remains realistic for the React, TypeScript, and TailwindCSS stack and does not depend on heavyweight assets or frameworks

### Requirement: Accessibility and interaction clarity
The system MUST preserve strong contrast, text readability, focus visibility, and interaction clarity while using scribble or shaded fills. Buttons and interactive elements MUST remain clearly usable, and the shading effect MUST NOT obscure labels, state changes, or hit-area intent.

#### Scenario: User interacts with shaded controls
- **WHEN** a user focuses, hovers, or activates interactive components
- **THEN** the controls remain legible, accessible, and clearly interactive despite the handmade shading treatment
