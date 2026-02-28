"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Heart } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)
  const { toggleFavorite, isFavorite } = useFavorites()
  const fav = isFavorite(product.id)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <Image
            src={product.imageHover}
            alt={`${product.name} alternate view`}
            fill
            className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-accent text-accent-foreground text-[9px] font-light tracking-[0.15em] px-2 py-1">
                NEW
              </span>
            )}
            {product.isSale && (
              <span className="bg-foreground text-primary-foreground text-[9px] font-light tracking-[0.15em] px-2 py-1">
                SALE
              </span>
            )}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-1">
            {product.brand}
          </p>
          <h3 className="text-sm font-normal text-foreground mb-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-light text-foreground">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs font-light text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {/* Size dots */}
          <div className="flex items-center gap-1.5 mt-2">
            {product.sizes.slice(0, 5).map((size) => (
              <span
                key={size}
                className={`w-1.5 h-1.5 rounded-full ${
                  product.outOfStock.includes(size) ? "bg-border" : "bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </Link>

      {/* Favorite button */}
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggleFavorite(product.id)
        }}
        className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
          fav
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        } hover:text-accent`}
        aria-label={fav ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          size={16}
          strokeWidth={1.5}
          className={fav ? "fill-accent text-accent" : "text-foreground"}
        />
      </button>
    </div>
  )
}
