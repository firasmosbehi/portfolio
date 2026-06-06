import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Firas Mosbehi - DevSecOps Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            FM
          </div>
          <div
            style={{
              width: '2px',
              height: '60px',
              background: 'rgba(255,255,255,0.2)',
            }}
          />
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            firasmosbahi.com
          </div>
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            lineHeight: 1.1,
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #60a5fa, #22d3ee)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Firas Mosbehi
        </div>
        <div
          style={{
            fontSize: '40px',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '32px',
          }}
        >
          DevSecOps Engineer
        </div>
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Kubernetes · AWS · Terraform · CI/CD · Cloud Infrastructure
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
