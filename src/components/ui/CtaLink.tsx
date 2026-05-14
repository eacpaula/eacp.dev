import type { PrimaryLink } from '../../types/content'

interface CtaLinkProps {
  link: PrimaryLink
}

export function CtaLink({ link }: CtaLinkProps) {
  const isExternal = link.kind === 'external' || link.kind === 'asset'

  return (
    <a
      href={link.href}
      className={
        link.prominence === 'primary'
          ? 'inline-flex min-h-11 items-center justify-center rounded-2xl border border-[var(--accent-strong)] bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-[var(--accent-ink)] shadow-[0_18px_44px_rgba(20,90,242,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]'
          : 'inline-flex min-h-11 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--surface-soft)] hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]'
      }
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {link.label}
    </a>
  )
}
