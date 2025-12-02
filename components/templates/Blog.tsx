"use client"
import { useProject } from "@/store/project"
import { scrollToSection, SECTIONS } from "@/lib/navigation"

// Helper function to get CSS custom property values
const getCSSVar = (property: string) => {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

export default function Blog() {
  const { website } = useProject(s => s.project)
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      
      {/* Header */}
      <header className="py-6 sm:py-8 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>ColourPal Blog</h1>
            <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Tips and guides for using the side panel on the right to customize colors</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button 
              className="button-accent px-4 py-2 text-sm font-medium w-full sm:w-auto"
              onClick={() => scrollToSection(SECTIONS.BLOG.NEWSLETTER)}
            >
              Subscribe
            </button>
            <button 
              className="button px-4 py-2 text-sm font-medium w-full sm:w-auto"
              onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}
            >
              Follow
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 py-6 sm:py-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          {/* Featured Article */}
          <article id={SECTIONS.BLOG.FEATURED} className="surface-card p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="accent-badge">Featured</span>
              <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Design • 5 min read</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>
              Getting Started with ColourPal Side Panel
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Learn how to use the side panel on the right to change colors, fonts, and styling. This guide shows you how to use color pickers, preset palettes, fonts, and accessibility checks.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}>
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-primary-contrast)' }}>CP</span>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>ColourPal Team</p>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Dec 15, 2024</p>
                </div>
              </div>
              <button 
                className="button-secondary px-4 py-2 text-sm font-medium w-full sm:w-auto"
                onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}
              >
                Read More
              </button>
            </div>
          </article>

          {/* Article Grid */}
          <div id={SECTIONS.BLOG.ARTICLES} className="equal-height-cards grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "Understanding Accessibility in Color Palettes",
                excerpt: "The side panel checks if your colors are easy to read. Learn how the accessibility checker works and why it matters.",
                author: "ColourPal Team",
                date: "Dec 12, 2024",
                readTime: "4 min read",
                category: "Accessibility"
              },
              {
                title: "Using Preset Color Palettes",
                excerpt: "In the side panel, click the Presets tab to find ready-made color palettes. Learn when to use presets vs. custom colors.",
                author: "ColourPal Team",
                date: "Dec 10, 2024",
                readTime: "6 min read",
                category: "Presets"
              },
              {
                title: "Exporting Your Color Palette",
                excerpt: "After customizing with the side panel, learn how to export your design as PNG images or ZIP files with code.",
                author: "ColourPal Team",
                date: "Dec 8, 2024",
                readTime: "7 min read",
                category: "Export"
              },
              {
                title: "Live Preview Features Explained",
                excerpt: "See how the live preview works when you change colors in the side panel. Test your colors on different templates instantly.",
                author: "ColourPal Team",
                date: "Dec 5, 2024",
                readTime: "5 min read",
                category: "Tutorial"
              }
            ].map((article, index) => (
              <article key={index} className="surface-card p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={index === 0 ? "accent-badge" : "px-2 py-1 text-xs font-medium"} style={index === 0 ? {} : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', borderRadius: 'var(--radius)' }}>{article.category}</span>
                  <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{article.readTime}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3" style={{ color: 'var(--color-text)' }}>{article.title}</h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}>
                      <span className="text-xs font-semibold" style={{ color: 'var(--color-primary-contrast)' }}>{article.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: 'var(--color-text)' }}>{article.author}</p>
                      <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{article.date}</p>
                    </div>
                  </div>
                  <button 
                    className="text-xs sm:text-sm font-medium transition-colors flex-shrink-0" 
                    style={{ color: 'var(--color-primary)' }} 
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.8'} 
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
                    onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}
                  >
                    Read →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div id={SECTIONS.BLOG.NEWSLETTER} className="surface-card p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Stay Updated</h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Get the latest design insights and tutorials delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-md text-sm focus:outline-none transition-colors"
                style={{ 
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  color: 'var(--color-text)'
                }}
                onFocus={(e) => {
                  if (typeof window === 'undefined') return
                  const element = e.target as HTMLElement
                  const computedStyle = getComputedStyle(document.documentElement)
                  element.style.borderColor = computedStyle.getPropertyValue('--color-primary')
                  e.target.style.boxShadow = '0 0 0 3px rgb(103 80 164 / 0.1)'
                }}
                onBlur={(e) => {
                  if (typeof window === 'undefined') return
                  const element = e.target as HTMLElement
                  const computedStyle = getComputedStyle(document.documentElement)
                  element.style.borderColor = computedStyle.getPropertyValue('--color-border')
                  e.target.style.boxShadow = 'none'
                }}
              />
              <button 
                className="button px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium w-full sm:w-auto"
                onClick={() => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  if (emailInput && emailInput.value) {
                    alert(`Thank you for subscribing with ${emailInput.value}! You'll receive my latest design insights.`);
                    emailInput.value = '';
                  } else {
                    alert('Please enter a valid email address to subscribe.');
                  }
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* About */}
          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>About ColourPal</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
              ColourPal helps you create color palettes using the side panel on the right. Learn how to use all the features to make beautiful designs.
            </p>
            <div className="flex items-center gap-2">
              <button 
                className="button-secondary px-2 sm:px-3 py-1 text-xs font-medium"
                onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}
              >
                Follow
              </button>
              <button 
                className="button-secondary px-2 sm:px-3 py-1 text-xs font-medium"
                onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}
              >
                RSS
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Popular Tags</h3>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {['Side Panel', 'Color Picker', 'Presets', 'Accessibility', 'Export', 'Templates', 'Typography', 'Live Preview'].map((tag, index) => (
                <button 
                  key={index}
                  className={index === 0 ? "accent-badge" : "px-2 sm:px-3 py-1 text-xs font-medium transition-colors"}
                  style={index === 0 ? {} : { 
                    backgroundColor: 'var(--color-surface)', 
                    color: 'var(--color-text-secondary)',
                    borderRadius: 'var(--radius)'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== 0) {
                      if (typeof window === 'undefined') return
                      const element = e.currentTarget as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.backgroundColor = computedStyle.getPropertyValue('--color-primary')
                      element.style.color = computedStyle.getPropertyValue('--color-primary-contrast')
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== 0) {
                      if (typeof window === 'undefined') return
                      const element = e.currentTarget as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.backgroundColor = computedStyle.getPropertyValue('--color-surface')
                      element.style.color = computedStyle.getPropertyValue('--color-text-secondary')
                    }
                  }}
                  onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Recent Posts</h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                { title: "Side Panel Overview", date: "Dec 14" },
                { title: "Accessibility Guide", date: "Dec 11" },
                { title: "Preset Palettes Tips", date: "Dec 9" },
                { title: "Export Tutorial", date: "Dec 7" }
              ].map((post, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--color-text)' }}>{post.title}</p>
                  <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{post.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Connect</h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a 
                href="https://thedevricardo.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium transition-colors" 
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-contrast)', borderRadius: 'var(--radius)' }}
                onMouseEnter={(e) => {
                  const element = e.currentTarget as HTMLElement
                  element.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget as HTMLElement
                  element.style.opacity = '1'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Portfolio
              </a>
              <a 
                href="https://www.linkedin.com/in/the-dev-ricardo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium transition-colors" 
                style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary-contrast)', borderRadius: 'var(--radius)' }}
                onMouseEnter={(e) => {
                  const element = e.currentTarget as HTMLElement
                  element.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget as HTMLElement
                  element.style.opacity = '1'
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="surface-footer py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center surface-primary">
                  <span className="text-white font-bold text-sm">CP</span>
                </div>
                <span className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>ColourPal</span>
              </div>
              <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Create perfect color palettes with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Tools</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>Getting Started Guide</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>Side Panel Tutorial</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>Accessibility Tips</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>Export Guide</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>Template Overview</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>Preset Palettes</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>Help & Support</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>Tutorial Library</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.NEWSLETTER)}>FAQ</button></li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Support Me</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Love my tool? Help me grow by sharing with fellow designers.</p>
              <button 
                className="transition-colors hover:underline font-medium text-sm sm:text-base" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <p className="text-sm sm:text-base">&copy; 2025 TheDevRicardo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
