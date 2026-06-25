import type { DirectContactDetail } from '../../../types/content'

interface ContactDirectLinksProps {
  contacts: DirectContactDetail[]
}

export function ContactDirectLinks({ contacts }: ContactDirectLinksProps) {
  return (
    <>
      {contacts.map((contact) => {
        const alignmentClass =
          contact.placement === 'left'
            ? 'lg:items-end'
            : 'lg:items-start lg:text-left'

        return (
          <div
            key={`${contact.kind}-${contact.value}`}
            className={`flex flex-col items-center gap-3 ${alignmentClass}`}
          >
            <a
              href={contact.href}
              className="inline-flex max-w-full items-center gap-3 break-words font-display text-xl font-semibold leading-tight text-foreground transition hover:text-accent-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-2xl"
            >
              {contact.kind === 'email' ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v2a1.96 1.96 0 0 1-2.14 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.16 3.14 1.96 1.96 0 0 1 4.11 1h2a1.96 1.96 0 0 1 1.8 1.34l.64 2.57a1.96 1.96 0 0 1-.45 1.86L6.91 8a16 16 0 0 0 6 6l1.23-1.19a1.96 1.96 0 0 1 1.86-.45l2.57.64A1.96 1.96 0 0 1 22 16.92Z" />
                </svg>
              )}
              {contact.value}
            </a>
          </div>
        )
      })}
    </>
  )
}
