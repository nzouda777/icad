"use client"

import { motion } from "framer-motion"
import { Network, Shield, LockKeyhole, Terminal, Gift } from "lucide-react"

import { SectionTitle } from "@/components/atoms/section-title"
import { ModuleCard } from "@/components/molecules/module-card"
import { CheckItem } from "@/components/atoms/check-item"
import { BonusItem } from "@/components/molecules/bonus-item"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ProgramSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="programme">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Le contenu de la formation"
          subtitle="Un programme complet et structuré pour maîtriser tous les aspects de la cybersécurité"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ModuleCard
            icon={Network}
            title="Module 1: Fondamentaux des réseaux"
            duration="4 semaines - 20 heures de vidéo + TP pratiques"
          >
            <CheckItem>Architecture et topologies réseau</CheckItem>
            <CheckItem>Protocoles TCP/IP et modèle OSI</CheckItem>
            <CheckItem>Configuration des équipements réseau</CheckItem>
            <CheckItem>Analyse de trafic et dépannage</CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={Shield}
            title="Module 2: Sécurité des systèmes"
            duration="4 semaines - 18 heures de vidéo + labs pratiques"
          >
            <CheckItem>Sécurisation des systèmes d'exploitation</CheckItem>
            <CheckItem>Gestion des accès et des identités</CheckItem>
            <CheckItem>Chiffrement et PKI</CheckItem>
            <CheckItem>Détection et prévention des malwares</CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={LockKeyhole}
            title="Module 3: Sécurité réseau avancée"
            duration="5 semaines - 25 heures de vidéo + projets pratiques"
          >
            <CheckItem>Configuration de firewalls et VPN</CheckItem>
            <CheckItem>Systèmes IDS/IPS</CheckItem>
            <CheckItem>Sécurité du Cloud et virtualisation</CheckItem>
            <CheckItem>Sécurité des réseaux sans fil</CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={Terminal}
            title="Module 4: Tests d'intrusion"
            duration="5 semaines - 22 heures de vidéo + labs pratiques"
          >
            <CheckItem>Méthodologie de pentest</CheckItem>
            <CheckItem>Reconnaissance et collecte d'informations</CheckItem>
            <CheckItem>Exploitation de vulnérabilités</CheckItem>
            <CheckItem>Rédaction de rapports professionnels</CheckItem>
          </ModuleCard>
        </div>

        <motion.div
          className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            <span>Bonus inclus dans la formation</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BonusItem
              title="Accès à notre communauté privée"
              description="Échangez avec d'autres professionnels et nos formateurs"
            />
            <BonusItem
              title="3 sessions de coaching individuel"
              description="Pour vous aider à progresser et répondre à vos questions"
            />
            <BonusItem
              title="Environnement de lab virtuel"
              description="Pratiquez dans un environnement sécurisé et réaliste"
            />
            <BonusItem
              title="Ressources et outils exclusifs"
              description="Accès à notre bibliothèque de ressources et templates"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
