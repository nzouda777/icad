"use client"

import { motion } from "framer-motion"
import { ChevronRight, Calendar, LockKeyhole, Shield, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionTitle } from "@/components/atoms/section-title"
import { AnimatedBackground } from "@/components/molecules/animated-background"
import { CtaCard } from "@/components/molecules/cta-card"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <AnimatedBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <SectionTitle
            title="Prêt à lancer votre carrière en cybersécurité ?"
            subtitle="Rejoignez notre formation complète et devenez un expert en réseau et sécurité informatique"
            light
          />

          <motion.div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row" variants={staggerContainer}>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" className="group">
                <span>Je m'inscris maintenant</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 1 }}
                >
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="outline" className="border-white/20  hover:bg-white/10">
                Recevoir plus d'informations
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="flex items-center gap-2 pt-4" variants={fadeIn}>
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-slate-300">Places limitées à 20 participants par session</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <CtaCard icon={LockKeyhole} title="Paiement sécurisé" description="Transactions cryptées et sécurisées" />
          <CtaCard icon={Shield} title="Garantie 14 jours" description="Satisfait ou remboursé sans condition" />
          <CtaCard icon={Award} title="Certification" description="Attestation de réussite délivrée" />
        </motion.div>
      </div>
    </section>
  )
}
