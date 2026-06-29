import { describe, expect, it } from 'vitest'
import { comparePublishDateDescending, formatPublishDate } from './publishDate'

describe('publishDate utilities', () => {
  it('formats ISO publish dates without timezone drift', () => {
    expect(
      formatPublishDate('2026-06-29', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    ).toBe('June 29, 2026')

    expect(
      formatPublishDate('2026-06-29', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    ).toBe('Jun 29, 2026')
  })

  it('sorts ISO publish dates in descending order', () => {
    const dates = ['2026-06-25', '2026-06-29', '2026-06-01']

    expect([...dates].sort(comparePublishDateDescending)).toEqual([
      '2026-06-29',
      '2026-06-25',
      '2026-06-01',
    ])
  })
})
