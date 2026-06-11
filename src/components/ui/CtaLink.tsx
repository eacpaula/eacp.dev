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
          ? 'inline-flex min-h-11 items-center justify-center rounded-control border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-ink shadow-press transition hover:-translate-y-px hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
          : 'inline-flex min-h-11 items-center justify-center rounded-control border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-px hover:border-accent hover:bg-surface-interactive hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      }
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {link.label}
    </a>
  )
}
