import Image from 'next/image';

export default function Brands() {
  const logos = [
    { name: 'Express', img: '/images/express-logo.png' },
    { name: 'Brookstone', img: '/images/brookstone-logo.png' },
    { name: 'Billabong', img: '/images/billabong-logo.png' },
    { name: 'MasterChef', img: '/images/masterchef-logo.png' }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/images/panel-3.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.95) 0%, rgba(25, 36, 52, 0.5) 100%)' }}></div>
        </div>
        
        {/* Vertical WIESNER text */}
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5 }}>WIESNER</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '8rem' }}>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', fontWeight: 600, marginBottom: '1.5rem', maxWidth: '700px' }}>
            Key License Product Makers
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            From beloved characters to iconic themes, our licensed offerings help retailers stand out and sell more.
          </p>
        </div>
      </section>

      {/* Logos Section */}
      <section style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', backgroundColor: 'var(--bg-gray)' }}>
          {logos.map((logo, i) => (
            <div key={i} style={{ height: '300px', display: 'flex', flexDirection: 'column', padding: '2rem', borderRight: '1px solid rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: 'auto' }}>{logo.name}</div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, color: '#000' }}>
                {logo.name} {/* Placeholder for image */}
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '100px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '20px', height: '2px', backgroundColor: '#fff' }}></div>
            <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }}></div>
            <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }}></div>
            <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }}></div>
            <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }}></div>
          </div>
          <div style={{ width: '100px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
        </div>
      </section>

      {/* Brands Covering Every Industry */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Brands Covering<br/>Every Industry & Market</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Backed by strategic partnerships and a global sourcing network, Wiesner delivers quality in the exact product format you need, utilizing and creatively designing to hone to the exact tone of our world class category partners.</p>
        </div>

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', marginBottom: '3rem' }}>
             <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-blue)' }}>CAPABILITIES</div>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
               <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Serving Retail, E-Commerce & Specialty Markets</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Wiesner's cross-category expertise ensures that deep and focused support for your particular market segment.</p>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '4px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Retail</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>The specific material chosen for brand and models to showcase on retail shelves.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Inventory management systems', 'Point-of-sale integration', 'Customer analytics', 'Optimization'].map((item, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                    <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '4px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>E-Commerce</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Digital solutions proven to perform in spaces & experiences.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Payment processing', 'Order fulfillment', 'Digital storefront management', 'Customer engagement tools'].map((item, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                    <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '4px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Specialty Markets</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Tailored tools built for market requirements.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Custom implementations', 'Specialized reporting', 'Industry compliance', 'Market-specific tools'].map((item, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                    <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Retail Solutions */}
      <section style={{ padding: '6rem 0 2rem', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container">
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>RETAIL SOLUTIONS</div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            
            <div>
              <div style={{ position: 'relative', height: '200px', marginBottom: '1.5rem' }}>
                <Image src="/images/mass-market-img.jpg" alt="Enterprise" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Enterprise Solutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Comprehensive resource management for mid to large tier businesses.</p>
            </div>

            <div>
              <div style={{ position: 'relative', height: '200px', marginBottom: '1.5rem' }}>
                <Image src="/images/luxury-img.jpg" alt="Analytics" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Analytics Platform</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Advanced data analysis and reporting dashboards for informed decision making.</p>
            </div>

            <div>
              <div style={{ position: 'relative', height: '200px', marginBottom: '1.5rem' }}>
                <Image src="/images/online-img.jpg" alt="Information" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Information Services</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Secure and reliable data processing tools.</p>
            </div>

          </div>

          <div style={{ padding: '4rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '100px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '20px', height: '2px', backgroundColor: '#fff' }}></div>
              <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '50%' }}></div>
            </div>
            <div style={{ width: '100px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          </div>
        </div>
      </section>

      {/* Footer CTA Placeholder matches image layout */}
      <section className="footer-transition">
        <h2>From Idea to Retail Shelves: We&apos;re With You at Every Step</h2>
      </section>
    </main>
  );
}