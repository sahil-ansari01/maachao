"use client"

import { Bell, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Avatar and delivery location */}
        <div className="flex items-center gap-2">
          <Avatar className="h-11 w-11">
            <AvatarImage
              src="/avatar.png"
              alt="User"
            />
            <AvatarFallback className="bg-primary text-white">U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[11px] text-muted-foreground">Deliver to</span>
            <button className="flex items-center gap-0.5 text-sm font-semibold hover:text-primary transition-colors">
              My Home
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right: Notification and cart icons */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
