import React from 'react';

export default function AboutHero() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Video - FIXED for Parallax effect */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/media/about/1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay tint to make text readable */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(24, 39, 58, 0.6)' }}></div>
        
        {/* Bottom blending gradient to match other hero sections */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 70%)' }}></div>
      </div>
      
      {/* Vertical WIESNER text */}
      <div style={{ position: 'absolute', left: '3rem', top: '55%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2rem', letterSpacing: '0.2em', fontWeight: 600, opacity: 0.8, color: '#fff', fontStyle: 'normal' }}>WIESNER</span>
      </div>
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '12rem', width: '100%', maxWidth: '1800px' }}>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: 500, marginBottom: '1.3rem', maxWidth: '1200px', color: '#fff' }}>
          The Story Behind Wiesner Products<br/>Inc.
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', lineHeight: '1.6' }}>
          A legacy of innovation, quality, and excellence in private label manufacturing
        </p>
      </div>
    </section>
  );
}
