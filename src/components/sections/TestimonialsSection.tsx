import { useEffect, useMemo, useRef, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'
import type { MotionValue, PanInfo } from 'motion/react'
import { SectionHeading } from '../ui/SectionHeading'
import type { Testimonial } from '../../types/content'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

interface PlaneLayout {
  x: number
  scale: number
  opacity: number
  zIndex: number
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function wrapIndex(index: number, size: number) {
  if (size === 0) return 0
  return (index + size) % size
}

function formatRecommendationDate(value: string) {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(parsed)
}

function buildInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function getRelativeOffset(index: number, activeIndex: number, size: number) {
  const forward = (index - activeIndex + size) % size
  const backward = forward - size

  return Math.abs(forward) <= Math.abs(backward) ? forward : backward
}

function getPlaneLayout(
  relativeOffset: number,
  stageWidth: number,
  reducedMotion: boolean
): PlaneLayout {
  const absOffset = Math.abs(relativeOffset)
  const direction = relativeOffset === 0 ? 0 : relativeOffset > 0 ? 1 : -1
  const primaryOffset = clamp(stageWidth * 0.37, 260, 420)
  const secondaryOffset = clamp(stageWidth * 0.6, 420, 680)

  if (reducedMotion) {
    if (absOffset === 0) {
      return { x: 0, scale: 1, opacity: 1, zIndex: 30 }
    }

    if (absOffset === 1) {
      return {
        x: direction * primaryOffset * 0.72,
        scale: 0.92,
        opacity: 0.48,
        zIndex: 20,
      }
    }

    return {
      x: direction * secondaryOffset * 0.7,
      scale: 0.84,
      opacity: 0.22,
      zIndex: 10,
    }
  }

  if (absOffset === 0) {
    return {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
    }
  }

  if (absOffset === 1) {
    return {
      x: direction * primaryOffset,
      scale: 0.86,
      opacity: 0.6,
      zIndex: 20,
    }
  }

  return {
    x: direction * secondaryOffset,
    scale: 0.72,
    opacity: 0.3,
    zIndex: 10,
  }
}

function TestimonialCard({
  testimonial,
  relativeOffset,
  stageWidth,
  sectionProgress,
  smoothVelocity,
  isActive,
  onSelect,
  onDragEnd,
}: {
  testimonial: Testimonial
  relativeOffset: number
  stageWidth: number
  sectionProgress: MotionValue<number>
  smoothVelocity: MotionValue<number>
  isActive: boolean
  onSelect: () => void
  onDragEnd: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
}) {
  const prefersReducedMotion = Boolean(useReducedMotion())
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [quoteOverflow, setQuoteOverflow] = useState(0)

  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current

    if (!viewport || !content) return

    const updateOverflow = () => {
      const nextOverflow = Math.max(0, Math.ceil(content.scrollHeight - viewport.clientHeight))
      setQuoteOverflow(nextOverflow)
    }

    updateOverflow()

    const resizeObserver = new ResizeObserver(updateOverflow)
    resizeObserver.observe(viewport)
    resizeObserver.observe(content)

    return () => {
      resizeObserver.disconnect()
    }
  }, [testimonial.quote, isActive])

  const quoteParagraphs = useMemo(
    () =>
      testimonial.quote
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean),
    [testimonial.quote]
  )

  const excerpt = quoteParagraphs[0] ?? testimonial.quote
  const layout = getPlaneLayout(relativeOffset, stageWidth, prefersReducedMotion)
  const absOffset = Math.abs(relativeOffset)
  const allowManualScroll = quoteOverflow > 140
  const animatedShift =
    quoteOverflow > 0
      ? Math.min(quoteOverflow, allowManualScroll ? 52 : quoteOverflow)
      : 0

  const waveY = useTransform([sectionProgress, smoothVelocity], (values) => {
    const [progress, velocity] = values as [number, number]
    const wave = Math.sin((progress * 1.2 + absOffset * 0.18) * Math.PI * 2) * (8 + absOffset * 6)
    const velocityDrift = clamp(velocity / 170, -20, 20) * (isActive ? 0.12 : 0.34)
    return wave + velocityDrift
  })

  return (
    <motion.article
      className="absolute top-1/2 left-1/2 w-full max-w-[52rem] -translate-x-1/2 -translate-y-1/2"
      initial={false}
      animate={{
        x: layout.x,
        scale: layout.scale,
        opacity: layout.opacity,
      }}
      style={{
        y: waveY,
        zIndex: layout.zIndex,
        willChange: 'transform, opacity',
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0.2, ease: 'easeOut' }
          : { type: 'spring', stiffness: 160, damping: 22, mass: 0.72 }
      }
    >
      <motion.button
        type="button"
        className={`testimonial-plane group w-full text-left ${
          isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
        }`}
        onClick={isActive ? undefined : onSelect}
        onHoverStart={() => {
          if (isActive) setIsHovered(true)
        }}
        onHoverEnd={() => {
          if (isActive) setIsHovered(false)
        }}
        drag={isActive && !prefersReducedMotion ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.14}
        dragMomentum={false}
        onDragEnd={onDragEnd}
      >
        <motion.div
          className="sketch-metric-card overflow-hidden rounded-[1.25rem] p-5 sm:p-6"
          initial={false}
          animate={{
            borderColor: isActive
              ? 'rgba(200, 166, 107, 0.14)'
              : 'rgba(255, 255, 255, 0.06)',
            backgroundColor: isActive
              ? 'rgba(18, 17, 15, 0.86)'
              : 'rgba(18, 17, 15, 0.74)',
            boxShadow: isActive
              ? '0 28px 60px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.04)'
              : '0 20px 38px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
          }}
          whileHover={
            prefersReducedMotion || !isActive
              ? undefined
              : {
                  y: -6,
                  scale: 1.008,
                  boxShadow:
                    '0 36px 70px rgba(0, 0, 0, 0.42), 0 0 0 1px rgba(200, 166, 107, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                }
          }
          transition={
            prefersReducedMotion ? undefined : { duration: 0.22, ease: 'easeOut' }
          }
        >
          <div className="space-y-5">
            <div className="flex items-start gap-4 border-b border-border pb-4">
              {testimonial.imageSrc ? (
                <motion.img
                  src={testimonial.imageSrc}
                  alt={testimonial.recommender}
                  className="h-14 w-14 rounded-full border border-border object-cover shadow-card"
                  whileHover={
                    prefersReducedMotion || !isActive
                      ? undefined
                      : {
                          scale: 1.04,
                          boxShadow:
                            '0 12px 26px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(200, 166, 107, 0.14)',
                        }
                  }
                  transition={
                    prefersReducedMotion ? undefined : { duration: 0.2, ease: 'easeOut' }
                  }
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-muted font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent shadow-card">
                  {buildInitials(testimonial.recommender)}
                </div>
              )}

              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-xl font-semibold text-foreground">
                      {testimonial.recommender}
                    </h3>
                    <p className="text-sm leading-6 text-foreground-muted">
                      {formatRecommendationDate(testimonial.recommendationDate)}
                    </p>
                  </div>
                  <span className="sketch-badge sketch-badge-muted text-[0.64rem]">
                    LinkedIn Recommendation
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              className="relative rounded-card border border-border bg-surface-muted/78 p-4 shadow-inset backdrop-blur-[2px]"
              initial={false}
              animate={{
                backgroundColor: isActive
                  ? 'rgba(23, 22, 20, 0.82)'
                  : 'rgba(23, 22, 20, 0.72)',
                borderColor: isActive
                  ? 'rgba(72, 62, 48, 1)'
                  : 'rgba(47, 44, 38, 0.88)',
              }}
              whileHover={
                prefersReducedMotion || !isActive
                  ? undefined
                  : {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(200, 166, 107, 0.28)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 14px 30px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(200, 166, 107, 0.12)',
                      backdropFilter: 'blur(10px)',
                    }
              }
              transition={
                prefersReducedMotion ? undefined : { duration: 0.22, ease: 'easeOut' }
              }
            >
              {isActive ? (
                <div
                  ref={viewportRef}
                  className={`testimonial-quote-scroll relative h-[13rem] ${
                    allowManualScroll && isHovered ? 'overflow-y-auto pr-2' : 'overflow-hidden'
                  }`}
                >
                  <motion.div
                    ref={contentRef}
                    initial={false}
                    animate={
                      prefersReducedMotion
                        ? { y: 0 }
                        : {
                            y: isHovered ? -animatedShift : 0,
                          }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            duration: Math.max(
                              0.9,
                              Math.min(3.2, 0.8 + animatedShift * 0.024)
                            ),
                            ease: 'easeInOut',
                          }
                    }
                    className="space-y-4"
                  >
                    {quoteParagraphs.map((paragraph, index) => (
                      <p
                        key={`${testimonial.id}-${index}`}
                        className="text-sm leading-7 text-foreground-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>

                  {quoteOverflow > 0 && !isHovered ? (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface-muted/96 via-surface-muted/72 to-transparent" />
                  ) : null}
                </div>
              ) : (
                <div className="relative h-[7rem] overflow-hidden">
                  <p className="text-sm leading-7 text-foreground-muted">{excerpt}</p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface-muted/96 via-surface-muted/70 to-transparent" />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.button>
    </motion.article>
  )
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [stageWidth, setStageWidth] = useState(960)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, {
    stiffness: 130,
    damping: 24,
    mass: 0.28,
  })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const updateWidth = () => {
      setStageWidth(stage.clientWidth)
    }

    updateWidth()

    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(stage)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  function goToPrevious() {
    setActiveIndex((current) => wrapIndex(current - 1, testimonials.length))
  }

  function goToNext() {
    setActiveIndex((current) => wrapIndex(current + 1, testimonials.length))
  }

  function handleDragEnd(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (Math.abs(info.offset.x) < 90 && Math.abs(info.velocity.x) < 240) return

    if (info.offset.x > 0 || info.velocity.x > 0) {
      goToPrevious()
      return
    }

    goToNext()
  }

  return (
    <section id="testimonials" ref={sectionRef} className="space-y-10">
      <SectionHeading
        eyebrow="Testimonials"
        title="Recommendations from people who saw the work up close."
        description="A curated set of LinkedIn recommendations that highlight technical depth, delivery reliability, collaboration style, and the quality of the work after the project pressure is gone."
      />

      <div className="space-y-5">
        <div className="testimonial-plane-stage relative overflow-hidden rounded-[1.25rem] border border-border bg-surface/60 px-4 py-6 sm:px-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-40 w-24 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-40 w-24 bg-gradient-to-l from-background via-background/70 to-transparent" />

          <div
            ref={stageRef}
            className="relative mx-auto h-[35rem] max-w-[86rem] sm:h-[36rem]"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                goToPrevious()
              }

              if (event.key === 'ArrowRight') {
                event.preventDefault()
                goToNext()
              }
            }}
          >
            {testimonials.map((testimonial, index) => {
              const relativeOffset = getRelativeOffset(
                index,
                activeIndex,
                testimonials.length
              )

              if (Math.abs(relativeOffset) > 2) return null

              return (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  relativeOffset={relativeOffset}
                  stageWidth={stageWidth}
                  sectionProgress={scrollYProgress}
                  smoothVelocity={smoothVelocity}
                  isActive={relativeOffset === 0}
                  onSelect={() => setActiveIndex(index)}
                  onDragEnd={handleDragEnd}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={testimonial.id}
                type="button"
                aria-label={`Show testimonial from ${testimonial.recommender}`}
                aria-pressed={isActive}
                className={
                  isActive
                    ? 'skills-control skills-control-active h-3.5 min-w-10 px-3 py-0'
                    : 'skills-control h-3.5 min-w-3.5 px-0 py-0'
                }
                onClick={() => setActiveIndex(index)}
              />
            )
          })}
        </div>

        {reducedMotion ? (
          <p className="text-center text-xs tracking-[0.12em] text-foreground-subtle uppercase">
            Reduced motion active: drag depth and wave effects are simplified.
          </p>
        ) : null}
      </div>
    </section>
  )
}
