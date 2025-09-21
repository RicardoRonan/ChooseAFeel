// Navigation utilities for smooth scrolling and section navigation

export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Section IDs for different templates
export const SECTIONS = {
  WEBSITE_LANDING: {
    HERO: 'hero-section',
    WHY_CHOOSE: 'why-choose-section',
    HOW_IT_WORKS: 'how-it-works-section',
    PRICING: 'pricing-section',
    TESTIMONIALS: 'testimonials-section',
    FAQ: 'faq-section',
    RESOURCES: 'resources-section',
    CTA: 'cta-section',
    FOOTER: 'footer-section'
  },
  DASHBOARD: {
    STATS: 'stats-section',
    CHARTS: 'charts-section',
    ACTIVITY: 'activity-section'
  },
  BLOG: {
    FEATURED: 'featured-article',
    ARTICLES: 'articles-grid',
    NEWSLETTER: 'newsletter-signup'
  },
  PRODUCTS: {
    CATALOG: 'product-catalog',
    FILTERS: 'filters-sidebar',
    GRID: 'products-grid'
  },
  PORTFOLIO: {
    HERO: 'portfolio-hero',
    SKILLS: 'skills-section',
    PROJECTS: 'featured-projects',
    TESTIMONIALS: 'client-testimonials',
    CONTACT: 'contact-section'
  }
} as const;
