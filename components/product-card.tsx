"use client"

import { Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  discount: number
  image: string
  rating: number
}

export function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="min-w-[140px] max-w-[140px] overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        {/* Product image */}
        <div className="relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-28 object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-1.5 right-1.5 h-7 w-7 rounded-full bg-white/95 hover:bg-white ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-3.5 w-3.5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>

        {/* Product details */}
        <div className="p-2.5">
          <h3 className="text-xs font-medium line-clamp-1 mb-2">{product.name}</h3>

          {/* Price section */}
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-sm font-bold">₹ {product.price}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-muted-foreground line-through">₹ {product.originalPrice}</span>
            <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
              {product.discount}% OFF
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
