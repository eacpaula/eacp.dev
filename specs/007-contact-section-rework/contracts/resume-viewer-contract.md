# Contract: Fullscreen Resume Viewer

## Purpose

This contract defines the in-site fullscreen experience used when the Contact
section's `Resume` action is activated.

## Required Viewer Responsibilities

```text
src/features/contact/components/ResumeViewerModal.tsx
```

- Render a fullscreen overlay or dialog above the portfolio content
- Provide visible top-level actions for `Download`, `Print`, and `Close`
- Embed the existing resume PDF inside the viewer when browser support allows
- Preserve a readable fallback path when embedded PDF rendering is limited

## Required Behavior

- The viewer opens from the Contact section Resume action in one interaction
- The viewer must expose toolbar actions before the embedded document region
- The viewer must provide a clear close action and support escape-to-close
- The viewer must restore focus to the originating trigger when it closes
- The viewer must keep the rest of the page inert enough that background
  interaction is not mistaken for active modal content

## Embedded Document Contract

- The embedded PDF surface should use the browser's native rendering behavior
- The viewer toolbar must not depend on browser-native PDF controls being
  visible
- Download must always remain available even when embedded rendering fails
- Print should use the embedded context when available and fall back to opening
  the PDF in a new tab for browser-native printing when necessary

## Accessibility Rules

- The overlay must expose `role="dialog"` and `aria-modal="true"`
- The viewer must have a programmatic label
- Toolbar actions must have clear accessible names
- Keyboard users must be able to reach download, print, embedded content, and
  close controls without pointer-only interaction
- Initial focus must move into the viewer when opened

## Failure Rules

- If the PDF does not render inside the embedded surface, the viewer must not
  become a dead end
- If print cannot be executed in-place, the user must still have a clear path
  to print through the browser's native PDF experience
- Repeated open and close actions must not stack duplicate overlays or leave
  the page in a scroll-locked state
