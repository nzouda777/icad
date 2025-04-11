"use client"

import { useEffect, useRef, useState } from "react"

export function CyberVortex() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const animationRef = useRef<number>()
  const particlesRef = useRef<any[]>([])

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

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.9 // 90% of viewport height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system for the vortex effect
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height * 0.5 // Start in top half
        this.size = Math.random() * 3 + 1 // Smaller particles
        this.speedX = Math.random() * 2 - 1 // Reduced speed
        this.speedY = Math.random() * 3 + 1 // Reduced speed

        // Green color palette with varying opacity
        const greenHue = 142 // Base green hue
        const saturation = Math.floor(Math.random() * 30) + 70 // 70-100%
        const lightness = Math.floor(Math.random() * 30) + 40 // 40-70%
        this.alpha = Math.random() * 0.5 + 0.1 // 0.1-0.6 (reduced opacity)
        this.color = `hsla(${greenHue}, ${saturation}%, ${lightness}%, ${this.alpha})`
      }

      update() {
        // Create a vortex effect
        const centerX = canvas.width / 2
        const distanceX = this.x - centerX

        // Particles move down and get pulled toward center
        this.y += this.speedY

        // Vortex effect - stronger pull as particles descend
        const pullFactor = (this.y / canvas.height) * 0.03 // Reduced pull
        this.x -= distanceX * pullFactor

        // Add some randomness to movement
        this.x += this.speedX

        // When particles reach bottom, create water ripple effect
        if (this.y > canvas.height * 0.8) {
          // Slow down vertical speed
          this.speedY *= 0.95

          // Spread horizontally
          const spreadFactor = (this.y / canvas.height - 0.8) * 5 // Reduced spread
          this.speedX = Math.sin(this.x * 0.01) * spreadFactor

          // Fade out
          this.alpha *= 0.98
        }

        // Reset particles when they fade out or go off screen
        if (this.alpha < 0.01 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height * 0.2
          this.speedY = Math.random() * 3 + 1 // Reduced speed
          this.alpha = Math.random() * 0.5 + 0.1 // Reduced opacity
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Reduced glow effect
        ctx.shadowBlur = 5
        ctx.shadowColor = "rgba(0, 220, 130, 0.3)"
      }
    }

    // Create particle array - fewer particles for better performance
    const particleCount = isReducedMotion
      ? 20 // Very few particles for reduced motion
      : Math.min(50, Math.floor(window.innerWidth / 20)) // Fewer particles

    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    // Animation loop with performance optimizations
    let lastTime = 0
    const fps = 30 // Limit to 30 FPS for better performance
    const fpsInterval = 1000 / fps

    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime

      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval)

        // Clear canvas with slight opacity to create trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)" // Increased opacity for faster clearing
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Update and draw particles
        particlesRef.current.forEach((particle) => {
          particle.update()
          particle.draw()
        })

        // Add connecting lines between nearby particles - only for some particles
        // This is computationally expensive, so we limit it
        if (!isReducedMotion) {
          const lineInterval = Math.ceil(particlesRef.current.length / 10)
          for (let i = 0; i < particlesRef.current.length; i += lineInterval) {
            for (let j = i + lineInterval; j < particlesRef.current.length; j += lineInterval) {
              const dx = particlesRef.current[i].x - particlesRef.current[j].x
              const dy = particlesRef.current[i].y - particlesRef.current[j].y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 80) {
                // Reduced connection distance
                ctx.beginPath()
                ctx.strokeStyle = `rgba(0, 220, 130, ${0.05 * (1 - distance / 80)})` // Reduced opacity
                ctx.lineWidth = 0.5
                ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
                ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
                ctx.stroke()
              }
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isReducedMotion])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden will-change-transform">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
    </div>
  )
}
