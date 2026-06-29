export interface WritingCoverImage {
  src: string
  alt: string
  socialSrc?: string
}

export interface WritingComparisonItem {
  label: string
  summary: string
  strengths?: string[]
  cautions?: string[]
}

export type WritingRoleOrientation =
  | 'software-engineering'
  | 'ml-data'
  | 'product'
  | 'automation'
  | 'mixed'

export interface WritingRoleProfile {
  id: string
  name: string
  shortDescription: string
  typicalResponsibilities: string[]
  commonSkills: string[]
  confusionPoints: string[]
  proximity: WritingRoleOrientation
  practiceNote?: string
}

export interface WritingEvidenceEntry {
  id: string
  imagePath?: string
  altText?: string
  caption: string
  sourceLabel: string
  note?: string
  isPlaceholder: boolean
}

export type WritingRoleGraphNodeType =
  | 'role'
  | 'skill'
  | 'responsibility'
  | 'category'

export interface WritingRoleGraphNode {
  id: string
  label: string
  type: WritingRoleGraphNodeType
  description?: string
  laneOrder: number
}

export interface WritingRoleGraphLink {
  source: string
  target: string
  strength?: number
  note?: string
}

export interface WritingRoleGraph {
  intro?: string
  defaultNodeId: string
  nodes: WritingRoleGraphNode[]
  links: WritingRoleGraphLink[]
}

export interface WritingFinalReflection {
  heading: string
  paragraphs: string[]
  callout?: string
}

export interface WritingSectionBlock {
  id: string
  heading: string
  tocLabel?: string
  includeInToc?: boolean
  paragraphs?: string[]
  comparisonItems?: WritingComparisonItem[]
  pros?: string[]
  cons?: string[]
  callout?: string
  roleProfileIds?: string[]
  evidenceIds?: string[]
  renderRoleGraph?: boolean
}

export interface WritingShareMetadata {
  title?: string
  text?: string
}

export interface WritingPost {
  slug: string
  title: string
  shortDescription: string
  summary: string
  publishDate: string
  tags: string[]
  coverImage: WritingCoverImage
  sections: WritingSectionBlock[]
  roleProfiles?: WritingRoleProfile[]
  roleEvidence?: WritingEvidenceEntry[]
  roleGraph?: WritingRoleGraph
  finalReflection?: WritingFinalReflection
  tableOfContentsTitle?: string
  keyTakeaways?: string[]
  shareMetadata?: WritingShareMetadata
}

export interface WritingPostPreview {
  slug: string
  title: string
  shortDescription: string
  publishDate: string
  tags: string[]
  coverImage: WritingCoverImage
}

export interface WritingViewState {
  activePostSlug: string | null
  mode: 'list' | 'detail' | 'not-found'
}
