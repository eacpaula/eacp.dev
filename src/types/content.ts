export type LinkKind = 'external' | 'email' | 'asset' | 'anchor'

export interface NavItem {
  label: string
  href: string
}

export interface PrimaryLink {
  label: string
  href: string
  kind: LinkKind
  prominence: 'primary' | 'secondary'
}

export interface AchievementEmblem {
  id: string
  label: string
  metric: string
  description: string
}

export interface SiteMetadata {
  title: string
  description: string
  canonicalUrl: string
  socialImage?: string
  navItems: NavItem[]
}

export interface Profile {
  name: string
  role: string
  subheadline: string
  summary: string
  availabilityNote: string
  achievementEmblems: AchievementEmblem[]
  primaryLinks: PrimaryLink[]
}

export interface Achievement {
  id: string
  title: string
  proofLabel: string
  proofMetric: string
  proofQualifier: string
  detailHref?: string
  context: string
  contribution: string
  impact: string
  technologies: string[]
  sourceRefs: string[]
  featured: boolean
}

export interface SkillEntry {
  name: string
  yearsLabel?: string
  emphasis: 'core' | 'supporting' | 'secondary'
  sourceRefs: string[]
}

export interface SkillGroup {
  category: string
  priorityNote?: string
  skills: SkillEntry[]
}

export interface ExperienceItem {
  id: string
  organization: string
  context: string
  role: string
  period: string
  contributions: string[]
  technologies: string[]
  impact: string
}

export interface DirectContactDetail {
  label: string
  value: string
  href: string
  kind: 'email' | 'phone'
  placement: 'left' | 'right'
}

export interface ContactAction {
  label: string
  href: string
  kind: 'profile' | 'scheduling' | 'resume'
  opensInNewContext?: boolean
}

export interface ContactSectionContent {
  eyebrow: string
  heading: string
  directContacts: DirectContactDetail[]
  actions: ContactAction[]
  portraitAlt: string
}

export interface Testimonial {
  id: string
  recommender: string
  recommendationDate: string
  quote: string
  imageSrc?: string
  sourceRefs: string[]
}
