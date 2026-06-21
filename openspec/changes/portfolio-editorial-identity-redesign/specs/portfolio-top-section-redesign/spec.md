## ADDED Requirements

### Requirement: Hero information architecture
The system MUST redesign the homepage hero so the first recruiter-facing scan is simpler, lighter, and more structured than the current version. The hero MUST display the full name `Evandro Antônio da Costa de Paula`, MUST display the role `Full Stack Engineer` exactly once directly below the name, MUST reduce oversized visual emphasis on the name, MUST keep the supporting summary short, and MUST preserve direct access to the Resume, Contact, GitHub, and LinkedIn actions. The hero MUST NOT display the current top badges for location, years of experience, or fluent English.

#### Scenario: Recruiter scans the hero on first view
- **WHEN** a visitor opens the homepage and the hero section is visible
- **THEN** they can identify Evandro's full name, a single `Full Stack Engineer` role line, a short supporting summary, and the four core actions without first parsing secondary metadata

#### Scenario: Removed metadata does not compete with the headline
- **WHEN** the redesigned hero is rendered
- **THEN** location, years of experience, and fluent-English badges are absent from the top section

### Requirement: Hero illustration concept
The system MUST include a hero illustration positioned on the left side of the hero and above the name in the desktop composition. The illustration MUST use a semi-realistic, drawn or concept-art style in black, white, and gray rather than a fully realistic portrait. The face MUST preserve Evandro's recognizable features. The clothing MUST read as a sweatshirt or hoodie with visible military-uniform-inspired symbolism, and the garment MUST include gold merit or honor emblems that map to real, source-backed career achievements.

#### Scenario: Illustration reinforces identity without replacing the content
- **WHEN** the hero renders on desktop
- **THEN** the illustration appears in the left visual column above the text content and supports the profile identity without displacing the primary headline and actions

#### Scenario: Emblems remain tied to real achievements
- **WHEN** a gold emblem or badge is shown in the hero illustration or adjacent explanatory UI
- **THEN** it corresponds to a real achievement already supported by the repository content, such as reusable components, projects reached, code coverage, modernization work, or CI/CD and quality improvements

### Requirement: Quick Read panel redesign
The system MUST keep the Quick Read concept but redesign it as an editorial old-newspaper-style information panel. The panel MUST remain readable, structured, and restrained, MUST present the content as highlighted bullet facts, and MUST avoid decorative noise that weakens scan speed. The achievement metrics beneath or alongside this panel MUST remain modern metric cards while incorporating subtle editorial styling cues.

#### Scenario: Visitor scans quick facts
- **WHEN** a visitor reads the Quick Read panel
- **THEN** they see a small set of highlighted bullet facts presented in a structured editorial card rather than a dense paragraph block

#### Scenario: Metrics remain easy to compare
- **WHEN** the visitor reviews the supporting metrics in the top section
- **THEN** the metrics still appear as compact modern cards and remain visually connected to the editorial panel through subtle shared styling cues

### Requirement: Source-backed metrics and achievement facts
The system MUST preserve the current top-level metrics for experience, reusable components, projects reached, and code coverage unless a source-backed replacement is explicitly chosen during implementation. The system MAY add more metrics or quick-read facts only when they are traceable to approved profile source files already in the repository.

#### Scenario: Added metrics stay auditable
- **WHEN** implementation introduces a new metric or highlighted fact in the top section
- **THEN** that claim can be traced to an approved source file in the repository content inputs

### Requirement: Homepage top-section tone
The system MUST use a neutral professional tone that reads as direct, strategic, technical, and grounded. The system MUST avoid third-person narration and exaggerated marketing language in the hero and Quick Read copy.

#### Scenario: Copy review of the redesigned top section
- **WHEN** a reviewer reads the hero and Quick Read content
- **THEN** the copy speaks in first person or direct portfolio voice, avoids hype language, and does not describe Evandro in third person
