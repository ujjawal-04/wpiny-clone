import Link from "next/link";

export default function VideoBanner() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', zIndex: 0, clipPath: 'inset(0)' }}>
      {/* Background Video Wrapper - FIXED */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Left 30% Solid Navy */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', backgroundColor: 'var(--bg-dark-navy)', zIndex: 0 }}></div>
        
        {/* Right 70% Background Video */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '70%', zIndex: 0 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/media/hero-section/2.mp4" type="video/mp4" />
          </video>
          {/* Blending gradient on the left edge of the video to make it seamless */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-dark-navy) 0%, rgba(24, 39, 58, 0.4) 30%, transparent 100%)' }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, paddingLeft: '15rem', width: '100%', maxWidth: '1800px' }}>
        <h2 style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: 400, marginBottom: '1.5rem', maxWidth: '800px', color: '#fff' }}>
          From Idea to Retail Shelves<br/>– We're With You at Every Step
        </h2>
        <p style={{ fontSize: '1rem', color: '#d1d5db', maxWidth: '400px', marginBottom: '2rem', lineHeight: '1.6' }}>
          End-to-end expertise to bring your vision<br/>to market faster and more efficiently.
        </p>
        <Link href="/contact">
          <button className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '12px 1em', fontWeight: 400, fontSize: '1.2rem', backgroundColor: '#3d6898', color: '#fff' }}>
            Let's Talk
          </button>
        </Link>
      </div>
    </section>
  );
}
