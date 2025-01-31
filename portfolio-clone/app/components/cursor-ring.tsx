'use client'

import { useEffect, useRef } from 'react'

export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null)
  const text = "View Project • "
  const letters = text.split("")
  const angleStep = (360 / letters.length)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ringRef.current) {
        const rect = ringRef.current.parentElement?.getBoundingClientRect();
        if (rect) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          ringRef.current.style.setProperty('--x', `${x}px`);
          ringRef.current.style.setProperty('--y', `${y}px`);
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={ringRef} className="cursor-ring">
      <div className="cursor-text">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="cursor-letter"
            style={{
              transform: `rotate(${angleStep * i}deg)`
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

