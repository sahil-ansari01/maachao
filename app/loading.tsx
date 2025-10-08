import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-background/60 backdrop-blur-sm">
      <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-sm">
        <Spinner className="h-5 w-5" />
        <span className="text-sm font-medium">Loading…</span>
      </div>
    </div>
  )
}
