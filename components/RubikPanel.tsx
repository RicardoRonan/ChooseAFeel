"use client"
import { useProject } from "@/store/project"
import { Button, ColorInput, Slider } from "./shared"
import { useState, useEffect } from "react"

export default function RubikPanel() {
  const { project, updateCubeColors, resetCubeColors, randomizeCubeColors } = useProject()
  const cubeColors = project.cubeColors
  const p = project.theme.palette

  // Check if cube colors match theme colors
  const isSyncedWithTheme = 
    cubeColors.front === p.primary &&
    cubeColors.back === p.secondary &&
    cubeColors.top === p.accent &&
    cubeColors.bottom === p.surface &&
    cubeColors.right === p.text &&
    cubeColors.left === p.textSecondary

  const handleColorChange = (face: keyof typeof cubeColors, color: string) => {
    updateCubeColors({ [face]: color })
  }

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 space-y-6 pb-20">
        {/* Cube Colors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
              Cube Colors
            </h3>
            <div className="flex gap-2">
              <Button
                onClick={resetCubeColors}
                variant={isSyncedWithTheme ? "primary" : "secondary"}
                size="sm"
                className="text-xs"
              >
                {isSyncedWithTheme ? "✅ Synced" : "🎨 Theme"}
              </Button>
              <Button
                onClick={randomizeCubeColors}
                variant="secondary"
                size="sm"
                className="text-xs"
              >
                🎲 Random
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ColorInput 
              label="Front"
              value={cubeColors.front}
              onChange={value => handleColorChange('front', value)}
            />
            <ColorInput 
              label="Back"
              value={cubeColors.back}
              onChange={value => handleColorChange('back', value)}
            />
            <ColorInput 
              label="Top"
              value={cubeColors.top}
              onChange={value => handleColorChange('top', value)}
            />
            <ColorInput 
              label="Bottom"
              value={cubeColors.bottom}
              onChange={value => handleColorChange('bottom', value)}
            />
            <ColorInput 
              label="Right"
              value={cubeColors.right}
              onChange={value => handleColorChange('right', value)}
            />
            <ColorInput 
              label="Left"
              value={cubeColors.left}
              onChange={value => handleColorChange('left', value)}
            />
          </div>
        </div>


        {/* Instructions */}
        <div>
          <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            How to Use
          </h3>
          <div className="text-xs space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
            <p>• Click and drag on cube faces to rotate</p>
            <p>• Use mouse wheel to zoom in/out</p>
            <p>• Right-click and drag to orbit around the cube</p>
            <p>• Colors update in real-time as you change them</p>
            <p>• Cube colors auto-sync with theme colors</p>
          </div>
        </div>
      </div>
      
      {/* Export/Share buttons */}
      <div 
        className="sticky bottom-0 pt-4 bg-inherit"
        style={{ 
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="space-y-2">
          <Button 
            onClick={() => {
              // TODO: Implement screenshot functionality
              console.log('Screenshot cube')
            }}
            className="w-full"
          >
            📸 Screenshot Cube
          </Button>
          <Button 
            onClick={() => {
              // TODO: Implement export functionality
              console.log('Export cube configuration')
            }}
            variant="secondary"
            className="w-full"
          >
            💾 Export Config
          </Button>
        </div>
      </div>
    </div>
  )
}
