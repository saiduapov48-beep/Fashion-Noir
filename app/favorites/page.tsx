'use client'

import { useState } from 'react'
import { useFavorites } from '@/context/favorites-context'
import { useAuth } from '@/context/auth-context'
import Link from 'next/link'
import { ArrowLeft, Heart } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { products as ALL_PRODUCTS } from '@/lib/products'

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
        <div className="text-center max-w-md">
          <Heart size={48} className="mx-auto mb-6 text-accent" />
          <h1 className="font-serif text-4xl mb-4 text-foreground">Please Sign In</h1>
          <p className="text-muted-foreground mb-8 font-light">
            Sign in to view and manage your saved items.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-foreground text-background font-light tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6">
        <div className="text-center max-w-md">
          <Heart size={48} className="mx-auto mb-6 text-muted-foreground" />
          <h1 className="font-serif text-4xl mb-4 text-foreground">No Favorites Yet</h1>
          <p className="text-muted-foreground mb-8 font-light">
            Start adding items to your wishlist to save them for later.
          </p>
          <Link
            href="/catalog"
            className="inline-block px-8 py-3 bg-foreground text-background font-light tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    )
  }

  const favoriteProducts = ALL_PRODUCTS.filter((p) => favorites.includes(p.id))

  return (
    <div className="pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
            <span className="text-xs tracking-widest">BACK</span>
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground">MY WISHLIST</h1>
          <span className="text-xs tracking-widest text-muted-foreground ml-auto">
            {favorites.length} ITEM{favorites.length !== 1 ? 'S' : ''}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
