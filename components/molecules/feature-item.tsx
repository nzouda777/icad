"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { FeatureIcon } from "@/components/atoms/feature-icon"

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <motion.div
      className="flex flex-col space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FeatureIcon Icon={icon} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
