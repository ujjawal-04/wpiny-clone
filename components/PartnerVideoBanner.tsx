'use client';

import Link from "next/link";

export default function PartnerVideoBanner() {
  return (
    <section style={{ position: 'relative', height: '800px', display: 'flex', alignItems: 'center', zIndex: 0, clipPath: 'inset(0)' }}>
      {/* Background Video Wrapper - FIXED */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Left 30% Solid Light Grey */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', backgroundColor: '#f2f4f6', zIndex: 0 }}></div>
        
        {/* Right 70% Background Video */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '70%', zIndex: 0 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            {/* Using a placeholder video, you can change to actual media later */}
            <source src="/media/about/2.mp4" type="video/mp4" />
          </video>
          {/* Blending gradient on the left edge of the video to make it seamless */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #f2f4f6 0%, rgba(242, 244, 246, 0.7) 20%, transparent 100%)' }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, paddingLeft: '15rem', width: '100%', maxWidth: '1800px' }}>
        <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 400, marginBottom: '1.8rem', maxWidth: '800px', color: '#1a2432' }}>
          Become Our Partner
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '800px', marginBottom: '2rem', lineHeight: '1.6' }}>
          Join forces with a team that has bold ideas, moves fast, thinks ahead, and delivers.
        </p>
        <Link href="/contact">
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '12px 1.5em', fontWeight: 400, fontSize: '1rem', backgroundColor: '#3d6898', color: '#fff' }}>
            Connect with us
          </button>
        </Link>
      </div>
    </section>
  );
}
