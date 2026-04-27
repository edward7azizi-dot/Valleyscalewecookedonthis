function Team() {
  const ref = useScrollAnimation();

  return (
    <section style={{ padding: '120px 32px' }}>
      <div className="glow-orb" style={{
        width: 500, height: 400, top: '10%', right: -80,
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
      }} />
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div ref={useScrollAnimation()} className="fade-up" style={{ marginBottom: 64, maxWidth: 500 }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
            marginBottom: 14, fontFamily: 'var(--font-body)',
          }}>The Team</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.03em', lineHeight: 1.12,
          }}>
            Who's behind
            <span className="gradient-text"> Valleyscale.</span>
          </h2>
        </div>

        <div ref={ref} className="fade-up glass" style={{
          borderRadius: 24, padding: 'clamp(32px, 5vw, 56px)',
          display: 'flex', gap: 48, alignItems: 'flex-start',
          flexWrap: 'wrap',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}>
          {/* Avatar */}
          <div style={{ flexShrink: 0 }}>
            <div className="avatar-placeholder" style={{
              width: 120, height: 120, borderRadius: 20,
              marginBottom: 16,
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 100,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
              fontSize: 13, fontFamily: 'var(--font-body)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.12)'; e.currentTarget.style.color = '#38BDF8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </div>

          {/* Bio */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 28, letterSpacing: '-0.025em', color: '#fff', marginBottom: 4,
            }}>Edward Azizi</h3>
            <p style={{
              fontSize: 14, color: 'rgba(56,189,248,0.8)', marginBottom: 22,
              fontFamily: 'var(--font-body)', fontWeight: 500,
            }}>Founder & Head of Automation</p>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
              fontFamily: 'var(--font-body)', marginBottom: 24, maxWidth: 560,
            }}>
              I've spent the last six years building automation systems at the intersection of AI and real business operations — first inside SaaS companies, then as a consultant for mid-market businesses across North America. I started Valleyscale because I kept seeing the same pattern: smart teams buried in repetitive work, with no clear path to automation that actually stuck.
            </p>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8,
              fontFamily: 'var(--font-body)', maxWidth: 560,
            }}>
              My approach is always diagnosis first, build second. I don't believe in selling automation for its own sake — only when it creates measurable, durable value for the people using it every day.
            </p>

            {/* Credential pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
              {['6+ yrs AI systems', 'Make · n8n · Zapier', 'OpenAI · Anthropic', '50+ automations shipped'].map(tag => (
                <span key={tag} style={{
                  padding: '6px 14px', borderRadius: 100,
                  background: 'rgba(56,189,248,0.08)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  fontSize: 13, color: 'rgba(56,189,248,0.85)',
                  fontFamily: 'var(--font-body)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Team });
