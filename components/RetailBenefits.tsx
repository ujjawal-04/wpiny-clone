import Image from 'next/image';
import Link from 'next/link';

export default function RetailBenefits() {
  const benefits = [
    { 
      title: 'Innovation', 
      desc: 'Inspired by innovative concepts, our products meet the latest customer demands and attract more buyers.', 
      img: '/images/innovation-img.jpg' 
    },
    { 
      title: 'Efficiency', 
      desc: 'Wiesner partnerships stand for fast production, adaptable inventory options, and reliable order delivery.', 
      img: '/images/efficiency-img.jpg' 
    },
    { 
      title: 'Global Reach', 
      desc: 'Our wide network helps you grow in local, regional, and international markets.', 
      img: '/images/global-reach-img.jpg' 
    }
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark-navy)', color: '#fff', overflow: 'hidden' }}>
      
      {/* Top Header Row - Constrained */}
      <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 2fr 1fr', gap: '2rem', alignItems: 'flex-start', marginBottom: '5rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
            TRUSTED SOLUTIONS
          </div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: '1.3', color: '#fff' }}>
            Why Leading Retailers Choose Us
          </h2>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, maxWidth: '400px' }}>
              We are well-known for dependable supply, clear communication, and strong support.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Link href="/contact">
              <button className="btn-primary" style={{ padding: '10px 2em', fontSize: '0.95rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 3-Column Grid - Bleeds to the right edge */}
      <div style={{ paddingLeft: 'max(4rem, calc((100vw - 1440px) / 2 + 4rem))', paddingRight: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '1.5rem', borderRight: i !== 2 ? '1px solid rgba(0,0,0,0.5)' : 'none' }}>
                <Image 
                  src={b.img} 
                  alt={b.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div style={{ paddingRight: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#fff' }}>
                  {b.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.90rem', lineHeight: '1.6', margin: 0 }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
