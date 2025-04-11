"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Shield, Menu, X, ChevronRight } from "lucide-react"
import Link from "next/link"
import { throttle } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavLink } from "@/components/atoms/nav-link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
// Theme toggle state and handler
const [theme, setTheme] = useState<'light' | 'dark'>('light')

const toggleTheme = useCallback(() => {
  const newTheme = theme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  // Update document root class for theme
  document.documentElement.classList.remove(theme)
  document.documentElement.classList.add(newTheme)
  // Store theme preference
  localStorage.setItem('theme', newTheme)
}, [theme])

// Initialize theme from localStorage on mount
useEffect(() => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
  setTheme(initialTheme)
  document.documentElement.classList.add(initialTheme)
}, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-primary/10 py-2" : "bg-transparent py-4"
        
      } ${ theme === "dark" ? "bg-transparent" : "bg-background/80 backdrop-blur-lg border-b border-primary/10 py-2" }`  }
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
            <span className="text-xl font-bold leading-none">CyberFormation</span>
            <span className="text-xs text-muted-foreground">Sécurité & Expertise</span>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/10">
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
