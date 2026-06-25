import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { EngineeringImpactSection } from '../components/sections/EngineeringImpactSection'
import { HeroSection } from '../components/sections/HeroSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { ContactSection } from '../features/contact/ContactSection'
import { SkillsExplorerSection } from '../features/skills/SkillsExplorerSection'
import { WritingSection } from '../features/writing/WritingSection'
import {
  achievements,
  contactSectionContent,
  profile,
  siteMetadata,
  testimonials,
} from '../lib/content'
import { applyDocumentMetadata } from '../lib/seo/metadata'

export function AppShell() {
  const location = useLocation()

  useEffect(() => {
    applyDocumentMetadata(siteMetadata)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return
    }

    const element = document.getElementById(location.hash)
    if (!element) {
      return
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      element.scrollIntoView({ block: 'start' })
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [location.hash, location.pathname])

  const featuredAchievements = achievements.filter((item) => item.featured)
  const resumeLink =
    profile.primaryLinks.find((item) => item.label === 'Resume') ??
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
        <EngineeringImpactSection achievements={featuredAchievements} />
        <TestimonialsSection testimonials={testimonials} />
        <SkillsExplorerSection />
        <WritingSection />
        <ContactSection content={contactSectionContent} />
      </main>

      <SiteFooter name={profile.name} />
    </div>
  )
}
