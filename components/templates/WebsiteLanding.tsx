"use client"
import { useProject } from "@/store/project"
import { scrollToSection, SECTIONS } from "@/lib/navigation"

// Helper function to get CSS custom property values
const getCSSVar = (property: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

export default function WebsiteLanding() {
  const { website } = useProject(s => s.project)
  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      
      {/* Hero Section */}
      <section id={SECTIONS.WEBSITE_LANDING.HERO} className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ borderRadius: 'var(--radius)' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-text)' }}>
          <span style={{ color: 'var(--color-text)' }}>Choose</span>
          <span style={{ color: 'var(--color-primary)' }}>A</span>
          <span style={{ color: 'var(--color-accent)' }}>Feel</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
          Design Your <span style={{ color: 'var(--color-accent)' }}>Perfect</span><br />
          Brand <span style={{ color: 'var(--color-accent)' }}>Palette</span><br />
          With Our <span style={{ color: 'var(--color-primary)' }}>Control Panel</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
          Use our intuitive control panel to customize colors, fonts, and styling in real-time.<br />
          See your changes instantly applied to professional website templates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button 
            className="button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
            onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
          >
            Start Designing
          </button>
          <button 
            className="button-accent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
            onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.WHY_CHOOSE)}
          >
            Learn More
          </button>
        </div>
        <p className="text-xs sm:text-sm mt-4 sm:mt-6" style={{ color: 'var(--color-text-secondary)' }}>Open the control panel on the right to start customizing</p>
      </section>

      {/* Why ChooseAFeel Section */}
      <section id={SECTIONS.WEBSITE_LANDING.WHY_CHOOSE} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12" style={{ color: 'var(--color-text)' }}>Why Choose Our Control Panel?</h2>
          <div className="equal-height-cards grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="surface-card p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 surface-primary" style={{ borderRadius: 'var(--radius)' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Real-Time Control Panel</h3>
              <p className="text-sm sm:text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>Our intuitive control panel lets you adjust colors, fonts, and styling instantly. See changes applied in real-time as you design.</p>
              <div className="mt-auto">
                <span className="accent-badge text-xs sm:text-sm">⚡ Live Preview</span>
              </div>
            </div>
            <div className="surface-card p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 surface-accent" style={{ borderRadius: 'var(--radius)' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Professional Templates</h3>
              <p className="text-sm sm:text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>Test your color palettes on real website templates including landing pages, dashboards, blogs, and portfolios.</p>
              <div className="mt-auto">
                <span className="accent-badge text-xs sm:text-sm">🎨 Multiple Templates</span>
              </div>
            </div>
            <div className="surface-card p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 surface-primary" style={{ borderRadius: 'var(--radius)' }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Advanced Controls</h3>
              <p className="text-sm sm:text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>Fine-tune every aspect with our comprehensive control panel: colors, typography, spacing, borders, and accessibility checks.</p>
              <div className="mt-auto">
                <span className="accent-badge text-xs sm:text-sm">⚙️ Full Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-primary)' }}>50K+</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Designers trust me</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-accent)' }}>100%</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Always free to use</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-secondary)' }}>15K+</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Projects created</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2" style={{ color: 'var(--color-accent)' }}>500+</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Happy customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does it Work Section */}
      <section id={SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12" style={{ color: 'var(--color-text)' }}>How Our Control Panel Works</h2>
          <p className="text-center mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Use our intuitive control panel to design your perfect color scheme in 4 simple steps.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 text-white flex items-center justify-center font-bold text-xs sm:text-sm surface-primary flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Open the Control Panel</h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Click the control panel on the right to access all customization options. Choose from Theme or Presets tabs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 text-white flex items-center justify-center font-bold text-xs sm:text-sm surface-primary flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Customize Colors & Typography</h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Use color pickers to adjust primary, secondary, accent colors, and backgrounds. Select fonts and adjust border radius.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 text-white flex items-center justify-center font-bold text-xs sm:text-sm surface-primary flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Watch Live Preview</h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>See your changes applied instantly to the website template. Toggle between light/dark modes and test accessibility.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 text-white flex items-center justify-center font-bold text-xs sm:text-sm surface-primary flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Export Your Design</h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Use the export buttons in the top navigation to download your design as PNG images or ZIP files for development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id={SECTIONS.WEBSITE_LANDING.PRICING} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>Simple Pricing</h2>
          <p className="text-center mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Completely free forever! No hidden costs or premium tiers.</p>
          <div className="equal-height-cards grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="surface-card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Starter</h3>
              <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>Free</div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Unlimited color combinations</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Multiple export formats</span>
                </li>
              </ul>
              <button 
                className="button w-full py-2 sm:py-3 px-3 sm:px-4 font-medium text-sm sm:text-base mt-auto"
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
              >
                Start Creating
              </button>
            </div>
            <div className="surface-card p-4 sm:p-6 relative border-2" style={{ borderColor: 'var(--color-primary)', boxShadow: 'var(--shadow-md)' }}>
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                <span className="surface-primary px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">Recommended</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Creator</h3>
              <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>Free</div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Everything in Starter</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Advanced color tools</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Project management</span>
                </li>
              </ul>
              <button 
                className="button w-full py-2 sm:py-3 px-3 sm:px-4 font-medium text-sm sm:text-base mt-auto"
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
              >
                Start Creating
              </button>
            </div>
            <div className="surface-card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Team</h3>
              <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>Free</div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Everything in Creator</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 icon-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Priority support</span>
                </li>
              </ul>
              <button 
                className="button w-full py-2 sm:py-3 px-3 sm:px-4 font-medium text-sm sm:text-base mt-auto"
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.CTA)}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id={SECTIONS.WEBSITE_LANDING.TESTIMONIALS} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12" style={{ color: 'var(--color-text)' }}>What Users Say</h2>
          <p className="text-center mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Hear from designers who love our control panel and color tool.</p>
          <div className="equal-height-cards grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="surface-elevated p-4 sm:p-6">
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;The control panel is incredibly intuitive! I can adjust colors and see changes instantly. This saved me hours of design work.&quot;</p>
              <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 avatar-blue flex items-center justify-center surface-card flex-shrink-0">
                  <span className="font-semibold text-xs sm:text-sm">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Sarah Martinez</div>
                  <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>UI Designer</div>
                </div>
              </div>
            </div>
            <div className="surface-elevated p-4 sm:p-6">
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;The live preview feature is amazing! I can test my color palettes on real website templates and see exactly how they&apos;ll look. Game changer!&quot;</p>
              <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 avatar-green flex items-center justify-center surface-card flex-shrink-0">
                  <span className="font-semibold text-xs sm:text-sm">AJ</span>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Alex Johnson</div>
                  <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Brand Designer</div>
                </div>
              </div>
            </div>
            <div className="surface-elevated p-4 sm:p-6">
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;The control panel makes it so easy to experiment with different color combinations. The export features are incredible too - I can get my designs in any format I need.&quot;</p>
              <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 avatar-purple flex items-center justify-center surface-card flex-shrink-0">
                  <span className="font-semibold text-xs sm:text-sm">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Mike Chen</div>
                  <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Frontend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id={SECTIONS.WEBSITE_LANDING.FAQ} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12" style={{ color: 'var(--color-text)' }}>Frequently Asked Questions</h2>
          <p className="text-center mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Everything you need to know about our control panel and color tool.</p>
          <div className="space-y-3 sm:space-y-4">
            <div className="surface-card p-4 sm:p-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>How do I access the control panel?</h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>The control panel is located on the right side of the screen. Click the arrow button to open it, then use the Theme and Presets tabs to customize your design.</p>
            </div>
            <div className="surface-card p-4 sm:p-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>Does the tool check color accessibility?</h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Yes! My built-in accessibility checker ensures your color combinations meet WCAG standards for optimal readability and inclusivity.</p>
            </div>
            <div className="surface-card p-4 sm:p-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>What can I customize in the control panel?</h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>The control panel lets you adjust colors (primary, secondary, accent, backgrounds), typography, border radius, toggle borders, switch between light/dark modes, and choose from preset color palettes.</p>
            </div>
            <div className="surface-card p-4 sm:p-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>How does the live preview work?</h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>As you make changes in the control panel, you&apos;ll see them applied instantly to the website template. This gives you a real-time preview of how your design choices will look in practice.</p>
            </div>
            <div className="surface-card p-4 sm:p-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>Are there any usage restrictions?</h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>No restrictions at all! Use your color palettes freely for any commercial or personal projects without limitations.</p>
            </div>
            <div className="surface-card p-4 sm:p-6">
              <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>How do I get help with the control panel?</h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Click the help button (?) in the control panel header to see a detailed guide of all available controls and features. You can also use the randomize button for inspiration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id={SECTIONS.WEBSITE_LANDING.RESOURCES} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12" style={{ color: 'var(--color-text)' }}>Control Panel Resources</h2>
          <p className="text-center mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Learn how to master our control panel and create amazing designs.</p>
          <div className="equal-height-cards grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="surface-elevated p-4 sm:p-6">
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Control Panel Master Guide</h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)' }}>Learn how to use every feature in our control panel, from color customization to typography and accessibility checks.</p>
              <button 
                className="text-xs sm:text-sm font-medium transition-colors icon-primary mt-auto" 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.FAQ)}
              >
                Learn more →
              </button>
            </div>
            <div className="surface-elevated p-4 sm:p-6">
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Live Preview Best Practices</h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)' }}>Discover how to effectively use our live preview feature to test color combinations and make confident design decisions.</p>
              <button 
                className="text-xs sm:text-sm font-medium transition-colors icon-primary mt-auto" 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
              >
                Explore →
              </button>
            </div>
            <div className="surface-elevated p-4 sm:p-6">
              <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Export & Integration Guide</h3>
              <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)' }}>Learn how to export your designs and integrate them into your development workflow using our PNG and ZIP export features.</p>
              <button 
                className="text-xs sm:text-sm font-medium transition-colors icon-primary mt-auto" 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.TESTIMONIALS)}
              >
                Discover →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id={SECTIONS.WEBSITE_LANDING.CTA} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>Ready to Create Something Amazing?</h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Join thousands of designers who trust my tool for their color palette needs.</p>
          <button 
            className="button px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
            onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
          >
            Start Designing Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id={SECTIONS.WEBSITE_LANDING.FOOTER} className="surface-footer py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-16" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center surface-primary">
                  <span className="text-white font-bold text-xs sm:text-sm">CAF</span>
                </div>
                <span className="font-bold text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>ChooseAFeel</span>
              </div>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Create perfect color palettes with our intuitive control panel.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Control Panel</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}>Getting Started</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>Color Controls</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>Typography Settings</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.FAQ)}>Live Preview</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>Preset Palettes</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}>Export Options</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.FAQ)}>Get Support</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.TESTIMONIALS)}>Community</button></li>
                <li><button className="transition-colors hover:underline text-left text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>GitHub</button></li>
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
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.CTA)}
              >
                Share with friends
              </button>
            </div>
          </div>
          <div className="border-t mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 text-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <p className="text-xs sm:text-sm">&copy; 2024 ChooseAFeel. Made with ❤️ for designers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
