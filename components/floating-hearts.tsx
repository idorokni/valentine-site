"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
  type: "image" | "svg"
  image?: string
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  const images = ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img5.png"]

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => {
      const isImage = Math.random() < 0.7 // 50% chance image or SVG
      return {
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 140 + 100, // 100-200px
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.4 + 0.6,
        type: isImage ? "image" : "svg",
        image: isImage ? images[Math.floor(Math.random() * images.length)] : undefined,
      }
    })

    setHearts(generated)
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.x}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          {heart.type === "image" ? (
            <img
              src={heart.image}
              alt=""
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
              width={heart.size / 2}
              height={heart.size / 2}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }
      `}</style>
    </div>
  )
}
