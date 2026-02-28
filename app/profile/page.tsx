"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { useFavorites } from "@/context/favorites-context"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { LogOut, ShoppingBag, Heart, Package, ChevronRight, User } from "lucide-react"

type Tab = "overview" | "orders" | "wishlist" | "settings"

export default function ProfilePage() {
  const { user, isAuthenticated, logout } = useAuth()
  const { count: cartCount } = useCart()
  const { favorites } = useFavorites()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>("overview")

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) return null

  const favoriteProducts = products.filter(p => favorites.includes(p.id))

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "overview", label: "OVERVIEW", icon: <User size={14} strokeWidth={1.5} /> },
    { key: "orders", label: "ORDERS", icon: <Package size={14} strokeWidth={1.5} /> },
    { key: "wishlist", label: "WISHLIST", icon: <Heart size={14} strokeWidth={1.5} /> },
    { key: "settings", label: "SETTINGS", icon: <ChevronRight size={14} strokeWidth={1.5} /> },
  ]

  return (
    <div className="pt-[60px] min-h-screen page-enter">
      {/* Profile header */}
      <div className="relative h-48 lg:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-6 flex items-end gap-6">
          <div className="w-20 h-20 flex items-center justify-center bg-accent text-accent-foreground font-serif text-2xl font-light">
            {user.name.split(" ").map(n => n[0]).join("").toUpperCase()}
          </div>
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl font-light text-primary-foreground">
              {user.name}
            </h1>
            <p className="text-[10px] font-light tracking-[0.15em] text-primary-foreground/60 mt-1">
              MEMBER SINCE {user.memberSince.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="border-b border-border px-6 lg:px-12">
        <div className="flex gap-0 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-6 py-4 text-[10px] font-light tracking-[0.15em] border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="px-6 lg:px-12 py-10 lg:py-16">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Stat cards */}
              <div className="border border-border p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={18} strokeWidth={1.5} className="text-accent" />
                  <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground">CART ITEMS</span>
                </div>
                <span className="font-serif text-3xl font-light text-foreground">{cartCount}</span>
              </div>
              <div className="border border-border p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Heart size={18} strokeWidth={1.5} className="text-accent" />
                  <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground">WISHLIST</span>
                </div>
                <span className="font-serif text-3xl font-light text-foreground">{favorites.length}</span>
              </div>
              <div className="border border-border p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Package size={18} strokeWidth={1.5} className="text-accent" />
                  <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground">ORDERS</span>
                </div>
                <span className="font-serif text-3xl font-light text-foreground">0</span>
              </div>
            </div>

            {/* Account details */}
            <div className="border border-border p-6 lg:p-8">
              <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-6">ACCOUNT DETAILS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-light tracking-[0.1em] text-muted-foreground/60 mb-1">NAME</p>
                  <p className="text-sm font-light text-foreground">{user.name}</p>
                </div>
                <div>
                  <p className="text-[10px] font-light tracking-[0.1em] text-muted-foreground/60 mb-1">EMAIL</p>
                  <p className="text-sm font-light text-foreground">{user.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-light tracking-[0.1em] text-muted-foreground/60 mb-1">MEMBER SINCE</p>
                  <p className="text-sm font-light text-foreground">{user.memberSince}</p>
                </div>
                <div>
                  <p className="text-[10px] font-light tracking-[0.1em] text-muted-foreground/60 mb-1">MEMBERSHIP</p>
                  <p className="text-sm font-light text-accent">NOIR MEMBER</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/cart"
                className="flex items-center justify-between border border-border p-4 hover:border-accent transition-colors group"
              >
                <span className="text-xs font-light text-foreground flex items-center gap-3">
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  View Cart
                </span>
                <ChevronRight size={14} strokeWidth={1.5} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
              <Link
                href="/catalog"
                className="flex items-center justify-between border border-border p-4 hover:border-accent transition-colors group"
              >
                <span className="text-xs font-light text-foreground flex items-center gap-3">
                  <Package size={16} strokeWidth={1.5} />
                  Continue Shopping
                </span>
                <ChevronRight size={14} strokeWidth={1.5} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <div className="fade-in-up text-center py-20">
            <Package size={40} strokeWidth={1} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-serif text-xl font-light text-foreground mb-2">No orders yet</h3>
            <p className="text-xs font-light text-muted-foreground mb-6">Your order history will appear here</p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-8 py-3 text-[10px] font-light tracking-[0.15em] hover:bg-foreground/90 transition-colors"
            >
              EXPLORE CATALOG
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        )}

        {/* Wishlist */}
        {activeTab === "wishlist" && (
          <div className="fade-in-up">
            {favoriteProducts.length === 0 ? (
              <div className="text-center py-20">
                <Heart size={40} strokeWidth={1} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="font-serif text-xl font-light text-foreground mb-2">Your wishlist is empty</h3>
                <p className="text-xs font-light text-muted-foreground mb-6">Save items you love to your wishlist</p>
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-8 py-3 text-[10px] font-light tracking-[0.15em] hover:bg-foreground/90 transition-colors"
                >
                  DISCOVER PRODUCTS
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {favoriteProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div className="fade-in-up max-w-lg">
            <div className="border border-border p-6 lg:p-8 mb-6">
              <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-6">EDIT PROFILE</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">FULL NAME</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <button className="self-start bg-foreground text-primary-foreground px-8 py-3 text-[10px] font-light tracking-[0.15em] hover:bg-foreground/90 transition-colors">
                  UPDATE PROFILE
                </button>
              </div>
            </div>

            {/* Danger zone */}
            <div className="border border-destructive/30 p-6 lg:p-8">
              <h3 className="text-[10px] font-light tracking-[0.15em] text-destructive mb-4">DANGER ZONE</h3>
              <p className="text-xs font-light text-muted-foreground mb-6">
                Signing out will end your current session. Your cart and wishlist data will be preserved.
              </p>
              <button
                onClick={() => {
                  logout()
                  router.push("/")
                }}
                className="flex items-center gap-2 border border-destructive/50 text-destructive px-6 py-3 text-[10px] font-light tracking-[0.15em] hover:bg-destructive hover:text-destructive-foreground transition-all"
              >
                <LogOut size={14} strokeWidth={1.5} />
                SIGN OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ArrowRight({ size, strokeWidth }: { size: number; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
