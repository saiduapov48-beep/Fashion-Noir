"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { SlidersHorizontal, X } from "lucide-react"

const categories = ["all", "tops", "bottoms", "outerwear", "footwear", "accessories"] as const
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "39", "40", "41", "42", "43", "44", "45", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "US 13", "ONE SIZE"] as const
const sortOptions = [
  { value: "default", label: "DEFAULT" },
  { value: "price-asc", label: "PRICE LOW\u2013HIGH" },
  { value: "price-desc", label: "PRICE HIGH\u2013LOW" },
  { value: "new", label: "NEW FIRST" },
] as const

export function CatalogContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") || "all"

  const [category, setCategory] = useState<string>(categoryParam)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sort, setSort] = useState<string>("default")
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = category === "all" ? [...products] : products.filter(p => p.category === category)

    if (selectedSize) {
      list = list.filter(p => p.sizes.includes(selectedSize))
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list.sort((a, b) => b.price - a.price)
        break
      case "new":
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
    }

    return list
  }, [category, selectedSize, sort])

  // Get relevant sizes for the current category
  const relevantSizes = useMemo(() => {
    const categoryProducts = category === "all" ? products : products.filter(p => p.category === category)
    const allSizes = new Set<string>()
    categoryProducts.forEach(p => p.sizes.forEach(s => allSizes.add(s)))
    return Array.from(allSizes)
  }, [category])

  return (
    <div className="pt-[60px] min-h-screen">
      <div className="px-6 lg:px-12 py-12 lg:py-20">
        {/* Page heading */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div>
            <div className="w-10 h-[2px] bg-accent mb-6" />
            <h1 className="font-serif text-4xl lg:text-[56px] font-light text-foreground">
              ALL PRODUCTS
            </h1>
          </div>
          <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground">
            SHOWING {filtered.length} OF {products.length} PRODUCTS
          </span>
        </div>

        <div className="flex gap-12">
          {/* Filter sidebar (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {/* Category */}
            <div className="mb-10">
              <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">CATEGORY</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left text-xs font-light tracking-[0.1em] py-1 transition-colors ${
                      category === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.toUpperCase()}
                    {category === cat && <span className="ml-2 text-accent">/</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-10">
              <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {relevantSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`text-[10px] font-light tracking-wider px-2.5 py-1.5 border transition-colors ${
                      selectedSize === size
                        ? "border-accent text-accent"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">SORT</h3>
              <div className="flex flex-col gap-2">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSort(opt.value)}
                    className={`text-left text-xs font-light tracking-[0.1em] py-1 transition-colors ${
                      sort === opt.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                    {sort === opt.value && <span className="ml-2 text-accent">/</span>}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-foreground text-primary-foreground px-6 py-3 flex items-center gap-2 text-[10px] font-light tracking-[0.15em]"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            FILTERS
          </button>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 bg-background p-6 overflow-auto lg:hidden page-enter">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl font-light">Filters</h2>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">CATEGORY</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`text-[10px] font-light tracking-wider px-3 py-2 border transition-colors ${
                        category === cat
                          ? "border-accent text-accent"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">SIZE</h3>
                <div className="flex flex-wrap gap-2">
                  {relevantSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`text-[10px] font-light tracking-wider px-2.5 py-1.5 border transition-colors ${
                        selectedSize === size
                          ? "border-accent text-accent"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-8">
                <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">SORT</h3>
                <div className="flex flex-col gap-2">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSort(opt.value)}
                      className={`text-left text-xs font-light tracking-[0.1em] py-1 ${
                        sort === opt.value ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setFilterOpen(false)}
                className="w-full bg-foreground text-primary-foreground py-3 text-[10px] font-light tracking-[0.15em]"
              >
                SHOW {filtered.length} PRODUCTS
              </button>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl font-light text-muted-foreground">No products found</p>
                <p className="text-xs font-light text-muted-foreground mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
