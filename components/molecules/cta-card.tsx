"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface CtaCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function CtaCard({ icon: Icon, title, description }: CtaCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center space-y-2 border border-white/20 rounded-lg p-6 backdrop-blur-sm bg-white/5"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-center text-slate-300">{description}</p>
    </motion.div>
  )
}
