"use client"
import TopNavbar from "@/components/TopNavbar"
import Sidebar from "@/components/Sidebar"
import PreviewFrame from "@/components/PreviewFrame"
import { useEffect, useState, useRef } from "react"
import { useProject } from "@/store/project"

export default function Page() {
  const loadLocal = useProject(s => s.loadLocal)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    // Initialize based on screen size to prevent flash
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024
    }
    return false
  })
  const mainRef = useRef<HTMLElement>(null)
  
  useEffect(() => { loadLocal() }, [loadLocal])

  // Handle click outside sidebar to close it on mobile/tablet
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Only handle on mobile/tablet screens (below lg breakpoint)
      if (window.innerWidth < 1024) {
        const target = event.target as HTMLElement
        const sidebar = document.querySelector('aside')
        const sidebarToggleButtons = document.querySelectorAll('[data-sidebar-toggle]')
        
        // Check if click is on toggle button or its children
        const isClickOnToggleButton = Array.from(sidebarToggleButtons).some(button => {
          return button.contains(target) || button === target
        })
        
        // Check if click is on backdrop overlay
        const isClickOnBackdrop = target.classList.contains('bg-black') && target.classList.contains('bg-opacity-50')
        
        // Only close if sidebar is open, click is outside sidebar, not on toggle button, and not on backdrop
        if (sidebar && !sidebarCollapsed && !sidebar.contains(target) && !isClickOnToggleButton && !isClickOnBackdrop) {
          setSidebarCollapsed(true)
        }
      }
    }

    const handleResize = () => {
      // Auto-collapse sidebar on mobile/tablet when screen size changes
      if (window.innerWidth < 1024 && !sidebarCollapsed) {
        setSidebarCollapsed(true)
      }
      // Auto-expand sidebar on desktop when screen size changes
      else if (window.innerWidth >= 1024 && sidebarCollapsed) {
        setSidebarCollapsed(false)
      }
    }

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [sidebarCollapsed])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Top navbar - fixed at top */}
      <TopNavbar sidebarCollapsed={sidebarCollapsed} />
      
      {/* Main preview area - with responsive padding */}
      <main 
        ref={mainRef}
        className={`pt-16 sm:pt-20 min-h-screen transition-all duration-300 ${
          sidebarCollapsed ? 'pr-0' : 'pr-0 lg:pr-80'
        }`}
      >
        <PreviewFrame />
      </main>
      
      {/* Sidebar - fixed at right */}
      <Sidebar isCollapsed={sidebarCollapsed} onCollapseChange={setSidebarCollapsed} />
    </div>
  )
}
