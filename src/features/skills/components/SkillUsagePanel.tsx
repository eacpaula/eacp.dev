import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { CompanyUsage, Skill, SkillGroup, SkillUsageView } from '../data/skillExplorer.types'

interface SkillUsagePanelProps {
  activeGroup: SkillGroup | null
  activeSkill: Skill | null
  skills: Skill[]
  usages: CompanyUsage[]
  view: SkillUsageView
  hasMappedUsages: boolean
  reducedMotion: boolean
  isTransitioning: boolean
  pendingSkillLabel: string | null
  onClearSkill: () => void
}

const usageCardVariants = {
  rest: {
    y: 0,
    scale: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  hover: {
    y: -3,
    scale: 1.004,
    borderColor: 'rgba(200, 166, 107, 0.32)',
  },
}

const technologyChipVariants = {
  rest: {
    y: 0,
    scale: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(0px)',
  },
  hover: (index: number) => ({
    y: -1.5,
    scale: 1.015,
    borderColor: 'rgba(200, 166, 107, 0.34)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    boxShadow:
      'inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 10px 18px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(200, 166, 107, 0.12)',
    backdropFilter: 'blur(8px)',
    transition: {
      duration: 0.18,
      ease: 'easeOut',
      delay: index * 0.018,
    },
  }),
}

function unique<T>(items: T[]) {
  return [...new Set(items)]
}

function formatWebsiteLabel(url: string) {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '')
}

function UsageSkillsList({
  usageId,
  skills,
  reducedMotion,
}: {
  usageId: string
  skills: string[]
  reducedMotion: boolean
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current

    if (!viewport || !content) return

    const updateOverflow = () => {
      const nextOverflow = content.scrollHeight - viewport.clientHeight > 2
      setHasOverflow(nextOverflow)
    }

    updateOverflow()

    const resizeObserver = new ResizeObserver(updateOverflow)
    resizeObserver.observe(viewport)
    resizeObserver.observe(content)

    return () => {
      resizeObserver.disconnect()
    }
  }, [skills])

  useEffect(() => {
    if (reducedMotion || !hasOverflow || !isHovered) return

    const viewport = viewportRef.current
    if (!viewport) return

    let animationFrameId = 0
    let previousTimestamp: number | null = null
    const maxScrollTop = () => viewport.scrollHeight - viewport.clientHeight
    const pixelsPerSecond = 18

    const step = (timestamp: number) => {
      if (previousTimestamp === null) {
        previousTimestamp = timestamp
      }

      const elapsed = timestamp - previousTimestamp
      previousTimestamp = timestamp

      const nextScrollTop = Math.min(
        maxScrollTop(),
        viewport.scrollTop + (elapsed * pixelsPerSecond) / 1000
      )

      viewport.scrollTop = nextScrollTop

      if (nextScrollTop < maxScrollTop()) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [hasOverflow, isHovered, reducedMotion])

  if (skills.length === 0) return null

  return (
    <div
      ref={viewportRef}
      className={`skills-context-scroll max-h-[8.5rem] ${
        hasOverflow ? 'overflow-y-auto pr-2' : 'overflow-hidden'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div ref={contentRef} className="flex flex-wrap gap-2">
        {skills.map((technology, index) => (
          <motion.span
            key={`${usageId}-${technology}`}
            className="sketch-badge sketch-badge-muted text-[0.68rem]"
            custom={index}
            variants={technologyChipVariants}
            initial="rest"
            animate="rest"
            whileHover={reducedMotion ? undefined : 'hover'}
            transition={
              reducedMotion
                ? undefined
                : { duration: 0.18, ease: 'easeOut' }
            }
          >
            {technology}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

export function SkillUsagePanel({
  activeGroup,
  activeSkill,
  skills,
  usages,
  view,
  hasMappedUsages,
  reducedMotion,
  isTransitioning,
  pendingSkillLabel,
  onClearSkill,
}: SkillUsagePanelProps) {
  const panelKey = activeSkill?.id ?? activeGroup?.id ?? 'overview'
  const skillLabelById = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill.label] as const)),
    [skills]
  )

  return (
    <section
      aria-labelledby="skills-usage-heading"
      className="space-y-5 rounded-card border border-border bg-surface p-6 shadow-card"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="sketch-badge sketch-badge-accent w-fit text-[0.64rem]">
            Skills in context
          </p>
          <h3
            id="skills-usage-heading"
            className="font-display text-2xl font-semibold text-foreground"
          >
            {view.title}
          </h3>
          <p className="max-w-3xl text-sm leading-7 text-foreground-muted">
            {view.description}
          </p>
        </div>

        {activeSkill ? (
          <button
            type="button"
            className="skills-control"
            onClick={onClearSkill}
          >
            Clear skill filter
          </button>
        ) : null}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={isTransitioning ? `loading-${pendingSkillLabel ?? panelKey}` : panelKey}
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: reducedMotion ? 0 : 0.2, ease: 'easeOut' }}
          className="space-y-4"
        >
          {isTransitioning ? (
            <div className="flex min-h-[18rem] items-center justify-center rounded-card border border-border bg-surface-muted/80 p-8">
              <div className="flex max-w-md flex-col items-center gap-4 text-center">
                <span className="flex h-18 w-18 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent shadow-inset">
                  <svg
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    className="h-9 w-9 animate-spin"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeOpacity="0.18"
                    />
                    <path
                      d="M20 5a15 15 0 0 1 15 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="space-y-2">
                  <p className="font-display text-lg font-semibold text-foreground">
                    Loading verified experience context
                  </p>
                  <p className="text-sm leading-7 text-foreground-muted">
                    {pendingSkillLabel
                      ? `${pendingSkillLabel} is updating the company and project list below.`
                      : 'Updating the company and project list below.'}
                  </p>
                </div>
              </div>
            </div>
          ) : hasMappedUsages ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {usages.map((usage) => (
                <motion.article
                  key={usage.id}
                  className="skills-chart-card space-y-4 rounded-card border border-border bg-surface-muted p-5"
                  variants={usageCardVariants}
                  initial="rest"
                  animate="rest"
                  whileHover={reducedMotion ? undefined : 'hover'}
                  transition={
                    reducedMotion
                      ? undefined
                      : { duration: 0.18, ease: 'easeOut' }
                  }
                >
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                    <div className="min-w-0 space-y-2">
                      {usage.periodLabel ? (
                        <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
                          {usage.periodLabel}
                        </p>
                      ) : null}
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {usage.name}
                      </h4>
                      {usage.websiteUrl ? (
                        <a
                          href={usage.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-xs leading-5 text-foreground-dim transition hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                        >
                          {formatWebsiteLabel(usage.websiteUrl)}
                        </a>
                      ) : null}
                      <p className="text-sm leading-6 text-foreground-muted">
                        {usage.headline}
                      </p>
                    </div>

                    {usage.logoSrc ? (
                      usage.websiteUrl ? (
                        <a
                          href={usage.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${usage.name} website`}
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-control border border-border bg-white p-2 shadow-inset transition hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-accent"
                        >
                          <img
                            src={usage.logoSrc}
                            alt={`${usage.name} logo`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-control border border-border bg-white p-2 shadow-inset">
                          <img
                            src={usage.logoSrc}
                            alt={`${usage.name} logo`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )
                    ) : null}
                  </div>

                  <p className="text-sm leading-7 text-foreground">
                    {usage.description}
                  </p>

                  <UsageSkillsList
                    usageId={usage.id}
                    reducedMotion={reducedMotion}
                    skills={unique(
                      usage.relatedSkillIds
                        .map((skillId) => skillLabelById.get(skillId))
                        .filter((label): label is string => Boolean(label))
                    )}
                  />
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-card border border-border bg-surface-muted p-5">
              <p className="text-sm leading-7 text-foreground-muted">
                Verified company or project mapping is still under review for this
                skill. The chart entry stays visible because the skill is present
                in the approved profile data, but the public context card is not
                shown until the mapping can be verified safely.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
