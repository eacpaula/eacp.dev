import type { SiteMetadata } from '../../types/content'
import { getMetadataAttributes } from './metadataTags'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let node = document.head.querySelector<HTMLMetaElement>(selector)

  if (!node) {
    node = document.createElement('meta')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node?.setAttribute(key, value)
  })
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let node = document.head.querySelector<HTMLLinkElement>(selector)

  if (!node) {
    node = document.createElement('link')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node?.setAttribute(key, value)
  })
}

export function applyDocumentMetadata(metadata: SiteMetadata) {
  const { openGraphType, twitterCard } = getMetadataAttributes(metadata)

  document.title = metadata.title
  document.documentElement.lang = 'en'

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: metadata.description,
  })

  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: metadata.title,
  })

  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: metadata.description,
  })

  upsertMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: openGraphType,
  })

  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: metadata.canonicalUrl,
  })

  if (metadata.socialImage) {
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: metadata.socialImage,
    })
  }

  if (metadata.socialImageAlt) {
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: metadata.socialImageAlt,
    })
  }

  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: twitterCard,
  })

  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: metadata.title,
  })

  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: metadata.description,
  })

  if (metadata.socialImage) {
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: metadata.socialImage,
    })
  }

  if (metadata.socialImageAlt) {
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: metadata.socialImageAlt,
    })
  }

  upsertLink('link[rel="canonical"]', {
    rel: 'canonical',
    href: metadata.canonicalUrl,
  })
}
