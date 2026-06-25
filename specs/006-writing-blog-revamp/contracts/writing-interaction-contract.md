# Contract: Writing Interaction

## Purpose

Define the user-visible states, navigation rules, accessibility guarantees, and
replacement outcomes for the Writing feature.

## Required Views

- **Writing list view**: shows published posts as stacked full-width list
  entries with cover image, title, and short description
- **Writing detail view**: shows the full article, cover image, title, summary,
  publish date, tags, body content, and share actions
- **Unavailable-post state**: shown when a direct post URL does not map to a
  registered article
- **Empty-state view**: optional safe fallback if no posts are registered

## URL and Navigation Rules

- The home page keeps the existing `#blog` section anchor for the Writing list.
- Each published post lives on a dedicated application route at
  `/writing/:slug`.
- A valid direct-link route must open the matching article on initial load.
- Returning from a post page must lead back to the Writing list without leaving
  the portfolio.
- The header `Writing` navigation item continues to target the Writing section
  rather than a separate site area.

## Selection and Return Rules

- Selecting a list entry opens the corresponding article detail page.
- The detail view must provide an obvious path back to the Writing list.
- If the URL contains an unknown post slug, the feature must show an
  unavailable-post message and a clear return action.
- The list and detail views must preserve the overall app shell, while the post
  route remains visually isolated from the one-page section stack.

## Share Action Rules

- The detail view must expose share actions for LinkedIn, Telegram, and
  WhatsApp.
- Share actions must use simple URL-based handoff behavior only.
- Share URLs must point to the current article's direct-link URL.
- Share controls must expose clear accessible names describing the destination.

## Accessibility Requirements

- Post list entries must be keyboard reachable and visibly focused.
- The detail view must use semantic heading structure and readable article
  hierarchy.
- Image alt text must come from the post content model.
- Share actions and return controls must be keyboard accessible.
- Focus treatment must remain explicit against dark surfaces.
- The long-form reading layout must maintain comfortable line length and
  contrast.

## Responsive Requirements

- Desktop must present vertically stacked entries that use the available width
  cleanly and article detail in a wider editorial reading layout.
- Tablet must keep stacked-entry scan behavior and article width comfortable
  without awkward side crowding.
- Mobile must stack entries cleanly, keep article typography readable, and keep
  share actions easy to reach.
- Cover images must scale without clipping essential visual meaning.

## Replacement Outcomes

- The existing placeholder `BlogPreviewSection` content is removed.
- The Writing section shows only real local post content after the feature is
  implemented.
- Other major sections, navigation labels, and portfolio metadata remain stable
  outside the Writing flow.

## Validation

- A visitor can open a post from the list and return to the list without
  leaving the SPA.
- A direct-link URL opens the matching post when the slug exists.
- An invalid slug produces a graceful unavailable-post state.
- Keyboard-only review confirms access to list entries, article navigation, and
  share actions.
