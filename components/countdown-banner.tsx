"use client"

import { useState, useEffect } from "react"

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2 px-2.5 py-1.5">
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop"
            alt="Quick delivery"
            className="w-9 h-9 rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-medium text-foreground leading-tight">
            Do Order in{" "}
            <span className="text-red-600 font-bold">
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </p>
          <p className="text-[9px] text-muted-foreground leading-tight">And Get Order Today</p>
        </div>
      </div>
    </div>
  )
}
