# Quickstart: AI Roles and Software Engineering Blog Post

## Recommended Implementation Order

1. Audit the current Writing implementation in
   `src/features/writing/data/writing.types.ts`,
   `src/features/writing/data/posts.index.ts`,
   `src/features/writing/components/WritingPostDetail.tsx`,
   `src/features/writing/seo.ts`, and `src/features/writing/utils/shareLinks.ts`
   so the new post extends the existing flow instead of bypassing it.
2. Inspect the current D3 and interaction conventions in
   `src/features/skills/` and reuse the same React-owned SVG approach, keyboard
   activation pattern, and restrained motion philosophy for the role map.
3. Extend `writing.types.ts` with the additive role-profile, evidence,
   graph-data, and final-reflection fields before authoring the new post JSON.
4. Create the new post JSON file with the approved slug, ordered section IDs,
   role profiles, placeholder evidence records, graph data, final reflection,
   and share metadata.
5. Add the local SVG cover illustration and a PNG social-preview variant under
   `public/blog/`.
6. Build the post-specific rendering pieces inside `src/features/writing/`
   rather than creating a separate AI-article feature:
   role profiles, evidence gallery, interactive graph, and text fallback.
7. Update `WritingPostDetail.tsx` to render section-linked role profiles,
   evidence entries, the graph section, and the final reflection while keeping
   the existing Spec-Driven Development post unchanged.
8. Add a small graph-layout utility for deterministic node positioning and
   relationship highlighting.
9. Register the new JSON file in `posts.index.ts` and verify publish-date
   ordering, route lookup, and metadata behavior on `/blog/:slug`.
10. Run the validation pass before any optional visual polish beyond the
   approved design system.

## File-by-File Plan

- `src/features/writing/data/writing.types.ts`
  Extend `WritingPost` and `WritingSectionBlock` with `roleProfiles`,
  `roleEvidence`, `roleGraph`, `finalReflection`, and section-level reference
  fields.
- `src/features/writing/data/posts/ai-tools-software-engineering-role-confusion.json`
  Author the full article payload, role records, evidence placeholders, graph
  dataset, and closing reflection.
- `src/features/writing/data/posts.index.ts`
  Register the new post and keep the current date-sort and asset normalization
  behavior.
- `src/features/writing/components/WritingPostDetail.tsx`
  Integrate the new structured section render paths without breaking the
  existing post.
- `src/features/writing/components/WritingRoleProfiles.tsx`
  Render the structured role-description cards or list.
- `src/features/writing/components/WritingEvidenceGallery.tsx`
  Render real evidence cards and placeholder cards without broken image states.
- `src/features/writing/components/WritingRoleGraph.tsx`
  Render the primary SVG node-link graph plus selection behavior and detail
  panel.
- `src/features/writing/components/WritingRoleGraphFallback.tsx`
  Render the accessible text fallback or simplified mobile selection view.
- `src/features/writing/utils/roleGraphLayout.ts`
  Calculate fixed lane positions, link paths, and highlighted relationships
  using D3 helpers only where they add value.
- `src/features/writing/seo.test.ts`
  Extend or add assertions that the new post still produces valid canonical and
  social metadata.
- `src/styles/globals.css`
  Add only the writing-specific styles required for the role cards, evidence
  gallery, graph surface, detail panel, and fallback presentation while staying
  aligned with `DESIGN.md`.
- `public/blog/ai-tools-software-engineering-role-confusion-cover.svg`
  Hold the original local cover illustration for the article.
- `public/blog/ai-tools-software-engineering-role-confusion-cover.png`
  Hold the raster social-preview variant.

## Article Structure Map

- `opening-reflection`
  The honest self-questioning introduction about AI expectations, market noise,
  and whether the work being described is "AI Engineer" work or software
  engineering with AI tools.
- `why-titles-feel-confusing`
  Explain why companies blur titles and why overlap does not make roles
  equivalent.
- `what-these-roles-usually-mean`
  Introduce the role descriptions section and render the ordered role-profile
  records.
- `role-comparison`
  Contrast overlapping roles, clarify where software engineering leans in, and
  preserve nuance.
- `confusing-role-evidence`
  Render screenshot or print placeholders and later real examples.
- `llm-integration-vs-ai-engineering`
  Cover the API-consumption question without dismissing the difficulty of
  reliable product delivery.
- `why-developers-should-not-panic`
  Reassure developers while keeping the learning requirement explicit.
- `why-fundamentals-still-matter`
  Emphasize engineering judgment, testing, data handling, observability,
  security, and cost control.
- `prompt-and-context-quality`
  Cover vibe-coding risks, prompt quality, context quality, and responsibility
  for tradeoffs.
- `interactive-role-graph`
  Introduce the explorable role map and render the graph or fallback view.
- `final-reflection`
  Close with the provocative reflection about titles versus real capability and
  usefulness.

## Cover Image Plan

- Use a local SVG illustration, not stock photography.
- Keep the palette in graphite, off-white, and restrained gold.
- Favor a structured network of role labels, skill paths, and a central
  engineering decision point over literal robots or cartoon AI imagery.
- Ensure the same concept can crop cleanly for both the in-article hero and the
  raster social-preview image.

## Suggested Validation Pass

- Run `npm run lint`.
- Run `npm run test`.
- Run `npm run build`.
- Verify the Writing list shows the new post without regressing the existing
  Spec-Driven Development post.
- Verify `/blog/ai-tools-software-engineering-role-confusion` loads the new
  article and the return path still leads back to `/#blog`.
- Verify social metadata uses the new title, summary, and local social image.
- Verify the role-description section renders all required roles with grounded
  wording.
- Verify placeholder evidence entries never show broken images or fake content.
- Verify graph interaction works by mouse, keyboard, and fallback selection.
- Verify desktop, tablet, and mobile article layouts remain readable and the
  mobile fallback is usable.
- Confirm the article tone stays practical and does not overclaim AI/ML
  credentials.
