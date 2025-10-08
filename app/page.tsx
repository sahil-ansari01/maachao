import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { PromoSlider } from "@/components/promo-slider"
import { Categories } from "@/components/categories"
import { TrendingSection } from "@/components/trending-section"
import { CountdownBanner } from "@/components/countdown-banner"
import { FloatingQuickDeliveryButton } from "@/components/floating-quick-delivery-button"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* Header with delivery location, notifications, and cart */}
      <Header />

      {/* Search bar */}
      <div className="px-4 pt-3">
        <SearchBar />
      </div>

      {/* Promotional sliders */}
      <div className="mt-5">
        <PromoSlider />
      </div>

      {/* Categories */}
      <div className="mt-6 px-4">
        <Categories />
      </div>

      {/* Trending products section */}
      <div className="mt-4">
        <TrendingSection />
      </div>

      {/* Floating quick delivery button */}
      <FloatingQuickDeliveryButton />

      <div className="fixed bottom-16 left-0 right-0 px-4 z-40">
        <CountdownBanner />
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  )
}
