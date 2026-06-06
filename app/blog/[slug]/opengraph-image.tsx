import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function Image({ params }: OgImageProps) {
  const { slug } = await params;
  const title = slugToTitle(slug);

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
            marginBottom: '32px',
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
            firasmosbahi.com/blog
          </div>
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            lineHeight: 1.15,
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #60a5fa, #22d3ee)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Technical article by Firas Mosbehi
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
