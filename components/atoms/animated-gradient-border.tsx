import type { ReactNode } from "react"

interface AnimatedGradientBorderProps {
  children: ReactNode
}

export function AnimatedGradientBorder({ children }: AnimatedGradientBorderProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-lg opacity-75 animate-pulse"></div>
      <div className="relative bg-background dark:bg-black rounded-lg overflow-hidden">{children}</div>
    </div>
  )
}
