const { useRef } = React;

const LOGOS = [
  'Northline Capital', 'Meridian Group', 'Apex Ventures',
  'Solaris Co.', 'Driftwood Labs', 'Crestview Partners',
  'Ironwood Tech', 'Luminary Inc.', 'Cascade Studio',
];

function LogoCloud() {
  const ref = useScrollAnimation();
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section style={{
      background: 'rgba(0,0,0,0.25)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '32px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', gap: 40,
      }}>
        {/* Label — desktop only */}
        <div className="hide-mobile fade-in" ref={ref} style={{
          flexShrink: 0, width: 220,
          borderRight: '1px solid rgba(255,255,255,0.08)',
          paddingRight: 40,
        }}>
          <p style={{
            fontSize: 12, fontWeight: 500,
            color: 'rgba(255,255,255,0.38)',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            lineHeight: 1.5,
          }}>
            Trusted by<br />forward-thinking teams
          </p>
        </div>

        {/* Infinite slider */}
        <div style={{ flex: 1, overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="slider-track">
            {doubled.map((name, i) => (
              <div key={i} style={{
                padding: '0 36px',
                flexShrink: 0,
                display: 'flex', alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: 15, letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.28)',
                  whiteSpace: 'nowrap',
                  filter: 'brightness(1)',
                  transition: 'color 0.2s',
                }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LogoCloud });
