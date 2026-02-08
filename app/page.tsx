import { FloatingHearts } from "@/components/floating-hearts"
import { ValentineCard } from "@/components/valentine-card"

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 py-12">
      <FloatingHearts />
      <div className="relative z-10 w-full max-w-lg">
        <ValentineCard />
      </div>
    </main>
  )
}
