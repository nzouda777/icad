import type React from "react"
import { CheckCircle } from "lucide-react"

interface CheckItemProps {
  children: React.ReactNode
}

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}
