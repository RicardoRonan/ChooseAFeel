import { toPng } from "html-to-image"
import JSZip from "jszip"

export async function exportPng(el: HTMLElement, filename = "export.png") {
  try {
    // Wait for fonts to load before exporting
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready
    }
    
    // Get computed styles to ensure proper rendering
    const computedStyle = window.getComputedStyle(el)
    const width = parseInt(computedStyle.width) || el.offsetWidth || 800
    const height = parseInt(computedStyle.height) || el.offsetHeight || 600
    
    // If height is auto or very small, try to get the scroll height
    const actualHeight = height < 100 ? el.scrollHeight || 600 : height
    
    // Ensure minimum dimensions
    const finalWidth = Math.max(width, 320)
    const finalHeight = Math.max(actualHeight, 200)
    
    console.log('Element dimensions:', {
      width,
      height,
      actualHeight,
      finalWidth,
      finalHeight,
      scrollHeight: el.scrollHeight,
      offsetWidth: el.offsetWidth,
      offsetHeight: el.offsetHeight
    })
    
    let dataUrl: string
    
    try {
      // First attempt: Direct export with better options
      console.log('Attempting direct export with dimensions:', { finalWidth, finalHeight })
      dataUrl = await toPng(el, { 
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        quality: 1.0,
        skipFonts: true,
        width: finalWidth,
        height: finalHeight,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        },
        filter: (node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
              return false
            }
          }
          return true
        }
      })
      console.log('Direct export successful')
    } catch (firstError) {
      console.warn('First export attempt failed, trying fallback:', firstError)
      
      // Fallback: Use temporary container with proper styling
      console.log('Using fallback method with temporary container')
      const tempContainer = document.createElement('div')
      tempContainer.style.position = 'absolute'
      tempContainer.style.left = '-9999px'
      tempContainer.style.top = '-9999px'
      tempContainer.style.width = `${finalWidth}px`
      tempContainer.style.height = `${finalHeight}px`
      tempContainer.style.backgroundColor = '#ffffff'
      tempContainer.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      tempContainer.style.overflow = 'hidden'
      
      // Copy all CSS variables from the original element
      const rootStyles = getComputedStyle(document.documentElement)
      const cssVars: string[] = []
      for (let i = 0; i < rootStyles.length; i++) {
        const prop = rootStyles[i]
        if (prop.startsWith('--')) {
          cssVars.push(`${prop}: ${rootStyles.getPropertyValue(prop)}`)
        }
      }
      
      console.log('Found CSS variables:', cssVars.length)
      
      // Create a style element with CSS variables
      const styleEl = document.createElement('style')
      styleEl.textContent = `:root { ${cssVars.join('; ')} }`
      
      // Clone the element and append to temp container
      const clonedEl = el.cloneNode(true) as HTMLElement
      
      tempContainer.appendChild(styleEl)
      tempContainer.appendChild(clonedEl)
      document.body.appendChild(tempContainer)
      
      console.log('Temporary container created with dimensions:', {
        width: tempContainer.offsetWidth,
        height: tempContainer.offsetHeight,
        children: tempContainer.children.length
      })
      
      try {
        dataUrl = await toPng(tempContainer, { 
          pixelRatio: 2,
          backgroundColor: '#ffffff',
          quality: 1.0,
          skipFonts: true,
          width: finalWidth,
          height: finalHeight,
          filter: (node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
                return false
              }
            }
            return true
          }
        })
        console.log('Fallback export successful')
      } finally {
        document.body.removeChild(tempContainer)
      }
    }
    
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } catch (error) {
    console.error('PNG export error:', error)
    throw new Error(`PNG export failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export async function exportZip(files: Record<string, string>, zipName = "export.zip") {
  const zip = new JSZip()
  for (const [path, content] of Object.entries(files)) {
    zip.file(path, content)
  }
  const blob = await zip.generateAsync({ 
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 }
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = zipName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function websiteIndexHtml(vars: Record<string, string>, content: {
  siteName: string
  heroHeading: string
  subcopy: string
  cta: string
  features: string[]
  footer: string
}, fontHref?: string) {
  const link = fontHref ? `<link rel="stylesheet" href="${fontHref}">` : ""
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${content.siteName}</title>
${link}
<link rel="stylesheet" href="./styles.css">
</head>
<body>
<section class="card hero">
  <h1>${content.heroHeading}</h1>
  <p>${content.subcopy}</p>
  <div class="actions">
    <a class="button">${content.cta}</a>
  </div>
</section>
<section class="card features">
  <ul>
    ${content.features.map(f => `<li>${f}</li>`).join("")}
  </ul>
</section>
<footer class="card footer">
  <small>${content.footer}</small>
</footer>
</body>
</html>`
}

export function websiteStylesCss(vars: Record<string,string>) {
  return `:root{
${Object.entries(vars).map(([k,v]) => `  ${k}: ${v};`).join("\n")}
}
*{box-sizing:border-box}
body{margin:0;background:var(--color-bg);color:var(--color-text);font-family:var(--font-family);}
.card{background:var(--color-surface);border-radius:var(--radius);padding:24px;margin:16px auto;max-width:980px}
.button{background:var(--color-primary);color:var(--color-primary-contrast);border-radius:var(--radius);padding:.75rem 1rem;display:inline-block;text-decoration:none}
.hero h1{font-size:2.5rem;margin:0 0 .5rem 0}
.features ul{display:grid;gap:8px;margin:0;padding-left:20px}
.footer{opacity:.9}
`
}
