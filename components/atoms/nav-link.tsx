"use client"

import Link from "next/link"
import { memo } from "react"
import type { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  onClick?: () => void
}

export const NavLink = memo(function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:text-primary transition-colors relative group"
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
})
