import Link from "next/link"
import type { ReactNode } from "react"

interface FooterLinkProps {
  href: string
  children: ReactNode
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="text-xs md:text-sm hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  )
}
