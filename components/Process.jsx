const { useRef, useEffect } = React;

const STEPS = [
  {
    num: '01',
    title: 'Evaluate',
    desc: 'We start with a deep-dive into your operations — mapping workflows, identifying bottlenecks, and pinpointing the highest-leverage automation opportunities. No guesswork, only data.',
    tag: 'Discovery Call',
  },
  {
    num: '02',
    title: 'Diagnose',
    desc: 'We deliver a comprehensive automation audit: a prioritized roadmap of exactly what to build, why it matters, and what ROI to expect. You get clarity before a single line of code is written.',
    tag: 'Strategy Blueprint',
  },
  {
    num: '03',
    title: 'Build & Scale',
    desc: 'We build, test, and deploy your custom automations — then stay with you as your systems evolve. Ongoing support, iteration, and expansion as your business grows.',
    tag: 'Continuous Growth',
  },
];

function Process() {
  const containerRef = useStaggerAnimation(3);
  const connectorRef = useRef(null);

  useEffect(() => {
    const el = connectorRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" style={{ padding: '120px 32px' }}>
      {/* Glow */}
      <div className="glow-orb" style={{
        width: 500, height: 400, top: '20%', right: -100,
        background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <div ref={useScrollAnimation()} className="fade-up" style={{ marginBottom: 72, maxWidth: 540 }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
            marginBottom: 14, fontFamily: 'var(--font-body)',
          }}>How It Works</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em',
            lineHeight: 1.12, marginBottom: 18,
          }}>
            From friction to
            <span className="gradient-text"> flow — in weeks.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
            Our three-phase process is built around outcomes, not deliverables.
            Every engagement starts with proof, not promises.
          </p>
        </div>

        {/* Steps grid */}
        <div ref={containerRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2, position: 'relative',
        }}>
          {STEPS.map((step, i) => (
            <div key={step.num} data-stagger className="fade-up glass glass-hover" style={{
              borderRadius: 20, padding: '40px 36px',
              position: 'relative', overflow: 'hidden',
              transitionDelay: `${i * 0.05}s`,
            }}>
              {/* Number watermark */}
              <div style={{
                position: 'absolute', top: -10, right: 20,
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 96, lineHeight: 1,
                color: 'rgba(255,255,255,0.03)',
                pointerEvents: 'none', userSelect: 'none',
              }}>{step.num}</div>

              {/* Step number badge */}
              <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: 'linear-gradient(135deg,#38BDF8,#4F46E5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
                  color: '#fff', flexShrink: 0,
                  boxShadow: '0 4px 20px rgba(56,189,248,0.3)',
                }}>{step.num}</div>
                <span style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'var(--font-body)',
                }}>{step.tag}</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 26, letterSpacing: '-0.02em',
                marginBottom: 14, color: '#fff',
              }}>{step.title}</h3>

              <p style={{
                fontSize: 15.5, color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7, fontFamily: 'var(--font-body)',
              }}>{step.desc}</p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)',
                opacity: 0, transition: 'opacity 0.3s ease',
              }} className="step-bottom-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Process });
