'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in'
  duration?: 'fast' | 'normal' | 'slow'
}

export function AnimateIn({ 
  children, 
  className, 
  delay = 0, 
  animation = 'fade-up',
  duration = 'normal'
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transform',
        animation === 'fade-up' && 'translate-y-8',
        duration === 'fast' && 'transition-all duration-500 ease-out',
        duration === 'normal' && 'transition-all duration-700 ease-out',
        duration === 'slow' && 'transition-all duration-1000 ease-out',
        className
      )}
    >
      {children}
    </div>
  )
}

