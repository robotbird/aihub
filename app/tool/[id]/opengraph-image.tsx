import { ImageResponse } from 'next/og'
import { getToolById } from '@/data/ai-tools'

export const runtime = 'edge'
export const alt = 'AI Productivity Tools'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
  const tool = getToolById(params.id)

  if (!tool) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: '#e8e6e1',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2c2c2c',
          }}
        >
          AI Productivity Tools
        </div>
      ),
      {
        ...size,
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: '#e8e6e1',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: '#2c2c2c',
            marginBottom: 20,
          }}
        >
          {tool.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#666',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          {tool.description}
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#d97642',
            marginTop: 40,
            fontWeight: 'bold',
          }}
        >
          AI PRODUCTIVITY TOOLS
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

