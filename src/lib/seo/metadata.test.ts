import { describe, expect, it } from 'vitest'
import { buildMetadataTags, replaceManagedMetadataBlock } from './metadataTags'
import type { SiteMetadata } from '../../types/content'

const metadata: SiteMetadata = {
  title: 'Spec Test | Example',
  description: 'Description with "quotes" & details.',
  canonicalUrl: 'https://eacp.dev/blog/spec-test',
  socialImage: 'https://eacp.dev/blog/spec-test-cover.png',
  socialImageAlt: 'Cover alt text',
  openGraphType: 'article',
  twitterCard: 'summary_large_image',
  navItems: [],
}

describe('buildMetadataTags', () => {
  it('renders crawler-facing og and twitter tags from metadata', () => {
    const html = buildMetadataTags(metadata)

    expect(html).toContain('<title>Spec Test | Example</title>')
    expect(html).toContain(
      '<meta property="og:type" content="article" />',
    )
    expect(html).toContain(
      '<meta property="og:url" content="https://eacp.dev/blog/spec-test" />',
    )
    expect(html).toContain(
      '<meta name="twitter:image" content="https://eacp.dev/blog/spec-test-cover.png" />',
    )
    expect(html).toContain('&quot;quotes&quot; &amp; details.')
  })
})

describe('replaceManagedMetadataBlock', () => {
  it('replaces the managed metadata section without touching the app shell', () => {
    const sourceHtml = `<!doctype html>
<html lang="en">
  <head>
    <!--app-metadata:start-->
    <title>Old Title</title>
    <!--app-metadata:end-->
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

    const replacedHtml = replaceManagedMetadataBlock(sourceHtml, metadata)

    expect(replacedHtml).toContain(
      '<meta property="og:title" content="Spec Test | Example" />',
    )
    expect(replacedHtml).toContain('<div id="root"></div>')
    expect(replacedHtml).not.toContain('<title>Old Title</title>')
  })
})
