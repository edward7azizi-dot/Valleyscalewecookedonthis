const { useState } = React;

const CARDS = [
  {
    label: 'Pattern 01',
    title: 'Strategy Without Execution',
    problem: 'You get a beautiful deck, a 40-page roadmap, and a handshake — then nothing ships.',
    why: 'Consulting firms sell strategy because it\'s low-risk for them. Execution requires accountability, domain depth, and ongoing commitment they aren\'t structured to provide.',
    fix: 'Valleyscale is a build shop, not a slide shop. Every engagement ends with live, working systems — not recommendations.',
  },
  {
    label: 'Pattern 02',
    title: 'Build Without Strategy',
    problem: 'A developer builds exactly what you asked for. Six months later, it\'s abandoned because it solved the wrong problem.',
    why: 'Generic development shops take briefs at face value. They have no incentive to challenge your assumptions or tell you your idea is the wrong one to build first.',
    fix: 'We diagnose before we prescribe. Our audit phase ensures every build targets the highest-ROI lever in your business — not just what sounded good in the kickoff call.',
  },
  {
    label: 'Pattern 03',
    title: 'Generic Outsourcing',
    problem: 'You hire an overseas team or a GPT-wrapper agency. You get generic tools that don\'t fit your stack, your team, or your workflows.',
    why: 'One-size-fits-all automation is still manual work in disguise — you spend more time managing the tool than the tool saves you.',
    fix: 'Every system we build is custom — designed around your specific processes, integrated with your existing stack, and handed off with full documentation and training.',
  },
];

function WhyFail() {
  const [open, setOpen] = useState(null);
  const containerRef = useStaggerAnimation(3);

  return (
    <section id="why" style={{ padding: '120px 32px' }}>
      <div className="glow-orb" style={{
        width: 500, height: 400, bottom: '10%', left: -80,
        background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
      }} />
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <div ref={useScrollAnimation()} className="fade-up" style={{ marginBottom: 64, maxWidth: 560 }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
            marginBottom: 14, fontFamily: 'var(--font-body)',
          }}>The Honest Truth</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.03em',
            lineHeight: 1.12, marginBottom: 18,
          }}>
            Why most AI projects
            <span className="gradient-text"> never ship.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
            The AI boom created a flood of consultants, agencies, and tools. Most fail for the same three reasons.
          </p>
        </div>

        {/* Accordion cards */}
        <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {CARDS.map((card, i) => {
            const isOpen = open === i;
            return (
              <div
                key={card.title}
                data-stagger
                className="fade-up glass glass-hover"
                style={{
                  borderRadius: 18,
                  border: isOpen
                    ? '1px solid rgba(56,189,248,0.3)'
                    : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: isOpen ? '0 0 32px rgba(56,189,248,0.08)' : 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
                {/* Header row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '28px 32px', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16, textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                      color: 'rgba(56,189,248,0.7)', textTransform: 'uppercase',
                      fontFamily: 'var(--font-body)', flexShrink: 0,
                    }}>{card.label}</span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: 'clamp(17px,2vw,22px)', letterSpacing: '-0.02em',
                      color: '#fff',
                    }}>{card.title}</h3>
                  </div>
                  <div style={{
                    width: 32, height: 32, borderRadius: 100, flexShrink: 0,
                    background: isOpen ? 'linear-gradient(135deg,#38BDF8,#4F46E5)' : 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s ease, transform 0.3s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                    <PlusIcon size={15} style={{ color: '#fff' }} />
                  </div>
                </button>

                {/* Content */}
                <div className={`accordion-content${isOpen ? ' open' : ''}`}>
                  <div style={{ padding: '0 32px 32px' }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: 20,
                    }}>
                      {[
                        { label: 'The Pattern', text: card.problem, color: 'rgba(239,68,68,0.7)' },
                        { label: 'Why It Fails', text: card.why, color: 'rgba(245,158,11,0.7)' },
                        { label: 'The Valleyscale Fix', text: card.fix, color: 'rgba(56,189,248,0.8)' },
                      ].map(col => (
                        <div key={col.label} style={{
                          padding: '20px 22px', borderRadius: 12,
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                          <p style={{
                            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                            textTransform: 'uppercase', color: col.color,
                            marginBottom: 10, fontFamily: 'var(--font-body)',
                          }}>{col.label}</p>
                          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
                            {col.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyFail });
