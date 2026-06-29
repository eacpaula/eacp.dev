import type {
  WritingRoleGraphNode,
  WritingRoleGraphNodeType,
} from '../data/writing.types'
import { groupRoleGraphNodesByType } from '../utils/roleGraphLayout'

interface WritingRoleGraphFallbackProps {
  nodes: WritingRoleGraphNode[]
  activeNodeId: string
  onSelectNode: (nodeId: string) => void
  title?: string
  description?: string
  className?: string
  showHeader?: boolean
}

const groupLabelByType: Record<WritingRoleGraphNodeType, string> = {
  role: 'Roles',
  skill: 'Skills',
  responsibility: 'Responsibilities',
  category: 'Categories',
}

export function WritingRoleGraphFallback({
  nodes,
  activeNodeId,
  onSelectNode,
  title = 'Text fallback',
  description = 'Use the grouped buttons below to review the same relationships without relying on the SVG graph.',
  className,
  showHeader = true,
}: WritingRoleGraphFallbackProps) {
  const groups = groupRoleGraphNodesByType(nodes)

  return (
    <section
      aria-label={title}
      className={
        className ??
        'writing-role-graph-fallback sketch-surface-muted rounded-card p-4 sm:p-5'
      }
    >
      <div className="space-y-4">
        {showHeader ? (
          <div className="space-y-2">
            <p className="sketch-badge sketch-badge-muted w-fit text-[0.64rem]">
              Text fallback
            </p>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-7 text-foreground-muted">{description}</p>
          </div>
        ) : null}

        <div className="space-y-4">
          {Object.entries(groups).map(([type, groupNodes]) => {
            if (!groupNodes.length) {
              return null
            }

            return (
              <div key={type} className="space-y-2">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted">
                  {groupLabelByType[type as WritingRoleGraphNodeType]}
                </p>
                <div className="writing-role-graph-fallback-grid flex flex-wrap gap-2">
                  {groupNodes.map((node) => {
                    const isActive = node.id === activeNodeId

                    return (
                      <button
                        key={node.id}
                        type="button"
                        className={
                          isActive
                            ? 'writing-role-graph-button writing-role-graph-button-active'
                            : 'writing-role-graph-button'
                        }
                        aria-pressed={isActive}
                        onClick={() => onSelectNode(node.id)}
                      >
                        {node.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
