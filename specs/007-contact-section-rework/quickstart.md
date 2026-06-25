# Quickstart: Contact Section Rework with Center Portrait and Fullscreen Resume Viewer

## Goal

Rework the existing Contact section into a warmer, simpler layout that uses the
existing portrait as the center focal point, exposes visible direct contact
details, keeps concise follow-up actions, and opens the resume in a fullscreen
in-site viewer with download and print actions.

## Prerequisites

- Node.js version compatible with the current Vite toolchain
- npm available locally
- Existing project dependencies installed with `npm install`

## Implementation Setup

1. Review the approved specification in `specs/007-contact-section-rework/spec.md`.
2. Review the current Contact implementation in
   `src/components/sections/ContactSection.tsx`.
3. Review current contact content and types in `src/content/contact.ts` and
   `src/types/content.ts`.
4. Review the existing Calendly helper in `src/lib/integrations/calendly.ts`.
5. Review the portrait asset usage in `src/components/sections/HeroSection.tsx`.
6. Review existing design tokens and sketch surfaces in `src/styles/globals.css`.

## Recommended Implementation Order

1. Reshape the contact data model:
   - Split visible direct-contact details from lower action buttons
   - Add the new friendly heading and remove obsolete explanatory copy
   - Preserve existing Calendly and resume destinations in the content layer
2. Move Contact into a feature-scoped module:
   - Create `src/features/contact/ContactSection.tsx`
   - Add `ContactDirectLinks.tsx` and `ContactActionButtons.tsx`
   - Update `src/app/AppShell.tsx` imports and wiring
3. Build the resume viewer:
   - Create `ResumeViewerModal.tsx`
   - Render it through a portal-backed fullscreen dialog
   - Embed the existing resume PDF and add download, print, and close actions
4. Simplify scheduling presentation:
   - Reuse `openCalendlyPopup`
   - Collapse scheduling UI to one concise action and compact live feedback
5. Align styling with the design system:
   - Reuse existing sketch-shell and button primitives
   - Add only the minimal global classes needed for the contact layout and
     viewer shell
6. Validate the feature:
   - Confirm copy removals and heading change
   - Confirm portrait reuse and placement
   - Confirm mailto/tel behavior
   - Confirm viewer and scheduling behavior across device sizes

## Suggested Verification Flow

1. Open the homepage and confirm the Contact title and explanatory paragraphs
   have been replaced by the new minimal structure.
2. Confirm desktop layout shows email left, portrait center, phone right, and
   four action buttons below.
3. Review tablet and mobile layouts and confirm the section stacks cleanly
   without losing readability.
4. Activate the email and phone links and confirm `mailto:` and `tel:` targets
   are correct.
5. Activate `Schedule a Call` and confirm the existing Calendly popup behavior
   still works or falls back cleanly.
6. Activate `Resume` and confirm the fullscreen viewer opens with visible
   `Download`, `Print`, and `Close` actions.
7. Verify the resume remains usable if the embedded PDF surface does not render
   cleanly.
8. Review keyboard-only behavior, including opening and closing the viewer.
9. Run:
   - `npm run lint`
   - `npm run test`
   - `npm run build`
10. Confirm no unrelated sections or navigation behavior changed.
