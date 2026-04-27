const { useState } = React;

const FAQS = [
  {
    q: 'Do I need to know anything about AI to work with you?',
    a: 'Not at all. You know your business — we know automation. Our process is designed so you can stay focused on outcomes while we handle all the technical complexity. We translate business problems into automation solutions, not the other way around.',
  },
  {
    q: 'How long does a typical engagement take?',
    a: 'Most initial builds take 2–6 weeks from kickoff to deployment, depending on complexity. The diagnostic phase takes 3–5 business days and results in a full automation roadmap. Simple single-workflow automations can ship in under a week.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work across industries — professional services, e-commerce, SaaS, real estate, finance, healthcare admin, and more. If your business runs on recurring processes and data, we can almost certainly automate the most painful parts of it.',
  },
  {
    q: 'How is this different from hiring a developer?',
    a: 'A developer builds what you spec. We tell you what to spec — and often, what not to build. We also specialize in automation tooling (Make, n8n, custom AI pipelines) rather than traditional software development, which means faster builds, lower cost, and less ongoing maintenance.',
  },
  {
    q: 'What if we already have AI tools in place?',
    a: 'Great — we work with what you have. We\'ll audit your existing stack, identify what\'s underused or misaligned, and either optimize your current setup or layer in targeted additions. We never recommend replacing tools for the sake of it.',
  },
  {
    q: 'How much does it cost?',
    a: 'Engagements start with a free diagnostic call. From there, project-based builds typically range from $2,500 to $25,000+ depending on scope and complexity. We also offer ongoing retainers for teams that want continuous automation support and iteration.',
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  const containerRef = useStaggerAnimation(6);

  return (
    <section id="faq" style={{ padding: '120px 32px', background: 'rgba(0,0,0,0.15)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div ref={useScrollAnimation()} className="fade-up" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
            marginBottom: 14, fontFamily: 'var(--font-body)',
          }}>FAQ</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.03em', lineHeight: 1.12,
          }}>
            Common questions,
            <span className="gradient-text"> straight answers.</span>
          </h2>
        </div>

        <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-stagger
                className="fade-up glass"
                style={{
                  borderRadius: 16,
                  border: isOpen ? '1px solid rgba(56,189,248,0.25)' : '1px solid rgba(255,255,255,0.07)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                  transitionDelay: `${i * 0.06}s`,
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    cursor: 'pointer', padding: '22px 28px',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16, textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: 17, letterSpacing: '-0.01em',
                    color: isOpen ? '#fff' : 'rgba(255,255,255,0.88)',
                    lineHeight: 1.4,
                  }}>{faq.q}</span>

                  <div style={{
                    width: 30, height: 30, borderRadius: 100, flexShrink: 0,
                    background: isOpen ? 'linear-gradient(135deg,#38BDF8,#4F46E5)' : 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s ease, transform 0.35s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>
                    <ChevronDownIcon size={15} style={{ color: '#fff' }} />
                  </div>
                </button>

                <div className={`accordion-content${isOpen ? ' open' : ''}`}>
                  <div style={{ padding: '0 28px 24px' }}>
                    <div style={{
                      height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 18,
                    }} />
                    <p style={{
                      fontSize: 15.5, color: 'rgba(255,255,255,0.62)',
                      lineHeight: 1.75, fontFamily: 'var(--font-body)',
                    }}>{faq.a}</p>
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

Object.assign(window, { FAQ });
