interface SiteFooterProps {
  name: string
}

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-4 px-4 py-10 text-sm text-foreground-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-foreground">{name}</p>
        <p>Static-first portfolio with room for future case studies and technical writing.</p>
      </div>
    </footer>
  )
}
