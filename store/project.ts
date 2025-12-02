"use client"
import { create } from "zustand"
import { Theme, defaultTheme, darkTheme, applyTheme } from "@/lib/theme"
import { pickTextFor, generateRandomCoolPalette } from "@/lib/palette"
import { setFontLink, GOOGLE_FONTS } from "@/lib/fonts"
import { save, load } from "@/lib/storage"

export type ProjectType = "website" | "dashboard" | "blog" | "products" | "portfolio" | "rubik"

type WebsiteContent = {
  siteName: string
  heroHeading: string
  subcopy: string
  cta: string
  features: string[]
  footer: string
}

type DashboardContent = {
  title: string
  subtitle: string
  metrics: string[]
  charts: string[]
}

type BlogContent = {
  blogName: string
  tagline: string
  categories: string[]
  featuredPost: string
}

type ProductsContent = {
  storeName: string
  description: string
  categories: string[]
  featuredProduct: string
}

type PortfolioContent = {
  name: string
  title: string
  bio: string
  skills: string[]
  projects: string[]
}

export type Project = {
  id: string
  type: ProjectType
  theme: Theme
  website: WebsiteContent
  dashboard: DashboardContent
  blog: BlogContent
  products: ProductsContent
  portfolio: PortfolioContent
  cubeColors: {
    front: string
    back: string
    top: string
    bottom: string
    right: string
    left: string
  }
}

type State = {
  project: Project
  setType: (t: ProjectType) => void
  updateTheme: (patch: Partial<Theme>) => void
  setFontByLabel: (label: string) => void
  updateWebsite: (patch: Partial<WebsiteContent>) => void
  updateDashboard: (patch: Partial<DashboardContent>) => void
  updateBlog: (patch: Partial<BlogContent>) => void
  updateProducts: (patch: Partial<ProductsContent>) => void
  updatePortfolio: (patch: Partial<PortfolioContent>) => void
  updateCubeColors: (patch: Partial<Project['cubeColors']>) => void
  resetCubeColors: () => void
  randomizeCubeColors: () => void
  resetTheme: () => void
  toggleDarkMode: () => void
  randomizeColors: () => void
  saveLocal: () => void
  loadLocal: () => void
}

const defaultProject: Project = {
  id: "local",
  type: "website",
  theme: defaultTheme,
  cubeColors: {
    front: "#3b82f6",
    back: "#ef4444", 
    top: "#10b981",
    bottom: "#f59e0b",
    right: "#8b5cf6",
    left: "#06b6d4"
  },
  website: {
    siteName: "ColourPal",
    heroHeading: "Design Your Perfect Brand Palette Instantly",
    subcopy: "Struggling to pick the right colors for your project? See your palette come to life on a real website layout.",
    cta: "Start Designing",
    features: ["Lightning Fast", "True-to-Life Preview", "Effortless Design"],
    footer: "© 2025 TheDevRicardo. All rights reserved."
  },
  dashboard: {
    title: "Dashboard",
    subtitle: "Welcome back! Here's what's happening with your business today.",
    metrics: ["Total Revenue", "New Customers", "Active Projects", "Conversion Rate"],
    charts: ["Revenue Overview", "Top Products", "Recent Activity"]
  },
  blog: {
    blogName: "Design Blog",
    tagline: "Insights, tutorials, and inspiration for modern designers",
    categories: ["Design", "Typography", "UI/UX", "Accessibility", "Mobile", "Animation"],
    featuredPost: "The Psychology of Color in Modern Web Design"
  },
  products: {
    storeName: "Product Catalog",
    description: "Discover my collection of premium design tools and resources",
    categories: ["UI Kits", "Icons", "Templates", "Fonts", "Graphics", "Photos"],
    featuredProduct: "Modern UI Kit Pro"
  },
  portfolio: {
    name: "John Designer",
    title: "Creative Designer & UI/UX Specialist",
    bio: "I create beautiful, functional designs that solve real problems and delight users. With over 5 years of experience, I help brands tell their story through thoughtful design.",
    skills: ["UI/UX Design", "Brand Identity", "Web Design"],
    projects: ["E-commerce Platform", "Mobile Banking App", "Brand Identity", "SaaS Dashboard"]
  }
}

export const useProject = create<State>((set, get) => ({
  project: defaultProject,
  setType: (t) => set(s => ({ project: { ...s.project, type: t } })),
  updateTheme: (patch) => set(s => {
    const theme = { ...s.project.theme, ...patch }
    // auto compute primaryContrast if primary changed
    if (patch.palette?.primary) {
      const pc = pickTextFor(patch.palette.primary)
      theme.palette.primaryContrast = pc
    }
    queueMicrotask(() => applyTheme(theme))
    
    // Auto-sync cube colors with theme if on Rubik cube page
    const newProject = { ...s.project, theme }
    if (s.project.type === 'rubik') {
      newProject.cubeColors = {
        front: theme.palette.primary,
        back: theme.palette.secondary,
        top: theme.palette.accent,
        bottom: theme.palette.surface,
        right: theme.palette.text,
        left: theme.palette.textSecondary
      }
    }
    
    return { project: newProject }
  }),
  setFontByLabel: (label) => set(s => {
    const f = GOOGLE_FONTS.find(x => x.label === label)
    if (f) {
      setFontLink(f.href)
      const theme = { ...s.project.theme, fontFamily: f.cssFamily }
      queueMicrotask(() => applyTheme(theme))
      return { project: { ...s.project, theme } }
    }
    return s
  }),
  updateWebsite: (patch) => set(s => ({ project: { ...s.project, website: { ...s.project.website, ...patch } } })),
  updateDashboard: (patch) => set(s => ({ project: { ...s.project, dashboard: { ...s.project.dashboard, ...patch } } })),
  updateBlog: (patch) => set(s => ({ project: { ...s.project, blog: { ...s.project.blog, ...patch } } })),
  updateProducts: (patch) => set(s => ({ project: { ...s.project, products: { ...s.project.products, ...patch } } })),
  updatePortfolio: (patch) => set(s => ({ project: { ...s.project, portfolio: { ...s.project.portfolio, ...patch } } })),
  updateCubeColors: (patch) => set(s => ({ project: { ...s.project, cubeColors: { ...s.project.cubeColors, ...patch } } })),
  resetCubeColors: () => set(s => {
    const p = s.project.theme.palette
    return { 
      project: { 
        ...s.project, 
        cubeColors: {
          front: p.primary,
          back: p.secondary,
          top: p.accent,
          bottom: p.surface,
          right: p.text,
          left: p.textSecondary
        }
      } 
    }
  }),
  randomizeCubeColors: () => set(s => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
      '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
    ]
    const shuffled = colors.sort(() => 0.5 - Math.random())
    return { 
      project: { 
        ...s.project, 
        cubeColors: {
          front: shuffled[0],
          back: shuffled[1],
          top: shuffled[2],
          bottom: shuffled[3],
          right: shuffled[4],
          left: shuffled[5]
        }
      } 
    }
  }),
  resetTheme: () => set(s => {
    setFontLink(undefined)
    queueMicrotask(() => applyTheme(defaultTheme))
    return { project: { ...s.project, theme: defaultTheme } }
  }),
  toggleDarkMode: () => set(s => {
    const currentTheme = s.project.theme
    const isCurrentlyDark = currentTheme.isDarkMode
    const newTheme = { ...currentTheme, isDarkMode: !isCurrentlyDark }
    
    // Preserve custom brand colors (primary, secondary, primaryContrast) and palette type but adjust background/text colors
    if (!isCurrentlyDark) {
      // Switching to dark mode - use dark background/text colors
      newTheme.palette = {
        ...currentTheme.palette,
        bg: "#0f0f0f",
        surface: "#1a1a1a", 
        text: "#f8f9fa",
        textSecondary: "#d1d5db"
      }
    } else {
      // Switching to light mode - use light background/text colors
      newTheme.palette = {
        ...currentTheme.palette,
        bg: "#ffffff",
        surface: "#f8f9fa",
        text: "#0f0f0f", 
        textSecondary: "#374151"
      }
    }
    
    queueMicrotask(() => applyTheme(newTheme))
    return { project: { ...s.project, theme: newTheme } }
  }),
  randomizeColors: () => set(s => {
    const currentTheme = s.project.theme
    const randomPalette = generateRandomCoolPalette()
    
    // Update primary, secondary, and accent colors, keep everything else the same
    const newTheme = {
      ...currentTheme,
      palette: {
        ...currentTheme.palette,
        primary: randomPalette.light.primary,
        primaryContrast: randomPalette.light.primaryContrast,
        secondary: randomPalette.light.secondary,
        accent: randomPalette.light.accent
      }
    }
    
    queueMicrotask(() => applyTheme(newTheme))
    return { project: { ...s.project, theme: newTheme } }
  }),
  saveLocal: () => {
    const p = get().project
    save("brand-starter:project", p)
  },
  loadLocal: () => {
    const loaded = load<Project>("brand-starter:project")
    if (loaded) {
      set({ project: loaded })
      queueMicrotask(() => applyTheme(loaded.theme))
    } else {
      queueMicrotask(() => applyTheme(defaultTheme))
    }
  }
}))
