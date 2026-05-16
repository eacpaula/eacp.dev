# Research: Calendly Popup Scheduling Integration

## Decision: Use Calendly's popup text/custom button behavior instead of inline embed or floating popup widget

**Rationale**: Calendly's official embed overview lists three options: inline
embed, pop-up text, and pop-up widget. The feature explicitly rejects an
always-visible inline calendar, and the requested interaction is a
user-initiated CTA inside the Contact section rather than a persistent floating
widget. The popup text/custom button behavior matches that requirement most
closely.

**Alternatives considered**:
- Inline embed: rejected because the specification explicitly forbids an
  always-visible calendar in the Contact section.
- Floating pop-up widget: rejected because it introduces a persistent control
  outside the Contact section and is less aligned with the site's intentional,
  minimalist contact surface.

## Decision: Load Calendly's hosted CSS and JavaScript resources only when the scheduling CTA is used

**Rationale**: Calendly's official custom-button guidance requires the hosted
widget CSS and script for the popup to work. Because the specification prefers
avoiding unnecessary resource loading before interaction, the implementation
should load these assets lazily on first CTA activation and reuse them for the
rest of the session.

**Alternatives considered**:
- Preload Calendly resources on initial page load: rejected because it adds
  external requests even when the visitor never opens scheduling.
- Bundle third-party resources locally: rejected because the official popup
  integration expects the hosted assets and local bundling would create extra
  maintenance surface.

## Decision: Isolate Calendly script loading and popup launch in a single integration helper

**Rationale**: The Contact section should remain focused on rendering UI and
handling user interaction. A small helper under `src/lib/integrations/` can own
one-time resource loading, global availability checks, and the call to the
Calendly popup function, keeping the component simple and limiting the
third-party surface area.

**Alternatives considered**:
- Call Calendly directly inside the Contact component: rejected because it
  scatters integration details into presentation code and makes graceful error
  handling harder to manage.
- Add a wrapper dependency for Calendly: rejected because the feature does not
  justify an additional package when the official popup integration is already
  script-based.

## Decision: Store the scheduling URL in the existing content/config layer with the rest of the contact surface

**Rationale**: The site already keeps contact-related public data in
`src/content/contact.ts`. Adding the Calendly URL and CTA metadata there keeps
the single source of truth close to the rest of the Contact section content and
avoids hardcoding the link across components or helpers.

**Alternatives considered**:
- Hardcode the URL directly in `ContactSection.tsx`: rejected because it would
  violate the requirement for one centralized configuration location.
- Store the URL in a separate environment variable: rejected because the value
  is stable public content rather than deployment-specific secret or mutable
  runtime configuration.

## Decision: Fail gracefully by preserving all existing contact options and surfacing a non-breaking fallback path

**Rationale**: The site depends on an external widget for scheduling, so the
homepage cannot assume Calendly will always be reachable. If widget loading or
popup initialization fails, the Contact section should remain intact, continue
to show email, LinkedIn, GitHub, and resume links, and provide a safe fallback
such as opening the scheduling URL directly or showing a lightweight error
state.

**Alternatives considered**:
- No fallback handling: rejected because a failed third-party script would make
  the CTA feel broken and violate the graceful-failure requirement.
- Replace the CTA with a direct external link only: rejected because the
  feature goal is to keep visitors in portfolio context first and use the popup
  experience when possible.

## Decision: Keep validation aligned with the existing lightweight toolchain

**Rationale**: `npm run lint` and `npm run build` already validate the current
Vite + React + TypeScript setup. The new feature mainly adds client-side
interaction and an external script dependency, so the additional quality work
should be manual verification of keyboard activation, mobile behavior, popup
launch, and degraded behavior when Calendly is unavailable.

**Alternatives considered**:
- Add end-to-end browser automation solely for the popup widget: rejected
  because it would be heavier than this feature needs and introduces more
  tooling than the current stack requires.
- Skip manual degraded-state review: rejected because external-service failure
  behavior is one of the feature's core requirements.
