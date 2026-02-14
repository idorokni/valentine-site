"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { HeartBurst } from "@/components/heart-burst"

const NO_MESSAGES = [
  "לא",
  "נראלך",
  "נראלךךך",
  "זהו דייי",
  "חלאס זהו לא מצחיק",
  "אני ממש אוהב אותך פליז",
  "פליזזזז",
  "אני ממש ממש מתחנן",
  "פליזפליזפליז",
  "אבל די נוווווו",
  "אני חולם על היום הזה כבר מלא זמן נוווו",
  "בבקשה",
  "ממש ממש בבקשה יפה",
]

export function ValentineCard() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const yesScale = Math.min(1 + noCount * 0.2, 3)
  const noScale = Math.max(1 - noCount * 0.1, 0.3)

  const handleNoClick = useCallback(() => {
    setNoCount((prev) => prev + 1)
  }, [])

  const handleYesClick = useCallback(() => {
    setYesPressed(true)
  }, [])

  const noText = NO_MESSAGES[Math.min(noCount, NO_MESSAGES.length - 1)]

  if (yesPressed) {
    return (
      <>
        <HeartBurst active={yesPressed} />
        <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
          <div className="text-7xl md:text-9xl animate-bounce">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary w-28 h-28 md:w-40 md:h-40"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground text-center text-balance">
            {"אני אוהב אותך הכי בעולם את הבחורה הכי מדהימה שהכרתי ואני לא מאמין שאנחנו חוגגים ביחד את היום הזה"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            {"את הדבר הכי טוב שקרה לי ואני לא יכול לחכות לבלות איתך את היום הזה"}
          </p>
        </div>
      </>
    )
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary w-24 h-24 md:w-32 md:h-32 animate-pulse"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <h1 className="text-3xl md:text-6xl font-serif font-bold text-foreground text-center text-balance leading-tight">
        ?תהיי הולנטיין שלי
      </h1>

      <p className="text-base md:text-lg text-muted-foreground text-center max-w-md leading-relaxed">
        {"את הבחורה הכי מדהימה שיש, אהבת חיי, החברה הכי טובה שלי, הבית שלי, הכוח שלי, האושר שלי, ובתקווה גם הדייט שחלמתי עליו ליום האהבה"}
      </p>

      <div className="flex items-center gap-4 mt-4 flex-wrap justify-center">
        <Button
          onClick={handleYesClick}
          className="bg-primary text-primary-foreground font-bold transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
          style={{
            transform: `scale(${yesScale})`,
            fontSize: `${Math.min(1 + noCount * 0.1, 1.8)}rem`,
            padding: `${0.75 + noCount * 0.1}rem ${1.5 + noCount * 0.2}rem`,
          }}
        >
          !!!כן
        </Button>

        <Button
          ref={noButtonRef}
          onClick={handleNoClick}
          variant="outline"
          className="border-primary/30 text-foreground hover:bg-secondary transition-all duration-300 ease-out bg-transparent"
          style={{
            transform: `scale(${noScale})`,
            opacity: Math.max(1 - noCount * 0.08, 0.4),
          }}
        >
          {noText}
        </Button>
      </div>

      {noCount > 0 && (
        <p className="text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-300 text-center">
          {noCount < 5
            ? "תלחצי כברררר המשך היום נמצא בלחיצת כפתור"
            : noCount < 10
              ? "יהיה לנו כל כך כיף אני אוהב אותך ממש רק תלחצי כברררר"
              : "חחחחחחחח נו יאללה כבר"}
        </p>
      )}
    </div>
  )
}
