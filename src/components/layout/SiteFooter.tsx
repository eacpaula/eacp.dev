import { useEffect, useRef, useState, type ReactNode } from 'react'
import { contactSectionContent } from '../../content/contact'

interface SiteFooterProps {
  name: string
}

export function SiteFooter({ name }: SiteFooterProps) {
  const footerRef = useRef<HTMLElement>(null)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)

  const linkedInAction = contactSectionContent.actions.find(
    (action) => action.label === 'LinkedIn',
  )
  const githubAction = contactSectionContent.actions.find(
    (action) => action.label === 'GitHub',
  )
  const emailContact = contactSectionContent.directContacts.find(
    (contact) => contact.kind === 'email',
  )
  const phoneContact = contactSectionContent.directContacts.find(
    (contact) => contact.kind === 'phone',
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !footerRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBackToTopVisible(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    observer.observe(footerRef.current)

    return () => observer.disconnect()
  }, [])

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-surface-overlay text-foreground shadow-card backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          isBackToTopVisible
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="m6 11 6-6 6 6" />
        </svg>
      </button>

      <footer ref={footerRef} className="border-t border-border bg-surface">
        <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-6 px-4 py-10 text-sm text-foreground-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-medium text-foreground">{name}</p>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground-dim">
              @{new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            {linkedInAction ? (
              <FooterIconLink
                href={linkedInAction.href}
                label="LinkedIn"
                external={linkedInAction.opensInNewContext}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.96c0 1.08.87 1.95 1.95 1.95s1.95-.87 1.95-1.95A1.96 1.96 0 0 0 5.25 3Zm5.03 5.5H13.5v1.57h.05c.45-.85 1.56-1.75 3.22-1.75 3.45 0 4.08 2.27 4.08 5.22V20h-3.38v-5.72c0-1.37-.03-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02V20h-3.38V8.5Z" />
                </svg>
              </FooterIconLink>
            ) : null}

            {githubAction ? (
              <FooterIconLink
                href={githubAction.href}
                label="GitHub"
                external={githubAction.opensInNewContext}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.72 0 0 .85-.28 2.78 1.05A9.4 9.4 0 0 1 12 7.8c.85 0 1.71.12 2.51.35 1.92-1.33 2.77-1.05 2.77-1.05.55 1.42.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.74 0 3.95-2.33 4.82-4.56 5.08.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
                </svg>
              </FooterIconLink>
            ) : null}

            {emailContact ? (
              <FooterIconLink href={emailContact.href} label="Email">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </FooterIconLink>
            ) : null}

            {phoneContact ? (
              <FooterIconLink href={phoneContact.href} label="Phone">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v2a1.96 1.96 0 0 1-2.14 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.16 3.14 1.96 1.96 0 0 1 4.11 1h2a1.96 1.96 0 0 1 1.8 1.34l.64 2.57a1.96 1.96 0 0 1-.45 1.86L6.91 8a16 16 0 0 0 6 6l1.23-1.19a1.96 1.96 0 0 1 1.86-.45l2.57.64A1.96 1.96 0 0 1 22 16.92Z" />
                </svg>
              </FooterIconLink>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  )
}

interface FooterIconLinkProps {
  children: ReactNode
  external?: boolean
  href: string
  label: string
}

function FooterIconLink({
  children,
  external = false,
  href,
  label,
}: FooterIconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-border bg-surface-muted text-foreground-muted transition hover:-translate-y-px hover:border-accent hover:text-accent-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </a>
  )
}
