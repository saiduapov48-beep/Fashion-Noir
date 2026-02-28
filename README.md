<div align="center">

# ◆ MAISON NOIR

### A premium luxury fashion store — built from scratch with Next.js

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

<br/>

> Minimal aesthetic. Maximum elegance.  
> A full-featured luxury fashion storefront with auth, cart, wishlist, and profile — all in one Next.js app.

<br/>

</div>

---

## ✦ What is this?

Maison Noir is a luxury fashion e-commerce store featuring curated pieces from Louis Vuitton, Nike, and the Maison Noir house label. It features a clean editorial storefront, full authentication flow, shopping cart, wishlist system, and a detailed profile panel — all without a backend, using localStorage for persistence.

Everything lives in React: Context API manages auth, cart, and favorites state. Products are served from a typed static dataset of 26 items across 5 categories.

---

## ✦ Architecture

```
  Visitor                  Authenticated User
     │                            │
     ▼                            ▼
  Next.js App             Profile / Cart / Wishlist
     │                            │
     ├── /catalog                 ├── /profile (tabs: overview, orders, wishlist, settings)
     ├── /collections             ├── /cart
     ├── /product/[id]            └── /favorites
     ├── /about
     ├── /search
     ├── /login
     └── /register
           │
           ▼
     Context API (in-memory + localStorage)
     AuthContext · CartContext · FavoritesContext
```

---

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16, App Router |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4, tw-animate-css |
| Components | shadcn/ui (Radix UI primitives) |
| State | Context API (Auth, Cart, Favorites) |
| Forms | React Hook Form, Zod |
| Icons | Lucide React |
| Fonts | Playfair Display (serif), Inter (sans) |
| Persistence | localStorage |

---

## ✦ Features

### 🛍️ Storefront
- Editorial homepage with hero section, marquee, new arrivals, collections
- Product catalog with category filter and hover image swap
- Product detail pages with size selector, specs, related products
- Live search across product names and brands
- Collections page with brand/category grouping

### 🔐 Authentication
- Register & Login with form validation
- Session persisted in `localStorage`
- Auto-redirect: unauthenticated users sent to `/login` on protected actions
- Header adapts: shows **SIGN IN / REGISTER** buttons before auth → shows **initials avatar** after
- Logout clears session, preserves cart and wishlist data

### 🛒 Cart
- Add to cart from product detail page (requires login)
- Quantity controls (increase, decrease, remove)
- Promo code field (applies 10% discount)
- Complimentary shipping over $500
- Checkout redirects to profile on completion

### ❤️ Wishlist (Favorites)
- Toggle favorite from any product card or detail page
- Heart icon fills gold when favorited
- Wishlist page shows all saved products as a grid
- Counter badge on header heart icon

### 👤 Profile
- Overview tab — cart count, wishlist count, orders count, account details
- Orders tab — order history (empty state with CTA)
- Wishlist tab — saved products grid
- Settings tab — edit profile form, sign out

---

## ✦ Pages

| Route | Description |
|-------|-------------|
| `/` | Editorial homepage |
| `/catalog` | Full product grid with category filter |
| `/collections` | Curated collections by brand |
| `/product/[id]` | Product detail with size selector and related items |
| `/search` | Search results page |
| `/about` | Brand story page |
| `/favorites` | Saved products (requires login) |
| `/cart` | Shopping bag with order summary |
| `/login` | Sign in with editorial split layout |
| `/register` | Create account with editorial split layout |
| `/profile` | User panel with 4 tabs |

---

## ✦ Data Models

<details>
<summary><b>Product</b></summary>

```ts
{
  id: string
  name: string
  category: "tops" | "bottoms" | "outerwear" | "footwear" | "accessories"
  price: number
  originalPrice: number | null
  brand: string
  color: string
  colorHex: string
  sizes: string[]
  outOfStock: string[]
  image: string
  imageHover: string
  description: string
  isNew: boolean
  isSale: boolean
}
```
</details>

<details>
<summary><b>User (localStorage)</b></summary>

```ts
{
  id: string
  name: string
  email: string
  memberSince: string   // e.g. "February 2026"
}
```
</details>

<details>
<summary><b>Cart Item (localStorage)</b></summary>

```ts
{
  id: string
  name: string
  price: number
  image: string
  size: string
  quantity: number
  brand: string
}
```
</details>

---

## ✦ Project Structure

```
maison-noir/
│
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout with fonts and providers
│   ├── globals.css             # CSS variables, custom tokens
│   ├── catalog/page.tsx
│   ├── collections/page.tsx
│   ├── product/[id]/page.tsx
│   ├── search/page.tsx
│   ├── about/page.tsx
│   ├── favorites/page.tsx
│   ├── cart/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── profile/page.tsx
│
├── components/
│   ├── header.tsx              # Fixed nav with auth-aware icons
│   ├── footer.tsx
│   ├── providers.tsx           # Wraps auth + cart + favorites contexts
│   ├── product-card.tsx        # Hover swap, favorite toggle, badges
│   ├── catalog-content.tsx     # Category filter + product grid
│   ├── theme-provider.tsx
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── marquee.tsx
│   │   ├── new-arrivals.tsx
│   │   ├── collections-section.tsx
│   │   └── editorial-scroll.tsx
│   └── ui/                     # shadcn/ui components
│
├── context/
│   ├── auth-context.tsx        # Login, register, logout + localStorage
│   ├── cart-context.tsx        # Add, remove, update quantity + localStorage
│   └── favorites-context.tsx   # Toggle, check + localStorage
│
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
│
└── lib/
    ├── products.ts             # 26 products, typed, with helpers
    └── utils.ts                # cn() utility
```

---

## ✦ Design System

The store uses a custom token-based design system defined in CSS variables:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#F9F6F0` | Warm cream base |
| `--foreground` | `#1A1208` | Near-black text |
| `--accent` | `#C9A84C` | Gold highlights, badges, borders |
| `--secondary` | `#F3EDE3` | Product image backgrounds |
| `--muted-foreground` | `#8C7B5E` | Labels, subtitles |

Typography: **Playfair Display** for serif headings, **Inter** for body text.

---

## ✦ Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### 1. Install dependencies

```bash
# Recommended
pnpm install

# Or with npm
npm install
```

### 2. Start the dev server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Create an account

Go to `/register` and sign up with any name and email. That's it — no backend required.

---

## ✦ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## ✦ Product Catalog

The store ships with **26 products** across 5 categories from 3 brands:

| Category | Examples |
|----------|---------|
| 👟 Footwear | LV Skate Sneakers (6 colorways), Nike Air Force 1 |
| 👔 Tops | MAISON NOIR editorial pieces |
| 👖 Bottoms | Tailored trousers, wide-leg cuts |
| 🧥 Outerwear | Structured coats, bombers |
| 👜 Accessories | Bags, scarves, small leather goods |

---

## ✦ What I Built & What Claude Helped With

### Built by me
- Full project concept, brand identity, and design vision
- All page layouts: Home, Catalog, ProductDetail, Cart, Profile, Favorites, About, Collections
- Editorial homepage sections (hero, marquee, new arrivals)
- Complete product dataset — 26 items with images, specs, sizes, and descriptions
- Checkout UX flow design
- Color system, typography choices, and spacing language

### Built with Claude
- Auth context with localStorage persistence and register/login logic
- Cart context with add, remove, quantity management, and totals
- Favorites context with toggle and persistence
- Header auth-aware rendering (Login/Register ↔ profile avatar swap)
- Profile page with 4-tab layout (Overview, Orders, Wishlist, Settings)
- Product detail page with size selector, add-to-cart, and related products grid
- Bug fix: `ALL_PRODUCTS` import error in favorites page
- shadcn/ui component integration and Tailwind v4 config

---

<div align="center">

**Maison Noir** — built with Next.js + TypeScript + Tailwind CSS

</div>
