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
    <div className="w-full max-w-6xl mx-auto space-y-4" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      
      {/* Hero Section */}
      <section id={SECTIONS.WEBSITE_LANDING.HERO} className="text-center py-20 px-6" style={{ borderRadius: 'var(--radius)' }}>
        <h1 className="text-6xl md:text-7xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
          <span style={{ color: 'var(--color-text)' }}>Choose</span>
          <span style={{ color: 'var(--color-primary)' }}>A</span>
          <span style={{ color: 'var(--color-accent)' }}>Feel</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
          Design Your <span style={{ color: 'var(--color-accent)' }}>Perfect</span><br />
          Brand <span style={{ color: 'var(--color-accent)' }}>Palette</span><br />
          Instantly
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
          Struggling to pick the right colors for your project?<br />
          See your palette come to life on a real website layout.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="button px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
          >
            Start Designing
          </button>
          <button 
            className="button-accent px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.WHY_CHOOSE)}
          >
            Learn More
          </button>
        </div>
        <p className="text-sm mt-6" style={{ color: 'var(--color-text-secondary)' }}>Keep scrolling to explore features</p>
      </section>

      {/* Why ChooseAFeel Section */}
      <section id={SECTIONS.WEBSITE_LANDING.WHY_CHOOSE} className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose My Tool?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 surface-primary" style={{ borderRadius: 'var(--radius)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Lightning Fast</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Skip the endless trial and error. Make confident color decisions in minutes, not hours.</p>
              <div className="mt-4">
                <span className="accent-badge">⚡ Instant Results</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 surface-accent" style={{ borderRadius: 'var(--radius)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>True-to-Life Preview</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>See exactly how your colors will look in practice. No more guessing with abstract color swatches.</p>
              <div className="mt-4">
                <span className="accent-badge">👁️ Live Preview</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 surface-primary" style={{ borderRadius: 'var(--radius)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Effortless Design</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Just a few clicks and you&apos;re done! Export your perfect color scheme in any format you need.</p>
              <div className="mt-4">
                <span className="accent-badge">🎨 Auto-Harmony</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>50K+</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Designers trust me</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>100%</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Always free to use</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-secondary)' }}>15K+</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Projects created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>500+</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>Happy customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does it Work Section */}
      <section id={SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS} className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>Create your perfect color scheme in just 4 simple steps.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 text-white flex items-center justify-center font-bold text-sm surface-primary">1</div>
                <div>
                  <h3 className="font-semibold mb-2">Pick your base colors</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Select neutral tones for your text and background to establish the foundation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 text-white flex items-center justify-center font-bold text-sm surface-primary">2</div>
                <div>
                  <h3 className="font-semibold mb-2">Select primary and secondary</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Primary colors for key actions and headers, secondary colors for supporting elements and cards.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 text-white flex items-center justify-center font-bold text-sm surface-primary">3</div>
                <div>
                  <h3 className="font-semibold mb-2">Add accent touches</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Accent colors bring life to links, highlights, images, and interactive elements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 text-white flex items-center justify-center font-bold text-sm surface-primary">4</div>
                <div>
                  <h3 className="font-semibold mb-2">Download and use</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Export your palette in multiple formats and start using it in your projects right away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id={SECTIONS.WEBSITE_LANDING.PRICING} className="py-20 px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>Completely free forever! No hidden costs or premium tiers.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="surface-card p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Starter</h3>
              <div className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Free</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Unlimited color combinations</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Multiple export formats</span>
                </li>
              </ul>
              <button 
                className="button w-full py-3 px-4 font-medium" 
                style={{ backgroundColor: '#1f2937' }}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
              >
                Start Creating
              </button>
            </div>
            <div className="surface-card p-6 relative border-2" style={{ borderColor: 'var(--color-primary)', boxShadow: 'var(--shadow-md)' }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="surface-primary px-3 py-1 text-sm font-medium">Recommended</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Creator</h3>
              <div className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Free</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Everything in Starter</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Advanced color tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Project management</span>
                </li>
              </ul>
              <button 
                className="button w-full py-3 px-4 font-medium"
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
              >
                Start Creating
              </button>
            </div>
            <div className="surface-card p-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Team</h3>
              <div className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Free</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Everything in Creator</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Team collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Priority support</span>
                </li>
              </ul>
              <button 
                className="button w-full py-3 px-4 font-medium" 
                style={{ backgroundColor: '#1f2937' }}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.CTA)}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id={SECTIONS.WEBSITE_LANDING.TESTIMONIALS} className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>Hear from designers who love my color tool.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="surface-elevated p-6">
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;This tool saved me hours of design work. The real-time preview is exactly what I needed!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center surface-card">
                  <span className="text-blue-600 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Sarah Martinez</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>UI Designer</div>
                </div>
              </div>
            </div>
            <div className="surface-elevated p-6">
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;Finally, a color tool that shows me exactly how my palette will look in practice. Game changer!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 flex items-center justify-center surface-card">
                  <span className="text-green-600 font-semibold">AJ</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Alex Johnson</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Brand Designer</div>
                </div>
              </div>
            </div>
            <div className="surface-elevated p-6">
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>&quot;The export features are incredible. I can get my colors in any format I need for my projects.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 flex items-center justify-center surface-card">
                  <span className="text-purple-600 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Mike Chen</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Frontend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id={SECTIONS.WEBSITE_LANDING.FAQ} className="py-20 px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>Everything you need to know about my color tool.</p>
          <div className="space-y-4">
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-3 text-lg" style={{ color: 'var(--color-text)' }}>What&apos;s the ideal number of colors for a palette?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>For best results, I suggest using 3-5 colors: one primary, one secondary, an accent color, plus neutral tones for text and backgrounds.</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-3 text-lg" style={{ color: 'var(--color-text)' }}>Does the tool check color accessibility?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Yes! My built-in accessibility checker ensures your color combinations meet WCAG standards for optimal readability and inclusivity.</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-3 text-lg" style={{ color: 'var(--color-text)' }}>How does the live preview work?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>The live preview shows your color palette applied to a real website layout, giving you an accurate sense of how your colors will look in practice.</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-3 text-lg" style={{ color: 'var(--color-text)' }}>Can I customize typography as well?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Absolutely! Browse my font collection or upload your own custom fonts to see how they pair with your color choices.</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-3 text-lg" style={{ color: 'var(--color-text)' }}>Are there any usage restrictions?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>No restrictions at all! Use your color palettes freely for any commercial or personal projects without limitations.</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-3 text-lg" style={{ color: 'var(--color-text)' }}>Where can I get help and support?</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Visit my help center for guides, watch my video tutorials, or connect with my community for design tips and inspiration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id={SECTIONS.WEBSITE_LANDING.RESOURCES} className="py-20 px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Design Resources</h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>Helpful guides and inspiration for your design journey.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="surface-elevated p-6">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Color Psychology in Web Design</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Discover how different colors influence user behavior and create emotional connections.</p>
              <button 
                className="text-sm font-medium transition-colors" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.FAQ)}
              >
                Learn more →
              </button>
            </div>
            <div className="surface-elevated p-6">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Building Brand Identity with Colors</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Master the art of creating memorable brand experiences through strategic color selection.</p>
              <button 
                className="text-sm font-medium transition-colors" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
              >
                Explore →
              </button>
            </div>
            <div className="surface-elevated p-6">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Accessibility Best Practices</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Learn how to create inclusive designs that work for everyone with proper color contrast.</p>
              <button 
                className="text-sm font-medium transition-colors" 
                style={{ color: 'var(--color-primary)' }} 
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
      <section id={SECTIONS.WEBSITE_LANDING.CTA} className="py-20 px-6" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>Join thousands of designers who trust my tool for their color palette needs.</p>
          <button 
            className="button px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}
          >
            Start Designing Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id={SECTIONS.WEBSITE_LANDING.FOOTER} className="surface-footer py-20 px-6 mt-16" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center surface-primary">
                  <span className="text-white font-bold text-sm">CAF</span>
                </div>
                <span className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>ChooseAFeel</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Create perfect color palettes with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Tools</h3>
              <ul className="space-y-3">
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}>Documentation</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>Figma Integration</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>VS Code Extension</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.FAQ)}>API Access</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>Templates</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.HOW_IT_WORKS)}>Color Games</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-3">
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.FAQ)}>Get Support</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.TESTIMONIALS)}>Community</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.RESOURCES)}>GitHub</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Support Me</h3>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Love my tool? Help me grow by sharing with fellow designers.</p>
              <button 
                className="transition-colors hover:underline font-medium" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.WEBSITE_LANDING.CTA)}
              >
                Share with friends
              </button>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <p>&copy; 2024 ChooseAFeel. Made with ❤️ for designers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
