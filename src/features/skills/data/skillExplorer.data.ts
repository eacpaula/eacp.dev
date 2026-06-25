import skillsExplorerSeedDataJson from '../../../../docs/skills-explorer.json'
import type {
  CompanyUsage,
  Skill,
  SkillGroup,
  SkillsExplorerData,
} from './skillExplorer.types'

interface UsageSeed {
  id: string
  name: string
  kind: CompanyUsage['kind']
  periodLabel?: string
  logoPath?: string
  websiteUrl?: string
  headline: string
  description: string
  relatedTechnologies: string[]
  sourceAliases: string[]
  sourceRefs: string[]
  priority: number
  isHighlight: boolean
}

interface SkillSeed {
  id: string
  label: string
  groupId: string
  sourceCategory: string
  yearsLabel: string
  order: number
  relatedSkillIds?: string[]
  sourceAliases: string[]
  sourceRefs: string[]
}

interface GroupSeed {
  id: string
  label: string
  description: string
  order: number
  sourceNotes: string[]
}

interface SkillsExplorerSeedData {
  usageSeeds: UsageSeed[]
  skillSeeds: SkillSeed[]
  groupSeeds: GroupSeed[]
  sourceNotes: string[]
}

const skillsExplorerSeedData =
  skillsExplorerSeedDataJson as SkillsExplorerSeedData

const companyLogoModules = import.meta.glob(
  '../../../../docs/assets/company-logos/*.{png,jpg,jpeg,svg,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>

function toAssetModuleKey(path: string) {
  return `../../../../${path.replace(/^\.?\//, '')}`
}

function toExperienceWeight(yearsLabel: string) {
  const normalized = yearsLabel.replace('+', '').trim()
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

function unique<T>(items: T[]) {
  return [...new Set(items)]
}

const usagePriorityById = new Map(
  skillsExplorerSeedData.usageSeeds.map((usage) => [usage.id, usage.priority] as const)
)

const usageIdByAlias = new Map<string, string>(
  skillsExplorerSeedData.usageSeeds.flatMap((usage) =>
    usage.sourceAliases.map((alias) => [alias, usage.id] as const)
  )
)

function compareByUsagePriority(a: string, b: string) {
  const left = usagePriorityById.get(a) ?? Number.MAX_SAFE_INTEGER
  const right = usagePriorityById.get(b) ?? Number.MAX_SAFE_INTEGER
  return left - right
}

const skillSeedsWithUsage = skillsExplorerSeedData.skillSeeds.map((skill) => {
  const usageIds = unique(
    skill.sourceAliases
      .map((alias) => usageIdByAlias.get(alias))
      .filter((usageId): usageId is string => Boolean(usageId))
  ).sort(compareByUsagePriority)

  const unmappedSourceAliases = unique(
    skill.sourceAliases.filter((alias) => !usageIdByAlias.has(alias))
  )

  return {
    ...skill,
    experienceWeight: toExperienceWeight(skill.yearsLabel),
    usageIds,
    unmappedSourceAliases,
  }
})

const usageSkillIds = new Map<string, string[]>()

for (const skill of skillSeedsWithUsage) {
  for (const usageId of skill.usageIds) {
    const current = usageSkillIds.get(usageId) ?? []
    current.push(skill.id)
    usageSkillIds.set(usageId, current)
  }
}

const skills: Skill[] = skillSeedsWithUsage.map((skill) => ({
  id: skill.id,
  label: skill.label,
  groupId: skill.groupId,
  sourceCategory: skill.sourceCategory,
  yearsLabel: skill.yearsLabel,
  experienceWeight: skill.experienceWeight,
  usageIds: skill.usageIds,
  sourceAliases: skill.sourceAliases,
  unmappedSourceAliases: skill.unmappedSourceAliases,
  relatedSkillIds: skill.relatedSkillIds,
  order: skill.order,
  sourceRefs: skill.sourceRefs,
}))

const groups: SkillGroup[] = skillsExplorerSeedData.groupSeeds.map((group) => {
  const groupSkills = skills
    .filter((skill) => skill.groupId === group.id)
    .sort((left, right) => left.order - right.order)

  return {
    id: group.id,
    label: group.label,
    description: group.description,
    order: group.order,
    skillIds: groupSkills.map((skill) => skill.id),
    totalExperienceWeight: groupSkills.reduce(
      (total, skill) => total + skill.experienceWeight,
      0
    ),
    skillCount: groupSkills.length,
    sourceNotes: [...group.sourceNotes],
  }
})

const usages: CompanyUsage[] = skillsExplorerSeedData.usageSeeds.map((usage) => ({
  id: usage.id,
  name: usage.name,
  kind: usage.kind,
  periodLabel: usage.periodLabel,
  logoSrc: usage.logoPath
    ? companyLogoModules[toAssetModuleKey(usage.logoPath)]
    : undefined,
  websiteUrl: usage.websiteUrl,
  headline: usage.headline,
  description: usage.description,
  relatedSkillIds: unique(usageSkillIds.get(usage.id) ?? []).sort((left, right) => {
    const leftSkill = skills.find((skill) => skill.id === left)
    const rightSkill = skills.find((skill) => skill.id === right)

    if (!leftSkill || !rightSkill) return 0
    if (leftSkill.groupId === rightSkill.groupId) return leftSkill.order - rightSkill.order

    const leftGroup = groups.find((group) => group.id === leftSkill.groupId)
    const rightGroup = groups.find((group) => group.id === rightSkill.groupId)

    return (leftGroup?.order ?? 0) - (rightGroup?.order ?? 0)
  }),
  relatedTechnologies: usage.relatedTechnologies,
  sourceAliases: usage.sourceAliases,
  sourceRefs: usage.sourceRefs,
  priority: usage.priority,
  isHighlight: usage.isHighlight,
}))

export const skillsExplorerData: SkillsExplorerData = {
  groups,
  skills,
  usages,
  sourceNotes: [...skillsExplorerSeedData.sourceNotes],
}
