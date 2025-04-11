"use client"

import { useEffect } from "react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ProgramSection } from "@/components/sections/program-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { InstructorSection } from "@/components/sections/instructor-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { HackerDemoSection } from "@/components/sections/hacker-demo-section"

export default function LandingPage() {
  useEffect(() => {
    // Add a class to the body for additional styling if needed
    document.body.classList.add("landing-page")
    return () => {
      document.body.classList.remove("landing-page")
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TargetAudienceSection />
        <BenefitsSection />
        <HackerDemoSection />
        <ProgramSection />
        <TestimonialsSection />
        <InstructorSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
