"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { useFavorites } from "@/context/favorites-context"
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const { isAuthenticated, user } = useAuth()
  const { count: cartCount } = useCart()
  const { count: favCount } = useFavorites()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/catalog", label: "CATALOG" },
    { href: "/collections", label: "COLLECTIONS" },
    { href: "/about", label: "ABOUT" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border-light"
            : "bg-background border-b border-border-light"
        }`}
        style={{ height: 60 }}
      >
        <div className="flex items-center justify-between h-full px-6 lg:px-12">
          {/* Left: Brand */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-serif text-base font-normal tracking-wide text-foreground">
              MAISON NOIR
            </span>
          </Link>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-[10px] font-light tracking-[0.15em] text-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:block hover:text-accent transition-colors"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link
              href="/favorites"
              className="relative hover:text-accent transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={18} strokeWidth={1.5} />
              {favCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground text-[9px] flex items-center justify-center font-light">
                  {favCount}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="relative hover:text-accent transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground text-[9px] flex items-center justify-center font-light">
                  {cartCount}
                </span>
              )}
            </Link>
            {isAuthenticated && user ? (
              <Link
                href="/profile"
                className="hidden md:flex items-center hover:text-accent transition-colors"
                aria-label="Profile"
              >
                <span className="w-7 h-7 flex items-center justify-center bg-accent text-accent-foreground text-[10px] font-light tracking-wider">
                  {user.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                </span>
              </Link>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-[10px] font-light tracking-[0.15em] text-foreground hover:text-accent transition-colors"
                >
                  SIGN IN
                </Link>
                <Link
                  href="/register"
                  className="text-[10px] font-light tracking-[0.15em] text-primary-foreground bg-foreground px-4 py-2 hover:bg-foreground/80 transition-colors"
                >
                  REGISTER
                </Link>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden hover:text-accent transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border-light p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (searchInput.trim()) {
                  router.push(`/search?q=${encodeURIComponent(searchInput)}`)
                  setSearchInput("")
                  setSearchOpen(false)
                }
              }}
              className="w-full"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm font-light focus:outline-none focus:border-accent placeholder:text-muted-foreground"
                autoFocus
              />
            </form>
          </div>
        )}
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-10 page-enter">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-4xl font-light text-foreground hover:text-accent transition-colors"
            >
              {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <Link href="/cart" onClick={() => setMobileOpen(false)}>
              <ShoppingBag size={22} strokeWidth={1.5} />
            </Link>
            <Link href="/favorites" onClick={() => setMobileOpen(false)}>
              <Heart size={22} strokeWidth={1.5} />
            </Link>
            <Link href={isAuthenticated ? "/profile" : "/login"} onClick={() => setMobileOpen(false)}>
              <User size={22} strokeWidth={1.5} />
            </Link>
            {!isAuthenticated && (
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="text-[10px] font-light tracking-[0.15em] text-primary-foreground bg-foreground px-4 py-2"
              >
                REGISTER
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}
