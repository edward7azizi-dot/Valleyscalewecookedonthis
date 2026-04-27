const { useState, useEffect, useRef } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
  { label: 'Process', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: 'Contact.html' }];


  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px',
      transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      background: scrolled ? 'rgba(1,1,1,0.82)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none'
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="uploads/ChatGPT Image Apr 26, 2026, 06_09_06 PM.png"
            alt="Valleyscale logo"
            style={{ objectFit: 'contain', padding: "0px", borderWidth: "0px", borderStyle: "solid", borderRadius: "0px", margin: "-18.1328px", width: "90px", height: "90px" }} />
          
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#fff', fontSize: "22px"
          }}>Valleyscale</span>
        </a>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((l) =>
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          )}
        </div>

        {/* CTA */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="#booking" style={{
            textDecoration: 'none', padding: '9px 20px', borderRadius: 100,
            background: 'linear-gradient(135deg,#38BDF8,#2563EB,#4F46E5)',
            color: '#fff', fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-body)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {e.target.style.opacity = '0.85';e.target.style.transform = 'translateY(-1px)';}}
          onMouseLeave={(e) => {e.target.style.opacity = '1';e.target.style.transform = 'translateY(0)';}}>
            Book a Call</a>
        </div>

        {/* Mobile menu toggle */}
        <button className="hide-desktop" onClick={() => setMobileOpen((o) => !o)}
        style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}>
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div style={{
        background: 'rgba(1,1,1,0.95)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '20px 32px 28px'
      }}>
          {links.map((l) =>
        <a key={l.href} href={l.href} className="nav-link"
        onClick={() => setMobileOpen(false)}
        style={{ display: 'block', padding: '12px 0', fontSize: 17, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {l.label}
            </a>
        )}
          <a href="#booking" onClick={() => setMobileOpen(false)} style={{
          display: 'inline-block', marginTop: 20, padding: '12px 28px', borderRadius: 100,
          background: 'linear-gradient(135deg,#38BDF8,#2563EB,#4F46E5)',
          color: '#fff', fontSize: 15, fontWeight: 600, textDecoration: 'none'
        }}>Book a Call</a>
        </div>
      }
    </nav>);

}

Object.assign(window, { Nav });