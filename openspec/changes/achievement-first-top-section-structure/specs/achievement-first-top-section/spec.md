## ADDED Requirements

### Requirement: Top section uses a hero plus one unified impact section
The system MUST structure the portfolio top section so the hero communicates who
Evandro is and what he does with one concise positioning summary, and the next
top-level surface communicates recruiter-facing proof through one unified impact
section. The system MUST NOT keep separate summary and impact sections that
repeat the same positioning themes across adjacent surfaces.

#### Scenario: Visitor scans hero then proof
- **WHEN** a recruiter reviews the top section of the homepage
- **THEN** they see the hero first and then one unified impact section rather
  than a separate summary section followed by a separate impact section

#### Scenario: Adjacent duplication is removed
- **WHEN** the hero and the next top-section surface are read together
- **THEN** themes such as modernization, reusable systems, delivery quality, and
  engineering range are not repeated across both a standalone summary section
  and an impact section

### Requirement: Hero keeps only one short positioning summary
The system MUST keep exactly one short positioning summary near the hero and
that summary MUST communicate role, range, and value without expanding into a
second proof section.

#### Scenario: Hero summary stays concise
- **WHEN** a visitor reads the hero summary
- **THEN** the text is brief enough to act as framing rather than as a detailed
  explanation of achievements

#### Scenario: Next section shifts into proof
- **WHEN** the visitor continues from the hero into the next top-section surface
- **THEN** the next surface presents impact cards rather than another general
  positioning paragraph

### Requirement: Unified impact section uses multiple proof cards
The system MUST present the strongest top achievements inside the unified
impact section using multiple card or metric surfaces that act as
recruiter-facing proof points. Each card MUST combine a concrete metric or
outcome with enough context to explain why the achievement matters.

#### Scenario: Recruiter reads impact cards
- **WHEN** the recruiter scans the unified impact section
- **THEN** each visible card communicates a concrete outcome, metric, or
  evidence-backed result rather than a generic capability label alone

#### Scenario: Impact cards avoid vanity metrics
- **WHEN** an impact card displays a number or measurable claim
- **THEN** the card also includes a short qualifier that makes the number
  interpretable in engineering or delivery terms

### Requirement: Impact cards are ready for future deep links
The system MUST prepare the unified impact section so each top proof point can
later link to a detailed post, case study, or similar deeper writeup without
requiring another top-section redesign.

#### Scenario: Future detail can be attached to an impact card
- **WHEN** a detailed achievement post or case-study-style page is added later
- **THEN** the corresponding top-section proof point can be associated with
  that deeper content through its content structure

#### Scenario: Current implementation does not require the deep content to exist
- **WHEN** the top-section structure is implemented before detailed posts are
  available
- **THEN** the impact section still works clearly without broken or placeholder
  navigation

### Requirement: Standalone summary section is removed from the top-of-page flow
The system MUST remove the standalone summary section from the top-of-page flow
once its strongest card content has been absorbed into the unified impact
section.

#### Scenario: Summary no longer appears as its own section
- **WHEN** a visitor scans the top-level sections after the hero
- **THEN** they do not encounter a separate summary section before the unified
  impact section

#### Scenario: Summary card treatment is preserved through impact
- **WHEN** the unified impact section is rendered
- **THEN** it can reuse the card-like treatment previously associated with the
  summary surface rather than discarding that proof format
