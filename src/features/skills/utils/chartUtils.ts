import { arc, max, scaleBand, scaleLinear } from 'd3'
import type { Skill, SkillGroup } from '../data/skillExplorer.types'

export interface RadialSkillSegmentDatum {
  skillId: string
  label: string
  yearsLabel: string
  weight: number
  innerRadius: number
  outerRadius: number
  path: string
}

export interface RadialSkillGroupDatum {
  groupId: string
  label: string
  totalWeight: number
  skillCount: number
  startAngle: number
  endAngle: number
  midAngle: number
  rotatedStartAngle: number
  rotatedEndAngle: number
  rotatedMidAngle: number
  innerRadius: number
  outerRadius: number
  segments: RadialSkillSegmentDatum[]
}

export interface HorizontalSkillBarDatum {
  skillId: string
  label: string
  yearsLabel: string
  weight: number
  x: number
  y: number
  width: number
  height: number
}

const TAU = Math.PI * 2
const START_ANGLE = -Math.PI / 2

export function getFirstSkillIdForGroup(groupId: string, skills: Skill[]) {
  return skills.find((skill) => skill.groupId === groupId)?.id ?? null
}

export function getSkillsForGroup(groupId: string, skills: Skill[]) {
  return skills
    .filter((skill) => skill.groupId === groupId)
    .sort((left, right) => left.order - right.order)
}

export function getGroupTotalWeight(group: SkillGroup) {
  return group.totalExperienceWeight
}

export function buildRadialChartData(
  groups: SkillGroup[],
  skillsById: Map<string, Skill>,
  config: {
    innerRadius: number
    outerRadius: number
  }
) {
  const orderedGroups = [...groups].sort((left, right) => left.order - right.order)
  const maxTotalWeight = max(orderedGroups, (group) => group.totalExperienceWeight) ?? 1
  const angleScale = scaleBand<string>()
    .domain(orderedGroups.map((group) => group.id))
    .range([0, TAU])
    .paddingInner(0.14)
    .paddingOuter(0.08)
  const radiusScale = scaleLinear()
    .domain([0, maxTotalWeight])
    .range([28, config.outerRadius - config.innerRadius])
  const arcGenerator = arc()
  const anchorGroupId = orderedGroups[0]?.id ?? null
  const anchorStartAngle =
    anchorGroupId !== null ? angleScale(anchorGroupId) ?? 0 : 0
  const rotationOffset =
    START_ANGLE - (anchorStartAngle + angleScale.bandwidth() / 2)

  const radialGroups: RadialSkillGroupDatum[] = orderedGroups.map((group) => {
    const startAngle = angleScale(group.id) ?? 0
    const endAngle = startAngle + angleScale.bandwidth()
    const midAngle = startAngle + angleScale.bandwidth() / 2
    const rotatedStartAngle = startAngle + rotationOffset
    const rotatedEndAngle = endAngle + rotationOffset
    const rotatedMidAngle = midAngle + rotationOffset
    const groupDepth = radiusScale(group.totalExperienceWeight)
    const groupOuterRadius = config.innerRadius + groupDepth
    const skills = group.skillIds
      .map((skillId) => skillsById.get(skillId))
      .filter((skill): skill is Skill => Boolean(skill))

    let currentRadius = config.innerRadius
    const segments = skills.map((skill) => {
      const segmentDepth =
        group.totalExperienceWeight > 0
          ? (skill.experienceWeight / group.totalExperienceWeight) * groupDepth
          : 0
      const outerRadius = currentRadius + segmentDepth
      const path =
        arcGenerator({
          innerRadius: currentRadius,
          outerRadius,
          startAngle: rotatedStartAngle,
          endAngle: rotatedEndAngle,
        }) ?? ''

      const segment = {
        skillId: skill.id,
        label: skill.label,
        yearsLabel: skill.yearsLabel,
        weight: skill.experienceWeight,
        innerRadius: currentRadius,
        outerRadius,
        path,
      }

      currentRadius = outerRadius
      return segment
    })

    return {
      groupId: group.id,
      label: group.label,
      totalWeight: group.totalExperienceWeight,
      skillCount: group.skillCount,
      startAngle,
      endAngle,
      midAngle,
      rotatedStartAngle,
      rotatedEndAngle,
      rotatedMidAngle,
      innerRadius: config.innerRadius,
      outerRadius: groupOuterRadius,
      segments,
    }
  })

  return {
    radialGroups,
    maxTotalWeight,
  }
}

export function buildHorizontalBarChartData(
  skills: Skill[],
  config: {
    width: number
    barHeight: number
    gap: number
  }
) {
  const maxWeight = max(skills, (skill) => skill.experienceWeight) ?? 1
  const widthScale = scaleLinear().domain([0, maxWeight]).range([0, config.width])

  return {
    maxWeight,
    bars: skills.map((skill, index): HorizontalSkillBarDatum => ({
      skillId: skill.id,
      label: skill.label,
      yearsLabel: skill.yearsLabel,
      weight: skill.experienceWeight,
      x: 0,
      y: index * (config.barHeight + config.gap),
      width: widthScale(skill.experienceWeight),
      height: config.barHeight,
    })),
  }
}
