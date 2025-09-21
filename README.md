# ChooseAFeel

A complete production-ready project inspired by [Realtime Colors](https://www.realtimecolors.com/) that lets users create and customize website templates with live-edit color palette, font, and border radius. Includes export to PNG for printables and ZIP for website starter.

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

2. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Design Inspiration

This project is inspired by [Realtime Colors](https://www.realtimecolors.com/), featuring:
- **Toolbar Interface**: Clean horizontal toolbar at the bottom with all controls
- **Full-Screen Preview**: Centered preview area that takes up most of the screen
- **Minimal Design**: Clean, modern aesthetic with subtle shadows and smooth transitions
- **Live Updates**: Real-time theme changes with smooth animations
- **Accessibility Focus**: Visual contrast indicators and WCAG compliance checking

## Usage

1. **Customize Website**: Use the theme controls to customize colors, fonts, and border radius
2. **Customize Theme**: Use the color pickers, radius slider, and font selector
3. **Edit Content**: Click "Edit" to expand content fields for your chosen template
4. **Check Accessibility**: Monitor the green/red indicators for contrast compliance
5. **Export**: Use PNG export for printables or ZIP export for website files

## Project Structure

```
ChooseAFeel/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with Inter font
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── templates/         # Template components
│   │   └── WebsiteLanding.tsx
│   ├── AccessibilityBadge.tsx
│   ├── ContentPanel.tsx
│   ├── PreviewFrame.tsx
│   ├── ScaleControl.tsx
│   ├── TopNavbar.tsx
│   ├── BottomNavbar.tsx
│   └── ThemePanel.tsx
├── lib/                   # Utility libraries
│   ├── export.ts          # PNG/ZIP export functions
│   ├── fonts.ts           # Google Fonts management
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
