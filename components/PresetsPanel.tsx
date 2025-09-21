"use client"
import { useProject } from "@/store/project"
import { Button } from "./shared"

interface ColorPreset {
  name: string
  description: string
  colors: {
    primary: string
    primaryContrast: string
    secondary: string
    accent: string
    bg: string
    surface: string
    text: string
    textSecondary: string
    border: string
  }
  isDarkMode?: boolean
}

const colorPresets: ColorPreset[] = [
  {
    name: "Ocean Breeze",
    description: "Calming blues and teals",
    colors: {
      primary: "#0ea5e9",
      primaryContrast: "#ffffff",
      secondary: "#06b6d4",
      accent: "#f59e0b",
      bg: "#ffffff",
      surface: "#f8fafc",
      text: "#0f172a",
      textSecondary: "#475569",
      border: "#e2e8f0"
    }
  },
  {
    name: "Sunset Glow",
    description: "Warm oranges and purples",
    colors: {
      primary: "#f97316",
      primaryContrast: "#ffffff",
      secondary: "#a855f7",
      accent: "#ec4899",
      bg: "#ffffff",
      surface: "#fef7f0",
      text: "#1c1917",
      textSecondary: "#57534e",
      border: "#f3e8ff"
    }
  },
  {
    name: "Forest Green",
    description: "Natural greens and earth tones",
    colors: {
      primary: "#059669",
      primaryContrast: "#ffffff",
      secondary: "#10b981",
      accent: "#f59e0b",
      bg: "#ffffff",
      surface: "#f0fdf4",
      text: "#064e3b",
      textSecondary: "#047857",
      border: "#d1fae5"
    }
  },
  {
    name: "Royal Purple",
    description: "Rich purples and golds",
    colors: {
      primary: "#7c3aed",
      primaryContrast: "#ffffff",
      secondary: "#a855f7",
      accent: "#fbbf24",
      bg: "#ffffff",
      surface: "#faf5ff",
      text: "#581c87",
      textSecondary: "#7c2d12",
      border: "#e9d5ff"
    }
  },
  {
    name: "Coral Reef",
    description: "Vibrant corals and pinks",
    colors: {
      primary: "#f43f5e",
      primaryContrast: "#ffffff",
      secondary: "#ec4899",
      accent: "#06b6d4",
      bg: "#ffffff",
      surface: "#fef2f2",
      text: "#881337",
      textSecondary: "#be185d",
      border: "#fecaca"
    }
  },
  {
    name: "Midnight Blue",
    description: "Deep blues and silvers",
    colors: {
      primary: "#1e40af",
      primaryContrast: "#ffffff",
      secondary: "#3b82f6",
      accent: "#10b981",
      bg: "#ffffff",
      surface: "#eff6ff",
      text: "#1e3a8a",
      textSecondary: "#1d4ed8",
      border: "#dbeafe"
    }
  },
  {
    name: "Dark Mode Pro",
    description: "Professional dark theme",
    colors: {
      primary: "#3b82f6",
      primaryContrast: "#ffffff",
      secondary: "#06b6d4",
      accent: "#f59e0b",
      bg: "#0f0f0f",
      surface: "#1a1a1a",
      text: "#f8f9fa",
      textSecondary: "#d1d5db",
      border: "#374151"
    },
    isDarkMode: true
  },
  {
    name: "Dark Forest",
    description: "Mysterious dark greens",
    colors: {
      primary: "#10b981",
      primaryContrast: "#ffffff",
      secondary: "#059669",
      accent: "#f59e0b",
      bg: "#0f0f0f",
      surface: "#1a1a1a",
      text: "#f8f9fa",
      textSecondary: "#d1d5db",
      border: "#374151"
    },
    isDarkMode: true
  },
  {
    name: "Dark Royal",
    description: "Elegant dark purples",
    colors: {
      primary: "#8b5cf6",
      primaryContrast: "#ffffff",
      secondary: "#a855f7",
      accent: "#fbbf24",
      bg: "#0f0f0f",
      surface: "#1a1a1a",
      text: "#f8f9fa",
      textSecondary: "#d1d5db",
      border: "#374151"
    },
    isDarkMode: true
  }
]

export default function PresetsPanel() {
  const { project, updateTheme } = useProject()

  function applyPreset(preset: ColorPreset) {
    const newTheme = {
      ...project.theme,
      palette: preset.colors,
      isDarkMode: preset.isDarkMode ?? false
    }
    
    updateTheme(newTheme)
  }

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex-1 space-y-4 pb-20">
        <div>
          <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            Color Presets
          </h3>
          <p className="text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Choose from professionally designed color palettes
          </p>
        </div>

        <div className="grid gap-3">
          {colorPresets.map((preset, index) => (
            <div
              key={index}
              className="p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                borderWidth: '1px'
              }}
              onClick={() => applyPreset(preset)}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    {preset.name}
                  </h4>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    {preset.description}
                  </p>
                </div>
                {preset.isDarkMode && (
                  <span className="text-xs px-2 py-1 rounded" style={{ 
                    backgroundColor: 'var(--color-primary)', 
                    color: 'var(--color-primary-contrast)' 
                  }}>
                    Dark
                  </span>
                )}
              </div>
              
              {/* Color swatches */}
              <div className="flex gap-1">
                <div
                  className="w-6 h-6 rounded border"
                  style={{ 
                    backgroundColor: preset.colors.primary,
                    borderColor: 'var(--color-border)'
                  }}
                  title="Primary"
                />
                <div
                  className="w-6 h-6 rounded border"
                  style={{ 
                    backgroundColor: preset.colors.secondary,
                    borderColor: 'var(--color-border)'
                  }}
                  title="Secondary"
                />
                <div
                  className="w-6 h-6 rounded border"
                  style={{ 
                    backgroundColor: preset.colors.accent,
                    borderColor: 'var(--color-border)'
                  }}
                  title="Accent"
                />
                <div
                  className="w-6 h-6 rounded border"
                  style={{ 
                    backgroundColor: preset.colors.bg,
                    borderColor: 'var(--color-border)'
                  }}
                  title="Background"
                />
                <div
                  className="w-6 h-6 rounded border"
                  style={{ 
                    backgroundColor: preset.colors.surface,
                    borderColor: 'var(--color-border)'
                  }}
                  title="Surface"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
