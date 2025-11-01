import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Productivity Tools',
    short_name: 'AI Tools',
    description: 'Discover the best AI productivity tools for chatbots, image generation, coding, writing, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#e8e6e1',
    theme_color: '#d97642',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

