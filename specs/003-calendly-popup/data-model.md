# Data Model: Calendly Popup Scheduling Integration

## Overview

This feature does not introduce backend data storage. Its data model defines
the public scheduling configuration, the Contact section interaction surface,
and the client-side popup loading lifecycle required to integrate Calendly
cleanly into the existing portfolio.

## Entity: Scheduling Configuration

**Purpose**: Represents the centralized public configuration used to launch the
Calendly scheduling flow.

**Fields**:
- `label`: visible CTA text, expected to be `Schedule a call`
- `url`: Calendly scheduling URL
- `description`: short professional supporting copy
- `intent`: brief explanation of appropriate conversation types
- `kind`: scheduling CTA classification

**Source Mapping**:
- Owned by `src/content/contact.ts`

**Validation Rules**:
- `url` must be the single source of truth for the Calendly booking link
- `label` must remain concise and professional
- Copy must align with direct professional voice and avoid salesy wording

## Entity: Contact Surface

**Purpose**: Represents the Contact section content area that combines
scheduling with existing contact methods.

**Fields**:
- `availabilityNote`: professional positioning statement
- `schedulingConfig`: optional scheduling CTA configuration
- `contactMethods`: email, LinkedIn, GitHub, and resume actions
- `supportingText`: additional section framing copy

**Source Mapping**:
- Content owned by `src/content/contact.ts`
- Presentation owned by `src/components/sections/ContactSection.tsx`

**Validation Rules**:
- Scheduling CTA must coexist with existing contact methods
- Existing contact options must remain visible and usable
- The section must remain uncluttered before scheduling is triggered

## Entity: Calendly Resource State

**Purpose**: Tracks whether Calendly's hosted assets are available for popup
use during the current browser session.

**Fields**:
- `scriptStatus`: idle, loading, loaded, or failed
- `styleStatus`: idle, loading, loaded, or failed
- `hasCalendlyGlobal`: whether the global Calendly object is available
- `errorMessage`: optional failure context

**Source Mapping**:
- Owned by `src/lib/integrations/calendly.ts`

**Validation Rules**:
- Assets should only be injected once per session
- Failed loads must not break the homepage
- The helper must distinguish ready state from failure state

## Entity: Popup Scheduling Request

**Purpose**: Represents a user-initiated attempt to open the Calendly popup.

**Fields**:
- `source`: Contact section CTA
- `url`: centralized scheduling URL
- `triggerMethod`: click or keyboard activation
- `result`: opened, fallback-opened, or failed-gracefully

**Validation Rules**:
- Requests must be user initiated
- Popup launch must not require pointer-only interaction
- Duplicate activations should remain stable and not stack broken states

## Entity: Fallback Contact State

**Purpose**: Defines the safe behavior when the Calendly popup cannot be opened
normally.

**Fields**:
- `fallbackAction`: alternate navigation or message strategy
- `preserveContactMethods`: boolean requirement to keep existing methods visible
- `userFeedback`: optional short message or UI state

**Validation Rules**:
- Fallback must preserve the rest of the Contact section
- Fallback must not remove or replace other contact routes
- Fallback messaging must remain concise and professional

## Relationships Summary

- `Scheduling Configuration` feeds the `Contact Surface`
- `Contact Surface` triggers a `Popup Scheduling Request`
- `Popup Scheduling Request` depends on `Calendly Resource State`
- `Fallback Contact State` applies if `Calendly Resource State` is not usable

## Suggested Local File Mapping

```text
src/
├── content/
│   └── contact.ts
├── components/sections/
│   └── ContactSection.tsx
├── lib/
│   ├── content/index.ts
│   └── integrations/calendly.ts
└── types/
    └── content.ts
```
