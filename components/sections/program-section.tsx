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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:mx-auto [&>*:last-child]:md:max-w-[calc(50%-1rem)]">
          <ModuleCard
            icon={Network}
            title="Module 1: Initiation à la Cybersécurité"
            duration="4 semaines - 20 heures de vidéo + TP pratiques"
            price="153.00"
          >
            <CheckItem>Introduction à la cybersécurité </CheckItem>
            <CheckItem>Types de cybermenaces et attaques </CheckItem>
            <CheckItem>Mesures de sécurité pour protéger les informations personnelles et professionnelles </CheckItem>
            <CheckItem>Carrières dans la cybersécurité </CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={Shield}
            title="Module 2: Cisco Cybersecurity Essentials"
            duration="4 semaines - 18 heures de vidéo + labs pratiques"
            price="230.00"
          >
            <CheckItem>Introduction à la sécurité des réseaux et des informations </CheckItem>
            <CheckItem>Protection des systèmes d'information </CheckItem>
            <CheckItem>Éthique et les lois en matière de cybersécurité </CheckItem>
            <CheckItem>Techniques pour sécuriser les entreprises </CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={LockKeyhole}
            title="Module 3: Cisco Network Security"
            duration="5 semaines - 25 heures de vidéo + projets pratiques"
            price="275.00"
          >
            <CheckItem>Concepts fondamentaux de la sécurité réseau </CheckItem>
            <CheckItem>Configuration et gestion des équipements Cisco </CheckItem>
            <CheckItem>Résolution des problèmes de sécurité </CheckItem>
            <CheckItem>Mise en œuvre de politiques de sécurité et protection des données </CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={Terminal}
            title="Module 4:  Cisco CyberOps Associate – CCNA Security "
            duration="5 semaines - 22 heures de vidéo + labs pratiques"
            price="385.00"
          >
            <CheckItem>Gestion des opérations de cybersécurité </CheckItem>
            <CheckItem>Surveiller, détecter et répondre aux incidents de sécurité </CheckItem>
            <CheckItem>Techniques avancées pour éliminer les menaces </CheckItem>
            <CheckItem>Préparation pour l'examen Cisco CyberOps </CheckItem>
          </ModuleCard>

          <ModuleCard
            icon={Terminal}
            title="Module 5:  Cisco CCNA "
            duration="5 semaines - 22 heures de vidéo + labs pratiques"
            price="336.00"
          >
            <CheckItem>Configuration et gestion des réseaux Cisco  </CheckItem>
            <CheckItem>Introduction aux protocoles de routage et de commutation </CheckItem>
            <CheckItem>Sécurisation des réseaux et des données </CheckItem>
            <CheckItem>Introduction à l'automatisation des réseaux  </CheckItem>
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
