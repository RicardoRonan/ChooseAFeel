"use client"
import TopNavbar from "@/components/TopNavbar"
import Sidebar from "@/components/Sidebar"
import PreviewFrame from "@/components/PreviewFrame"
import { useEffect, useState, useRef } from "react"
import { useProject } from "@/store/project"

export default function Page() {
  const loadLocal = useProject(s => s.loadLocal)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  
  useEffect(() => { loadLocal() }, [loadLocal])

  // Handle click outside sidebar to close it on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Only handle on mobile screens (below lg breakpoint)
      if (window.innerWidth < 1024) {
        const target = event.target as HTMLElement
        const sidebar = document.querySelector('aside')
        
        // Check if click is outside sidebar and sidebar is open
        if (sidebar && !sidebarCollapsed && !sidebar.contains(target)) {
          setSidebarCollapsed(true)
        }
      }
    }

    const handleResize = () => {
      // Auto-collapse sidebar on mobile when screen size changes
      if (window.innerWidth < 1024 && !sidebarCollapsed) {
        setSidebarCollapsed(true)
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
          sidebarCollapsed ? 'pr-0' : 'pr-0 lg:pr-80 md:pr-72 sm:pr-64'
        }`}
      >
        <PreviewFrame />
      </main>
      
      {/* Sidebar - fixed at right */}
      <Sidebar onCollapseChange={setSidebarCollapsed} />
    </div>
  )
}
