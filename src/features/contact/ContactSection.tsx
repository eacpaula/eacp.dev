import { useRef, useState } from 'react'
import heroPortrait from '../../assets/hero-editorial-portrait-no-background.png'
import { openCalendlyPopup } from '../../lib/integrations/calendly'
import type { ContactSectionContent } from '../../types/content'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { ContactActionButtons } from './components/ContactActionButtons'
import { ContactDirectLinks } from './components/ContactDirectLinks'
import { ResumeViewerModal } from './components/ResumeViewerModal'

interface ContactSectionProps {
  content: ContactSectionContent
}

export function ContactSection({ content }: ContactSectionProps) {
  const [isScheduling, setIsScheduling] = useState(false)
  const [schedulingFeedback, setSchedulingFeedback] = useState<string | null>(
    null,
  )
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumeTriggerRef = useRef<HTMLButtonElement>(null)

  const resumeAction = content.actions.find((action) => action.kind === 'resume')
  const orderedContacts = [...content.directContacts].sort((a, b) =>
    a.placement.localeCompare(b.placement),
  )

  async function handleSchedulingActivation(url: string) {
    if (isScheduling) {
      return
    }

    setIsScheduling(true)
    setSchedulingFeedback(null)

    const result = await openCalendlyPopup(url)

    if (result.status !== 'opened') {
      setSchedulingFeedback(result.message)
    }

    setIsScheduling(false)
  }

  function handleResumeOpen() {
    setIsResumeOpen(true)
    setSchedulingFeedback(null)
  }

  return (
    <section id="contact" className="space-y-8 sm:space-y-10">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.heading}
      />

      <div className="space-y-8 px-2 sm:px-4 lg:px-0">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)_minmax(0,1fr)]">
          <ContactDirectLinks contacts={orderedContacts.filter((item) => item.placement === 'left')} />

          <div className="mx-auto w-full max-w-[20rem]">
            <img
              src={heroPortrait}
              alt={content.portraitAlt}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>

          <ContactDirectLinks contacts={orderedContacts.filter((item) => item.placement === 'right')} />
        </div>

        <ContactActionButtons
          actions={content.actions}
          isScheduling={isScheduling}
          schedulingFeedback={schedulingFeedback}
          onSchedule={handleSchedulingActivation}
          onResume={handleResumeOpen}
          resumeButtonRef={resumeTriggerRef}
        />
      </div>

      {resumeAction ? (
        <ResumeViewerModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          resumeHref={resumeAction.href}
          returnFocusRef={resumeTriggerRef}
        />
      ) : null}
    </section>
  )
}
