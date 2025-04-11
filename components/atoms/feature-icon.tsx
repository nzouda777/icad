"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureIconProps {
  Icon: LucideIcon
  size?: "sm" | "md" | "lg"
}

export function FeatureIcon({ Icon, size = "md" }: FeatureIconProps) {
  const sizeClasses = {
    sm: "p-2 w-10 h-10",
    md: "p-2 w-12 h-12",
    lg: "p-3 w-16 h-16",
  }

  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <motion.div
      className={`rounded-full bg-primary/10 flex items-center justify-center ${sizeClasses[size]}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className={`text-primary ${iconSizes[size]}`} />
    </motion.div>
  )
}
