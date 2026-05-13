import type { SiteMetadata } from '../../types/content'

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

  if (metadata.socialImage) {
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: metadata.socialImage,
    })
  }

  upsertLink('link[rel="canonical"]', {
    rel: 'canonical',
    href: metadata.canonicalUrl,
  })
}
