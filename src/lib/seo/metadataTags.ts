import type { SiteMetadata } from '../../types/content'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function getMetadataAttributes(metadata: SiteMetadata) {
  const openGraphType = metadata.openGraphType ?? 'website'
  const twitterCard = metadata.twitterCard ?? 'summary_large_image'

  return {
    openGraphType,
    twitterCard,
  }
}

export function buildMetadataTags(metadata: SiteMetadata) {
  const { openGraphType, twitterCard } = getMetadataAttributes(metadata)
  const lines = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeHtml(openGraphType)}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(metadata.canonicalUrl)}" />`,
    `<meta name="twitter:card" content="${escapeHtml(twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
  ]

  if (metadata.socialImage) {
    lines.push(
      `<meta property="og:image" content="${escapeHtml(metadata.socialImage)}" />`,
    )
    lines.push(
      `<meta name="twitter:image" content="${escapeHtml(metadata.socialImage)}" />`,
    )
  }

  if (metadata.socialImageAlt) {
    lines.push(
      `<meta property="og:image:alt" content="${escapeHtml(metadata.socialImageAlt)}" />`,
    )
    lines.push(
      `<meta name="twitter:image:alt" content="${escapeHtml(metadata.socialImageAlt)}" />`,
    )
  }

  return lines.map((line) => `    ${line}`).join('\n')
}

export function replaceManagedMetadataBlock(
  html: string,
  metadata: SiteMetadata,
) {
  const managedMetadataPattern =
    /<!--app-metadata:start-->[\s\S]*?<!--app-metadata:end-->/

  return html.replace(
    managedMetadataPattern,
    `<!--app-metadata:start-->\n${buildMetadataTags(metadata)}\n    <!--app-metadata:end-->`,
  )
}
