import Image from 'next/image';

export default function DivisionsGrid() {
  const divisions = [
    { title: 'Pets', img: '/images/division/1.jpg' },
    { title: 'Accessories', img: '/images/division/2.jpg' },
    { title: 'Footwear', img: '/images/division/3.jpg' },
    { title: 'Children\'s Clothing', img: '/images/division/4.jpg' },
    { title: 'Ladies\' Fashion', img: '/images/division/5.jpg' },
    { title: 'Men\'s Fashion', img: '/images/division/6.jpg' }
  ];

  return (
    <section style={{ 
      position: 'relative', 
      zIndex: 10, 
      padding: '8rem 0 6rem 0', 
      marginTop: '-4rem',
      background: 'linear-gradient(to bottom, transparent 0%, var(--bg-dark-navy) 20%, var(--bg-dark-navy) 100%)' 
    }}>
      <div className="container" style={{ maxWidth: '1600px', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '1rem', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', lineHeight: '1.2', fontWeight: 600, color: '#fff' }}>Inspiring Private Label Solutions<br/>Across Industries</h2>
          <p style={{ color: 'var(--text-main)', opacity: 0.9, fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px' }}>
            Wiesner's divisions combine specialized expertise<br /> and end-to-end capabilities to guide your product <br/>from initial design to final customers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.2rem' }}>
          {divisions.map((div, i) => (
            <div key={i} style={{ backgroundColor: 'transparent' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '500/267', overflow: 'hidden' }}>
                <Image 
                  src={div.img} 
                  alt={div.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '1rem 0' }}>
                <span style={{ fontWeight: 600, fontSize: '1.2rem', color: '#fff' }}>{div.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
