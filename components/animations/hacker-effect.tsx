"use client"

import { useEffect, useRef, useState } from "react"

interface HackerEffectProps {
  intensity?: "low" | "medium" | "high"
  color?: string
  backgroundColor?: string
  fullScreen?: boolean
  className?: string
}

export function HackerEffect({
  intensity = "medium",
  color = "#00DC82",
  backgroundColor = "rgba(0, 0, 0, 0.8)",
  fullScreen = false,
  className = "",
}: HackerEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const animationRef = useRef<number>()

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
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = fullScreen ? window.innerWidth : canvas.offsetWidth
      canvas.height = fullScreen ? window.innerHeight : canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix effect settings based on intensity
    const particleCount = {
      low: 25,
      medium: 50,
      high: 100,
    }[intensity]

    // Character set for the matrix effect
    const chars =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const binaryChars = "01"
    const hexChars = "0123456789ABCDEF"
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`"

    // Mix different character sets based on intensity
    let characterSet = ""
    if (intensity === "low") {
      characterSet = binaryChars + hexChars
    } else if (intensity === "medium") {
      characterSet = binaryChars + hexChars + symbolChars
    } else {
      characterSet = chars + binaryChars + hexChars + symbolChars
    }

    // Create matrix columns
    class Column {
      x: number
      y: number
      speed: number
      fontSize: number
      text: string
      characters: string[]

      constructor(x: number, canvasHeight: number) {
        this.x = x
        this.y = Math.random() * canvasHeight * -1 // Start above the canvas
        this.speed = Math.random() * 2 + 1
        this.fontSize = Math.floor(Math.random() * 5) + 10 // Font size between 10-14px

        // Generate random text for this column
        const textLength = Math.floor(Math.random() * 20) + 5
        this.characters = Array(textLength)
          .fill("")
          .map(() => characterSet[Math.floor(Math.random() * characterSet.length)])
        this.text = this.characters.join("")
      }

      draw(ctx: CanvasRenderingContext2D, canvasHeight: number) {
        // Draw each character in the column with different opacity
        for (let i = 0; i < this.characters.length; i++) {
          const char = this.characters[i]
          const y = this.y - i * this.fontSize

          // Skip if character is above the canvas
          if (y < 0) continue

          // Skip if character is below the canvas
          if (y > canvasHeight) continue

          // Calculate opacity based on position (head is brighter)
          const opacity = i === 0 ? 1 : 1 - i / this.characters.length

          ctx.fillStyle =
            i === 0
              ? color // Head character is full color
              : `${color}${Math.floor(opacity * 99)
                  .toString(16)
                  .padStart(2, "0")}` // Body characters fade out

          ctx.font = `${this.fontSize}px monospace`
          ctx.fillText(char, this.x, y)

          // Randomly change characters except the first one (creates flickering effect)
          if (i > 0 && Math.random() > 0.95) {
            this.characters[i] = characterSet[Math.floor(Math.random() * characterSet.length)]
          }
        }

        // Move the column down
        this.y += this.speed

        // Reset if the column has moved completely below the canvas
        if (this.y - this.fontSize * this.characters.length > canvasHeight) {
          this.y = Math.random() * canvasHeight * -1
          this.speed = Math.random() * 2 + 1
        }
      }
    }

    // Create columns
    const columns: Column[] = []
    const columnWidth = 20 // Average width of characters
    const columnCount = Math.ceil(canvas.width / columnWidth)

    for (let i = 0; i < Math.min(columnCount, particleCount); i++) {
      const x = i * columnWidth + Math.random() * 10 - 5 // Add some randomness to x position
      columns.push(new Column(x, canvas.height))
    }

    // Animation loop
    let lastTime = 0
    const fps = intensity === "high" ? 30 : intensity === "medium" ? 24 : 15
    const fpsInterval = 1000 / fps

    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime

      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval)

        // Clear canvas with slight opacity for trail effect
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw columns
        columns.forEach((column) => column.draw(ctx, canvas.height))

        // Add occasional glitch effect
        if (intensity !== "low" && Math.random() > 0.97) {
          const glitchHeight = Math.random() * 10 + 5
          const glitchY = Math.random() * canvas.height
          const glitchWidth = Math.random() * 100 + 50
          const glitchX = Math.random() * (canvas.width - glitchWidth)

          ctx.fillStyle = `${color}33` // Semi-transparent
          ctx.fillRect(glitchX, glitchY, glitchWidth, glitchHeight)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Only start animation if reduced motion is not preferred
    if (!isReducedMotion) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      // For reduced motion, just show a static pattern
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = `${color}33`
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const width = Math.random() * 100 + 50
        const height = Math.random() * 5 + 2
        ctx.fillRect(x, y, width, height)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [color, backgroundColor, fullScreen, intensity, isReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className={`${className} ${fullScreen ? "fixed inset-0 z-10" : "w-full h-full"}`}
      style={{ backgroundColor: "transparent" }}
    />
  )
}
