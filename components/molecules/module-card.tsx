"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Clock, type LucideIcon, Euro } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { FeatureIcon } from "@/components/atoms/feature-icon"

interface ModuleCardProps {
  icon: LucideIcon
  title: string
  children: ReactNode
  duration: string,
  price: string
}

export function ModuleCard({ icon, title, children, duration, price }: ModuleCardProps) {
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
          
          <div className="pt-4 border-t border-gray-100 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                <Euro className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">{price}</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-primary">→</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
