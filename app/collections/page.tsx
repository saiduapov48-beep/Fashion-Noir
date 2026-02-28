'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CollectionsPage() {
  const collections = [
    {
      name: "LV Skate",
      description: "Iconic silhouettes reimagined with contemporary flair. The LV Skate collection represents the pinnacle of luxury streetwear footwear.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      href: "/catalog?brand=lv-skate",
    },
    {
      name: "Nike Air Max 95",
      description: "Legendary Air Max 95 in every colorway. From classic black to bold seasonal editions, explore the most coveted silhouette.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      href: "/catalog?brand=nike-airmax",
    },
    {
      name: "Limited Editions",
      description: "Exclusive releases and collaborations. Each piece is a collector's item, available in strictly limited quantities.",
      image: "https://images.unsplash.com/photo-1600181837637-6310b3ecfb1d?w=800&q=80",
      href: "/catalog?category=limited",
    },
    {
      name: "Seasonal Collections",
      description: "Curated selections for every season. Discover the latest trends and timeless classics handpicked by our design team.",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      href: "/catalog?category=seasonal",
    },
  ]

  return (
    <div className="pt-[60px] min-h-screen bg-background page-enter">
      {/* Hero */}
      <section className="border-b border-border py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="w-10 h-[2px] bg-accent mb-8" />
          <h1 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Collections
          </h1>
          <p className="text-lg font-light text-muted-foreground leading-relaxed">
            Explore our curated collections, each telling a story of craftsmanship and timeless style.
          </p>
        </div>
      </section>

      {/* Collections grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection, idx) => (
              <Link
                key={idx}
                href={collection.href}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-foreground mb-3 group-hover:text-accent transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-accent mt-1 ml-4 flex-shrink-0 group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured section */}
      <section className="py-20 px-6 lg:px-12 bg-muted/20 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light text-foreground mb-6">
            New Arrivals
          </h2>
          <p className="text-muted-foreground font-light mb-10 leading-relaxed">
            Check back regularly for fresh drops and seasonal releases. Our new arrivals feature the latest colorways and exclusive collaborations.
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-[10px] font-light tracking-[0.15em] hover:bg-foreground hover:text-background transition-all"
          >
            VIEW ALL PRODUCTS
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
