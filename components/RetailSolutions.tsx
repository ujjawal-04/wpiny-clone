import Image from 'next/image';

export default function RetailSolutions() {
  const types = [
    { title: 'Mass Market', img: '/images/retailer/mass-market-img.jpg' },
    { title: 'Luxury', img: '/images/retailer/luxury-img.jpg' },
    { title: 'Online', img: '/images/retailer/online-img.jpg' },
    { title: 'Boutique', img: '/images/retailer/boutique-img.jpg' },
    { title: 'Department Store', img: '/images/retailer/department-store-img.jpg' },
    { title: 'Specialty Store', img: '/images/retailer/specialty-store-img.jpg' }
  ];

  const whyPartner = [
    "Trend-driven product innovation",
    "Flexible inventory plans & smart distribution",
    "Dedicated account management",
    "Fast-track new product launches",
    "Custom merchandising & in-store marketing",
    "Responsible sourcing & sustainability practices"
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark-navy) 12rem, var(--bg-dark-navy) 100%)', 
      color: '#fff', 
      marginTop: '-1px',
      paddingBottom: '6rem'
    }}>
      <div className="container" style={{ padding: '10rem 4rem 0', maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1.5fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '5rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
            EXPLORE
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, lineHeight: '1.3', color: '#fff' }}>
            Retail Solutions Designed for Growth
          </h2>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Expand your shelves with trending, high-quality products delivered on time turning customers into regulars.
            </p>
          </div>
        </div>

        {/* Content Split: Left (Grid) / Right (List) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '5rem' }}>
          
          {/* Left Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem 1.5rem' }}>
            {types.map((type, i) => (
              <div key={i}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '1rem', overflow: 'hidden' }}>
                  <Image 
                    src={type.img} 
                    alt={type.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>
                  {type.title}
                </div>
              </div>
            ))}
          </div>

          {/* Right List */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2.5rem', color: '#fff' }}>
              Why Partner With Us
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {whyPartner.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  <span style={{ fontSize: '1.5rem', lineHeight: '0.8' }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
