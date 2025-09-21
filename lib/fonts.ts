export const GOOGLE_FONTS = [
  { label: "Inter", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap", cssFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
  { label: "Poppins", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap", cssFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
  { label: "Outfit", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap", cssFamily: "Outfit, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
  { label: "Work Sans", href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap", cssFamily: "Work Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
  { label: "Space Grotesk", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap", cssFamily: "Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
  { label: "JetBrains Mono", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap", cssFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace" }
]

export function setFontLink(href?: string) {
  if (typeof window === 'undefined') return
  
  const id = "dynamic-google-font"
  let el = document.getElementById(id) as HTMLLinkElement | null
  if (!href) { if (el) el.remove(); return }
  if (!el) {
    el = document.createElement("link")
    el.id = id
    el.rel = "stylesheet"
    document.head.appendChild(el)
  }
  el.href = href
}
