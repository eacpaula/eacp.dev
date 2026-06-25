# Data Model: Contact Section Rework with Center Portrait and Fullscreen Resume Viewer

## Overview

This feature keeps all data client-side. The model defines how the Contact
section separates visible direct-contact information from follow-up actions and
how the fullscreen resume viewer tracks its local UI state.

## Entity: Contact Section Content

**Purpose**: Represents the recruiter-facing content owned by the Contact
feature.

**Fields**:
- `eyebrow`: section label, expected to remain `Contact`
- `heading`: primary friendly section heading
- `availabilityNote`: optional short supporting line if retained
- `directContacts`: visible email and phone entries
- `actions`: LinkedIn, GitHub, scheduling, and resume actions

**Source Mapping**:
- Owned by `src/content/contact.ts`

**Validation Rules**:
- Heading must remain warm, professional, and concise
- Supporting copy must not reintroduce removed explanatory paragraphs
- The section must not contain a large descriptive scheduling card

## Entity: Direct Contact Detail

**Purpose**: Represents one visible contact fact shown beside the portrait.

**Fields**:
- `label`: visible identifier such as `Email` or `Phone`
- `value`: visible text shown to the visitor
- `href`: direct link target such as `mailto:` or `tel:`
- `kind`: `email` or `phone`
- `placement`: `left` or `right` on desktop layouts

**Source Mapping**:
- Content owned by `src/content/contact.ts`
- Presentation owned by `src/features/contact/components/ContactDirectLinks.tsx`

**Validation Rules**:
- `href` must be a real direct-contact link
- `value` must remain visible without reveal interaction
- Desktop placement must keep email left and phone right

## Entity: Contact Action

**Purpose**: Represents one concise follow-up action shown below the portrait
row.

**Fields**:
- `label`: visible action text
- `kind`: `profile`, `scheduling`, or `resume`
- `href`: destination for external profile or asset actions when applicable
- `opensInNewContext`: whether the action navigates externally
- `feedbackMessage`: optional live-region message for actions with degraded
  behavior

**Source Mapping**:
- Content owned by `src/content/contact.ts`
- Scheduling behavior depends on `src/lib/integrations/calendly.ts`

**Validation Rules**:
- Exactly four actions must be present in the Contact action row
- Labels must remain concise and scannable
- Scheduling must keep its popup-first behavior with graceful fallback
- Resume must launch the fullscreen viewer instead of only navigating directly

## Entity: Portrait Surface

**Purpose**: Represents the reused portrait asset inside the Contact section.

**Fields**:
- `src`: existing image asset path
- `alt`: meaningful alternative text
- `frameVariant`: sketch-surface framing treatment aligned with the rest of the
  site

**Source Mapping**:
- Asset stored in `src/assets/hero-editorial-portrait.png`
- Presentation owned by `src/features/contact/ContactSection.tsx`

**Validation Rules**:
- Asset must be the existing approved portrait
- Alt text must remain meaningful
- Portrait must remain the central focal point of the section's desktop layout

## Entity: Resume Viewer State

**Purpose**: Tracks the client-side fullscreen resume experience.

**Fields**:
- `isOpen`: whether the viewer is currently visible
- `sourceAction`: which trigger opened the viewer
- `resumeHref`: PDF path used for embedding and download
- `activeFocusTarget`: initial control to focus when opened
- `fallbackMode`: whether the viewer needs to rely on download or new-tab print
  behavior

**Source Mapping**:
- Owned by `src/features/contact/components/ResumeViewerModal.tsx`

**Validation Rules**:
- Only one viewer instance may be active at a time
- Opening the viewer must not break keyboard navigation
- Closing the viewer must return focus to the originating trigger

## Entity: Resume Viewer Toolbar Action

**Purpose**: Represents one top-level control inside the fullscreen viewer.

**Fields**:
- `label`: visible action name
- `kind`: `download`, `print`, or `close`
- `interactionType`: direct link or button action
- `accessibleLabel`: explicit accessible name when needed

**Validation Rules**:
- Download, print, and close actions must be visible before document reading
- Each toolbar action must be keyboard reachable
- Print behavior must degrade gracefully if embedded printing is unavailable

## Relationships Summary

- `Contact Section Content` owns `Direct Contact Detail` entries and
  `Contact Action` entries
- `Portrait Surface` sits between the two `Direct Contact Detail` entries in
  desktop layout
- `Contact Action` of kind `scheduling` delegates to the existing Calendly
  popup helper
- `Contact Action` of kind `resume` opens `Resume Viewer State`
- `Resume Viewer State` exposes `Resume Viewer Toolbar Action` controls

## Suggested Local File Mapping

```text
src/
├── content/
│   └── contact.ts
├── features/
│   └── contact/
│       ├── ContactSection.tsx
│       └── components/
│           ├── ContactActionButtons.tsx
│           ├── ContactDirectLinks.tsx
│           └── ResumeViewerModal.tsx
├── lib/
│   └── integrations/
│       └── calendly.ts
└── types/
    └── content.ts

public/
└── resume/
    └── resume.pdf
```
