"use client"
import { useState, useEffect, useRef } from "react"
import ThemePanel from "./ThemePanel"
import PresetsPanel from "./PresetsPanel"
import RubikPanel from "./RubikPanel"
import { useProject } from "@/store/project"
import { Button, Modal } from "./shared"

interface SidebarProps {
  isCollapsed: boolean
  onCollapseChange: (collapsed: boolean) => void
}

export default function Sidebar({ isCollapsed, onCollapseChange }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<'theme' | 'presets' | 'rubik'>('theme')
  const [showHelp, setShowHelp] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const disclaimerRef = useRef<HTMLDivElement>(null)
  const { project } = useProject()

  // Handle resize events to auto-collapse/expand sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && !isCollapsed) {
        onCollapseChange(true)
      } else if (window.innerWidth >= 1024 && isCollapsed) {
        onCollapseChange(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isCollapsed, onCollapseChange])

  // Auto-switch to theme tab when switching away from Rubik cube
  useEffect(() => {
    if (project.type !== 'rubik' && activeTab === 'rubik') {
      setActiveTab('theme')
    }
  }, [project.type, activeTab])


  // Close disclaimer when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (disclaimerRef.current && !disclaimerRef.current.contains(event.target as Node)) {
        setShowDisclaimer(false)
      }
    }

    if (showDisclaimer) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDisclaimer])

  return (
    <>
      {/* Backdrop overlay for mobile/tablet */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => onCollapseChange(true)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed right-0 z-50 backdrop-blur-md shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'w-full sm:w-80 md:w-80 lg:w-80 opacity-100'
      }`} style={{ 
        top: '64px', // Account for TopNavbar height
        height: 'calc(100vh - 64px)', // Adjust height to account for TopNavbar
        backgroundColor: 'var(--color-bg)', 
        borderLeft: isCollapsed ? 'none' : '1px solid var(--color-border)',
        borderRadius: 'var(--radius) 0 0 var(--radius)',
        maxWidth: isCollapsed ? '0' : '320px',
        minWidth: isCollapsed ? '0' : '280px',
        pointerEvents: isCollapsed ? 'none' : 'auto',
        // Prevent flash by setting initial opacity
        opacity: isCollapsed ? 0 : 1
      }}>
        <div className="h-full flex flex-col">
          {/* Header with collapse button */}
          <div className="flex items-center justify-between px-4 py-3 sm:py-4 min-h-[60px]">
            <h2 className="font-semibold text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>Controls</h2>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowDisclaimer(!showDisclaimer)}
                variant="ghost"
                size="sm"
                className="p-1.5"
                title={project.type === 'portfolio' ? 'Personal Portfolio Info' : 'Visual Testing Disclaimer'}
              >
                <svg 
                  className="w-4 h-4" 
                  style={{ color: project.type === 'portfolio' ? '#3b82f6' : '#eab308' }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  {project.type === 'portfolio' ? (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  )}
                </svg>
              </Button>
              <Button
                onClick={() => setShowHelp(true)}
                variant="ghost"
                size="sm"
                className="p-1.5"
                title="Help - Learn about all controls"
              >
                <svg 
                  className="w-4 h-4" 
                  style={{ color: 'var(--color-text-secondary)' }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onCollapseChange(!isCollapsed)
                }}
                variant="ghost"
                size="sm"
                className="p-1.5"
                title={isCollapsed ? "Show sidebar" : "Hide sidebar"}
                data-sidebar-toggle
              >
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCollapsed ? 'rotate-180' : ''
                  }`} 
                  style={{ color: 'var(--color-text-secondary)' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="p-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div className="flex p-1" style={{ 
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--color-surface)'
            }}>
              <button
                onClick={() => setActiveTab('theme')}
                className="flex-1 px-2 py-2 text-xs font-medium transition-colors"
                style={{ 
                  borderRadius: 'var(--radius)',
                  backgroundColor: activeTab === 'theme' ? 'var(--color-bg)' : 'transparent',
                  color: activeTab === 'theme' ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  boxShadow: activeTab === 'theme' ? 'var(--shadow-sm)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'theme') {
                    const element = e.target as HTMLElement
                    const computedStyle = getComputedStyle(document.documentElement)
                    element.style.color = computedStyle.getPropertyValue('--color-text')
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'theme') {
                    const element = e.target as HTMLElement
                    const computedStyle = getComputedStyle(document.documentElement)
                    element.style.color = computedStyle.getPropertyValue('--color-text-secondary')
                  }
                }}
              >
                Theme
              </button>
              <button
                onClick={() => setActiveTab('presets')}
                className="flex-1 px-2 py-2 text-xs font-medium transition-colors"
                style={{ 
                  borderRadius: 'var(--radius)',
                  backgroundColor: activeTab === 'presets' ? 'var(--color-bg)' : 'transparent',
                  color: activeTab === 'presets' ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  boxShadow: activeTab === 'presets' ? 'var(--shadow-sm)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'presets') {
                    const element = e.target as HTMLElement
                    const computedStyle = getComputedStyle(document.documentElement)
                    element.style.color = computedStyle.getPropertyValue('--color-text')
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'presets') {
                    const element = e.target as HTMLElement
                    const computedStyle = getComputedStyle(document.documentElement)
                    element.style.color = computedStyle.getPropertyValue('--color-text-secondary')
                  }
                }}
              >
                Presets
              </button>
              {project.type === 'rubik' && (
                <button
                  onClick={() => setActiveTab('rubik')}
                  className="flex-1 px-2 py-2 text-xs font-medium transition-colors"
                  style={{ 
                    borderRadius: 'var(--radius)',
                    backgroundColor: activeTab === 'rubik' ? 'var(--color-bg)' : 'transparent',
                    color: activeTab === 'rubik' ? 'var(--color-text)' : 'var(--color-text-secondary)',
                    boxShadow: activeTab === 'rubik' ? 'var(--shadow-sm)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'rubik') {
                      const element = e.target as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.color = computedStyle.getPropertyValue('--color-text')
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'rubik') {
                      const element = e.target as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.color = computedStyle.getPropertyValue('--color-text-secondary')
                    }
                  }}
                >
                  Cube
                </button>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === 'theme' && (
              <ThemePanel />
            )}
            {activeTab === 'presets' && (
              <PresetsPanel />
            )}
            {activeTab === 'rubik' && (
              <RubikPanel />
            )}
          </div>
        </div>
      </aside>

      {/* Collapsed sidebar button - positioned in middle for mobile/tablet */}
      {isCollapsed && (
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onCollapseChange(false)
          }}
          className="fixed right-4 z-50 p-3 shadow-lg lg:hidden transition-all duration-200"
          style={{ 
            top: 'calc(50vh + 32px)', // Account for TopNavbar height
            backgroundColor: 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.3)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(var(--color-border-rgb, 229, 231, 235), 0.3)',
            borderRadius: 'var(--radius) 0 0 var(--radius)',
            color: 'var(--color-text-secondary)'
          }}
          title="Show sidebar"
          data-sidebar-toggle
          onMouseEnter={(e) => {
            const element = e.target as HTMLElement
            element.style.backgroundColor = 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.6)'
            element.style.color = 'var(--color-text)'
          }}
          onMouseLeave={(e) => {
            const element = e.target as HTMLElement
            element.style.backgroundColor = 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.3)'
            element.style.color = 'var(--color-text-secondary)'
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Desktop collapsed sidebar button - positioned at top */}
      {isCollapsed && (
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onCollapseChange(false)
          }}
          className="fixed right-4 z-50 p-2 shadow-lg hidden lg:block transition-all duration-200"
          style={{ 
            top: '84px', // Account for TopNavbar height
            backgroundColor: 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(var(--color-border-rgb, 229, 231, 235), 0.5)',
            borderRadius: 'var(--radius) 0 0 var(--radius)',
            color: 'var(--color-text-secondary)'
          }}
          title="Show sidebar"
          data-sidebar-toggle
          onMouseEnter={(e) => {
            const element = e.target as HTMLElement
            element.style.backgroundColor = 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.9)'
            element.style.color = 'var(--color-text)'
          }}
          onMouseLeave={(e) => {
            const element = e.target as HTMLElement
            element.style.backgroundColor = 'rgba(var(--color-bg-rgb, 255, 255, 255), 0.8)'
            element.style.color = 'var(--color-text-secondary)'
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Help Modal */}
      <Modal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
        title="Controls Help"
        size="md"
      >
        <div className="space-y-6">
              {/* Theme Controls */}
              <div>
                <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text)' }}>Theme Controls</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>🎨 Colors</h4>
                    <ul className="space-y-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <li>• <strong>Primary:</strong> Main brand color for buttons and links</li>
                      <li>• <strong>Secondary:</strong> Supporting color for highlights and accents</li>
                      <li>• <strong>Accent:</strong> Eye-catching color for CTAs and important elements</li>
                      <li>• <strong>Background:</strong> Main page background color</li>
                      <li>• <strong>Surface:</strong> Cards, panels, and elevated surfaces</li>
                      <li>• <strong>Text:</strong> Primary text color for headings and body</li>
                      <li>• <strong>Text Secondary:</strong> Muted text for captions and labels</li>
                      <li>• <strong>Randomize:</strong> Generate a random color palette</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>🎯 Palette Type</h4>
                    <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                      Choose a color harmony method for generating new palettes:
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <li>• <strong>Monochromatic:</strong> Variations of a single hue with different saturation and lightness</li>
                      <li>• <strong>Analogous:</strong> Colors adjacent on the color wheel (e.g., blue, blue-green, green)</li>
                      <li>• <strong>Complementary:</strong> Colors opposite on the color wheel (e.g., blue and orange)</li>
                      <li>• <strong>Split Complementary:</strong> A base color plus the two colors adjacent to its complement</li>
                      <li>• <strong>Triadic:</strong> Three colors evenly spaced around the color wheel (120° apart)</li>
                      <li>• <strong>Tetradic:</strong> Four colors forming a rectangle on the color wheel</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>🌙 Appearance</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Switch between light and dark themes
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>📐 Border Radius</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Control the roundness of corners on buttons, cards, and inputs (0-24px)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>🔲 Borders</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Toggle borders on UI elements for better visual structure
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>📝 Typography</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Choose a font family that matches your brand personality
                    </p>
                  </div>
                </div>
              </div>

              {/* Presets Controls */}
              <div>
                <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text)' }}>Presets</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Choose from professionally designed color palettes. Each preset includes carefully selected colors that work harmoniously together.
                </p>
              </div>

              {/* Accessibility */}
              <div>
                <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text)' }}>♿ Accessibility</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Green indicators show WCAG AA compliant contrast ratios. Red indicators mean the contrast needs improvement for better accessibility.
                </p>
              </div>

              {/* Tips */}
              <div>
                <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text)' }}>💡 Tips</h3>
                <ul className="space-y-1 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <li>• Use the randomize button to get inspiration for color palettes</li>
                  <li>• Try different palette types to find the perfect color harmony</li>
                  <li>• Adjust border radius to match your brand&apos;s style (rounded vs sharp)</li>
                  <li>• Toggle borders to see how they affect the overall design</li>
                  <li>• Click the help button (?) anytime to see this guide again</li>
                </ul>
              </div>
            </div>
      </Modal>

      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20">
          <div 
            ref={disclaimerRef}
            className={`transition-all duration-300 overflow-hidden ${
              project.type === 'portfolio' 
                ? 'bg-blue-100 border-l-4 border-blue-500' 
                : 'bg-yellow-100 border-l-4 border-yellow-500'
            } p-4 shadow-lg max-w-md mx-4`} 
            style={{ borderRadius: 'var(--radius)' }}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg 
                  className="h-5 w-5" 
                  style={{ color: project.type === 'portfolio' ? '#3b82f6' : '#eab308' }}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  {project.type === 'portfolio' ? (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  )}
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm" style={{ color: project.type === 'portfolio' ? '#1e40af' : '#92400e' }}>
                  <strong>
                    {project.type === 'portfolio' ? 'Personal Portfolio:' : 'Visual Testing Only:'}
                  </strong>
                  {' '}
                  {project.type === 'portfolio' 
                    ? 'This template contains my personal details and information. All other templates use placeholder content for visual testing purposes only.'
                    : 'All content, data, and information displayed on this template are placeholder values for visual testing purposes only. This is not real content.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
