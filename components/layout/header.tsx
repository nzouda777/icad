"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Shield, Menu, X, ChevronRight } from "lucide-react"
import Link from "next/link"
import { throttle } from "@/lib/utils"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavLink } from "@/components/atoms/nav-link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(
    throttle(() => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }, 100),
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  if (!mounted) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        theme === "dark" 
          ? "bg-black text-white" 
          : "bg-white/90 text-black"
      } backdrop-blur-lg border-b border-primary/10 py-2`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Shield className="h-7 w-7 text-primary relative z-10" />
          </motion.div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold leading-none ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>CyberFormation</span>
            <span className={`text-xs ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
            }`}>Sécurité & Expertise</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink href="#programme">Programme</NavLink>
          <NavLink href="#benefices">Bénéfices</NavLink>
          <NavLink href="#formateur">Formateur</NavLink>
          <NavLink href="#tarifs">Tarifs</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex group overflow-hidden relative" variant="default">
            <span className="relative z-10">Contactez-nous</span>
            <ChevronRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden relative" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Simplified animation */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${
          theme === "dark" 
            ? "bg-zinc-900/95" 
            : "bg-white/95"
        } backdrop-blur-lg border-b border-primary/10`}>
          <div className="container py-4 flex flex-col space-y-4">
            <NavLink href="#programme" onClick={toggleMenu}>
              Programme
            </NavLink>
            <NavLink href="#benefices" onClick={toggleMenu}>
              Bénéfices
            </NavLink>
            <NavLink href="#formateur" onClick={toggleMenu}>
              Formateur
            </NavLink>
            <NavLink href="#tarifs" onClick={toggleMenu}>
              Tarifs
            </NavLink>
            <NavLink href="#faq" onClick={toggleMenu}>
              FAQ
            </NavLink>
            <Button className="w-full">
              Contactez-nous
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
