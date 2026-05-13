import type { NavItem, PrimaryLink } from '../../types/content'

interface SiteHeaderProps {
  navItems: NavItem[]
  resumeLink: PrimaryLink
}

export function SiteHeader({ navItems, resumeLink }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface-overlay)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#hero"
          className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-strong)] transition hover:text-[var(--accent-strong)]"
        >
          eacp.dev
        </a>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[var(--text-muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={resumeLink.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]"
        >
          {resumeLink.label}
        </a>
      </div>
    </header>
  )
}
