import { useRef, useState } from 'react'
import { ResumeViewerModal } from '../../features/contact/components/ResumeViewerModal'
import type { PrimaryLink } from '../../types/content'

interface CtaLinkProps {
  link: PrimaryLink
}

export function CtaLink({ link }: CtaLinkProps) {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumeTriggerRef = useRef<HTMLButtonElement>(null)
  const isExternal = link.kind === 'external'
  const buttonClassName =
    link.prominence === 'primary'
      ? 'sketch-button-primary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      : 'sketch-button-secondary inline-flex min-h-11 items-center justify-center rounded-control px-5 py-3 text-sm font-semibold tracking-[0.03em] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

  if (link.kind === 'asset') {
    return (
      <>
        <button
          ref={resumeTriggerRef}
          type="button"
          onClick={() => setIsResumeOpen(true)}
          aria-label="Open resume viewer"
          className={buttonClassName}
        >
          {link.label}
        </button>

        <ResumeViewerModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          resumeHref={link.href}
          returnFocusRef={resumeTriggerRef}
        />
      </>
    )
  }

  return (
    <a
      href={link.href}
      className={buttonClassName}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {link.label}
    </a>
  )
}
