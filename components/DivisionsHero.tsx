import Link from 'next/link';

export default function DivisionsHero() {
  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background Video (Fixed for Parallax) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/media/division/1.mp4" type="video/mp4" />
        </video>
        
        {/* Solid blue transparent overlay over the video */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(24, 39, 58, 0.65)' }}></div>
        {/* Bottom blending gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark-navy) 0%, transparent 70%)' }}></div>
      </div>
      
      {/* Vertical WIESNER text */}
      <div style={{ position: 'absolute', left: '3rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2rem', letterSpacing: '0.2em', fontWeight: 600, opacity: 0.8, color: '#fff', fontStyle: 'normal' }}>WIESNER</span>
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
          Launch Best-Selling Private Label Products With a Partner Who Gets You to Market Faster
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          fontWeight: 400,
          color: 'var(--text-main)', 
          maxWidth: '900px', 
          marginBottom: '1.5em' 
        }}>
          Turn your ideas into must-have products that fly off the shelves with Wiesner's diverse divisions.
        </p>
        <div>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem', backgroundColor: '#3b82f6', border: 'none', cursor: 'pointer' }}>
            Find Your Solution
          </Link>
        </div>
      </div>
    </section>
  );
}
