"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Calendar, Terminal, ArrowRight } from "lucide-react"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatCard } from "@/components/molecules/stat-card"
import { HackerEffect } from "@/components/animations/hacker-effect"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced stagger time
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 10 }, // Reduced y distance
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }, // Faster animation
  },
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden flex items-center"
    >
      {/* Hacker Effect Animation */}
      <div className="absolute inset-0 z-0">
        <HackerEffect fullScreen={false} intensity="medium" color="#00DC82" backgroundColor="rgba(0, 0, 0, 0.85)" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Badge className="inline-flex bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 backdrop-blur-sm px-3 py-1.5 text-sm">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="mr-2 h-2 w-2 rounded-full bg-primary"
                />
                Formation Professionnelle
              </Badge>
            </motion.div>

            <motion.div className="space-y-2" variants={fadeIn}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-white">
                <span className="block">Devenez un expert en</span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{ backgroundSize: "200% auto" }}
                >
                  Cybersécurité
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                </motion.span>
                <span className="block">en quelques semaines</span>
              </h1>
              <p className="max-w-[600px] text-slate-300 md:text-xl">
                Une formation 100% pratique, pour devenir opérationnel et certifiable rapidement
              </p>
            </motion.div>

            <motion.div className="space-y-3" variants={fadeIn}>
              {["Accessible aux débutants", "Accompagnement personnalisé", "Projets réels et cas pratiques"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="relative">
                      <CheckCircle className="h-5 w-5 text-primary relative z-10" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ),
              )}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-3 pt-4" variants={fadeIn}>
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Réservez votre place maintenant</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Recevoir le programme complet
              </Button>
            </motion.div>

            <motion.div className="flex items-center gap-2 pt-2" variants={fadeIn}>
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm text-slate-300">Prochaine session dans 5 jours</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-xl opacity-30" />

              <div className="relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Cybersécurité formation"
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Terminal className="h-5 w-5 text-primary" />
                    <span className="font-medium">Formation interactive</span>
                  </div>
                </div>

                {/* Simplified futuristic overlay elements */}
                <div className="absolute top-4 right-4 h-8 w-8 border border-primary/30 rounded-full" />
                <div className="absolute top-6 left-6 h-20 w-1 bg-primary/20" />
                <div className="absolute top-1/3 right-6 h-1 w-20 bg-primary/40" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating stats - with reduced animation */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="1500+" label="Étudiants formés" />
          <StatCard value="95%" label="Taux de satisfaction" />
          <StatCard value="85%" label="Taux d'embauche" />
          <StatCard value="4" label="Certifications préparées" />
        </div>
      </div>
    </section>
  )
}
