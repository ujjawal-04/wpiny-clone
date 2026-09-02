import Link from 'next/link';
import React from 'react';

export default function RetailVideoBanner() {
  return (
    <section style={{ position: 'relative', height: '700px', display: 'flex', alignItems: 'center', zIndex: 0, clipPath: 'inset(0)' }}>
      {/* Background Video Wrapper - FIXED for Parallax effect */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Left 35% Solid Navy */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '35%', backgroundColor: 'var(--bg-dark-navy)', zIndex: 1 }}></div>
        
        {/* Right 65% Background Video */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '65%', zIndex: 0 }}>
           <video 
             autoPlay 
             muted 
             loop 
             playsInline 
             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
           >
             <source src="/media/retailer/retail-cta-video-bg.mp4" type="video/mp4" />
           </video>
           
           {/* Subtle dark tint over the video to improve text readability */}
           <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(24, 39, 58, 0.2)' }}></div>
        </div>
        
        {/* Smooth Gradient blending from Navy to Transparent */}
        <div style={{ position: 'absolute', left: '35%', top: 0, bottom: 0, width: '30%', background: 'linear-gradient(to right, var(--bg-dark-navy) 0%, transparent 100%)', zIndex: 2 }}></div>
      </div>
      
      {/* Content - Scrolls normally */}
      <div className="container" style={{ position: 'relative', zIndex: 3, paddingLeft: '4rem', width: '100%', maxWidth: '1440px' }}>
        <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 500, marginBottom: '2rem', maxWidth: '1200px', color: '#fff' }}>
          Ready To Stock Your Shelves With Winning Products?
        </h2>
        <Link href="/contact">
          <button className="btn-primary" style={{ padding: '12px 2em', fontSize: '1rem', fontWeight: 400, border: 'none', cursor: 'pointer', backgroundColor: '#3d6898', color: '#fff' }}>
            Book Your Free Retail Strategy Call
          </button>
        </Link>
      </div>
    </section>
  );
}
