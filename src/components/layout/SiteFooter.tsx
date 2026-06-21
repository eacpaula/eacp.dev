interface SiteFooterProps {
  name: string
}

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-4 px-4 py-10 text-sm text-foreground-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-foreground">{name}</p>
          <p className="sketch-divider-label mt-2 font-mono text-[0.68rem] uppercase tracking-[0.24em]">
            Sketch editorial system
          </p>
        </div>
        <p>Static-first portfolio with room for future technical writing.</p>
      </div>
    </footer>
  )
}
