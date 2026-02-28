import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    title: "LV Skate Collection",
    subtitle: "WHERE SKATE CULTURE MEETS HAUTE COUTURE",
    description: "Designed by Pharrell Williams, the LV Skate sneaker bridges the raw energy of skateboarding with the refined craftsmanship of Louis Vuitton. Available in every colorway.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&q=80",
    href: "/catalog?category=footwear",
    reverse: false,
  },
  {
    title: "Nike Air Max 95",
    subtitle: "THE ANATOMY OF AIR",
    description: "Inspired by the human body, the Air Max 95 graduated panel design and visible Air units have been a staple of sneaker culture since 1995. Every colorway, every story.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
    href: "/catalog?category=footwear",
    reverse: true,
  },
]

export function CollectionsSection() {
  return (
    <section className="px-6 lg:px-12 py-20 lg:py-28 bg-background">
      <div className="w-10 h-[2px] bg-accent mb-6" />
      <h2 className="font-serif text-3xl lg:text-[42px] italic font-light text-foreground mb-16">
        Collections
      </h2>

      <div className="flex flex-col gap-24">
        {collections.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col ${col.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover hover:brightness-110 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-3">
                {col.subtitle}
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-6">
                {col.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground mb-8 max-w-md">
                {col.description}
              </p>
              <Link
                href={col.href}
                className="group inline-flex items-center gap-3 text-[10px] font-light tracking-[0.15em] text-foreground hover:text-accent transition-colors"
              >
                EXPLORE COLLECTION
                <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
