# ColourPal

A complete production-ready project that lets users create and customize website templates with live-edit color palette, font, and border radius. Includes export to PNG for printables and ZIP for website starter.

## Features

- **Website Template**: Full-featured website template with multiple sections
- **Live Theme Editing**: Real-time color palette, font, and border radius customization
- **Accessibility**: WCAG 2.1 AA contrast checking with live feedback indicators
- **Export Options**: PNG export for printables, ZIP export for website starter
- **Persistence**: Auto-save to localStorage with project restoration
- **Modern UI**: Clean, minimal design with toolbar-style interface and smooth animations
- **Full-Screen Preview**: Centered preview area with scale controls

## Tech Stack

- **Next.js 14+** (App Router, TypeScript)
- **React 18**
- **Tailwind CSS**
- **Zustand** for state management
- **Chroma.js** for color contrast calculations
- **html-to-image** for PNG export
- **JSZip** for ZIP export

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set `NEXT_PUBLIC_SITE_URL` to your production domain. For local development, you can leave it as `http://localhost:3000`.

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## SEO Setup

ColourPal is fully SEO-optimized with comprehensive metadata, structured data, and indexable pages. Key SEO features include:

- **Metadata**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schemas for WebApplication, Breadcrumbs, and FAQ pages
- **Sitemap**: Automatic sitemap generation at `/sitemap.xml`
- **Robots.txt**: Proper crawl directives at `/robots.txt`
- **Dynamic OG Images**: Generated Open Graph images at `/og`
- **Canonical URLs**: Proper canonical URLs on all pages
- **Marketing Pages**: SEO-optimized pages for features, accessibility, templates, export, and documentation

Make sure to set `NEXT_PUBLIC_SITE_URL` in your environment variables for proper canonical URLs and social sharing.


## Usage

1. **Customize Website**: Use the theme controls to customize colors, fonts, and border radius
2. **Customize Theme**: Use the color pickers, radius slider, and font selector
3. **Edit Content**: Click "Edit" to expand content fields for your chosen template
4. **Check Accessibility**: Monitor the green/red indicators for contrast compliance
5. **Export**: Use PNG export for printables or ZIP export for website files

## Project Structure

```
ColourPal/
├── app/                    # Next.js app directory
│   ├── editor/            # Editor page (moved from root)
│   ├── features/          # Features marketing page
│   ├── accessibility/      # Accessibility page
│   ├── templates/         # Template gallery and detail pages
│   │   └── [slug]/        # Dynamic template detail pages
│   ├── export/            # Export documentation page
│   ├── docs/              # Documentation page
│   ├── og/                # Dynamic OG image generation
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with comprehensive metadata
│   ├── page.tsx           # Landing page
│   ├── robots.ts          # Robots.txt generator
│   ├── sitemap.ts         # Sitemap generator
│   └── manifest.ts        # PWA manifest
├── components/            # React components
│   ├── templates/         # Template components
│   ├── JsonLd.tsx         # JSON-LD structured data injector
│   ├── AccessibilityBadge.tsx
│   ├── ContentPanel.tsx
│   ├── PreviewFrame.tsx
│   ├── TopNavbar.tsx
│   └── ThemePanel.tsx
├── lib/                   # Utility libraries
│   ├── canonical.ts       # Canonical URL helper
│   ├── schema.ts          # JSON-LD schema builders
│   ├── export.ts          # PNG/ZIP export functions
│   ├── fonts.ts           # Google Fonts management
│   ├── navigation.ts      # Navigation and URL helpers
│   ├── palette.ts         # Color contrast utilities
│   ├── storage.ts         # localStorage helpers
│   └── theme.ts           # Theme management
└── store/                 # Zustand store
    └── project.ts         # Project state management
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
