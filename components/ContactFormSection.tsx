export default function ContactFormSection() {
  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    backgroundColor: '#1c2b3e', // Dark navy input background
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '1.1rem',
    marginTop: '0.5rem'
  };

  const labelStyle = {
    display: 'block',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.05rem',
    marginBottom: '0.3rem'
  };

  const asteriskStyle = {
    color: '#d8a6a8', // Reddish pink asterisk
    marginLeft: '4px'
  };

  return (
    <section style={{ 
      position: 'relative', 
      zIndex: 10, 
      padding: '8rem 0 6rem 0', 
      marginTop: '-4rem',
      background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark-navy) 20%, var(--bg-dark-navy) 100%)'
    }}>
      <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', alignItems: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.95rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: '#fff' }}>
            CONTACT DETAILS
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#fff', textAlign: 'center' }}>
            Ready To Connect?
          </h2>
          <div style={{ fontSize: '1.05rem', color: '#ccc', textAlign: 'right' }}>
            We're Just a Message Away
          </div>
        </div>

        {/* Form Container */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <label style={labelStyle}>First Name<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="First Name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="Last Name" style={inputStyle} />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <label style={labelStyle}>Email<span style={asteriskStyle}>*</span></label>
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone Number<span style={asteriskStyle}>*</span></label>
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <label style={labelStyle}>Designation<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="Country" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Company<span style={asteriskStyle}>*</span></label>
              <input type="text" placeholder="Company *" style={inputStyle} />
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label style={labelStyle}>What Service are you Interested in?</label>
            <div style={{ position: 'relative' }}>
              <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                <option value="General">General</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Design">Design</option>
              </select>
              {/* Custom dropdown arrow */}
              <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#fff' }}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div>
            <label style={labelStyle}>Message<span style={asteriskStyle}>*</span></label>
            <textarea 
              rows={6} 
              placeholder="Leave your message here" 
              style={{ ...inputStyle, resize: 'vertical' }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '1rem' }}>
            <button type="button" style={{ 
              backgroundColor: '#4974a5', 
              color: '#fff', 
              border: 'none', 
              padding: '14px 28px', 
              fontSize: '1rem', 
              fontWeight: 500, 
              cursor: 'pointer',
            }}>
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
