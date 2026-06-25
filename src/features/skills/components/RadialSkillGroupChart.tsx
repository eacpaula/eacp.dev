import { useRef, useState } from 'react'
import type { FocusEvent, KeyboardEvent, MouseEvent as ReactMouseEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Skill, SkillGroup } from '../data/skillExplorer.types'
import { buildRadialChartData } from '../utils/chartUtils'

interface RadialSkillGroupChartProps {
  groups: SkillGroup[]
  skills: Skill[]
  activeGroupId: string | null
  onSelectGroup: (groupId: string) => void
  reducedMotion: boolean
}

function handleKeyboardSelect(
  event: KeyboardEvent<SVGGElement | HTMLButtonElement>,
  onSelect: () => void
) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onSelect()
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function formatCombinedSkillDepth(value: number) {
  return `${value.toFixed(1).replace('.0', '')}+ combined skill depth`
}

export function RadialSkillGroupChart({
  groups,
  skills,
  activeGroupId,
  onSelectGroup,
  reducedMotion,
}: RadialSkillGroupChartProps) {
  const chartFrameRef = useRef<HTMLDivElement | null>(null)
  const [hoveredGroupId, setHoveredGroupId] = useState<string | null>(null)
  const [tooltipState, setTooltipState] = useState<{
    groupId: string
    label: string
    skillCount: number
    totalWeight: number
    x: number
    y: number
  } | null>(null)
  const skillsById = new Map(skills.map((skill) => [skill.id, skill] as const))
  const { radialGroups } = buildRadialChartData(groups, skillsById, {
    innerRadius: 54,
    outerRadius: 148,
  })

  function showTooltipAtPoint(
    group: (typeof radialGroups)[number],
    clientX: number,
    clientY: number
  ) {
    const frame = chartFrameRef.current
    if (!frame) return

    const rect = frame.getBoundingClientRect()
    setTooltipState({
      groupId: group.groupId,
      label: group.label,
      skillCount: group.skillCount,
      totalWeight: group.totalWeight,
      x: clamp(clientX - rect.left, 72, rect.width - 72),
      y: clamp(clientY - rect.top, 40, rect.height - 40),
    })
  }

  function handleGroupMouseEnter(
    event: ReactMouseEvent<SVGGElement>,
    group: (typeof radialGroups)[number]
  ) {
    setHoveredGroupId(group.groupId)
    showTooltipAtPoint(group, event.clientX, event.clientY)
  }

  function handleGroupMouseMove(
    event: ReactMouseEvent<SVGGElement>,
    group: (typeof radialGroups)[number]
  ) {
    showTooltipAtPoint(group, event.clientX, event.clientY)
  }

  function handleGroupFocus(
    event: FocusEvent<SVGGElement>,
    group: (typeof radialGroups)[number]
  ) {
    setHoveredGroupId(group.groupId)

    const targetRect = event.currentTarget.getBoundingClientRect()
    showTooltipAtPoint(
      group,
      targetRect.left + targetRect.width / 2,
      targetRect.top + targetRect.height / 2
    )
  }

  function clearGroupHover(groupId: string) {
    setHoveredGroupId((current) => (current === groupId ? null : current))
    setTooltipState((current) => (current?.groupId === groupId ? null : current))
  }

  return (
    <div>
      <div
        ref={chartFrameRef}
        className="skills-chart-frame relative overflow-hidden rounded-card border border-border bg-surface-muted/70 p-4"
      >
        <svg
          viewBox="-210 -210 420 420"
          role="img"
          aria-label="Radial skill group overview"
          aria-describedby="skills-radial-chart-desc"
          className="mx-auto h-auto w-full max-w-[26rem]"
        >
          <desc id="skills-radial-chart-desc">
            Radial stacked bar chart showing skill groups by breadth and combined
            experience depth. Select a group directly to update the skill detail
            view.
          </desc>

          <circle
            cx="0"
            cy="0"
            r="44"
            className="fill-surface stroke-border"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="-4"
            textAnchor="middle"
            className="fill-foreground font-mono text-[10px] uppercase tracking-[0.24em]"
          >
            Skills
          </text>
          <text
            x="0"
            y="16"
            textAnchor="middle"
            className="fill-foreground-muted text-[11px]"
          >
            {groups.length} groups
          </text>

          {radialGroups.map((group) => {
            const isActive = activeGroupId === group.groupId
            const isHovered = hoveredGroupId === group.groupId
            const directionX = Math.sin(group.rotatedMidAngle)
            const directionY = -Math.cos(group.rotatedMidAngle)

            return (
              <g
                key={group.groupId}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${group.label}, ${group.skillCount} skills, ${group.totalWeight.toFixed(1).replace('.0', '')}+ combined skill depth`}
                className="cursor-pointer focus:outline-none"
                onClick={() => onSelectGroup(group.groupId)}
                onMouseEnter={(event) => handleGroupMouseEnter(event, group)}
                onMouseMove={(event) => handleGroupMouseMove(event, group)}
                onMouseLeave={() => clearGroupHover(group.groupId)}
                onFocus={(event) => handleGroupFocus(event, group)}
                onBlur={() => clearGroupHover(group.groupId)}
                onKeyDown={(event) =>
                  handleKeyboardSelect(event, () => onSelectGroup(group.groupId))
                }
              >
                {group.segments.map((segment, index) => (
                  <path
                    key={`${group.groupId}-${segment.skillId}`}
                    d={segment.path}
                    className={
                      isActive
                        ? index % 2 === 0
                          ? 'fill-accent stroke-accent-muted'
                          : 'fill-accent-soft-strong stroke-accent'
                        : index % 2 === 0
                          ? 'fill-surface-strong stroke-border-strong'
                          : 'fill-surface-interactive stroke-border'
                    }
                    strokeWidth={isActive ? 1.8 : 1.2}
                    style={{
                      transition: reducedMotion
                        ? undefined
                        : 'fill 280ms ease, stroke 280ms ease, opacity 280ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: isHovered
                        ? `translate(${(
                            directionX * (2 + index * 1.2)
                          ).toFixed(2)}px, ${(directionY * (2 + index * 1.2)).toFixed(2)}px)`
                        : undefined,
                      opacity: activeGroupId === null || isActive ? 1 : 0.65,
                    }}
                  />
                ))}
              </g>
            )
          })}
        </svg>

        <AnimatePresence>
          {tooltipState ? (
            <motion.div
              key={tooltipState.groupId}
              initial={reducedMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: reducedMotion ? 0 : 0.16, ease: 'easeOut' }}
              className="pointer-events-none absolute z-20 w-max max-w-[16rem] rounded-control border border-accent/25 bg-surface-overlay px-3 py-2 shadow-card backdrop-blur-md"
              style={{
                left: `${tooltipState.x}px`,
                top: `${tooltipState.y}px`,
                transform: 'translate(-50%, calc(-100% - 14px))',
              }}
            >
              <p className="font-display text-sm font-semibold text-foreground">
                {tooltipState.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-foreground-muted">
                {tooltipState.skillCount} skills ·{' '}
                {formatCombinedSkillDepth(tooltipState.totalWeight)}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {radialGroups.map((group) => {
          const isActive = activeGroupId === group.groupId

          return (
            <button
              key={group.groupId}
              type="button"
              className={
                isActive
                  ? 'skills-control skills-control-active text-left'
                  : 'skills-control text-left'
              }
              aria-pressed={isActive}
              onClick={() => onSelectGroup(group.groupId)}
            >
              <span className="block text-sm font-semibold text-foreground">
                {group.label}
              </span>
              <span className="mt-1 block text-xs text-foreground-muted">
                {group.skillCount} skills ·{' '}
                {group.totalWeight.toFixed(1).replace('.0', '')}+ combined skill depth
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
