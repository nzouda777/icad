"use client"

import { motion } from "framer-motion"
import { Server, Shield, Award, Users, Clock, LockKeyhole } from "lucide-react"

import { SectionTitle } from "@/components/atoms/section-title"
import { FeatureItem } from "@/components/molecules/feature-item"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export function BenefitsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="benefices">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Les bénéfices concrets de la formation"
          subtitle="Des compétences pratiques et immédiatement applicables dans votre environnement professionnel"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <FeatureItem
            icon={Server}
            title="Configuration d'infrastructures sécurisées"
            description="Apprenez à configurer des routeurs, firewalls et systèmes de détection d'intrusion professionnels"
          />

          <FeatureItem
            icon={Shield}
            title="Détection et neutralisation des cyberattaques"
            description="Maîtrisez les techniques pour identifier, analyser et contrer les menaces informatiques"
          />

          <FeatureItem
            icon={Award}
            title="Préparation aux certifications"
            description="Préparez-vous efficacement aux certifications reconnues (CompTIA Security+, Cisco CCNA Security)"
          />

          <FeatureItem
            icon={Users}
            title="Gestion des risques"
            description="Développez une méthodologie pour évaluer et gérer les risques de sécurité dans votre organisation"
          />

          <FeatureItem
            icon={Clock}
            title="Réponse aux incidents"
            description="Apprenez à réagir efficacement face à une violation de sécurité et à limiter les dégâts"
          />

          <FeatureItem
            icon={LockKeyhole}
            title="Sécurisation des applications"
            description="Découvrez comment intégrer la sécurité dans le cycle de développement des applications"
          />
        </motion.div>
      </div>
    </section>
  )
}
