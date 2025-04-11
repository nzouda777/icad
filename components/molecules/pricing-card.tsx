"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  description: string
  price: string
  children: ReactNode
  recommended?: boolean
}

export function PricingCard({ title, description, price, children, recommended = false }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`border-none shadow-lg relative overflow-hidden h-full group hover:shadow-xl transition-all duration-300 ${recommended ? "border-2 border-primary" : ""}`}
      >
        {recommended && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
            Recommandé
          </div>
        )}
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{price}</span>
            <span className="ml-2 text-muted-foreground">TTC</span>
          </div>
          <ul className="space-y-3">{children}</ul>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button size="lg" className="w-full">
              S'inscrire maintenant
            </Button>
          </motion.div>
          <p className="text-sm text-center text-muted-foreground">Paiement en 3 ou 4 fois sans frais disponible</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
