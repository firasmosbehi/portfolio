import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

// Control Plane palette (dark). Satori needs literal values, no CSS vars.
const BG = '#0B0D10';
const FG = '#E8EAED';
const MUTED = '#9AA3AE';
const LINE = '#22272E';
const ACCENT = '#B4F042';
// ponytail: no mono font file loaded, so "mono" is the default sans with tracking; load Geist Mono via fetch if it must be exact.
const MONO = { fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase' as const };

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
          background: BG,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: FG,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              ...MONO,
              width: '56px',
              height: '56px',
              border: `2px solid ${ACCENT}`,
              borderRadius: '8px',
              color: ACCENT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            FM
          </div>
          <div style={{ ...MONO, fontSize: '20px', color: MUTED, display: 'flex' }}>
            <span style={{ color: ACCENT, marginRight: '12px' }}>{'//'}</span>
            {subtitle || 'Firas Mosbehi'}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: FG,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: '28px',
                color: MUTED,
                maxWidth: '900px',
                lineHeight: 1.4,
                marginTop: '24px',
              }}
            >
              {description}
            </div>
          )}
        </div>

        <div
          style={{
            ...MONO,
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: `1px solid ${LINE}`,
            paddingTop: '24px',
            fontSize: '18px',
            color: MUTED,
          }}
        >
          <span>firasmosbahi.com</span>
          <span style={{ color: ACCENT }}>DevSecOps</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
