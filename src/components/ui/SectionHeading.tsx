interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <div className="flex items-center gap-4">
        <p className="sketch-badge sketch-badge-accent text-[0.64rem]">
          {eyebrow}
        </p>
        <span className="sketch-rule h-px flex-1" aria-hidden="true" />
      </div>
      <div className="space-y-4">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.06] text-foreground sm:text-4xl lg:text-[2.65rem]">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-foreground-muted sm:text-[1.05rem]">
          {description}
        </p>
      </div>
    </div>
  )
}
