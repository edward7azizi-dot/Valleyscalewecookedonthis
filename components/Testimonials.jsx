const TESTIMONIALS = [
  {
    quote: "We were drowning in manual follow-ups and lead tracking. Valleyscale mapped our entire sales process, identified the three biggest time-wasters, and built automations that freed up 12 hours a week for my team. ROI was visible within the first month.",
    name: 'Sarah Thornton',
    title: 'VP of Revenue',
    company: 'Meridian Group',
    stars: 5,
  },
  {
    quote: "What separates Valleyscale from every other agency we've tried is the diagnostic phase. They told us not to build what we asked for — and they were right. The system they recommended instead has become central to how we operate.",
    name: 'James Okafor',
    title: 'Co-Founder',
    company: 'Driftwood Labs',
    stars: 5,
  },
  {
    quote: "Our client onboarding went from a 3-day manual process to fully automated in under two weeks. The documentation was thorough, the handoff was smooth, and the system has run without issues for six months. Exactly what we needed.",
    name: 'Priya Nakamura',
    title: 'Director of Operations',
    company: 'Apex Ventures',
    stars: 5,
  },
];

const COMPANIES = ['Northline Capital', 'Meridian Group', 'Apex Ventures', 'Solaris Co.', 'Driftwood Labs', 'Ironwood Tech'];

function Testimonials() {
  const containerRef = useStaggerAnimation(3);

  return (
    <section style={{ padding: '120px 32px', background: 'rgba(0,0,0,0.15)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Label */}
        <div ref={useScrollAnimation()} className="fade-up" style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
            marginBottom: 14, fontFamily: 'var(--font-body)',
          }}>Social Proof</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.03em',
            lineHeight: 1.12, marginBottom: 18,
          }}>
            Built for businesses
            <span className="gradient-text"> like yours.</span>
          </h2>

          {/* Company pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 24 }}>
            {COMPANIES.map(c => (
              <span key={c} style={{
                padding: '6px 14px', borderRadius: 100,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: 13, color: 'rgba(255,255,255,0.45)',
                fontFamily: 'var(--font-body)',
              }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div ref={containerRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} data-stagger className="fade-up glass glass-hover" style={{
              borderRadius: 20, padding: '36px 32px',
              display: 'flex', flexDirection: 'column',
              transitionDelay: `${i * 0.1}s`,
            }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 22 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} size={14} style={{ color: '#38BDF8' }} />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: 15.5, color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.75, fontFamily: 'var(--font-body)',
                flex: 1, marginBottom: 28,
                fontStyle: 'italic',
              }}>"{t.quote}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 100, flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(79,70,229,0.25))',
                  border: '1px solid rgba(56,189,248,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#38BDF8',
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', fontFamily: 'var(--font-body)' }}>{t.title} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials });
