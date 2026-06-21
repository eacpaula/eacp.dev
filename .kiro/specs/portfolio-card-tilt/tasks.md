# Implementation Plan: Portfolio Card Tilt

## Overview

Install the `motion` dependency, implement the `TiltCard` wrapper component with its supporting hook and pure calculation function, add the depth-cue CSS class, wire `TiltCard` into the three card sites in `HeroSection.tsx` and `EngineeringImpactSection.tsx`, and validate correctness properties with fast-check property-based tests. Each step builds directly on the previous one; no code is left orphaned.

## Tasks

- [x] 1. Install the `motion` dependency
  - Run `npm install motion@^11.0.0` to add it as a production dependency in `package.json`
  - Verify the `dependencies` entry reads `"motion": "^11.0.0"` (or a higher patch/minor within the `^11` range)
  - _Requirements: 1.1, 1.2_

- [x] 2. Add the `.tilt-depth-active` CSS class to `src/styles/globals.css`
  - Append the `.tilt-depth-active` rule block with the `box-shadow`, `border-color`, and `transition` declarations specified in the design
  - Use only existing CSS custom properties (`--ds-shadow-card`, `--ds-accent`) — no new color or shadow values
  - Ensure `transition` covers both `box-shadow` and `border-color` at ≤ 200 ms (design uses 160 ms)
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 12.2_

- [x] 3. Create `src/components/ui/TiltCard.tsx` with core types and exports
  - [x] 3.1 Define `TiltCardProps` interface and `SPRING_CONFIG` constant
    - Export `TiltCardProps` with `children: React.ReactNode`, `className?: string`, `maxTilt?: number`, `scaleFactor?: number`
    - Export `SPRING_CONFIG = { stiffness: 260, damping: 28, mass: 0.8 } as const`
    - _Requirements: 2.1, 2.3, 2.4, 3.1, 12.1_

  - [x] 3.2 Implement `computeTiltTransform` exported pure function
    - Signature: `computeTiltTransform(event: { clientX: number; clientY: number }, rect: { left: number; top: number; width: number; height: number }, maxTilt: number, scaleFactor: number, isCoarse: boolean, isReducedMotion: boolean): { rotateX: number; rotateY: number; scale: number }`
    - Return `{ rotateX: 0, rotateY: 0, scale: 1 }` immediately if `isCoarse` or `isReducedMotion` is `true`
    - Return the current identity unchanged (same as above) if `rect.width === 0 || rect.height === 0`
    - Compute `normX = (clientX − rect.left − rect.width / 2) / (rect.width / 2)` and `normY` equivalently
    - Clamp `normX` and `normY` to `[−1, +1]` before multiplying by `maxTilt`
    - Clamp each rotation result to `[−maxTilt, +maxTilt]`
    - Clamp `scaleFactor` to `Math.min(1.04, scaleFactor)` before returning it as `scale`
    - _Requirements: 4.1, 4.2, 4.3, 4.5, 5.6, 9.1, 9.2, 10.1_

  - [x] 3.3 Write property-based tests for `computeTiltTransform` (Properties 1, 2, 3, 4, 5, 7)
    - **Property 1: Pointer-offset normalization is bounded**
    - **Validates: Requirements 4.1, 4.3**
    - **Property 2: Tilt rotation is bounded by maxTilt**
    - **Validates: Requirements 4.3**
    - **Property 3: Reduced-motion suppresses all transform outputs**
    - **Validates: Requirements 9.1, 9.2**
    - **Property 4: Coarse-pointer suppresses all transform outputs**
    - **Validates: Requirements 10.1, 10.2**
    - **Property 5: Zero-dimension guard prevents NaN**
    - **Validates: Requirements 4.5**
    - **Property 7: Scale factor is clamped to safe maximum**
    - **Validates: Requirements 5.6**
    - Target file: `src/components/ui/TiltCard.test.ts`; use `fast-check` with ≥ 100 iterations per property
    - _Requirements: 4.1, 4.3, 4.5, 5.6, 9.1, 9.2, 10.1, 10.2_

  - [x] 3.4 Implement `useTiltMediaQuery` internal hook
    - `function useTiltMediaQuery(query: string): boolean` — not exported
    - Initialise state with `window.matchMedia(query).matches`; guard with `typeof window !== 'undefined' && typeof window.matchMedia === 'function'`
    - Subscribe to `MediaQueryList.addEventListener('change', handler)` in `useEffect`; clean up in the return function
    - _Requirements: 9.4, 9.5, 10.2, 10.5_

  - [x] 3.5 Implement the `TiltCard` component body
    - Call `useTiltMediaQuery` twice: `isCoarse` (`'(pointer: coarse)'`) and `isReducedMotion` (`'(prefers-reduced-motion: reduce)'`)
    - Clamp incoming props: `clampedMaxTilt = Math.max(0, Math.min(45, maxTilt ?? 8))`, `clampedScale = Math.max(1.0, Math.min(1.04, scaleFactor ?? 1.02))`
    - Create `rotateXValue`, `rotateYValue`, `scaleValue` with `useMotionValue(0)`, `useMotionValue(0)`, `useMotionValue(1)`
    - Create spring wrappers: `rotateX = useSpring(rotateXValue, SPRING_CONFIG)`, `rotateY = useSpring(rotateYValue, SPRING_CONFIG)`, `scale = useSpring(scaleValue, SPRING_CONFIG)`
    - Manage `isHovered` boolean React state; attach `data-tilt-active={isHovered}` to the wrapper
    - Implement `onPointerEnter`: guard on `isCoarse || isReducedMotion`, else `setIsHovered(true)` and `scaleValue.set(clampedScale)`
    - Implement `onPointerMove`: call `computeTiltTransform`, then `rotateXValue.set(result.rotateX)` and `rotateYValue.set(result.rotateY)`
    - Implement `onPointerLeave`: `setIsHovered(false)`, `rotateYValue.set(0)`, `rotateXValue.set(0)`, `scaleValue.set(1)`
    - Render `<motion.div ref={ref} style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d', willChange: 'transform' }} className={className} ...handlers>{children}</motion.div>`
    - Do not add `tabIndex`, `role`, `aria-*`, or any layout CSS to the wrapper
    - _Requirements: 2.1–2.8, 3.1–3.5, 4.1–4.5, 9.1–9.5, 10.1–10.5, 11.2–11.4, 12.3–12.4_

  - [x] 3.6 Write example-based test for Property 6 (reset on pointer leave)
    - **Property 6: Reset on pointer leave**
    - **Validates: Requirements 2.7**
    - Assert that after a `pointerleave` event the target values of `rotateXValue`, `rotateYValue`, and `scaleValue` are `0`, `0`, and `1`
    - Target file: `src/components/ui/TiltCard.test.ts`
    - _Requirements: 2.7_

- [x] 4. Checkpoint — verify component compiles
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run lint` and `npm run build`; resolve any TypeScript type errors or ESLint violations before continuing
  - _Requirements: 13.1, 13.2, 13.3_

- [x] 5. Integrate `TiltCard` into `HeroSection.tsx`
  - [x] 5.1 Wrap the Hero_Portrait_Card with `<TiltCard maxTilt={6}>`
    - Identify the outer framed image container (the element carrying `sketch-surface` / `sketch-surface-strong` portrait wrapper) in `HeroSection.tsx`
    - Wrap it with `<TiltCard maxTilt={6}>` — pass no `className` unless necessary for layout
    - Confirm the portrait image dimensions, aspect ratio, and the emblem grid position remain unchanged in the rendered output
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 5.2 Wrap each Emblem_Card with `<TiltCard maxTilt={8}>`
    - Identify each `<article>` element representing an emblem card in `HeroSection.tsx`
    - Wrap each one individually with `<TiltCard maxTilt={8}>`
    - Confirm `sketch-surface` class, padding, border-radius, font properties are untouched on the article element
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 6. Integrate `TiltCard` into `EngineeringImpactSection.tsx`
  - [x] 6.1 Wrap each Impact_Card with `<TiltCard maxTilt={8}>`
    - Identify each `<article>` element representing an impact card in `EngineeringImpactSection.tsx`
    - Wrap each one individually with `<TiltCard maxTilt={8}>`
    - Confirm `sketch-metric-card` class and internal layout (badge, tech tags) are visually unchanged between resting and hover states
    - Confirm that links and buttons inside each card are not intercepted (`pointerEvents` on the wrapper must not be set to `none` or otherwise block children)
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 7. Final checkpoint — full lint and build
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run lint`; resolve all ESLint errors and warnings to zero
  - Run `npm run build`; resolve all TypeScript and Vite build errors to zero
  - _Requirements: 13.1, 13.2, 13.3_

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- `computeTiltTransform` is exported specifically to enable property-based testing without DOM or Motion dependencies
- The `data-tilt-active` attribute on the wrapper targets `.tilt-depth-active` in CSS — the wrapper must have `border: 1px solid transparent` in resting state (or equivalent) to allow a smooth border-color transition without layout shift; coordinate this with the `className` passthrough or a minimal wrapper style
- All depth-cue CSS uses existing design tokens only — no new custom properties are introduced
- `SPRING_CONFIG` is exported so section components (or future card sites) can reference it for documentation purposes; it is consumed internally by `TiltCard`
- Property tests (P1–P5, P7) target the pure `computeTiltTransform` function; Property 6 is example-based on `MotionValue` targets
- The `useTiltMediaQuery` hook must handle SSR/test environments where `window.matchMedia` may be absent

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["3.1", "3.2"] },
    { "id": 1, "tasks": ["3.3", "3.4"] },
    { "id": 2, "tasks": ["3.5"] },
    { "id": 3, "tasks": ["3.6"] },
    { "id": 4, "tasks": ["5.1", "5.2", "6.1"] }
  ]
}
```
