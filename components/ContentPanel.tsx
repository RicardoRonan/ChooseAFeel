"use client"
import { useProject } from "@/store/project"
import { useState } from "react"
import { Button, Input, Textarea } from "./shared"

export default function ContentPanel() {
  const { project, updateWebsite, updateDashboard, updateBlog, updateProducts, updatePortfolio } = useProject()
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="space-y-4">

      {/* Content Editor */}
      <div className="rounded-lg p-3 shadow-sm" style={{ 
        backgroundColor: 'var(--color-bg)', 
        border: '1px solid var(--color-border)' 
      }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-sm" style={{ color: 'var(--color-text)' }}>Content</h3>
          <Button 
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            size="sm"
            className="text-xs"
          >
            {isExpanded ? 'Collapse' : 'Edit'}
          </Button>
        </div>
        {isExpanded && (
          <div className="space-y-2 fade-in">
            {project.type === 'website' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input label="Site name" value={project.website.siteName} onChange={v => updateWebsite({ siteName: v })} />
                  <Input label="Hero heading" value={project.website.heroHeading} onChange={v => updateWebsite({ heroHeading: v })} />
                </div>
                <Textarea label="Subcopy" value={project.website.subcopy} onChange={v => updateWebsite({ subcopy: v })} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input label="CTA label" value={project.website.cta} onChange={v => updateWebsite({ cta: v })} />
                  <Input label="Footer" value={project.website.footer} onChange={v => updateWebsite({ footer: v })} />
                </div>
                <Textarea label="Features (one per line)" value={project.website.features.join("\n")}
                  onChange={v => updateWebsite({ features: v.split("\n").filter(Boolean) })} />
              </>
            )}
            
            {project.type === 'dashboard' && (
              <>
                <Input label="Title" value={project.dashboard.title} onChange={v => updateDashboard({ title: v })} />
                <Textarea label="Subtitle" value={project.dashboard.subtitle} onChange={v => updateDashboard({ subtitle: v })} />
                <Textarea label="Metrics (one per line)" value={project.dashboard.metrics.join("\n")}
                  onChange={v => updateDashboard({ metrics: v.split("\n").filter(Boolean) })} />
                <Textarea label="Charts (one per line)" value={project.dashboard.charts.join("\n")}
                  onChange={v => updateDashboard({ charts: v.split("\n").filter(Boolean) })} />
              </>
            )}
            
            {project.type === 'blog' && (
              <>
                <Input label="Blog name" value={project.blog.blogName} onChange={v => updateBlog({ blogName: v })} />
                <Textarea label="Tagline" value={project.blog.tagline} onChange={v => updateBlog({ tagline: v })} />
                <Textarea label="Categories (one per line)" value={project.blog.categories.join("\n")}
                  onChange={v => updateBlog({ categories: v.split("\n").filter(Boolean) })} />
                <Input label="Featured post" value={project.blog.featuredPost} onChange={v => updateBlog({ featuredPost: v })} />
              </>
            )}
            
            {project.type === 'products' && (
              <>
                <Input label="Store name" value={project.products.storeName} onChange={v => updateProducts({ storeName: v })} />
                <Textarea label="Description" value={project.products.description} onChange={v => updateProducts({ description: v })} />
                <Textarea label="Categories (one per line)" value={project.products.categories.join("\n")}
                  onChange={v => updateProducts({ categories: v.split("\n").filter(Boolean) })} />
                <Input label="Featured product" value={project.products.featuredProduct} onChange={v => updateProducts({ featuredProduct: v })} />
              </>
            )}
            
            {project.type === 'portfolio' && (
              <>
                <Input label="Name" value={project.portfolio.name} onChange={v => updatePortfolio({ name: v })} />
                <Input label="Title" value={project.portfolio.title} onChange={v => updatePortfolio({ title: v })} />
                <Textarea label="Bio" value={project.portfolio.bio} onChange={v => updatePortfolio({ bio: v })} />
                <Textarea label="Skills (one per line)" value={project.portfolio.skills.join("\n")}
                  onChange={v => updatePortfolio({ skills: v.split("\n").filter(Boolean) })} />
                <Textarea label="Projects (one per line)" value={project.portfolio.projects.join("\n")}
                  onChange={v => updatePortfolio({ projects: v.split("\n").filter(Boolean) })} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

