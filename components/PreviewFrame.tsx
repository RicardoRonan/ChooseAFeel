"use client"
import { useProject } from "@/store/project"
import { useState, useEffect } from "react"
import WebsiteLanding from "./templates/WebsiteLanding"
import Dashboard from "./templates/Dashboard"
import Blog from "./templates/Blog"
import Products from "./templates/Products"
import Portfolio from "./templates/Portfolio"
import RubikCube from "./templates/RubikCube"

export default function PreviewFrame() {
  const { project } = useProject()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentTemplate, setCurrentTemplate] = useState(project.type)
  
  // Handle template transitions
  useEffect(() => {
    if (project.type !== currentTemplate) {
      setIsTransitioning(true)
      
      // Start fade out
      setTimeout(() => {
        setCurrentTemplate(project.type)
        setIsTransitioning(false)
      }, 150) // Half of the transition duration
    }
  }, [project.type, currentTemplate])
  
  const renderTemplate = () => {
    switch (currentTemplate) {
      case 'dashboard':
        return <Dashboard />
      case 'blog':
        return <Blog />
      case 'products':
        return <Products />
      case 'portfolio':
        return <Portfolio />
      case 'rubik':
        return <RubikCube />
      case 'website':
      default:
        return <WebsiteLanding />
    }
  }
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Preview container - centered */}
      <div className="flex items-center justify-center w-full h-full">
        <div 
          id="preview-root" 
          className={`transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? 'opacity-0 scale-95 translate-y-4' 
              : 'opacity-100 scale-100 translate-y-0'
          }`}
          style={{ 
            transformOrigin: "center center",
            minWidth: "320px",
            minHeight: "200px",
            maxWidth: "1200px",
            width: "100%",
            height: "auto"
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  )
}
