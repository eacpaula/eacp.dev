---
name: Sketch Editorial Monochrome
colors:
  background: '#0b0b0a'
  surface: '#11110f'
  surface-dim: '#161513'
  surface-bright: '#24221f'
  surface-container-lowest: '#080807'
  surface-container-low: '#12110f'
  surface-container: '#171614'
  surface-container-high: '#1f1e1b'
  surface-container-highest: '#2a2824'
  surface-paper: '#d8d4cd'
  surface-paper-strong: '#e4e0d8'
  on-surface: '#f4f1ea'
  on-surface-variant: '#c7c1b5'
  on-paper: '#151412'
  inverse-surface: '#f4f1ea'
  inverse-on-surface: '#1a1916'
  outline: '#3b382f'
  outline-variant: '#292721'
  surface-stroke: '#302d27'
  primary: '#ffffff'
  on-primary: '#12110f'
  accent: '#c8a66b'
  accent-muted: '#e8d8b0'
  accent-soft: 'rgba(200, 166, 107, 0.12)'
  accent-soft-strong: 'rgba(200, 166, 107, 0.2)'
  text-muted: '#9b9588'
  text-dim: '#6f695f'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '650'
    lineHeight: '1.04'
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.12'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.14'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.65'
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.45'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1.25rem
spacing:
  container-max: 1100px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

This system is built for a recruiter-facing engineering portfolio that needs the whole site to live in the same world as the sketch-style hero portrait. The site should feel like an editorial engineering dossier rendered in charcoal, graphite, and restrained gold detail rather than a clean software dashboard with an illustration dropped on top.

The visual direction remains monochrome-first, but the atmosphere should now feel more hand-drawn, textural, and concept-art-adjacent. Black, off-white, and structured grays carry almost all of the interface. Gold stays a precision accent for emphasis, not a broad fill color.

The emotional target is competence with character. The site should look deliberate, premium, and slightly editorial, but never noisy, theatrical, playful, or trend-driven.

## Background & Atmosphere

The page background should feel closer to the portrait backdrop:

- dark graphite and charcoal depth
- subtle sketch-like layering
- mild ink-wash or paper-grain suggestion
- low-contrast atmosphere rather than literal texture art

Texture rules:

- Texture must remain subtle enough that content contrast and scan speed are not affected.
- Use impressionistic layering, not obvious scratches, stains, or distressed grunge.
- Prefer lightweight CSS-driven treatment over heavy assets when possible.

## Colors

The palette is built from three roles:

- **Graphite foundation:** deep black backgrounds, near-black shells, layered charcoal, and off-white text.
- **Editorial contrast surfaces:** restrained light-gray paper panels used sparingly where digest-style reading benefits from contrast.
- **Gold emphasis:** stitched-detail, label, divider, and CTA emphasis.

Rules:

- Default surfaces stay black, charcoal, or gray.
- Avoid saturated color accents in standard UI states.
- Avoid soft startup-style gradients.
- Gold should appear as detail work, trim, emphasis, or signal, not as a dominant fill across large areas.

## Typography

Typography remains tri-font:

1. **Geist** for headlines and major section titles
2. **Inter** for paragraphs and structured reading
3. **JetBrains Mono** for labels, notes, metrics, and editorial metadata

Headline hierarchy should feel controlled rather than oversized. Distinctiveness comes from composition, pacing, and contrast, not from exaggerated type scale. Monospaced labels help reinforce an engineering tone and work especially well with facts, metrics, and scan-first content.

## Layout & Spacing

Desktop layout remains grid-based and precise, but the top section should read as one coordinated identity system:

- Illustration frame
- Name and role
- Short summary
- Primary actions
- Quick Read editorial panel
- Supporting metrics

Sections should keep clean vertical rhythm and avoid dense stacking of equally loud elements. The first screen especially must reduce simultaneous emphasis.

## Elevation & Depth

Depth should come from layered tonal surfaces, border contrast, subtle inset framing, and material separation that feels closer to a sketch board or concept-art presentation. Avoid colorful glow effects and avoid heavy, soft shadows.

- **Base level:** near-black page background
- **Primary surface:** charcoal cards and shells with mild tonal layering
- **Secondary surface:** slightly raised or ink-washed dark panels
- **Editorial inset:** light paper-toned information panels used sparingly
- **Gold detail:** thin emphasis line, stitched-badge effect, selected control states, and premium trim

Primary buttons may retain a subtle pressed shadow, but most surfaces should separate through stroke, tone, and spacing.

## Shapes

The shape language remains restrained:

- Controls: 4px radius
- Cards: 8px to 20px depending on scale
- Tags and mono labels: square-ish or slightly softened

Avoid consumer-style pills as the default.

## Components

### Hero

- The hero should remove location, experience, and fluent-English badges from the top scan path.
- The full name remains present but no longer dominates the screen by raw scale alone.
- The role appears once, directly below the name: `Full Stack Engineer`.
- The supporting sentence stays short and direct.
- CTA set remains: Resume, Contact, GitHub, LinkedIn.

### Hero Illustration

- Use a semi-realistic illustrated portrait rather than a photo.
- Keep the subject recognizable.
- Clothing reads as a dark hoodie or sweatshirt.
- Military symbolism is abstracted into merit-style badge language only.
- Do not imply actual military service through medals, flags, uniforms, or weapons.
- Gold emblems should represent real engineering achievements such as reusable components, project reach, code coverage, modernization, and CI/CD quality work.

### Quick Read

- Use an editorial or old-newspaper card structure, not a novelty prop.
- Facts should read as highlighted bullet points or briefs.
- The card must stay highly legible and structured.
- Supporting metrics stay modern and compact, with only subtle editorial cues such as rules, labels, and paper-note framing.

### Shared Section Styling

- Section headings, cards, and supporting panels should reuse the same graphite-plus-gold material language.
- Surfaces should feel less like generic dashboard boxes and more like charcoal editorial panels.
- Borders should be crisp, layered, and quiet rather than bright or flashy.
- Accent labels should feel like annotations, not marketing tags.
- Future sections may vary in density, but not in foundational atmosphere, palette, or panel logic.

### Hand-Drawn Component Language

- Reusable UI components should feel illustrated, outlined, and hand-rendered rather than perfectly sterile.
- The effect should resemble a polished ink or pencil interface sketch translated into production UI.
- Irregularity should be slight and intentional: offset contours, doubled lines, imperfect inset framing, and small alignment variance.
- The layout grid, spacing rhythm, and typography remain disciplined even when borders feel sketched.
- The result must feel premium and technical, not playful, childish, comic-like, or low-fidelity.

### Hand-Shaded Fills

- Component interiors should feel shaded by hand rather than evenly digitally filled.
- Shading may resemble pencil scribbles, charcoal fill, crayon coloring, or sketchbook cross-strokes.
- Coverage can be slightly uneven, with restrained density variation and partial fill character.
- The fill must support the outline rather than compete with it.
- Hand-shaded motion, if used, should stay secondary to content and feel like slow directional drift rather than visible animation.
- Reduced-motion users must receive the same shaded look without decorative movement.

### Buttons and Controls

- Primary buttons should feel like drawn action controls with layered outlines, slight contour offset, and a pressed hand-rendered edge.
- Gold is appropriate for action emphasis, but should be restrained to contour accents, pressed surfaces, text emphasis, or compact fills rather than oversized bright blocks.
- Secondary buttons should look inked or framed, using graphite surfaces, quiet highlights, irregular contour lines, and sharp interaction states rather than generic ghost-button styling.
- Hover and active states should feel physical through small movement, pressed shadow, or stroke contrast, not through colorful glow.
- Focus states must stay explicit and accessible.

### Navigation

- Navigation should read like a structured sketched header strip rather than application chrome.
- Nav containers should use subtle shell framing, outlined tabs, and low-contrast internal separation.
- Hover, focus, and current-link emphasis should use restrained gold and monochrome contrast.
- Navigation labels should stay compact and readable, with mono or editorial metadata cues only where they improve scan behavior.

### Badges, Labels, and Markers

- Badges should feel like technical stamps, stitched markers, printed editorial labels, or small drawn tags.
- Keep uppercase labels compact and readable.
- Use border-first treatments before filled treatments.
- Gold-accented badges should be reserved for status, emphasis, or core-skill highlighting rather than applied everywhere.

### Metric Blocks and Content Panels

- Metric blocks should preserve a strong value-first hierarchy.
- Supporting dividers, eyebrow labels, and small dots or rules may carry editorial cues.
- Content panels should feel layered and material-aware, using drawn frames, doubled outlines, stroke offset, tone, and inset contrast more than large shadows.
- Repeated card patterns should be built from reusable primitives rather than section-specific styling.

### Dividers and Layout Rhythm

- Section dividers should feel like thin technical rules, sketched separators, or lightly inked editorial strokes.
- Prefer graphite lines with selective gold emphasis instead of decorative ornaments.
- Spacing should create calm scan rhythm; separators should organize content, not add noise.

### Surface Behavior

- Cards and panels should use low-contrast tonal separation instead of flat single-color fills wherever practical.
- Subtle scribble or shading cues may appear in background or panel layers, but should never compete with text.
- Hero-adjacent containers should feel like they belong to the same environment as the portrait frame.
- Reusable section surfaces should scale cleanly across summary, impact, skills, timeline, case studies, writing, and contact.

## Content Tone

Voice should stay:

- direct
- technical
- neutral
- grounded

Avoid:

- third-person biography tone
- inflated leadership claims
- generic startup messaging
- decorative copy that slows scanning

## Scaling Rules for the Rest of the Site

When extending the redesign beyond the top section:

- Keep graphite and charcoal surfaces as the default base everywhere.
- Reuse gold for emphasis roles only.
- Use light editorial paper panels selectively where scan-first summaries help.
- Continue using mono labels, quiet dividers, layered panel separation, and structured metric treatment.
- Preserve modern engineering clarity over stylistic flourish.

Out of scope for future sections:

- colorful gradient systems
- soft glassmorphism
- mascot-style illustrations
- playful consumer-app UI patterns
- heavy distressed newspaper textures
- fantasy-art atmosphere
- noisy grunge overlays
- cartoon or comic-panel exaggeration
- rough wireframe-style lo-fi components
