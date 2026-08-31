import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100, 
      padding: '2rem 4rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: '#fff',
      backgroundColor: 'transparent'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        {/* Globe Logo Icon */}
        <Link href="/">
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.7)' }}></div>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <Link href="/about" style={{ opacity: 0.9, transition: 'opacity 0.2s' }}>About</Link>
          <Link href="/divisions" style={{ opacity: 0.9, transition: 'opacity 0.2s' }}>Divisions</Link>
          <Link href="/brands" style={{ opacity: 0.9, transition: 'opacity 0.2s' }}>Brands and Licenses</Link>
          <Link href="/retailers" style={{ opacity: 0.9, transition: 'opacity 0.2s' }}>Retailers</Link>
        </nav>
      </div>

      {/* CTA Button */}
      <div>
        <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', backgroundColor: 'rgba(61, 124, 201, 0.9)' }}>
          Get In Touch
        </Link>
      </div>
    </header>
  );
}