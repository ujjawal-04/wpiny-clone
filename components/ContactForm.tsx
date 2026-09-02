export default function ContactForm() {
  const inputStyle = {
    width: '100%',
    padding: '0.8rem 1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'none',
    color: '#fff',
    fontSize: '0.95rem',
    outline: 'none',
    borderRadius: '2px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '1.05rem',
    fontWeight: 600,
    marginBottom: '0.8rem',
    color: '#fff'
  };

  const asteriskStyle = {
    color: '#e57373', // Light muted red/orange
    marginLeft: '0.3rem'
  };

  return (
    <section style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      <div className="container" style={{ maxWidth: '1440px', padding: '0 4rem' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '2rem', paddingBottom: '1rem' }}>
          
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600, marginBottom: '4rem' }}>
              CONTACT FORM
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <label style={labelStyle}>First Name<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="First Name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="Last Name" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <label style={labelStyle}>Email<span style={asteriskStyle}>*</span></label>
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone Number<span style={asteriskStyle}>*</span></label>
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <label style={labelStyle}>Designation<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="Country" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Company<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="Company *" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>What Service are you Interested in?</label>
            <div style={{ position: 'relative' }}>
              <select style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                <option>General</option>
              </select>
              <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Message<span style={asteriskStyle}>*</span></label>
            <textarea rows={6} placeholder="Leave your message here" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>

          <div>
            <button type="button" className="btn-primary" style={{ padding: '12px 2.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
              Send Message
            </button>
          </div>

        </form>
          </div>
        </div>
      </div>
    </section>
  );
}
