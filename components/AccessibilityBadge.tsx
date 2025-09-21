"use client"
import { useProject } from "@/store/project"
import { isAA } from "@/lib/palette"

export default function AccessibilityBadge() {
  const p = useProject(s => s.project)
  const okBody = isAA(p.theme.palette.text, p.theme.palette.bg)
  const okPrimary = isAA(p.theme.palette.primaryContrast, p.theme.palette.primary)
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${okBody ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Body</span>
      </div>
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${okPrimary ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Primary</span>
      </div>
    </div>
  )
}
