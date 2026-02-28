"use client"

import { use, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { useFavorites } from "@/context/favorites-context"
import { ProductCard } from "@/components/product-card"
import { Heart, ChevronRight } from "lucide-react"

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [showImage, setShowImage] = useState<"main" | "hover">("main")
  const [added, setAdded] = useState(false)

  if (!product) return notFound()

  const related = getRelatedProducts(product)
  const fav = isFavorite(product.id)

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }
    if (!selectedSize) return
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      brand: product.brand,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-[60px] page-enter">
      <div className="px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">HOME</Link>
          <ChevronRight size={10} strokeWidth={1.5} />
          <Link href="/catalog" className="hover:text-foreground transition-colors">CATALOG</Link>
          <ChevronRight size={10} strokeWidth={1.5} />
          <span className="text-foreground">{product.name.toUpperCase()}</span>
        </nav>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
              <Image
                src={showImage === "main" ? product.image : product.imageHover}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[9px] font-light tracking-[0.15em] px-3 py-1">
                  NEW
                </span>
              )}
              {product.isSale && (
                <span className="absolute top-4 left-20 bg-foreground text-primary-foreground text-[9px] font-light tracking-[0.15em] px-3 py-1">
                  SALE
                </span>
              )}
            </div>
            {/* Image toggle thumbnails */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowImage("main")}
                className={`relative w-20 h-24 border transition-colors overflow-hidden ${
                  showImage === "main" ? "border-accent" : "border-border"
                }`}
              >
                <Image src={product.image} alt="" fill className="object-cover" sizes="80px" />
              </button>
              <button
                onClick={() => setShowImage("hover")}
                className={`relative w-20 h-24 border transition-colors overflow-hidden ${
                  showImage === "hover" ? "border-accent" : "border-border"
                }`}
              >
                <Image src={product.imageHover} alt="" fill className="object-cover" sizes="80px" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <p className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">
              {product.brand}
            </p>
            <h1 className="font-serif text-3xl lg:text-[42px] font-light text-foreground leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-light text-foreground">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-light text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Category badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground border border-border px-3 py-1">
                {product.category.toUpperCase()}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className="w-4 h-4 border border-border"
                  style={{ backgroundColor: product.colorHex }}
                />
                <span className="text-xs font-light text-muted-foreground">{product.color}</span>
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-4">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const oos = product.outOfStock.includes(size)
                  return (
                    <button
                      key={size}
                      disabled={oos}
                      onClick={() => setSelectedSize(size)}
                      className={`relative min-w-[48px] px-3 py-2.5 border text-xs font-light tracking-wider transition-all ${
                        oos
                          ? "border-border text-muted-foreground/30 cursor-not-allowed"
                          : selectedSize === size
                          ? "border-accent text-accent bg-accent/5"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                      {oos && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-full h-[1px] bg-muted-foreground/30 rotate-[-20deg]" />
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
              {!selectedSize && (
                <p className="text-[10px] font-light text-muted-foreground mt-2">Please select a size</p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm font-light leading-relaxed text-muted-foreground mb-10">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-4 text-[10px] font-light tracking-[0.15em] transition-all ${
                  added
                    ? "bg-accent text-accent-foreground"
                    : selectedSize
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "bg-foreground/50 text-primary-foreground/50 cursor-not-allowed"
                }`}
              >
                {added ? "ADDED TO CART" : "ADD TO CART"}
              </button>
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`w-full py-4 border text-[10px] font-light tracking-[0.15em] flex items-center justify-center gap-2 transition-all ${
                  fav
                    ? "border-accent text-accent"
                    : "border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                <Heart size={14} strokeWidth={1.5} className={fav ? "fill-accent" : ""} />
                {fav ? "IN WISHLIST" : "ADD TO WISHLIST"}
              </button>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="w-10 h-[2px] bg-accent mb-6" />
            <h2 className="font-serif text-3xl lg:text-[42px] italic font-light text-foreground mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
