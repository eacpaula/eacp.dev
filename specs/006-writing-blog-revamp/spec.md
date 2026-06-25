# Feature Specification: Local JSON-Driven Writing Experience

**Feature Branch**: `[006-writing-blog-revamp]`

**Created**: 2026-06-25

**Status**: Draft

**Input**: User description: "Create a feature specification for revamping the current Writing / Blog section of the portfolio."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Real Writing (Priority: P1)

As a portfolio visitor, I want the Writing section to show real published articles instead of placeholder topics so I can quickly judge the quality and relevance of Evandro's technical writing.

**Why this priority**: Replacing placeholder content with real writing is the core outcome of the feature and the main proof of value for visitors.

**Independent Test**: Can be fully tested by loading the Writing section and confirming that at least one published article appears as a full-width list entry with real content and no placeholder roadmap entries.

**Acceptance Scenarios**:

1. **Given** a visitor opens the portfolio and navigates to the Writing section, **When** published posts are available, **Then** the section shows one full-width list entry per post with an illustrative image, title, and short description stacked vertically.
2. **Given** the current site contains placeholder Writing roadmap entries, **When** the feature is released, **Then** those placeholder entries no longer appear anywhere in the Writing section.
3. **Given** a keyboard-only visitor tabs through the Writing section, **When** focus moves across the post list entries, **Then** each post link is reachable, clearly identified, and visibly focused.

---

### User Story 2 - Read and Share a Full Post (Priority: P2)

As a portfolio visitor, I want to open a post and read the complete article inside the portfolio so I can evaluate the depth of thought without leaving the site.

**Why this priority**: A useful Writing section requires a full reading experience, not only teaser cards.

**Independent Test**: Can be fully tested by opening a post from the Writing section or a direct link and verifying the full article content and share actions are available.

**Acceptance Scenarios**:

1. **Given** a visitor selects a post from the Writing list, **When** the post opens, **Then** a dedicated application page shows the post image, title, summary, publish date, tags, and complete article content within the portfolio experience.
2. **Given** a visitor opens a post from a direct link, **When** the post exists, **Then** the full article loads without requiring the visitor to first open the Writing list.
3. **Given** a visitor wants to share an article, **When** they activate a share action, **Then** LinkedIn, Telegram, and WhatsApp sharing options are available with clear labels tied to the current post.
4. **Given** a visitor opens the initial Spec-Driven Development article, **When** they read the content, **Then** the article covers the required comparison of OpenSpec, Spec Kit, and Kiro plus the required reflections on vibe coding, prompt quality, and AI-assisted specification writing in a grounded tone.

---

### User Story 3 - Add Future Posts With Minimal Friction (Priority: P3)

As the portfolio owner, I want each article to live in its own simple local JSON file so I can publish future posts without editing many unrelated files or introducing external systems.

**Why this priority**: The feature is only sustainable if future posts are easy to add and maintain.

**Independent Test**: Can be fully tested by adding a new post using the defined local content pattern and confirming it appears in the Writing experience without changes to unrelated site sections.

**Acceptance Scenarios**:

1. **Given** the portfolio owner wants to publish a new article, **When** they add a new post JSON file and its local image asset and complete any small required registration step, **Then** the new post becomes available in the Writing section.
2. **Given** a post omits optional article features such as key takeaways or comparison blocks, **When** the post is displayed, **Then** the Writing experience remains complete and visually consistent without empty placeholders.

---

### Edge Cases

- If a visitor opens a post link that does not match any published post, the portfolio should show a clear unavailable state and a path back to the Writing section.
- If the initial release contains only one published article, the Writing section should still feel intentional and complete rather than unfinished.
- If a post has very long content or many sections, the detail view should remain readable on mobile and not bury the share actions or navigation.
- If a visitor cannot complete a share handoff because the destination app or service is unavailable on their device, the article view should remain usable and unaffected.
- If a post includes optional comparison blocks, takeaways, or tags, those elements should render only when present and never leave empty labels or broken layout.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST replace the current Writing roadmap and placeholder blog entries with a real Writing experience that presents only published post content.
- **FR-002**: The Writing section MUST show one vertically stacked list entry for each published post, and each entry MUST include an illustrative image, a title, and a short description.
- **FR-003**: Users MUST be able to open each published post from its list entry and reach a unique route-based post page inside the portfolio.
- **FR-004**: Each post detail experience MUST display the post image, title, summary, publish date, tags, and complete article content.
- **FR-005**: Each post detail experience MUST provide share actions for LinkedIn, Telegram, and WhatsApp, and each action MUST clearly indicate its destination to assistive technologies.
- **FR-006**: Each published post MUST be maintained through its own local JSON file so future post creation primarily requires adding one JSON file, linking a local image asset, and completing at most a small registration step.
- **FR-007**: The post content model MUST support, at minimum, slug, title, short description, summary, hero image reference, image alt text, publish date, tags, full content sections, and optional key takeaways, comparison blocks, pros/cons lists, and share metadata.
- **FR-008**: The initial release MUST include one real published article about Spec-Driven Development.
- **FR-009**: The initial Spec-Driven Development article MUST compare OpenSpec, Spec Kit, and Kiro using only experience Evandro has actually used or tested.
- **FR-010**: The initial Spec-Driven Development article MUST explain why Spec Kit felt strongest so far, including its more verbose guidance, clearer workflow, and stronger structure for creating specifications.
- **FR-011**: The initial Spec-Driven Development article MUST explain why OpenSpec remained useful and simpler while noting that its extra freedom can produce weaker outcomes when the specification is not restrictive enough.
- **FR-012**: The initial Spec-Driven Development article MUST explain why Kiro felt coherent and positive as a specification-driven IDE experience while clearly stating that exploration remained limited because the paid plan was not adopted and model choice freedom was constrained.
- **FR-013**: The initial Spec-Driven Development article MUST include practical reflection on pure vibe coding, including where it helps, where it harms detailed outcomes, and why strong prompt quality still matters.
- **FR-014**: The initial Spec-Driven Development article MUST include practical reflection on using ChatGPT or other assistants to help elaborate prompts and specifications, while emphasizing that human context and prior research remain necessary for accurate outcomes.
- **FR-015**: The tone of the initial Spec-Driven Development article MUST feel practical, grounded, and personal, and MUST avoid hype or overstating expertise where experience was limited.
- **FR-016**: The Writing experience MUST feel visually integrated with the existing portfolio identity and MUST not appear as an external embed or a generic blog template.
- **FR-017**: The Writing section, post detail experience, and share actions MUST support keyboard access, semantic headings, visible focus states, sufficient contrast, and screen-reader-readable structure.
- **FR-018**: The Writing experience MUST remain usable across desktop, tablet, and mobile layouts, including readable stacked-list layouts, comfortable article reading width, and usable share actions on smaller screens.
- **FR-019**: The system MUST provide a clear recovery path when a requested post is unavailable.
- **FR-020**: The feature MUST not require external blog platforms, paid APIs, backend infrastructure, a CMS, comments, likes, reactions, search, or a rich text editor in the initial release.

### Key Entities *(include if feature involves data)*

- **Writing Post**: A published portfolio article with identity and presentation attributes such as slug, title, descriptions, publish date, tags, hero image, share metadata, and ordered content.
- **Post Content Section**: An ordered section within a Writing Post that contains a section heading and the body content needed to render the full article, with optional structured comparisons or takeaways.
- **Share Action**: A supported outbound sharing destination associated with a Writing Post, including the destination label, accessible name, and the information needed to share that post.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of Writing list entries in the released portfolio display a real illustrative image, title, and short description, and 0 placeholder roadmap entries remain visible.
- **SC-002**: 100% of published posts can be opened from the Writing section and from a direct link to the post detail experience.
- **SC-003**: 100% of published posts display the required detail elements: image, title, summary, publish date, tags, full content, and the three required share actions.
- **SC-004**: A new post can be added to the portfolio within 15 minutes by following the local content workflow without editing unrelated site sections.
- **SC-005**: 100% of Writing list entries, post navigation controls, and share actions are operable by keyboard and expose clear accessible names during acceptance review.
- **SC-006**: The initial release contains at least one published Spec-Driven Development article that covers all required comparison and reflection topics and is presented as part of the portfolio rather than an external experience.

## Assumptions

- The portfolio owner is the only person authoring and publishing posts for the initial release.
- The initial release needs published content, not draft management, editorial approvals, scheduled publishing, or multi-author workflows.
- Writing content and images are stored locally with the portfolio source and versioned alongside the rest of the site.
- Article sharing relies on destination-specific handoff behavior supported by the visitor's browser or installed apps.
- Existing portfolio navigation will continue to provide access to the Writing section, while unrelated sections remain unchanged for this feature.
