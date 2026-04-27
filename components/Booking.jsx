const { useState } = React;

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];
const MONTH_DAYS = [
  [null, null, null, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, null, null],
];
const DISABLED = [1, 2, 7, 14, 15, 21, 22];
const CALENDLY_URL = 'https://calendly.com/edward-valleyscale/30min';

function openCalendly(day, time) {
  const dateStr = `2026-05-${String(day).padStart(2, '0')}`;
  const url = `${CALENDLY_URL}?date=${dateStr}`;
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
  } else {
    window.open(url, '_blank');
  }
}

function MockCalendar() {
  const [selectedDay, setSelectedDay] = useState(16);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  return (
    <div className="glass" style={{ borderRadius: 20, padding: '28px 28px 24px', border: '1px solid rgba(255,255,255,0.09)' }}>
      {/* Month header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff' }}>May 2026</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['‹', '›'].map(arrow => (
            <button key={arrow} style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
              fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(56,189,248,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >{arrow}</button>
          ))}
        </div>
      </div>

      {/* Day headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 6 }}>
        {DAYS.map(d => (
          <div key={d} style={{
            textAlign: 'center', fontSize: 11, fontWeight: 600,
            color: 'rgba(255,255,255,0.3)', padding: '4px 0',
            fontFamily: 'var(--font-body)', letterSpacing: '0.05em',
          }}>{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      {MONTH_DAYS.map((week, wi) => (
        <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 2 }}>
          {week.map((day, di) => {
            const isDisabled = !day || DISABLED.includes(day);
            const isSelected = day === selectedDay;
            const isToday = day === 26;
            return (
              <div
                key={di}
                className={`cal-day${isSelected ? ' selected' : ''}${isToday && !isSelected ? ' today' : ''}${isDisabled ? ' disabled' : ''}`}
                style={{ margin: '1px auto', color: isSelected ? '#fff' : isDisabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)' }}
                onClick={() => !isDisabled && setSelectedDay(day)}
              >
                {day || ''}
              </div>
            );
          })}
        </div>
      ))}

      {/* Time slots */}
      <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <ClockIcon size={13} style={{ color: 'rgba(56,189,248,0.7)' }} />
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
            Available times — May {selectedDay} (EDT)
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {TIMES.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              style={{
                padding: '9px 6px', borderRadius: 10, cursor: 'pointer',
                background: selectedTime === t ? 'linear-gradient(135deg,#38BDF8,#4F46E5)' : 'rgba(255,255,255,0.05)',
                border: selectedTime === t ? '1px solid transparent' : '1px solid rgba(255,255,255,0.09)',
                color: '#fff', fontSize: 12, fontFamily: 'var(--font-body)',
                fontWeight: selectedTime === t ? 600 : 400,
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { if (selectedTime !== t) e.currentTarget.style.background = 'rgba(56,189,248,0.1)'; }}
              onMouseLeave={e => { if (selectedTime !== t) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >{t}</button>
          ))}
        </div>

        {/* Book button — opens Calendly popup */}
        <button
          onClick={() => openCalendly(selectedDay, selectedTime)}
          style={{
            width: '100%', marginTop: 16, padding: '14px', borderRadius: 12,
            background: 'linear-gradient(135deg,#38BDF8,#2563EB,#4F46E5)',
            border: 'none', color: '#fff', fontFamily: 'var(--font-display)',
            fontWeight: 700, fontSize: 15, cursor: 'pointer', letterSpacing: '-0.01em',
            transition: 'opacity 0.2s, transform 0.2s',
            boxShadow: '0 4px 24px rgba(56,189,248,0.25)',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Book May {selectedDay} at {selectedTime} →
        </button>
        <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.28)', marginTop: 12, fontFamily: 'var(--font-body)' }}>
          30-min call · No commitment · Powered by Calendly
        </p>
      </div>
    </div>
  );
}

function Booking() {
  return (
    <section id="booking" style={{ padding: '120px 32px', position: 'relative' }}>
      <div className="glow-orb" style={{
        width: 700, height: 500, top: '10%', left: '50%',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 60, alignItems: 'center',
        }}>
          {/* Left: copy */}
          <div ref={useScrollAnimation()} className="fade-up">
            <p style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(56,189,248,0.8)',
              marginBottom: 14, fontFamily: 'var(--font-body)',
            }}>Book a Call</p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em',
              lineHeight: 1.1, marginBottom: 20,
            }}>
              Let's map your
              <span className="gradient-text"> business.</span>
            </h2>
            <p style={{
              fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75,
              fontFamily: 'var(--font-body)', marginBottom: 36, maxWidth: 420,
            }}>
              A 30-minute discovery call is all we need to identify your top automation
              opportunities and give you a clear path forward — at no cost.
            </p>

            {[
              'No obligation. Cancel anytime.',
              'We come prepared — no generic demos.',
              "You'll leave with at least one actionable insight.",
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: 100, flexShrink: 0,
                  background: 'linear-gradient(135deg,#38BDF8,#4F46E5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(56,189,248,0.3)',
                }}>
                  <CheckIcon size={12} style={{ color: '#fff' }} />
                </div>
                <span style={{ fontSize: 15.5, color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Right: custom calendar UI → Calendly popup on confirm */}
          <div ref={useScrollAnimation(0.1)} className="fade-up">
            <MockCalendar />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Booking });
