function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '44px 32px',
      background: 'rgba(0,0,0,0.3)',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 24,
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="uploads/ChatGPT Image Apr 26, 2026, 06_09_06 PM.png"
            alt="Valleyscale logo"
            style={{ width: 42, height: 42, objectFit: 'contain' }}
          />
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 17, letterSpacing: '-0.02em', color: '#fff',
          }}>Valleyscale</span>
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {[
            { label: 'Process', href: '#process' },
            { label: 'Services', href: '#services' },
            { label: 'Why Us', href: '#why' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contact', href: 'Contact.html' },
            { label: 'Book a Call', href: '#booking' },
          ].map(l => (
            <a key={l.href} href={l.href} className="nav-link" style={{ fontSize: 14 }}>{l.label}</a>
          ))}
        </div>

        {/* Icons + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#38BDF8'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <LinkedInIcon size={17} />
          </a>
          <a href="mailto:hello@valleyscale.ca" style={{
            color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#38BDF8'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          >
            <MailIcon size={17} />
          </a>
          <span style={{
            fontSize: 13, color: 'rgba(255,255,255,0.28)',
            fontFamily: 'var(--font-body)',
          }}>© 2026 Valleyscale</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
