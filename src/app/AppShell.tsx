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
  contactSectionContent,
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
    <div className="min-h-screen text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-card focus:outline-none"
      >
        Skip to content
      </a>

      <SiteHeader navItems={siteMetadata.navItems} resumeLink={resumeLink} />

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-[68.75rem] flex-col gap-20 px-4 py-8 sm:px-6 sm:py-12 lg:gap-24"
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
          schedulingCta={contactSectionContent.schedulingCta}
          supportingText={contactSectionContent.supportingText}
        />
      </main>

      <SiteFooter name={profile.name} />
    </div>
  )
}
