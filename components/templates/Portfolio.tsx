"use client"
import { useProject } from "@/store/project"
import { scrollToSection, SECTIONS } from "@/lib/navigation"

// Helper function to get CSS custom property values
const getCSSVar = (property: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

export default function Portfolio() {
  const { website } = useProject(s => s.project)
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      
      {/* Hero Section */}
      <section id={SECTIONS.PORTFOLIO.HERO} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: 'var(--color-primary-contrast)' }}>CP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>
            ColourPal
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Color Palette Customization Tool
          </p>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Open the side panel on the right to change colors and fonts. See your changes update instantly on this website. Everything is free and easy to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              className="button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}
            >
              Explore Templates
            </button>
            <button 
              className="button-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.SKILLS)}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id={SECTIONS.PORTFOLIO.SKILLS} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>ColourPal Features</h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Everything you need to create perfect color palettes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Color Customization",
              description: "Use the side panel to change colors instantly. Click any color to pick a new one or choose from preset palettes.",
              skills: ["Color Picker", "Presets", "Randomize", "Live Preview", "Export"]
            },
            {
              title: "Template Library",
              description: "Switch between different website styles using the side panel. Test your colors on different templates.",
              skills: ["Website Landing", "Dashboard", "Blog", "Products", "Portfolio"]
            },
            {
              title: "Export & Integration",
              description: "After customizing with the side panel, click export at the top to download as PNG or ZIP files.",
              skills: ["PNG Export", "ZIP Export", "CSS Copy", "Accessibility", "WCAG AA"]
            }
          ].map((skill, index) => (
            <div key={index} className="surface-card p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center" style={{ backgroundColor: index === 1 ? 'var(--color-accent)' : 'var(--color-secondary)', borderRadius: 'var(--radius)' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: 'var(--color-text)' }}>{skill.title}</h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{skill.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {skill.skills.map((skillName, skillIndex) => (
                  <span key={skillIndex} className={skillIndex === 0 ? "accent-badge text-xs sm:text-sm" : "px-2 sm:px-3 py-1 text-xs font-medium"} style={skillIndex === 0 ? {} : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', borderRadius: 'var(--radius)' }}>
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id={SECTIONS.PORTFOLIO.PROJECTS} className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>ColourPal Features</h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Explore what makes our color palette tool powerful</p>
        </div>
        <div className="equal-height-cards grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: "Live Side Panel",
              category: "Side Panel",
              description: "The side panel on the right lets you change colors, fonts, borders, and more. Watch this website update instantly.",
              image: "🎛️",
              tags: ["Live Preview", "Color Picker", "Theme Controls", "Accessibility"]
            },
            {
              title: "Preset Color Palettes",
              category: "Presets",
              description: "In the side panel, click the Presets tab to choose ready-made color palettes or create your own.",
              image: "🎨",
              tags: ["Presets", "Color Theory", "Harmony", "Randomize"]
            },
            {
              title: "Multiple Templates",
              category: "Templates",
              description: "Use the side panel to switch between different website styles. Test your colors on landing pages, dashboards, and blogs.",
              image: "📄",
              tags: ["Templates", "Website", "Dashboard", "Blog"]
            },
            {
              title: "Export Options",
              category: "Export",
              description: "After customizing with the side panel, click export buttons at the top to download as PNG images or ZIP files with code.",
              image: "📤",
              tags: ["PNG Export", "ZIP Export", "CSS Copy", "Workflow"]
            }
          ].map((project, index) => (
            <div key={index} className="surface-card p-4 sm:p-6 group">
              <div className="w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" style={{ backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius)' }}>
                {project.image}
              </div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className={index === 0 ? "accent-badge text-xs sm:text-sm" : "px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium"} style={index === 0 ? {} : { backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-contrast)', borderRadius: 'var(--radius)' }}>
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: 'var(--color-text)' }}>{project.title}</h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)', borderRadius: 'var(--radius)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <button 
                  className="button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium w-full sm:w-auto"
                  onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}
                >
                  View Project
                </button>
                <button 
                  className="button-secondary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium w-full sm:w-auto"
                  onClick={() => scrollToSection(SECTIONS.PORTFOLIO.SKILLS)}
                >
                  Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id={SECTIONS.PORTFOLIO.TESTIMONIALS} className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>What Users Say</h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Feedback from designers using ColourPal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              quote: "The side panel on the right is so easy to use! I can test colors instantly and see them update on different templates. This saved me hours.",
              author: "Sarah Martinez",
              role: "UI Designer",
              avatar: "SM"
            },
            {
              quote: "The live preview is amazing! I change colors in the side panel and see them update instantly. The accessibility checker helps me pick better colors.",
              author: "Mike Chen",
              role: "Brand Designer",
              avatar: "MC"
            },
            {
              quote: "After customizing with the side panel, I can export as PNG or ZIP. ColourPal has become essential to my design process.",
              author: "Emily Davis",
              role: "Frontend Developer",
              avatar: "ED"
            }
          ].map((testimonial, index) => (
            <div key={index} className="surface-card p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}>
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-primary-contrast)' }}>{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>{testimonial.author}</p>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id={SECTIONS.PORTFOLIO.CONTACT} className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>Ready to Get Started?</h2>
          <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Start creating beautiful color palettes with ColourPal. Open the side panel on the right to change colors, fonts, and styling instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <button 
              className="button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}
            >
              Learn How to Use
            </button>
            <button 
              className="button-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}
            >
              Explore Templates
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <button 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" 
              style={{ backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.CONTACT)}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--color-primary-contrast)' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
            <button 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" 
              style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.TESTIMONIALS)}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--color-primary-contrast)' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </button>
            <button 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" 
              style={{ backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}
              onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--color-primary-contrast)' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="surface-footer py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center surface-primary">
                  <span className="text-white font-bold text-xs sm:text-sm">CP</span>
                </div>
                <span className="font-bold text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>ColourPal</span>
              </div>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Create perfect color palettes with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Tools</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.SKILLS)}>Getting Started</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}>Feature Overview</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}>Side Panel Guide</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}>Export Tutorial</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}>Template Guide</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.SKILLS)}>Accessibility Guide</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.SKILLS)}>Help & Support</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.TESTIMONIALS)}>User Testimonials</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PORTFOLIO.PROJECTS)}>Feature Guide</button></li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Support Me</h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Love my tool? Help me grow by sharing with fellow designers.</p>
              <button 
                className="transition-colors hover:underline font-medium text-xs sm:text-sm" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.PORTFOLIO.SKILLS)}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="border-t mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 text-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <p className="text-xs sm:text-sm">&copy; 2025 TheDevRicardo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
