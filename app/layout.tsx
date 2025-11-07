import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ChooseAFeel",
    template: "%s · ChooseAFeel",
  },
  description:
    "Design and customize accessible website templates with live color and font controls. Preview in real time, check WCAG contrast, and export PNG, CSS, or ZIP starters.",
  keywords: [
    "theme editor",
    "color palette generator",
    "WCAG contrast checker",
    "Tailwind CSS variables",
    "Next.js templates",
    "Three.js Rubik's Cube",
    "live theme editor",
    "website template designer",
    "accessibility checker",
    "CSS export",
    "design tool",
  ],
  authors: [{ name: "ChooseAFeel" }],
  creator: "ChooseAFeel",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "ChooseAFeel",
    title: "ChooseAFeel - Design and Export Accessible Website Themes",
    description:
      "Design and customize accessible website templates with live color and font controls. Preview in real time, check WCAG contrast, and export PNG, CSS, or ZIP starters.",
    images: [
      {
        url: `${baseUrl}/og`,
        width: 1200,
        height: 630,
        alt: "ChooseAFeel - Theme Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@chooseafeel",
    title: "ChooseAFeel - Design and Export Accessible Website Themes",
    description:
      "Design and customize accessible website templates with live color and font controls.",
    images: [`${baseUrl}/og`],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
