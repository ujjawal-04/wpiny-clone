import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-dark-navy)', color: 'var(--text-muted)', padding: '6rem 4rem 2rem', fontSize: '0.85rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: 0 }}>
        
        {/* Left Side: Newsletter and Links */}
        <div>
          {/* Newsletter */}
          <div style={{ marginBottom: '4rem' }}>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1rem' }}>Newsletter</h4>
            <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>Sign up to be the first to know about our latest releases, events, and other news directly to your inbox.</p>
            <form style={{ display: 'flex' }}>
              <input 
                type="email" 
                placeholder="Email Address or Username" 
                style={{ 
                  flex: 1, 
                  maxWidth: '300px',
                  padding: '0.8rem 1rem', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  border: 'none', 
                  color: '#fff',
                  outline: 'none'
                }} 
              />
              <button 
                type="button" 
                className="btn-primary" 
                style={{ padding: '0.8rem 2rem', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
              >
                Send
              </button>
            </form>
          </div>

          {/* Links */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/retailers" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Retailers</Link>
              <Link href="/about" style={{ color: 'var(--text-main)', fontWeight: 500 }}>About</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/brands" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Licenses</Link>
              <Link href="/divisions" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Divisions</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/contact" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Contact</Link>
            </div>
          </div>
        </div>

        {/* Right Side: Address & Social */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: 'var(--text-main)', fontWeight: 600 }}>Global Headquarters</p>
            <p>1370 Broadway, 11th Floor<br/>New York, NY 10018</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: 'var(--text-main)', fontWeight: 600 }}>Policies & Terms | Social</p>
            <p style={{ maxWidth: '250px' }}>Review our terms. Social connections are across the web.</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer' }}>in</div>
            <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer' }}>ig</div>
            <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', cursor: 'pointer' }}>f</div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingLeft: 0, paddingRight: 0 }}>
        <div>© 2024 Digital Silk. All Rights Reserved.</div>
        <div>Web Design by Digital Silk</div>
      </div>
    </footer>
  );
}