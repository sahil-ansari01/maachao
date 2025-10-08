"use client"

import { Grid3x3 } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Trending",
    emoji: "🔥",
    bgColor: "bg-[#FFE8E8]",
  },
  {
    id: 2,
    name: "Cakes",
    emoji: "🧁",
    bgColor: "bg-[#FFF4E8]",
  },
  {
    id: 3,
    name: "Decoration",
    emoji: "🎀",
    bgColor: "bg-[#FFE8F0]",
  },
  {
    id: 4,
    name: "Gifts",
    emoji: "🎁",
    bgColor: "bg-[#F8E8FF]",
  },
  {
    id: 5,
    name: "Hire MUA",
    emoji: "👨‍🍳",
    bgColor: "bg-[#FFF8E8]",
  },
  {
    id: 6,
    name: "Video Gr.",
    emoji: "📹",
    bgColor: "bg-[#E8F4FF]",
  },
  {
    id: 7,
    name: "Photo Gr.",
    emoji: "📸",
    bgColor: "bg-[#FFE8E8]",
  },
  {
    id: 8,
    name: "View All",
    icon: Grid3x3,
    bgColor: "bg-white border-2 border-[#FFB84D]",
  },
]

export function Categories() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button key={category.id} className="flex flex-col items-center gap-2 group">
              <div
                className={`${category.bgColor} w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm`}
              >
                {category.emoji ? (
                  <span className="text-2xl">{category.emoji}</span>
                ) : Icon ? (
                  <Icon className="h-6 w-6 text-[#FFB84D]" />
                ) : null}
              </div>
              <span className="text-[11px] font-medium text-center leading-tight">{category.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
