// Helper function to safely get CSS custom property values
export function getCSSVar(property: string): string {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

// Helper function to safely set element styles with CSS custom properties
export function setElementStyle(element: HTMLElement, styles: Record<string, string>): void {
  if (typeof window === 'undefined') return
  const computedStyle = getComputedStyle(document.documentElement)
  
  Object.entries(styles).forEach(([property, cssVar]) => {
    if (cssVar.startsWith('var(--')) {
      element.style.setProperty(property, computedStyle.getPropertyValue(cssVar.replace('var(', '').replace(')', '')))
    } else {
      element.style.setProperty(property, cssVar)
    }
  })
}
