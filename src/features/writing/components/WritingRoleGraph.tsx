import { useMemo, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import type {
  WritingRoleGraph as WritingRoleGraphData,
  WritingRoleGraphNodeType,
  WritingRoleOrientation,
  WritingRoleProfile,
} from '../data/writing.types'
import {
  ROLE_GRAPH_TYPE_ORDER,
  buildRoleGraphLayout,
  getRoleGraphConnections,
} from '../utils/roleGraphLayout'
import { WritingRoleGraphFallback } from './WritingRoleGraphFallback'

interface WritingRoleGraphProps {
  graph: WritingRoleGraphData
  roleProfiles?: WritingRoleProfile[]
}

const nodeTypeLabelByValue: Record<WritingRoleGraphNodeType, string> = {
  role: 'Role',
  skill: 'Skill',
  responsibility: 'Responsibility',
  category: 'Category',
}

const laneLabelWidthByValue: Record<WritingRoleGraphNodeType, number> = {
  role: 62,
  skill: 66,
  responsibility: 118,
  category: 86,
}

const orientationLabelByValue: Record<WritingRoleOrientation, string> = {
  'software-engineering': 'Software Engineering',
  'ml-data': 'ML / Data',
  product: 'Product',
  automation: 'Automation',
  mixed: 'Mixed',
}

function handleKeyboardSelect(
  event: React.KeyboardEvent<SVGGElement>,
  onSelect: () => void,
) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onSelect()
  }
}

function splitLabel(label: string, maxLineLength: number) {
  const words = label.split(' ')
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word

    if (nextLine.length > maxLineLength && currentLine) {
      lines.push(currentLine)
      currentLine = word
      continue
    }

    currentLine = nextLine
  }

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines.slice(0, 3)
}

export function WritingRoleGraph({
  graph,
  roleProfiles = [],
}: WritingRoleGraphProps) {
  const reducedMotion = useReducedMotion()
  const [activeNodeId, setActiveNodeId] = useState(graph.defaultNodeId)
  const [isDesktopFallbackOpen, setIsDesktopFallbackOpen] = useState(false)
  const roleProfileById = useMemo(
    () => new Map(roleProfiles.map((profile) => [profile.id, profile] as const)),
    [roleProfiles],
  )
  const graphLayout = useMemo(
    () => buildRoleGraphLayout(graph.nodes, graph.links),
    [graph.links, graph.nodes],
  )
  const nodeById = useMemo(
    () => new Map(graphLayout.nodes.map((node) => [node.id, node] as const)),
    [graphLayout.nodes],
  )

  const activeNode =
    nodeById.get(activeNodeId) ?? graphLayout.nodes[0] ?? null
  const { connectedNodeIds, activeLinks } = useMemo(
    () =>
      activeNode
        ? getRoleGraphConnections(activeNode.id, graph.links)
        : {
            connectedNodeIds: new Set<string>(),
            activeLinks: [],
          },
    [activeNode, graph.links],
  )
  const activeLinkKeys = useMemo(
    () => new Set(activeLinks.map((link) => `${link.source}::${link.target}`)),
    [activeLinks],
  )
  const relatedNodes = useMemo(
    () =>
      graphLayout.nodes.filter(
        (node) => node.id !== activeNode?.id && connectedNodeIds.has(node.id),
      ),
    [activeNode?.id, connectedNodeIds, graphLayout.nodes],
  )
  const activeRoleProfile =
    activeNode?.type === 'role' ? roleProfileById.get(activeNode.id) ?? null : null

  if (!activeNode) {
    return null
  }

  const relatedRoles = relatedNodes.filter((node) => node.type === 'role')
  const relatedCapabilities = relatedNodes.filter(
    (node) => node.type === 'skill' || node.type === 'responsibility',
  )
  const relatedCategories = relatedNodes.filter((node) => node.type === 'category')

  return (
    <section className="space-y-5">
      {graph.intro ? (
        <p className="max-w-3xl text-sm leading-7 text-foreground-muted sm:text-base">
          {graph.intro}
        </p>
      ) : null}

      <div className="space-y-5">
        <div className="hidden space-y-4 xl:block">
          <div className="mx-auto max-w-[78rem]">
            <div className="writing-role-graph-stage sketch-shell rounded-card p-4 sm:p-5">
              <svg
                viewBox={`0 0 ${graphLayout.width} ${graphLayout.height}`}
                role="img"
                aria-labelledby="role-graph-title role-graph-desc"
                className="block h-auto w-full"
              >
                <title id="role-graph-title">
                  Interactive role map for AI-related software engineering titles
                </title>
                <desc id="role-graph-desc">
                  Select a role, skill, responsibility, or category to reveal the
                  connected parts of the graph and update the detail panel.
                </desc>

                {ROLE_GRAPH_TYPE_ORDER.map((type) => (
                  <g key={type}>
                    <rect
                      x={graphLayout.laneXPositions[type] - laneLabelWidthByValue[type] / 2}
                      y="14"
                      width={laneLabelWidthByValue[type]}
                      height="24"
                      rx="8"
                      className="fill-surface-strong stroke-border-strong"
                      strokeWidth="1"
                    />
                    <text
                      x={graphLayout.laneXPositions[type]}
                      y="30"
                      textAnchor="middle"
                      className="fill-foreground font-mono text-[11px] uppercase tracking-[0.2em]"
                      style={{ fontWeight: 700, letterSpacing: '0.22em' }}
                    >
                      {nodeTypeLabelByValue[type]}
                    </text>
                  </g>
                ))}

                {graphLayout.links.map((link) => {
                  const isActive = activeLinkKeys.has(`${link.source}::${link.target}`)

                  return (
                    <path
                      key={`${link.source}-${link.target}`}
                      d={link.path}
                      fill="none"
                      className={
                        isActive ? 'stroke-accent' : 'stroke-border-strong'
                      }
                      strokeWidth={isActive ? 2.4 : 1.4}
                      style={{
                        opacity: isActive ? 0.95 : 0.2,
                        transition: reducedMotion
                          ? undefined
                          : 'opacity 180ms ease, stroke-width 180ms ease',
                      }}
                    />
                  )
                })}

                {graphLayout.nodes.map((node) => {
                  const isActive = node.id === activeNodeId
                  const isConnected = connectedNodeIds.has(node.id)
                  const lines = splitLabel(
                    node.label,
                    node.type === 'role' ? 20 : 18,
                  )

                  return (
                    <g
                      key={node.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isActive}
                      aria-label={`${node.label}, ${nodeTypeLabelByValue[node.type]}`}
                      className="cursor-pointer focus:outline-none"
                      onClick={() => setActiveNodeId(node.id)}
                      onKeyDown={(event) =>
                        handleKeyboardSelect(event, () => setActiveNodeId(node.id))
                      }
                    >
                      <rect
                        x={node.x - node.width / 2}
                        y={node.y - node.height / 2}
                        width={node.width}
                        height={node.height}
                        rx="12"
                        className={
                          isActive
                            ? 'fill-accent-soft-strong stroke-accent'
                            : 'fill-surface-strong stroke-border-strong'
                        }
                        strokeWidth={isActive ? 1.8 : 1.2}
                        style={{
                          opacity: isConnected ? 1 : 0.35,
                          transition: reducedMotion
                            ? undefined
                            : 'opacity 180ms ease, fill 180ms ease, stroke 180ms ease',
                        }}
                      />
                      <text
                        x={node.x}
                        y={node.y - (lines.length - 1) * 7}
                        textAnchor="middle"
                        className={
                          isActive ? 'fill-foreground' : 'fill-foreground-muted'
                        }
                        style={{
                          fontSize: node.type === 'role' ? 12 : 11.5,
                          fontWeight: isActive ? 700 : 600,
                          opacity: isConnected ? 1 : 0.45,
                          transition: reducedMotion ? undefined : 'opacity 180ms ease',
                        }}
                      >
                        {lines.map((line, index) => (
                          <tspan key={`${node.id}-${line}`} x={node.x} dy={index === 0 ? 0 : 15}>
                            {line}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          <div className="mx-auto max-w-[78rem]">
            <section
              aria-label="Text fallback"
              className="writing-role-graph-fallback sketch-surface rounded-card p-4 sm:p-5"
            >
              <div className="space-y-4">
                <button
                  type="button"
                  aria-expanded={isDesktopFallbackOpen}
                  aria-controls="desktop-role-graph-fallback-panel"
                  onClick={() => setIsDesktopFallbackOpen((currentValue) => !currentValue)}
                  className="writing-role-accordion-trigger rounded-control"
                >
                  <div className="space-y-2 text-left">
                    <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
                      Text fallback
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      Alternative filter controls
                    </h3>
                    <p className="text-sm leading-7 text-foreground-muted">
                      Expand this if you prefer to filter the detail panel without using the SVG graph above.
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={
                      isDesktopFallbackOpen
                        ? 'writing-role-accordion-icon is-open'
                        : 'writing-role-accordion-icon'
                    }
                  >
                    +
                  </span>
                </button>

                {isDesktopFallbackOpen ? (
                  <div id="desktop-role-graph-fallback-panel" className="border-t border-white/8 pt-4">
                    <WritingRoleGraphFallback
                      nodes={graph.nodes}
                      activeNodeId={activeNodeId}
                      onSelectNode={setActiveNodeId}
                      title="Text fallback"
                      description="Use the grouped buttons below to review the same relationships without relying on the SVG graph."
                      className="border-0 bg-transparent p-0"
                      showHeader={false}
                    />
                  </div>
                ) : null}
              </div>
            </section>
          </div>

          <div className="mx-auto max-w-[66rem]">
            <div className="writing-role-graph-detail sketch-surface-muted rounded-card p-5">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="sketch-badge sketch-badge-accent text-[0.6rem]">
                    {nodeTypeLabelByValue[activeNode.type]}
                  </span>
                  {activeRoleProfile ? (
                    <span className="sketch-badge sketch-badge-muted text-[0.6rem]">
                      {orientationLabelByValue[activeRoleProfile.proximity]}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {activeNode.label}
                </h3>
                {activeNode.description ? (
                  <p className="text-sm leading-7 text-foreground-muted">
                    {activeNode.description}
                  </p>
                ) : null}
                {activeRoleProfile?.practiceNote ? (
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                    {activeRoleProfile.practiceNote}
                  </p>
                ) : null}
              </div>

              {activeRoleProfile ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                      Typical responsibilities
                    </p>
                    <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
                      {activeRoleProfile.typicalResponsibilities.map((item) => (
                        <li key={item} className="writing-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                      Common skills
                    </p>
                    <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
                      {activeRoleProfile.commonSkills.map((item) => (
                        <li key={item} className="writing-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                      Where confusion happens
                    </p>
                    <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
                      {activeRoleProfile.confusionPoints.map((item) => (
                        <li key={item} className="writing-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {!activeRoleProfile && relatedRoles.length ? (
                <div className="space-y-2">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                    Related roles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedRoles.map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        className="writing-role-graph-button"
                        onClick={() => setActiveNodeId(node.id)}
                      >
                        {node.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {relatedCapabilities.length ? (
                <div className="space-y-2">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                    Connected capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedCapabilities.map((node) => (
                      <span
                        key={node.id}
                        className="sketch-badge sketch-badge-muted text-[0.62rem]"
                      >
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {relatedCategories.length ? (
                <div className="space-y-2">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                    Connected categories
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedCategories.map((node) => (
                      <span
                        key={node.id}
                        className="sketch-badge sketch-badge-muted text-[0.62rem]"
                      >
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          </div>
        </div>

        <div className="space-y-4 xl:hidden">
          <WritingRoleGraphFallback
            nodes={graph.nodes}
            activeNodeId={activeNodeId}
            onSelectNode={setActiveNodeId}
            title="Relationship map fallback"
            description="This grouped selector exposes the same role-to-skill relationships as the interactive graph."
          />

          <div className="writing-role-graph-detail sketch-surface-muted rounded-card p-5">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="sketch-badge sketch-badge-accent text-[0.6rem]">
                  {nodeTypeLabelByValue[activeNode.type]}
                </span>
                {activeRoleProfile ? (
                  <span className="sketch-badge sketch-badge-muted text-[0.6rem]">
                    {orientationLabelByValue[activeRoleProfile.proximity]}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {activeNode.label}
                </h3>
                {activeNode.description ? (
                  <p className="text-sm leading-7 text-foreground-muted">
                    {activeNode.description}
                  </p>
                ) : null}
              </div>

              {activeRoleProfile ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                      Responsibilities
                    </p>
                    <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
                      {activeRoleProfile.typicalResponsibilities.map((item) => (
                        <li key={item} className="writing-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeRoleProfile.commonSkills.map((item) => (
                        <span
                          key={item}
                          className="sketch-badge sketch-badge-muted text-[0.62rem]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {!activeRoleProfile && relatedRoles.length ? (
                <div className="space-y-2">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                    Related roles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedRoles.map((node) => (
                      <span
                        key={node.id}
                        className="sketch-badge sketch-badge-muted text-[0.62rem]"
                      >
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
