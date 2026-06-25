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
