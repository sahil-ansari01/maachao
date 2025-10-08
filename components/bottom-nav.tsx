"use client"

import { Home, Heart, Grid3x3, User } from "lucide-react"
import { useState } from "react"

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "wishlist", icon: Heart, label: "Wishlist" },
  { id: "categories", icon: Grid3x3, label: "Categories" },
  { id: "profile", icon: User, label: "Profile" },
]

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="flex items-center justify-around px-6 py-2 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all ${
                isActive ? "bg-[#FFB84D] text-white" : "text-gray-400"
              }`}
            >
              <Icon className="h-5 w-5" />
              {isActive && <span className="text-xs font-medium">{item.label}</span>}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
