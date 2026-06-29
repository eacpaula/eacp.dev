function parsePublishDateParts(publishDate: string) {
  const [year, month, day] = publishDate.split('-').map(Number)

  return { year, month, day }
}

export function formatPublishDate(
  publishDate: string,
  options: Intl.DateTimeFormatOptions,
) {
  const { year, month, day } = parsePublishDateParts(publishDate)

  return new Intl.DateTimeFormat('en', {
    ...options,
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

export function comparePublishDateDescending(left: string, right: string) {
  return right.localeCompare(left)
}
