import { CtaLink } from '../ui/CtaLink'
import type { Profile } from '../../types/content'

interface HeroSectionProps {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="grid gap-10 overflow-hidden rounded-card border border-border bg-surface p-8 shadow-card lg:grid-cols-[1.4fr_0.9fr] lg:p-10"
    >
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3 text-sm text-foreground-muted">
            <span className="rounded-tag border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em]">
              {profile.locationLabel}
            </span>
            <span className="rounded-tag border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em]">
              {profile.yearsLabel} of engineering experience
            </span>
            <span className="rounded-tag border border-border bg-surface-muted px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em]">
              Fluent English
            </span>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-accent">
              Senior full stack engineering
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-[4.6rem]">
              {profile.name}
            </h1>
            <p className="max-w-3xl text-2xl font-medium leading-tight text-foreground sm:text-3xl lg:text-[2.15rem]">
              {profile.headline}
            </p>
            <p className="max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">
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

      <aside className="rounded-card border border-border bg-surface-strong p-6">
        <div className="space-y-6">
          <div>
            <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent">
              Quick read
            </p>
            <p className="mt-4 text-base leading-7 text-foreground-muted">
              {profile.summary}
            </p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {profile.highlightMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-control border border-border bg-background p-4"
              >
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-foreground-dim">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-foreground">
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
