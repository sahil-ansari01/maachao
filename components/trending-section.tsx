"use client"

import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"

const trendingProducts = [
  {
    id: 1,
    name: "Exclusive Choco...",
    price: 500,
    originalPrice: 1000,
    discount: 50,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Exclusive Choco...",
    price: 500,
    originalPrice: 1000,
    discount: 50,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=300&fit=crop",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Exclusive Choco...",
    price: 500,
    originalPrice: 1000,
    discount: 50,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=300&h=300&fit=crop",
    rating: 4.6,
  },
]

export function TrendingSection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-base font-bold">Trending</h2>
        <button className="text-[#FFB84D] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
          See All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
