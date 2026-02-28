"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  const { register, isAuthenticated } = useAuth()
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setLoading(true)
    setTimeout(() => {
      const success = register(name, email, password)
      if (success) {
        router.push("/profile")
      } else {
        setError("Registration failed. Please try again.")
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
              "url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="font-serif text-4xl italic font-light text-primary-foreground leading-tight">
            {"Style is a way to say who you are without having to speak."}
          </p>
          <p className="text-xs font-light text-primary-foreground/60 mt-4 tracking-[0.15em]">
            RACHEL ZOE
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20">
        <div className="w-full max-w-md">
          <div className="w-10 h-[2px] bg-accent mb-6" />
          <h1 className="font-serif text-3xl lg:text-[42px] font-light text-foreground mb-2">
            Create Account
          </h1>
          <p className="text-xs font-light text-muted-foreground tracking-[0.1em] mb-10">
            JOIN THE MAISON NOIR COMMUNITY
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <div className="border border-destructive/30 bg-destructive/5 px-4 py-3">
                <p className="text-xs font-light text-destructive">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                autoComplete="name"
              />
            </div>

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
                  placeholder="Min 6 characters"
                  className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors pr-10"
                  autoComplete="new-password"
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

            <div>
              <label className="block text-[10px] font-light tracking-[0.15em] text-muted-foreground mb-2">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                className="w-full bg-transparent border-b border-border py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                autoComplete="new-password"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 accent-accent mt-0.5"
              />
              <span className="text-[10px] font-light tracking-[0.05em] text-muted-foreground leading-relaxed">
                I agree to the Terms of Service and Privacy Policy. I also consent to receive marketing communications from MAISON NOIR.
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-foreground text-primary-foreground py-4 text-[10px] font-light tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-60"
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              {!loading && <ArrowRight size={14} strokeWidth={1.5} />}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-light text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-accent hover:text-foreground transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
