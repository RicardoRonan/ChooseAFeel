import chroma from "chroma-js"

export function contrastRatio(hex1: string, hex2: string): number {
  return chroma.contrast(hex1, hex2)
}

export function pickTextFor(bgHex: string, light = "#FFFFFF", dark = "#0B0D12") {
  const cLight = contrastRatio(light, bgHex)
  const cDark = contrastRatio(dark, bgHex)
  return cLight >= cDark ? light : dark
}

export function isAA(hexText: string, hexBg: string) {
  return contrastRatio(hexText, hexBg) >= 4.5
}

// Color theory types
export type PaletteType = 'monochromatic' | 'analogous' | 'complementary' | 'splitComplementary' | 'triadic' | 'tetradic'

export interface ColorPalette {
  primary: string
  secondary: string
  accent: string
  name: string
  type: PaletteType
}

// HSL color utilities
export function hexToHsl(hex: string): [number, number, number] {
  const [h, s, l] = chroma(hex).hsl()
  return [h || 0, s, l]
}

export function hslToHex(h: number, s: number, l: number): string {
  return chroma.hsl(h, s, l).hex()
}

export function normalizeHue(hue: number): number {
  return ((hue % 360) + 360) % 360
}

// Color theory palette generators
export function generateMonochromaticPalette(baseHue: number): ColorPalette {
  const saturation = 0.6 + Math.random() * 0.3 // 60-90% saturation
  const lightness = 0.4 + Math.random() * 0.4 // 40-80% lightness
  
  const primary = hslToHex(baseHue, saturation, lightness)
  const secondary = hslToHex(baseHue, saturation * 0.7, lightness + 0.2)
  const accent = hslToHex(baseHue, Math.min(saturation + 0.2, 1), Math.max(lightness - 0.2, 0.1))
  
  return {
    primary,
    secondary,
    accent,
    name: "Monochromatic Harmony",
    type: 'monochromatic'
  }
}

export function generateAnalogousPalette(baseHue: number): ColorPalette {
  const saturation = 0.5 + Math.random() * 0.4 // 50-90% saturation
  const lightness = 0.4 + Math.random() * 0.4 // 40-80% lightness
  
  const primary = hslToHex(baseHue, saturation, lightness)
  const secondary = hslToHex(normalizeHue(baseHue + 30), saturation * 0.8, lightness + 0.1)
  const accent = hslToHex(normalizeHue(baseHue - 30), Math.min(saturation + 0.1, 1), Math.max(lightness - 0.1, 0.2))
  
  return {
    primary,
    secondary,
    accent,
    name: "Analogous Flow",
    type: 'analogous'
  }
}

export function generateComplementaryPalette(baseHue: number): ColorPalette {
  const saturation = 0.6 + Math.random() * 0.3 // 60-90% saturation
  const lightness = 0.4 + Math.random() * 0.4 // 40-80% lightness
  
  const primary = hslToHex(baseHue, saturation, lightness)
  const secondary = hslToHex(normalizeHue(baseHue + 180), saturation * 0.7, lightness + 0.1)
  const accent = hslToHex(normalizeHue(baseHue + 180), Math.min(saturation + 0.2, 1), Math.max(lightness - 0.2, 0.1))
  
  return {
    primary,
    secondary,
    accent,
    name: "Complementary Contrast",
    type: 'complementary'
  }
}

export function generateSplitComplementaryPalette(baseHue: number): ColorPalette {
  const saturation = 0.5 + Math.random() * 0.4 // 50-90% saturation
  const lightness = 0.4 + Math.random() * 0.4 // 40-80% lightness
  
  const primary = hslToHex(baseHue, saturation, lightness)
  const secondary = hslToHex(normalizeHue(baseHue + 150), saturation * 0.8, lightness + 0.1)
  const accent = hslToHex(normalizeHue(baseHue + 210), Math.min(saturation + 0.1, 1), Math.max(lightness - 0.1, 0.2))
  
  return {
    primary,
    secondary,
    accent,
    name: "Split Harmony",
    type: 'splitComplementary'
  }
}

export function generateTriadicPalette(baseHue: number): ColorPalette {
  const saturation = 0.5 + Math.random() * 0.4 // 50-90% saturation
  const lightness = 0.4 + Math.random() * 0.4 // 40-80% lightness
  
  const primary = hslToHex(baseHue, saturation, lightness)
  const secondary = hslToHex(normalizeHue(baseHue + 120), saturation * 0.8, lightness + 0.1)
  const accent = hslToHex(normalizeHue(baseHue + 240), Math.min(saturation + 0.1, 1), Math.max(lightness - 0.1, 0.2))
  
  return {
    primary,
    secondary,
    accent,
    name: "Triadic Balance",
    type: 'triadic'
  }
}

export function generateTetradicPalette(baseHue: number): ColorPalette {
  const saturation = 0.4 + Math.random() * 0.4 // 40-80% saturation
  const lightness = 0.4 + Math.random() * 0.4 // 40-80% lightness
  
  const primary = hslToHex(baseHue, saturation, lightness)
  const secondary = hslToHex(normalizeHue(baseHue + 60), saturation * 0.7, lightness + 0.1)
  const accent = hslToHex(normalizeHue(baseHue + 180), Math.min(saturation + 0.2, 1), Math.max(lightness - 0.2, 0.1))
  
  return {
    primary,
    secondary,
    accent,
    name: "Tetradic Versatility",
    type: 'tetradic'
  }
}

// Main palette generator
export function generateHarmoniousPalette(type?: PaletteType): ColorPalette {
  const paletteTypes: PaletteType[] = ['monochromatic', 'analogous', 'complementary', 'splitComplementary', 'triadic', 'tetradic']
  const selectedType = type || paletteTypes[Math.floor(Math.random() * paletteTypes.length)]
  const baseHue = Math.random() * 360
  
  switch (selectedType) {
    case 'monochromatic':
      return generateMonochromaticPalette(baseHue)
    case 'analogous':
      return generateAnalogousPalette(baseHue)
    case 'complementary':
      return generateComplementaryPalette(baseHue)
    case 'splitComplementary':
      return generateSplitComplementaryPalette(baseHue)
    case 'triadic':
      return generateTriadicPalette(baseHue)
    case 'tetradic':
      return generateTetradicPalette(baseHue)
    default:
      return generateAnalogousPalette(baseHue)
  }
}

// Generate complete theme palette with background and text colors
export function generateRandomCoolPalette(type?: PaletteType) {
  const colorPalette = generateHarmoniousPalette(type)
  
  // Generate complementary background and text colors
  const primary = chroma(colorPalette.primary)
  const secondary = chroma(colorPalette.secondary)
  const accent = chroma(colorPalette.accent)
  
  // Create a light background that works with all colors
  const bgLight = chroma.mix(primary, secondary, 0.1).brighten(2.5).saturate(-0.3)
  const surfaceLight = chroma.mix(primary, secondary, 0.05).brighten(1.8).saturate(-0.2)
  
  // Create a dark background that works with all colors
  const bgDark = chroma.mix(primary, secondary, 0.2).darken(3).saturate(0.5)
  const surfaceDark = chroma.mix(primary, secondary, 0.3).darken(2).saturate(0.3)
  
  // Generate text colors with good contrast
  const textLight = pickTextFor(bgLight.hex())
  const textSecondaryLight = chroma.mix(textLight, bgLight.hex(), 0.3).hex()
  
  const textDark = pickTextFor(bgDark.hex())
  const textSecondaryDark = chroma.mix(textDark, bgDark.hex(), 0.4).hex()
  
  return {
    light: {
      primary: primary.hex(),
      primaryContrast: pickTextFor(primary.hex()),
      secondary: secondary.hex(),
      accent: accent.hex(),
      bg: bgLight.hex(),
      surface: surfaceLight.hex(),
      text: textLight,
      textSecondary: textSecondaryLight
    },
    dark: {
      primary: primary.hex(),
      primaryContrast: pickTextFor(primary.hex()),
      secondary: secondary.hex(),
      accent: accent.hex(),
      bg: bgDark.hex(),
      surface: surfaceDark.hex(),
      text: textDark,
      textSecondary: textSecondaryDark
    },
    name: colorPalette.name,
    type: colorPalette.type
  }
}