import React from 'react'
import { useMotionValue, useSpring, motion } from 'motion/react'
import { SPRING_CONFIG, computeTiltTransform } from './TiltCard.helpers'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TiltCardProps {
  children: React.ReactNode
  className?: string
  /** Maximum rotation in degrees. Range: 0–45. Default: 8 */
  maxTilt?: number
  /** Scale factor on hover. Range: 1.0–2.0 (effective max capped at 1.04). Default: 1.02 */
  scaleFactor?: number
}

// ---------------------------------------------------------------------------
// Internal media-query hook — NOT exported
// ---------------------------------------------------------------------------

/**
 * Subscribe to a CSS media query and return live boolean match state.
 * Guards against SSR / test environments where window.matchMedia may be absent.
 *
 * Requirements: 9.4, 9.5, 10.2, 10.5
 */
function useTiltMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState<boolean>(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false
    }
    return window.matchMedia(query).matches
  })

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }
    const mediaQuery = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}

// ---------------------------------------------------------------------------
// TiltCard component
// ---------------------------------------------------------------------------

/**
 * A transparent wrapper that applies a 3D pointer-tracking tilt interaction
 * to its children using Motion spring-driven transforms.
 *
 * Requirements: 2.1–2.8, 3.1–3.5, 4.1–4.5, 9.1–9.5, 10.1–10.5, 11.2–11.4, 12.3–12.4
 */
export function TiltCard({
  children,
  className,
  maxTilt,
  scaleFactor,
}: TiltCardProps) {
  // Requirements 9.4, 10.2 — live media query subscriptions
  const isCoarse = useTiltMediaQuery('(pointer: coarse)')
  const isReducedMotion = useTiltMediaQuery('(prefers-reduced-motion: reduce)')

  // Requirement 2.3, 2.4 — clamp incoming props to valid ranges
  const clampedMaxTilt = Math.max(0, Math.min(45, maxTilt ?? 8))
  const clampedScale = Math.max(1.0, Math.min(1.04, scaleFactor ?? 1.02))

  // Requirement 3.4 — Motion values drive transforms without React re-renders
  const rotateXValue = useMotionValue(0)
  const rotateYValue = useMotionValue(0)
  const scaleValue = useMotionValue(1)

  // Requirement 3.1, 3.3 — spring wrappers with shared Spring_Config
  const rotateX = useSpring(rotateXValue, SPRING_CONFIG)
  const rotateY = useSpring(rotateYValue, SPRING_CONFIG)
  const scale = useSpring(scaleValue, SPRING_CONFIG)

  // Requirement 5.1–5.4 — isHovered drives data-tilt-active for CSS depth cues
  const [isHovered, setIsHovered] = React.useState(false)

  const ref = React.useRef<HTMLDivElement>(null)

  // Requirement 9.1, 9.2, 10.1, 10.2 — guard coarse/reduced-motion on enter
  function handlePointerEnter() {
    if (isCoarse || isReducedMotion) return
    setIsHovered(true)
    scaleValue.set(clampedScale)
  }

  // Requirement 4.1–4.4, 4.5 — tilt computation on each move event
  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current) return
    const result = computeTiltTransform(
      { clientX: event.clientX, clientY: event.clientY },
      ref.current.getBoundingClientRect(),
      clampedMaxTilt,
      clampedScale,
      isCoarse,
      isReducedMotion
    )
    rotateXValue.set(result.rotateX)
    rotateYValue.set(result.rotateY)
  }

  // Requirement 2.7 — reset all transforms on leave
  function handlePointerLeave() {
    setIsHovered(false)
    rotateYValue.set(0)
    rotateXValue.set(0)
    scaleValue.set(1)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={className}
      data-tilt-active={isHovered}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  )
}
