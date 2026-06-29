import { max, scalePoint } from 'd3'
import type {
  WritingRoleGraphLink,
  WritingRoleGraphNode,
  WritingRoleGraphNodeType,
} from '../data/writing.types'

export const ROLE_GRAPH_TYPE_ORDER: WritingRoleGraphNodeType[] = [
  'role',
  'skill',
  'responsibility',
  'category',
]

const NODE_SIZE_BY_TYPE: Record<
  WritingRoleGraphNodeType,
  {
    width: number
    height: number
  }
> = {
  role: { width: 220, height: 74 },
  skill: { width: 168, height: 60 },
  responsibility: { width: 182, height: 60 },
  category: { width: 164, height: 56 },
}

export interface RoleGraphNodeLayout extends WritingRoleGraphNode {
  x: number
  y: number
  width: number
  height: number
}

export interface RoleGraphLinkLayout extends WritingRoleGraphLink {
  path: string
}

function sortNodesByLaneOrder(nodes: WritingRoleGraphNode[]) {
  return [...nodes].sort((left, right) => {
    if (left.laneOrder === right.laneOrder) {
      return left.label.localeCompare(right.label)
    }

    return left.laneOrder - right.laneOrder
  })
}

function getNodeAnchorX(node: RoleGraphNodeLayout, direction: 'left' | 'right') {
  return direction === 'right' ? node.x + node.width / 2 : node.x - node.width / 2
}

function buildLinkPath(source: RoleGraphNodeLayout, target: RoleGraphNodeLayout) {
  const sourceToRight = source.x <= target.x
  const startX = getNodeAnchorX(source, sourceToRight ? 'right' : 'left')
  const endX = getNodeAnchorX(target, sourceToRight ? 'left' : 'right')
  const controlX = startX + (endX - startX) / 2

  return `M ${startX} ${source.y} C ${controlX} ${source.y}, ${controlX} ${target.y}, ${endX} ${target.y}`
}

export function buildRoleGraphLayout(
  nodes: WritingRoleGraphNode[],
  links: WritingRoleGraphLink[],
  config?: {
    width?: number
    laneGap?: number
    rowGap?: number
  },
) {
  const width = config?.width ?? 1120
  const rowGap = config?.rowGap ?? 86
  const paddingTop = 88
  const paddingBottom = 88
  const laneGroups = ROLE_GRAPH_TYPE_ORDER.reduce(
    (accumulator, type) => {
      accumulator[type] = sortNodesByLaneOrder(
        nodes.filter((node) => node.type === type),
      )
      return accumulator
    },
    {} as Record<WritingRoleGraphNodeType, WritingRoleGraphNode[]>,
  )

  const maxLaneCount =
    max(ROLE_GRAPH_TYPE_ORDER, (type) => laneGroups[type].length) ?? 1
  const height = paddingTop + paddingBottom + Math.max(0, maxLaneCount - 1) * rowGap
  const laneXScale = scalePoint<WritingRoleGraphNodeType>()
    .domain(ROLE_GRAPH_TYPE_ORDER)
    .range([
      NODE_SIZE_BY_TYPE.role.width / 2 + 32,
      width - NODE_SIZE_BY_TYPE.category.width / 2 - 48,
    ])

  const laneXPositions = ROLE_GRAPH_TYPE_ORDER.reduce(
    (accumulator, type) => {
      accumulator[type] = laneXScale(type) ?? 0
      return accumulator
    },
    {} as Record<WritingRoleGraphNodeType, number>,
  )

  const nodeLayouts: RoleGraphNodeLayout[] = ROLE_GRAPH_TYPE_ORDER.flatMap((type) => {
    const laneNodes = laneGroups[type]
    const size = NODE_SIZE_BY_TYPE[type]
    const yScale = scalePoint<string>()
      .domain(laneNodes.map((node) => node.id))
      .range([paddingTop, height - paddingBottom])

    return laneNodes.map((node) => ({
      ...node,
      x: laneXPositions[type],
      y: laneNodes.length === 1 ? height / 2 : yScale(node.id) ?? height / 2,
      width: size.width,
      height: size.height,
    }))
  })

  const nodeLayoutById = new Map(nodeLayouts.map((node) => [node.id, node] as const))
  const linkLayouts: RoleGraphLinkLayout[] = links
    .map((link) => {
      const source = nodeLayoutById.get(link.source)
      const target = nodeLayoutById.get(link.target)

      if (!source || !target) {
        return null
      }

      return {
        ...link,
        path: buildLinkPath(source, target),
      }
    })
    .filter((link): link is RoleGraphLinkLayout => Boolean(link))

  return {
    width:
      (laneXPositions.category || 0) +
      NODE_SIZE_BY_TYPE.category.width / 2 +
      48,
    height,
    laneXPositions,
    nodes: nodeLayouts,
    links: linkLayouts,
  }
}

export function getRoleGraphConnections(
  activeNodeId: string,
  links: WritingRoleGraphLink[],
) {
  const connectedNodeIds = new Set<string>([activeNodeId])
  const activeLinks = links.filter((link) => {
    const isConnected = link.source === activeNodeId || link.target === activeNodeId

    if (isConnected) {
      connectedNodeIds.add(link.source)
      connectedNodeIds.add(link.target)
    }

    return isConnected
  })

  return {
    connectedNodeIds,
    activeLinks,
  }
}

export function groupRoleGraphNodesByType(nodes: WritingRoleGraphNode[]) {
  return ROLE_GRAPH_TYPE_ORDER.reduce(
    (accumulator, type) => {
      accumulator[type] = sortNodesByLaneOrder(
        nodes.filter((node) => node.type === type),
      )
      return accumulator
    },
    {} as Record<WritingRoleGraphNodeType, WritingRoleGraphNode[]>,
  )
}
