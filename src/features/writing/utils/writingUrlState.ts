export function getBlogListPath() {
  return '/#blog'
}

export function getBlogPostPath(slug: string) {
  return `/blog/${encodeURIComponent(slug)}`
}
