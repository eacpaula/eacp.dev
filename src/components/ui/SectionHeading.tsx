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
      <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-accent">
        {eyebrow}
      </p>
      <div className="space-y-4">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.05] text-foreground sm:text-4xl lg:text-[2.8rem]">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-foreground-muted sm:text-[1.05rem]">
          {description}
        </p>
      </div>
    </div>
  )
}
