interface SiteUrlOptions {
  basePath?: string
  canonicalOrigin: string
}

function ensureTrailingSlash(value: string) {
  return value.endsWith('/') ? value : `${value}/`
}

export function normalizeBasePath(basePath = '/') {
  const trimmedBasePath = basePath.trim()

  if (!trimmedBasePath || trimmedBasePath === '/') {
    return '/'
  }

  return `/${trimmedBasePath.replace(/^\/+|\/+$/g, '')}/`
}

export function buildSiteUrl(pathname: string, options: SiteUrlOptions) {
  const siteBaseUrl = new URL(
    normalizeBasePath(options.basePath).replace(/^\//, ''),
    ensureTrailingSlash(options.canonicalOrigin),
  )

  return new URL(pathname.replace(/^\/+/, ''), siteBaseUrl).toString()
}
