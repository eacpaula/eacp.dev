# Feature Specification: Contact Section Rework with Center Portrait and Fullscreen Resume Viewer

**Feature Branch**: `007-contact-section-rework`

**Created**: 2026-06-25

**Status**: Draft

**Input**: User description: "Create a feature specification for reworking the current Contact section of the portfolio with a friendlier heading, centered existing portrait, visible email and phone, simplified action buttons, and a fullscreen in-site resume viewer."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Reach Out Through a Warmer Contact Section (Priority: P1)

A recruiter, hiring manager, technical interviewer, or collaborator reaches the Contact section and immediately understands how to contact Evandro through a friendlier, more personal layout that feels welcoming rather than arrogant.

**Why this priority**: The section exists to convert interest into contact. If the tone or scan path feels cold, verbose, or overly self-assured, the section undercuts its primary purpose.

**Independent Test**: Can be fully tested by opening the homepage, navigating to the Contact section, and confirming that the heading feels warm and professional, the removed paragraphs are no longer present, and the visitor can identify direct contact details without reading a large block of supporting copy.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the Contact section, **When** they scan the section heading, **Then** they see a warm, professional, approachable English message instead of the current title `The next step should be obvious if the work looks relevant.`
2. **Given** a visitor reviews the section copy, **When** they compare it to the previous version, **Then** the explanatory paragraphs about low-friction contact and scheduling use cases are no longer shown.
3. **Given** a visitor views the section on a desktop layout, **When** the main contact composition appears, **Then** the portrait is centered, the email is visible on the left, and the phone number is visible on the right.

---

### User Story 2 - Use Direct Actions Without Extra Friction (Priority: P2)

A visitor can choose the follow-up path that fits their preference: direct email, phone, LinkedIn, GitHub, scheduling, or resume review, without navigating through oversized explanation cards or indirect document links.

**Why this priority**: Once the tone and layout are corrected, the next value is speed. The section should let interested visitors act immediately instead of decoding extra UI or supporting copy.

**Independent Test**: Can be fully tested by opening the Contact section, confirming the four concise action buttons are present below the main contact area, activating the scheduling action, and activating the resume action to confirm the resume opens inside a fullscreen site experience with visible document actions.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the lower action area, **When** they review the available actions, **Then** they see clear actions for `LinkedIn`, `GitHub`, `Schedule a Call`, and `Resume`.
2. **Given** a visitor wants to schedule a conversation, **When** they activate `Schedule a Call`, **Then** scheduling remains available without a large descriptive card or verbose helper copy surrounding the action.
3. **Given** a visitor wants to review the resume, **When** they activate `Resume`, **Then** the resume opens inside a fullscreen in-site viewing experience with clearly visible top actions for download, print, and close.

---

### User Story 3 - Review and Navigate the Section Accessibly on Any Screen (Priority: P3)

A visitor using keyboard navigation, a tablet, or a mobile device can still understand the layout, access every action, and close the resume viewer reliably.

**Why this priority**: The Contact section is a final conversion surface. Accessibility and responsive clarity are mandatory because this section must work for every serious reviewer, not only for desktop pointer users.

**Independent Test**: Can be fully tested by reviewing the section with keyboard-only navigation and at desktop, tablet, and mobile sizes, then opening and closing the resume viewer without using a pointer.

**Acceptance Scenarios**:

1. **Given** a keyboard-only visitor navigates through the Contact section, **When** they move through direct contact links and action buttons, **Then** each item is focusable and visibly indicates focus.
2. **Given** a visitor opens the resume viewer, **When** they use keyboard navigation, **Then** they can reach download, print, and close actions and dismiss the viewer without confusion.
3. **Given** a visitor views the Contact section on a small mobile screen, **When** the layout stacks vertically, **Then** the email, portrait, phone number, and action buttons remain readable and easy to use.

### Edge Cases

- What happens when the browser or device cannot display the resume document inside the fullscreen viewer? The visitor must still receive a clear in-site resume experience with visible fallback access to download, print, and close actions.
- What happens when a visitor activates the resume action or close action repeatedly? The resume experience must remain stable and avoid duplicate fullscreen layers or a trapped state.
- What happens when direct contact information is long or wraps on narrow screens? The section must preserve readability and clickability without overlap or hidden text.
- What happens when scheduling cannot open normally? The scheduling action must fail gracefully without removing the other direct contact options.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST replace the current Contact section title with a friendlier English heading that reads as warm, professional, approachable, and not arrogant.
- **FR-002**: The heading SHOULD use `Let's connect if my work resonates with what you're building.` or a closely aligned variant that preserves the same tone.
- **FR-003**: The system MUST remove the paragraph `Email, profile links, and the resume stay easy to reach. The contact area is direct, professional, and intentionally low-friction.`
- **FR-004**: The system MUST remove the paragraph `Scheduling works best for recruiting conversations, technical interviews, collaboration, or project scope discussions.`
- **FR-005**: The Contact section MUST keep supporting copy minimal and MUST NOT include verbose explanatory text about the contact process or scheduling purpose.
- **FR-006**: The Contact section MUST reuse the existing approved portrait image already used elsewhere in the portfolio.
- **FR-007**: The portrait MUST be the centered focal point of the Contact section's main layout.
- **FR-008**: On desktop layouts, the section MUST display the visible email address `eacpaula@outlook.com` on the left side of the portrait and make it directly selectable as an email action.
- **FR-009**: On desktop layouts, the section MUST display the visible phone number `+55 54 98149-1193` on the right side of the portrait and make it directly selectable as a phone action on supported devices.
- **FR-010**: The section MUST present four concise follow-up actions below the main contact area: `LinkedIn`, `GitHub`, `Schedule a Call`, and `Resume`.
- **FR-011**: The scheduling action MUST remain available as a simple direct action and MUST NOT be surrounded by a large descriptive scheduling card.
- **FR-012**: The resume action MUST open the resume inside a fullscreen in-site viewing experience instead of acting only as a basic document link.
- **FR-013**: The fullscreen resume experience MUST provide clearly visible top-level actions for download, print, and close before the visitor begins reading the document.
- **FR-014**: The fullscreen resume experience MUST show the resume document within the site when the visitor's environment supports embedded document viewing.
- **FR-015**: If embedded document viewing is unavailable, the fullscreen resume experience MUST still preserve a clear reading and document-action flow without forcing the visitor into a dead end.
- **FR-016**: The Contact section MUST preserve the portfolio's established visual identity, using a monochrome-first presentation with restrained gold emphasis and an editorial, technical feel.
- **FR-017**: Email and phone details MUST be exposed as real direct-contact links rather than hidden behind secondary reveal interactions.
- **FR-018**: Every direct contact link and action button in the section MUST be keyboard accessible and MUST provide visible focus indication.
- **FR-019**: The fullscreen resume experience MUST be keyboard accessible and MUST provide a clearly discoverable close action.
- **FR-020**: The portrait image MUST retain meaningful alternative text.
- **FR-021**: The Contact section MUST remain usable across desktop, tablet, and mobile layouts, allowing vertical stacking on smaller screens while preserving reading order and action clarity.
- **FR-022**: The feature MUST remain limited to the Contact section and the resume opening experience and MUST NOT redesign unrelated sections, unrelated navigation behavior, or broader site content.
- **FR-023**: Existing professional destinations for LinkedIn, GitHub, scheduling, and the approved resume document MUST remain available after the rework.

### Key Entities *(include if feature involves data)*

- **Contact Section Surface**: The recruiter-facing section that combines tone, portrait, direct contact details, and follow-up actions into one clear conversion area.
- **Direct Contact Detail**: A visible contact method, specifically the approved email address or approved phone number, that can be activated directly from the section.
- **Follow-up Action**: A concise action entry for LinkedIn, GitHub, scheduling, or resume review.
- **Resume Viewing Experience**: The fullscreen in-site flow that lets a visitor review the resume before deciding to download or print it.
- **Resume Document Action**: A visible top-level control inside the resume viewing experience that supports download, print, or closing the viewer.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In first-scan review, a visitor can identify a direct email option, a direct phone option, and at least one follow-up action within 10 seconds of reaching the Contact section.
- **SC-002**: In desktop acceptance review, the portrait appears centered between visible direct contact details in 100% of tested Contact section states.
- **SC-003**: In desktop, tablet, and mobile acceptance review, all four follow-up actions remain readable and activatable without overlap, clipping, or hidden text.
- **SC-004**: In resume review, the resume opens inside a fullscreen site experience in one interaction and exposes visible download, print, and close actions before document reading begins.
- **SC-005**: In content review, the two removed explanatory paragraphs are absent and no large scheduling description block remains in the Contact section.
- **SC-006**: In keyboard-only review, visitors can reach every direct contact link, every follow-up action, and every top-level resume viewer action without pointer input.
- **SC-007**: In visual review, the reworked section remains consistent with the site's monochrome editorial identity and does not introduce obvious clutter or unrelated stylistic patterns.

## Assumptions

- The existing homepage Contact section remains the correct location for this rework rather than introducing a separate contact page or a new top-level section.
- The approved public contact details for this feature are `eacpaula@outlook.com` and `+55 54 98149-1193`, and displaying them visibly is an intentional change in direction.
- The existing portrait asset already present in the portfolio is the approved image for reuse in this section.
- The current LinkedIn, GitHub, scheduling destination, and resume document remain the approved public follow-up targets for the portfolio.
- The resume remains a document suitable for in-site viewing, with download and print remaining valid visitor expectations.
