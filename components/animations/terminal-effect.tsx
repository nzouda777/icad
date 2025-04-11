"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface TerminalEffectProps {
  text: string[]
  typingSpeed?: number
  cursorBlinkSpeed?: number
  className?: string
  onComplete?: () => void
  autoStart?: boolean
  loop?: boolean
}

export function TerminalEffect({
  text,
  typingSpeed = 50,
  cursorBlinkSpeed = 530,
  className = "",
  onComplete,
  autoStart = true,
  loop = false,
}: TerminalEffectProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isTyping, setIsTyping] = useState(autoStart)
  const [isComplete, setIsComplete] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, cursorBlinkSpeed)

    return () => clearInterval(cursorInterval)
  }, [cursorBlinkSpeed])

  // Handle typing effect
  useEffect(() => {
    if (!isTyping || text.length === 0) return

    const typeNextChar = () => {
      if (currentLine >= text.length) {
        setIsTyping(false)
        setIsComplete(true)
        onComplete?.()

        if (loop) {
          setTimeout(() => {
            setDisplayedText([])
            setCurrentLine(0)
            setCurrentChar(0)
            setIsTyping(true)
            setIsComplete(false)
          }, 2000)
        }
        return
      }

      const currentLineText = text[currentLine]

      if (currentChar >= currentLineText.length) {
        // Move to next line
        setCurrentLine((prev) => prev + 1)
        setCurrentChar(0)
        setDisplayedText((prev) => [...prev, currentLineText])
        return
      }

      // Type next character with variable speed
      const randomDelay = Math.random() * 0.5 + 0.5 // Between 0.5 and 1
      const timeout = setTimeout(() => {
        setCurrentChar((prev) => prev + 1)
      }, typingSpeed * randomDelay)

      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(typeNextChar, typingSpeed)
    return () => clearTimeout(timeout)
  }, [isTyping, currentLine, currentChar, text, typingSpeed, onComplete, loop])

  // Current partially typed line
  const currentPartialLine = currentLine < text.length ? text[currentLine].substring(0, currentChar) : ""

  return (
    <div
      className={`font-mono text-sm md:text-base bg-black/80 text-green-400 p-4 rounded-md overflow-hidden ${className}`}
      ref={containerRef}
      onClick={() => !isTyping && !isComplete && setIsTyping(true)}
    >
      {/* Previously completed lines */}
      {displayedText.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap break-all">
          <span className="text-green-500">$ </span>
          {line}
        </div>
      ))}

      {/* Current line being typed */}
      {currentLine < text.length && (
        <div className="whitespace-pre-wrap break-all">
          <span className="text-green-500">$ </span>
          {currentPartialLine}
          <motion.span
            animate={{ opacity: cursorVisible ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className="inline-block w-2 h-4 bg-green-400 ml-0.5"
          />
        </div>
      )}

      {/* Prompt to start typing if not auto-started */}
      {!isTyping && !isComplete && !autoStart && (
        <div className="mt-2 text-green-300 text-xs animate-pulse">Cliquez pour commencer le piratage...</div>
      )}
    </div>
  )
}
