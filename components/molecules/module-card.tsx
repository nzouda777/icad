"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Clock, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { FeatureIcon } from "@/components/atoms/feature-icon"

interface ModuleCardProps {
  icon: LucideIcon
  title: string
  children: ReactNode
  duration: string
}

export function ModuleCard({ icon, title, children, duration }: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <FeatureIcon Icon={icon} />
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <ul className="space-y-2">{children}</ul>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
