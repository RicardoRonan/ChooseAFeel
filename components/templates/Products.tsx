"use client"
import { useProject } from "@/store/project"
import { scrollToSection, SECTIONS } from "@/lib/navigation"

// Helper function to get CSS custom property values
const getCSSVar = (property: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

export default function Products() {
  const { website } = useProject(s => s.project)
  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      
      {/* Header */}
      <header className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Product Catalog</h1>
            <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Discover my collection of premium design tools and resources</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none transition-colors w-full sm:w-64"
                style={{ 
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  color: 'var(--color-text)'
                }}
                onFocus={(e) => {
                  const element = e.target as HTMLElement
                  const computedStyle = getComputedStyle(document.documentElement)
                  element.style.borderColor = computedStyle.getPropertyValue('--color-primary')
                  e.target.style.boxShadow = '0 0 0 3px rgb(103 80 164 / 0.1)'
                }}
                onBlur={(e) => {
                  const element = e.target as HTMLElement
                  const computedStyle = getComputedStyle(document.documentElement)
                  element.style.borderColor = computedStyle.getPropertyValue('--color-border')
                  e.target.style.boxShadow = 'none'
                }}
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              className="button-accent px-4 py-2 text-sm font-medium w-full sm:w-auto"
              onClick={() => {
                // Simulate cart functionality
                const cartModal = document.createElement('div');
                cartModal.innerHTML = `
                  <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                    <div style="background: var(--color-bg); padding: 1.5rem; border-radius: var(--radius); max-width: 500px; width: 90%;">
                      <h3 style="color: var(--color-text); margin-bottom: 1rem; font-size: 1.125rem;">Shopping Cart (3 items)</h3>
                      <div style="color: var(--color-text-secondary); margin-bottom: 1.5rem; font-size: 0.875rem;">
                        <p>• Modern UI Kit Pro - $89</p>
                        <p>• Icon Collection 2024 - $45</p>
                        <p>• Typography Bundle - $34</p>
                        <hr style="margin: 1rem 0; border-color: var(--color-border);">
                        <p style="font-weight: bold; color: var(--color-text);">Total: $168</p>
                      </div>
                      <div style="display: flex; gap: 1rem; flex-direction: column;">
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: var(--color-primary); color: var(--color-primary-contrast); padding: 0.5rem 1rem; border: none; border-radius: var(--radius); cursor: pointer;">Checkout</button>
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: var(--color-surface); color: var(--color-text); padding: 0.5rem 1rem; border: 1px solid var(--color-border); border-radius: var(--radius); cursor: pointer;">Close</button>
                      </div>
                    </div>
                  </div>
                `;
                document.body.appendChild(cartModal);
              }}
            >
              View Cart (3)
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Filters Sidebar */}
        <div id={SECTIONS.PRODUCTS.FILTERS} className="lg:col-span-1 space-y-4 sm:space-y-6">
          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Categories</h3>
            <div className="space-y-1 sm:space-y-2">
              {['All Products', 'UI Kits', 'Icons', 'Templates', 'Fonts', 'Graphics', 'Photos'].map((category, index) => (
                <button 
                  key={index}
                  className={`w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${index === 0 ? 'surface-primary' : ''}`}
                  style={{ 
                    color: index === 0 ? 'var(--color-primary-contrast)' : 'var(--color-text-secondary)',
                    borderRadius: 'var(--radius)'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== 0) {
                      const element = e.target as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.color = computedStyle.getPropertyValue('--color-text')
                      element.style.backgroundColor = computedStyle.getPropertyValue('--color-surface')
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== 0) {
                      const element = e.target as HTMLElement
                      const computedStyle = getComputedStyle(document.documentElement)
                      element.style.color = computedStyle.getPropertyValue('--color-text-secondary');
                      (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    }
                  }}
                  onClick={() => scrollToSection(SECTIONS.PRODUCTS.GRID)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Price Range</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="free" className="w-4 h-4" style={{ accentColor: 'var(--color-primary)' }} />
                <label htmlFor="free" className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Free</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="under-50" className="w-4 h-4" style={{ accentColor: 'var(--color-primary)' }} />
                <label htmlFor="under-50" className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Under $50</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="50-100" className="w-4 h-4" style={{ accentColor: 'var(--color-primary)' }} />
                <label htmlFor="50-100" className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>$50 - $100</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="over-100" className="w-4 h-4" style={{ accentColor: 'var(--color-primary)' }} />
                <label htmlFor="over-100" className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Over $100</label>
              </div>
            </div>
          </div>

          <div className="surface-card p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>Format</h3>
            <div className="space-y-2 sm:space-y-3">
              {['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator', 'Web'].map((format, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input type="checkbox" id={format.toLowerCase()} className="w-4 h-4" style={{ accentColor: 'var(--color-primary)' }} />
                  <label htmlFor={format.toLowerCase()} className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{format}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div id={SECTIONS.PRODUCTS.GRID} className="lg:col-span-3">
          {/* Sort and View Options */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>Showing 24 products</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <select 
                className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md focus:outline-none transition-colors"
                style={{ 
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  color: 'var(--color-text)'
                }}
              >
                <option>Sort by: Popular</option>
                <option>Sort by: Price Low to High</option>
                <option>Sort by: Price High to Low</option>
                <option>Sort by: Newest</option>
              </select>
              <div className="flex items-center gap-1">
                <button 
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center" 
                  style={{ backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius)' }}
                  onClick={() => {
                    // Simulate grid view toggle
                    const productCards = document.querySelectorAll('.surface-card');
                    productCards.forEach(card => {
                      (card as HTMLElement).style.display = 'block';
                    });
                  }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button 
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center" 
                  style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}
                  onClick={() => {
                    // Simulate list view toggle
                    const productCards = document.querySelectorAll('.surface-card');
                    productCards.forEach(card => {
                      (card as HTMLElement).style.display = 'flex';
                      (card as HTMLElement).style.flexDirection = 'row';
                    });
                  }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="equal-height-cards grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Modern UI Kit Pro",
                price: "$89",
                originalPrice: "$129",
                image: "🎨",
                rating: 4.9,
                reviews: 234,
                badge: "Best Seller"
              },
              {
                name: "Icon Collection 2024",
                price: "$45",
                originalPrice: null,
                image: "🔗",
                rating: 4.8,
                reviews: 156,
                badge: "New"
              },
              {
                name: "Dashboard Templates",
                price: "$67",
                originalPrice: "$89",
                image: "📊",
                rating: 4.7,
                reviews: 89,
                badge: null
              },
              {
                name: "Typography Bundle",
                price: "$34",
                originalPrice: null,
                image: "📝",
                rating: 4.9,
                reviews: 312,
                badge: "Popular"
              },
              {
                name: "Mobile App Kit",
                price: "$99",
                originalPrice: "$149",
                image: "📱",
                rating: 4.6,
                reviews: 78,
                badge: null
              },
              {
                name: "Illustration Pack",
                price: "$56",
                originalPrice: null,
                image: "🎭",
                rating: 4.8,
                reviews: 145,
                badge: "Featured"
              }
            ].map((product, index) => (
              <div key={index} className="surface-card p-4 sm:p-6 group">
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
                    {product.image}
                  </div>
                  {product.badge && (
                    <span className={product.badge === "Best Seller" || product.badge === "Featured" ? "accent-badge absolute top-2 sm:top-3 left-2 sm:left-3" : "absolute top-2 sm:top-3 left-2 sm:left-3 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium"} style={product.badge === "Best Seller" || product.badge === "Featured" ? {} : { backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-contrast)', borderRadius: 'var(--radius)' }}>
                      {product.badge}
                    </span>
                  )}
                  <button 
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" 
                    style={{ backgroundColor: 'var(--color-bg)', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}
                    onClick={() => {
                      // Simulate adding to favorites
                      const button = (event?.target as HTMLElement);
                      const svg = button.querySelector('svg');
                      if (svg) {
                        const computedStyle = getComputedStyle(document.documentElement);
                        svg.style.fill = computedStyle.getPropertyValue('--color-primary');
                        svg.style.color = computedStyle.getPropertyValue('--color-primary');
                      }
                      alert(`Added "${product.name}" to favorites!`);
                    }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: 'var(--color-text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-2 sm:mb-3">
                  <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>{product.name}</h3>
                  <div className="flex items-center gap-1 sm:gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? '' : 'opacity-30'}`} style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold" style={{ color: 'var(--color-text)' }}>{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm line-through" style={{ color: 'var(--color-text-secondary)' }}>{product.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    className="button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium w-full sm:w-auto"
                    onClick={() => {
                      // Simulate adding to cart
                      const cartButton = document.querySelector('button:contains("View Cart")') as HTMLElement;
                      if (cartButton) {
                        const currentCount = parseInt(cartButton.textContent?.match(/\d+/)?.[0] || '0');
                        cartButton.textContent = `View Cart (${currentCount + 1})`;
                      }
                      alert(`Added "${product.name}" to cart!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8 sm:mt-12">
            <button 
              className="button-secondary px-6 sm:px-8 py-2 sm:py-3 font-medium text-sm sm:text-base"
              onClick={() => {
                // Simulate loading more products
                const productGrid = document.querySelector('#products-grid');
                if (productGrid) {
                  const newProduct = document.createElement('div');
                  newProduct.className = 'surface-card p-4 sm:p-6 group';
                  newProduct.innerHTML = `
                    <div class="relative mb-3 sm:mb-4">
                      <div class="w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl" style="background-color: var(--color-surface); border-radius: var(--radius);">🎨</div>
                    </div>
                    <div class="mb-2 sm:mb-3">
                      <h3 class="font-semibold mb-1 text-sm sm:text-base" style="color: var(--color-text);">New Product</h3>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <span class="text-base sm:text-lg font-bold" style="color: var(--color-text);">$49</span>
                      <button class="button px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium w-full sm:w-auto">Add to Cart</button>
                    </div>
                  `;
                  productGrid.appendChild(newProduct);
                }
              }}
            >
              Load More Products
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="surface-card p-4 sm:p-6 lg:p-8 text-center mt-8 sm:mt-12">
        <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Stay Updated</h3>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>Get notified about new products, exclusive deals, and design inspiration.</p>
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
              const element = e.target as HTMLElement
              const computedStyle = getComputedStyle(document.documentElement)
              element.style.borderColor = computedStyle.getPropertyValue('--color-primary')
              e.target.style.boxShadow = '0 0 0 3px rgb(103 80 164 / 0.1)'
            }}
            onBlur={(e) => {
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
                alert(`Thank you for subscribing with ${emailInput.value}! You'll receive updates about new products.`);
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
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.FILTERS)}>Documentation</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.GRID)}>Figma Integration</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.FILTERS)}>VS Code Extension</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.GRID)}>API Access</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.FILTERS)}>Templates</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.GRID)}>Color Games</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.GRID)}>Get Support</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.FILTERS)}>Community</button></li>
                <li><button className="transition-colors hover:underline text-left text-sm" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.PRODUCTS.GRID)}>GitHub</button></li>
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
                onClick={() => scrollToSection(SECTIONS.PRODUCTS.FILTERS)}
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
