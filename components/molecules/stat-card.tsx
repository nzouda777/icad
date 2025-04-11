"use client"

import { motion } from "framer-motion"
import { memo } from "react"

interface StatCardProps {
  value: string
  label: string
}

export const StatCard = memo(function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 relative overflow-hidden will-change-transform"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      {/* Simplified decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-slate-300">{label}</div>
      </div>
    </motion.div>
  )
})
