"use client"

import { Zap } from "lucide-react"

export function FloatingQuickDeliveryButton() {
  return (
    <button
      className="fixed bottom-[88px] right-4 z-50 bg-[#FFB84D] p-3.5 rounded-full shadow-xl hover:bg-[#FFA93D] transition-all active:scale-95 hover:shadow-2xl"
      aria-label="Quick delivery"
    >
      <Zap className="h-5 w-5 text-white fill-white" />
    </button>
  )
}
