"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users } from "lucide-react"

import { SectionTitle } from "@/components/atoms/section-title"
import { AnimatedGradientBorder } from "@/components/atoms/animated-gradient-border"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

export function InstructorSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="formateur">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <SectionTitle
                title="Qui est votre formateur ?"
                subtitle="Expert en cybersécurité avec plus de 15 ans d'expérience dans le domaine"
                centered={false}
              />
            </motion.div>

            <motion.div className="space-y-4" variants={fadeIn}>
              <p>
                Après avoir travaillé comme responsable sécurité pour plusieurs grandes entreprises du CAC 40, j'ai
                décidé de partager mon expertise à travers cette formation complète.
              </p>
              <p>
                Certifié CISSP, CEH et OSCP, j'ai une approche pratique de la cybersécurité et je m'assure que mes
                étudiants acquièrent des compétences directement applicables dans leur environnement professionnel.
              </p>
              <p>
                Ma méthode pédagogique repose sur l'apprentissage par la pratique, avec de nombreux cas concrets et
                exercices tirés de situations réelles rencontrées au cours de ma carrière.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-3 pt-4" variants={fadeIn}>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Certifié CISSP, CEH, OSCP</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>+1500 étudiants formés</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedGradientBorder>
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Photo du formateur"
                className="rounded-lg object-cover"
              />
            </AnimatedGradientBorder>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
