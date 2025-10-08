"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const promos = [
  {
    id: 1,
    title: "Hot Deal 🔥",
    subtitle: "Get 20% OFF",
    buttonText: "Order Now",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    bgColor: "from-[#4a1a1a] via-[#5a2020] to-[#3a1515]",
  },
  {
    id: 2,
    title: "Special Offer",
    subtitle: "Buy 1 Get 1 Free",
    buttonText: "Shop Now",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop",
    bgColor: "from-[#6b2d5c] via-[#7a3d6c] to-[#5b1d4c]",
  },
  {
    id: 3,
    title: "Weekend Sale",
    subtitle: "Up to 30% OFF",
    buttonText: "Grab Deal",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=400&fit=crop",
    bgColor: "from-[#2d4a6b] via-[#3d5a7a] to-[#1d3a5b]",
  },
]

export function PromoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="px-4">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {promos.map((promo) => (
            <div key={promo.id} className="min-w-full">
              <div className={`relative overflow-hidden bg-gradient-to-br ${promo.bgColor} h-44 rounded-2xl`}>
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <div className="flex flex-col gap-2 z-10 max-w-[50%]">
                    <div>
                      <p className="text-[#FFB84D] text-xs font-medium mb-1">{promo.title}</p>
                      <h3 className="text-white text-xl font-bold leading-tight">{promo.subtitle}</h3>
                    </div>
                    <Button className="bg-[#FFB84D] hover:bg-[#FFA834] text-black font-semibold w-fit rounded-full px-5 py-2 h-9 text-sm shadow-lg">
                      {promo.buttonText}
                    </Button>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-44 h-44">
                    <img
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-6 bg-[#FFB84D]" : "w-1.5 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
