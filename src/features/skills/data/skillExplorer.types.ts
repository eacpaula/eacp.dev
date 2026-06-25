export interface SkillGroup {
  id: string
  label: string
  description?: string
  order: number
  skillIds: string[]
  totalExperienceWeight: number
  skillCount: number
  sourceNotes?: string[]
}

export interface Skill {
  id: string
  label: string
  groupId: string
  sourceCategory: string
  yearsLabel: string
  experienceWeight: number
  usageIds: string[]
  sourceAliases: string[]
  unmappedSourceAliases: string[]
  relatedSkillIds?: string[]
  order: number
  sourceRefs: string[]
}

export interface CompanyUsage {
  id: string
  name: string
  kind: 'company' | 'client' | 'project' | 'freelance-group'
  periodLabel?: string
  logoSrc?: string
  websiteUrl?: string
  headline: string
  description: string
  relatedSkillIds: string[]
  relatedTechnologies: string[]
  sourceAliases: string[]
  sourceRefs: string[]
  priority: number
  isHighlight: boolean
}

export interface SkillSelectionState {
  activeGroupId: string | null
  activeSkillId: string | null
}

export interface SkillsExplorerData {
  groups: SkillGroup[]
  skills: Skill[]
  usages: CompanyUsage[]
  sourceNotes: string[]
}

export interface SkillUsageView {
  mode: 'overview' | 'group' | 'skill'
  title: string
  description: string
}
