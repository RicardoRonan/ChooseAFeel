/**
 * JSON-LD structured data builders for SEO
 */

export interface BreadcrumbSegment {
  name: string;
  url: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

/**
 * Generate WebApplication/SoftwareApplication schema for ChooseAFeel
 */
export function webAppLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ChooseAFeel",
    description:
      "Design and customize accessible website templates with live color and font controls. Preview in real time, check WCAG contrast, and export PNG, CSS, or ZIP starters.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Live theme editor",
      "WCAG contrast checker",
      "Google Fonts integration",
      "CSS variables export",
      "Tailwind CSS templates",
      "PNG and ZIP export",
      "Three.js Rubik's Cube visualization",
    ],
    screenshot:
      process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/og`
        : "http://localhost:3000/og",
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function breadcrumbLD(segments: BreadcrumbSegment[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: segment.name,
      item: segment.url,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function faqLD(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}



