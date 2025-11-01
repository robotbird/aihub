import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Productivity Tools - 最全AI工具导航站",
  description: "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more. 100+ curated AI tools in 14 categories.",
  keywords: ["AI tools", "productivity", "ChatGPT", "Midjourney", "AI chatbots", "AI image generation", "AI coding"],
  authors: [{ name: "AI Productivity Tools" }],
  creator: "AI Productivity Tools",
  publisher: "AI Productivity Tools",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "AI Productivity Tools - 最全AI工具导航站",
    description: "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more.",
    siteName: "AI Productivity Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Productivity Tools - 最全AI工具导航站",
    description: "Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more.",
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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

