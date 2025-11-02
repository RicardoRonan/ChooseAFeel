"use client"
import { useProject } from "@/store/project"
import { GOOGLE_FONTS } from "@/lib/fonts"
import { PaletteType, generateRandomCoolPalette } from "@/lib/palette"
import { useState, useEffect, useRef } from "react"
import { Button, ColorInput, Dropdown, Toggle, Slider } from "./shared"

export default function ThemePanel() {
  const { project, updateTheme, setFontByLabel, resetTheme, toggleDarkMode, randomizeColors } = useProject()
  const p = project.theme.palette

  function handleFontSelect(fontLabel: string) {
    setFontByLabel(fontLabel)
  }

  function handlePaletteTypeSelect(type: PaletteType) {
    const randomPalette = generateRandomCoolPalette(type)
    const currentTheme = project.theme
    
    const newTheme = {
      ...currentTheme,
      palette: {
        ...currentTheme.palette,
        primary: randomPalette.light.primary,
        primaryContrast: randomPalette.light.primaryContrast,
        secondary: randomPalette.light.secondary,
        accent: randomPalette.light.accent
      },
      paletteType: type
    }
    
    // Add a subtle delay for smooth transition
    setTimeout(() => {
      updateTheme(newTheme)
    }, 100)
  }

  // Function to get the display label for the current font
  function getCurrentFontLabel() {
    if (!project.theme.fontFamily) return "Choose a font"
    const font = GOOGLE_FONTS.find(f => f.cssFamily === project.theme.fontFamily)
    return font ? font.label : "Choose a font"
  }

  const fontOptions = [
    { label: "Inter", value: "" },
    ...GOOGLE_FONTS.slice(0, 8).map(f => ({ label: f.label, value: f.label }))
  ]

  const paletteTypeOptions = [
    { label: "Monochromatic", value: "monochromatic" as PaletteType },
    { label: "Analogous", value: "analogous" as PaletteType },
    { label: "Complementary", value: "complementary" as PaletteType },
    { label: "Split Complementary", value: "splitComplementary" as PaletteType },
    { label: "Triadic", value: "triadic" as PaletteType },
    { label: "Tetradic", value: "tetradic" as PaletteType }
  ]

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 space-y-6 pb-20">
      {/* Color controls */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>Colors</h3>
          <Button
            onClick={() => {
              // Add a subtle delay for smooth transition
              setTimeout(() => {
                randomizeColors()
              }, 100)
            }}
            variant="secondary"
            size="sm"
            className="text-xs transition-all duration-300 hover:scale-105"
          >
            🎨 Randomize
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <ColorInput 
            label="Primary"
            value={p.primary}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, primary: value } as any })
              }, 50)
            }}
          />
          <ColorInput 
            label="Secondary"
            value={p.secondary}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, secondary: value } as any })
              }, 50)
            }}
          />
          <ColorInput 
            label="Accent"
            value={p.accent}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, accent: value } as any })
              }, 50)
            }}
          />
          <ColorInput 
            label="Background"
            value={p.bg}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, bg: value } as any })
              }, 50)
            }}
          />
          <ColorInput 
            label="Surface"
            value={p.surface}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, surface: value } as any })
              }, 50)
            }}
          />
          <ColorInput 
            label="Text"
            value={p.text}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, text: value } as any })
              }, 50)
            }}
          />
          <ColorInput 
            label="Text Secondary"
            value={p.textSecondary}
            onChange={value => {
              setTimeout(() => {
                updateTheme({ palette: { ...p, textSecondary: value } as any })
              }, 50)
            }}
          />
        </div>
      </div>

      {/* Palette Type Selector */}
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>Palette Type</h3>
        <Dropdown<PaletteType>
          options={paletteTypeOptions}
          value={project.theme.paletteType as PaletteType}
          onSelect={handlePaletteTypeSelect}
          placeholder="Generate Palette Type"
        />
      </div>

      {/* Dark mode toggle */}
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>Appearance</h3>
        <Toggle
          checked={project.theme.isDarkMode}
          onChange={toggleDarkMode}
          label="Dark Mode"
        />
      </div>

      {/* Border radius slider */}
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>Border Radius</h3>
        <Slider
          value={project.theme.radius}
          onChange={value => updateTheme({ radius: value })}
          min={0}
          max={24}
          label="Radius"
          showValue={true}
        />
      </div>

      {/* Border toggle */}
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>Borders</h3>
        <Toggle
          checked={project.theme.useBorders}
          onChange={checked => updateTheme({ useBorders: checked })}
          label="Use Borders"
        />
      </div>

      {/* Font selector */}
      <div>
        <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>Typography</h3>
        <div className="space-y-2">
          <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Font Family</label>
          <Dropdown
            options={fontOptions}
            value={getCurrentFontLabel()}
            onSelect={handleFontSelect}
            placeholder="Choose a font"
          />
        </div>
      </div>

      </div>
      
      {/* Sticky Reset button */}
      <div 
        className="sticky bottom-0 pt-4 bg-inherit"
        style={{ 
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Button 
          onClick={resetTheme}
          variant="secondary"
          className="w-full"
        >
          Reset to Default
        </Button>
      </div>
    </div>
  )
}
