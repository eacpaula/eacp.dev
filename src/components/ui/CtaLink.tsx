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
          ? 'sketch-button-primary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
          : 'sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      }
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {link.label}
    </a>
  )
}
