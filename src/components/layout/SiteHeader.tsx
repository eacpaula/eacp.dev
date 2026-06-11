import type { NavItem, PrimaryLink } from '../../types/content'

interface SiteHeaderProps {
  navItems: NavItem[]
  resumeLink: PrimaryLink
}

export function SiteHeader({ navItems, resumeLink }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface-overlay backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[80rem] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#hero"
          className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-foreground transition hover:text-accent"
        >
          eacp.dev
        </a>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-2 rounded-control border border-border bg-surface-muted p-1.5 text-sm shadow-card"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-control px-3 py-2 text-foreground-muted transition hover:bg-surface-interactive hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={resumeLink.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-control border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-surface-interactive hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {resumeLink.label}
        </a>
      </div>
    </header>
  )
}
