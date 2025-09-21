import { toPng } from "html-to-image"
import JSZip from "jszip"

export async function exportPng(el: HTMLElement, filename = "export.png") {
  const dataUrl = await toPng(el, { 
    pixelRatio: 2,
    backgroundColor: '#ffffff',
    quality: 1.0,
    skipFonts: false
  })
  const a = document.createElement("a")
  a.href = dataUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
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
