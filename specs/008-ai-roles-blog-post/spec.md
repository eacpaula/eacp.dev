# Feature Specification: AI Roles and Software Engineering Blog Post

**Feature Branch**: `[008-ai-roles-blog-post]`

**Created**: 2026-06-29

**Status**: Draft

**Input**: User description: "Create a feature specification for adding a new JSON-driven blog post to the portfolio about AI-related role confusion, AI tools, and modern software engineering."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Read a Grounded Reflection on AI Roles (Priority: P1)

As a software developer visiting the portfolio, I want to read a thoughtful article about AI-related role confusion so I can better understand how changing job titles relate to real software engineering work.

**Why this priority**: The primary value of the feature is the article itself: a clear, honest, and useful perspective that helps readers interpret a noisy market without hype.

**Independent Test**: Can be fully tested by opening the published post and confirming that the title, opening paragraph, and core sections communicate the required reflection, role distinctions, and practical guidance in English.

**Acceptance Scenarios**:

1. **Given** a visitor opens the new post from the Writing experience, **When** the article loads, **Then** the title clearly reflects the self-questioning theme about current role identity and where AI tools fit.
2. **Given** a visitor reads the opening of the article, **When** they review the first paragraph, **Then** it presents the required honest reflection about conflicting expectations around AI usage, readiness, and whether the author is an "AI Engineer" or a software engineer who uses AI effectively.
3. **Given** a visitor reads the full article, **When** they reach the main body sections, **Then** they find grounded discussion of role confusion, nuanced role distinctions, practical reassurance for developers, and a provocative final reflection.

---

### User Story 2 - Explore Role Overlap Through an Interactive Map (Priority: P2)

As a visitor trying to make sense of AI-related titles, I want to interact with a role-and-skills map so I can see which roles overlap, which skills differ, and where software engineering work fits.

**Why this priority**: The interactive visualization turns an abstract article theme into something inspectable and useful, helping readers compare titles against actual capabilities.

**Independent Test**: Can be fully tested by selecting roles in the interactive map, confirming that connected skills and responsibilities are highlighted, and verifying that a readable fallback is available when the visualization is not usable.

**Acceptance Scenarios**:

1. **Given** a visitor opens the role map, **When** they select any displayed role, **Then** the experience highlights that role's connected skills and responsibilities and explains what the role usually involves.
2. **Given** a visitor compares multiple roles, **When** they move between role selections, **Then** the experience makes overlaps and distinctions understandable rather than visually noisy.
3. **Given** a visitor cannot use the interactive map directly, **When** they access the fallback content, **Then** they can still review the same role-to-skill relationships in an accessible text-based format.

---

### User Story 3 - Maintain the Post Through the Local Content Workflow (Priority: P3)

As the portfolio owner, I want this article, its evidence placeholders, cover image, and role-map content to fit the existing local post workflow so I can evolve the piece without adding a CMS or editing unrelated site areas.

**Why this priority**: The feature should be sustainable as content, not a one-off special case that becomes hard to maintain after publication.

**Independent Test**: Can be fully tested by reviewing the published post content structure and confirming that the article, placeholder evidence, and interactive map data are all represented in the local post workflow without backend dependencies.

**Acceptance Scenarios**:

1. **Given** the portfolio owner prepares the new article, **When** they add it through the local writing content workflow, **Then** the post includes the required metadata, article sections, evidence entries, and role-map content in one coherent published experience.
2. **Given** screenshot evidence is not yet available for every example, **When** the post is published, **Then** clearly marked placeholders can appear without pretending to be real evidence and without making the article feel broken.
3. **Given** the portfolio owner later adds real evidence images or refines role descriptions, **When** those updates are published, **Then** the existing article layout and writing experience still work without redesigning the broader portfolio.

---

### Edge Cases

- If some confusing role-description screenshots are not yet available, the post should show clearly labeled placeholders or omit empty slots instead of implying that evidence exists.
- If a visitor cannot interpret the interactive map visually or uses only a keyboard, the fallback content should still communicate the same role, skill, and responsibility relationships.
- If different companies use the same role title differently, the article should acknowledge that ambiguity instead of presenting one universal definition.
- If a visitor reads the article on a narrow mobile screen, the long-form content, role map, and fallback content should remain readable and navigable.
- If the project's current post model does not support citation-style notes directly, the article should still avoid false authority by using careful wording such as "in practice, this role usually involves..."
- If a reader interprets the API-integration discussion as dismissive, the article should immediately clarify that initial integration can be simple while reliable product delivery remains complex.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST add one new published Writing post within the existing local post workflow for the topic of AI-related role confusion, AI tools, and modern software engineering.
- **FR-002**: The new post MUST use the slug `ai-tools-software-engineering-role-confusion`.
- **FR-003**: The post MUST include, at minimum, a slug, title, short description, summary, publish date, tags, cover image, ordered content sections, final reflection, and the content needed to support role descriptions, role-evidence entries, and the interactive role map.
- **FR-004**: The post title MUST clearly preserve the reflective self-questioning theme about what role the author is today, what role can be taken on, and where AI tools fit.
- **FR-005**: The first paragraph MUST restate that self-reflection in honest, professional English and MUST question conflicting expectations around AI usage, readiness, and whether the author is an "AI Engineer" or a software engineer who uses AI effectively.
- **FR-006**: The article MUST be written in English and MUST translate the user's Portuguese source ideas into natural, professional, reflective prose without sounding arrogant, dismissive, or overly dramatic.
- **FR-007**: The article MUST include a section explaining that AI-related job titles are often blended or poorly described, and it MUST clarify that overlapping roles are not automatically the same role.
- **FR-008**: The article MUST include grounded descriptions for AI Engineer, Machine Learning Engineer, Data Scientist, LLM Engineer, Applied AI Engineer, and Software Engineer building AI integrations.
- **FR-009**: Role descriptions MUST avoid invented authority by either using supported source notes when the post workflow accommodates them or by using careful practice-based phrasing when it does not.
- **FR-010**: The post MUST include a structured section for screenshot or print evidence of confusing role descriptions, and each evidence entry MUST support an image source, alt text, caption, source label, and an optional note explaining why the example is confusing.
- **FR-011**: The post MUST NOT include fake screenshots or fabricated external evidence, and any placeholder evidence entries MUST be explicitly labeled as placeholders.
- **FR-012**: The article MUST include a nuanced paragraph asking whether broad "AI engineering" expectations sometimes reduce to consuming an external AI platform or model service at the integration layer, while also explaining that reliable product delivery usually shifts the challenge toward product judgment, context design, data handling, evaluation, cost control, security, observability, and failure handling.
- **FR-013**: The article MUST include a section that reassures software developers that fundamentals still matter, while also stating that developers need to keep learning, follow the market frequently, and become effective with a focused set of modern AI-assisted workflows and practical AI integrations.
- **FR-014**: The article MUST include a practical warning that pure vibe coding can help with general results but often fails detailed goals when the person using it does not understand what should or should not be used.
- **FR-015**: The article MUST state that prompt quality, context quality, domain understanding, and software engineering judgment all matter when using AI tools, and that the person using the tool remains responsible for evaluating trade-offs.
- **FR-016**: The post MUST include an interactive role-and-skills map that helps visitors understand which roles overlap, which skills belong to each role, which responsibilities lean toward software engineering, which lean toward ML/data/research work, and where AI tools fit for a software engineer.
- **FR-017**: The interactive role-and-skills map MUST allow a visitor to select a role, highlight that role's connected skills and responsibilities, and show a details view describing what that role usually requires.
- **FR-018**: The interactive role-and-skills map MUST provide an accessible fallback that communicates the same relationships in a text-based format when the interactive experience is unavailable or unsuitable.
- **FR-019**: The post MUST include role entries for at least AI Engineer, Applied AI Engineer, LLM Engineer, Machine Learning Engineer, Data Scientist, AI Product Engineer, Software Engineer with AI Tools, and Full Stack Engineer building AI integrations.
- **FR-020**: The post MUST include skill and responsibility content that covers, at minimum, API integration, prompt or context design, evaluation, retrieval-augmented workflows, embeddings, vector search, backend architecture, frontend product integration, data pipelines, model training, operational monitoring, security or privacy, cost control, testing, and product judgment.
- **FR-021**: The post MUST include a local cover image or illustration that matches the portfolio's editorial identity, uses a restrained dark palette with subtle gold accents, and avoids generic stock-photo or cartoon styling.
- **FR-022**: The post and interactive role map MUST feel visually integrated with the existing Writing experience and broader portfolio identity rather than appearing as a separate microsite or generic blog template.
- **FR-023**: The post MUST end with a provocative reflection that challenges readers to think about real capability, judgment, and usefulness rather than title inflation alone.
- **FR-024**: The article MUST not claim unsupported professional AI/ML experience, MUST not present the author as definitively an AI Engineer, and MUST treat that label as part of the article's reflection rather than as a resolved credential.
- **FR-025**: The feature MUST preserve the existing Writing experience for other posts and MUST not require a broader redesign of the portfolio, backend services, runtime fetching of role descriptions, or CMS integration.
- **FR-026**: If the current writing workflow supports social preview or Open Graph-style article metadata, the new post MUST populate that metadata with values consistent with the published article title, summary, and cover imagery.

### Key Entities *(include if feature involves data)*

- **Writing Post**: A published portfolio article with identity and presentation attributes such as slug, title, short description, summary, publish date, tags, cover image, ordered sections, final reflection, and optional social-preview metadata.
- **Role Description Entry**: A structured explanation for one AI-related title that describes what the role usually involves, where it overlaps with adjacent titles, and where its emphasis differs.
- **Role Evidence Entry**: A structured article item used to show a real or placeholder example of a confusing role description, including image source, alt text, caption, source label, and an optional explanatory note.
- **Role Graph Profile**: A role-focused content unit that connects one role title to the relevant skills, responsibilities, and category emphasis needed for both the interactive map and its accessible fallback.
- **Role Graph Link**: A relationship between a role and a skill or responsibility that shows overlap, emphasis, or adjacency within the article's explorable role map.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The released Writing experience contains exactly one new published article for this feature, and that article exposes the required slug, reflective title, first-paragraph self-reflection, and cover image without breaking access to existing posts.
- **SC-002**: During acceptance review, 100% of the required article themes are present: role confusion, grounded role descriptions, screenshot or print evidence support, the nuanced API-integration argument, reassurance for developers, the vibe-coding warning, the interactive role map with fallback, and the final provocative reflection.
- **SC-003**: A visitor can select any displayed role in the interactive map and identify that role's connected skills and responsibilities within two interactions, with the same information available in the fallback content.
- **SC-004**: 100% of role-evidence entries shown in the released article are either backed by real labeled assets or explicitly marked as placeholders, and 0 fabricated screenshots appear in the published post.
- **SC-005**: Acceptance review confirms that the article reading flow, role-map interaction, and fallback content remain usable on desktop and mobile layouts and are operable by keyboard for all primary actions.
- **SC-006**: The portfolio owner can update the article's role descriptions, evidence entries, or role-map content through the local writing workflow without redesigning unrelated portfolio sections or introducing external publishing infrastructure.

## Assumptions

- The feature covers one new published article and its supporting assets rather than a broader redesign of the Writing feature.
- The portfolio owner will manually curate any role descriptions, evidence examples, and future source notes instead of relying on runtime external data fetching.
- Some screenshot evidence may be added after the first release, and clearly labeled placeholders are acceptable until real examples are ready.
- The existing writing workflow already supports the baseline article fields used by current posts, and this feature may extend that content shape only as needed for role descriptions, evidence entries, and role-map content.
- The article should remain grounded in practical software engineering perspective rather than claiming deep research, training, or production experience in every AI-related role it discusses.
