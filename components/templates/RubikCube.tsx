"use client"
import { useProject } from "@/store/project"
import RubikCube from "../RubikCube"
import { useEffect } from "react"

export default function RubikCubeTemplate() {
  const { project, resetCubeColors } = useProject()
  const cubeColors = project.cubeColors

  // Auto-sync cube colors with theme when theme changes
  useEffect(() => {
    resetCubeColors()
  }, [project.theme.palette.primary, project.theme.palette.secondary, project.theme.palette.accent, project.theme.palette.surface, project.theme.palette.text, project.theme.palette.textSecondary, resetCubeColors])

  return (
    <div 
      className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
      style={{ 
        backgroundColor: 'var(--color-bg)',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 px-2 sm:px-4"
          style={{ color: 'var(--color-text)' }}
        >
          Interactive Rubik&apos;s Cube
        </h1>
        <p 
          className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Experience your color palette in 3D. Drag to rotate, scroll to zoom, and watch your colors come alive.
        </p>
      </div>

      {/* Cube Container */}
      <div className="flex-1 w-full flex items-center justify-center px-2 sm:px-4">
        <div 
          className="relative rounded-lg shadow-2xl overflow-hidden mx-auto"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            aspectRatio: '1/1',
            width: 'min(600px, 95vw, 70vh)',
            height: 'min(600px, 95vw, 70vh)',
            maxWidth: '100%',
            maxHeight: '50vh'
          }}
        >
          <RubikCube 
            colors={cubeColors}
            size={1.2}
            spacing={0.15}
            animationDuration={400}
            onZoomIn={() => console.log('Zoom in')}
            onZoomOut={() => console.log('Zoom out')}
          />
        </div>
      </div>

      {/* Color Legend */}
      <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-2 sm:px-4">
        {Object.entries(cubeColors).map(([face, color]) => (
          <div key={face} className="flex items-center space-x-1 sm:space-x-2">
            <div 
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded border flex-shrink-0"
              style={{ 
                backgroundColor: color,
                borderColor: 'var(--color-border)'
              }}
            />
            <span 
              className="text-xs sm:text-sm font-medium capitalize"
              style={{ color: 'var(--color-text)' }}
            >
              {face}
            </span>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center px-2 sm:px-4">
        <div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6 text-xs sm:text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <span className="flex items-center space-x-1">
            <span>🖱️</span>
            <span>Click & drag to rotate</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>🔍</span>
            <span>Scroll to zoom</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>🎨</span>
            <span>Colors sync with theme</span>
          </span>
        </div>
      </div>
    </div>
  )
}
