import Image from 'next/image';

export default function ContactHero() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background Image - FIXED for Parallax */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Image 
          src="/images/contact/careers-hero-bg-1024x576.jpg.webp" 
          alt="Contact Hero" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority
        />
        {/* Dark overlay to make text readable */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(24, 39, 58, 0.7)' }}></div>
        {/* Bottom blending gradient to match other hero sections */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 70%)' }}></div>
      </div>
      
      {/* Vertical WIESNER text */}
      <div style={{ position: 'absolute', left: '3rem', top: '55%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2rem', letterSpacing: '0.2em', fontWeight: 600, opacity: 0.8, color: '#fff', fontStyle: 'normal' }}>WIESNER</span>
      </div>
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '12rem', width: '100%', maxWidth: '1800px' }}>
        <h1 style={{ fontSize: '4rem', lineHeight: '1.1', fontWeight: 500, marginBottom: '1.3rem', maxWidth: '1200px', color: '#fff' }}>
          Let's Make Something Great<br/>Together
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', lineHeight: '1.6' }}>
          Whether you have an idea, a question, or an opportunity, we're happy to hear from you.
        </p>
      </div>
    </section>
  );
}
