"use client"
import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <motion.div
      className={`space-y-2 ${centered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-[900px] ${centered ? "mx-auto" : ""} ${light ? "text-slate-300" : "text-muted-foreground"} md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
