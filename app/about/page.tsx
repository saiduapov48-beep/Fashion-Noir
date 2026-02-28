'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-[60px] min-h-screen bg-background page-enter">
      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80)",
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="w-10 h-[2px] bg-accent mx-auto mb-8" />
          <h1 className="font-serif text-6xl lg:text-7xl font-light text-foreground mb-6 text-balance">
            About MAISON NOIR
          </h1>
          <p className="text-lg font-light text-muted-foreground mb-8 leading-relaxed">
            Crafting luxury footwear and accessories for those who understand that true style is timeless elegance.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 px-6 lg:px-12 bg-muted/20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-light text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Founded in 2015, MAISON NOIR emerged from a vision to create footwear that transcends trends. Each piece is meticulously crafted using premium materials, blending European heritage with contemporary design.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              We believe luxury should be accessible without compromising quality. Our collections feature iconic silhouettes from LV Skate and Nike Air Max 95, reimagined in every colorway to suit the modern connoisseur.
            </p>
          </div>
          <div className="aspect-square bg-gradient-to-br from-accent/10 to-muted rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543163521-9f539c45db4d?w=600&q=80"
              alt="MAISON NOIR atelier"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-light text-foreground mb-4">
              Our Values
            </h2>
            <div className="w-10 h-[2px] bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                description: "Every pair is constructed with meticulous attention to detail and premium materials.",
              },
              {
                title: "Innovation",
                description: "We blend timeless design with contemporary aesthetics to create modern classics.",
              },
              {
                title: "Sustainability",
                description: "Ethical sourcing and sustainable practices define our production process.",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center border-t border-border pt-8">
                <h3 className="font-serif text-2xl font-light text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-6 lg:px-12 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light mb-6">
            Explore Our Collections
          </h2>
          <p className="text-primary-foreground/80 font-light mb-10">
            Discover the perfect pair that defines your style.
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 border border-primary-foreground px-8 py-4 text-[10px] font-light tracking-[0.15em] hover:bg-primary-foreground hover:text-foreground transition-all"
          >
            VIEW COLLECTION
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
