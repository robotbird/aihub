import { MetadataRoute } from 'next'
import { allTools } from '@/data/ai-tools'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  const toolPages = allTools.map((tool) => ({
    url: `${baseUrl}/tool/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...toolPages,
  ]
}

