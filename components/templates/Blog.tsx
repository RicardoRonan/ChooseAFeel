"use client"
import { useProject } from "@/store/project"
import { scrollToSection, SECTIONS } from "@/lib/navigation"

// Helper function to get CSS custom property values
const getCSSVar = (property: string) => {
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
            <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Design Blog</h1>
            <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Insights, tutorials, and inspiration for modern designers</p>
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
              The Psychology of Color in Modern Web Design
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Understanding how colors influence user behavior and decision-making is crucial for creating effective digital experiences. In this comprehensive guide, I explore the science behind color psychology and how to apply it to your design work.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}>
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-primary-contrast)' }}>SM</span>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Sarah Martinez</p>
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
                title: "Building Accessible Color Palettes",
                excerpt: "Learn how to create color combinations that work for everyone, including users with visual impairments.",
                author: "Alex Chen",
                date: "Dec 12, 2024",
                readTime: "4 min read",
                category: "Accessibility"
              },
              {
                title: "Typography Trends for 2024",
                excerpt: "Discover the latest typography trends and how they're shaping modern digital design.",
                author: "Maria Rodriguez",
                date: "Dec 10, 2024",
                readTime: "6 min read",
                category: "Typography"
              },
              {
                title: "Mobile-First Design Principles",
                excerpt: "Essential principles for creating designs that work beautifully across all device sizes.",
                author: "David Kim",
                date: "Dec 8, 2024",
                readTime: "7 min read",
                category: "Mobile"
              },
              {
                title: "The Future of UI Animation",
                excerpt: "Exploring emerging trends in interface animation and micro-interactions.",
                author: "Emma Wilson",
                date: "Dec 5, 2024",
                readTime: "5 min read",
                category: "Animation"
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
                    onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                    onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
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
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>About the Blog</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
              I share insights, tutorials, and inspiration for designers who want to create better digital experiences.
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
              {['Color Theory', 'Typography', 'UI/UX', 'Accessibility', 'Mobile Design', 'Animation', 'Branding', 'Tools'].map((tag, index) => (
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
                      const element = e.target as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.backgroundColor = computedStyle.getPropertyValue('--color-primary')
                      element.style.color = computedStyle.getPropertyValue('--color-primary-contrast')
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== 0) {
                      if (typeof window === 'undefined') return
                      const element = e.target as HTMLElement
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
                { title: "Design Systems 101", date: "Dec 14" },
                { title: "Color Accessibility Guide", date: "Dec 11" },
                { title: "Figma Tips & Tricks", date: "Dec 9" },
                { title: "User Research Methods", date: "Dec 7" }
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
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center" 
                style={{ backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius)' }}
                onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-primary-contrast)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button 
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center" 
                style={{ backgroundColor: 'var(--color-secondary)', borderRadius: 'var(--radius)' }}
                onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-primary-contrast)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button 
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center" 
                style={{ backgroundColor: 'var(--color-accent)', borderRadius: 'var(--radius)' }}
                onClick={() => scrollToSection(SECTIONS.BLOG.NEWSLETTER)}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-primary-contrast)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </button>
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
                  <span className="text-white font-bold text-sm">CAF</span>
                </div>
                <span className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>ChooseAFeel</span>
              </div>
              <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Create perfect color palettes with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Tools</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>Documentation</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>Figma Integration</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.NEWSLETTER)}>VS Code Extension</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>API Access</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>Templates</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.NEWSLETTER)}>Color Games</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.NEWSLETTER)}>Get Support</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}>Community</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.BLOG.ARTICLES)}>GitHub</button></li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Support Me</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Love my tool? Help me grow by sharing with fellow designers.</p>
              <button 
                className="transition-colors hover:underline font-medium text-sm sm:text-base" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.BLOG.FEATURED)}
              >
                Share with friends
              </button>
            </div>
          </div>
          <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <p className="text-sm sm:text-base">&copy; 2024 ChooseAFeel. Made with ❤️ for designers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
