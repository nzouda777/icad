"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { FeatureIcon } from "@/components/atoms/feature-icon"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-none shadow-lg h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <FeatureIcon Icon={Icon} />
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
