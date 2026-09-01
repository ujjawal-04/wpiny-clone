import Link from 'next/link';

export default function BrandSection() {
  return (
    <div style={{ position: 'relative', zIndex: 10, marginTop: '-8rem' }}>
      {/* Company Stats Section */}
      <section style={{ padding: '8rem 0 4rem', background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark-navy) 40%, var(--bg-dark-navy) 100%)' }}>
        <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 4rem' }}>
          {/* COMPANY Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '1rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>COMPANY</div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 600, lineHeight: '1.4', color: '#fff' }}>An Integrated Leader in Private<br/>Label Manufacturing</h2>
            <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.6' }}>We design, source, and distribute<br/>high-quality products for major retailers.</p>
            <div style={{ textAlign: 'right' }}>
              <Link href="/about">
                <button className="btn-primary" style={{ padding: '15px 0.8em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: 'var(--accent-blue)', color: '#fff' }}>Explore More About Us</button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'flex', width: '100%', border: '1px solid #d1d5db' }}>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-text">Divisions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20</div>
              <div className="stat-text">Licenses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-text">Product Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 4rem', display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '0rem', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>LICENSES</div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, lineHeight: '1.4', color: '#fff' }}>Exclusive Licensed Brands, <br/>Trusted by Major Retailers</h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.6' }}>We partner with globally recognized brands to<br/>bring licensed apparel, accessories, and home<br/>goods to market.</p>
          <div style={{ textAlign: 'right' }}>
             <button className="btn-primary" style={{ padding: '15px 0.8em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: 'var(--accent-blue)', color: '#fff' }}>Discover our Licenses</button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section style={{ padding: '4rem 0 8rem', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 4rem', display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>BRANDS</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: '1.4', color: '#fff' }}>Our Portfolio of Brands Delivering<br/>Tailored Products & Solutions</h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.6' }}>15 divisions covering multiple industries—<br/>designed for efficiency, speed, and scalability.</p>
          <div style={{ textAlign: 'right' }}>
           <button className="btn-primary" style={{ padding: '15px 0.8em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: 'var(--accent-blue)', color: '#fff' }}>Explore Our Divisions</button>
          </div>
        </div>
      </section>
    </div>
  );
}
