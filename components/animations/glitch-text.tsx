"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
  glitchIntensity?: "low" | "medium" | "high"
  color?: string
  fontSize?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export function GlitchText({
  text,
  className = "",
  glitchIntensity = "medium",
  color = "#00DC82",
  fontSize = "inherit",
  as: Component = "div",
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [displayText, setDisplayText] = useState(text)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleReducedMotionChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleReducedMotionChange)

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange)
    }
  }, [])

  useEffect(() => {
    if (isReducedMotion) return

    // Set initial text
    setDisplayText(text)

    // Glitch intervals based on intensity
    const minInterval = glitchIntensity === "high" ? 2000 : glitchIntensity === "medium" ? 3000 : 5000
    const maxInterval = glitchIntensity === "high" ? 5000 : glitchIntensity === "medium" ? 7000 : 10000

    // Glitch duration based on intensity
    const glitchDuration = glitchIntensity === "high" ? 500 : glitchIntensity === "medium" ? 300 : 200

    // Schedule random glitches
    const scheduleGlitch = () => {
      const nextGlitchDelay = Math.random() * (maxInterval - minInterval) + minInterval

      const timeout = setTimeout(() => {
        setIsGlitching(true)

        // Generate glitched text
        const glitchText = () => {
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`"
          let result = ""

          for (let i = 0; i < text.length; i++) {
            // Randomly decide if this character should be glitched
            if (Math.random() < (glitchIntensity === "high" ? 0.3 : glitchIntensity === "medium" ? 0.2 : 0.1)) {
              result += chars.charAt(Math.floor(Math.random() * chars.length))
            } else {
              result += text.charAt(i)
            }
          }

          return result
        }

        // Create glitch effect by rapidly changing text
        let glitchCount = glitchIntensity === "high" ? 6 : glitchIntensity === "medium" ? 4 : 2
        const glitchInterval = setInterval(() => {
          setDisplayText(glitchText())

          glitchCount--
          if (glitchCount <= 0) {
            clearInterval(glitchInterval)
            setDisplayText(text)
            setIsGlitching(false)
            scheduleGlitch()
          }
        }, glitchDuration / glitchCount)
      }, nextGlitchDelay)

      return () => clearTimeout(timeout)
    }

    const cleanup = scheduleGlitch()
    return cleanup
  }, [text, glitchIntensity, isReducedMotion])

  return (
    <Component className={`relative inline-block ${className}`} style={{ color, fontSize }}>
      {/* Main text */}
      <span className={`relative z-10 ${isGlitching ? "opacity-90" : ""}`}>{displayText}</span>

      {/* Glitch effects */}
      {isGlitching && !isReducedMotion && (
        <>
          {/* Red offset */}
          <motion.span
            className="absolute left-0 top-0 text-red-500 opacity-70 select-none pointer-events-none"
            style={{ clipPath: "inset(25% 0 25% 0)" }}
            animate={{
              x: [0, -3, 1, -2, 0],
              y: [0, 1, -1, 1, 0],
            }}
            transition={{ duration: 0.2, repeat: 2, repeatType: "reverse" }}
          >
            {displayText}
          </motion.span>

          {/* Blue offset */}
          <motion.span
            className="absolute left-0 top-0 text-blue-500 opacity-70 select-none pointer-events-none"
            style={{ clipPath: "inset(50% 0 15% 0)" }}
            animate={{
              x: [0, 3, -1, 2, 0],
              y: [0, -1, 1, -1, 0],
            }}
            transition={{ duration: 0.2, repeat: 2, repeatType: "reverse" }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </Component>
  )
}
