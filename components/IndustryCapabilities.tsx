'use client';

export default function IndustryCapabilities() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark-navy)', }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginLeft: '16rem', marginBottom: '8rem', maxWidth: '1600px', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#fff' }}>Brands Covering<br/>Every Industry & Market</h2>
        <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: '1.6' }}>Backed by strategic partnerships and global sourcing capabilities, our divisions deliver lifestyle-focused<br/> products that combine utility and emotion — <br/>designed for retailers who want to lead in every <br/>category.</p>
      </div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', marginBottom: '5rem' }}>
           <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>INDUSTRIES</div>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
             <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff' }}>Serving Retail, E-Commerce &<br/>Specialty Markets</h3>
             <p style={{ color: '#fff', fontSize: '0.9rem', lineHeight: '1.6' }}>Tailored solutions designed to meet the unique <br/>challenges and opportunities across diverse market<br/> segments</p>
           </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.2rem', width: '100%' }}>
          
          <div style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>Retail</h4>
            <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.5' }}>Comprehensive solutions for brick-and-mortar stores and retail chains</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Inventory management systems', 'Point-of-sale integration', 'Customer analytics', 'Optimization'].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1.2rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#fff', fontWeight: 600, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>E-Commerce</h4>
            <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.5' }}>Digital solutions powering online shopping experiences</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Payment processing', 'Order fulfillment', 'Digital storefront management', 'Customer engagement tools'].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1.2rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#fff', fontWeight: 600, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '3rem', backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#fff', fontWeight: 600 }}>Specialty Markets</h4>
            <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.5' }}>Tailored solutions for niche market segments</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Custom implementations', 'Specialized reporting', 'Industry compliance', 'Market-specific tools'].map((item, i) => (
                <li key={i} style={{ paddingLeft: '1.2rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#fff', fontWeight: 600, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
