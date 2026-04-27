const { useState } = React;

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Sales & Lead Generation',
    desc: 'Automate your entire pipeline.',
    bullets: ['Lead scoring & qualification', 'Automated follow-up sequences', 'CRM enrichment & sync', 'Meeting booking workflows'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Client Communication',
    desc: 'Never miss a message that matters.',
    bullets: ['Intelligent inbox triage', 'Auto-draft email responses', 'Client onboarding flows', 'Status update automations'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: 'Operations & Admin',
    desc: 'Free your team from repetitive tasks.',
    bullets: ['Document generation & routing', 'Approval workflow automation', 'Data entry elimination', 'Internal reporting pipelines'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Marketing',
    desc: 'Ship content and campaigns on autopilot.',
    bullets: ['Content repurposing pipelines', 'Social scheduling workflows', 'Campaign performance tracking', 'Audience segmentation'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: 'Finance & Billing',
    desc: 'Close your books without the chaos.',
    bullets: ['Invoice generation & chasing', 'Expense categorization', 'Reconciliation workflows', 'Financial dashboard feeds'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
    title: 'Customer Support',
    desc: 'Scale support without scaling headcount.',
    bullets: ['AI-powered ticket routing', 'Auto-resolve common queries', 'Escalation logic & alerts', 'CSAT collection workflows'],
  },
];

function Services() {
  const [active, setActive] = useState(null);
  const containerRef = useStaggerAnimation(6);

  return (
    <section id="services" style={{ padding: '120px 32px', background: 'rgba(0,0,0,0.18)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Header */}
        <div ref={useScrollAnimation()} className="fade-up" style={{ marginBottom: 64, textAlign: 'center' }}>
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
            marginBottom: 14, fontFamily: 'var(--font-body)',
          }}>What We Build</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.03em',
            lineHeight: 1.12, maxWidth: 680, margin: '0 auto 18px',
          }}>
            If it runs in your business,
            <span className="gradient-text"> we can automate it.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
            Six core domains. Infinite combinations. All built to your exact stack.
          </p>
        </div>

        {/* Grid */}
        <div ref={containerRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: 16,
        }}>
          {SERVICES.map((svc, i) => {
            const isActive = active === i;
            return (
            <div
              key={svc.title}
              data-stagger
              className="fade-up"
              style={{
                borderRadius: 18, padding: '32px 30px',
                cursor: 'pointer', position: 'relative', overflow: 'hidden',
                background: isActive ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)',
                border: isActive ? '1px solid rgba(56,189,248,0.35)' : '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
                boxShadow: isActive ? '0 0 28px rgba(56,189,248,0.1)' : 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                transitionDelay: `${(i % 3) * 0.07}s`,
              }}
              onClick={() => setActive(active === i ? null : i)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 12, marginBottom: 18,
                background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(79,70,229,0.15))',
                border: '1px solid rgba(56,189,248,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#38BDF8',
              }}>
                {svc.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 19, letterSpacing: '-0.02em', marginBottom: 8, color: '#fff',
              }}>{svc.title}</h3>

              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.5)', marginBottom: 16, fontFamily: 'var(--font-body)' }}>
                {svc.desc}
              </p>

              {/* Expandable bullets — React-controlled */}
              <div style={{
                overflow: 'hidden',
                maxHeight: isActive ? 240 : 0,
                opacity: isActive ? 1 : 0,
                transition: 'max-height 0.38s cubic-bezier(0.22,1,0.36,1), opacity 0.28s ease',
              }}>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 14 }} />
                {svc.bullets.map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 100, flexShrink: 0,
                      background: 'linear-gradient(135deg,#38BDF8,#4F46E5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <CheckIcon size={10} style={{ color: '#fff' }} />
                    </div>
                    <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.68)', fontFamily: 'var(--font-body)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
