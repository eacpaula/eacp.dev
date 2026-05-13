import { useEffect } from 'react'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { BlogPreviewSection } from '../components/sections/BlogPreviewSection'
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection'
import { ContactSection } from '../components/sections/ContactSection'
import { EngineeringImpactSection } from '../components/sections/EngineeringImpactSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProfessionalSummarySection } from '../components/sections/ProfessionalSummarySection'
import { SkillsSection } from '../components/sections/SkillsSection'
import {
  achievements,
  blogTopicPreviews,
  caseStudyPreviews,
  contactMethods,
  experienceItems,
  profile,
  siteMetadata,
  skillGroups,
} from '../lib/content'
import { applyDocumentMetadata } from '../lib/seo/metadata'

export function AppShell() {
  useEffect(() => {
    applyDocumentMetadata(siteMetadata)
  }, [])

  const featuredAchievements = achievements.filter((item) => item.featured)
  const resumeLink =
    profile.primaryLinks.find((item) => item.label === 'View Resume') ??
    profile.primaryLinks[0]

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-base)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--text-strong)]"
      >
        Skip to content
      </a>

      <SiteHeader navItems={siteMetadata.navItems} resumeLink={resumeLink} />

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 py-8 sm:px-8 sm:py-12"
      >
        <HeroSection profile={profile} />
        <ProfessionalSummarySection profile={profile} />
        <EngineeringImpactSection achievements={featuredAchievements} />
        <SkillsSection skillGroups={skillGroups} />
        <ExperienceSection experienceItems={experienceItems} />
        <CaseStudiesSection caseStudies={caseStudyPreviews} />
        <BlogPreviewSection blogTopics={blogTopicPreviews} />
        <ContactSection
          availabilityNote={profile.availabilityNote}
          contactMethods={contactMethods}
        />
      </main>

      <SiteFooter name={profile.name} />
    </div>
  )
}
