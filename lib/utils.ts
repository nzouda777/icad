import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Throttle function to limit how often a function can be called
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  let lastResult: ReturnType<T>

  return function (this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      inThrottle = true

      setTimeout(() => (inThrottle = false), limit)

      lastResult = func.apply(this, args)
    }
  }
}

// Debounce function to delay execution until after a wait period
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}
