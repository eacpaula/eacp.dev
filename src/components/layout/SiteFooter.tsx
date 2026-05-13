interface SiteFooterProps {
  name: string
}

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-[var(--text-muted)] sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>{name}</p>
        <p>Static-first portfolio MVP with future room for case studies and technical writing.</p>
      </div>
    </footer>
  )
}
