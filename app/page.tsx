"use client"
import TopNavbar from "@/components/TopNavbar"
import Sidebar from "@/components/Sidebar"
import PreviewFrame from "@/components/PreviewFrame"
import { useEffect, useState, useRef, Suspense } from "react"
import { useProject } from "@/store/project"
import { useSearchParams } from "next/navigation"
import type { ProjectType } from "@/store/project"

function EditorContent() {
  const searchParams = useSearchParams()
  const loadLocal = useProject((s) => s.loadLocal)
  const setType = useProject((s) => s.setType)
  const toggleDarkMode = useProject((s) => s.toggleDarkMode)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024
    }
    return false
  })
  const mainRef = useRef<HTMLElement>(null)
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    loadLocal()
  }, [loadLocal])

  useEffect(() => {
    if (!hasInitialized && searchParams) {
      const template = searchParams.get("template")
      const mode = searchParams.get("mode")

      if (template) {
        const validTemplates: ProjectType[] = [
          "website",
          "dashboard",
          "blog",
          "products",
          "portfolio",
          "rubik",
        ]
        if (validTemplates.includes(template as ProjectType)) {
          setType(template as ProjectType)
        }
      }

      if (mode === "dark") {
        const project = useProject.getState().project
        if (!project.theme.isDarkMode) {
          toggleDarkMode()
        }
      }

      setHasInitialized(true)
    }
  }, [searchParams, hasInitialized, setType, toggleDarkMode])

  useEffect(() => {
    const updateScrollPrevention = () => {
      const isMobile = window.innerWidth < 1024

      if (isMobile && !sidebarCollapsed) {
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.width = "100%"
        document.body.style.top = `-${window.scrollY}px`
      } else {
        const scrollY = document.body.style.top
        document.body.style.overflow = "unset"
        document.body.style.position = "unset"
        document.body.style.width = "unset"
        document.body.style.top = "unset"

        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || "0") * -1)
        }
      }
    }

    updateScrollPrevention()

    const handleResize = () => {
      updateScrollPrevention()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.position = "unset"
      document.body.style.width = "unset"
      document.body.style.top = "unset"
      window.removeEventListener("resize", handleResize)
    }
  }, [sidebarCollapsed])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (window.innerWidth < 1024) {
        const target = event.target as HTMLElement
        const sidebar = document.querySelector("aside")
        const sidebarToggleButtons = document.querySelectorAll(
          "[data-sidebar-toggle]"
        )

        const isClickOnToggleButton = Array.from(sidebarToggleButtons).some(
          (button) => button.contains(target) || button === target
        )

        const isClickOnBackdrop =
          target.classList.contains("bg-black") &&
          target.classList.contains("bg-opacity-50")

        if (
          sidebar &&
          !sidebarCollapsed &&
          !sidebar.contains(target) &&
          !isClickOnToggleButton &&
          !isClickOnBackdrop
        ) {
          setSidebarCollapsed(true)
        }
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 1024 && !sidebarCollapsed) {
        setSidebarCollapsed(true)
      } else if (window.innerWidth >= 1024 && sidebarCollapsed) {
        setSidebarCollapsed(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [sidebarCollapsed])

  return (
    <div
      className="min-h-screen transition-all duration-500 ease-in-out"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <TopNavbar sidebarCollapsed={sidebarCollapsed} />

      <main
        ref={mainRef}
        className={`pt-16 sm:pt-20 min-h-screen transition-all duration-500 ease-in-out ${
          sidebarCollapsed ? "pr-0" : "pr-0 lg:pr-80"
        }`}
      >
        <PreviewFrame />
      </main>

      <Sidebar
        isCollapsed={sidebarCollapsed}
        onCollapseChange={setSidebarCollapsed}
      />
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={
      <div
        className="min-h-screen transition-all duration-500 ease-in-out"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <TopNavbar sidebarCollapsed={true} />
        <main className="pt-16 sm:pt-20 min-h-screen">
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-600">Loading editor...</p>
          </div>
        </main>
      </div>
    }>
      <EditorContent />
    </Suspense>
  )
}
