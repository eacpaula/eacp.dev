import { useState } from 'react'
import type {
  WritingRoleOrientation,
  WritingRoleProfile,
} from '../data/writing.types'

interface WritingRoleProfilesProps {
  roleProfiles: WritingRoleProfile[]
}

const orientationLabelByValue: Record<WritingRoleOrientation, string> = {
  'software-engineering': 'Software Engineering',
  'ml-data': 'ML / Data',
  product: 'Product',
  automation: 'Automation',
  mixed: 'Mixed',
}

type RoleProfilePanelId =
  | 'confusion'
  | 'responsibilities'
  | 'skills'

interface RoleProfileAccordionItemProps {
  cardId: string
  id: RoleProfilePanelId
  title: string
  items: string[]
  isOpen: boolean
  onToggle: (id: RoleProfilePanelId) => void
  tone: 'accent' | 'muted'
}

function RoleProfileAccordionItem({
  cardId,
  id,
  title,
  items,
  isOpen,
  onToggle,
  tone,
}: RoleProfileAccordionItemProps) {
  const triggerId = `${cardId}-${id}-trigger`
  const panelId = `${cardId}-${id}-panel`

  return (
    <div className="writing-role-accordion-item rounded-card">
      <button
        type="button"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(id)}
        className="writing-role-accordion-trigger"
      >
        <span
          className={
            tone === 'accent'
              ? 'font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-muted'
              : 'font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim'
          }
        >
          {title}
        </span>
        <span
          aria-hidden="true"
          className={isOpen ? 'writing-role-accordion-icon is-open' : 'writing-role-accordion-icon'}
        >
          +
        </span>
      </button>

      {isOpen ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="writing-role-accordion-panel"
        >
          <ul className="space-y-2 text-sm leading-7 text-foreground-muted">
            {items.map((item) => (
              <li key={item} className="writing-list-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

function WritingRoleProfileCard({ roleProfile }: { roleProfile: WritingRoleProfile }) {
  const [openPanel, setOpenPanel] = useState<RoleProfilePanelId | null>('confusion')

  function handleToggle(panelId: RoleProfilePanelId) {
    setOpenPanel((currentPanel) => (currentPanel === panelId ? null : panelId))
  }

  return (
    <article className="writing-role-card sketch-surface-muted rounded-card p-4 sm:p-5">
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="sketch-badge sketch-badge-accent text-[0.6rem]">
              Role
            </span>
            <span className="sketch-badge sketch-badge-muted text-[0.6rem]">
              {orientationLabelByValue[roleProfile.proximity]}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {roleProfile.name}
            </h3>
            <p className="text-sm leading-7 text-foreground-muted">
              {roleProfile.shortDescription}
            </p>
            {roleProfile.practiceNote ? (
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground-dim">
                {roleProfile.practiceNote}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-3">
          <RoleProfileAccordionItem
            cardId={roleProfile.id}
            id="confusion"
            title="Where confusion happens"
            items={roleProfile.confusionPoints}
            isOpen={openPanel === 'confusion'}
            onToggle={handleToggle}
            tone="muted"
          />
          <RoleProfileAccordionItem
            cardId={roleProfile.id}
            id="responsibilities"
            title="Typical responsibilities"
            items={roleProfile.typicalResponsibilities}
            isOpen={openPanel === 'responsibilities'}
            onToggle={handleToggle}
            tone="accent"
          />
          <RoleProfileAccordionItem
            cardId={roleProfile.id}
            id="skills"
            title="Common skills"
            items={roleProfile.commonSkills}
            isOpen={openPanel === 'skills'}
            onToggle={handleToggle}
            tone="accent"
          />
        </div>
      </div>
    </article>
  )
}

export function WritingRoleProfiles({ roleProfiles }: WritingRoleProfilesProps) {
  if (!roleProfiles.length) {
    return null
  }

  return (
    <div className="writing-role-profiles-grid grid gap-4">
      {roleProfiles.map((roleProfile) => (
        <WritingRoleProfileCard key={roleProfile.id} roleProfile={roleProfile} />
      ))}
    </div>
  )
}
