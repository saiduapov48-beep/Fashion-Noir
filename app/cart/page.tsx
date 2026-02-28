"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { Minus, Plus, X, ShoppingBag, ArrowRight, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, total, count } = useCart()
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const shipping = total > 500 ? 0 : 25
  const discount = promoApplied ? total * 0.1 : 0
  const grandTotal = total - discount + shipping

  const handleCheckout = () => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }
    // Demo checkout
    clearCart()
    router.push("/profile")
  }

  return (
    <div className="pt-[60px] min-h-screen page-enter">
      <div className="px-6 lg:px-12 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-10">
          <Link href="/" className="hover:text-foreground transition-colors">HOME</Link>
          <ChevronRight size={10} strokeWidth={1.5} />
          <span className="text-foreground">SHOPPING BAG</span>
        </nav>

        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="w-10 h-[2px] bg-accent mb-6" />
            <h1 className="font-serif text-3xl lg:text-[42px] font-light text-foreground">
              Shopping Bag
            </h1>
          </div>
          {items.length > 0 && (
            <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground">
              {count} {count === 1 ? "ITEM" : "ITEMS"}
            </span>
          )}
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="text-center py-20 lg:py-32">
            <ShoppingBag size={48} strokeWidth={1} className="mx-auto text-muted-foreground mb-6" />
            <h2 className="font-serif text-2xl font-light text-foreground mb-2">
              Your bag is empty
            </h2>
            <p className="text-xs font-light text-muted-foreground mb-10 max-w-sm mx-auto leading-relaxed">
              It appears you have not added any items to your bag yet. Explore our collections to discover something extraordinary.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-10 py-4 text-[10px] font-light tracking-[0.15em] hover:bg-foreground/90 transition-colors"
            >
              EXPLORE CATALOG
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Cart items */}
            <div className="flex-1">
              <div className="border-t border-border">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 lg:gap-6 py-6 border-b border-border"
                  >
                    {/* Image */}
                    <Link href={`/product/${item.id}`} className="flex-shrink-0">
                      <div className="relative w-24 h-32 lg:w-32 lg:h-40 bg-secondary overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-1">
                          {item.brand}
                        </p>
                        <Link
                          href={`/product/${item.id}`}
                          className="text-sm font-normal text-foreground hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-[10px] font-light tracking-[0.1em] text-muted-foreground">
                            SIZE: {item.size}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center text-xs font-light text-foreground border-x border-border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-light text-foreground">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="self-start text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue shopping */}
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 mt-6 text-xs font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowRight size={14} strokeWidth={1.5} className="rotate-180" />
                Continue Shopping
              </Link>
            </div>

            {/* Order summary */}
            <div className="w-full lg:w-[380px] flex-shrink-0">
              <div className="border border-border p-6 lg:p-8 sticky top-[80px]">
                <h3 className="text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-6">
                  ORDER SUMMARY
                </h3>

                <div className="flex flex-col gap-3 text-sm font-light">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${total.toLocaleString()}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex items-center justify-between text-accent">
                      <span>Discount (10%)</span>
                      <span>-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">
                      {shipping === 0 ? "Complimentary" : `$${shipping}`}
                    </span>
                  </div>
                  <div className="border-t border-border my-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-normal">Total</span>
                    <span className="font-serif text-xl text-foreground">${grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Promo code */}
                <div className="mt-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code"
                      className="flex-1 bg-transparent border border-border px-3 py-2.5 text-xs font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                    />
                    <button
                      onClick={() => {
                        if (promoCode.trim()) setPromoApplied(true)
                      }}
                      className="px-4 py-2.5 border border-border text-[10px] font-light tracking-[0.1em] text-foreground hover:border-foreground transition-colors"
                    >
                      APPLY
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-[10px] font-light text-accent mt-2">Promo code applied successfully</p>
                  )}
                </div>

                {/* Checkout */}
                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-foreground text-primary-foreground py-4 text-[10px] font-light tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all"
                >
                  {isAuthenticated ? "PROCEED TO CHECKOUT" : "SIGN IN TO CHECKOUT"}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>

                {/* Trust badges */}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Truck size={14} strokeWidth={1.5} className="text-muted-foreground" />
                    <span className="text-[10px] font-light text-muted-foreground">
                      Complimentary shipping over $500
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw size={14} strokeWidth={1.5} className="text-muted-foreground" />
                    <span className="text-[10px] font-light text-muted-foreground">
                      30-day return policy
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={14} strokeWidth={1.5} className="text-muted-foreground" />
                    <span className="text-[10px] font-light text-muted-foreground">
                      Secure encrypted checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
