import { CtaLink } from '../ui/CtaLink'
import type { Profile } from '../../types/content'

interface HeroSectionProps {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="grid gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[1.5fr_1fr] lg:p-10"
    >
      <div className="space-y-8">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
            <span className="rounded-full border border-[var(--border-strong)] px-3 py-1">
              {profile.locationLabel}
            </span>
            <span className="rounded-full border border-[var(--border-strong)] px-3 py-1">
              {profile.yearsLabel} of engineering experience
            </span>
            <span className="rounded-full border border-[var(--border-strong)] px-3 py-1">
              Fluent English
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Senior Full Stack Positioning
            </p>
            <h1 className="max-w-4xl font-[var(--font-display)] text-5xl leading-[1.02] text-[var(--text-strong)] sm:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-3xl text-2xl leading-tight text-[var(--text-strong)] sm:text-3xl">
              {profile.headline}
            </p>
            <p className="max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
              {profile.subheadline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {profile.primaryLinks.map((link) => (
            <CtaLink key={link.label} link={link} />
          ))}
        </div>
      </div>

      <aside className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Quick read
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
              {profile.summary}
            </p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {profile.highlightMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  {item.label}
                </dt>
                <dd className="mt-2 font-[var(--font-display)] text-3xl text-[var(--text-strong)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </section>
  )
}
