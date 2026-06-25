import type { Testimonial } from '../types/content'

const recommendationModules = import.meta.glob(
  '../../docs/profile/recommendations/*/recommendation.md',
  {
    eager: true,
    import: 'default',
    query: '?raw',
  }
) as Record<string, string>

const recommendationImageModules = import.meta.glob(
  '../../docs/profile/recommendations/*/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    import: 'default',
  }
) as Record<string, string>

function getDirectoryName(path: string) {
  const segments = path.split('/')
  return segments.at(-2) ?? path
}

function parseRecommendationMarkdown(id: string, markdown: string): Testimonial {
  const normalized = markdown.trim()
  const headingMatch = normalized.match(/^#\s+(.+?)\s+-\s+(\d{4}-\d{2}-\d{2})$/m)
  const bodyMatch = normalized.match(/##\s+Recommendation\s+([\s\S]+)$/m)

  const recommender = headingMatch?.[1]?.trim() ?? id
  const recommendationDate = headingMatch?.[2]?.trim() ?? ''
  const quote = bodyMatch?.[1]?.trim() ?? normalized
  const imageSrc = recommendationImageModules[
    Object.keys(recommendationImageModules).find((path) => getDirectoryName(path) === id) ?? ''
  ]

  return {
    id,
    recommender,
    recommendationDate,
    quote,
    imageSrc,
    sourceRefs: [
      `docs/profile/recommendations/${id}/recommendation.md`,
      imageSrc
        ? Object.keys(recommendationImageModules).find(
            (path) => getDirectoryName(path) === id
          ) ?? ''
        : '',
    ].filter(Boolean),
  }
}

export const testimonials: Testimonial[] = Object.entries(recommendationModules)
  .map(([path, markdown]) => parseRecommendationMarkdown(getDirectoryName(path), markdown))
  .sort((left, right) => {
    const leftDate = new Date(left.recommendationDate).getTime()
    const rightDate = new Date(right.recommendationDate).getTime()
    return rightDate - leftDate
  })
