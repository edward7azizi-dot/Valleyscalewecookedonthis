const { useRef, useEffect } = React;

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().catch(() => {});
  }, []);

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* ── Video: full-bleed background layer, right half ── */}
      <video
        ref={videoRef}
        src="uploads/1777239303921-ptocpymolgs.mp4"
        autoPlay loop muted playsInline
        style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '62%', height: '100%',
          objectFit: 'cover',
          mixBlendMode: 'screen',
          zIndex: 1,
        }}
      />

      {/* ── Gradient veil — fades video into the dark background on all sides ── */}
      {/* Left fade: strong, covers the join between text and video */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: [
          /* left — widest, most important */
          'linear-gradient(90deg, #010101 0%, #010101 30%, rgba(1,1,1,0.7) 50%, transparent 72%)',
          /* right edge */
          'linear-gradient(270deg, #010101 0%, transparent 20%)',
          /* top */
          'linear-gradient(180deg, #010101 0%, transparent 25%)',
          /* bottom */
          'linear-gradient(0deg, #010101 0%, transparent 30%)',
        ].join(', '),
      }} />

      {/* ── Background glow orbs (behind everything) ── */}
      <div className="glow-orb" style={{
        width: 600, height: 600, top: -100, left: -100, zIndex: 0,
        background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
      }} />
      <div className="glow-orb" style={{
        width: 400, height: 400, bottom: 0, right: '30%', zIndex: 0,
        background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
      }} />

      {/* ── Text content ── */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        maxWidth: 1180, margin: '0 auto', width: '100%',
        padding: '120px 32px 80px',
        position: 'relative', zIndex: 20,
      }}>
        <div style={{ maxWidth: 560 }}>
          {/* Pill badge */}
          <div className="hero-anim-1 pill" style={{ marginBottom: 28, width: 'fit-content' }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: 'linear-gradient(135deg,#38BDF8,#4F46E5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 12px rgba(56,189,248,0.5)',
            }}>
              <img src="uploads/ChatGPT Image Apr 26, 2026, 06_09_06 PM.png" alt="" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 13 }}>
              Evaluation-first. Results guaranteed.
            </span>
          </div>

          {/* H1 */}
          <h1 className="hero-anim-2" style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(44px, 6vw, 82px)', lineHeight: 1.06,
            letterSpacing: '-0.03em', marginBottom: 24,
          }}>
            <span className="gradient-text">Automate Your</span>
            <br />
            <span className="gradient-text">Business. Scale Fast.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-anim-3" style={{
            fontSize: 'clamp(16px, 1.4vw, 18px)',
            color: 'rgba(255,255,255,0.72)', lineHeight: 1.75,
            maxWidth: 480, marginBottom: 36, fontFamily: 'var(--font-body)',
          }}>
            Every business has friction worth fixing. We map your operations,
            identify the highest-leverage automation opportunities, and build
            exactly what you need — then stay with you as you grow.
          </p>

          {/* CTA */}
          <div className="hero-anim-4" style={{ marginBottom: 36 }}>
            <a href="#booking" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '3px', borderRadius: 100,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}>
                <span style={{
                  background: '#fff', color: '#010101', borderRadius: 100,
                  padding: '12px 24px', fontSize: 15, fontWeight: 700,
                  fontFamily: 'var(--font-body)', letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}>Book a Free Discovery Call</span>
                <div style={{
                  width: 42, height: 42, borderRadius: 100,
                  background: 'linear-gradient(135deg,#38BDF8,#2563EB,#4F46E5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginRight: 2,
                  boxShadow: '0 0 16px rgba(56,189,248,0.4)',
                }}>
                  <ArrowRightIcon size={17} style={{ color: '#fff' }} />
                </div>
              </div>
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-anim-5" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {[
              { val: '48hr', label: 'Proposal turnaround' },
              { val: '100%', label: 'Custom builds' },
              { val: 'End-to-end', label: 'Ownership' },
            ].map((stat, i) => (
              <React.Fragment key={stat.val}>
                {i > 0 && <div className="stat-divider" />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 17, color: '#fff', letterSpacing: '-0.02em',
                  }}>{stat.val}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 20,
      }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: 20, height: 32, borderRadius: 100,
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{ width: 4, height: 8, borderRadius: 100, background: 'rgba(56,189,248,0.7)', animation: 'heroSlideUp 1.5s ease infinite' }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
