'use client';

import Link from 'next/link';

export default function AboutDivisionsGrid() {
  const divisions = [
    {
      title: 'Apparel',
      desc: 'We produce stylish collections that look great, fit well, and are ready to hit the shelves.'
    },
    {
      title: 'Footwear',
      desc: 'Light and comfortable, our shoes blend quality, bold designs and fresh colors.'
    },
    {
      title: 'Athleisure',
      desc: 'We design and manufacture functional and stylish activewear for workouts, weekends, and everything in between.'
    },
    {
      title: 'Accessories',
      desc: 'From functional bags to fashionable belts and scarves, our accessories are designed to complete every outfit.'
    },
    {
      title: 'Pet Products',
      desc: 'We specialize in safe and comfortable pet products, from fun outfits to everyday accessories.'
    },
    {
      title: 'Kitchen',
      desc: 'From everyday essentials to stylish decor, our kitchen products look and work well, making cooking and living easier and more pleasant.'
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-dark-navy)', color: '#fff', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4rem' }}>
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gap: '2rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>
            OUR DIVISIONS
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, lineHeight: '1.3', color: '#fff' }}>
            How Wiesner Products Inc.<br/>Serves Diverse Markets
          </h2>
          <div style={{ textAlign: 'right' }}>
            <Link href="/divisions">
             <button className="btn-primary" style={{ padding: '12px 1.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: 'var(--accent-blue)', color: '#fff' }}>
                Explore Our Divisions
              </button>
            </Link>
          </div>
        </div>

        {/* Division Label */}
        <div style={{ fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', fontWeight: 600, marginBottom: '3rem' }}>
          DIVISION
        </div>

        {/* 3x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem 6rem' }}>
          {divisions.map((div, i) => (
            <div key={i}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#fff' }}>
                {div.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                {div.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
