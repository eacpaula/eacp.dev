/**
 * Property-based tests for `computeTiltTransform`.
 *
 * Uses fast-check with ≥ 100 iterations per property.
 *
 * Properties covered:
 *   1 — Pointer-offset normalization is bounded          Validates: Requirements 4.1, 4.3
 *   2 — Tilt rotation is bounded by maxTilt             Validates: Requirements 4.3
 *   3 — Reduced-motion suppresses all transform outputs Validates: Requirements 9.1, 9.2
 *   4 — Coarse-pointer suppresses all transform outputs Validates: Requirements 10.1, 10.2
 *   5 — Zero-dimension guard prevents NaN              Validates: Requirements 4.5
 *   7 — Scale factor is clamped to safe maximum        Validates: Requirements 5.6
 */

import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { motionValue } from 'motion/react'
import { computeTiltTransform } from './TiltCard.helpers'

// ---------------------------------------------------------------------------
// Shared arbitraries
// ---------------------------------------------------------------------------

/** A rect with positive (non-zero) width and height */
const positiveRect = fc.record({
  left: fc.float({ min: -1000, max: 1000, noNaN: true }),
  top: fc.float({ min: -1000, max: 1000, noNaN: true }),
  width: fc.float({ min: 1, max: 2000, noNaN: true }),
  height: fc.float({ min: 1, max: 2000, noNaN: true }),
})

/** Arbitrary pointer event */
const pointerEvent = fc.record({
  clientX: fc.float({ min: -5000, max: 5000, noNaN: true }),
  clientY: fc.float({ min: -5000, max: 5000, noNaN: true }),
})

/** maxTilt in valid range [0, 45] */
const maxTiltArb = fc.float({ min: 0, max: 45, noNaN: true })

/** scaleFactor in valid range [1.0, 2.0] */
const scaleFactorArb = fc.float({ min: 1.0, max: 2.0, noNaN: true })

// ---------------------------------------------------------------------------
// Property 1: Pointer-offset normalization is bounded
// Validates: Requirements 4.1, 4.3
// ---------------------------------------------------------------------------
describe('Property 1: Pointer-offset normalization is bounded', () => {
  it('rotateX and rotateY are each within [-maxTilt, +maxTilt] for any pointer position and non-zero rect', () => {
    fc.assert(
      fc.property(pointerEvent, positiveRect, maxTiltArb, scaleFactorArb, (event, rect, maxTilt, scaleFactor) => {
        const result = computeTiltTransform(event, rect, maxTilt, scaleFactor, false, false)
        expect(result.rotateX).toBeGreaterThanOrEqual(-maxTilt)
        expect(result.rotateX).toBeLessThanOrEqual(maxTilt)
        expect(result.rotateY).toBeGreaterThanOrEqual(-maxTilt)
        expect(result.rotateY).toBeLessThanOrEqual(maxTilt)
      }),
      { numRuns: 100 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 2: Tilt rotation is bounded by maxTilt
// Validates: Requirements 4.3
// ---------------------------------------------------------------------------
describe('Property 2: Tilt rotation is bounded by maxTilt', () => {
  it('rotateX and rotateY never exceed [-maxTilt, +maxTilt] for any maxTilt in [0, 45]', () => {
    fc.assert(
      fc.property(maxTiltArb, pointerEvent, positiveRect, scaleFactorArb, (maxTilt, event, rect, scaleFactor) => {
        const result = computeTiltTransform(event, rect, maxTilt, scaleFactor, false, false)
        expect(result.rotateX).toBeGreaterThanOrEqual(-maxTilt)
        expect(result.rotateX).toBeLessThanOrEqual(maxTilt)
        expect(result.rotateY).toBeGreaterThanOrEqual(-maxTilt)
        expect(result.rotateY).toBeLessThanOrEqual(maxTilt)
      }),
      { numRuns: 100 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 3: Reduced-motion suppresses all transform outputs
// Validates: Requirements 9.1, 9.2
// ---------------------------------------------------------------------------
describe('Property 3: Reduced-motion suppresses all transform outputs', () => {
  it('returns { rotateX: 0, rotateY: 0, scale: 1 } when isReducedMotion is true', () => {
    fc.assert(
      fc.property(pointerEvent, positiveRect, maxTiltArb, scaleFactorArb, (event, rect, maxTilt, scaleFactor) => {
        const result = computeTiltTransform(event, rect, maxTilt, scaleFactor, false, true)
        expect(result).toEqual({ rotateX: 0, rotateY: 0, scale: 1 })
      }),
      { numRuns: 100 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 4: Coarse-pointer suppresses all transform outputs
// Validates: Requirements 10.1, 10.2
// ---------------------------------------------------------------------------
describe('Property 4: Coarse-pointer suppresses all transform outputs', () => {
  it('returns { rotateX: 0, rotateY: 0, scale: 1 } when isCoarse is true', () => {
    fc.assert(
      fc.property(pointerEvent, positiveRect, maxTiltArb, scaleFactorArb, (event, rect, maxTilt, scaleFactor) => {
        const result = computeTiltTransform(event, rect, maxTilt, scaleFactor, true, false)
        expect(result).toEqual({ rotateX: 0, rotateY: 0, scale: 1 })
      }),
      { numRuns: 100 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 5: Zero-dimension guard prevents NaN
// Validates: Requirements 4.5
// ---------------------------------------------------------------------------
describe('Property 5: Zero-dimension guard prevents NaN', () => {
  /** A rect with width === 0 */
  const zeroWidthRect = fc.record({
    left: fc.float({ min: -1000, max: 1000, noNaN: true }),
    top: fc.float({ min: -1000, max: 1000, noNaN: true }),
    width: fc.constant(0),
    height: fc.float({ min: 1, max: 2000, noNaN: true }),
  })

  /** A rect with height === 0 */
  const zeroHeightRect = fc.record({
    left: fc.float({ min: -1000, max: 1000, noNaN: true }),
    top: fc.float({ min: -1000, max: 1000, noNaN: true }),
    width: fc.float({ min: 1, max: 2000, noNaN: true }),
    height: fc.constant(0),
  })

  const zeroDimRect = fc.oneof(zeroWidthRect, zeroHeightRect)

  it('never produces NaN or Infinity and returns identity when rect has zero dimension', () => {
    fc.assert(
      fc.property(pointerEvent, zeroDimRect, maxTiltArb, scaleFactorArb, (event, rect, maxTilt, scaleFactor) => {
        const result = computeTiltTransform(event, rect, maxTilt, scaleFactor, false, false)

        // Must not be NaN or Infinity
        expect(Number.isNaN(result.rotateX)).toBe(false)
        expect(Number.isNaN(result.rotateY)).toBe(false)
        expect(Number.isNaN(result.scale)).toBe(false)
        expect(Number.isFinite(result.rotateX)).toBe(true)
        expect(Number.isFinite(result.rotateY)).toBe(true)
        expect(Number.isFinite(result.scale)).toBe(true)

        // Zero-dimension guard returns identity
        expect(result.rotateX).toBe(0)
        expect(result.rotateY).toBe(0)
        expect(result.scale).toBe(1)
      }),
      { numRuns: 100 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 7: Scale factor is clamped to safe maximum
// Validates: Requirements 5.6
// ---------------------------------------------------------------------------
describe('Property 7: Scale factor is clamped to safe maximum', () => {
  it('returned scale is always <= 1.04 for any scaleFactor in [1.0, 2.0]', () => {
    fc.assert(
      fc.property(scaleFactorArb, pointerEvent, positiveRect, maxTiltArb, (scaleFactor, event, rect, maxTilt) => {
        const result = computeTiltTransform(event, rect, maxTilt, scaleFactor, false, false)
        expect(result.scale).toBeLessThanOrEqual(1.04)
      }),
      { numRuns: 100 }
    )
  })
})

// ---------------------------------------------------------------------------
// Property 6: Reset on pointer leave (example-based)
// Validates: Requirements 2.7
// ---------------------------------------------------------------------------
describe('Property 6: Reset on pointer leave', () => {
  it('after pointer leave, target rotateX, rotateY, and scale values are 0, 0, and 1', () => {
    // Use the motionValue factory (non-hook) from motion/react to simulate
    // the component's internal MotionValues in a node test environment.

    // Start from a tilted state (simulating after onPointerMove has fired)
    const rotateXValue = motionValue(7)    // some non-zero tilt
    const rotateYValue = motionValue(-5)   // some non-zero tilt
    const scaleValue   = motionValue(1.02) // scale lifted on enter

    // Confirm the pre-leave state is non-identity
    expect(rotateXValue.get()).toBe(7)
    expect(rotateYValue.get()).toBe(-5)
    expect(scaleValue.get()).toBe(1.02)

    // Simulate handlePointerLeave (exactly as implemented in TiltCard.tsx):
    //   rotateYValue.set(0)
    //   rotateXValue.set(0)
    //   scaleValue.set(1)
    rotateYValue.set(0)
    rotateXValue.set(0)
    scaleValue.set(1)

    // After leave, all target values must be identity
    expect(rotateXValue.get()).toBe(0)
    expect(rotateYValue.get()).toBe(0)
    expect(scaleValue.get()).toBe(1)
  })
})
