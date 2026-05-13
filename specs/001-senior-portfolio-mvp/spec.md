# Feature Specification: Senior Full Stack Engineer Portfolio MVP

**Feature Branch**: `001-senior-portfolio-mvp`

**Created**: 2026-05-12

**Status**: Draft

**Input**: User description: "Create the first complete feature specification for the MVP of eacp.dev, a personal portfolio and technical blog platform for Evandro Antonio da Costa de Paula, using the constitution and provided profile source files as the content source of truth."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand Professional Positioning Fast (Priority: P1)

An international recruiter or hiring manager lands on the homepage and quickly understands who Evandro is, what seniority level he operates at, and which engineering strengths define his profile.

**Why this priority**: If the homepage does not establish clear senior-level positioning within seconds, the site fails its primary recruiting purpose.

**Independent Test**: Can be fully tested by opening the homepage and verifying that the hero and summary content communicate name, senior-level role, full stack positioning, core strengths, and resume/contact actions without requiring any other section.

**Acceptance Scenarios**:

1. **Given** a first-time visitor opens the homepage, **When** the hero section is visible, **Then** the page shows Evandro's name, a concise senior-level headline, full stack positioning, and clear actions for resume, contact, GitHub, and LinkedIn.
2. **Given** a recruiter scans the hero and professional summary, **When** they spend up to 10 seconds on the page, **Then** they can identify Evandro as a senior full stack engineer with strong frontend, backend, cloud, API, CI/CD, and modernization experience.

---

### User Story 2 - Evaluate Engineering Impact Credibly (Priority: P2)

A technical lead, interviewer, or hiring manager reviews the site to understand whether Evandro has delivered meaningful engineering outcomes in real product environments.

**Why this priority**: Senior credibility depends on concrete accomplishments, not generic skill lists or vague self-description.

**Independent Test**: Can be fully tested by reviewing the engineering impact and experience overview sections and confirming they present source-backed accomplishments with context, contribution, impact, and related technologies.

**Acceptance Scenarios**:

1. **Given** a visitor opens the engineering impact section, **When** they review each impact item, **Then** each item includes the problem or context, Evandro's contribution, the result or impact, and the related technologies.
2. **Given** a visitor compares the experience overview to the impact section, **When** they scan both sections, **Then** the content feels consistent, non-duplicative, and grounded in real professional history rather than inflated marketing claims.

---

### User Story 3 - Access Proof Points and Future Content Paths (Priority: P3)

A visitor who is interested in follow-up conversations wants direct access to Evandro's external profiles, resume, contact options, and evidence that the site will expand into case studies and technical writing.

**Why this priority**: The MVP must convert interest into practical next steps while signaling future depth without requiring blog or CMS infrastructure yet.

**Independent Test**: Can be fully tested by confirming the page provides working external actions, a contact section, case study preview cards, and a blog placeholder with future article topics.

**Acceptance Scenarios**:

1. **Given** a visitor wants to follow up, **When** they reach the contact area, **Then** they can access email, LinkedIn, GitHub, and resume actions without exposure of unnecessary personal details on the page.
2. **Given** a visitor is looking for deeper technical content, **When** they review the case study and blog placeholder sections, **Then** they see credible future content topics aligned with Evandro's real experience and labeled as previews or coming soon.

### Edge Cases

- What happens when one of the expected profile source files is missing or incomplete? The MVP content set must fall back to the available source files and omit unsupported claims rather than inventing replacements.
- How does the site handle visitors on small screens or with keyboard-only navigation? All primary content and actions must remain readable, reachable, and understandable without relying on hover or dense layouts.
- What happens when an external profile link or resume asset is unavailable at deploy time? The site must avoid presenting broken or misleading calls to action in the published MVP.
- How does the MVP handle future case studies and blog entries before real content exists? The site must clearly label preview content as upcoming rather than implying published articles or detailed writeups already exist.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST publish a public homepage for `eacp.dev` that positions Evandro Antonio da Costa de Paula as a senior full stack software engineer for international recruiting and hiring audiences.
- **FR-002**: The system MUST present a hero section that displays Evandro's name, a concise senior-level headline, full stack engineering positioning, and primary actions for resume, contact, GitHub, and LinkedIn.
- **FR-003**: The system MUST present a professional summary section in English that describes approximately 12 years of software engineering experience and highlights business-relevant strengths in full stack engineering, frontend architecture, backend and API work, cloud exposure, CI/CD, and international collaboration.
- **FR-004**: The system MUST present an engineering impact section that includes source-backed accomplishments covering Angular modernization, reusable component library work, cross-project reuse, CI/CD and security improvements, testing quality, API documentation, and performance optimization where supported by the profile context files.
- **FR-005**: The system MUST structure each engineering impact item with four clearly scannable elements: problem or context, action or contribution, result or impact, and related technologies.
- **FR-006**: The system MUST present a skills and technology section derived from the skills CSV and organize skills into recruiter-friendly categories including Frontend, Backend, Cloud, DevOps/CI/CD, Databases, Testing/Quality, APIs, and AI/Automation.
- **FR-007**: The system MUST visually prioritize core skills for fast scanning without presenting years of experience in a way that feels noisy, inflated, or difficult to review.
- **FR-008**: The system MUST present a concise experience overview section summarizing relevant roles and contexts supported by the source files, with emphasis on Tailwind Business Ventures, Acuity Brands or MDFCommerce context if present, OxDreams, FullSoft, Saga Sistemas, FDD, and AxysWeb.
- **FR-009**: The system MUST ensure each experience overview item includes company or project context, role, main contributions, relevant technologies, and business or engineering impact without reproducing the full resume verbatim.
- **FR-010**: The system MUST include a featured case studies section containing preview cards for Enterprise Angular Modernization, React Component Library at Scale, CI/CD and Security Automation, Performance Optimization in Product Systems, and Scalable Full Stack Architecture, with each card clearly labeled as upcoming content.
- **FR-011**: The system MUST include a blog placeholder section that signals future technical writing and lists source-aligned article topics without implying that dynamic blog integration already exists.
- **FR-012**: The system MUST include a contact section that offers professional follow-up paths through email, LinkedIn, GitHub, and resume access, while avoiding unnecessary exposure of personal information directly in page copy.
- **FR-013**: The system MUST use English copy that is concise, professional, recruiter-friendly, and free from junior-style portfolio language, exaggerated adjectives, fake projects, or unsupported claims.
- **FR-014**: The system MUST derive public claims, technologies, companies, metrics, and achievements only from the approved project context files available at specification time.
- **FR-015**: The system MUST omit, soften, or generalize any requested statement that cannot be substantiated by the approved source files instead of inventing details.
- **FR-016**: The system MUST provide clear navigation so visitors can move between hero, summary, impact, skills, experience, case studies, blog preview, and contact sections without confusion.
- **FR-017**: The system MUST support responsive reading and interaction across mobile and desktop layouts while preserving readability and scannability for recruiter audiences.
- **FR-018**: The system MUST meet baseline accessibility expectations by using semantic structure, descriptive action labels, and content that remains understandable without decorative motion effects.
- **FR-019**: The system MUST include search-engine-friendly page metadata that reflects Evandro's professional positioning and supports discovery by relevant hiring audiences.
- **FR-020**: The system MUST remain compatible with static-first, low-cost hosting and MUST NOT require backend services, authentication, CMS infrastructure, or runtime integrations for the MVP.
- **FR-021**: The system MUST keep future expansion paths visible by reserving clear content structures for later case study detail pages and blog integration.
- **FR-022**: The system MUST ensure resume and external profile actions resolve correctly in the published MVP.

### Key Entities *(include if feature involves data)*

- **Profile Positioning**: The core professional identity presented on the homepage, including name, senior-level headline, summary, and audience-facing value proposition.
- **Impact Item**: A structured accomplishment entry containing context, contribution, result, and related technologies, used to demonstrate engineering credibility.
- **Skill Group**: A categorized collection of source-backed technical skills organized for fast recruiter scanning.
- **Experience Summary**: A concise representation of one relevant professional role or company context, including contributions and impact.
- **Case Study Preview**: A placeholder content card representing a future in-depth engineering writeup.
- **Blog Topic Preview**: A placeholder entry representing a future technical article topic aligned with real experience.
- **Contact Method**: A professional follow-up option such as email, LinkedIn, GitHub, or resume access.
- **Source Content Record**: An approved source artifact used to validate claims, such as the constitution, profile summary, skills CSV, and optional content guidelines.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In first-view usability review, a recruiter or hiring manager can identify Evandro's name, seniority level, and full stack positioning within 10 seconds of landing on the homepage.
- **SC-002**: In content review, 100% of publicly displayed professional claims can be traced back to one or more approved source files with no unsupported companies, metrics, projects, or technologies introduced.
- **SC-003**: A visitor can reach resume, LinkedIn, GitHub, and contact actions in one interaction from the homepage hero or contact area.
- **SC-004**: A reviewer can identify at least five concrete engineering impact examples on the site without needing to open the full resume.
- **SC-005**: On mobile and desktop layouts, all core sections remain readable and navigable without horizontal scrolling or hidden primary actions.
- **SC-006**: The MVP clearly distinguishes current content from future content by labeling all case study and blog preview items as upcoming or placeholder content.
- **SC-007**: Stakeholder review confirms the MVP avoids generic junior portfolio patterns and presents a credible senior-level engineering profile.

## Assumptions

- The closest available source files for profile content are [docs/profile/evandro-resume-summary.md](../../docs/profile/evandro-resume-summary.md) and [docs/profile/skills.csv](../../docs/profile/skills.csv), since the requested `.specify/docs/profile/*` files are not present in the repository.
- No `content-guidelines.md` file is currently available, so content rules come from the constitution and the user request.
- The MVP is a single public marketing-style site focused on professional positioning, not a multi-page application with separate authenticated areas.
- The resume asset, GitHub profile, LinkedIn profile, and contact route already exist or will exist by launch, and the MVP only needs to surface them clearly.
- "Around 12 years of experience" is an acceptable summary because the available source files describe 11+ to 12+ years of experience depending on how the timeline is summarized.
- Future case studies and blog content are intentionally placeholder-only in the MVP and do not require publishing workflows yet.
- The site may mention technologies such as GraphQL only if those technologies are supported by the approved source files, even if they are not emphasized in every summary document.
