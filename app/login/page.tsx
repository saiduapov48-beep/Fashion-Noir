"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    router.push("/profile")
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    setTimeout(() => {
      const success = login(email, password)
      if (success) {
        router.push("/profile")
      } else {
        setError("Invalid credentials")
      }
      setLoading(false)
    }, 600)
  }

  return (
    <div className="pt-[60px] min-h-screen flex page-enter">
      {/* Left: Editorial image */}
      <div className="hidden lg:block w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="font-serif text-4xl italic font-light text-primary-foreground leading-tight">
            {"Luxury is in each detail."}
          </p>
          <p className="text-xs font-light text-primary-foreground/60 mt-4 tracking-[0.15em]">
            HUBERT DE GIVENCHY
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20">
        <div className="w-full max-w-md">
          <div className="w-10 h-[2px] bg-accent mb-6" />
          <h1 className="font-serif text-3xl lg:text-[42px] font-light text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-xs font-light text-muted-foreground tracking-[0.1em] mb-10">
            SIGN IN TO YOUR ACCOUNT
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <div className="border border-destructive/30 bg-destructive/5 px-4 py-3">
                <p className="text-xs font-light text-destructive">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors pr-10"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={16} strokeWidth={1.5} />
                  ) : (
                    <Eye size={16} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 accent-accent"
                />
                <span className="text-[10px] font-light tracking-[0.1em] text-muted-foreground">
                  REMEMBER ME
                </span>
              </label>
              <span className="text-[10px] font-light tracking-[0.1em] text-accent cursor-pointer hover:text-foreground transition-colors">
                FORGOT PASSWORD?
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-foreground text-primary-foreground py-4 text-[10px] font-light tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-60"
            >
              {loading ? "SIGNING IN..." : "SIGN IN"}
              {!loading && <ArrowRight size={14} strokeWidth={1.5} />}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-light text-muted-foreground text-center">
              {"Don't have an account? "}
              <Link href="/register" className="text-accent hover:text-foreground transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
