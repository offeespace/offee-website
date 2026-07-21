import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'OFFEE — Discover & Book Verified Workspaces';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1A1A', // brand-black
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F9F7F2',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* We use text for the logo to ensure it renders perfectly at high res without external image loading issues */}
        <div style={{ 
          fontSize: 180, 
          fontWeight: 800, 
          letterSpacing: '-0.05em',
          marginBottom: '20px',
          color: '#E7DCC6', // brand-cream
        }}>
          OFFEE
        </div>
        
        <div style={{ 
          fontSize: 42, 
          fontWeight: 500, 
          color: '#C9A96E', // brand-gold
          letterSpacing: '-0.02em'
        }}>
          Discover & Book Verified Workspaces
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          fontSize: 24,
          color: 'rgba(231, 220, 198, 0.5)'
        }}>
          offee.space
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
