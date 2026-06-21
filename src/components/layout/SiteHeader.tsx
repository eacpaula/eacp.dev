import type { NavItem, PrimaryLink } from '../../types/content'

interface SiteHeaderProps {
  navItems: NavItem[]
  resumeLink: PrimaryLink
}

export function SiteHeader({ navItems, resumeLink }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface-overlay/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[80rem] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#hero"
          className="sketch-badge sketch-badge-muted text-[0.68rem] transition hover:border-accent hover:text-accent-muted"
        >
          eacp.dev
        </a>

        <nav
          aria-label="Primary"
          className="sketch-shell flex w-full flex-nowrap items-center gap-2 overflow-x-auto rounded-control p-1.5 text-sm md:w-auto"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="sketch-nav-link shrink-0 rounded-control px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={resumeLink.href}
          target="_blank"
          rel="noreferrer"
          className="sketch-button-secondary inline-flex items-center justify-center rounded-control px-4 py-2 text-sm font-semibold tracking-[0.03em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {resumeLink.label}
        </a>
      </div>
    </header>
  )
}
