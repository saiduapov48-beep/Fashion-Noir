import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')`,
          filter: "brightness(0.7) sepia(0.15)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 pb-16 lg:pb-24 w-full max-w-3xl">
        <h1 className="font-serif text-6xl sm:text-7xl lg:text-[90px] font-light text-primary-foreground leading-[0.95] tracking-tight text-balance">
          DRESSED IN SILENCE
        </h1>
        <div className="mt-8">
          <Link
            href="/catalog"
            className="group inline-flex items-center gap-3 text-[10px] font-light tracking-[0.15em] text-primary-foreground/80 hover:text-accent transition-colors"
          >
            DISCOVER THE COLLECTION
            <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform text-accent" />
          </Link>
        </div>
      </div>
    </section>
  )
}
