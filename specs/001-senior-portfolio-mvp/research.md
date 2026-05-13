# Research: Senior Full Stack Engineer Portfolio MVP

## Decision: Use a single-page static React application with section navigation

**Rationale**: The MVP is content-first, recruiter-focused, and must communicate positioning within seconds. A single-page layout keeps the architecture simple, avoids unnecessary routing complexity, and supports static hosting on GitHub Pages with minimal deployment risk.

**Alternatives considered**:
- Multi-page portfolio site: rejected because the MVP does not need separate content destinations yet and would add routing, navigation, and duplication complexity.
- Dynamic content application: rejected because the constitution explicitly prefers static-first, low-cost hosting and the MVP excludes backend infrastructure.

## Decision: Use Vite + React + TypeScript with Tailwind CSS integrated through the Vite plugin path

**Rationale**: The repo already uses Vite, React, and TypeScript. Tailwind CSS satisfies the requested stack while keeping styling colocated, scalable, and easy to audit. Using the Vite-first Tailwind integration keeps setup simpler than a heavier custom styling pipeline.

**Alternatives considered**:
- Keep the starter CSS architecture: rejected because it does not match the requested stack and is not suited to the final portfolio visual direction.
- CSS Modules only: rejected because the user explicitly requested Tailwind CSS and the project constitution already endorses it.

## Decision: Store public portfolio content in typed local source files separated from presentational components

**Rationale**: The MVP needs structured local data for profile, skills, experience, achievements, case study placeholders, and blog placeholders. Keeping content in dedicated typed local files makes claims easier to audit against source truth, reduces component complexity, and prepares the project for future content adapters without introducing a CMS now.

**Alternatives considered**:
- Hard-code content directly inside components: rejected because it mixes presentation and content, making future edits and validation harder.
- Add a CMS or remote content source now: rejected because CMS integration is explicitly out of scope for the MVP.

## Decision: Model future blog support behind a local content adapter boundary

**Rationale**: The MVP does not implement Hashnode integration yet, but the data structure should allow it later. A small content-layer abstraction lets the current app read local placeholders now and swap or augment the blog source later without redesigning the page sections.

**Alternatives considered**:
- Directly integrate Hashnode now: rejected because it is out of scope.
- Ignore future blog structure entirely: rejected because the specification requires future-ready content structure.

## Decision: Keep the initial UI architecture section-based and shallow

**Rationale**: The page only needs predictable vertical sections: hero, summary, impact, skills, experience, case studies, blog, and contact. A shallow component tree with one component per section keeps the code maintainable and readable without introducing unnecessary state management or routing.

**Alternatives considered**:
- Build a complex design system first: rejected because the constitution prefers simple architecture and the MVP needs a focused delivery path.
- Use a single large component: rejected because it would make content updates and testing less maintainable.

## Decision: Use semantic HTML landmarks and low-motion enhancements as baseline UX

**Rationale**: Accessibility and readability are baseline constitutional requirements. Semantic sections, descriptive links, strong heading hierarchy, and optional subtle motion will support keyboard navigation, screen readers, and recruiter scanning on desktop and mobile.

**Alternatives considered**:
- Animation-heavy presentation: rejected because it conflicts with the constitution and the user’s design principles.
- Purely decorative layout without strong semantics: rejected because accessibility is a requirement, not a stretch goal.

## Decision: Configure GitHub Pages compatibility at build time

**Rationale**: The MVP must stay deployable as a static site. The plan should account for Vite base-path configuration, static asset references, and a build that works without server rewrites.

**Alternatives considered**:
- Assume root-only hosting with no deployment config: rejected because GitHub Pages often requires explicit base-path handling.
- Add custom server infrastructure: rejected because static-first hosting is a project constraint.

## Decision: Add light validation around content data through TypeScript types and linting

**Rationale**: Since the main product risk is inaccurate or inflated content, type-safe local content structures reduce accidental omissions and inconsistent fields across sections. This aligns with the requirement that claims be traceable to approved source files.

**Alternatives considered**:
- No structured validation: rejected because it increases the chance of inconsistent content and weakens maintainability.
- Runtime schema tooling for every content file: rejected because it is heavier than needed for the MVP.
