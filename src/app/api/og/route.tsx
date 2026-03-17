import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Jenil Rupapara'
    const subtitle = searchParams.get('subtitle') || 'Senior MERN Stack Developer'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            background: '#030303',
            color: 'white',
            fontFamily: 'sans-serif',
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(100px, -100px)',
          }} />

          <div style={{ fontSize: 28, color: '#4F46E5', fontWeight: 900, letterSpacing: '0.2em', marginBottom: 24, textTransform: 'uppercase' }}>
            jenilrupapara.vercel.app
          </div>
          
          <div style={{ 
            fontSize: 72, 
            fontWeight: 900, 
            lineHeight: 1.1, 
            maxWidth: '90%', 
            letterSpacing: '-0.05em',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {title}
          </div>

          <div style={{ 
            fontSize: 32, 
            color: 'rgba(255,255,255,0.4)', 
            marginTop: 40,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            {subtitle}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 80,
              right: 80,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4F46E5' }} />
            <div style={{ fontSize: 24, fontWeight: 900, color: 'white', letterSpacing: '0.1em' }}>
              JR
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    )
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
