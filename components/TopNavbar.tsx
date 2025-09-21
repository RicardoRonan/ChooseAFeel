"use client"
import { useProject, ProjectType } from "@/store/project"
import { exportPng, exportZip, websiteIndexHtml, websiteStylesCss } from "@/lib/export"
import { useState, useEffect, useRef } from "react"
import { Button, Dropdown } from "./shared"

interface TopNavbarProps {
  sidebarCollapsed?: boolean
}

export default function TopNavbar({ sidebarCollapsed = false }: TopNavbarProps) {
  const { project, setType } = useProject()
  
  const templateOptions: { value: ProjectType; label: string }[] = [
    { value: "website", label: "Website Landing" },
    { value: "dashboard", label: "Dashboard" },
    { value: "blog", label: "Blog" },
    { value: "products", label: "Products" },
    { value: "portfolio", label: "Portfolio" }
  ]

  
  async function handleExportPNG() {
    try {
      const el = document.getElementById("preview-root")
      if (el) {
        const filename = `${project.type}-preview.png`
        await exportPng(el, filename)
      } else {
        alert("Preview not found. Please make sure the preview is loaded.")
      }
    } catch (error) {
      console.error("PNG export failed:", error)
      alert("PNG export failed. Please try again.")
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

  function handleTemplateSelect(templateType: ProjectType) {
    setType(templateType)
  }

  return (
    <nav className={`fixed top-0 left-0 z-[9998] backdrop-blur-md shadow-sm transition-all duration-300 ${
      sidebarCollapsed ? 'right-0' : 'right-0 lg:right-80 md:right-72 sm:right-64'
    }`} style={{ 
      backgroundColor: 'var(--color-bg)', 
      borderBottom: '1px solid var(--color-border)',
      borderRadius: '0 0 var(--radius) var(--radius)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Left section - App title */}
          <div className="flex items-center gap-4">
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--color-text)' }}>ChooseAFeel</h1>
          </div>

          {/* Right section - Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Templates Dropdown */}
            <Dropdown
              options={templateOptions}
              onSelect={handleTemplateSelect as (value: string) => void}
              placeholder="Templates"
              width="w-40"
              className="relative"
            />
            
            {/* Export Dropdown */}
            <Dropdown
              options={[
                { value: 'png', label: 'Export PNG' },
                { value: 'zip', label: 'Export ZIP' }
              ]}
              onSelect={(value) => {
                if (value === 'png') handleExportPNG()
                if (value === 'zip') handleExportZIP()
              }}
              placeholder="Export"
              width="w-32"
              className="relative"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
