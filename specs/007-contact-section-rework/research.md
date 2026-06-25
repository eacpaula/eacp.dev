# Research: Contact Section Rework with Center Portrait and Fullscreen Resume Viewer

## Decision: Replace the current Contact content stack with a minimal three-part structure

**Rationale**: The current section combines a strong heading, explanatory copy,
an availability paragraph, a verbose scheduling card, and a list of contact
cards. The approved specification instead favors a faster scan path: friendly
heading first, direct contact details around the portrait second, and concise
actions third. A three-part structure keeps the section human, faster to scan,
and easier to maintain.

**Alternatives considered**:
- Keep the current heading-and-card layout and only change the text: rejected
  because the current structure still gives too much visual weight to the
  scheduling block and does not satisfy the new left / center / right contact
  composition.
- Expand into multiple nested cards with separate email and phone panels:
  rejected because it would add clutter back into a feature that is explicitly
  supposed to become simpler.

## Decision: Keep the new heading warm and professional, using "Let's connect if my work resonates with what you're building." as the preferred implementation target

**Rationale**: The specification already provides a preferred line and defines
the tonal guardrails clearly. The implementation should treat that line as the
default heading and only adjust if a closely aligned variant improves wrapping
or readability without changing tone.

**Alternatives considered**:
- Keep the existing title and only soften supporting copy: rejected because the
  current title is explicitly called out as too arrogant.
- Introduce a more playful or casual heading: rejected because the portfolio is
  still recruiter-facing and needs to remain professional.

## Decision: Reuse `src/assets/hero-editorial-portrait.png` directly and frame it like an intentional secondary portrait surface

**Rationale**: The site already uses this portrait successfully in the Hero
section and the specification explicitly requires reusing it. Reusing the same
asset keeps the identity consistent and avoids asset churn. The Contact section
should frame it with the same sketch-shell language, but at a smaller and more
centered scale that supports the direct-contact layout instead of dominating
the page.

**Alternatives considered**:
- Generate a new portrait or illustration: rejected because the specification
  explicitly forbids replacing the asset.
- Reuse the portrait without framing treatment: rejected because the surrounding
  layout already uses sketched surface framing, and an unframed image would
  feel visually detached.

## Decision: Split Contact interactions into direct-contact rails and compact action buttons

**Rationale**: Email and phone now serve a different purpose from LinkedIn,
GitHub, scheduling, and resume review. Visible email and phone should read like
immediate contact facts, while the four lower actions should behave like
concise follow-up tools. Splitting these two layers makes the hierarchy clear
and avoids overloading a single array of uniform cards with mismatched roles.

**Alternatives considered**:
- Keep every item in one shared contact-method card list: rejected because the
  new layout needs direct contact details to flank the portrait rather than sit
  inside the same repeated-card treatment as profile and resume actions.
- Hide email and phone behind buttons to match the lower actions: rejected
  because the specification explicitly requires visible direct-contact text.

## Decision: Keep Calendly as a single action button backed by the existing popup helper

**Rationale**: The current `src/lib/integrations/calendly.ts` helper already
handles one-time hosted resource loading, popup launch, and graceful fallback.
The new feature only changes how scheduling is presented. Preserving the helper
and collapsing the UI to one button plus compact live feedback removes clutter
without re-solving the third-party integration.

**Alternatives considered**:
- Replace the popup flow with an inline embed: rejected because the current
  feature contract and the new specification both reject a bulky inline
  scheduling surface.
- Replace the helper with a direct external link only: rejected because the
  popup-first behavior is already implemented and remains a better experience
  when available.

## Decision: Scope the fullscreen resume viewer to the Contact section's Resume action only

**Rationale**: The specification bounds this feature to the Contact section and
the resume opening experience tied to it. The site also exposes Resume actions
from the header and hero. Changing every resume trigger at once would widen
scope into unrelated surfaces and create broader regression risk. The plan
therefore scopes the fullscreen viewer to the Contact section action while
leaving other resume links unchanged for now.

**Alternatives considered**:
- Convert every Resume link across the site to the fullscreen viewer in the
  same feature: rejected because it expands the feature beyond the approved
  scope.
- Keep the Contact section Resume action as a plain link: rejected because the
  specification explicitly requires a fullscreen in-site viewer.

## Decision: Use a fullscreen dialog with a browser-native embedded PDF surface and explicit toolbar actions

**Rationale**: The project does not already have a general-purpose modal
system, and the specification does not justify a dependency-heavy PDF viewer.
A small contact-scoped fullscreen dialog can render the existing PDF inside an
embedded browser surface while adding a custom top toolbar for download, print,
and close. This provides an in-site reading experience without introducing a
new document-rendering library.

**Alternatives considered**:
- Add a third-party PDF viewer package: rejected because it increases bundle
  cost and maintenance for a simple two-page resume.
- Open the PDF in a new tab only: rejected because it does not satisfy the
  in-site fullscreen viewing requirement.

## Decision: Embed the PDF with an iframe and keep toolbar actions independent from browser-native controls

**Rationale**: An `iframe` gives the resume a predictable fullscreen region and
lets modern browsers display their native PDF rendering behavior without custom
parsing. The feature's required controls should live in the site's own toolbar
instead of depending on browser-specific embedded PDF chrome. If print cannot
be triggered cleanly inside the embedded context, the print action should fall
back to opening the PDF in a new tab for browser-native printing.

**Alternatives considered**:
- Depend on built-in PDF toolbar controls alone: rejected because the
  specification requires visible top actions controlled by the site.
- Use a custom PDF renderer: rejected because the site does not need page-level
  parsing, annotation, or search features.

## Decision: Render the resume viewer through a small portal-backed dialog with explicit focus and escape handling

**Rationale**: The repository currently has no reusable fullscreen overlay
component. Rendering the viewer through a local `createPortal`-backed dialog
keeps it visually above the rest of the page, avoids z-index coupling with the
Contact section, and supports focus management, escape handling, and scroll
locking in one small component.

**Alternatives considered**:
- Render the overlay inline inside the Contact section without a portal:
  rejected because fixed stacking can become harder to reason about as the site
  grows and the viewer should conceptually escape the section.
- Add a modal dependency: rejected because React DOM already provides the
  primitives needed for a simple accessible fullscreen dialog.

## Decision: Add only minimal global CSS needed for the new layout and viewer shell

**Rationale**: The site already has strong shared tokens and sketch-surface
classes in `src/styles/globals.css`. The rework should lean on those existing
primitives and add only the smallest set of contact-specific utility classes
needed for the portrait layout, direct-contact rails, and fullscreen viewer
shell.

**Alternatives considered**:
- Build a fully custom visual subsystem just for Contact: rejected because it
  would drift from the rest of the site and violate the simplicity principle.
- Inline all styling directly in JSX without new shared class support: rejected
  because the viewer shell and responsive contact layout would become harder to
  maintain and tune.
