export type Theme = {
  palette: {
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
  fontFamily: string
  radius: number
  isDarkMode: boolean
  useBorders: boolean
  paletteType?: string
}

export const defaultTheme: Theme = {
  palette: {
    primary: "#6750A4",
    primaryContrast: "#FFFFFF",
    secondary: "#03DAC6",
    accent: "#FF6B6B",
    bg: "#ffffff",
    surface: "#f8f9fa",
    text: "#0f0f0f",
    textSecondary: "#374151",
    border: "#e5e7eb"
  },
  fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  radius: 8,
  isDarkMode: false,
  useBorders: true,
  paletteType: undefined
}

export const darkTheme: Theme = {
  palette: {
    primary: "#6750A4",
    primaryContrast: "#FFFFFF",
    secondary: "#03DAC6",
    accent: "#FF6B6B",
    bg: "#0f0f0f",
    surface: "#1a1a1a",
    text: "#f8f9fa",
    textSecondary: "#d1d5db",
    border: "#374151"
  },
  fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  radius: 8,
  isDarkMode: true,
  useBorders: true,
  paletteType: undefined
}

export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return
  
  const r = document.documentElement.style
  r.setProperty("--color-primary", theme.palette.primary)
  r.setProperty("--color-primary-contrast", theme.palette.primaryContrast)
  r.setProperty("--color-secondary", theme.palette.secondary)
  r.setProperty("--color-accent", theme.palette.accent)
  r.setProperty("--color-bg", theme.palette.bg)
  r.setProperty("--color-surface", theme.palette.surface)
  r.setProperty("--color-text", theme.palette.text)
  r.setProperty("--color-text-secondary", theme.palette.textSecondary)
  r.setProperty("--color-border", theme.palette.border)
  r.setProperty("--radius", `${theme.radius}px`)
  r.setProperty("--font-family", theme.fontFamily)
  r.setProperty("--use-borders", theme.useBorders ? "1" : "0")
  
  // Set appropriate shadow variables based on theme mode
  if (theme.isDarkMode) {
    // Dark mode shadows - lighter shadows for better visibility on dark backgrounds
    r.setProperty("--shadow-sm", "0 1px 2px 0 rgb(255 255 255 / 0.1)")
    r.setProperty("--shadow-md", "0 4px 6px -1px rgb(255 255 255 / 0.15), 0 2px 4px -2px rgb(255 255 255 / 0.1)")
    r.setProperty("--shadow-lg", "0 10px 15px -3px rgb(255 255 255 / 0.15), 0 4px 6px -4px rgb(255 255 255 / 0.1)")
  } else {
    // Light mode shadows - darker shadows for better visibility on light backgrounds
    r.setProperty("--shadow-sm", "0 1px 2px 0 rgb(0 0 0 / 0.05)")
    r.setProperty("--shadow-md", "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)")
    r.setProperty("--shadow-lg", "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)")
  }
}

// Re-export from palette.ts for convenience
export { pickTextFor } from "./palette"
