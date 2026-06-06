import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export function generateOgImage({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) {
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
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 'bold',
            }}
          >
            FM
          </div>
          <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.6)' }}>
            {subtitle || 'firasmosbahi.com'}
          </div>
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            lineHeight: 1.1,
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #60a5fa, #22d3ee)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
