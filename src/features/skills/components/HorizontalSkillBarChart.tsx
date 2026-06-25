import { useEffect, useId, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent } from 'react'
import type { Skill } from '../data/skillExplorer.types'
import { buildHorizontalBarChartData } from '../utils/chartUtils'

interface HorizontalSkillBarChartProps {
  skills: Skill[]
  activeSkillId: string | null
  onSelectSkill: (skillId: string) => void
  reducedMotion: boolean
}

function handleKeyboardSelect(
  event: KeyboardEvent<SVGGElement>,
  onSelect: () => void
) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onSelect()
  }
}

export function HorizontalSkillBarChart({
  skills,
  activeSkillId,
  onSelectSkill,
  reducedMotion,
}: HorizontalSkillBarChartProps) {
  const labelWidth = 140
  const labelViewportWidth = labelWidth - 10
  const chartWidth = 320
  const barHeight = 28
  const gap = 12
  const clipPathIdBase = useId().replace(/:/g, '')
  const labelRefs = useRef<Record<string, SVGTextElement | null>>({})
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null)
  const [labelOverflowBySkillId, setLabelOverflowBySkillId] = useState<
    Record<string, number>
  >({})
  const chart = buildHorizontalBarChartData(skills, {
    width: chartWidth,
    barHeight,
    gap,
  })
  const viewBoxHeight = Math.max(1, skills.length) * (barHeight + gap)

  useEffect(() => {
    const nextOverflowBySkillId: Record<string, number> = {}

    for (const skill of skills) {
      const labelNode = labelRefs.current[skill.id]
      if (!labelNode) continue

      const overflow = Math.max(
        0,
        Math.ceil(labelNode.getComputedTextLength() - labelViewportWidth)
      )

      if (overflow > 0) {
        nextOverflowBySkillId[skill.id] = overflow
      }
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      setLabelOverflowBySkillId(nextOverflowBySkillId)
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [labelViewportWidth, skills])

  return (
    <div className="min-w-0">
      <svg
        viewBox={`0 0 ${labelWidth + chartWidth + 88} ${viewBoxHeight}`}
        role="img"
        aria-labelledby="skills-bar-chart-title skills-bar-chart-desc"
        className="block h-auto w-full"
      >
        <title id="skills-bar-chart-title">Skills inside the selected group</title>
        <desc id="skills-bar-chart-desc">
          Horizontal bar chart comparing approved experience depth for the active
          group. Select a skill to filter the verified usage panel below.
        </desc>
        <defs>
          {chart.bars.map((bar) => (
            <clipPath
              key={`${clipPathIdBase}-${bar.skillId}`}
              id={`${clipPathIdBase}-${bar.skillId}`}
            >
              <rect
                x="0"
                y={Math.max(0, bar.y - 4)}
                width={labelViewportWidth}
                height={bar.height + 8}
                rx="4"
              />
            </clipPath>
          ))}
        </defs>

        {chart.bars.map((bar) => {
          const isActive = activeSkillId === bar.skillId
          const labelOverflow = labelOverflowBySkillId[bar.skillId] ?? 0
          const shouldAnimateLabel =
            labelOverflow > 0 &&
            hoveredSkillId === bar.skillId &&
            !reducedMotion
          const labelAnimationStyle = shouldAnimateLabel
            ? ({
                ['--skill-label-shift' as string]: `${-labelOverflow}px`,
                ['--skill-label-duration' as string]: `${Math.max(
                  4,
                  2.8 + labelOverflow * 0.045
                )}s`,
              } satisfies CSSProperties)
            : undefined

          return (
            <g
              key={bar.skillId}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`${bar.label}, ${bar.yearsLabel} of approved experience`}
              className="cursor-pointer focus:outline-none"
              onClick={() => onSelectSkill(bar.skillId)}
              onMouseEnter={() => setHoveredSkillId(bar.skillId)}
              onMouseLeave={() => setHoveredSkillId((current) =>
                current === bar.skillId ? null : current
              )}
              onFocus={() => setHoveredSkillId(bar.skillId)}
              onBlur={() => setHoveredSkillId((current) =>
                current === bar.skillId ? null : current
              )}
              onKeyDown={(event) =>
                handleKeyboardSelect(event, () => onSelectSkill(bar.skillId))
              }
            >
              <g clipPath={`url(#${clipPathIdBase}-${bar.skillId})`}>
                <g
                  className={shouldAnimateLabel ? 'skills-label-marquee' : undefined}
                  style={labelAnimationStyle}
                >
                  <text
                    ref={(node) => {
                      labelRefs.current[bar.skillId] = node
                    }}
                    x="0"
                    y={bar.y + bar.height / 2 + 4}
                    className={isActive ? 'fill-foreground' : 'fill-foreground-muted'}
                    style={{ fontSize: 13, fontWeight: isActive ? 700 : 500 }}
                  >
                    {bar.label}
                  </text>
                </g>
              </g>

              <rect
                x={labelWidth}
                y={bar.y}
                width={chartWidth}
                height={bar.height}
                rx="6"
                className="fill-surface-strong stroke-border"
                strokeWidth="1"
              />

              <rect
                x={labelWidth}
                y={bar.y}
                width={Math.max(bar.width, 6)}
                height={bar.height}
                rx="6"
                className={isActive ? 'fill-accent stroke-accent' : 'fill-accent-soft stroke-border-strong'}
                strokeWidth="1"
                style={{
                  transition: reducedMotion
                    ? undefined
                    : 'width 220ms ease, fill 180ms ease, opacity 180ms ease',
                  opacity: activeSkillId === null || isActive ? 1 : 0.62,
                }}
              />

              <text
                x={labelWidth + Math.min(bar.width + 12, chartWidth + 12)}
                y={bar.y + bar.height / 2 + 4}
                className={isActive ? 'fill-foreground' : 'fill-foreground-dim'}
                style={{ fontSize: 12, fontWeight: isActive ? 700 : 500 }}
              >
                {bar.yearsLabel}
              </text>
            </g>
          )
        })}
      </svg>

    </div>
  )
}
