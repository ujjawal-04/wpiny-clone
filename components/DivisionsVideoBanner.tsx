import Link from 'next/link';

export default function DivisionsVideoBanner() {
  return (
    <section style={{ position: 'relative', height: '70vh', minHeight: '500px', display: 'flex', alignItems: 'center', zIndex: 0, clipPath: 'inset(0)' }}>
      {/* Background Video Wrapper - FIXED */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Left 20% Solid Light Gray */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%', backgroundColor: '#eaebec', zIndex: 0 }}></div>
        
        {/* Right 80% Background Video */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80%', zIndex: 0 }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/media/division/2.mp4" type="video/mp4" />
          </video>
          {/* Blending gradient on the left edge, fading into a whitish transparency over the full video */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #eaebec 0%, rgba(234, 235, 236, 0.5) 20%, rgba(234, 235, 236, 0.2) 100%)' }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, paddingLeft: '15rem', width: '100%', maxWidth: '1800px' }}>
        <h2 style={{ fontSize: '3.5rem', lineHeight: '1.2', fontWeight: 400, marginBottom: '1.5rem', maxWidth: '800px', color: '#18273a' }}>
          Let's Build Something<br/>Great Together
        </h2>
        <p style={{ fontSize: '1rem', color: '#333', maxWidth: '700px', marginBottom: '2rem', lineHeight: '1.8' }}>
          With a legacy dating back to 1971 and a passion for quality and innovation,<br/>
          we'll help you build standout products your customers can't wait to buy.
        </p>
        <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', border: 'none', cursor: 'pointer', padding: '12px 2em', fontWeight: 500, fontSize: '1rem', backgroundColor: '#3d6898', color: '#fff' }}>
          Let's Talk
        </Link>
      </div>
    </section>
  );
}
