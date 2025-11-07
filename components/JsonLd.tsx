import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Safe JSON-LD structured data injector component
 * Sanitizes and injects JSON-LD schema into the page
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

