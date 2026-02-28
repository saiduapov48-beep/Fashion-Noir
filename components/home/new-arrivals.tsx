"use client"

import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function NewArrivals() {
  const newProducts = products.filter(p => p.isNew).slice(0, 4)

  return (
    <section className="px-6 lg:px-12 py-20 lg:py-28 bg-background">
      {/* Decorative gold line */}
      <div className="w-10 h-[2px] bg-accent mb-6" />
      <h2 className="font-serif text-3xl lg:text-[42px] italic font-light text-foreground mb-12">
        New Arrivals
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
