# Contract: Contact Surface Rework

## Purpose

This contract defines how the Contact section must present direct contact
details, the reused portrait, and the concise follow-up actions.

## Required Content Ownership

```text
src/content/contact.ts
```

## Required Contact Structure

- The Contact section must keep the `Contact` eyebrow and replace the current
  title with a friendlier English heading
- The current explanatory contact paragraph must be removed
- The current explanatory scheduling paragraph must be removed
- The large descriptive scheduling card must be removed
- The main desktop composition must present visible email on the left, the
  portrait in the center, and visible phone on the right
- The lower action row must expose `LinkedIn`, `GitHub`, `Schedule a Call`,
  and `Resume`

## Required Data Surface

- Direct contact details must be modeled separately from lower action buttons
- Email must remain visible as `eacpaula@outlook.com` and use `mailto:`
- Phone must remain visible as `+55 54 98149-1193` and use `tel:`
- The portrait must reuse the existing `hero-editorial-portrait.png` asset
- The resume destination must remain the existing PDF asset

## Consumer Expectations

- `ContactSection.tsx` owns the overall hierarchy and viewer state
- `ContactDirectLinks.tsx` renders the visible email and phone rails
- `ContactActionButtons.tsx` renders the concise lower action row
- `Schedule a Call` continues to use the existing Calendly popup helper
- `Resume` opens the fullscreen in-site viewer instead of acting only as a
  plain external document link

## Responsive Rules

- Desktop keeps the left / center / right arrangement
- Tablet preserves the portrait-first hierarchy with compact but readable side
  content
- Mobile may stack vertically, but reading order must remain clear and all
  actions must stay easy to use

## Accessibility Rules

- Email and phone must be real links
- All action buttons must be keyboard accessible
- Focus states must remain visible
- The portrait must keep meaningful alt text
- Scheduling feedback must remain concise and available to assistive
  technologies if the popup falls back or fails
