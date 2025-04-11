"use client"

import { motion } from "framer-motion"

import { SectionTitle } from "@/components/atoms/section-title"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function FaqSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
      <div className="container px-4 md:px-6">
        <SectionTitle title="Questions fréquentes" subtitle="Tout ce que vous devez savoir avant de vous inscrire" />

        <motion.div
          className="mx-auto max-w-3xl mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Ai-je besoin de prérequis techniques pour suivre cette formation ?</AccordionTrigger>
              <AccordionContent>
                Non, notre formation est conçue pour être accessible aux débutants. Des connaissances de base en
                informatique sont un plus, mais nous reprenons tous les concepts depuis le début. Notre approche
                progressive vous permettra d'acquérir les compétences nécessaires, quel que soit votre niveau de départ.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Puis-je suivre la formation à mon rythme ?</AccordionTrigger>
              <AccordionContent>
                Absolument ! Tous les modules sont disponibles dès votre inscription et vous pouvez les suivre à votre
                propre rythme. Vous avez un accès illimité dans le temps, ce qui vous permet d'organiser votre
                apprentissage selon vos disponibilités. Nous recommandons toutefois de consacrer au moins 5 à 10 heures
                par semaine pour progresser efficacement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Comment se déroulent les travaux pratiques ?</AccordionTrigger>
              <AccordionContent>
                Vous aurez accès à un environnement de laboratoire virtuel sécurisé où vous pourrez mettre en pratique
                les concepts appris. Cet environnement est accessible depuis votre navigateur, sans installation
                complexe. Vous y trouverez des machines virtuelles préconfigurées pour réaliser tous les exercices et
                projets de la formation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>La formation prépare-t-elle aux certifications ?</AccordionTrigger>
              <AccordionContent>
                Oui, notre programme couvre les connaissances nécessaires pour préparer plusieurs certifications
                reconnues dans le domaine de la cybersécurité, notamment CompTIA Security+, Cisco CCNA Security et CEH
                (Certified Ethical Hacker). Des modules spécifiques de préparation aux examens sont inclus, avec des
                quiz et examens blancs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Quel type de support est proposé pendant la formation ?</AccordionTrigger>
              <AccordionContent>
                Vous bénéficiez d'un support par email pour toutes vos questions techniques. Les membres Premium ont
                accès à un support prioritaire. De plus, notre communauté privée vous permet d'échanger avec d'autres
                apprenants et nos formateurs. Les sessions de coaching individuel (incluses dans l'offre Premium) vous
                permettent d'approfondir des points spécifiques et d'obtenir des conseils personnalisés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>La formation est-elle éligible au CPF ou à d'autres financements ?</AccordionTrigger>
              <AccordionContent>
                Oui, notre formation est éligible au financement CPF (Compte Personnel de Formation). Nous pouvons
                également vous accompagner dans vos démarches pour d'autres types de financements comme le Pôle Emploi,
                le plan de développement des compétences de votre entreprise ou les OPCO. Contactez-nous pour obtenir un
                devis personnalisé adapté à votre situation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
