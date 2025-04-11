"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

import { SectionTitle } from "@/components/atoms/section-title"
import { PricingCard } from "@/components/molecules/pricing-card"
import { CheckItem } from "@/components/atoms/check-item"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="tarifs">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Investissez dans votre avenir"
          subtitle="Une formation complète pour lancer ou accélérer votre carrière en cybersécurité"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <PricingCard title="Formation Standard" description="Accès complet à la formation en ligne" price="1990€">
            <CheckItem>Accès à vie à tous les modules</CheckItem>
            <CheckItem>Environnement de lab virtuel</CheckItem>
            <CheckItem>Communauté d'entraide privée</CheckItem>
            <CheckItem>Certificat de fin de formation</CheckItem>
          </PricingCard>

          <PricingCard
            title="Formation Premium"
            description="Formation complète avec coaching personnalisé"
            price="2990€"
            recommended
          >
            <CheckItem>Tout ce qui est inclus dans l'offre Standard</CheckItem>
            <CheckItem>3 sessions de coaching individuel</CheckItem>
            <CheckItem>Révision de CV et préparation aux entretiens</CheckItem>
            <CheckItem>Accès prioritaire aux nouvelles ressources</CheckItem>
            <CheckItem>Support prioritaire par email</CheckItem>
          </PricingCard>
        </div>

        <motion.div
          className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/10 flex flex-col md:flex-row items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold">Garantie satisfait ou remboursé</h3>
            <p className="text-muted-foreground">
              Nous sommes convaincus de la qualité de notre formation. Si vous n'êtes pas satisfait dans les 14 jours
              suivant votre inscription, nous vous remboursons intégralement.
            </p>
          </div>
          <motion.div
            className="flex-shrink-0"
            animate={{
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Shield className="h-16 w-16 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
