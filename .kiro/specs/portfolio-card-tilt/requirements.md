# Requirements Document

## Introduction

Add subtle Motion-based 3D tilt interactions to selected portfolio card components. The interaction should make cards feel tactile and premium — like illustrated objects on a sketch board — without making the site feel heavy, animated, or gimmicky. The effect uses pointer-position-driven rotation with spring-based easing and restrained depth cues that complement the existing charcoal, graphite, and gold visual identity. A reusable `TiltCard` wrapper component is introduced so the interaction can be applied consistently to the hero portrait card, emblem cards, and engineering impact cards. The implementation must respect `prefers-reduced-motion`, preserve keyboard accessibility, and not disturb mobile/touch layout.

## Glossary

- **TiltCard**: A reusable React wrapper component that applies the 3D tilt interaction to any card-like child element.
- **Tilt_System**: The combined implementation of the `TiltCard` component and its supporting hook or utility logic.
- **Motion**: The Motion for React animation library (`motion` package), used for spring-based transform animation.
- **Hero_Portrait_Card**: The outer framed image container within `HeroSection.tsx` that displays the illustrated editorial portrait.
- **Emblem_Card**: Each individual achievement emblem `<article>` element rendered in the emblem grid inside `HeroSection.tsx`.
- **Impact_Card**: Each engineering achievement `<article>` element rendered in `EngineeringImpactSection.tsx`.
- **Tilt_Transform**: A CSS 3D transform composed of `rotateX` and `rotateY` values derived from pointer position relative to the card's bounding box.
- **Depth_Cue**: A restrained visual signal indicating elevation or material presence — a subtle shadow shift, a faint gold border highlight, or a minor scale lift — applied on hover to reinforce the tilt interaction.
- **Reduced_Motion_State**: The state active when the user's system preference is `prefers-reduced-motion: reduce`, under which tilt animation is disabled and Depth_Cues are either simplified or removed.
- **Spring_Config**: The Motion spring parameters (stiffness, damping, mass) controlling how the tilt animates into and out of a tilted position.
- **Pointer_Idle**: The state where no pointer is actively hovering a card, in which the card rests at zero rotation.

## Requirements

### Requirement 1: Motion for React Dependency

**User Story:** As a developer, I want Motion for React available in the project, so that I can use its spring animation primitives without adding unrelated dependencies.

#### Acceptance Criteria

1. THE Tilt_System SHALL declare `motion` at version ≥ 11.0.0 as a direct entry under `dependencies` in `package.json`.
2. WHEN `npm run build` is executed, THE Tilt_System SHALL produce a successful build with no errors related to the `motion` package.
3. THE Tilt_System SHALL NOT introduce any additional animation library or 3D/WebGL package as a direct entry in `package.json` beyond `motion`.

---

### Requirement 2: Reusable TiltCard Component

**User Story:** As a developer, I want a single reusable wrapper component that encapsulates the tilt interaction, so that I can apply it to multiple card types without duplicating logic.

#### Acceptance Criteria

1. THE Tilt_System SHALL expose a `TiltCard` component in `src/components/ui/TiltCard.tsx` that accepts `children` and an optional `className` prop.
2. WHEN a fine-pointer device moves within a TiltCard, THE TiltCard SHALL apply a Tilt_Transform to the wrapper element derived from the pointer position.
3. THE TiltCard SHALL accept an optional `maxTilt` prop (in degrees, defaulting to `8`, valid range 0–45) that controls the maximum rotation applied along either axis.
4. THE TiltCard SHALL accept an optional `scaleFactor` prop (defaulting to `1.02`, valid range 1.0–2.0) that controls the scale lift applied during hover.
5. THE TiltCard SHALL preserve all child element layout, content structure, and existing CSS class names without modification.
6. THE TiltCard SHALL use `transform-style: preserve-3d` only on the wrapper element and SHALL NOT cascade 3D rendering context into child content.
7. WHEN a pointer leaves a TiltCard, THE TiltCard SHALL reset the Tilt_Transform to the identity transform (rotateX: 0, rotateY: 0, scale: 1).
8. WHEN a pointer enters or leaves a TiltCard, THE TiltCard tilt and scale transitions SHALL complete within 50–600 ms as driven by the Spring_Config.

---

### Requirement 3: Spring-Based Tilt Animation

**User Story:** As a visitor, I want card tilt movement to feel smooth and spring-like, so that the interaction feels physical rather than mechanical.

#### Acceptance Criteria

1. WHEN a pointer enters a TiltCard, THE Tilt_System SHALL animate the Tilt_Transform to the computed target rotation using a Motion spring with stiffness ≤ 300, damping ≥ 20, and mass ≤ 1.
2. WHEN a pointer moves within a TiltCard, THE Tilt_System SHALL update the Tilt_Transform continuously via Motion values without triggering React re-renders or layout recalculation.
3. WHEN a pointer leaves a TiltCard, THE Tilt_System SHALL animate the Tilt_Transform back to zero rotation using the same Spring_Config.
4. THE Tilt_System SHALL use Motion `useMotionValue` and `useSpring` primitives to drive the transform, so that pointer move events do not produce React state updates.
5. THE Tilt_System SHALL apply `will-change: transform` on the animated wrapper element to promote it to its own compositing layer.

---

### Requirement 4: Pointer-Position Tilt Calculation

**User Story:** As a visitor, I want the card to tilt toward the direction of my cursor, so that the interaction feels spatially responsive.

#### Acceptance Criteria

1. WHEN a pointer moves within a TiltCard, THE Tilt_System SHALL compute the normalized pointer offset as `(pointerX − rect.left − rect.width / 2) / (rect.width / 2)` for the X axis and `(pointerY − rect.top − rect.height / 2) / (rect.height / 2)` for the Y axis, yielding values in the range `[−1, +1]`.
2. WHEN the normalized X offset is positive (pointer right of center), THE Tilt_System SHALL set a positive `rotateY`; WHEN the normalized Y offset is negative (pointer above center), THE Tilt_System SHALL set a positive `rotateX`, so the card appears to rise toward the pointer.
3. WHEN computing the target rotation, THE Tilt_System SHALL multiply each normalized offset by `maxTilt` to derive the rotation in degrees, and the resulting rotation SHALL be clamped to the range `[−maxTilt, +maxTilt]`.
4. WHEN a pointer moves within a TiltCard, THE Tilt_System SHALL call `getBoundingClientRect` on the wrapper element during that event handler and SHALL use the resulting rect exclusively for that event's calculations without storing it for subsequent events.
5. WHEN `getBoundingClientRect` returns a width or height of zero, THE Tilt_System SHALL leave the current Tilt_Transform unchanged and SHALL NOT throw an error or produce a `NaN` rotation value.

---

### Requirement 5: Restrained Depth Cues

**User Story:** As a visitor, I want to see subtle visual feedback when hovering a card, so that the interaction feels premium and material without being distracting.

#### Acceptance Criteria

1. WHEN a pointer is active over a TiltCard, THE Tilt_System SHALL apply a second achromatic shadow layer alongside `--ds-shadow-card` with greater blur and spread to deepen the shadow without introducing color.
2. WHEN a pointer is active over a TiltCard, THE Tilt_System SHALL transition the card's border color toward `var(--ds-accent)` at an opacity no greater than `0.4`.
3. WHEN a pointer enters a TiltCard, THE Tilt_System SHALL apply the hover box-shadow and border color within a transition of ≤ 200 ms.
4. WHEN a pointer leaves a TiltCard, THE Tilt_System SHALL return the box-shadow and border color to their resting values within a transition of ≤ 200 ms.
5. THE Tilt_System SHALL NOT apply a glow effect, color saturation change, or glare overlay as a depth cue.
6. THE Tilt_System SHALL NOT apply a scale factor greater than `1.04` under any circumstance.

---

### Requirement 6: Hero Portrait Card Integration

**User Story:** As a visitor, I want the hero portrait card to respond to my cursor with a subtle tilt, so that it feels like a tactile illustrated object within the page layout.

#### Acceptance Criteria

1. WHEN a `pointer: fine` device hovers the Hero_Portrait_Card, THE Tilt_System SHALL apply the Tilt_Transform and Depth_Cues to the portrait card wrapper element.
2. IF the TiltCard wraps the Hero_Portrait_Card, THEN the `maxTilt` prop passed SHALL be no greater than `6` degrees.
3. THE TiltCard SHALL preserve the existing `sketch-surface` and `sketch-surface-strong` nested structure within the portrait card; the portrait image element's rendered dimensions and aspect ratio SHALL remain unchanged.
4. WHEN the Hero_Portrait_Card tilt interaction is active, the emblem grid element's position and dimensions SHALL remain identical to their resting-state values.

---

### Requirement 7: Emblem Card Integration

**User Story:** As a visitor, I want the achievement emblem cards to respond to pointer hover with a consistent tilt, so that they feel like small illustrated stamps within the sketch board layout.

#### Acceptance Criteria

1. WHEN a `pointer: fine` device hovers an Emblem_Card, THE Tilt_System SHALL apply the Tilt_Transform and Depth_Cues to that individual emblem card wrapper.
2. IF the TiltCard wraps an Emblem_Card, THEN the `maxTilt` prop passed SHALL be in the range `[1, 8]` degrees.
3. THE TiltCard SHALL preserve the existing `sketch-surface` class; the emblem card's padding, border-radius, font family, font size, font weight, and letter spacing SHALL remain unchanged.
4. WHEN a pointer hovers one Emblem_Card, THE Tilt_System SHALL apply the Tilt_Transform only to the hovered card's wrapper and SHALL NOT modify the transform or Depth_Cues of any sibling Emblem_Card.

---

### Requirement 8: Engineering Impact Card Integration

**User Story:** As a visitor, I want the engineering impact cards to respond to pointer hover with a consistent and restrained tilt, so that they reinforce the premium material language of the section.

#### Acceptance Criteria

1. WHEN a `pointer: fine` device hovers an Impact_Card, THE Tilt_System SHALL apply the Tilt_Transform and Depth_Cues to that individual impact card wrapper.
2. IF the TiltCard wraps an Impact_Card, THEN the `maxTilt` prop passed SHALL be in the range `[1, 8]` degrees.
3. THE TiltCard SHALL preserve the existing `sketch-metric-card` class; the card's internal layout, badge rendering, and technology tag layout SHALL remain visually unchanged between resting and hover states.
4. THE TiltCard wrapper SHALL NOT intercept or suppress pointer events on child interactive elements within an Impact_Card, so that links and buttons remain activatable.
5. WHEN a pointer hovers one Impact_Card, THE Tilt_System SHALL apply the Tilt_Transform only to the hovered card's wrapper and SHALL NOT modify the transform or Depth_Cues of any sibling Impact_Card.

---

### Requirement 9: Reduced Motion Support

**User Story:** As a visitor with motion sensitivity, I want the site to respect my system preference and disable or simplify the tilt effect, so that I am not exposed to motion that could cause discomfort.

#### Acceptance Criteria

1. WHEN `prefers-reduced-motion: reduce` is active, THE TiltCard SHALL not set any non-zero `rotateX` or `rotateY` value on the wrapper element in response to pointer events.
2. WHEN `prefers-reduced-motion: reduce` is active, THE TiltCard SHALL not set a `scale` value other than `1` on the wrapper element in response to pointer events.
3. IF `prefers-reduced-motion: reduce` is active, THEN THE TiltCard MAY apply a CSS border color transition on pointer enter with a duration of ≤ 80 ms as the sole hover signal; all other motion-based transitions SHALL be absent.
4. THE TiltCard SHALL subscribe to the `prefers-reduced-motion` media query via `window.matchMedia('(prefers-reduced-motion: reduce)')` (or an equivalent React hook) so that JS-driven animation is suppressed at the source, not only via CSS overrides.
5. WHEN the `prefers-reduced-motion` media query result changes after component mount (e.g., user toggles the OS setting), THE TiltCard SHALL update its behavior within one media-query change event cycle.

---

### Requirement 10: Mobile and Touch Behavior

**User Story:** As a visitor on a touch device, I want the tilt effect to be inactive so that the portfolio cards remain stable and do not exhibit unintended behavior during touch scrolling.

#### Acceptance Criteria

1. WHEN a pointer event originates from a coarse input device (touch), THE TiltCard SHALL not apply the Tilt_Transform or the scale Depth_Cue.
2. IF `window.matchMedia('(pointer: coarse)')` matches, THEN THE TiltCard SHALL not register pointer-move event listeners, SHALL not set any non-zero `rotateX`, `rotateY`, or `scale` values, and SHALL not apply shadow or border Depth_Cues in response to pointer events.
3. IF `window.matchMedia('(pointer: coarse)')` matches, THEN the TiltCard wrapper SHALL not modify its own dimensions, position, or stacking context relative to its resting state.
4. WHEN a touch event occurs over a TiltCard, THE TiltCard SHALL not call `preventDefault()` on that event, preserving default browser scroll behavior.
5. WHEN the `pointer` media query result changes after component mount (e.g., a stylus is connected to a touch device), THE TiltCard SHALL update its interaction behavior within one media-query change event cycle.

---

### Requirement 11: Keyboard Accessibility

**User Story:** As a keyboard user, I want the tilt interaction to not interfere with focus management or keyboard navigation, so that I can fully use the portfolio without a pointer device.

#### Acceptance Criteria

1. THE TiltCard SHALL NOT set `outline`, `outline-offset`, `visibility`, or `opacity` on any descendant element in a way that renders the `:focus-visible` indicator invisible or visually absent.
2. WHEN a TiltCard wrapper receives keyboard focus via Tab, Shift+Tab, or programmatic focus, THE TiltCard SHALL NOT apply any non-zero `rotateX`, `rotateY`, or scale value to the wrapper element.
3. THE TiltCard wrapper element SHALL render with an implicit ARIA role of `generic` (i.e., a plain `<div>`), SHALL NOT set `tabindex` on the wrapper, and SHALL NOT add any `role` or `aria-*` attribute to the wrapper element.
4. WHEN keyboard focus moves to an interactive descendant of a TiltCard (link, button, input, or element with non-negative `tabindex`), that element SHALL receive focus in natural tab order and SHALL be activatable via Enter or Space as appropriate for its element type.

---

### Requirement 12: Visual and Structural Consistency

**User Story:** As a designer, I want the tilt interaction to feel consistent across card types and to never violate the sketch-editorial visual direction, so that the interaction enhances the existing identity rather than competing with it.

#### Acceptance Criteria

1. THE Tilt_System SHALL use the same Spring_Config (identical stiffness, damping, and mass values) across all card types to ensure consistent motion feel.
2. THE Tilt_System SHALL use only CSS custom property values already declared in `globals.css` for all Depth_Cue styling (shadow, border, color) and SHALL NOT introduce new color or shadow values outside the existing design token set.
3. THE TiltCard SHALL NOT add, remove, or override the `sketch-shade-drift` animation on any wrapped card element.
4. THE TiltCard SHALL NOT add or override any `perspective` CSS property on any element in the document.
5. THE Tilt_System SHALL NOT wrap the hero text pane, the skills section, the contact section, or any non-card layout element with a TiltCard.

---

### Requirement 13: Build and Lint Compliance

**User Story:** As a developer, I want the implementation to pass the project's existing build and lint checks, so that the feature can be merged without breaking the CI pipeline.

#### Acceptance Criteria

1. WHEN `npm run lint` is executed, THE Tilt_System SHALL produce zero ESLint errors or warnings in any file introduced or modified by this feature.
2. WHEN `npm run build` is executed, THE Tilt_System SHALL produce a successful TypeScript and Vite build with no type errors.
3. THE Tilt_System SHALL use explicit TypeScript types for all props, hook return values, and internal variables; SHALL NOT use the `any` type; and SHALL NOT suppress type errors with `@ts-ignore` or `@ts-expect-error`. All new files SHALL comply with the `noUnusedLocals` and `noUnusedParameters` compiler options active in `tsconfig.app.json`.
