"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  memberSince: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  register: (name: string, email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("maison-noir-user")
    if (saved) {
      setUser(JSON.parse(saved))
    }
  }, [])

  const login = useCallback((email: string, _password: string) => {
    const users = JSON.parse(localStorage.getItem("maison-noir-users") || "[]")
    const found = users.find((u: { email: string }) => u.email === email)
    if (found) {
      setUser(found)
      localStorage.setItem("maison-noir-user", JSON.stringify(found))
      return true
    }
    // Demo: allow any login
    const newUser: User = {
      id: Date.now().toString(),
      name: email.split("@")[0],
      email,
      memberSince: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    }
    setUser(newUser)
    localStorage.setItem("maison-noir-user", JSON.stringify(newUser))
    return true
  }, [])

  const register = useCallback((name: string, email: string, _password: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      memberSince: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    }
    const users = JSON.parse(localStorage.getItem("maison-noir-users") || "[]")
    users.push(newUser)
    localStorage.setItem("maison-noir-users", JSON.stringify(users))
    setUser(newUser)
    localStorage.setItem("maison-noir-user", JSON.stringify(newUser))
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem("maison-noir-user")
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
