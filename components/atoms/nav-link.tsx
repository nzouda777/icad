"use client"

import Link from "next/link"
import { memo, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { useTheme } from "next-themes"

interface NavLinkProps {
  href: string
  children: ReactNode
  onClick?: () => void
}

export const NavLink = memo(function NavLink({ href, children, onClick }: NavLinkProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Link href={href} className="text-sm font-medium transition-colors relative group" onClick={onClick}>
        <span className="relative z-10">{children}</span>
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors relative group ${
        resolvedTheme === 'dark' ? 'text-zinc-100 hover:text-primary/90' : 'text-zinc-900 hover:text-primary'
      }`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
})
