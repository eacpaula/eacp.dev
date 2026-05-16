# Quickstart: Calendly Popup Scheduling Integration

## Goal

Add a `Schedule a call` CTA to the existing Contact section that opens Evandro's
Calendly booking flow in a popup without cluttering the page or breaking the
site's static-first architecture.

## Prerequisites

- Node.js version compatible with the current Vite toolchain
- npm available locally
- Existing project dependencies installed with `npm install`

## Implementation Setup

1. Review the existing Contact section in `src/components/sections/ContactSection.tsx`.
2. Review the current contact content model in `src/content/contact.ts` and
   `src/types/content.ts`.
3. Review the existing content re-export path in `src/lib/content/index.ts`.
4. Review Calendly's official popup button guidance and hosted resource
   requirements before implementation.

## Recommended Implementation Order

1. Extend the content model:
   - Add centralized scheduling config in `src/content/contact.ts`
   - Extend typed content definitions in `src/types/content.ts`
   - Re-export any new content entries through `src/lib/content/index.ts`
2. Add the Calendly helper:
   - Create `src/lib/integrations/calendly.ts`
   - Implement one-time hosted resource loading
   - Implement popup launch and graceful failure return values
3. Update the Contact section:
   - Render the new `Schedule a call` CTA
   - Keep email, LinkedIn, GitHub, and resume options visible
   - Preserve keyboard accessibility and minimal visual clutter
4. Validate degraded behavior:
   - Confirm the Contact section still works if Calendly resources fail
   - Confirm duplicate activations remain stable
5. Run project validation:
   - `npm run lint`
   - `npm run build`
   - Optional `npm run check`

## Suggested Verification Flow

1. Open the homepage and confirm the Contact section shows a visible
   `Schedule a call` CTA without an inline calendar.
2. Activate the CTA on desktop and confirm the Calendly popup opens using
   `https://calendly.com/eacpaula/chat`.
3. Activate the CTA using keyboard navigation and confirm the interaction still
   works.
4. Review the Contact section on mobile width and confirm the CTA remains clear
   without overwhelming the layout.
5. Simulate Calendly unavailability and confirm the rest of the page and
   contact options remain usable.
6. Run lint and build checks to confirm static build compatibility remains
   intact.
