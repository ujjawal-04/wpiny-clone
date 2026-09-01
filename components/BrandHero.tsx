import Image from 'next/image';

export default function BrandHero() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background Image - FIXED for Parallax */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Image 
          src="/images/brand/licenses-hero-img-1024x683.jpg.webp" 
          alt="Key License Product Makers" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority
        />
        {/* Dark overlay to make text readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(24, 39, 58, 0.9) 10%, rgba(24, 39, 58, 0) 70%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(24, 39, 58, 0.9) 10%, rgba(24, 39, 58, 0) 70%)' }}></div>
       
        {/* Bottom blending gradient to match other hero sections */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 70%)' }}></div>
      </div>
      
      {/* Vertical WIESNER text */}
      <div style={{ position: 'absolute', left: '3rem', top: '58%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2rem', letterSpacing: '0.2em', fontWeight: 600, opacity: 0.8, color: '#fff', fontStyle: 'normal' }}>WIESNER</span>
      </div>
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '12rem', width: '100%', maxWidth: '1800px' }}>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: 500, marginBottom: '1.3rem', maxWidth: '1200px', color: '#fff' }}>
          Key License Product Makers
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '1200px', lineHeight: '1.6' }}>
          From beloved characters to iconic names, our licensed offerings help retailers stand out and sell more.
        </p>
      </div>
    </section>
  );
}
