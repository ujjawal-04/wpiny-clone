import Image from 'next/image';
import Link from 'next/link';

export default function RetailHero() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Image - FIXED for Parallax effect */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
           <Image 
             src="/images/retailer/retailers-hero-img.jpg" 
             alt="Retailers Hero" 
             fill
             priority
             style={{ objectFit: 'cover' }}
           />
        </div>
        
        {/* Dark overlay tint to make text readable with a blue hue */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(28, 55, 90, 0.65)' }}></div>
        
        {/* Bottom blending gradient to match other hero sections */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 40%)' }}></div>
      </div>
      
      {/* Vertical WIESNER text */}
      <div style={{ position: 'absolute', left: '3rem', top: '48%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1rem', letterSpacing: '0.4em', fontWeight: 600, opacity: 0.9, color: '#fff' }}>WIESNER</span>
      </div>
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '10rem', width: '100%', maxWidth: '1800px' }}>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 400, marginBottom: '1.3rem', maxWidth: '1200px', color: '#fff' }}>
          Partner with a Trusted Supplier<br/>for Retail Success
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)', maxWidth: '1200px', lineHeight: '1.6', marginBottom: '2rem' }}>
          Wiesner offers private label solutions for retailers of all sizes. Our retail partners include Bealls, Burlington,<br/>
          Dicks Sporting, Home Goods, Macy's, Ross Stores, Sams Club, Target, TJ Max, Walmart, and Winners.
        </p>
        <Link href="/contact">
          <button className="btn-primary" style={{ padding: '12px 1.5em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
            Become a Retail Partner
          </button>
        </Link>
      </div>
    </section>
  );
}
