"use client"

import { motion } from "framer-motion"
import { Users, Server, Shield } from "lucide-react"

import { SectionTitle } from "@/components/atoms/section-title"
import { FeatureCard } from "@/components/molecules/feature-card"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function TargetAudienceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="cible">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="À qui s'adresse cette formation ?"
          subtitle="Notre formation en cybersécurité est conçue pour répondre aux besoins de différents profils"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <FeatureCard
            icon={Users}
            title="Étudiants en informatique"
            description="Complétez votre formation académique avec des compétences pratiques recherchées par les entreprises"
          />

          <FeatureCard
            icon={Server}
            title="Techniciens IT en évolution"
            description="Développez vos compétences en sécurité pour accéder à des postes à plus forte responsabilité"
          />

          <FeatureCard
            icon={Shield}
            title="Professionnels en reconversion"
            description="Acquérez rapidement les compétences nécessaires pour intégrer le secteur de la cybersécurité"
          />
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-medium text-center max-w-2xl">
            Si vous vous reconnaissez dans l'un de ces profils, cette formation est faite pour vous.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
