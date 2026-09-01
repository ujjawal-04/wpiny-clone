import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/media/hero-section/1.mp4" type="video/mp4" />
        </video>
        
        {/* Solid blue transparent overlay over the video */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(24, 39, 58, 0.65)' }}></div>
        {/* Bottom blending gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 70%)' }}></div>
      </div>
      
      {/* Decorative W Logo (scrolling with text) */}
      <div style={{ position: 'absolute', right: '0%', bottom: '-8%', height: '70%', opacity: 0.2, zIndex: 1 }}>
        <img src="/images/hero-section/hero-logo-deco.png" alt="" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
      </div>
      
      {/* Vertical WIESNER text */}
      <div style={{ position: 'absolute', left: '3rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2rem', letterSpacing: '0.2em',fontWeight: 600, opacity: 0.8, color: '#fff', fontStyle: 'normal' }}>WIESNER</span>
      </div>

      <div style={{ position: 'relative', zIndex: 2, paddingLeft: '15rem', color: '#fff', width: '100%', maxWidth: '1440px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          lineHeight: '1.1', 
          fontWeight: 500, 
          letterSpacing: '-0.023em',
          marginBottom: '0.5em', 
          maxWidth: '1000px' 
        }}>
          From Factory Floor to Store Door —<br/>A Manufacturer You Can Trust
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.6',
          fontWeight: 400,
          color: 'var(--text-main)', 
          maxWidth: '800px', 
          marginBottom: '1.5em' 
        }}>
          One partner for design, sourcing, and delivery – we make your vision a reality
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '10px 1.1em', fontSize: '1.2rem', fontWeight: 300 }}>Start Your Journey</button>
          <button className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid #fff', cursor: 'pointer', padding: '10px 1.1em', fontSize: '1.2rem', fontWeight: 300 }}>Explore Our Categories</button>
        </div>
      </div>
    </section>
  );
}
