/**
 * Pure helper exports for TiltCard — kept in a separate module so that
 * react-refresh can hot-reload TiltCard.tsx without complaints about
 * non-component exports living alongside the component.
 *
 * Requirements: 3.1, 4.1, 4.2, 4.3, 4.5, 5.6, 9.1, 9.2, 10.1, 12.1
 */

// ---------------------------------------------------------------------------
// Spring configuration
// ---------------------------------------------------------------------------

export const SPRING_CONFIG = {
  stiffness: 260,
  damping: 28,
  mass: 0.8,
} as const

// ---------------------------------------------------------------------------
// Pure computation helper — exported for property-based testing
// ---------------------------------------------------------------------------

/**
 * Compute the 3D tilt transform values for a pointer position relative to a
 * card's bounding rect.
 *
 * Requirements: 4.1, 4.2, 4.3, 4.5, 5.6, 9.1, 9.2, 10.1
 */
export function computeTiltTransform(
  event: { clientX: number; clientY: number },
  rect: { left: number; top: number; width: number; height: number },
  maxTilt: number,
  scaleFactor: number,
  isCoarse: boolean,
  isReducedMotion: boolean
): { rotateX: number; rotateY: number; scale: number } {
  // Requirements 9.1, 9.2, 10.1 — suppress transforms for coarse pointers or reduced motion
  if (isCoarse || isReducedMotion) {
    return { rotateX: 0, rotateY: 0, scale: 1 }
  }

  // Requirement 4.5 — guard against zero-dimension rects (prevents NaN / Infinity)
  if (rect.width === 0 || rect.height === 0) {
    return { rotateX: 0, rotateY: 0, scale: 1 }
  }

  // Requirement 4.1 — normalize pointer offset to [-1, +1]
  const normX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)
  const normY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)

  // Clamp normalized values to [-1, +1] before multiplication
  const clampedNormX = Math.max(-1, Math.min(1, normX))
  const clampedNormY = Math.max(-1, Math.min(1, normY))

  // Requirement 4.2, 4.3 — derive rotation and clamp to [-maxTilt, +maxTilt]
  const rotateY = Math.max(-maxTilt, Math.min(maxTilt, clampedNormX * maxTilt))
  // Negative normY (pointer above center) → positive rotateX (card tilts toward pointer)
  const rotateX = Math.max(-maxTilt, Math.min(maxTilt, -clampedNormY * maxTilt))

  // Requirement 5.6 — hard cap on scale factor
  const scale = Math.min(1.04, scaleFactor)

  return { rotateX, rotateY, scale }
}
