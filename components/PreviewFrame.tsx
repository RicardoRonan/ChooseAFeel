"use client"
import { useProject } from "@/store/project"
import WebsiteLanding from "./templates/WebsiteLanding"
import Dashboard from "./templates/Dashboard"
import Blog from "./templates/Blog"
import Products from "./templates/Products"
import Portfolio from "./templates/Portfolio"
import RubikCube from "./templates/RubikCube"

export default function PreviewFrame() {
  const { project } = useProject()
  
  const renderTemplate = () => {
    switch (project.type) {
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
          className="fade-in"
          style={{ 
            transformOrigin: "center center",
            transition: "transform 0.2s ease",
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
