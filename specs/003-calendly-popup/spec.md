# Feature Specification: Calendly Popup Scheduling Integration

**Feature Branch**: `003-calendly-popup`

**Created**: 2026-05-14

**Status**: Draft

**Input**: User description: "Create a new feature specification for adding Calendly popup scheduling to eacp.dev."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Schedule a Professional Conversation from the Contact Section (Priority: P1)

An international recruiter, hiring manager, engineering manager, technical interviewer, or potential collaborator reaches the Contact section and can schedule a conversation directly from the portfolio without leaving the site context first.

**Why this priority**: The primary value of the feature is to reduce friction for relevant professional conversations while keeping the site aligned with its recruiter-focused purpose.

**Independent Test**: Can be fully tested by opening the homepage, navigating to the Contact section, activating the scheduling call-to-action, and confirming that a Calendly popup opens using the specified scheduling link while other contact options remain visible.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the Contact section, **When** they activate the primary scheduling call-to-action, **Then** a popup-style scheduling experience opens using `https://calendly.com/eacpaula/chat`.
2. **Given** a visitor wants another way to contact Evandro, **When** they review the Contact section, **Then** email, LinkedIn, GitHub, and resume options remain available alongside the scheduling call-to-action.

---

### User Story 2 - Keep the Contact Area Minimal and Intentional (Priority: P2)

A visitor sees a professional, uncluttered Contact section that offers scheduling without turning the homepage into an always-visible calendar surface.

**Why this priority**: The feature should add convenience without weakening the site’s visual identity or introducing a bulky embedded calendar that dominates the section.

**Independent Test**: Can be fully tested by reviewing the Contact section before interaction and confirming that no full calendar is displayed until the scheduling call-to-action is activated.

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage, **When** they have not yet interacted with the scheduling call-to-action, **Then** the page does not display a full inline calendar in the Contact section.
2. **Given** a stakeholder reviews the Contact section layout, **When** they compare the scheduling feature to the surrounding content, **Then** the scheduling entry feels lightweight, professional, and visually consistent with the existing portfolio design.

---

### User Story 3 - Use the Scheduling Flow Reliably Across Devices (Priority: P3)

A visitor using desktop or mobile can trigger the scheduling flow reliably, and the site remains usable even if the external scheduling service is temporarily unavailable.

**Why this priority**: The feature depends on an external scheduling service, so the site needs a graceful user experience that does not break the Contact section or core portfolio behavior.

**Independent Test**: Can be fully tested by activating the scheduling call-to-action on desktop and mobile-sized layouts and confirming the page remains usable even if the scheduling popup cannot be loaded.

**Acceptance Scenarios**:

1. **Given** a keyboard-only visitor focuses the Contact section, **When** they activate the scheduling call-to-action, **Then** they can trigger the popup flow without requiring pointer-only interaction.
2. **Given** the scheduling service is temporarily unavailable, **When** a visitor activates the scheduling call-to-action, **Then** the rest of the homepage remains intact and the scheduling option fails gracefully rather than breaking the page.

### Edge Cases

- What happens when the visitor clicks the scheduling call-to-action before external scheduling resources are fully available? The site must still provide a graceful, user-understandable response rather than appearing broken.
- What happens when Calendly is temporarily unavailable or blocked by the browser? The scheduling feature must not break the Contact section or hide the other contact options.
- What happens on small mobile screens? The scheduling flow must remain usable without the Contact section becoming visually cluttered or hard to navigate.
- What happens when the scheduling call-to-action is activated multiple times in one session? The experience must remain stable and avoid stacking duplicate scheduling experiences.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST add a visible scheduling call-to-action to the Contact section for professional conversations.
- **FR-002**: The scheduling call-to-action label MUST be `Schedule a call`.
- **FR-003**: The system MUST open the scheduling flow using `https://calendly.com/eacpaula/chat`.
- **FR-004**: The scheduling experience MUST open only after the user activates the scheduling call-to-action and MUST NOT display the full calendar by default in the Contact section.
- **FR-005**: The Contact section MUST continue to display other professional contact options, including email, LinkedIn, GitHub, and resume access.
- **FR-006**: The scheduling call-to-action MUST NOT replace existing contact methods.
- **FR-007**: The scheduling experience MUST feel lightweight, professional, and visually aligned with the portfolio’s existing design direction.
- **FR-008**: The system MUST keep the scheduling URL in one centralized configuration or data location rather than duplicating it across multiple components.
- **FR-009**: The system MUST load any external scheduling resources in a way that avoids repeated unnecessary loading during a single browsing session.
- **FR-010**: The system SHOULD avoid loading scheduling resources before the visitor interacts with the scheduling call-to-action when practical to do so.
- **FR-011**: The scheduling call-to-action MUST remain accessible to keyboard users.
- **FR-012**: The system MUST support the scheduling popup flow on both desktop and mobile layouts.
- **FR-013**: If the external scheduling experience cannot be opened, the system MUST fail gracefully without breaking the rest of the homepage or removing existing contact options.
- **FR-014**: The scheduling copy in the Contact section MUST use direct, professional language aligned with a senior software engineer portfolio.
- **FR-015**: The scheduling copy MUST make clear that the conversation is intended for recruiting, professional opportunities, technical discussions, or collaboration.
- **FR-016**: The feature MUST preserve the site’s static-first deployment model and compatibility with GitHub Pages-style hosting.
- **FR-017**: The feature MUST NOT introduce an always-visible inline calendar into the Contact section.
- **FR-018**: The feature MUST NOT add a custom scheduling system, backend API, authentication flow, CRM integration, newsletter flow, lead tracking, or other unrelated scheduling infrastructure.

### Key Entities *(include if feature involves data)*

- **Scheduling CTA**: The primary Contact section action that opens the professional scheduling flow.
- **Scheduling URL Record**: The single source of truth that stores the Calendly link used by the scheduling experience.
- **Contact Surface**: The Contact section content area that contains the scheduling call-to-action alongside email, LinkedIn, GitHub, and resume options.
- **Popup Scheduling Session**: The user-initiated scheduling experience that opens only after the scheduling call-to-action is activated.
- **Fallback Contact State**: The safe Contact section behavior when the external scheduling experience cannot be opened successfully.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A visitor can reach and activate the `Schedule a call` call-to-action from the Contact section in one interaction.
- **SC-002**: In homepage review, the full scheduling calendar is not visible before user interaction in 100% of tested states.
- **SC-003**: In functional review, activating the scheduling call-to-action opens the scheduling experience using `https://calendly.com/eacpaula/chat`.
- **SC-004**: In Contact section review, email, LinkedIn, GitHub, and resume options remain visible and usable alongside the scheduling call-to-action.
- **SC-005**: On desktop and mobile layouts, the scheduling call-to-action remains reachable, readable, and activatable without breaking the Contact section layout.
- **SC-006**: If the external scheduling experience cannot be loaded, the homepage still remains usable and the Contact section continues to provide alternative contact routes.
- **SC-007**: The site continues to build successfully after the feature is added.

## Assumptions

- The existing Contact section remains the correct place for the scheduling feature rather than introducing a new top-level scheduling section.
- The preferred CTA label is `Schedule a call`, since the user explicitly provided that preference.
- The Calendly URL `https://calendly.com/eacpaula/chat` is the approved production scheduling destination for this feature.
- The current portfolio already uses professional contact methods that must remain visible, including email, LinkedIn, GitHub, and resume access.
- The feature should rely on Calendly’s standard popup-style integration behavior rather than inventing a custom booking workflow.
- The feature must stay within the site’s existing static-first architecture and should avoid additional infrastructure or heavy supporting libraries unless later planning proves they are necessary.
