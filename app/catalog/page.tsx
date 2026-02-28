import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog-content"

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="pt-[60px] min-h-screen flex items-center justify-center">
        <span className="text-[10px] font-light tracking-[0.15em] text-muted-foreground">LOADING...</span>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  )
}
