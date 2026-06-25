import { startTransition, useState } from 'react'
import type {
  CompanyUsage,
  Skill,
  SkillGroup,
  SkillSelectionState,
  SkillUsageView,
  SkillsExplorerData,
} from '../data/skillExplorer.types'
import { getFirstSkillIdForGroup, getSkillsForGroup } from '../utils/chartUtils'

function sortGroups(groups: SkillGroup[]) {
  return [...groups].sort((left, right) => left.order - right.order)
}

function sortSkills(skills: Skill[]) {
  return [...skills].sort((left, right) => {
    if (left.groupId === right.groupId) return left.order - right.order
    return left.groupId.localeCompare(right.groupId)
  })
}

function sortUsages(usages: CompanyUsage[]) {
  return [...usages].sort((left, right) => left.priority - right.priority)
}

export function useSkillSelection(data: SkillsExplorerData) {
  const groups = sortGroups(data.groups)
  const skills = sortSkills(data.skills)
  const usages = sortUsages(data.usages)
  const defaultGroupId = groups[0]?.id ?? null
  const defaultSkillId =
    defaultGroupId !== null ? getFirstSkillIdForGroup(defaultGroupId, skills) : null

  const [selection, setSelection] = useState<SkillSelectionState>({
    activeGroupId: defaultGroupId,
    activeSkillId: defaultSkillId,
  })

  const activeGroup = selection.activeGroupId
    ? groups.find((group) => group.id === selection.activeGroupId) ?? null
    : null
  const groupSkills = activeGroup ? getSkillsForGroup(activeGroup.id, skills) : []
  const activeSkill = selection.activeSkillId
    ? skills.find((skill) => skill.id === selection.activeSkillId) ?? null
    : null

  const skillSet = new Set(groupSkills.map((skill) => skill.id))

  const filteredUsages =
    activeSkill !== null
      ? usages.filter((usage) => usage.relatedSkillIds.includes(activeSkill.id))
      : activeGroup !== null
        ? usages.filter((usage) =>
            usage.relatedSkillIds.some((skillId) => skillSet.has(skillId))
          )
        : usages.filter((usage) => usage.isHighlight)

  const view: SkillUsageView =
    activeSkill !== null
      ? {
          mode: 'skill',
          title: activeSkill.label,
          description: `${activeSkill.yearsLabel} of approved experience data, filtered to verified company and project context.`,
        }
      : activeGroup !== null
        ? {
            mode: 'group',
            title: activeGroup.label,
            description: `${activeGroup.skillCount} skills and ${activeGroup.totalExperienceWeight.toFixed(1).replace('.0', '')}+ combined skill depth across the group.`,
          }
        : {
            mode: 'overview',
            title: 'Professional context highlights',
            description:
              'Verified highlights from the approved profile sources, shown without a group or skill filter.',
          }

  const hasMappedUsages = filteredUsages.length > 0
  function selectGroup(groupId: string) {
    const firstSkillId = getFirstSkillIdForGroup(groupId, skills)
    startTransition(() => {
      setSelection({
        activeGroupId: groupId,
        activeSkillId: firstSkillId,
      })
    })
  }

  function selectSkill(skillId: string) {
    const skill = skills.find((candidate) => candidate.id === skillId)
    if (!skill) return

    startTransition(() => {
      setSelection({
        activeGroupId: skill.groupId,
        activeSkillId: skill.id,
      })
    })
  }

  function clearSkill() {
    if (!activeGroup) return

    startTransition(() => {
      setSelection((current) => ({
        activeGroupId: current.activeGroupId,
        activeSkillId: null,
      }))
    })
  }

  function resetOverview() {
    startTransition(() => {
      setSelection({
        activeGroupId: null,
        activeSkillId: null,
      })
    })
  }

  return {
    groups,
    skills,
    usages,
    activeGroup,
    activeSkill,
    groupSkills,
    filteredUsages,
    view,
    hasMappedUsages,
    selection,
    defaultGroupId,
    selectGroup,
    selectSkill,
    clearSkill,
    resetOverview,
  }
}
