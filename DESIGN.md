---
name: Technical Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#aec6ff'
  on-secondary: '#002e6b'
  secondary-container: '#508eff'
  on-secondary-container: '#00275e'
  tertiary: '#ffffff'
  on-tertiary: '#003824'
  tertiary-container: '#6ffbbe'
  on-tertiary-container: '#00734e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#aec6ff'
  on-secondary-fixed: '#001a43'
  on-secondary-fixed-variant: '#004397'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-stroke: '#333333'
  surface-elevated: '#111111'
  text-muted: '#888888'
  text-dim: '#666666'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
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

This design system is built for a high-seniority engineering profile, emphasizing technical authority and product-led engineering. The aesthetic leans heavily into **Modern Corporate/Minimalism** with a "Developer-Tool" DNA. It prioritizes information density, functional clarity, and a "built-to-last" feeling.

The visual direction is **Dark-Mode-First**, utilizing high-contrast typography against deep obsidian backgrounds. It avoids the soft curves of consumer apps in favor of crisp edges, subtle borders, and precise alignment. The emotional goal is to evoke trust through competence, resembling the interfaces engineers use daily (IDEs, terminal emulators, and high-end deployment dashboards).

## Colors

The palette is strictly functional. The base is an absolute black (`#000000`) to maximize OLED contrast and depth. 

- **Primary:** High-contrast White for maximum legibility of core technical content.
- **Secondary:** An "Electric Blue" used sparingly for interactive states, primary actions, and deployment-related indicators.
- **Tertiary:** An "Emerald Green" used for success states, uptime indicators, and "live" project statuses.
- **Neutral:** A scale of deep grays is used to create hierarchy without breaking the dark aesthetic. Strokes use a subtle medium gray (`#333333`) to define boundaries without adding visual noise.

## Typography

The typography system uses a tri-font approach to reinforce the technical persona:
1. **Geist** for headlines: Provides a sharp, geometric, and modern tech feel.
2. **Inter** for body text: Ensures perfect legibility for long-form project descriptions.
3. **JetBrains Mono** for labels and technical metadata: Signals the "engineering" nature of the content (e.g., tech stacks, git hashes, or metrics).

Tight letter-spacing is applied to headlines to maintain a "compressed" professional look. Body text uses generous line-height to ensure readability against dark backgrounds.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain the precision of a dashboard, switching to a fluid single-column model for mobile.

- **Desktop:** 12-column grid centered in a 1100px container. Large vertical gaps (80px+) between sections to allow content to breathe and emphasize hierarchy.
- **Mobile:** 16px side margins with a focus on vertical stacking. 
- **Rhythm:** An 8px linear scale is used for all internal component spacing (padding, gaps). Elements are aligned to the grid to create a sense of "structured" engineering rather than "free-form" design.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than shadows. 
- **Base Level:** `#000000` (Background).
- **Surface Level:** `#111111` (Cards/Containers).
- **Interactive Level:** `#161616` (Hover states).

Borders are the primary tool for separation. All containers should have a 1px solid border using `#333333`. No shadows are used, except for a very subtle, sharp 2px black drop-shadow on primary buttons to give them a "pressed" physical feel against the surface.

## Shapes

The shape language is "Soft-Sharp." We use a conservative `4px` (0.25rem) radius for most elements to maintain a professional, architectural feel. 

- **Buttons & Inputs:** 4px radius.
- **Cards:** 8px radius (`rounded-lg`) to provide a slightly softer frame for large content blocks.
- **Tags/Chips:** 2px radius or completely sharp corners to differentiate from consumer "pill" styles.

## Components

- **Buttons:** 
  - *Primary:* Solid White background with Black text. No border.
  - *Secondary:* Ghost style with `#333333` border and White text.
- **Chips (Tech Stack):** Monospaced font (`JetBrains Mono`), small text, subtle gray border, no background. They should look like terminal tags.
- **Input Fields:** Darker than the background (`#0a0a0a`), 1px border, focused state uses the Secondary Blue for the border color only.
- **Cards (Project/Experience):** Use `#111111` background. Hover state should subtly brighten the border color to `#444444`. 
- **Status Indicators:** Small 6px solid circles. Use Tertiary Green for "Current/Live" and Text-Muted for "Archived/Legacy."
- **Data Tables:** Highly structured with thin horizontal dividers and monospaced values for metrics (e.g., "99.9% Uptime").