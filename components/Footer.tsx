import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 10, backgroundColor: '#1e293b', color: '#94a3b8', padding: '6rem 2rem 2rem', fontSize: '0.85rem' }}>
      <div className="container" style={{ maxWidth: '1800px', margin: '0 auto', padding: 0 }}>
        
        {/* Top Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '4rem', marginBottom: '4rem' ,}}>
          {/* Column 1: Newsletter Text */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Newsletter</h4>
            <p style={{ lineHeight: '1.6', maxWidth: '600px' }}>
              If you want to keep up to date with all our latest information,<br/>
              enter your email to be added to our mailing list.
            </p>
          </div>

          {/* Column 2: Newsletter Input */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <form style={{ display: 'flex', width: '100%', maxWidth: '400px' }}>
              <input 
                type="email" 
                placeholder="email@webmail.com" 
                style={{ 
                  flex: 1, 
                  padding: '1rem 1.5rem', 
                  backgroundColor: '#334155', 
                  border: 'none', 
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.9rem'
                }} 
              />
              <button 
                type="button" 
                style={{ 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  backgroundColor: '#3b82f6', 
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                Send
              </button>
            </form>
          </div>

          {/* Column 3: Address */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#fff', lineHeight: '1.6' }}>
              1410 Broadway, 8th Floor,<br/>
              New York, NY 10018
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '4rem', marginBottom: '2rem' }}>
          {/* Column 1 & 2: Links */}
          <div style={{ display: 'flex', gap: '6rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <Link href="/retailers" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Retailers</Link>
              <Link href="/about" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>About</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <Link href="/licenses" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Licenses</Link>
              <Link href="/divisions" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Divisions</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <Link href="/contact" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Contact</Link>
            </div>
          </div>
          
          <div></div>

          {/* Column 3: Social */}
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1rem', marginLeft: '20rem', textAlign: 'left', maxWidth: '200px' }}>
              Follow us on our Social network Accounts on the web:
            </p>
            <div style={{ display: 'flex', gap: '1.5rem',  alignItems: 'left' }}>
              <span style={{ color: '#fff', fontSize: '1.2rem',marginLeft: '20rem', fontWeight: 600, cursor: 'pointer' }}>in</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer' }}>f</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff' }}>2026 © Digital Silk. All Rights Reserved.</div>
          <div style={{ color: '#fff' }}>Web Design by <span style={{ fontWeight: 600 }}>Digital Silk</span></div>
        </div> */}

      </div>
    </footer>
  );
}