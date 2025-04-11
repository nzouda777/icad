import type { ReactNode } from "react"

interface FooterColumnProps {
  title: string
  children: ReactNode
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  )
}
