import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Productivity Tools - The Complete AI Tools Directory",
    template: "%s | AI Productivity Tools",
  },
  description: "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more. 100+ curated AI tools in 14 categories.",
  keywords: ["AI tools", "productivity", "ChatGPT", "Midjourney", "AI chatbots", "AI image generation", "AI coding", "AI directory", "AI navigation", "productivity tools"],
  authors: [{ name: "AI Productivity Tools" }],
  creator: "AI Productivity Tools",
  publisher: "AI Productivity Tools",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "AI Productivity Tools - The Complete AI Tools Directory",
    description: "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more.",
    siteName: "AI Productivity Tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Productivity Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Productivity Tools - The Complete AI Tools Directory",
    description: "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 结构化数据 JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Productivity Tools",
    "description": "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more. 100+ curated AI tools in 14 categories.",
    "url": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/tool/{search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

