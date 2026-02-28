import { HeroSection } from "@/components/home/hero-section"
import { NewArrivals } from "@/components/home/new-arrivals"
import { CollectionsSection } from "@/components/home/collections-section"
import { EditorialScroll } from "@/components/home/editorial-scroll"
import { Marquee } from "@/components/home/marquee"

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroSection />
      <Marquee />
      <NewArrivals />
      <CollectionsSection />
      <EditorialScroll />
    </div>
  )
}
