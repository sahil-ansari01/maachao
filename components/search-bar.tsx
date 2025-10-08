"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search here"
        className="pl-10 pr-10 h-11 bg-muted/50 border-0 rounded-lg text-sm placeholder:text-muted-foreground/60"
      />
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Filter"
      >
        <Filter className="h-4 w-4" />
      </button>
    </div>
  )
}
