"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { SectionTitle } from "@/components/atoms/section-title"
import { TestimonialCard } from "@/components/molecules/testimonial-card"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <SectionTitle
          title="Ce que disent nos étudiants"
          subtitle="Découvrez les témoignages de ceux qui ont suivi notre formation"
        />

        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#00DC82"
              stroke="#00DC82"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </motion.svg>
          ))}
          <span className="ml-2 text-lg font-bold">4.9/5</span>
          <span className="ml-1 text-muted-foreground">(98 avis)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TestimonialCard
            quote="Cette formation a complètement transformé ma carrière. J'ai pu obtenir ma certification CompTIA Security+ et décrocher un poste d'analyste en cybersécurité dans une grande entreprise."
            author="Thomas M."
            role="Ancien étudiant, promotion 2023"
            initials="TM"
          />

          <TestimonialCard
            quote="La qualité des cours et l'accompagnement sont exceptionnels. Les TP pratiques m'ont permis de mettre en application immédiatement les concepts appris. Je recommande vivement."
            author="Sophie L."
            role="Technicienne réseau reconvertie"
            initials="SL"
          />

          <TestimonialCard
            quote="En tant que débutant complet, j'avais peur de ne pas suivre. Mais la pédagogie est excellente et on avance pas à pas. Aujourd'hui, je travaille comme administrateur réseau junior."
            author="Romain D."
            role="En reconversion professionnelle"
            initials="RD"
          />
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            <Image
              src="/placeholder-logo.svg"
              width="120"
              height="60"
              alt="Logo entreprise"
              className="aspect-[2/1] object-contain"
            />
            <Image
              src="/placeholder-logo.svg"
              width="120"
              height="60"
              alt="Logo entreprise"
              className="aspect-[2/1] object-contain"
            />
            <Image
              src="/placeholder-logo.svg"
              width="120"
              height="60"
              alt="Logo entreprise"
              className="aspect-[2/1] object-contain"
            />
            <Image
              src="/placeholder-logo.svg"
              width="120"
              height="60"
              alt="Logo entreprise"
              className="aspect-[2/1] object-contain"
            />
            <Image
              src="/placeholder-logo.svg"
              width="120"
              height="60"
              alt="Logo entreprise"
              className="aspect-[2/1] object-contain hidden md:block"
            />
            <Image
              src="/placeholder-logo.svg"
              width="120"
              height="60"
              alt="Logo entreprise"
              className="aspect-[2/1] object-contain hidden md:block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
