'use client'

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { Search as SearchIcon, X } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <div className="pt-[60px] min-h-screen bg-background page-enter">
      {/* Search header */}
      <section className="border-b border-border py-12 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="w-10 h-[2px] bg-accent mb-8" />
          <h1 className="font-serif text-4xl font-light text-foreground mb-8">
            Search Products
          </h1>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, category, or style..."
              className="w-full bg-transparent border-b-2 border-foreground py-4 text-base font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors pr-12"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 lg:px-12">
        {searchQuery.trim() === "" ? (
          <div className="max-w-3xl mx-auto text-center py-20">
            <SearchIcon size={48} className="mx-auto text-muted-foreground mb-6 opacity-40" />
            <h2 className="font-serif text-2xl font-light text-foreground mb-4">
              Start Searching
            </h2>
            <p className="text-muted-foreground font-light">
              Enter a keyword to find products that match your style.
            </p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="max-w-3xl mx-auto text-center py-20">
            <h2 className="font-serif text-2xl font-light text-foreground mb-4">
              No Results Found
            </h2>
            <p className="text-muted-foreground font-light mb-10">
              {`"${searchQuery}" didn't match any products. Try different keywords.`}
            </p>
            <Link
              href="/catalog"
              className="inline-block text-accent hover:text-foreground transition-colors text-sm font-light tracking-[0.1em]"
            >
              BROWSE ALL PRODUCTS
            </Link>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-light text-muted-foreground tracking-[0.1em] mb-8">
              {`FOUND ${filteredProducts.length} RESULT${filteredProducts.length !== 1 ? "S" : ""}`}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
