import Image from 'next/image';

export default function ContactMapSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-dark-navy)', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', padding: '4rem 2rem 3rem 2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
          Office:
        </h3>
        <p style={{ fontSize: '1rem', color: '#ccc' }}>
          1410 Broadway, 8th Floor, New York, NY 10018
        </p>
      </div>
      
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image 
          src="/images/division/location-map.jpg.webp" 
          alt="Office Locations Map" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>
    </section>
  );
}
