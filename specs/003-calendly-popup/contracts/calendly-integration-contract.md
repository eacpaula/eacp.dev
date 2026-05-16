# Contract: Calendly Popup Integration

## Purpose

This contract defines the boundaries for loading Calendly's external widget
resources and triggering the popup scheduling experience.

## Required External Resources

- Calendly hosted stylesheet for popup widget presentation
- Calendly hosted widget script for popup behavior

## Required Helper Responsibilities

```text
src/lib/integrations/calendly.ts
```

- Load Calendly resources safely on demand
- Ensure resources are injected only once per browser session
- Expose a single popup-launch entry point for the Contact section
- Detect and report failure state without throwing unrecoverable UI errors

## Trigger Contract

- The Contact section CTA passes the centralized scheduling URL into the helper
- The helper attempts to ensure Calendly resources are ready before calling the
  popup launch function
- If Calendly popup launch cannot complete, the helper returns a failure result
  that allows the Contact section to degrade gracefully

## Safety Rules

- Do not hardcode the scheduling URL inside the helper
- Do not add a heavy modal framework or custom scheduling system
- Do not load Calendly resources repeatedly after they are already available
- Do not assume Calendly is always reachable

## Compatibility Rules

- The helper must remain compatible with static hosting and client-side
  execution only
- The integration must work on desktop and mobile
- The rest of the homepage must remain usable even if the helper cannot open
  Calendly
