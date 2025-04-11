"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  initials: string
}

export function TestimonialCard({ quote, author, role, initials }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-none shadow-lg h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
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
                className="h-5 w-5"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p className="italic">{quote}</p>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center">
              <span className="font-bold text-primary">{initials}</span>
            </div>
            <div>
              <p className="font-bold">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
