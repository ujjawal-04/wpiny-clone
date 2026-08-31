import Image from 'next/image';
import Link from 'next/link';

export default function Divisions() {
  const divisions = [
    { title: 'Pets', img: '/images/tabs-bg.jpg' },
    { title: 'Accessories', img: '/images/tabs-bg-2.jpg' },
    { title: 'Footwear', img: '/images/panel-1.jpg' },
    { title: 'Children\'s Clothing', img: '/images/panel-2.jpg' },
    { title: 'Ladies\' Fashion', img: '/images/panel-3.jpg' },
    { title: 'Men\'s Fashion', img: '/images/image-break.jpg' }
  ];

  const faqs = [
    "What products can you help develop?",
    "Can you handle both small production runs?",
    "How involved can I be in the design process?",
    "How do you ensure product quality?",
    "What markets do you serve?"
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-dark-navy)' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/images/Rectangle-156.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(25, 36, 52, 0.95) 0%, rgba(25, 36, 52, 0.5) 100%)' }}></div>
        </div>
        
        {/* Vertical WIESNER text */}
        <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center', zIndex: 2, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5 }}>WIESNER</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingLeft: '8rem' }}>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', fontWeight: 600, marginBottom: '1.5rem', maxWidth: '700px' }}>
            Launch Best-Selling Private Label Products With a Partner Who Gets You to Market Faster
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
            Turn your ideas into must-have products that fly off the shelves with Wiesner&apos;s diverse divisions.
          </p>
          <Link href="/contact" className="btn-primary">Find Your Solution</Link>
        </div>
      </section>

      {/* Grid Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-dark-navy)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', lineHeight: '1.2' }}>Inspiring Private Label Solutions Across Industries</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Wiesner&apos;s diverse divisions offer specialized innovation and scale to create apparel, accessories, and home goods for your brand—from initial design to final fulfillment.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '2px' }}>
            {divisions.map((div, i) => (
              <div key={i} style={{ position: 'relative', height: '250px', backgroundColor: 'var(--bg-dark-navy)', overflow: 'hidden', group: 'true' }}>
                <Image src={div.img} alt={div.title} fill style={{ objectFit: 'cover', opacity: 0.7, transition: 'transform 0.5s ease' }} className="hover-zoom" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{div.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Something Great */}
      <section style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/images/footer-bg.jpg" alt="Background" fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(231, 232, 235, 1) 0%, rgba(231, 232, 235, 0.8) 50%, transparent 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, color: 'var(--bg-dark-navy)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', maxWidth: '500px', lineHeight: '1.1', fontWeight: 600 }}>Let&apos;s Build Something Great Together</h2>
          <p style={{ maxWidth: '500px', marginBottom: '2rem', color: '#555' }}>With a legacy dating back to 1971 and a passion for quality and innovation, we help you build elevated products your consumers will love today.</p>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>Let&apos;s Talk</Link>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ padding: '6rem 0', backgroundColor: '#e7e8eb', color: 'var(--bg-dark-navy)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>FAQ</div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 600 }}>Have Questions? We Have Answers</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                    <span>{faq}</span>
                    <span>{i === 0 ? '−' : '+'}</span>
                  </div>
                  {i === 0 && (
                    <div style={{ paddingBottom: '1.5rem', color: '#666', fontSize: '0.9rem', lineHeight: '1.8' }}>
                      We have 15+ divisions that work with a wide variety of products to meet apparel, footwear, pet, home, and health & beauty needs. Tell us about your idea, and we can help you build it.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Placeholder matches image layout */}
      <section className="footer-transition">
        <h2>From Idea to Retail Shelves: We&apos;re With You at Every Step</h2>
      </section>
    </main>
  );
}