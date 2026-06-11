<!--
Sync Impact Report
Version change: 1.1.0 → 1.2.0
List of modified principles: expanded Distinct Visual Identity; added Design System Source of Truth
Added sections: none
Removed sections: none
Templates requiring updates:
✅ updated `.specify/templates/plan-template.md`
✅ verified no change required `.specify/templates/spec-template.md`
✅ verified no change required `.specify/templates/tasks-template.md`
✅ no `.specify/templates/commands/` directory present to update
Follow-up TODOs: none
-->

# eacp.dev Constitution

## Core Principles

### Real Engineering Impact
Prioritize real engineering impact over flashy visuals.

Rationale: To communicate engineering credibility, architecture thinking, technical leadership, and real-world impact for senior opportunities.

### Authentic Content
Avoid generic junior-style portfolio patterns. Avoid fake projects or inflated claims.

Rationale: Position for international senior software engineering roles by demonstrating genuine experience and avoiding common pitfalls.

### Cost-Effective Hosting
Keep the site static-first and low-cost/free to host.

Rationale: Minimize operational costs while maintaining professional presentation and scalability.

### Clean Codebase
Use clean, maintainable React and TypeScript.

Rationale: Ensure long-term maintainability and demonstrate engineering best practices in modern web development.

### Simple Architecture
Prefer simple architecture over unnecessary complexity.

Rationale: Focus on delivering value efficiently without overengineering solutions.

### Baseline Quality
Keep accessibility, SEO, responsiveness, and performance as baseline requirements.

Rationale: Meet professional standards for user experience, discoverability, and technical excellence.

### Minimalist UI
Use minimalist, readable, professional UI. Use subtle animations only when they improve clarity.

Rationale: Prioritize content readability and professionalism over visual distractions.

### Distinct Visual Identity
The website MUST have its own distinct identity and MUST NOT closely imitate any
single portfolio reference. Portfolio references may inform structure, clarity,
and interaction quality, but layout, colors, spacing, and visual language must
be adapted to Evandro's own brand. The design must feel closer to a confident
technology or software engineering brand than a warm editorial personal blog.
Avoid beige-heavy palettes, weak contrast, or visual choices that make the site
feel too similar to any reference website.

Rationale: The portfolio must communicate a recognizable engineering brand
instead of derivative design taste.

### Design System Source of Truth
The root [`DESIGN.md`](/mnt/development/eacp.dev/DESIGN.md) file MUST be the
canonical source of truth for the design system. All visual decisions,
including color usage, typography, spacing, shape language, elevation,
component treatment, and overall brand expression, MUST follow `DESIGN.md`
before implementation begins. TailwindCSS theme tokens, component styles, and
feature-level UI decisions MUST implement and stay aligned with that document
rather than redefining or drifting from it. If implementation constraints require
a design-system change, update `DESIGN.md` first or as part of the same change.

Rationale: A single explicit design authority prevents visual drift, keeps
implementation aligned with brand intent, and makes design review testable.

### Future Blog Integration
Prepare for future blog integration with a headless/free platform, but do not require backend infrastructure.

Rationale: Plan for content expansion without introducing immediate complexity or costs.

### Recruiter-Focused Content
Prefer content that can support recruiters, hiring managers, and technical interviewers.

Rationale: Tailor portfolio content to demonstrate skills and impact relevant to senior-level hiring processes.

### Direct Professional Voice
Content MUST avoid third-person narration that reads like an external biographer
describing Evandro. Prefer direct, confident, concise professional language. Use
first-person selectively when it sounds natural, especially in introduction or
About sections. Use neutral, impact-oriented phrasing for achievements,
experience, and case studies. Avoid exaggerated marketing language, generic
biography-style copy, buzzword-heavy claims, and unsupported statements.

Rationale: The site should sound like a credible senior engineer presenting real
work, not a detached profile summary or inflated marketing page.

### Technical Stack
Use Vite + React + TypeScript, TailwindCSS for styling, GitHub Pages for hosting, GoDaddy DNS for the eacp.dev custom domain. Plan blog integration for Hashnode or similar free/headless platform.

Rationale: Leverage modern, maintainable technologies with low hosting costs and future extensibility.

### Spec-Driven Development
Follow Spec-Driven Development. Specs must define user value, constraints, acceptance criteria, and non-goals before implementation. Do not implement features before a spec, plan, and tasks are created. Keep specs small and focused. Avoid overengineering. Require human review before major implementation decisions.

Rationale: Ensure high-quality, focused development with clear requirements and stakeholder alignment.

## Technical Direction

Technology stack: Vite + React + TypeScript for frontend development.
TailwindCSS for styling. GitHub Pages for static hosting. GoDaddy DNS for
custom domain. Future blog integration via headless platform without backend
requirements.

Hosting constraints: Static-first approach, low-cost/free hosting, no server-side infrastructure required.

Performance standards: Baseline accessibility, SEO, responsiveness, and performance requirements for all features.

Design system direction: Use the existing TailwindCSS theme configuration as the
implementation layer for the design system, with the root `DESIGN.md` file as
the primary source of truth for brand colors, spacing, typography, component
behavior, and design tokens. The visual style must be minimalist, modern,
technical, and distinct from any single reference portfolio.

## Development Workflow

AI workflow principles: Follow Spec-Driven Development process. Create specs with user value and constraints first. Generate plans and tasks before implementation. Keep work focused and avoid overengineering. Require human review for major decisions.

Quality gates: All implementations must comply with constitution principles. Specs, plans, and tasks must be reviewed for alignment.

Acceptance review: Before accepting implementation, review whether the design
has a distinct identity, follows `DESIGN.md`, uses the project's TailwindCSS
implementation consistently with that document, avoids copying reference
websites, and uses a direct professional voice instead of third-person
narration.

## Governance

Constitution supersedes all other practices. Amendments require following the spec-driven development workflow: create spec defining the change, generate plan and tasks, implement with human review.

Versioning policy: Semantic versioning - MAJOR for backward incompatible governance/principle removals or redefinitions, MINOR for new principle/section added or materially expanded guidance, PATCH for clarifications, wording, typo fixes, non-semantic refinements.

Compliance review expectations: All specs, plans, tasks, and implementations must verify compliance with constitution principles. Complexity must be justified against simplicity principle.

**Version**: 1.2.0 | **Ratified**: 2026-05-12 | **Last Amended**: 2026-05-16
