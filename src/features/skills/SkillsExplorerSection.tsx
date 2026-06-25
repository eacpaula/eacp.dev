import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { skillsExplorerData } from './data/skillExplorer.data'
import { HorizontalSkillBarChart } from './components/HorizontalSkillBarChart'
import { RadialSkillGroupChart } from './components/RadialSkillGroupChart'
import { SkillUsagePanel } from './components/SkillUsagePanel'
import { useSkillSelection } from './hooks/useSkillSelection'

export function SkillsExplorerSection() {
  const reducedMotion = useReducedMotion()
  const [isOverviewInfoOpen, setIsOverviewInfoOpen] = useState(false)
  const [detailPanelHeight, setDetailPanelHeight] = useState<number | null>(null)
  const [isUsageTransitioning, setIsUsageTransitioning] = useState(false)
  const [pendingSkillId, setPendingSkillId] = useState<string | null>(null)
  const overviewCardRef = useRef<HTMLElement | null>(null)
  const usagePanelRef = useRef<HTMLDivElement | null>(null)
  const skillTransitionTimeoutRef = useRef<number | null>(null)
  const {
    groups,
    skills,
    activeGroup,
    activeSkill,
    groupSkills,
    filteredUsages,
    view,
    hasMappedUsages,
    selectGroup,
    selectSkill,
    clearSkill,
    resetOverview,
  } = useSkillSelection(skillsExplorerData)

  const pendingSkill = useMemo(
    () =>
      pendingSkillId
        ? skills.find((skill) => skill.id === pendingSkillId) ?? null
        : null,
    [pendingSkillId, skills]
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')
    const card = overviewCardRef.current

    if (!card) return

    const updateDetailHeight = () => {
      if (!mediaQuery.matches) {
        setDetailPanelHeight(null)
        return
      }

      setDetailPanelHeight(Math.round(card.getBoundingClientRect().height))
    }

    updateDetailHeight()

    const resizeObserver = new ResizeObserver(() => {
      updateDetailHeight()
    })

    resizeObserver.observe(card)
    mediaQuery.addEventListener('change', updateDetailHeight)

    return () => {
      resizeObserver.disconnect()
      mediaQuery.removeEventListener('change', updateDetailHeight)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (skillTransitionTimeoutRef.current !== null) {
        window.clearTimeout(skillTransitionTimeoutRef.current)
      }
    }
  }, [])

  function scrollUsagePanelIntoView() {
    usagePanelRef.current?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  function handleSelectSkill(skillId: string) {
    scrollUsagePanelIntoView()

    if (activeSkill?.id === skillId) {
      return
    }

    if (skillTransitionTimeoutRef.current !== null) {
      window.clearTimeout(skillTransitionTimeoutRef.current)
    }

    setPendingSkillId(skillId)
    setIsUsageTransitioning(true)

    skillTransitionTimeoutRef.current = window.setTimeout(() => {
      selectSkill(skillId)
      setPendingSkillId(null)
      setIsUsageTransitioning(false)
      skillTransitionTimeoutRef.current = null
    }, reducedMotion ? 0 : 3000)
  }

  return (
    <section id="skills" className="space-y-10">
      <SectionHeading
        eyebrow="Skills"
        title="Technical depth with the delivery context attached."
        description="Explore skill groups, drill into the tools inside each group, and trace them back to verified company and project work instead of relying on a flat keyword wall."
      />

      <div className="grid gap-6 xl:items-start xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article
          ref={overviewCardRef}
          className="skills-chart-card rounded-card border border-border bg-surface p-6 shadow-card"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
                Group overview
              </p>
            </div>

            <div className="relative shrink-0">
              <button
                type="button"
                className="skills-info-button"
                aria-label="How to navigate the skills overview"
                aria-expanded={isOverviewInfoOpen}
                aria-controls="skills-overview-info"
                onClick={() => setIsOverviewInfoOpen((current) => !current)}
              >
                <span aria-hidden="true">i</span>
              </button>

              {isOverviewInfoOpen ? (
                <div
                  id="skills-overview-info"
                  className="skills-info-popover"
                  role="dialog"
                  aria-label="Skills overview help"
                >
                  <p className="text-sm font-semibold text-foreground">
                    How to navigate
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground-muted">
                    Click a radial segment or one of the group cards below to
                    inspect that area. The detail panel on the right updates to
                    match the selected group.
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
                    onClick={() => {
                      resetOverview()
                      setIsOverviewInfoOpen(false)
                    }}
                  >
                    Show overall highlights
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:hidden">
            <div className="grid gap-2 sm:grid-cols-2">
              {groups.map((group) => {
                const isActive = activeGroup?.id === group.id

                return (
                  <button
                    key={group.id}
                    type="button"
                    className={
                      isActive
                        ? 'skills-control skills-control-active text-left'
                        : 'skills-control text-left'
                    }
                    onClick={() => selectGroup(group.id)}
                  >
                    <span className="block text-sm font-semibold text-foreground">
                      {group.label}
                    </span>
                    <span className="mt-1 block text-xs text-foreground-muted">
                      {group.skillCount} skills ·{' '}
                      {group.totalExperienceWeight.toFixed(1).replace('.0', '')}+ combined skill depth
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 hidden md:block">
            <RadialSkillGroupChart
              groups={groups}
              skills={skills}
              activeGroupId={activeGroup?.id ?? null}
              onSelectGroup={selectGroup}
              reducedMotion={Boolean(reducedMotion)}
            />
          </div>
        </article>

        <article
          className="skills-chart-card rounded-card border border-border bg-surface p-6 shadow-card xl:flex xl:min-h-0 xl:flex-col"
          style={detailPanelHeight !== null ? { height: `${detailPanelHeight}px` } : undefined}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
                Group detail
              </p>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {activeGroup ? activeGroup.label : 'Choose a group to inspect its skills'}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-foreground-muted">
                {activeGroup?.description ??
                  'The overview reset keeps the radial chart visible while returning the usage panel to general highlights.'}
              </p>
            </div>

            {activeSkill ? (
              <div className="rounded-control border border-accent bg-accent-soft px-4 py-3 text-sm text-foreground">
                <span className="font-semibold">{activeSkill.label}</span>
                <span className="ml-2 text-foreground-muted">
                  {activeSkill.yearsLabel}
                </span>
              </div>
            ) : null}
          </div>

          {activeGroup ? (
            <div className="skills-detail-scroll mt-6 xl:mt-6 xl:flex-1 xl:min-h-0">
              <HorizontalSkillBarChart
                skills={groupSkills}
                activeSkillId={activeSkill?.id ?? null}
                onSelectSkill={handleSelectSkill}
                reducedMotion={Boolean(reducedMotion)}
              />
            </div>
          ) : (
            <div className="mt-6 rounded-card border border-border bg-surface-muted p-5">
              <p className="text-sm leading-7 text-foreground-muted">
                Select a group from the overview to compare the skills inside it,
                or keep the section in overview mode to review general
                professional highlights below.
              </p>
            </div>
          )}
        </article>
      </div>

      <div ref={usagePanelRef} className="scroll-mt-28">
        <SkillUsagePanel
          activeGroup={activeGroup}
          activeSkill={activeSkill}
          skills={skills}
          usages={filteredUsages}
          view={view}
          hasMappedUsages={hasMappedUsages}
          reducedMotion={Boolean(reducedMotion)}
          isTransitioning={isUsageTransitioning}
          pendingSkillLabel={pendingSkill?.label ?? null}
          onClearSkill={clearSkill}
        />
      </div>
    </section>
  )
}
