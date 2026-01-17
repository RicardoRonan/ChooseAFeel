"use client"
import { useProject, ProjectType } from "@/store/project"
import { exportPng, exportZip, websiteIndexHtml, websiteStylesCss, copyCSS } from "@/lib/export"
import { useState, useEffect, useRef } from "react"
import { Button, Dropdown } from "./shared"

interface TopNavbarProps {
  sidebarCollapsed?: boolean
}

export default function TopNavbar({ sidebarCollapsed = false }: TopNavbarProps) {
  const { project, setType } = useProject()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  
  const templateOptions: { value: ProjectType; label: string }[] = [
    { value: "website", label: "Website Landing" },
    { value: "dashboard", label: "Dashboard" },
    { value: "blog", label: "Blog" },
    { value: "products", label: "Products" },
    { value: "portfolio", label: "Portfolio" },
    { value: "rubik", label: "Rubik's Cube" }
  ]

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      // Use click event instead of mousedown to allow button clicks to register
      document.addEventListener('click', handleClickOutside, true)
      
      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    }
  }, [isMenuOpen])

  
  async function handleExportPNG() {
    try {
      const el = document.getElementById("preview-root")
      if (!el) {
        alert("Preview not found. Please make sure the preview is loaded.")
        return
      }

      // Check if element has content
      if (!el.children.length) {
        alert("No content to export. Please select a template first.")
        return
      }

      const filename = `${project.type}-preview.png`
      
      // Debug: Log element information
      console.log("Starting PNG export...")
      console.log("Element dimensions:", {
        width: el.offsetWidth,
        height: el.offsetHeight,
        children: el.children.length,
        scrollHeight: el.scrollHeight,
        innerHTML: el.innerHTML.substring(0, 200) + "...", // First 200 chars
        computedStyle: window.getComputedStyle(el)
      })
      
      await exportPng(el, filename)
      
      console.log("PNG export completed successfully")
    } catch (error) {
      console.error("PNG export failed:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`PNG export failed: ${errorMessage}`)
    }
  }
  
  async function handleExportZIP() {
    try {
      const vars = {
        "--color-primary": project.theme.palette.primary,
        "--color-primary-contrast": project.theme.palette.primaryContrast,
        "--color-secondary": project.theme.palette.secondary,
        "--color-accent": project.theme.palette.accent,
        "--color-bg": project.theme.palette.bg,
        "--color-surface": project.theme.palette.surface,
        "--color-text": project.theme.palette.text,
        "--color-text-secondary": project.theme.palette.textSecondary,
        "--color-border": project.theme.palette.border,
        "--radius": `${project.theme.radius}px`,
        "--font-family": project.theme.fontFamily
      }
      const files: Record<string,string> = {}
      const indexHtml = websiteIndexHtml(vars, project.website)
      const stylesCss = websiteStylesCss(vars)
      files["index.html"] = indexHtml
      files["styles.css"] = stylesCss
      await exportZip(files, `${project.type}-template.zip`)
    } catch (error) {
      console.error("Export failed:", error)
      alert("Export failed. Please try again.")
    }
  }

  async function handleCopyCSS() {
    try {
      const vars = {
        "--color-primary": project.theme.palette.primary,
        "--color-primary-contrast": project.theme.palette.primaryContrast,
        "--color-secondary": project.theme.palette.secondary,
        "--color-accent": project.theme.palette.accent,
        "--color-bg": project.theme.palette.bg,
        "--color-surface": project.theme.palette.surface,
        "--color-text": project.theme.palette.text,
        "--color-text-secondary": project.theme.palette.textSecondary,
        "--color-border": project.theme.palette.border,
        "--radius": `${project.theme.radius}px`,
        "--font-family": project.theme.fontFamily
      }
      
      const cssString = copyCSS(vars)
      await navigator.clipboard.writeText(cssString)
      alert("CSS variables copied to clipboard!")
    } catch (error) {
      console.error("Copy CSS failed:", error)
      alert("Failed to copy CSS. Please try again.")
    }
  }

  function handleTemplateSelect(templateType: ProjectType) {
    // Immediately update the type
    setType(templateType)
  }

  return (
    <nav className={`fixed top-0 left-0 z-[9998] backdrop-blur-xl shadow-sm transition-all duration-300 ${
      sidebarCollapsed ? 'right-0' : 'right-0'
    }`} style={{ 
      backgroundColor: 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.8)', 
      borderBottom: '1px solid var(--color-border)',
      borderRadius: '0 0 var(--radius) var(--radius)',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left section - App title */}
          <div className="flex items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ 
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              fontWeight: 700
            }}>ColourPal</h1>
          </div>

          {/* Right section - Three dots menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg transition-all duration-200 relative"
              style={{
                color: 'var(--color-text)',
                backgroundColor: isMenuOpen ? 'var(--color-surface)' : 'transparent',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                const element = e.target as HTMLElement
                if (!isMenuOpen) {
                  element.style.backgroundColor = 'var(--color-surface)'
                  element.style.borderColor = 'var(--color-border)'
                }
              }}
              onMouseLeave={(e) => {
                const element = e.target as HTMLElement
                if (!isMenuOpen) {
                  element.style.backgroundColor = 'transparent'
                  element.style.borderColor = 'transparent'
                }
              }}
              aria-label="Menu"
            >
              <svg 
                className="w-5 h-5 transition-transform duration-200" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                style={{ opacity: 0.9 }}
              >
                <circle cx="12" cy="5" r="1.75" />
                <circle cx="12" cy="12" r="1.75" />
                <circle cx="12" cy="19" r="1.75" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-3 w-64 z-50 overflow-hidden animate-fadeIn"
                style={{ 
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'calc(var(--radius) + 2px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                {/* Templates Section */}
                <div className="px-4 py-3">
                  <div 
                    className="text-[10px] font-semibold uppercase tracking-wider mb-3 px-1"
                    style={{ 
                      color: 'var(--color-text-secondary)',
                      opacity: 0.8,
                      letterSpacing: '0.05em'
                    }}
                  >
                    Templates
                  </div>
                  <div className="space-y-0.5">
                    {templateOptions.map((option, index) => (
                      <button
                        key={option.value}
                        className="w-full px-3 py-2.5 text-sm text-left transition-all duration-150 rounded-md font-medium relative"
                        style={{ 
                          color: 'var(--color-text)',
                          letterSpacing: '-0.01em'
                        }}
                        onMouseEnter={(e) => {
                          const element = e.target as HTMLElement
                          element.style.backgroundColor = 'var(--color-surface)'
                          element.style.transform = 'translateX(2px)'
                        }}
                        onMouseLeave={(e) => {
                          const element = e.target as HTMLElement
                          element.style.backgroundColor = 'transparent'
                          element.style.transform = 'translateX(0)'
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation()
                        }}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleTemplateSelect(option.value)
                          setIsMenuOpen(false)
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ 
                  borderTop: '1px solid var(--color-border)',
                  opacity: 0.3,
                  margin: '0 12px'
                }} />

                {/* Export Section */}
                <div className="px-4 py-3">
                  <div 
                    className="text-[10px] font-semibold uppercase tracking-wider mb-3 px-1"
                    style={{ 
                      color: 'var(--color-text-secondary)',
                      opacity: 0.8,
                      letterSpacing: '0.05em'
                    }}
                  >
                    Export
                  </div>
                  <div className="space-y-0.5">
                    <button
                      className="w-full px-3 py-2.5 text-sm text-left transition-all duration-150 rounded-md font-medium relative"
                      style={{ 
                        color: 'var(--color-text)',
                        letterSpacing: '-0.01em'
                      }}
                      onMouseEnter={(e) => {
                        const element = e.target as HTMLElement
                        element.style.backgroundColor = 'var(--color-surface)'
                        element.style.transform = 'translateX(2px)'
                      }}
                      onMouseLeave={(e) => {
                        const element = e.target as HTMLElement
                        element.style.backgroundColor = 'transparent'
                        element.style.transform = 'translateX(0)'
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation()
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleExportPNG()
                        setIsMenuOpen(false)
                      }}
                    >
                      Export PNG
                    </button>
                    <button
                      className="w-full px-3 py-2.5 text-sm text-left transition-all duration-150 rounded-md font-medium relative"
                      style={{ 
                        color: 'var(--color-text)',
                        letterSpacing: '-0.01em'
                      }}
                      onMouseEnter={(e) => {
                        const element = e.target as HTMLElement
                        element.style.backgroundColor = 'var(--color-surface)'
                        element.style.transform = 'translateX(2px)'
                      }}
                      onMouseLeave={(e) => {
                        const element = e.target as HTMLElement
                        element.style.backgroundColor = 'transparent'
                        element.style.transform = 'translateX(0)'
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation()
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleExportZIP()
                        setIsMenuOpen(false)
                      }}
                    >
                      Export ZIP
                    </button>
                    <button
                      className="w-full px-3 py-2.5 text-sm text-left transition-all duration-150 rounded-md font-medium relative"
                      style={{ 
                        color: 'var(--color-text)',
                        letterSpacing: '-0.01em'
                      }}
                      onMouseEnter={(e) => {
                        const element = e.target as HTMLElement
                        element.style.backgroundColor = 'var(--color-surface)'
                        element.style.transform = 'translateX(2px)'
                      }}
                      onMouseLeave={(e) => {
                        const element = e.target as HTMLElement
                        element.style.backgroundColor = 'transparent'
                        element.style.transform = 'translateX(0)'
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation()
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleCopyCSS()
                        setIsMenuOpen(false)
                      }}
                    >
                      Copy CSS
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
