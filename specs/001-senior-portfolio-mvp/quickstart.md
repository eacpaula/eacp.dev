# Quickstart: Senior Full Stack Engineer Portfolio MVP

## Goal

Implement the first public version of `eacp.dev` as a static, recruiter-focused React site using local structured content files and a maintainable section-based architecture.

## Prerequisites

- Node.js version compatible with the current Vite toolchain
- npm available locally

## Setup

1. Install dependencies with `npm install`.
2. Add Tailwind CSS to the existing Vite + React + TypeScript setup.
3. Remove the default starter UI and replace it with the portfolio homepage shell.

## Recommended Implementation Order

1. Configure the static frontend foundation:
   - Update Vite config for GitHub Pages compatibility
   - Add Tailwind CSS integration
   - Establish base semantic layout and global styles
2. Create the typed local content layer:
   - Add `src/content/` files for profile, achievements, skills, experience, case studies, blog topics, and contact methods
   - Add shared content types under `src/types/`
3. Build the homepage section components:
   - Header/navigation
   - Hero
   - Professional summary
   - Engineering impact
   - Skills and technology
   - Experience overview
   - Case studies preview
   - Blog preview
   - Contact
4. Integrate content into the page shell:
   - Compose the single-page flow in `App.tsx`
   - Ensure primary CTAs and resume links resolve correctly
5. Add quality and deployment refinements:
   - SEO metadata
   - Responsive behavior
   - Accessibility polish
   - GitHub Pages deployment validation

## Suggested Source Layout

```text
src/
├── app/
│   └── AppShell.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── content/
│   ├── achievements.ts
│   ├── blog-topics.ts
│   ├── case-studies.ts
│   ├── contact.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── site-metadata.ts
│   └── skills.ts
├── lib/
│   ├── content/
│   └── seo/
├── styles/
│   └── globals.css
├── types/
│   └── content.ts
├── App.tsx
└── main.tsx
```

## Verification

1. Run `npm run lint`.
2. Run `npm run build`.
3. Manually review the homepage on mobile and desktop widths.
4. Verify keyboard navigation, visible focus states, and CTA behavior.
5. Verify all public claims remain aligned with approved source documents.

## Future Extension Path

- Add case study detail pages using the existing preview content shape
- Add a blog adapter that can read Hashnode or another headless source while preserving the current local topic schema
