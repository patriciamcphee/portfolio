import { ImageResponse } from 'next/og'

export const alt = 'Patricia McPhee — Technical content leadership and AI content systems'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#172126',
          color: '#f4f0e8',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#e8917a' }} />
          <div
            style={{
              fontSize: 22,
              textTransform: 'uppercase',
              letterSpacing: 4,
              color: '#bdc7c9',
            }}
          >
            Patricia McPhee · Technical content leader
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -4, lineHeight: 0.98 }}>
            Complex platforms,
          </div>
          <div style={{ fontSize: 82, fontWeight: 500, letterSpacing: -4, color: '#e8917a' }}>
            made clear.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}>
          <div style={{ color: '#aebcbf' }}>Documentation systems · AI operations · Developer experience</div>
          <div style={{ color: '#e8917a', fontWeight: 700 }}>PM</div>
        </div>
      </div>
    ),
    size
  )
}
