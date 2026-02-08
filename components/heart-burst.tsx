"use client"

import React from "react"

import { useEffect, useState } from "react"

interface BurstHeart {
  id: number
  x: number
  y: number
  size: number
  angle: number
  distance: number
  duration: number
}

export function HeartBurst({ active }: { active: boolean }) {
  const [hearts, setHearts] = useState<BurstHeart[]>([])

  useEffect(() => {
    if (!active) return
    const burst: BurstHeart[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 20,
      y: 50 + (Math.random() - 0.5) * 20,
      size: Math.random() * 30 + 12,
      angle: Math.random() * 360,
      distance: Math.random() * 300 + 100,
      duration: Math.random() * 1.5 + 1,
    }))
    setHearts(burst)
  }, [active])

  if (!active) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-burst"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            "--angle": `${heart.angle}deg`,
            "--distance": `${heart.distance}px`,
            animationDuration: `${heart.duration}s`,
          } as React.CSSProperties}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
            width={heart.size}
            height={heart.size}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes burst {
          0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(
                calc(cos(var(--angle)) * var(--distance)),
                calc(sin(var(--angle)) * var(--distance))
              )
              scale(1.2)
              rotate(720deg);
            opacity: 0;
          }
        }
        .animate-burst {
          animation: burst ease-out forwards;
        }
      `}</style>
    </div>
  )
}
