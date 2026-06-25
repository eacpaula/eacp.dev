import { CtaLink } from '../ui/CtaLink'
import { TiltCard } from '../ui/TiltCard'
import type { Profile } from '../../types/content'
import heroPortrait from '../../assets/hero-editorial-portrait.png'

interface HeroSectionProps {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  const emblemList = profile.achievementEmblems.slice(0, 6)

  return (
    <section
      id="hero"
      className="sketch-shell overflow-hidden rounded-[1.5rem]"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <TiltCard maxTilt={6}>
            <div className="sketch-surface rounded-[1.25rem] p-2">
              <div className="sketch-surface-strong overflow-hidden rounded-[1rem]">
                <img
                  src={heroPortrait}
                  alt="Illustrated portrait of Evandro Antônio da Costa de Paula wearing a dark hoodie with gold achievement emblems representing modernization, reusable systems, quality, governance, and performance."
                  className="h-full max-h-[20rem] w-full object-cover object-top sm:max-h-[26rem] lg:max-h-none"
                />
              </div>
            </div>
          </TiltCard>

          <div className="mt-4 hidden gap-3 lg:grid lg:grid-cols-2">
            {emblemList.map((emblem) => (
              <TiltCard key={emblem.id} maxTilt={8}>
                <article
                  className="sketch-surface rounded-[0.95rem] p-3"
                >
                  <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
                    {emblem.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {emblem.metric}
                  </p>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="sketch-hero-pane flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="sketch-divider-label font-mono text-[0.7rem] font-semibold uppercase tracking-[0.34em]">
                Engineering portfolio
              </p>
              <div className="space-y-3">
                <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-[3.8rem]">
                  {profile.name}
                </h1>
                <p className="font-mono text-[0.76rem] font-semibold uppercase tracking-[0.28em] text-foreground-muted">
                  {profile.role}
                </p>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-foreground sm:text-[1.28rem]">
                {profile.subheadline}
              </p>
              <div className="max-w-2xl">
                <p className="text-base leading-7 text-foreground-muted sm:text-lg">
                  {profile.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.primaryLinks.map((link) => (
                <CtaLink key={link.label} link={link} />
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
              {emblemList.map((emblem) => (
                <TiltCard key={emblem.id} maxTilt={8}>
                  <article
                    className="sketch-surface rounded-[0.95rem] p-3"
                  >
                    <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
                      {emblem.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {emblem.metric}
                    </p>
                  </article>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
